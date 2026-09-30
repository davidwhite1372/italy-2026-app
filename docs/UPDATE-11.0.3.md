# Install and review v11.0.3 on develop

This revised ZIP supersedes the earlier v11.0.3 ZIP and includes the Venice scheduled company-card cost, chronological All Guides ordering, and the FCO Travel Details swipe fix. Use this ZIP only. This ZIP contains changed files only. It is not a complete app backup. Build prepared September 30, 2026 at 5:57 PM EDT. Keep both original Sep 30 device backups.

## GitHub Desktop — take one step at a time

1. Select italy-2026-app. Confirm Current branch is develop and Changes is empty. If changes exist, preserve them and ask before copying. Click Fetch origin; click Pull origin if offered. If newer changes arrived after the supplied backup, stop and send the newer source so this patch cannot overwrite them.
2. Download and extract this ZIP in Downloads, outside the repository. Do not unzip directly over the repository.
3. In GitHub Desktop choose Repository → Show in Explorer. Copy the extracted ZIP contents into that repository folder, retaining docs/ and assets/guides/ paths. Choose Replace for the listed files; merge folders. Do not delete any folders. No phone import, uninstall or clearing storage is needed.
4. Review the GitHub Desktop Changes tab against the exact file list below. No other files should be included.
5. If Node is installed, open a terminal in the repository and run npm ci, then npm test. Expected: 41 passing tests.
6. Commit to develop with the title and full body below, then click Push origin. Check GitHub Actions for that develop commit; it must be green.
7. Review the release checklist. Confirm both booking numbers, both voucher buttons, the payment screenshot, the two company-paid/unsubmitted expenses, pronunciations, and install sheet. The original PDFs each contain Rome on page 1 and Florence on page 2. Check PDFs on each physical phone and offline after first loading online. Browser simulation could not be performed because no browser executable was available; do not mark physical layout/PDF checks complete on that basis.
8. Keep main unchanged until David approves after develop checks. Do not merge, tag or deploy yet; provide the main merge instructions one step at a time after approval. Existing GitHub Pages may serve main, so it does not preview develop automatically. If no develop preview exists, ask for review instructions rather than treating a develop push as a phone update.

## Changed repository paths

- CHANGELOG.md
- README.md
- data.js
- docs/RELEASE-CHECKLIST.md
- index.html
- manifest.json
- package-lock.json
- package.json
- sw.js
- tests/app.test.js
- ITALY-PROJECT-HANDOFF.md
- assets/guides/rome-tour-voucher-1212654.pdf
- assets/guides/florence-tour-voucher-1212654.pdf
- assets/guides/tour-payment-confirmation-1212654.png
- docs/UPDATE-11.0.3.md

## Commit title

v11.0.3: update tour vouchers and apply targeted maintenance fixes

## Commit description

Update Rome and Florence to booking 1212654 and add offline vouchers/payment confirmation. Record $351.64 and $304.44 as company-paid expenses awaiting an expense report. Track Venice $241.38 as a scheduled company-card cost for Oct 10, excluded from actual expenses until charged.

Correct EES, taxi, tram-strike and post-midnight-drive guidance; fill 32 missing pronunciations and clarify the train-purchase badge. Fix empty Order labels, FX-date labeling and install-sheet scrolling/browser cancellation. Allow optional offline-cache failures while requiring core files and admission vouchers before activation.

Order the existing All Guides cards chronologically without changing cards or filters. Open either FCO guide page from Travel Details in the existing two-page swipeable gallery.

Preserve existing layout, stable IDs, backup schema 6 and device-specific data. No phrase drill or duplicate Today sharing feature. Update release metadata, checklist and project handoff.

Validation: npm test 41/41; both supplied phone-export simulations preserve existing data; offline optional/core failure simulations pass. Physical-phone PDF, layout and airplane-mode checks remain pending.

## Per-item change summary

See CHANGELOG.md → Version 11.0.3 for A1–A7, B1–B4 and C1–C3. A5 needed no change; C1/C2 were deferred. C3 is a static link/checklist entry using existing components. No new navigation or redesigned pages.
