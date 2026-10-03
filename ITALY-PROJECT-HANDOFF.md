# Italy 2026 Travel Companion — Project Handoff

Updated October 3, 2026 for the v12.0.4 Uffizi return candidate. Original continuity guide prepared August 23, 2026 for account transfer.

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
- Fresh develop baseline: 12.0.3, commit d7043d7f5584b88777c0b613c9baab043fc15d94; main remains 12.0.0 at 140894a.
- Current candidate: 12.0.4, prepared October 3, 2026 at 12:01 PM EDT.
- Backup schema: 6, unchanged.
- Production branch: main; working branch: develop.
- Hosting: existing GitHub Pages. Live source was independently checked October 3 and shows 12.0.0, last edited October 2 at 7:33 PM EDT. The current candidate is for develop only; main release requires David’s instruction.
- Both October 3 labeled schema 6 / app 12.0.0 phone exports were reviewed separately: David Cell and David Work Cell. They are not interchangeable.
- No cloud sync, backend, or transmission of trip data. Preserve local/offline behavior.
- Original Aug 23 statements about v10.10.1 and future Version 11 are historical and superseded by the fresh source.

## October 3 approved Uffizi return update

- David chose “Work phone” for Oct 9 Uffizi → W Florence return, approving 3:30–4:30 PM. The unchanged Cucina dinner is at 6:15 PM, leaving 1 hour 45 minutes from the end of the planning window.
- Permanent travel-59 / tl-0059 now uses 15:30–16:30. Retain the 15–20 minute walking estimate and route. The tour finish is not confirmed by the master booking record; the chosen window is a planning target, not a confirmed tour duration.
- A first-load device marker corrects only the reviewed earlier personal-phone pair 14:30–15:30. Other custom pairs, private notes/statuses, and subsequent deliberate Save/reload edits survive. No other source card or phone field is promoted.
- Version 12.0.4 was prepared October 3, 2026 at 12:01 PM EDT. Automated tests and both labeled phone-export simulations verify the selected window and data preservation. Main and physical phones remain pending reviewed release.
- Next decision: Oct 11 Murano/Burano, personal phone 8:00 AM–5:00 PM versus work-phone Time TBD. Review separately before promoting times.

## October 3 approved registration update

- David chose 1:30 PM unless it conflicts with surrounding cards. Both labeled exports and clean master place the preceding hotel walk at 1:00–1:20 PM and the next dinner at 5:30 PM. Registration at 1:30 PM fits the current plan.
- The registration desk's opening window remains 1:00–5:00 PM. The 5:00 PM field is the desk closing time, not a planned three-and-a-half-hour registration activity. Hotel room check-in remains available from 3:00 PM.
- Permanent travel-13 / tl-0013 starts at 13:30. One-time reconciliation replaces only reviewed old 13:00 / 13:01 saved starts; unrelated fields, other custom starts, and subsequent edits are preserved.
- Version 12.0.3 was prepared October 3, 2026 at 11:42 AM EDT. Source tests and both separate phone simulations pass; physical-phone review remains pending after an approved main release.
- The Uffizi return conflict is resolved in the approved update above. Murano/Burano and VCE check-in remain for individual review.

## October 3 approved departure update

- David directed “Move bag drop to 09:30.” The existing 25-minute allowance ends 9:55 AM; the following security/gate card is 9:55–10:30 AM.
- First-load reconciliation updates only reviewed old clock fields for travel-3 and travel-4. Other notes and fields survive; a one-time device marker lets subsequent deliberate edits survive Save and reload. It changes neither JSON schema nor local-only photo storage.
- The Oct 4 bag-drop sequence decision is resolved. Do not import or merge the two phone backups to apply this code update. Registration is resolved in the approved update above. Uffizi return is resolved in the approved update above. Murano/Burano, VCE check-in, and other phone edits remain pending individual review.

## October 3 guide increment and pending phone review

- Replaces the Oct 7 Colosseum-to-Tiber-Island guide with David’s original five-page PDF and five matching page images; preserves the existing guide order and travel/timeline IDs.
- Travel Details and All Guides use the same swipeable gallery. The PDF and all five page images must be cached before the worker activates.
- This increment preserves all itinerary records and phone overrides. Registration and Uffizi return conflicts are resolved above. Departure-day and VCE check-in edits create sequence overlaps; Murano/Burano time is marked TBD on the work phone. Review these individually before promoting phone edits.
- Phone-only work is supported through direct GitHub develop commits. No PC or destructive phone import is required. Original phone JSON files and locally attached photos remain separate assets.
- See docs/RELEASE-CHECKLIST.md for automated verification and pending physical-phone checks. Main remains the reviewed production branch.

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

