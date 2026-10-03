# Version 12.0.4 — Approved Uffizi return window

Prepared October 3, 2026 at 12:01 PM EDT from clean develop d7043d7f5584b88777c0b613c9baab043fc15d94. Main remains v12.0.0 until David directs a reviewed release.

| Oct 9 card | Current plan |
| --- | --- |
| Accademia/Uffizi tour | Starts 10:30; operator finish not confirmed |
| Uffizi → W Florence return | Planning window 15:30–16:30; walk estimate 15–20 minutes |
| PSA dinner at Cucina | 18:15, unchanged |

David selected the work-phone return window. It ends 1 hour 45 minutes before dinner. Keep the window flexible if the tour runs later; the selected hour is a planning allowance, not a new walking-duration estimate or a confirmed tour finish. Personal tour-end and all other phone overrides remain separate.

## Commit title and full description

v12.0.4: Use work-phone Uffizi return window

Set the Oct 9 Uffizi → W Florence return to the selected work-phone planning window, 15:30–16:30. Keep the 15–20 minute walk estimate and existing route. The tour finish remains unconfirmed, and Cucina dinner stays at 18:15.

Correct only the reviewed earlier personal-phone pair 14:30–15:30 once on first load. Preserve private notes/statuses, other custom pairs, later Save/reload edits, all other itinerary cards, stable IDs, schema 6, and local-only photos. Retain the approved registration, bag-drop sequence, and five-page Rome guide. Other phone conflicts remain pending; main is unchanged.

Validation: 47/47 npm tests pass, including Timeline order, exact-pair reconciliation, and later-edit preservation. Both Oct 3 phone simulations have the selected return window and preserve every unrelated exported value; Merge round trips are idempotent. Physical-phone and airplane-mode review remains pending.

## Changed file paths

- `CHANGELOG.md`
- `ITALY-PROJECT-HANDOFF.md`
- `README.md`
- `data.js`
- `docs/RELEASE-CHECKLIST.md`
- `docs/UPDATE-12.0.4.md`
- `index.html`
- `manifest.json`
- `package-lock.json`
- `package.json`
- `sw.js`
- `tests/app.test.js`

This ZIP contains only these 12 changed files relative to v12.0.3, preserving repository-relative paths. Original phone JSON and unchanged guide assets are not included.

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
git add CHANGELOG.md ITALY-PROJECT-HANDOFF.md README.md data.js docs/RELEASE-CHECKLIST.md docs/UPDATE-12.0.4.md index.html manifest.json package-lock.json package.json sw.js tests/app.test.js
git commit
git push origin develop
```

Verify the exact develop commit's GitHub Actions check. The changed-files package is an incremental code patch; it is not a phone backup import or complete source replacement.

## Phone-only review after an approved main release

Open the existing app online and confirm About shows 12.0.4. On both phones, inspect Oct 9 in Timeline and Travel Details: outbound walk, tour, Uffizi return 3:30–4:30 PM, then Cucina dinner at 6:15 PM. The return card still says the walk takes about 15–20 minutes and the tour finish is unconfirmed. The reviewed earlier personal-phone return pair updates once; notes/statuses and later deliberate edits survive.

Confirm Oct 5 registration at 1:30 PM, Oct 4 bag drop/security at 9:30–9:55 / 9:55–10:30 AM, and the five-page Rome guide/PDF. Let online loading finish, then repeat the affected checks in airplane mode. No JSON import, reset, clearing, or uninstall is required; preserve local photos.

Main has not been merged or deployed. After develop checks pass and David explicitly directs release, merge the tested develop commit into main, verify GitHub Actions/Pages, and then verify the live app and both phones. Detailed merge guidance is supplied one step at a time at that stage.

Next pending decision: Oct 11 Murano/Burano is 8:00 AM–5:00 PM on David Cell versus a Time TBD note on David Work Cell. Review individually before promoting times.
