# Version 12.0.3 — Approved PSA registration time

Prepared October 3, 2026 at 11:42 AM EDT from clean develop b92da89042475b0742d75e6ac1169c93b0d2c8c3. Main remains v12.0.0 until David directs a reviewed release.

| Oct 5 card | Current plan |
| --- | --- |
| Termini → Anantara walk | 13:00–13:20, unchanged |
| PSA registration | Planned 13:30; desk open 13:00–17:00 |
| Hotel room check-in | Begins 15:00, unchanged |
| Joe Lynch group dinner | 17:30, unchanged; final group timing still subject to text |

The 13:30 plan fits the existing adjacent cards with 10 minutes after the walk. Arrival and Leonardo Express times remain planning values; a delayed flight, bags, or train may shift actual arrival. Registration remains available until 17:00. No registration duration is invented.

## Commit title and full description

v12.0.3: Set Oct 5 PSA registration to 1:30 PM

Set the planned registration start to 13:30 after checking the preceding 13:00–13:20 hotel walk and following 17:30 dinner. Keep the 13:00–17:00 registration desk availability window and clarify that 17:00 is desk closing time, not registration duration.

Correct only reviewed saved starts 13:00 / 13:01 once on first load. Preserve private notes, other custom times, later Save/reload edits, stable IDs, schema 6, and local-only photos. Retain the approved bag-drop sequence and five-page Rome guide. Other phone conflicts remain pending; main is unchanged.

Validation: 46/46 npm tests pass, including card order, narrow reconciliation, and later-edit preservation. Both Oct 3 phone simulations have 13:30 registration and preserve every unrelated exported value; Merge round trips are idempotent. Physical-phone and airplane-mode review remains pending.

## Changed file paths

- `CHANGELOG.md`
- `ITALY-PROJECT-HANDOFF.md`
- `README.md`
- `data.js`
- `docs/RELEASE-CHECKLIST.md`
- `docs/UPDATE-12.0.3.md`
- `index.html`
- `manifest.json`
- `package-lock.json`
- `package.json`
- `sw.js`
- `tests/app.test.js`

This ZIP contains only these 12 changed files relative to v12.0.2, with repository-relative paths. The original phone exports and unchanged guide assets are not part of the patch.

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
git add CHANGELOG.md ITALY-PROJECT-HANDOFF.md README.md data.js docs/RELEASE-CHECKLIST.md docs/UPDATE-12.0.3.md index.html manifest.json package-lock.json package.json sw.js tests/app.test.js
git commit
git push origin develop
```

Verify the exact develop commit's GitHub Actions check. The changed-files package is an incremental code patch; it is not a phone backup import or complete source replacement.

## Phone-only review after an approved main release

Open the existing app online and confirm About shows 12.0.3. Inspect Oct 5 in Timeline and Travel Details on each phone: walk ends 1:20 PM, registration starts 1:30 PM, dinner remains 5:30 PM. Registration text keeps the desk opening window distinct from your planned time. The reviewed old work-phone start receives the correction once; unrelated data and later deliberate edits remain editable.

Check Oct 4 bag drop/security and the five-page Rome guide remain correct. Let loading finish before airplane-mode review. Preserve the existing installation and local photos; no reset, clearing, uninstall, or JSON import is needed.

Main has not been merged or deployed. After develop checks pass and David explicitly directs the release, merge the tested develop commit into main, verify GitHub Actions/Pages, and then verify the live app and both phones. Detailed merge guidance is supplied one step at a time at that stage.

Next pending decision: Oct 9 Uffizi return is 2:30–3:30 PM on David Cell versus 3:30–4:30 PM on David Work Cell. Review separately.
