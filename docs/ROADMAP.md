# Italy 2026 Travel Companion Roadmap

## Versions 10.2.1–10.8.2 — Stable App and Travel Expansion

Status: Released and complete.

- Migrated the app to GitHub Pages, added the travel timeline, master trip data, restaurants, reservations, maps, packing, budget, notes, weather, search, and backup tools.
- Improved mobile/PWA use, offline access, stable IDs, and user-data compatibility.

## Version 10.9.0 — Pre-11 Data Foundation

Status: Released and complete.

- Added stable record IDs, schema compatibility, timestamps, deletion markers, conflict handling, and regression coverage.

## Versions 10.10.0–10.14.11 — Data Refinement and Stabilization

Status: Included in Version 11.

- Refined timeline classification, sticky headers, date anchoring, offline guides, Italian phrases, restaurant states, expenses, report status, and backup compatibility.
- Added CPH outbound and Venice Vaporetto guides, receipt photo capture, improved notes, and phone-data reconciliation safeguards.
- Corrected the outbound CPH connection, Boston terminal transfer, and Oct. 4 departure plan.

## Version 11.0.0 — Major Itinerary and Guide Release

Status: Prepared as a Version 11.0.0 develop build from the supplied source ZIP; local tests pass. Phone review, Git commit/push, and release remain pending.

- Update the reviewed Oct. 5–12 agenda while preserving the Oct. 13–15 personal itinerary.
- Add booked Rome, Florence, and Venice tours, their reservation details, clear meeting instructions, and matched transfer cards.
- Add clickable maps and offline PNG/PDF guides for the tour transfers.
- Keep uncertain facts visible as open items and preserve backup schema 6 and stable record compatibility.
- Maintain local-only trip data and manual backup/import. No cloud backend or sync was added.

## Version 11.0.1 — Hotel Confirmation Patch

Status: Prepared on `develop` September 29, 2026 at 6:07 PM EDT; automated tests pass (41 tests). Phone review remains pending.

- Record PSA confirmation numbers and room types for the Anantara, W Florence, and JW Marriott stays in the existing hotel and reservation records.
- Update the confirmation wallet and related hotel/check-in notes; add per-hotel copy controls.
- Preserve schema 6, stable hotel IDs, offline behavior, and phone-local data.

## Future evaluation — Shared Cloud Data

Status: Not part of Version 11; requirements and authorization remain open.

- Decide whether multi-device synchronization is wanted and which specific records should sync.
- Select an owner-controlled backend and authentication/access model before any implementation.
- Preserve offline operation, export/import, data minimization, and a documented conflict policy.

## Future evaluation — App Features and Project Follow-ups

- Online receipt recognition is not implemented; the app currently keeps receipt photos local. Decide whether recognition must run on-device or may use a service before changing expense data handling.
- The AI Italian tutor and microphone workflow are unfinished. Define Android permission behavior, speech/pronunciation features, lesson pacing, and the requested daily lesson delivery time.
- The PSA Venice Excursions page is not saved offline because its authoritative source page has not been supplied in this work session. Keep the Oct. 11 pickup/pier/return details open until PSA confirms them.
