# Italy 2026 Travel Companion — Project Handoff

Updated September 30, 2026 for the v11.0.3 maintenance candidate. Original continuity guide prepared August 23, 2026 for account transfer.

## Start here

This document is the continuity record for the Italy trip and its companion web app. Treat it as project context, not as a replacement for the live repository or fresh phone backups.

The app has three different kinds of information, and none should be confused with the others:

| Information | Canonical source | Protection rule |
|---|---|---|
| App code and built-in trip data | GitHub repository, `main` branch | Keep GitHub plus an offline source ZIP |
| Future development | GitHub repository, `develop` branch | Start from a fresh `develop`, test, commit, push, then merge to `main` |
| Personal changes made in the app | Local storage on each phone/PWA | Export a fresh JSON backup from every phone before risky work |
| Locally attached photos | The phone/browser that captured them | Save/share them separately; JSON backups do not contain the image files |
| Planning decisions and ChatGPT continuity | This handoff plus Project chats/files | Upload this document to the new ChatGPT Project |

Moving or losing a ChatGPT conversation does **not** delete the GitHub repository, GitHub Pages site, or data already stored on a phone.

## Current release / verification boundary

- Product: Italy 2026 Travel Companion
- Repository: <https://github.com/davidwhite1372/italy-2026-app>
- Supplied fresh develop baseline: 11.0.2, home-PC commit ac59e06.
- Current local maintenance candidate: 11.0.3 (see APP_METADATA and release checklist for timestamp).
- Backup schema: 6, unchanged.
- Production branch: main; working branch: develop.
- Hosting: existing GitHub Pages. No remote branch, live site, or phone installation was changed by this work. Production has not been independently checked in this session.
- Both Sep 30 labeled phone exports were reviewed and tested separately. They are not interchangeable.
- No cloud sync, backend, or transmission of trip data. Preserve local/offline behavior.
- Original Aug 23 statements about v10.10.1 and future Version 11 are historical and superseded by the fresh source.

## September 30 maintenance scope

- Both Rome Oct 7 and Florence Oct 9 tours use booking 1212654, unchanged dates/times, with supplied PDF vouchers on their existing Travel Details cards.
- Company-paid actual expenses: Rome $351.64 and Florence $304.44, total $656.08, expense report still required. No previous tour charges exist in supplied master expenses or phone exports. Do not infer refund status for charges outside those sources.
- Venice $241.38 is scheduled to charge the company card Oct 10. Track it as planned, not actual, until the charge succeeds; then record the Minuteman expense and submit the expense report. No automatic charge verification.
- All Guides are ordered by trip date. Both FCO plane-to-train page buttons in Travel Details now open the existing two-page gallery for swiping; unrelated viewers are unchanged.
- Minimal EES/taxi/strike guidance, pronunciation, train badge, after-midnight-drive annotation, empty Order label, FX caption, install-sheet, and offline-cache corrections; no redesign.
- All 67 restaurant maps already exist. Existing Today text sharing found. Phrase drill and additional sharing features deferred.
- Tests and isolated device simulations pass. Physical phone PDF, viewport, and airplane-mode review remains pending. Original vouchers each contain both tours, Rome page 1 and Florence page 2.
- The supplied payment-confirmation screenshot is linked on both tour cards and cached offline. User-added receipt and journal photos remain outside JSON backups.
- Follow docs/RELEASE-CHECKLIST.md and CHANGELOG.md for current status and per-item details. Main merge requires David's explicit approval after develop review.

## Established working method

1. Confirm `develop` is current and has no local changes.
2. Work in small, numbered fixes on `develop`.
3. Deliver complete replacement files or a complete build ZIP; avoid asking David to hand-edit code.
4. Run automated regression tests.
5. Have David verify the affected features and offline use.
6. Commit and push `develop`.
7. Merge `develop` into `main`, push, verify GitHub Actions and the live Pages deployment.
8. Create the version tag/release only after production verification.

David uses GitHub Desktop and prefers explicit, one-step-at-a-time instructions with the exact branch, button, commit summary, and verification expected.

## Important application decisions already made

