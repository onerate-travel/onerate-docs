import { describe, expect, it } from 'vitest';
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * These tests run against `dist/` — the SHIPPED site — not against the Markdown sources.
 *
 * That is the whole point, and it is the same choice `onerate-landing/test/lang.test.js` makes for
 * the same reason. A test that re-parsed the Markdown would be checking that the text I wrote is
 * the text I wrote. Checking the build output catches the class of failure that actually happens
 * here: a cross-reference to a page that was renamed, an anchor to a heading whose wording changed,
 * and a page that exists in one language and not the other. All three are invisible in review and
 * all three are only ever found by a reader.
 *
 * Requires `npm run build` first. `npm test` does not run it for you — the failure below says so
 * rather than silently passing on an empty directory, which is the one way a link checker can lie.
 */

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const DOCS = join(ROOT, 'src/content/docs');
const CONFIG = readFileSync(join(ROOT, 'astro.config.mjs'), 'utf8');

/**
 * The locales, DERIVED from `astro.config.mjs` rather than listed here.
 *
 * It was a literal `['en', 'tr']`, which was honest at two and became a liability at seven: adding
 * a language would have left this file still checking the old set, so the new locale's pages could
 * be missing entirely and every assertion below would pass. The parity test in particular is only
 * as good as the list it iterates.
 *
 * Deriving it means the failure mode inverts — a language added to the config is checked from that
 * moment, and a language REMOVED from the config stops being checked without an edit here either.
 * The `length` guard below is what stops a changed config format from emptying the set silently.
 *
 * `\s+`, not a counted indent: the shape of the entry is what identifies a locale, and coupling
 * the match to Prettier's current indent width would turn a reformat into an empty locale set.
 * The guard would catch that — but a guard that fires on a formatting change is a guard that
 * trains you to ignore it.
 */
const LOCALES = [...CONFIG.matchAll(/^\s+(\w{2}): \{ label: /gm)].map((match) => match[1]);

function walk(dir, ext) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path, ext) : path.endsWith(ext) ? [path] : [];
  });
}

describe('the built site', () => {
  const pages = walk(DIST, '.html');

  it('has been built', () => {
    // A link checker over zero files passes every assertion. Fail loudly instead.
    expect(pages.length, 'run `npm run build` before `npm test`').toBeGreaterThan(0);
  });

  // href="..." on anchors only. Starlight also emits <link rel> and <script src>; those are its
  // own output, not something a writer here can break.
  const linksOf = (html) => [...html.matchAll(/<a\b[^>]*?href="([^"]+)"/g)].map((m) => m[1]);
  const idsOf = (html) => new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]));

  /** Resolve a site-absolute path the way a static host serves it. */
  function resolveTarget(pathname) {
    const clean = decodeURIComponent(pathname).replace(/^\//, '').replace(/\/$/, '');
    const direct = join(DIST, clean);
    if (clean && existsSync(direct) && statSync(direct).isFile()) return direct;
    const asDirectory = join(DIST, clean, 'index.html');
    return existsSync(asDirectory) ? asDirectory : null;
  }

  it('has no internal link pointing at a page that does not exist', () => {
    const broken = [];
    for (const page of pages) {
      for (const href of linksOf(readFileSync(page, 'utf8'))) {
        // Off-site, and in-page fragments which the anchor test below covers.
        if (!href.startsWith('/') || href.startsWith('//')) continue;
        const [pathname] = href.split('#');
        if (!resolveTarget(pathname)) broken.push(`${relative(DIST, page)} → ${href}`);
      }
    }
    expect(broken).toEqual([]);
  });

  it('has no internal link pointing at an anchor that does not exist', () => {
    // Turkish headings slug to non-ASCII ids (`#neden-bu-tedarikçi`). Hand-written anchors into
    // them are the likeliest thing in this repo to be subtly wrong, and a wrong one fails silently
    // in a browser — the page loads, it just does not scroll.
    const broken = [];
    for (const page of pages) {
      for (const href of linksOf(readFileSync(page, 'utf8'))) {
        if (!href.startsWith('/') || href.startsWith('//') || !href.includes('#')) continue;
        const [pathname, fragment] = href.split('#');
        if (!fragment) continue;
        const target = resolveTarget(pathname);
        if (!target) continue; // already reported by the test above
        if (!idsOf(readFileSync(target, 'utf8')).has(decodeURIComponent(fragment))) {
          broken.push(`${relative(DIST, page)} → ${href}`);
        }
      }
    }
    expect(broken).toEqual([]);
  });
});

