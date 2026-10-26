# 06 Deployment Guide

Target: https://dsl-uow.github.io/ai4smartgrids-workshop/ (repo `DSL-UOW/ai4smartgrids-workshop`, branch `main`).

## One-time setup (repo admin)
Settings → Pages → Build and deployment → Source: **GitHub Actions**.

## What is published
`.github/workflows/static.yml` copies only `index.html` and `assets/` into `_site/` and deploys that. `docs/`, `CLAUDE.md`, `README.md` and `.github/` are not published. Any new top-level site file must be added to the "Stage site files" step.

## Release
1. Review locally (see below).
2. Owner approves; commit and push to `main` (or run the workflow manually from the Actions tab).
3. Wait for the "Deploy site to Pages" run to turn green.

## Preview locally
Open `index.html` directly, or run `python -m http.server 8000` in the repo root and visit http://localhost:8000. Content is loaded from a plain `.js` file, so no server is required.

## Verify after deploy
- URL loads over HTTPS; CSS, fonts, JS and images load (no 404s).
- Nav links scroll to About, Presenters, Schedule, Venue; mobile menu works.
- No `[TBC]` text remains on the live site.
- Check at phone, tablet and desktop widths.

## Rollback
Revert the commit on `main` (new revert commit) and push; the workflow redeploys.
