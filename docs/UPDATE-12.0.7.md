# Version 12.0.7 — Murano and Venice departure times

Prepared October 3, 2026 at 12:55 PM EDT from clean develop 2f46e008d09e77c9db5fd236d75e8bb6876ba6ff. Main remains v12.0.0.

David's two final choices are applied: Oct 11 Murano/Burano 8:00 AM–5:00 PM and Oct 15 departure from Hotel Antiche Figure at 7:00 AM. Breakfast sorts before the excursion without a fabricated clock. The airport walk, bus, check-in, summaries, and route now follow one plan, with the 11:00 AM flight unchanged.

## Commit title and full description

v12.0.7: Set Murano 8–5 and Venice hotel departure at 7 AM

Use David's Oct 3 decisions: Murano/Burano runs 08:00–17:00, and the Oct 15 Hotel Antiche Figure departure is 07:00. Keep flexible breakfast before the excursion without inventing a breakfast time. Align day summaries, reservation/open-item wording, and the airport route with the approved clocks.

Retain conservative allowances: walk/tickets 07:00–07:30, bus/wait 07:30–08:30, then check-in/security 08:30–10:15 before the unchanged 11:00 SK2692 flight. The bus window is a plan, not a confirmed departure; aim for VCE around 08:00 when the timetable allows and begin check-in on arrival.

Reconcile only reviewed old phone clock values and the exact stock Murano Time TBD note once. Preserve other custom times, private notes, later edits, stable IDs, schema 6, local photos, hotel website/copy fixes, and all guide assets. Main remains unchanged.

Validation: 50/50 npm tests pass. Both Oct 3 phone simulations show the approved times and correct card order; every unrelated exported value matches the preserved v12.0.4 baseline, and Merge round trips are idempotent. Physical-phone/offline review and the exact ATVO service remain pending.

## Reviewed timing map

| Date / card | Time | Meaning |
| --- | --- | --- |
| Oct 11 breakfast | Flexible morning | Before the 8:00 AM excursion; verify breakfast availability |
| Oct 11 Murano/Burano | 08:00–17:00 | David's selected excursion window; PSA provides transport |
| Oct 11 dinner | 19:00 | Existing tentative plan, two hours after planned return |
| Oct 15 hotel → Piazzale Roma | 07:00–07:30 | Hotel departure, walk, luggage, ticket allowance |
| Oct 15 airport bus | 07:30–08:30 | Waiting and ride allowance; no exact service asserted |
| Oct 15 airport check-in/security | 08:30–10:15 | Start earlier on arrival if possible; gate target 10:15 |
| Oct 15 SAS SK2692 | 11:00–13:05 | Existing booked flight, unchanged |

Aim for VCE around 08:00 when the timetable allows. The 08:30 clock is the conservative end of the planning allowance, leaving 2 hours 30 minutes before departure; it is not a guarantee of airport arrival or permission to wait before check-in. Purchase/stage bus tickets the evening before, verify the Oct 15 timetable, and follow the airline's flight-specific requirements.

Official sources checked Oct 3: [ATVO airport service and ticket options](https://www.atvo.it/en/services-provided/airport-services/venice-airport-bus-express), [VCE check-in guidance](https://www.veneziaairport.it/en_gb/at-the-airport/check-in-and-bag-drop), and [SAS check-in/boarding guidance](https://www.flysas.com/nl-en/travel-info/check-in-boarding/deadlines). VCE recommends at least two hours for flights without passport control and three for flights requiring it; SAS recommends three hours for travel outside Europe. This connected U.S. itinerary still needs its specific SAS instructions checked. Neither source confirms an Oct 15 ATVO departure. The existing Venice guide contains relative durations rather than a conflicting 06:30 departure clock and remains unchanged.

## Changed file paths

- `CHANGELOG.md`
- `ITALY-PROJECT-HANDOFF.md`
- `README.md`
- `data.js`
- `docs/RELEASE-CHECKLIST.md`
- `docs/UPDATE-12.0.7.md`
- `index.html`
- `manifest.json`
- `package-lock.json`
- `package.json`
- `sw.js`
- `tests/app.test.js`

The changed-files ZIP contains only these 12 files relative to v12.0.6, with repository-relative folders preserved. It is an incremental code patch, not a phone backup or full source replacement. Guide assets are unchanged.

## Verification and phone preservation

All 50 npm tests pass. New regressions exercise the rendered card order, the 07:00 hotel → bus → check-in → flight sequence, old 07:00/08:00 check-in corrections, exact stock-note cleanup, custom times/private notes, and subsequent Save/reload edits. Existing actual hotel Copy number clicks and offline asset checks remain green.

Both separately labeled Oct 3 exports were booted, rendered, exported, and Merge-imported in isolated app simulations. Every unrelated value in all 19 saved sections matches the preserved v12.0.4 normalized baseline exactly. The personal-phone check-in override changes from 07:00 to the master 08:30; existing approved 08:00–17:00 Murano clocks become redundant. The work-phone exact stock Time TBD note is updated to the master note. These redundant fields drop from schema 6 delta exports normally. Private notes, statuses, expenses, flights, packing, and local-only photo behavior are preserved. No phone JSON import/reset or app reinstall is needed.

## Develop commit, push, and review steps

Direct authenticated GitHub develop commit and automated verification are handled in this session. On GitHub's phone website, select `develop` and review this version's commit and Actions result.

For a later PC sync, confirm the working tree is clean, then pull the direct commit rather than copying the patch again:

```sh
git checkout develop
git pull --ff-only origin develop
npm ci
npm test
```

Only when applying this incremental ZIP to a clean checkout without the direct commit, copy the 12 files preserving relative paths, inspect `git diff`, run `npm test`, and commit with the complete title/body above:

```sh
git add CHANGELOG.md ITALY-PROJECT-HANDOFF.md README.md data.js docs/RELEASE-CHECKLIST.md docs/UPDATE-12.0.7.md index.html manifest.json package-lock.json package.json sw.js tests/app.test.js
git commit
git push origin develop
```

## Main release steps after green develop checks

Main remains v12.0.0. Once the exact develop commit's GitHub Actions is green and David directs release, recheck both heads and promote the reviewed candidate without force-pushing. With main still an ancestor, a PC fast-forward procedure is:

```sh
git fetch origin
git checkout main
git pull --ff-only origin main
git merge --ff-only origin/develop
git push origin main
git checkout develop
```

If either branch advances unexpectedly, review the new comparison before promotion. Verify the exact production commit's Actions and GitHub Pages source, then About on both installed phones. No main merge, tag, or deployment is performed by this increment.

## Phone-only review after approved main release

Confirm About shows 12.0.7. Review Oct 11 breakfast/excursion/dinner and Oct 15 hotel/bus/check-in/flight order. Tap hotel Copy number buttons and website links. Let online loading finish, then check the wallet, core pages, Rome five-page gallery/PDF, and affected cards in airplane mode. Verify existing saved data/photos remain visible; preserve storage and local photos.

Automated software checks are green and the two requested timing choices are resolved. Physical-device/offline checks, PSA pickup details, and the exact ATVO service remain pending. Confidence in the reviewed software change is 95%; the remaining uncertainty concerns behavior not exercised on the actual phones and operator details, not failing automated tests.
