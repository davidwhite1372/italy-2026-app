# Version 12.0.0 — October 2, 2026

Build prepared on `develop` October 2, 2026 at 4:11 PM EDT. Production `main` has not been changed by this patch.

- Reconciled the final Oct 5–15 itinerary with the approved JLFC/PSA agenda decisions.
- Replaced Oct 7 free dinner/Da Danilo with the booked Twilight Trastevere Rome Food Tour and direct Colosseum→Tiber Island transfer.
- Added the Oct 7 ticket offline, planned $332.46 charge, booking/reservation/confirmation details, and time-critical transfer guide.
- Corrected Oct 8 Train 10 luggage/group sequence; Oct 10 PSA luggage/wait-for-PSA sequence; Oct 11 Murano/Burano TBD timing; Oct 12 central-Venice default; Oct 13 stay-in-Venice warning; Oct 14 open Venice/check-in reminder; Oct 15 through-to-TPA baggage plan.
- Travel Details now preserves deliberate phone edits, restores the edited card position, and supports compact day filtering with previous/next and swipe navigation.
- Preserved stable IDs and backup schema compatibility.

## Version 11.0.3 — September 30, 2026

Build prepared on `develop` September 30, 2026 at 5:57 PM EDT. Production `main` has not been changed by this patch.

### Tour booking and expense update
- Rome Oct 7 and Florence Oct 9 use booking 1212654 throughout Today, Timeline, reservations, routes, and Travel Details. Dates, start/check-in times, and existing IDs are unchanged.
- Added the supplied original PDFs and payment-confirmation screenshot to the tour cards through the existing PDF/image viewers and offline shell. Both originals include both tours (Rome page 1, Florence page 2).
- Added Rome $351.64 and Florence $304.44 as actual company-paid expenses, not reimbursable, receipt supplied, report not submitted. Total $656.08. No old tour charges existed in master data or either phone export. Existing default-expense merges preserve edits and prevent repeat additions.

- Venice $241.38 is a scheduled company-card cost for Oct 10, not an actual expense. Added budget-0020 and refined the existing Viator reservation/open-item/checklist reminders to record the Minuteman actual and expense-report requirement only after a successful charge. No automatic expense is created from a date alone.

- Reordered the 18 existing All Guides cards: before-departure references first, Oct 4–15 chronologically (multi-day guides at their first date), general references last. Oct 15 Venice departure precedes the Copenhagen return connection. No guide cards or filters were added, removed or redesigned.

- Fixed the two-page FCO plane-to-train guide under Travel Details: either page button opens the same two-page gallery used by All Guides, enabling swipe, arrows and zoom. No change to unrelated image/PDF links. Regression simulates swiping both directions and opening from page 2.

### Reviewed proposal outcomes
- A1: replaced optional-sounding EES instruction with mandatory first-entry enrollment and staff-directed transfer/passport-control guidance.
- A2: clarified the €55 direct FCO/Aurelian Walls fare for licensed Roma Capitale taxis, supplements included; other trips follow the applicable fixed fare or meter.
- A3: added the currently listed Oct 10 GEST Florence tram strike, explicitly subject to change and separate from the Italo train. Preserved the existing walking transfer.
- A4: changed the Leonardo Express badge to Buy after baggage claim; kept 12:23 as an explicitly provisional time.
- A5: no change: all 67 restaurants already have map links in supplied develop.
- A6: filled exactly 32 empty pronunciation fields. No other phrase fields changed.
- A7: annotated the Oct 16 post-midnight drive following Oct 15 arrival; kept the Oct 15 trip end/countdown and all dates/times.
- B1: per-asset offline caching tolerates individual optional failures. Core files and both admission vouchers must succeed before activation. Fetch strategies are unchanged.
- B2: suppressed the Order label for empty/whitespace-only restaurant orders.
- B3: caption identifies the cached EUR-rate date or the planning-rate fallback; conversion calculations are unchanged.
- B4: constrained install sheet to the available viewport and enabled scrolling; browser-level cancellation now records dismissal using the existing seven-day mechanism. Existing safe-area padding retained.
- C1: deferred; no phrase drill or new navigation.
- C2: deferred; an existing Today text-sharing function was found, so no duplicate feature was added.
- C3: added one static official MIT strike-calendar contingency and one linked 72-hour checklist item using existing components. External calendar requires internet; no automatic monitoring.

### Validation and boundaries
- All 41 existing regression tests pass with current release/booking assertions.
- Separate simulations using both Sep 30 schema 6 phone exports preserve their normalized device-specific data, with only the two added default expenses.
- Stable record IDs unchanged; all 67 existing restaurant objects unchanged; only 32 pronunciation fields changed.
- Simulated optional-guide failure permits installation; core-file or voucher failure rejects activation.
- Physical phone viewport and PDF-opening/offline checks are still required. No installed phone data, receipt photos, production deployment, or remote Git branch was modified.

## Version 11.0.2 — September 29, 2026

Build prepared on `develop` September 29, 2026 at 6:29 PM EDT.

### Confirmation wallet visibility
- Gave each hotel confirmation its own labeled line using the same prominent `wallet-key` styling as TSA Known Traveler Numbers and Delta SkyMiles.
- Kept a dedicated Copy number control beside every hotel confirmation and displayed the room type on a separate line.
- Bumped app/build/package/manifest metadata and the PWA cache key to Version 11.0.2. Backup schema 6, hotel records, and local phone data remain unchanged.

