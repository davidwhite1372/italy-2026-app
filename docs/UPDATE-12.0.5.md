# Version 12.0.5 — Hotel websites in Confirmation Wallet

Prepared October 3, 2026 at 12:14 PM EDT from clean develop a33dd82e7c03b9f4edbd964cb481827911f30007. Main remains v12.0.0 until David directs a reviewed release.

Each of the four existing hotel entries has a Hotel website button below its wallet details. The existing confirmation number and Copy number controls remain prominent. Shared wallet text contains the same official URLs. Website links open in a new tab and need internet; the wallet and confirmation data remain available offline.

## Verified official property URLs

| Hotel | Official website, verified Oct 3, 2026 |
| --- | --- |
| Anantara Palazzo Naiadi | <https://www.anantara.com/en/palazzo-naiadi-rome> |
| W Florence | <https://www.marriott.com/en-us/hotels/flrwh-w-florence/overview/> |
| JW Marriott Venice Resort & Spa | <https://www.marriott.com/en-us/hotels/vcejw-jw-marriott-venice-resort-and-spa/overview/> |
| Hotel Antiche Figure | <https://www.hotelantichefigure.it/> |

## Commit title and full description

v12.0.5: Add hotel websites to Confirmation Wallet

Add a Hotel website button to each of the four existing hotel wallet entries, backed by the official property URL on its stable master hotel record. Include the same URLs in shared wallet text, and open the sites in a new tab.

Preserve the prominent confirmation numbers and Copy number controls, hotel edits, all itinerary cards and approved times, stable IDs, schema 6, local-only photos, and the offline Rome guide. No saved-data migration is added. External hotel pages require internet; main is unchanged.

Validation: 47/47 npm tests pass. Wallet DOM review verifies all four official targets, confirmation numbers, copy controls, shared URLs, and a private hotel note. Both Oct 3 phone simulations exactly match their normalized v12.0.4 baselines; Merge round trips are idempotent. Physical-phone tap/back and airplane-mode wallet review remain pending.

## Changed file paths

- `CHANGELOG.md`
- `ITALY-PROJECT-HANDOFF.md`
- `README.md`
- `data.js`
- `docs/RELEASE-CHECKLIST.md`
- `docs/UPDATE-12.0.5.md`
- `index.html`
- `manifest.json`
- `package-lock.json`
- `package.json`
- `sw.js`
- `tests/app.test.js`

The ZIP contains only these 12 changed files relative to v12.0.4, preserving repository-relative paths. Original phone JSON and unchanged guide assets are not included.

## Develop commit, push, and review steps

Direct GitHub develop commit and automated verification are handled in this session. No PC or phone JSON import is required. On GitHub's phone website, select `develop` and review this version's commit and Actions result.

For a later PC handoff, first confirm the working tree is clean. If the direct commit is already present, pull it instead of copying the patch again:

```sh
git checkout develop
git pull --ff-only origin develop
npm ci
npm test
```

If applying the changed-files ZIP to a separate clean checkout without this commit, start from current develop, copy the 12 files preserving their relative paths, inspect `git diff`, run `npm test`, commit using the complete title/body above, and push:

```sh
git add CHANGELOG.md ITALY-PROJECT-HANDOFF.md README.md data.js docs/RELEASE-CHECKLIST.md docs/UPDATE-12.0.5.md index.html manifest.json package-lock.json package.json sw.js tests/app.test.js
git commit
git push origin develop
```

Verify the exact develop commit's GitHub Actions check. The changed-files package is an incremental code patch; it is not a phone backup import or complete source replacement.

## Phone-only review after an approved main release

Open the existing app online and confirm About shows 12.0.5. Open Confirmation Wallet, scroll to Hotels, and tap each Hotel website button. Check that the correct property page opens; return to the app and confirm the hotel confirmation numbers and Copy number buttons still work. Shared wallet text now includes the same URLs.

Confirm the approved Oct 4 bag-drop sequence, Oct 5 registration, Oct 9 Uffizi return, and five-page Rome guide/PDF remain correct. Let online loading finish, then confirm the wallet and guide still open in airplane mode. The external hotel sites require internet. No JSON import/reset, clearing, or uninstall is required; preserve local photos.

Main has not been merged or deployed. After develop checks pass and David explicitly directs release, merge the tested develop commit into main, verify GitHub Actions/Pages, and then verify the live app and both phones. Detailed merge guidance is supplied one step at a time at that stage.

Unresolved phone timing decisions remain separate: Oct 11 Murano/Burano and Oct 15 VCE check-in. This wallet-link request changes neither.
