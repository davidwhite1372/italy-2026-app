# Version 12.0.6 — Hotel confirmation copy fix

Prepared October 3, 2026 at 12:34 PM EDT from clean develop ecbfb89970cd74bcde3d365f2a23cf5fea43b338. Main remains v12.0.0.

All four hotel Copy number buttons previously rendered but failed on a tap because quotation marks in the confirmation value ended their HTML click-handler attribute. This increment escapes the attribute correctly and verifies actual clicks. Both clipboard and fallback copy paths handle the exact numbers, including edited values with special characters.

## Commit title and full description

v12.0.6: Fix hotel confirmation Copy number buttons

Escape hotel confirmation strings before embedding them in HTML click-handler attributes. The old quoting truncated all four handlers, so visible Copy number buttons failed when tapped. Keep the existing wallet layout, official website buttons, and shared URLs.

Add an actual-click regression check for all four confirmation numbers, clipboard/fallback copying, and edited values containing quotes, an apostrophe, and an ampersand. Preserve all itinerary cards and approved times, schema 6, phone data, local photos, and guide assets; no data migration is added. Main is unchanged.

Validation: 48/48 npm tests pass. Both Oct 3 phone simulations exactly match their normalized v12.0.4 baselines; Merge round trips are idempotent. Physical-phone and airplane-mode review remain pending, as do the separate Murano/Burano and VCE check-in decisions.

## Changed file paths

- `CHANGELOG.md`
- `ITALY-PROJECT-HANDOFF.md`
- `README.md`
- `docs/RELEASE-CHECKLIST.md`
- `docs/UPDATE-12.0.6.md`
- `index.html`
- `manifest.json`
- `package-lock.json`
- `package.json`
- `sw.js`
- `tests/app.test.js`

This ZIP contains only these 11 changed files relative to v12.0.5. data.js, the itinerary, official hotel URLs, and guide assets are unchanged.

## Develop commit, push, and review steps

Direct GitHub develop commit and automated verification are handled in this session. No PC or phone JSON import is required. On GitHub's phone website, select `develop` and review this version's commit and Actions result.

For a later PC handoff, first confirm the working tree is clean. If the direct commit is already present, pull it instead of copying the patch again:

```sh
git checkout develop
git pull --ff-only origin develop
npm ci
npm test
```

If applying the changed-files ZIP to a separate clean checkout without this commit, start from current develop, copy the 11 files preserving their relative paths, inspect `git diff`, run `npm test`, commit using the complete title/body above, and push:

```sh
git add CHANGELOG.md ITALY-PROJECT-HANDOFF.md README.md docs/RELEASE-CHECKLIST.md docs/UPDATE-12.0.6.md index.html manifest.json package-lock.json package.json sw.js tests/app.test.js
git commit
git push origin develop
```

Verify the exact develop commit's GitHub Actions check. The changed-files package is an incremental code patch; it is not a phone backup import or complete source replacement.

## Release readiness boundary

Automated checks and separate phone simulations are green. That does not establish physical-device behavior or resolve trip timing choices.

| Outstanding item | Required check or decision |
| --- | --- |
| Physical phones | Tap the four Copy number buttons and website links; verify installed version and preserved data |
| Airplane mode | Finish online loading, then open the wallet, core pages, Rome five-page gallery and PDF |
| Oct 11 Murano/Burano | Personal phone 08:00–17:00 conflicts with work-phone Time TBD; confirm PSA pickup/return before fixing times |
| Oct 15 VCE check-in | Personal-phone 07:00 start precedes the master bus arrival at 08:00; resolve the sequence |

The main-to-develop comparison before this fix showed five approved commits ahead, zero behind, and no branch divergence. The main branch permits a fast-forward release. Preserve the exact tested develop head when preparing a release; do not force-push or promote unreviewed phone timing fields.

## Phone-only review after an approved main release

Confirm About shows 12.0.6. In Confirmation Wallet, tap Copy number for each hotel and paste into a temporary note to verify the complete number. Open each Hotel website and return to the app. Review the affected cards and Rome guide, let online loading finish, then repeat the wallet/guide checks in airplane mode. No JSON import/reset, clearing, or uninstall is required; preserve local photos.

Main has not been merged or deployed. David's current request asks whether the release is ready and all green; it does not remove the unresolved timing decisions or physical-device verification boundary. A subsequent main release must use the reviewed exact candidate and be independently verified on GitHub Pages and the phones.