## Version 11.0.1 — September 29, 2026

Build prepared on `develop` September 29, 2026 at 6:07 PM EDT.

### Hotel confirmations
- Added the PSA email confirmations for Anantara Palazzo Naiadi (203390136, Premium Room, Oct 5–8), W Florence (186071359, KING, Oct 8–10), and JW Marriott Venice (187185636, KING, Oct 10–13) to the shared hotel, reservation, and confirmation-wallet records.
- Updated the W Florence check-in card and hotel-map notes to show the confirmed room type and confirmation number; removed stale notes saying the group hotel confirmations were still missing.
- Added a Copy button beside every hotel confirmation in the wallet.
- Updated app/build/package/manifest metadata, the PWA cache key, and last-edited time for Version 11.0.1. Backup schema 6, existing hotel IDs, offline behavior, and local phone data remain unchanged.

## Version 11.0.0 — September 29, 2026

### Major agenda and guide release
- Updated the October 5–12 itinerary from the reviewed Joe Lynch / PSA agenda and personal bookings; October 13–15 personal plans remain unchanged.
- Replaced the Oct. 5 SEEN dinner card with the Joe Lynch Group Dinner at Nerone and added restaurant website/map links. Leonardo Express remains a next-available ticket bought in the Trenitalia app after bag collection; 12:23 PM is a planning placeholder, not a booked ticket.
- Replaced Oct. 6’s generic excursion and dine-around entries with the Cantine Santa Benedetta excursion and Comodo Mercado Trevi dinner.
- Added the booked Oct. 7 Vatican Museums / Sistine Chapel / Colosseum tour, detailed outbound Metro A directions, a separate return-to-hotel card, clickable maps, and offline picture/PDF guides. Replaced the Villa Miani gala with flexible free-dinner time and a Trattoria da Danilo suggestion from the existing restaurant list; the booked tour and return-to-hotel guidance remain.
- Replaced the obsolete Oct. 8 train details with the user-supplied Train 10 group block (10:45 AM–1:15 PM), keeping the lobby meeting, group station walk, and train leg in order. Replaced Giardino Corsini with the private Joe Lynch dinner at Trattoria Da Burde at 7:00 PM, explicitly time-unconfirmed.
- Replaced Oct. 9 free-explore content with the booked Accademia / Uffizi tour and matching outbound/return walk cards, clickable maps, and offline picture/PDF guides; preserved the 6:15 PM PSA group dinner at Cucina (Via Giano della Bella 3rosso).
- Replaced the Oct. 10 dinner-of-choice card with Osteria Ai Assassini at 6:00 PM provisional; preserved Italo 8904, the PSA-led station-to-hotel transfer, and the gondola experience.
- Confirmed the Oct. 11 PSA Murano & Burano excursion while keeping only its still-unknown pickup/pier/return details open.
- Refined Open Items to remove completed, optional, duplicate, and obsolete tasks. The Oct. 10 Venezia Santa Lucia-to-JW transfer is listed as PSA-led per the user's instructions; Oct. 15 is marked as timetable-pending rather than hotel-pending.
- Checked the current EU Travel to Europe FAQ: preregistration currently supports Sweden and Portugal, not Denmark or Italy; marked that pretrip check complete.
- Replaced Oct. 12 free-explore activity with the booked Doge’s Palace / St. Mark’s Basilica tour, hotel shuttle/walking cards in both directions, clickable maps, and offline guides; replaced the dinner-of-choice card with the 7:00 PM PSA group dinner at Ristoteca Oniga.
- Updated Oct. 12 shuttle instructions against JW Marriott’s current information: target the 9:00 AM boat only after concierge confirmation; the official page describes service from 8:30 AM and about every 30 minutes, subject to changes.
- Added tour reservation records and updated the event venue index, Maps/Travel routes, offline All Guides library, and service-worker shell for the new guides.
- Added a Copenhagen return-connection visual guide for the Oct. 15 SK2692 → SK915 transfer, using live signage instructions and no assumed gate or terminal.
- Added an October 6 dated reminder to check email for the €620 Hotel Antiche Figure balance payment link and pay when received.
- Refreshed app/build/package/manifest metadata and the PWA cache key for Version 11.0.0. Backup schema 6 and stable pre-existing IDs remain compatible.
- Shared cloud synchronization remains future evaluation work; this release does not add a backend or send local trip data online.

## Version 10.14.11 — September 27, 2026
- Fixed stale phone-export overrides that could restore “Morning,” an outdated duration, or Pending status on the Oct. 8 PSA train card; confirmed master values now take precedence while unrelated phone notes remain.
- Displayed the train times as 12:05 PM–1:45 PM in Timeline and Travel Details and regression-checked the sequence: 11:00 AM lobby meeting, train, station-to-hotel walk, then W Florence check-in.
- Kept backup schema 6 unchanged.

# Changelog

## Version 10.14.10 — September 27, 2026
- Added a visible Oct. 8 Anantara Palazzo Naiadi checkout reminder ending at 11:00 AM, directly before the 11:00 AM PSA lobby meeting and luggage drop.
- Updated the Oct. 8 day checklist and Rome hotel record with the checkout deadline; backup schema 6 remains unchanged.

## Version 10.14.9 — September 27, 2026
- Ordered the Oct. 8 Florence arrival as train (12:05–1:45 PM), station-to-hotel walk (about 1:45–1:55 PM), then W Florence check-in from 3:00 PM.
- Added the missing station-to-W Florence walking instructions while keeping Firenze S.M.N. and the PSA arrival transfer visibly provisional until confirmed.
- Added a compact Show day dropdown to the existing Timeline filters; all days remains the default and the existing layout and mode/status filters remain in place.
- Kept backup schema 6 unchanged.

