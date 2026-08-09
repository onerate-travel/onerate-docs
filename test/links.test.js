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
const LOCALES = ['en', 'tr'];

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

describe('the two locales', () => {
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
    const [en, tr] = LOCALES.map(pagesOf);
    expect({ missingInTr: en.filter((p) => !tr.includes(p)), missingInEn: tr.filter((p) => !en.includes(p)) })
      .toEqual({ missingInTr: [], missingInEn: [] });
  });

  it('are both reachable for every sidebar entry', () => {
    // Every slug named in astro.config.mjs must exist as a real page in BOTH locales. A typo here
    // is not a build error: Starlight resolves the slug against the default locale and the Turkish
    // side quietly falls back.
    const config = readFileSync(join(ROOT, 'astro.config.mjs'), 'utf8');
    const slugs = [...config.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);
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
