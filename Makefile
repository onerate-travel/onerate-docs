# onerate-docs — deploying from a laptop when CI cannot.
#
# WHY THIS EXISTS. The GitHub Actions workflow is the normal path and should stay it: it deploys
# from a clean checkout of a named branch, and a laptop cannot promise that. This file is for the
# day Actions itself is unavailable — as on 2026-08-04, when every job in the monorepo refused to
# start on an account billing failure — and the choice is between shipping from here and not
# shipping. It mirrors `suphero/onerate`'s Makefile, target for target, for the same reasons.
#
# WHAT IT IS NOT. It is not a faster way to deploy. Every target that ships runs the SAME gate the
# workflow runs, in the same order, and refuses on the same conditions. A deploy path that let you
# skip the gate would be worse than no deploy path, because it would get used on the good days too.
#
# The steps below mirror .github/workflows/deploy.yml. If you change one, change both — `ci-parity`
# prints them side by side so the drift is visible rather than assumed.

SHELL := /bin/bash
.SHELLFLAGS := -eu -o pipefail -c
.DEFAULT_GOAL := help

PROD_URL ?= https://docs.onerate.travel
WRANGLER := npx wrangler

.PHONY: help
help: ## Show this help
	@echo "onerate-docs — local deploy (use only while CI cannot run)"
	@echo
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
	  | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-22s\033[0m %s\n", $$1, $$2}'
	@echo

# ---- The gate ---------------------------------------------------------------------------------

.PHONY: gate
gate: ## build + test + astro check — the workflow's three steps, in its order
	# BUILD FIRST, and not as a matter of taste. test/links.test.js reads `dist/` — the shipped
	# site, not the Markdown — so running the suite before the build would check the PREVIOUS
	# build, silently, and pass on a stale artifact. The suite refuses to run against an empty
	# dist/ for the same reason; it cannot detect a stale one.
	npm run build
	npm test
	npm run check

# ---- Guards -----------------------------------------------------------------------------------
#
# CI deploys from a clean checkout of a named branch. A laptop can be on anything, with anything
# uncommitted, so the two facts CI gets for free are asserted here instead.

.PHONY: require-clean
require-clean:
	@if [ -n "$$(git status --porcelain)" ]; then \
	  echo "refusing: the working tree is dirty."; \
	  echo "A local deploy ships what is ON DISK. Uncommitted work would reach production with"; \
	  echo "nothing recording what was shipped — commit or stash it first."; \
	  git status --short; exit 1; fi

#
# `symbolic-ref`, not `rev-parse --abbrev-ref`. On a branch with no commits yet — which this
# repository is until ROADMAP.md D1 is done — `rev-parse --abbrev-ref HEAD` prints a raw git fatal
# and then the literal string "HEAD", so the guard refused with "on 'HEAD', not 'main'": a true
# refusal reached by a false statement. A guard whose message you learn to distrust is a guard you
# learn to bypass. `symbolic-ref` reads the ref without resolving it, so it answers "main" on an
# unborn branch and fails cleanly on a detached one.
.PHONY: require-branch-%
require-branch-%:
	@branch=$$(git symbolic-ref --short --quiet HEAD) || { \
	  echo "refusing: HEAD is detached — there is no branch to compare against '$*'."; \
	  echo "Check out $* before deploying."; exit 1; }; \
	if [ "$$branch" != "$*" ]; then \
	  echo "refusing: on '$$branch', not '$*'."; \
	  echo "The workflow gates each environment on its branch (deploy.yml: github.ref_name)."; \
	  echo "Deploying staging's HEAD to production is exactly the divergence that gate prevents."; \
	  exit 1; fi
	@if ! git rev-parse --verify --quiet HEAD >/dev/null; then \
	  echo "refusing: '$*' has no commits yet."; \
	  echo "There is nothing to deploy, and nothing that would record what was deployed."; \
	  exit 1; fi
	@if ! git rev-parse --verify --quiet origin/$* >/dev/null; then \
	  echo "refusing: there is no origin/$* to compare against."; \
	  echo; \
	  echo "If this repository has not been pushed to GitHub yet, that is ROADMAP.md item D1 and it"; \
	  echo "comes first — along with the dedicated Workers-scoped API token and the custom domain."; \
	  echo "Deploying before the repo exists remotely puts a live site on the internet whose source"; \
	  echo "is on one laptop."; exit 1; fi
	@if [ -n "$$(git log origin/$*..HEAD --oneline)" ]; then \
	  echo "refusing: HEAD is ahead of origin/$*."; \
	  echo "Push first. Otherwise what runs in the cloud exists on one laptop and nowhere else."; \
	  git log origin/$*..HEAD --oneline; exit 1; fi

# ---- Staging ----------------------------------------------------------------------------------

# Guards BEFORE the gate here, unlike the monorepo's Makefile, which runs `gate` on the aggregate
# and hangs the guards off the sub-targets. There are no sub-targets to hang them off — one site,
# one artifact — so they go on the deploy target itself, and putting them first means a dirty tree
# fails in a millisecond rather than after a build.

.PHONY: deploy-staging
deploy-staging: require-clean require-branch-staging gate ## Upload a preview version (no traffic)
	# `versions upload`, not `deploy`: it publishes a version with its own preview URL and leaves
	# the live route untouched. That is the whole difference between the two environments here —
	# there is no separate staging Worker, because there is nothing environment-specific in a
	# static site to get wrong between them.
	$(WRANGLER) versions upload

# ---- Production -------------------------------------------------------------------------------

.PHONY: preflight
preflight:
	@echo "About to deploy to PRODUCTION ($(PROD_URL)):"
	@echo "  commit   $$(git rev-parse --short HEAD)  $$(git log -1 --pretty=%s | cut -c1-64)"
	@echo "  branch   $$(git rev-parse --abbrev-ref HEAD)"
	@echo "  account  $$($(WRANGLER) whoami 2>/dev/null | grep -oE '[0-9a-f]{32}' | head -1)"
	@echo

# Guards, THEN the banner. `preflight` calls `wrangler whoami`, which needs the network and an
# authenticated session; running it first means a dirty tree waits on a round trip to Cloudflare to
# be told something git could have said instantly — and, unauthenticated, waits on a prompt.
.PHONY: deploy-prod
deploy-prod: require-clean require-branch-main preflight gate ## Deploy to docs.onerate.travel
	$(WRANGLER) deploy
	@echo
	@echo "Deployed. Now run 'make smoke' — the deploy log alone cannot tell you what is live."

# ---- Verifying what shipped -------------------------------------------------------------------
#
# Two rules this target learned the hard way, on its first real run against production:
#
# 1. NEVER PRINT A VALUE BESIDE THE WORD "ok" WITHOUT COMPARING IT. The `/` check used to echo
#    "ok  / -> $$root (a redirect to /en/ is expected)" and assert nothing, so it reported "ok"
#    next to a literal 404 and the broken root shipped. A check that displays what it did not
#    verify is read as a check, and is worse than none.
#
# 2. CAPTURE A BODY BEFORE GREPPING IT — never `curl … | grep -q`. Under `-o pipefail`, `grep -q`
#    exits the moment it matches, curl takes SIGPIPE on the closed pipe, and the pipeline reports
#    failure *because the assertion succeeded*. That is how this target claimed /tr/ was not
#    Turkish while it was being served perfectly.

.PHONY: smoke
smoke: ## Check production: both locales serve, / redirects, and a bad path is a real 404
	@set -euo pipefail; \
	for path in /en/ /tr/ /en/booking/statuses/ /tr/booking/statuses/; do \
	  code=$$(curl -s -o /dev/null -w '%{http_code}' $(PROD_URL)$$path); \
	  [ "$$code" = "200" ] || { echo "FAIL: $$path returned $$code, expected 200"; exit 1; }; \
	  echo "  ok  $$path"; \
	done; \
	root=$$(curl -s -o /dev/null -w '%{http_code}' $(PROD_URL)/); \
	dest=$$(curl -s -o /dev/null -w '%{redirect_url}' $(PROD_URL)/); \
	[ "$$root" = "302" ] || { \
	  echo "FAIL: / returned $$root, expected a 302 to /en/."; \
	  echo "Neither locale sits at the root, so without public/_redirects this is a hard 404 —"; \
	  echo "on the one URL people type and the one onerate-landing links to."; exit 1; }; \
	case "$$dest" in *"/en/") ;; *) \
	  echo "FAIL: / redirects to '$$dest', expected it to end in /en/"; exit 1 ;; esac; \
	echo "  ok  / -> 302 $$dest"; \
	echo; \
	echo "  A mistyped path must be a REAL 404."; \
	echo "  This is the check onerate-landing cannot make. Its Pages project has no custom 404,"; \
	echo "  so it answers every unmatched path with index.html at 200 (ADR-0009 §3) and a status"; \
	echo "  code there proves nothing. Here 'not_found_handling: 404-page' plus the 404.html"; \
	echo "  Starlight builds make the status code load-bearing — so assert on it."; \
	code=$$(curl -s -o /dev/null -w '%{http_code}' $(PROD_URL)/en/no-such-page/); \
	[ "$$code" = "404" ] || { \
	  echo "FAIL: a nonexistent path returned $$code, expected 404."; \
	  echo "If this is 200, not_found_handling has drifted to single-page-application and every"; \
	  echo "typo now silently serves the home page. See wrangler.jsonc."; exit 1; }; \
	echo "  ok  /en/no-such-page/ -> 404"; \
	echo; \
	tr_page=$$(curl -fsS $(PROD_URL)/tr/); \
	echo "$$tr_page" | grep -q 'lang="tr"' \
	  || { echo "FAIL: /tr/ is not being served as Turkish — check the locale fallback"; exit 1; }; \
	echo "  ok  /tr/ is served as lang=tr"

# ---- Keeping this honest ----------------------------------------------------------------------

.PHONY: ci-parity
ci-parity: ## Print the workflow's steps beside this file's, so drift is visible rather than assumed
	@echo "=== .github/workflows/deploy.yml ==="
	@grep -E '^\s+(run|name|if):' .github/workflows/deploy.yml | sed 's/^ */  /'
	@echo
	@echo "=== Makefile (gate + deploy targets) ==="
	@grep -E '^\t(npm|\$$\(WRANGLER)' Makefile | sed 's/^\t/  /'

.PHONY: whoami
whoami: ## Which Cloudflare account these deploys would land in
	$(WRANGLER) whoami

.PHONY: dev
dev: ## Local preview with hot reload — http://localhost:4321
	npm run dev