## Version 10.14.8 — September 27, 2026
- Added the four paid SAS advance seat-selection receipts to the budget as a $260 flight cost, with the traveler, segment, and EMD breakdown.
- Preserved the Oct. 8 PSA train timeline split and the rest of the 10.14.7 develop updates; backup schema remains 6.

## Version 10.14.7 — September 27, 2026
- Added the Samsung Galaxy S23 Ultra Italy Camera Cheat Sheet to All Guides & Maps and the offline app shell.
- Kept the Oct. 15 airport transfer on the ATVO/ACTV bus plan and removed the water-taxi backup from the itinerary.
- Recorded the Oct. 8 PSA-managed Rome–Florence group train as confirmed from the 11:00 AM lobby meet and group luggage drop, separate 12:05 PM departure, 1 hour 40 minute ride, and estimated 1:45 PM arrival; the train number is not needed.
- Kept the event-provided hotel reservations confirmed while recording that there are no additional confirmation numbers; added the Marriott Bonvoy name-search result and the still-missing JW room/shuttle details.
- Kept the SK681 flight confirmed and the seat-selection follow-up open until check-in.
- Clarified that Giardino Corsini dinner information from the temporary agenda remains provisional; no dinner details are confirmed yet.


## [10.14.6] - 2026-09-27

### Changed
- Removed the generic taxi phrase and Venice water-taxi daily phrase; replaced them with “I would like a vaporetto ticket, please / Vorrei un biglietto per il vaporetto, per favore” and pronunciation guidance.
- Replaced the obsolete taxi phrase-of-the-day on Rome arrival with the hotel-reservation phrase and removed taxi alternatives from the affected trip-day route text.
- Retired the phone-only taxi deletion marker without reusing its ID; kept the prior promoted phrase IDs, schema 6, and unrelated phone data unchanged.
- Bumped app, build, package, manifest, and service-worker cache metadata to 10.14.6.

## [10.14.5] - 2026-09-27

### Changed
- Promoted David’s “Do you have.... / Avete” phone phrase under its existing stable ID as “Do you have…? (asking staff) / Avete…?” with pronunciation ah-VEH-teh.
- Added the promoted ID to the retired-phone catalog list so the duplicate custom record and any stale deletion marker normalize away while the permanent built-in remains visible.
- Kept the formal greeting update from 10.14.4, backup schema 6, and unrelated user data unchanged.
- Bumped app, build, package, manifest, and service-worker cache metadata to 10.14.5.

## [10.14.4] - 2026-09-27

### Changed
- Promoted the formal greeting “How are you? / Come sta?” as the sole built-in phrase for phrase ID phrase-0103, with pronunciation KOH-meh STAH.
- Removed the exact stale phone override that carried the formal Italian text with the informal pronunciation; unrelated phrase edits and user data remain untouched.
- Kept backup schema 6 and incremented app, build, package, manifest, and service-worker cache metadata to 10.14.4.

## [10.14.3] - 2026-09-23

### Data update
- Reconciled phone phrase edits and added Maritozzo and Permesso with their existing stable IDs; retained private luggage-lock notes and the personal expense as phone-only data.
- Added seats DL2706 29F/29E, SK928 27E/27D, SK915 24G/24H, and SK3438 27A/27B; left SK681 open.
- Added the corrected Boston Terminal A → E guide with exact DL2706/SK928 times and updated shuttle, TSA, and gate targets.
- Updated the timeline, Travel Details, and route notes from the temporary PSA agenda; marked the official Joe Lynch agenda and incomplete train/coach details for follow-up.
- Kept backup schema 6 and stable records; release remains on the 10.x version line.

## [10.14.2] - 2026-09-13

### Stabilization / reconciliation
- Added explicit Confirmation Wallet roles for H9BVBD (master itinerary), GQMVQK (Delta DL2706), and AZ3BUA (SAS-managed portions), plus SAS e-ticket numbers 117-2618230396 (David) and 117-2618230398 (Melody).
- Promoted reviewed packing updates: Professional dinner outfit (1 each), SD Card and USB Adapter, Luggage Cable Lock, and 10 shared Luggage Padlocks.
- Promoted the reviewed phrase updates with consistent display capitalization and pronunciation for Good Morning, I Don't Understand, and Caffè Latte.
- Added compact phrase-category filter chips while retaining phrase search/edit behavior and custom-category support.
- Renamed the Home card to Trip Critical / Open Items; it now ranks up to five unresolved items by urgency and shows Trip Critical: All Clear when none remain.
- Added Last Verified: Sep 13, 2026 labels to time-sensitive connection, airport, transfer, transit, departure, and Laundry King guide entries.
- Updated the permanent UniCredit Rome ATM reference with verified location guidance; removed the redundant Laundry - Florence default note because the permanent guide already covers it.
- Kept backup schema 6 unchanged and preserved stable IDs / historical phone compatibility.
- Bumped release metadata, package version, and service-worker cache to 10.14.2.
- Added the agreed unresolved-item count badge to the Trip Critical / Open Items card.
- Fixed Today Plan date chips so the active date automatically scrolls into view when moving across the trip.

## [10.14.1] - 2026-09-11

### Changed

