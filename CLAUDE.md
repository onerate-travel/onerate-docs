# onerate-docs — Agent Instructions

The OneRate **end-user** documentation site, served at `docs.onerate.travel`. Astro + Starlight,
fully bilingual. Split out of `suphero/onerate-app` — see `docs/ADR-0012-docs-site.md` there.

## What belongs here, and what does not

This site documents **the portal as a user meets it**. Screens, actions, the messages the product
shows, and what to do about them.

It does **not** document the system. No architecture, no adapter contract, no D1, no saga
internals, no phase plan, no roadmap. Those live in `ONERATE_BUILD_BRIEF.md`, `docs/ADR-*.md` and
`ROADMAP.md` in the product repo, and duplicating any of it here creates a second copy that goes
stale silently — with the stale copy being the public one.

The dividing line: **if the reader could not act on it from the portal, it is not for this repo.**

## Accuracy — the Iron Law

```text
NO CLAIM ABOUT THE PRODUCT WITHOUT READING THE PRODUCT
```

Before writing that a screen does something, read it in `suphero/onerate-app`:

- `apps/web/src/locales/en.json` and `tr.json` — **the canonical source of terminology.** Every
  term this site uses must be the term the portal uses, in that language. `tr.json` says
  "İki adımlı doğrulama"; writing "iki faktörlü kimlik doğrulama" here invents a second name for
  one feature and the reader loses.
- `apps/web/src/router.tsx` and `apps/web/src/screens/` — what exists and where it is.
- `packages/auth/src/policy.ts` — the role/action matrix. `start/roles.md` is a rendering of this
  file; if they disagree, the file is right.
- `ONERATE_BUILD_BRIEF.md` §4, §8, §9 — personas, the search pipeline and "cheapest is a claim you
  must be able to defend", the booking saga and its status machine.

Documenting a behaviour that does not exist is worse than omitting it: a user who follows it files
a support ticket about a feature nobody built.

## TDD — the Iron Law

```text
NO PRODUCTION CODE WITHOUT A FAILING TEST FIRST
```

Red → Green → Refactor. Every bug fix starts with a failing regression test.

`test/links.test.js` reads the **shipped** `dist/`, never the Markdown sources — the same choice
`onerate-landing/test/lang.test.js` makes, for the same reason. It has already earned its place: it
caught a Turkish anchor that resolved to nothing, in a build that was otherwise green.

Run `npm run build` before `npm test`. The suite asserts `dist/` is non-empty rather than passing
vacuously over an empty directory.

## Language conventions

- Code, comments, commits, config, this file, `README.md`: **English**.
- Page content: **fully bilingual, English default, Turkish second** — matching the product's own
  rule (`onerate-app/CLAUDE.md`, "Language conventions").
- **An English page without its Turkish counterpart ships a half-translated site**, and it does so
  invisibly: Starlight falls back to the default locale, so the Turkish reader gets a complete
  English page with a small notice and the build stays green. The locale-parity test is what makes
  this a failure instead of a silent regression. Keep it.
- Turkish is a translation of the *meaning*, not of the sentence. Match the portal's Turkish
  copy for anything the reader will see on screen.
- Amounts render `tr-TR` (`1.250,00`) in both languages — that is what the portal shows.

## Three things that look wrong and are not

1. **The tests read `dist/`, not `src/`.** See above. A source-level test asserts its own literal.

2. **Turkish headings starting with `İ` get an id you cannot type.** `String.prototype.toLowerCase`
   maps `İ` to `i` + U+0307, so `## İki adımlı doğrulama` yields `id="i̇ki-adımlı-doğrulama"`,
   visually identical to `iki-…`. Never hand-write a cross-page anchor into one: link to the page
   and name the section in prose. The anchor test is the backstop, not the plan.

3. **Sidebar slugs in `astro.config.mjs` carry no locale prefix.** `slug: 'search/results'`, never
   `'en/search/results'` — Starlight resolves it to the reader's language. A prefixed slug pins
   every reader to English and does not fail the build.

## Deploy

Cloudflare **Workers static assets**, not Pages — unlike `onerate-landing`, which is Pages only
because it was created by Direct Upload and Cloudflare does not allow such a project to become
Git-connected afterwards (ADR-0009 §2). That constraint binds an existing project; this one was
new, so the choice was free.

`not_found_handling: "404-page"`, never `"single-page-application"` — the SPA setting answers every
mistyped URL with 200 and the home page, which is the exact failure ADR-0009 §3 documents.

**Nothing deploys on a push.** `.github/workflows/deploy.yml` has no push trigger at all, mirroring
`suphero/onerate-app`'s ci.yml: every deploy is an explicit `workflow_dispatch` with an
`environment`, and production refuses to run from any ref but `main`.
`environment=staging` → preview URL, `environment=production` → `docs.onerate.travel`. Both run the
full gate first.

## Commits

Conventional Commits. Run `npm run build && npm test && npm run check` before pushing.

Nothing runs on a push, so a green push proves nothing — the first thing that would tell you the
suite is red is a deploy you dispatched on purpose. Run it yourself.