describe('the site root', () => {
  // Neither locale sits at the root, so Starlight builds no `dist/index.html` — `/` is a real 404
  // and stays one until something redirects it. That is not a corner case: `docs.onerate.travel`
  // with nothing after it is what a person types, and what onerate-landing links to.
  //
  // It shipped broken. The smoke target printed "ok  / -> 404 (a redirect to /en/ is expected)" —
  // it echoed the status code beside the word "ok" without ever comparing them. A check that
  // reports the value it did not assert on is worse than no check, because it is read as one.
  // Hence this test, which asserts.
  const redirects = join(DIST, '_redirects');

  it('ships a _redirects file', () => {
    expect(existsSync(redirects), 'public/_redirects must be copied into dist/ by the build').toBe(true);
  });

  it('sends / to the default locale', () => {
    const rules = readFileSync(redirects, 'utf8')
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith('#'));
    const root = rules.find((rule) => rule.split(/\s+/)[0] === '/');
    expect(root, `no rule for '/' among: ${rules.join(' | ')}`).toBeDefined();

    const [, destination, status] = root.split(/\s+/);
    expect(destination).toBe('/en/');
    // 302, not 301. ROADMAP D4 keeps changing the default locale on the table, and a 301 is cached
    // by browsers for a long time with no way to reach the ones that cached it.
    expect(status).toBe('302');
  });

  it('ships robots.txt pointing at the sitemap the build emits', () => {
    // `site` in astro.config.mjs exists so Starlight builds the sitemap — but a sitemap nothing
    // announces is a file, not a signal. robots.txt is the one place every crawler looks for it,
    // so it must ship, and the URL it names must be the file the build actually produced: a
    // pointer at a renamed sitemap fails nowhere here and surfaces weeks later in Search Console.
    const robots = join(DIST, 'robots.txt');
    expect(existsSync(robots), 'public/robots.txt must be copied into dist/ by the build').toBe(true);

    const sitemap = readFileSync(robots, 'utf8').match(/^Sitemap:\s*(\S+)\s*$/m)?.[1];
    expect(sitemap, 'robots.txt must carry a Sitemap: line').toBeDefined();
    expect(sitemap).toBe('https://docs.onerate.travel/sitemap-index.xml');
    expect(existsSync(join(DIST, 'sitemap-index.xml')), 'the sitemap robots.txt names must exist in dist/').toBe(true);
  });
});

describe('every locale', () => {
  it('is discovered from the config, so this suite cannot check a stale list', () => {
    // Without this, a changed config format yields zero locales and every test below passes over
    // an empty set — the same vacuous-green failure the `dist/` emptiness check exists for.
    expect(LOCALES.length, `parsed no locales out of astro.config.mjs`).toBeGreaterThan(1);
    expect(LOCALES).toContain('en');
  });
});

describe('the locales', () => {
  // `onerate-landing/CLAUDE.md`: "A `data-en` span without its `data-tr` sibling ships a
  // half-translated page." Same rule, one level up — here the unit is a page, not a span.
  //
  // This matters more than it looks. Starlight FALLS BACK to the default locale for a missing
  // translation, so a Turkish reader following a Turkish sidebar link would land on a fully
  // English page with a small notice. The site would look complete and build green.
  const pagesOf = (locale) =>
    [...walk(join(DOCS, locale), '.md'), ...walk(join(DOCS, locale), '.mdx')]
      .map((p) => relative(join(DOCS, locale), p).replace(/\.mdx?$/, ''))
      .sort();

  it.each(LOCALES)('%s has content', (locale) => {
    expect(pagesOf(locale).length).toBeGreaterThan(0);
  });

  it('contain exactly the same set of pages', () => {
    // Compared against ENGLISH, the default locale, rather than pairwise: English is what a missing
    // page falls back to, so it is the set every other language owes a translation of. Reported per
    // locale so one language missing one page names both, instead of "the sets differ".
    const reference = pagesOf('en');
    const gaps = {};
    for (const locale of LOCALES.filter((l) => l !== 'en')) {
      const pages = pagesOf(locale);
      const missing = reference.filter((page) => !pages.includes(page));
      const spare = pages.filter((page) => !reference.includes(page));
      if (missing.length || spare.length) gaps[locale] = { missing, spare };
    }
    expect(gaps).toEqual({});
  });

  it('are all reachable for every sidebar entry', () => {
    // Every slug named in astro.config.mjs must exist as a real page in EVERY locale. A typo here
    // is not a build error: Starlight resolves the slug against the default locale and the other
    // languages quietly fall back.
    const slugs = [...CONFIG.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);
    expect(slugs.length).toBeGreaterThan(0);

    const missing = [];
    for (const slug of slugs) {
      for (const locale of LOCALES) {
        const base = join(DOCS, locale, slug);
        if (!existsSync(`${base}.md`) && !existsSync(`${base}.mdx`)) missing.push(`${locale}/${slug}`);
      }
    }
    expect(missing).toEqual([]);
  });
});