- Added the live Copenhagen passport-wait link to both the Key Trip Guides connection card and the Airports & Terminals Copenhagen card.
- Combined FCO Arrival → Train Station pages 1 and 2 into one All Guides & Maps card with two page links; each opens a bidirectional swipe, arrow, and keyboard viewer without displaying thumbnails in the card.
- Reordered All Guides & Maps chronologically to follow the travel timeline, with date/use labels on each card.
- Bumped the service-worker cache and release metadata for the 10.14.1 build.

## [10.14.0] - 2026-09-11

### Added

- Added canonical David and Melody traveler identifiers without duplicating shared flight records.
- Added the generic Italian phrase “I would like… / Vorrei” with pronunciation.

### Changed

- Corrected the Google Translate launch path to target the installed Android app before using web fallback.
- Replaced the retired luggage budget item with the receipt-backed Travelpro Platinum Elite Carry-On Spinner — True Navy purchase.
- Promoted the newer UniCredit ATM note from the phone review and reconciled phone deltas without duplicate records.
- Renamed and reordered the featured Key Trip Guides section for Copenhagen, FCO arrival, and Venice.
- Combined duplicate CPH outbound and ACTV Vaporetto guide cards so graphic and PDF links appear together.
- Moved Maps, Links & Travel Guide directly below Journal & Notes in Trip Tools.
- Removed the stale Technical notes deletion marker while keeping the technical note available for future review.
- Bumped the service-worker cache to ensure installed PWAs receive the 10.14.0 release cleanly.

### Preserved

- Backup schema 6, offline guides and graphics, stable IDs, local photos, phone-only luggage lock codes, and unrelated phone deletion markers.
- Pending agenda items remain pending until the official agenda is available.

## [10.13.0] - 2026-09-06

### Changed

- Renamed the Maps comfort filter from “Practical guides” to “Comfort.”
- Added the Copenhagen passport-control wait tracker to both CPH layovers in Timeline and Travel Details.
- Added the Laundry King Florence flyer to the complete All Guides fail-safe library and offline shell.
- Preserved the Laundry - Florence note and retired only the reviewed restaurant phrasing note now covered by permanent phrases.
- Preserved luggage notes on both phones without replacing phone data.
- Preserved prep-tab selection in the URL so refreshing Phrases or Safety returns to that tab.
- Added the reviewed Google Translate direct-component test path with app, Play Store, and web fallbacks.
- Added the permanent restaurant phrase “Vorrei un'acqua naturale, per favore” with syllable-by-syllable pronunciation.
- Restored the original Rome, Florence, and Venice bathroom maps in the Comfort section while retaining live Google Maps links.

## [10.12.1] - 2026-09-05

### Changed

- Added high-resolution PNG versions of the CPH connection guide and 2026 ACTV Vaporetto map for direct in-app viewing, while retaining the PDF versions as secondary print options.
- Fixed unreadable Quick Guides & Maps feature buttons by separating button background and label colors.
- Noted that the current Maps, Links & Travel Guide separation needs another reorganization pass soon; no further structural change is made in this patch.
- Updated the in-app version, build, service-worker cache, package metadata, and last-edited timestamp.

## [10.12.0] - 2026-09-05

### Added

- Added the CPH outbound connection guide and current 2026 ACTV Vaporetto route map as offline app guides.
- Added offline Italian phrase playback with normal-speed and slow practice controls.
- Added a Google Translate face-to-face shortcut with browser fallback.
- Added separate Favorite and Want to try restaurant states and filters.
- Added persistent work expense report status, submitted/unsubmitted filters, and receipt-scan network messaging.

### Changed

- Reorganized Maps, Links & Travel Guide into task-based quick sections with a prominent Venice Vaporetto map and no duplicate hotel, venue, saved-item, or consular displays.
- Repaired mobile sticky behavior so Timeline date headers and Travel Details filters stay below the app header without overlaying content.
- Replaced direct PDF download links with an in-app PDF viewer and fixed phrase playback for Italian entries containing apostrophes.
- Wrapped restaurant and expense filters so every option remains visible on narrow phone screens.
- Corrected the Oct 4 departure to 06:00 and the outbound CPH connection to a 90-minute scheduled connection with an 08:10 gate target.
- Corrected phrase spelling and pronunciation, promoted Coperto and the reviewed phrase additions, and placed menu terms under Restaurants.
- Added receipt-authoritative expenses: $6.35 carabiners, $21.97 wallet and cable lock order, and $83.07 Moto Tag order dated September 3.
- Anchored Timeline dates and Travel Details filters beneath the measured app header, including phone safe-area space.
- Enlarged the reference-note editor and kept its Save/Cancel controls accessible while scrolling.
- Moved Journal & Notes directly below Italian Phrases in Trip Tools.

### Preserved

- Stable IDs, local-only photos, offline behavior, backup schema 6, and older supported backup imports.
- Private luggage-lock information remains phone-only and outside source control.

## [10.11.0 DEV] - 2026-09-01

### Changed

- Renamed Travel to Travel Details and made Timeline the clearly labeled live trip-day guide.
- Added two-way deep links between linked Timeline and Travel Details cards, including exact-card scrolling, expansion, highlighting, and direct edit mode.
- Made browser/Android Back and the visible Back to Timeline button restore the exact originating Timeline card instead of losing the user's place.
- Made the restored Timeline card highlight immediately before smooth centering so the return location is unmistakable.
- Fixed the Timeline Open travel details button to retain high-contrast white text in day and night modes.
- Added official Italian Civil Protection, U.S. State Department, Delta, and SAS alert/status links under Safety and Emergency.
- Added the $407.36 Travelpro Platinum Elite Medium Check-In Spinner purchase with the military discount, taxes, free shipping, and generic Credit Card payment.
- Promoted the reviewed deletion of the redundant David Primary credit card packing item.
- Excluded September 1 Technical Notes from permanent data and kept the private luggage-lock code out of source control.

