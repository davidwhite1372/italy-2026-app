# Version 12.0.8 — Confirmed Delta airside Boston transfer

Prepared October 3, 2026 at 2:52 PM EDT from fresh, clean develop e1c2876e62c29b32227d6cb53aa1c9032e91cde9. Main and live source were independently checked at 12.0.7. David explicitly authorized pushing this accurate update to main on October 3 at 3:13 PM EDT.

David confirmed both facts: luggage is checked through to Rome, and the Boston connection uses Delta's internal airside Terminal A–E shuttle with no security reentry. Every affected instruction and the remade guide now follow that single plan.

## Commit title

v12.0.8: Use confirmed Delta airside Boston transfer

## Full commit description

Use the confirmed Delta airside A–E shuttle with no TSA reentry and luggage checked through to Rome. Replace all affected Boston instructions and rebuild the guide as PNG/PDF, available at all three guide locations and required in the offline cache.

Preserve itinerary clocks, stable IDs, schema 6, and saved data. Validation: 51 npm tests pass; both labeled phone simulations preserve all 19 saved sections, with idempotent Merge round trips. All Guides contains exactly one replacement Boston entry. David authorized the develop push and main release on October 3; physical-phone/offline review remains manual.

## The transfer instructions

1. After DL2706 arrives at 2:55 PM, stay in Terminal A's secured gate area.
2. Follow internal signs toward Delta's satellite concourse, gates A13–A22. Use the internal passage when needed.
3. Near the food court at A17–A18, follow Delta shuttle / Terminal E signs. A Delta agent can point out the boarding door.
4. Board Delta's internal airside bus to Terminal E. Stay inside security; no TSA reentry.
5. From the E13 area, check monitors for SK928 to Copenhagen and walk to its assigned SAS gate.
6. Aim for the gate by 4:45 PM and follow the boarding time/deadline on the SAS boarding pass. 5:40 PM is the flight departure time.

Checked luggage is confirmed through to Rome (FCO). Collect it in Rome and keep carry-ons with you in Boston. The scheduled connection is 2 hours 45 minutes. The existing 14:55–17:00 card window includes transfer and gate buffer; it is not the bus ride duration. No separate bus departure or arrival minute is invented.

Delta's [current BOS advisory](https://www.delta.com/us/en/advisories/airports/boston-airport-update) supplies A13–A22 and normal E13 access. Delta's [BOS airport page](https://www.delta.com/us/en/airports/united-states/boston-sky-club-airport-map) supplies the satellite food-court location near A17–A18. Both were checked October 3. Route eligibility and through luggage are David's confirmed facts; the guide does not require another eligibility or baggage check.

## Changed file paths

- `CHANGELOG.md`
- `ITALY-PROJECT-HANDOFF.md`
- `README.md`
- `assets/guides/boston-terminal-a-to-e.pdf`
- `assets/guides/boston-terminal-a-to-e.png`
- `data.js`
- `docs/RELEASE-CHECKLIST.md`
- `docs/UPDATE-12.0.8.md`
- `index.html`
- `manifest.json`
- `package-lock.json`
- `package.json`
- `scripts/build-boston-guide.py`
- `sw.js`
- `tests/app.test.js`

The incremental ZIP contains exactly these 15 changed files relative to 12.0.7, with repository-relative folders preserved. It contains complete replacement files, not snippets, a full repository, or a phone backup.

## Verification

All 51 npm tests pass. New Boston verification exercises the shared Timeline/Travel Details data, consistent route/airport guidance, confirmed luggage wording, and actual image/PDF buttons at all three entry points. All Guides has exactly one Boston entry, using the replacement PNG/PDF; the old image was overwritten at its existing path. The worker must cache both new Boston formats before activation; failure tests cover each asset, and activation removes the previous cache. Existing stable-ID, previous-schema import, local-photo, itinerary, hotel copy, and offline checks remain green.

The PDF is one landscape page with exact text and a matching 300-dpi PNG. The rendered image was visually checked. Text extraction verifies flight times, gates, gate target, no TSA reentry, Rome baggage, and v12.0.8, and rejects the old outside-route wording. JavaScript syntax checks pass.

Each labeled October 3 phone export was reconstructed, rendered, and normalized using the fresh 12.0.7 source, then upgraded independently to 12.0.8. All 19 saved sections are identical; each candidate export was Merge-imported and exported again with identical saved values. All 62 master timeline IDs and clocks are retained, with no unrelated timeline record changed. Neither phone has a saved Boston override requiring migration. No fresh reconciliation rule, schema change, cloud sync, photo-storage change, or phone reset is introduced.

## Develop review and GitHub Desktop sync

The local develop commit and all 51 local tests are complete. David's explicit October 3 approval resolves the earlier upload-authorization block and authorizes pushing develop, checking its Actions, and releasing the tested candidate to main. The completed guide and 15-file ZIP remain available. Remote checks are performed against the exact pushed commit before promotion.

After the authorized push, on GitHub's website choose `develop`, open the version 12.0.8 commit, and check its Actions result.

For a PC already linked to this repository:

1. Open GitHub Desktop and select `italy-2026-app`.
2. Choose Current branch → `develop`.
3. Confirm Changes is empty; preserve any existing local edits before pulling.
4. Click Fetch origin, then Pull origin. The release commit contains the files; do not apply the ZIP again.
5. Open the terminal and run `npm ci`, then `npm test`.

If applying the incremental ZIP to a clean 12.0.7 checkout that does not have the direct commit, copy the 15 files with their folders preserved, inspect the diff, and run `npm test`. In GitHub Desktop, enter the exact title and full description above, click Commit to develop, then Push origin. Verify that commit's Actions before any release.

Equivalent terminal sync:

```sh
git checkout develop
git pull --ff-only origin develop
npm ci
npm test
```

## Approved main release after green develop checks

David authorized the main release on October 3 at 3:13 PM EDT. After the exact develop commit is green, fetch both branches and verify main is still an ancestor of the reviewed candidate. The normal fast-forward procedure is:

```sh
git fetch origin
git checkout main
git pull --ff-only origin main
git merge --ff-only origin/develop
git push origin main
git checkout develop
```

If either branch advances, review the comparison before promotion. Verify the exact production commit's Actions and Pages source, then About on both installed phones. Open the Boston PNG/PDF online, allow caching to finish, and check them in airplane mode. Confirm saved notes, flights, expenses, packing, and local photos remain visible. The approved release promotes the tested develop candidate to main; no unrelated design changes are included.
