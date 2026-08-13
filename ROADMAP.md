# onerate-docs — open work

Open items only, in priority order, each with the test scenarios that close it. A closed item is
**deleted** from this file, never ticked off; the history lives in git.

---

## D1 — The workflow has no Cloudflare credentials — P1

The site is live and the repository is pushed, but **this repo has no secrets at all**, so
`.github/workflows/deploy.yml` cannot deploy. Every deploy so far has come off a laptop through
`make deploy-prod`, which uses a personal `wrangler login` session. That works, and it means the
ability to ship this site currently belongs to one machine.

Set `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` as repository secrets, with a token scoped
to `Account · Workers Scripts · Edit` **and nothing else**.

**Do not reuse the app repo's token.** ADR-0009 §2 rejected exactly that for the landing repo: that
token also carries `D1: Edit`, so a repo that publishes static HTML would gain the ability to run
migrations against production D1. The argument applies here unchanged.

It must also not reuse the landing repo's token, which is `Pages: Edit` — the wrong product for an
assets-only Worker.

**Acceptance scenarios:**

- `gh workflow run deploy.yml --ref main -f environment=production` completes green, and the
  workflow's own credentials guard does not fire.
- `gh workflow run deploy.yml --ref staging -f environment=staging` publishes a preview URL and
  leaves `docs.onerate.travel` on its previous version.
- `make smoke` passes against production afterwards: all seven locales 200, `/` a 302 to `/en/`, a
  mistyped path a real 404.

*(Blocked in practice while GitHub Actions is refusing to start jobs on the account's billing
failure — the same outage recorded at the top of the app repo's Makefile. The laptop path is why
that is an inconvenience rather than a stoppage.)*

---

## D2 — The landing page link is one-way

`onerate-landing/public/index.html` now links to `docs.onerate.travel`. Nothing links back, and the
portal does not link here at all.

The portal half is the one that matters: a user hits a message they do not understand *inside the
portal*, and there is currently nothing on that screen pointing at the page that explains it. That
is a change in `suphero/onerate-app` (`apps/web`), not here.

**Acceptance scenarios:**

- The portal's header or footer carries a documentation link, in all seven locales (`en`, `tr`,
  `bg`, `hu`, `it`, `pl`, `ro`), on every panel screen.
- The link resolves to the reader's own language, and does so for all seven: a portal set to `tr`
  opens `/tr/`, not `/en/` — and likewise for each of the other five.
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

- Each screenshot exists in all seven locales (the portal renders in all of them; one English
  screenshot on a Turkish page is a half-translated page by another route).
- Each has meaningful alt text, in the page's language.
- A check exists that fails when a screenshot is older than the UI it depicts, or the images are
  excluded from this rule with a recorded reason.

---

## D4 — All seven locales are prefixed; none is at the root

`docs.onerate.travel/` redirects to `/en/`. The reasoning is in the comment at the top of
`astro.config.mjs`: English-first is the project's writing convention, the reader is a Turkish
agency, and a root locale bakes that unresolved tension into the URL shape permanently.

Revisit once there is evidence rather than an assumption — if the analytics say the Turkish pages
carry the traffic, `defaultLocale` and the `locales` map are a one-line change, and prefixed URLs
are what make that change cheap.

**Not a trigger:** "the extra `/en/` is ugly."

**Acceptance scenarios (when it fires):**

- Every existing `/en/…` URL still resolves, by redirect if not directly. Saved links do not break.
- The language switcher still offers all seven, and still lands on the same page in the chosen
  language.