### Preserved

- Stable IDs, user-entered data, local-only photos, offline behavior, backup schema 6, and older supported backup imports.

## [10.10.3 DEV] - 2026-08-31

### Changed

- Added a full-screen offline image viewer with pinch, double-tap, button zoom, panning, and Android Back support for saved note photos and reference graphics.
- Added the two-page FCO arrival guide, Santa Lucia-to-JW guide, Venice departure guide, bathroom guide, luggage-lock instructions, and full October tide chart in their relevant app locations.
- Promoted Luggage Lock, Luggage/Bag Security Clips, Alternate Wallet, and Credit Cards - Work/Carnival/USAA Debit using their existing stable phone IDs.
- Added a deduplicated editable Food & Ordering phrase group plus new beginner Italian phrases.
- Retired the replaced French-fries and photo-viewer reminder notes while preserving the private luggage-lock-code note.
- Added only the two missing restaurants from the Venice hidden-restaurants article: Corte Sconta and Osteria alla Frasca.
- Standardized place links as Google Place, Apple Place, and Google Directions, while retaining separate official-site links.
- Changed Current saved data and new exports to exclude redundant default notes, base expenses, promoted catalog entries, and empty restaurant flags.

### Preserved

- Stable IDs, user-entered data, local-only photos, offline behavior, backup schema 6, and older supported backup imports.

## [10.10.2 DEV] - 2026-08-24

### Changed

- Promoted the reviewed August 24 phone changes into permanent master data while retaining backup schema 6.
- Made the matching phone classifications authoritative for the Rome hotel arrival, JW Venice breakfast transportation, and Hotel Antiche Figure check-in.
- Added the shared sling-bag credit-card packing record, toilet paper/wipes, and the new “Can you help me?”, “Cheese”, and Estathé phrases using their existing stable phone IDs.
- Added the Rome ATM, Florence laundry, and Euro coins/bills notes as permanent reference notes.
- Normalized previously promoted packing and phrase records so historical custom copies no longer reappear as duplicates.
- Mapped the historical phone Caffe Florian custom ID to the existing permanent Caffè Florian restaurant while preserving favorite state.
- Changed schema 6 exports to omit reference notes, base expenses, travel overrides, and other reviewed records when they are identical to permanent master data.
- Added backward-compatible import handling so older schema 6 backups normalize promoted records instead of recreating duplicates.
- Retired the known redundant August 24 Work Cell SkyConnect route override without using fuzzy matching.

### Preserved

- Stable IDs, existing user state, local-only photos, offline behavior, schema 6 compatibility, and legacy backup import support.

## [10.10.1] - 2026-08-15

### Changed

- Promoted the approved August 15 changes from David's two phone exports into permanent master data.
- Confirmed the hotel-to-station walks in Rome and Florence while retaining the reviewed purpose and transportation classifications.
- Updated permanent packing quantities, removed the erroneous duplicate credit-card entry and obsolete Melody underwear row, and added T-shirts, tracker cards, and a sunglasses case.
- Added “Good night” and “Where is the bathroom?” with pronunciations, and made phrase-category headings easier to scan.
- Preserved the Alibaba backpack and Amazon tracker-card expenses while removing the conflicting Walmart tracker-card entry.
- Marked the awards-dinner details and TPA parking/SunPass checks complete.
- Added an official-source reminder to recheck whether Italy supports the EU Travel to Europe / Quick Border app before departure.
- Added camera/gallery receipt attachments for expenses, with up to two local-only photos and automatic receipt-status updates.

### Preserved

- Existing detailed credit-card packing rows, stable IDs, saved phone data, schema 6 backups, legacy backup import, offline behavior, and production design.

## [10.10.0] - 2026-08-08

### Changed

- Promoted the intentional Pixel-phone Travel item type and title corrections into permanent master data.
- Split Item Type from Transportation using controlled dropdown values, with optional free-text Transportation Details.
- Added independent Item Type and Transportation filtering on Travel and updated Timeline classification editing.
- Advanced new backup exports to schema 6 while retaining automatic normalization of Version 10.9 schema 5 travel overrides.
- Renamed the Travel card disclosure to Details and removed the redundant More information label.
- Corrected the JW Marriott Venice address and map target.
- Changed both currency converter defaults from 100 to 1.
- Removed repeated live-data reconstruction while rendering the Timeline.
- Changed Timeline Details to expand in place without rebuilding all Timeline cards.
- Preserved the visible Timeline position after edits and other required refreshes.
- Made a second tap on the active Timeline navigation button scroll smoothly to the top.
- Split Packing, Italian Phrases, and Safety & Emergency into distinct Trip Tools destinations.
- Made Italian phrases editable with add and delete support, Italian-language spellcheck fields, and an Italian dictionary shortcut.
- Added the requested question words and Italian numbers through 25 plus the common tens, 100, and 1000.
- Included phrase edits, additions, and deletions in schema 6 backup export, replace, and merge workflows.
- Separated true hotels from restaurant and dinner venues in Maps, Links & Travel Guide.
- Classified SEEN by Olivier as a dinner restaurant, Villa Miani as an awards-dinner venue reached by bus, and Giardino Corsini al Prato as a dinner venue reached on foot.
- Moved the U.S. Embassy Rome reference from Hotels to Travel Help/Safety without deleting its address or map links.

