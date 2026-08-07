# Version 10.9.0 Release Checklist

Version 10.9.0 is the Pre-11 Foundation release. Production remains on Version 10.8.2 until every approval item below is complete.

## Automated validation

- [x] App boots with Version 10.9.0 metadata and backup schema 5.
- [x] All permanent data collections have complete, unique stable IDs.
- [x] Numeric Timeline fields are absent from the current data model and runtime links.
- [x] Version 4 Timeline state converts automatically to schema 5 IDs.
- [x] Legacy restaurant, attraction, reservation, budget, packing, open-item, train, and transfer state converts automatically.
- [x] A representative schema 5 export/replace round trip preserves saved state.
- [x] The service worker lists every required offline application-shell asset.
- [x] Dependency audit reports no known vulnerabilities.
- [x] All 12 regression tests pass locally.
- [ ] The final 12-test suite passes in GitHub Actions on `develop`.

## Manual acceptance on `develop`

- [ ] Confirm GitHub Desktop shows no unexpected local files or changes.
- [ ] Open the local app and confirm About shows app/build 10.9.0 and backup schema 5.
- [ ] Confirm Home, Today, Timeline, Travel, Reservations, Food, Packing, Budget, Maps, and Trip Tools open normally.
- [ ] Confirm a Timeline item can be completed, hidden/restored, expanded, and have its item type edited.
- [ ] Confirm a restaurant can be added, edited, favorited, marked eaten, and deleted.
- [ ] Confirm a packing item can be checked, edited, added, and deleted.
- [ ] Export a backup and confirm its filename and completion message appear normally.

## Publish to production

- [ ] Export a fresh backup from the current Version 10.8.2 production app before deployment.
- [ ] Merge the approved `develop` branch into `main`.
- [ ] Confirm regression tests and GitHub Pages deployment are green on `main`.
- [ ] Open the live site and confirm About shows Version 10.9.0 and backup schema 5.
- [ ] Confirm the installed app refreshes to Version 10.9.0 and still shows existing saved data.
- [ ] Verify offline launch after the updated app has loaded online once.
- [ ] Create the `v10.9.0` tag and GitHub release as the rollback point.
- [ ] Return GitHub Desktop to `develop` before beginning Version 11 work.

## Rollback

If production validation fails, restore the tagged Version 10.8.2 release on `main`, allow GitHub Pages to redeploy, and retain the pre-deployment backup until Version 10.9.0 is corrected and retested.
