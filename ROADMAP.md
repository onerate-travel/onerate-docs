# onerate-docs — open work

Open items only, in priority order, each with the test scenarios that close it. A closed item is
**deleted** from this file, never ticked off; the history lives in git.

---

## D1 — Owner actions before this site can go live

Not code. Nothing below can be done from this repo, and the site is not reachable until all three
are.

1. **Create the GitHub repository** `suphero/onerate-docs` (private) and push `main`.
2. **Create a Cloudflare API token** scoped to `Account · Workers Scripts · Edit` on this account
   and nothing else, and set `CLOUDFLARE_API_TOKEN` / `CLOUDFLARE_ACCOUNT_ID` as repository
   secrets.

   **Do not reuse the monorepo's token.** ADR-0009 §2 rejected exactly that for the landing repo:
   that token also carries `D1: Edit`, so a repo that publishes static HTML would gain the ability
   to run migrations against production D1. The same argument applies here unchanged.

   It must also not reuse the landing repo's token, which is `Pages: Edit` — the wrong product for
   an assets-only Worker.
3. **Add the `docs.onerate.travel` custom domain** to the `onerate-docs` Worker. `wrangler.jsonc`
   declares the route; the hostname still has to exist in DNS on the `onerate.travel` zone.

**Acceptance:** `curl -sS https://docs.onerate.travel/` returns 200 and the English home page;
`curl -sS https://docs.onerate.travel/tr/` returns the Turkish one; a mistyped path returns **404**
(not 200 — see `wrangler.jsonc`, and ADR-0009 §3 for why the distinction is load-bearing).

---

## D2 — The landing page link is one-way

`onerate-landing/public/index.html` now links to `docs.onerate.travel`. Nothing links back, and the
portal does not link here at all.

The portal half is the one that matters: a user hits a message they do not understand *inside the
portal*, and there is currently nothing on that screen pointing at the page that explains it. That
is a change in `suphero/onerate-app` (`apps/web`), not here.

**Acceptance scenarios:**

- The portal's header or footer carries a documentation link, in both locales, on every panel
  screen.
- The link resolves to the reader's own language: a portal set to `tr` opens `/tr/`, not `/en/`.
- `onerate.travel` → `docs.onerate.travel` → `app.onerate.travel` is navigable without typing a URL.

---

## D3 — Screenshots

Every page is prose. Several would be materially clearer with an image — the search results screen
and its per-supplier status line, the "Why this supplier?" popover, the booking review screen, the
manual-review resolve form.

Deliberately deferred rather than forgotten. Screenshots are the highest-maintenance content a docs
site can carry: they go stale on any UI change, silently, and a stale screenshot is worse than no
screenshot because the reader trusts it over the screen in front of them.

Take them once the portal's UI has stopped moving, and only for screens where prose genuinely fails.

**Acceptance scenarios:**

- Each screenshot exists in both locales (the portal renders in both; one English screenshot on a
  Turkish page is a half-translated page by another route).
- Each has meaningful alt text, in the page's language.
- A check exists that fails when a screenshot is older than the UI it depicts, or the images are
  excluded from this rule with a recorded reason.

---

## D4 — Both locales are prefixed; neither is at the root

`docs.onerate.travel/` redirects to `/en/`. The reasoning is in the comment at the top of
`astro.config.mjs`: English-first is the project's writing convention, the reader is a Turkish
agency, and a root locale bakes that unresolved tension into the URL shape permanently.

Revisit once there is evidence rather than an assumption — if the analytics say the Turkish pages
carry the traffic, `defaultLocale` and the `locales` map are a one-line change, and prefixed URLs
are what make that change cheap.

**Not a trigger:** "the extra `/en/` is ugly."

**Acceptance scenarios (when it fires):**

- Every existing `/en/…` URL still resolves, by redirect if not directly. Saved links do not break.
- The language switcher still offers both, and still lands on the same page in the other language.