### Preserved

- Existing stable IDs, saved phone data, legacy backup import, offline behavior, and production design.

## [10.9.0] - 2026-08-07

### Changed

- Started the Pre-11 Foundation work on `develop` from the tested and tagged Version 10.8.2 release.
- Replaced the stale About-panel data version with the actual backup schema number.
- Centralized current app, build, backup schema, and last-edited metadata.
- Updated current project, deployment, and roadmap documentation.
- Replaced obsolete development-phase code comments with functional descriptions.
- Added automated app-startup, data-integrity, restaurant-management, backup-compatibility, and offline-shell regression tests.
- Added GitHub Actions checks for pushes and pull requests targeting `develop` or `main`.
- Added permanent opaque IDs to all 49 built-in Timeline records and stable derived IDs for custom Timeline items.
- Migrated on-phone Timeline completion, hidden-item, expanded-item, NEXT-item, and scroll targeting to stable IDs.
- Advanced new backup exports to schema 5 while preserving automatic import and conversion of schema 4 Timeline state.
- Removed numeric Timeline step fields from the data model, editors, and map routing while retaining automatic conversion of older numeric backup keys.
- Updated the GitHub Actions runtime to the current Node 24-based action versions.
- Added permanent IDs to all 65 built-in restaurants and all 15 attractions.
- Migrated restaurant edits, favorites, visits, ratings, notes, and deletion markers from name-based keys to stable IDs.
- Migrated attraction visit logs and on-phone photo storage from name-based keys to stable IDs.
- Added UUID-based IDs for newly created restaurants, with automatic IDs for older custom records that lack one.
- Added permanent IDs to all 10 reservations and all 18 planned-budget items.
- Migrated existing reservation overrides and planned-budget edits from array indexes to stable IDs.
- Updated reservation and budget editors to save by record ID while preserving schema 4 and earlier on-phone edits.
- Added permanent IDs to all 66 built-in packing records and all 13 open pre-trip items.
- Migrated packing completion, quantities, editor changes, custom items, and deletion markers from indexes and catalog positions to stable IDs.
- Migrated completed open-item state from visible priority numbers to stable IDs while retaining priority for display and ordering.
- Replaced the obsolete one-time migration flag with repeatable normalization for legacy Timeline, train, transfer, and reservation overrides.
- Corrected legacy train and transfer conversion to use explicit current record IDs instead of filtered array positions.
- Removed retired duplicate train and transfer datasets and five confirmed uncalled compatibility helpers.
- Expanded the automated release suite to verify metadata consistency, every stable-ID collection, representative schema 5 backup round trips, Version 4 conversion, and the offline application shell.
- Completed the final dependency audit with no reported vulnerabilities.

### Preserved

- Existing trip content, locally saved user data, Version 4 backup import compatibility, offline behavior, and production design.

## Version 10.8.2

## About & Restaurant Management
- Corrected the About panel app and build versions and added the last-edited date and time.
- Added full editing for every built-in and user-added restaurant field.
- Added deletion for built-in and user-added restaurants, with changes preserved in backup/import data.
- Added Caffè Florian to Venice and added editable restaurant website and hours fields.

## Version 10.8.1

## Comfort & Essentials
- Added a new filter inside Maps, Links & Travel Guide.
- Added Rome, Florence, and Venice restroom reference maps supplied by the user.
- Added concise lists of reliable options, practical reminders, and Google Maps nearby searches.
- Added restroom-related terms to Global Search.
- Cached the three map images for offline use.

## Version 10.8.0

- Added global search from the app header with direct navigation to matching trip content.
- Added search coverage for Timeline, Travel, reservations, Confirmation Wallet, hotels, restaurants, notes, packing, Safety, maps, links, and travel guides.
- Replaced the Home Days/Nights stat with a compact weather tile showing current temperature, high/low, rain chance, wind, city, and update age.
- Added per-city weather caching and offline last-known fallback.

## Version 10.7.5
- Added separate Tours and To-Dos filters on Travel.
- Reclassified operational itinerary tasks as To-Dos while keeping excursions and experiences under Tours.
- Renamed Maps & Links to Maps, Links & Travel Guide.
- Moved Local Transportation Guide and Travel Help / What If? into the renamed guide page.

## [10.7.1] - 2026-08-03

### Changed
- Replaced the development build label on Home with a compact `Italy App v10.7` About tab.
- Kept the tab in the existing bottom-right Home location.
- Moved app version, data version, and build details into a tap-to-open About panel.

## [10.7.0 DEV] - 2026-08-03

### Added
- Swipe left/right and Previous/Next controls on Today to move through trip days.
- Manual restaurant creation for discoveries made during the trip.
- GPS-assisted restaurant capture that saves coordinates, a Google Maps link, and the nearest trip city.
- Delete controls for manually added restaurants.

### Preserved
- Existing restaurant favorites, visited status, ratings, notes, filters, and backup/import behavior.

## [10.6D4] - 2026-08-03

### Added
- U.S. State Department 24/7 overseas emergency number.
- Tap-to-call buttons for Italy 112, the U.S. Embassy Rome, and the State Department.

### Changed
- Standardized the U.S. Embassy Rome phone number formatting.

