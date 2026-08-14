# onerate-docs

The OneRate **end-user** documentation — the site served at <https://docs.onerate.travel>.

It is written for the people who use the portal: agency owners, admins, agents, and the customers
an agency invites. It is not contributor documentation. The spec, the ADRs and the roadmap live in
[`onerate-travel/onerate-app`](https://github.com/onerate-travel/onerate-app) and stay there.

Split out of the product monorepo for the reason `docs/ADR-0009-landing-repo-split.md` records for
the promo page, and on the same evidence: this is a content artifact with no place in the
dependency graph, and a wording fix should not wait four minutes behind a miniflare suite and a
Playwright booking flow. See `docs/ADR-0012-docs-site.md` in that repo.

## Layout

| Path | What it is |
| --- | --- |
| `src/content/docs/en/` | **the English pages** — the default locale |
| `src/content/docs/tr/`, `bg/`, `hu/`, `it/`, `pl/`, `ro/` | **the six translations** — one file per English file, same name |
| `src/content/i18n/bg.json` | Starlight's UI strings for the one locale it does not ship them for |
| `astro.config.mjs` | locales, the sidebar (one definition serves all seven languages), the site URL |
| `src/styles/onerate.css` | the brand accent, carried over from the promo page |
| `test/links.test.js` | checks the **built** site: every internal link, every anchor, every locale complete |
| `wrangler.jsonc` | the assets-only Worker that serves `docs.onerate.travel` |
| `.github/workflows/deploy.yml` | `staging` → a preview URL, `main` → production |

## Working on it

```bash
npm install
npm run dev      # http://localhost:4321 — hot reload
```

Before pushing:

```bash
npm run build    # required: the tests read dist/, not the Markdown
npm test
npm run check    # astro check — types and the content schema
```

`npm test` deliberately does **not** build for you. It asserts `dist/` is non-empty and fails with
a message telling you to build, because a link checker that runs over zero files passes every
assertion it has.

## Adding a page

1. Write `src/content/docs/en/<section>/<name>.md` with `title` and `description` frontmatter.
2. Write `src/content/docs/tr/<section>/<name>.md` — **the same path**. That is what pairs the two
   languages, and the test suite fails if one is missing.
3. Add `{ slug: '<section>/<name>' }` to the sidebar in `astro.config.mjs`, with a `translations`
   entry on its group. The slug carries **no** locale prefix — Starlight resolves it per reader.
4. Build and test.

## Deploying

**A push to `main` deploys**, after the full gate. A preview is dispatched by hand instead, since
this repo has no `staging` branch. Either way the gate runs before anything publishes.

Unlike `onerate-travel/onerate-app`, which went back to `workflow_dispatch` only — its gate is far
heavier and a red one there blocked shipping entirely.

```bash
gh workflow run deploy.yml --ref staging -f environment=staging   # a preview URL
gh workflow run deploy.yml --ref main    -f environment=production # docs.onerate.travel
```

Production refuses to run from any ref but `main`, loudly.

### From a laptop, when Actions cannot run

```bash
make help              # every target, with what it does
make deploy-staging    # a preview URL, live route untouched
make deploy-prod       # docs.onerate.travel
make smoke             # verify what is actually live
```

`make` is the path to use, not the raw `npm run deploy:*` scripts. Those scripts are the bare
wrangler calls; the Makefile runs the same gate CI runs and refuses on three facts a laptop cannot
otherwise promise — a clean working tree, the right branch, and that branch pushed. Deploying
without them ships whatever happens to be on disk with nothing recording what was shipped.

`make smoke` is the half that the deploy log cannot give you. It asserts both locales serve, `/tr/`
really is Turkish, and — the one this repo can check and the landing repo cannot — that a mistyped
path returns a real **404** rather than 200 plus the home page.

## Two things that will look wrong and are not

1. **The tests read `dist/`, not the Markdown sources.** A test over the sources would only confirm
   that the text I wrote is the text I wrote. The failures that actually happen here — a link to a
   renamed page, an anchor to a re-worded heading, a page that exists in one language only — are
   only visible in the build output.

2. **Turkish headings beginning with `İ` produce an id you cannot type.** JavaScript lowercases
   `İ` to `i` + U+0307 (a combining dot above), so `## İki adımlı doğrulama` becomes
   `id="i̇ki-adımlı-doğrulama"` — which looks identical to `iki-…` in every editor and is not.
   Do not hand-write a cross-page anchor into such a heading; link to the page and name the section
   in the sentence. The anchor test catches it if you forget.