- Permanent stable IDs are used for Timeline items, restaurants, attractions, reservations, budget items, packing records, and open items.
- Travel `Item Type` and `Transportation Mode` are separate controlled dropdown fields and can be filtered independently. Transportation details may remain free text.
- Timeline performance, in-place Details expansion, scroll-position restoration, and second-tap scroll-to-top behavior were implemented.
- Italian phrases are editable and support add/delete, spelling assistance, categorized headings, and an external translation link.
- Packing, Italian Phrases, and Safety & Emergency are separate destinations.
- Hotels, restaurants, event venues, and Travel Help map locations are separated.
- The JW Marriott Venice address/map target was corrected.
- The Euro converter defaults to 1 instead of 100; dark-mode readability was subsequently addressed.
- Venice tide guidance and the supplied Rialto, Santa Lucia, and San Marco graphics were incorporated into local guide content.
- The EES / Quick Border app reminder was added as a pre-trip check, not as a claim that Italy is currently supported.
- Expense receipts may have up to two local-only photos. OCR was intentionally skipped.
- Journal/note photos are local to the capturing phone. The preferred album/folder concept is `Italy/Journal Notes` when the device allows saving/sharing there.
- Reviewed edits from the August phone exports were promoted to permanent master data in Version 10.10.1.

## Data-safety rules for all future work

- Never uninstall the PWA, clear site data, reset the browser, or use a destructive import until a fresh backup exists.
- Export from **each phone separately** because local changes can differ.
- Name backups with device and date, for example `italy2026-backup-david-pixel-2026-08-23.json`.
- Use **Merge** when combining current phone changes unless a fully reviewed replacement is explicitly intended.
- Save/share all important attached photos separately; treat them as outside the JSON backup.
- Before changing the data model, preserve backward import compatibility and add a regression test for the previous schema.
- Do not treat an old chat attachment as the latest phone backup. Ask David for a fresh export.
- The final trip agenda is still expected later. Clean and validate it before importing; do not replace good existing records merely because a spreadsheet cell is blank.

## Data hygiene for the final agenda

Use one canonical record per real-world item and reference related entities by stable ID. Avoid retyping hotel, venue, map, reservation, or transportation facts across multiple worksheets or app sections.

Recommended core Timeline fields:

- Stable item ID
- Day/date
- Start and end time; derive duration when possible
- City
- Item name
- Item type
- Transportation mode and optional transportation details
- Starting and ending location IDs
- Starting-point and ending-point map links
- Actual route link
- Details and optional notes
- Reservation/confirmation reference
- Alternatives
- Source and last-verified date

Keep hotels/venues, reservations, travel legs, and reference links as reusable records instead of duplicating their full details inside every Timeline row.

## Known trip/app research topics to preserve

Search the old ChatGPT sidebar and other saved material for Italy-specific conversations using these terms. Move or summarize any useful result into the new Project:

- Italy 2026 app, Italy companion, Timeline, final agenda, data cleanup
- Rome, Florence, Venice, Copenhagen, Boston, JFK, Tampa
- Anantara Palazzo Naiadi, W Florence, JW Marriott Venice, Hotel Antiche Figure
- Italo 8904, vaporetto, Venice transfers, walking routes
- Caffè Florian and Italy restaurant searches
- Italian phrases, pronunciation, Reverso Context
- Venice tides, acqua alta, Rialto, Santa Lucia, San Marco
- EES, Entry/Exit System, Quick Border
- Packing, luggage, shoes, shipment tracking, MarineTraffic
- Flights, airports, connections, hotels, maps, restaurants, and tours specific to this trip
- Final agenda spreadsheet and future import design

## Files to place in the new ChatGPT Project

Upload these as separate Project sources where possible:

1. `ITALY-PROJECT-HANDOFF.md`
2. `ITALY-MIGRATION-CHECKLIST.md`
3. `ITALY-PROJECT-INSTRUCTIONS.txt`
4. The latest complete application source ZIP
5. A **fresh** JSON export from every phone
6. Separately saved local photos or a folder/ZIP containing them
7. The final-agenda workbook when it arrives
8. Any essential PDFs, reservations, maps, or research results not already represented in the app

Avoid uploading screenshots and obsolete patch ZIPs unless they are needed to explain a still-open problem.

## What the new ChatGPT should do first

1. Read this handoff and the migration checklist.
2. State the current release, backup schema, production branch, working branch, and three source-of-truth layers.
3. Inspect the latest source ZIP or repository before proposing changes.
4. Ask for a fresh phone export before any data migration.
5. Preserve stable IDs, offline operation, backward backup compatibility, and local user data.

## Current handoff boundaries

- The GitHub repository is the code source of truth; this document does not duplicate the entire source tree.
- This document summarizes the decisions from the long development conversation; it is not a verbatim transcript.
- Old searches from unrelated chats cannot be discovered automatically from inside this one conversation. Use the topic inventory above to find them while the work account is still accessible.
- Trip dates, times, reservations, and agenda details must be verified against the forthcoming final agenda and current app data before bulk updates.