## [10.6.0-dev-d3] - 2026-08-03

### Timeline step-label cleanup
- Removed visible Timeline step numbers from the interface.
- Preserved the underlying `step` field for completion tracking, hidden-item state, deep links, validation, and stable chronological tie-breaking.
- Deferred removal of the underlying field until the Version 11 cleanup and dependency review.

## [10.6.0-dev-d2] - 2026-08-03

### Flight duration correction
- Corrected SK3438 JFK to TPA duration from 3h 11m to 3h 23m.
- Kept the confirmed 7:50 PM departure and 11:13 PM arrival times unchanged.
- Updated Timeline, flight details, Travel, and Confirmation Wallet source data consistently.

## [10.6.0-dev-d1] - 2026-08-03

### Permanent trip-data updates
- Saved the TPA Economy Parking to Main Terminal SkyConnect leg as confirmed default trip data.
- Saved the current Rome to Florence PSA group-train plan and outstanding confirmation needs.
- Saved the confirmed Italo 8904 Club Executive details, coach, and seats for Florence to Venice.
- Made the exported Timeline item-type corrections permanent for travel items 3, 4, 8, and 10.
- Added David’s cell phone stand permanently to the checked-bag packing list.

## [10.6.0-dev-c] - 2026-08-03

### Travel page polish
- Rebuilt Travel cards around clearer routes, times, status, confirmations, instructions, and notes.
- Added fast section navigation for flights, trains, transfers, tours, and local transportation.
- Added a Travel readiness summary showing items ready versus items needing verification.
- Added dedicated confirmation blocks and copy-friendly booking information.
- Improved Google Maps and Apple Maps route buttons with clearer labels.
- Preserved Add Trip Item and all single-source-of-truth editing behavior.

## [10.6.0-dev-b2] - 2026-08-03

### Timeline polish
- Improved spacing and hierarchy throughout Timeline cards.
- Reformatted travel legs with labeled From/To points and endpoint times.
- Added sticky day headers with per-day completion counts and progress bars.
- Improved overall progress summary and highlighted the true NEXT step.
- Reorganized Details into clear What to do, Notes, and Maps & links sections.
- Improved mobile readability without changing Timeline data or architecture.

## [10.6.0-dev-b] - 2026-08-01

### Changed

- Added date dividers to separate each timeline day.
- Added compact From → To summaries to travel cards without opening Details.
- Improved timeline icons, spacing, time hierarchy, and mobile readability.
- Refined completed-step fading and strike-through styling.
- Preserved NEXT auto-scroll, full details, links, completion, hiding, and Item Type controls.

## [10.6A1 DEV] - 2026-08-01

### Fixed

- Removed the obsolete Home Screen installation tip from the bottom of Home.
- Removed the duplicate empty Quick Tip container/blue bar.
- Preserved the working Quick Tip section at the top of Home.

## [10.6A DEV] - 2026-08-01

### Added

- Activated the Home Quick Tip card with direct links to the correct app sections.
- Added mobile-friendly Quick Tip button layout.

### Preserved

- Existing countdown / days-and-nights bar at the top of Home.
- Home and Italy clocks directly below the countdown.
- Next Up directly below the clocks.
- All Version 10.5.2 dark-mode and iPhone-install repairs.

## [10.5.2] - 2026-08-01

### Fixed

- Corrected unreadable Timeline `Details` button text in automatic dark mode.
- Added high-contrast normal, active, and keyboard-focus states for the Details toggle.
- Bumped the service-worker cache identity so installed apps receive the repair.


## [10.5.1 DEV] - 2026-07-31

### Fixed

- Added browser-aware iPhone installation guidance. Chrome, Edge, Firefox, and Opera on iPhone now clearly direct the user to Safari.
- Safari now shows the exact Share → Add to Home Screen installation steps.
- Improved Timeline night-mode contrast by keeping colored tiles light and forcing dark readable content text.
- Kept neutral Information cards native to the dark theme.
- Bumped the service-worker cache so installed devices receive the repair.

## [10.5.0 DEV Phase 5] - 2026-07-31

### Changed

- Completed the single-source-of-truth cleanup for flights, hotels, shared travel, activities, Timeline links, and linked Maps routes.
- Migrated and removed legacy duplicate Timeline, train, transfer, and master-owned reservation overrides.
- Removed unused legacy duplicate editor functions.
- Centralized the app/data version label.

### Added

- Data Integrity check under More to verify master references and legacy override cleanup.


## [10.5.0 DEV Phase 4.5] - 2026-07-31

### Added

- Data-owner guidance banners on editable pages.
- Linked Home Quick Tips for common update tasks.
- Timeline links to the correct source page for flight, hotel, and shared travel changes.

### Changed

- Timeline is now mostly read-only for shared records.
- Timeline retains completion, visibility, item-type, and detail controls.


## [10.5.0 DEV Phase 4] - 2026-07-31

### Changed

- Unified trains, transfers, walks, boats, buses, taxis, car/drive legs, tours, events, and information items into shared master travel records.
- Travel, Timeline, and Maps now stay synchronized when those records are edited.
- Added a Tours, Events & Information section to the Travel page.
- Updated the visible app version label to Phase 4.


## [10.5.0-dev-phase2-flights] - 2026-07-31

### Added

- Master air booking and flight records.
- Flight editor on the Travel page, Timeline, and Confirmation Wallet.

### Changed

- Timeline flight legs, Reservations, Wallet, Maps routes, Home Next Up, and shared wallet text now read from the same flight records.
- Editing a flight number, route, date, time, cabin, status, or notes updates all linked flight views.

All notable changes to the Italy 2026 Travel Companion will be documented here.

## [10.4.0-dev-r5] - 2026-07-31

### Changed

- Moved the existing countdown statistics bar to the top of the Home page.
- Preserved the countdown and days/nights design unchanged.
- Home page order is now Countdown, Home/Italy clocks, then Next Up.

## [Unreleased]

## [10.6B1 DEV] - 2026-08-01

### Changed

- Moved the add control from Timeline to Travel.
- Renamed Add a leg to Add Trip Item.
- Added a flexible Item Type-first form for travel, hotel, tour, event, and information entries.
- Added an Added Trip Items section on Travel for editing newly created records.


### Added — Version 10.5 DEV Phase 3 Hotels

- Added four master hotel records.
- Unified hotel names, dates, confirmations, addresses, room details, payment notes, taxes, breakfast notes and map links.
- Hotel edits now flow to Home, Today, Timeline, Reservations, Confirmation Wallet and city cards.
- Preserved existing duplicate source data as a rollback safety net during development.


## [10.4.0 DEV R2] - 2026-07-31

### Changed

- Rebuilt timeline data from the approved cleanup workbook.
- Replaced legacy color/emphasis guessing with explicit Item Types.
- Split Event and Tour into separate types.
- Classified train-like people movers as Train.
- Removed rows marked REMOVE until final agendas are available.
- Added stronger visual separation between timeline cards.

### Version 10.4.0 Development R1

- Added side-by-side Home and Italy clocks.
- Added collapsible timeline details.
- Added NEXT marker and automatic scroll to the first unfinished timeline item.
- Completed items remain in place with faded strike-through styling.
- Preserved the repaired Version 10.3 timeline color logic and all existing trip content.


- Continue quality-of-life improvements on the `develop` branch.
- Evaluate shared cloud data and multi-device synchronization for Version 11.

## [10.2.1] - 2026-07-30

### Added

- Pinch-to-zoom support.
- GitHub Pages deployment package.
- GitHub Desktop workflow.
- Stable `main` branch and working `develop` branch.
- GitHub Pages PWA scope and cache isolation.
- `.nojekyll` marker.

### Preserved

- Existing appearance, navigation, trip content, timeline editing, backup/import tools, and PWA behavior.

### Hosting

- Migrated production hosting from Netlify to GitHub Pages.
- Production URL: `https://davidwhite1372.github.io/italy-2026-app/`


## [10.4.0-dev-r3] - 2026-07-31

### Added
- Home Next Up timeline summary.
- Timeline route-flow details.
- Google and Apple Maps quick actions.
- Wallet copy controls and larger confirmation display.
- Expanded budget-at-a-glance totals.
- Cell Phone Stand to David's Travel Gear packing list.

### Fixed
- Removed obsolete Timeline Emphasis code remaining after Item Type migration.


## [10.6.0 DEV C] - 2026-08-01

### Changed
- Redesigned Travel cards for faster scanning.
- Added prominent departure/arrival layout, confirmation and seat information, and Google/Apple Maps actions.
- Improved train, transfer, tour, event, and custom trip-item presentation.

## 10.7.2 — Travel filtering and search
- Replaced Travel section jump buttons with sticky type filters.
- Added filters for All, Flights, Trains, Transfers, Hotels, Tours, and Other.
- Added Travel search across airline, train, city, hotel, confirmation, route, and notes.
- Added hotels to the Travel view.
- Kept filtered results in date-and-time order and added a live result count.


## 10.7.3 — Wallet traveler identifiers
- Updated the Home About tab to display Italy App v10.7.3.
- Added David's TSA Known Traveler Number, Delta SkyMiles number, and SAS EuroBonus number to the Confirmation Wallet.
- Added Pending placeholders for Melody's corresponding numbers.
- Excluded passport numbers from permanent app data.

## 10.7.4 — Separate travel items from guidance
- Removed static Ground Transport and Contingency records from Travel filter results.
- Added Local Transportation Guide and Travel Help / What If? reference panels.
- Preserved actual custom and miscellaneous trip items under Other items.
- Updated the Home About tab to Italy App v10.7.4.

## Version 10.7.6
- Corrected the Trip Tools label to **Maps, Links & Travel Guide**.
- Replaced page-jump buttons with filters for routes, airports, hotels, official links, local transportation, travel help, and saved items.
- Corrected Trip at a Glance to show the full outbound route: TPA → BOS → CPH → FCO (Rome).

## Version 10.7.7
- Made Travel cards compact and collapsible by default.
- Kept the item title, route, times, mode, duration, and status visible at all times.
- Moved confirmations, instructions, notes, maps, and edit controls under Show details.
- Preserved all shared travel data and links to Timeline, Today, and Confirmation Wallet.

## Version 10.7.8 — Journal & Notes

- Renamed Journal & Memories to Journal & Notes.
- Added a separate offline Notes notebook with individual editable entries.
- Added note search, category filters, pin/unpin, edit, and delete controls.
- Added the permanent “What to drink in Italy if you usually drink sweet tea” reference note.
- Included notes in backup export, import, merge, replace, and saved-data counts.


## Version 10.7.9 — Notes filter visibility fix

- Fixed white-on-white text and icons on inactive Journal/Notes tabs.
- Fixed white-on-white labels on inactive Notes category filters.
- Kept selected filters green and preserved dark-mode behavior.
