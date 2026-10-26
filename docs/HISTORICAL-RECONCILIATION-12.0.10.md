# v12.0.10 — Actual-trip historical reconciliation (working specification)

Prepared October 25, 2026, 10:37 PM EDT. Working branch: develop. Production v12.0.9 remains unchanged. This is a source-reconciliation checklist, **not** an assertion that historical data has been corrected or deployed.

## Objective
Make the *actual trip* the permanent built-in itinerary and Timeline reference. Keep the originally booked itinerary distinguishable as superseded, not silently erase its provenance. Do not substitute tentative plans or inferred locations for confirmed activity. Preserve stable IDs, backup schema 6, offline behavior, both device-local JSON data sets, and phone-only photos.

## Verified from current source
- `data.js` currently contains **no DL112** and still includes `flight-sk928` and `tl-0007` for the October 4 BOS→CPH SK928 flight. The October 4 day summary and Boston transfer guidance also refer to the old itinerary.
- Current historical itinerary still includes the planned CPH connection; flight changes must be reconciled across flight records, timeline cards, day summary, reservation/wallet notes, airport guidance, and any door-to-door routes. Do not change only one card.
- Existing October 8 transfers were previously approved; preserve their cards and times while reconciling actual movements.
- October 15 Venice hotel→VCE transfer was later reported as a water taxi, replacing the earlier ATVO bus plan. Confirm actual operator/times before changing clocks.

## User-reported actual itinerary / pending source confirmation
- Replacement transatlantic flight **Delta DL112 BOS→FCO**, October 4 departure / October 5 arrival, instead of the planned BOS→CPH SK928 and onward CPH→FCO connection. Earlier discussion suggests roughly 19:35 / 09:10 (+1 day); treat these clocks as **unverified until boarding pass, flight record, or dated receipt confirms them**.
- Preserve Oct 8 Rome→Florence luggage pickup, PSA lobby meeting, station walk, train and hotel transfer.
- Incorporate additional actual Venice walks, food stops, Burano lunch, and reconstructed stops only with clear evidence classification.

## Evidence and source priority
1. Actual boarding passes, airline itinerary changes, contemporaneous receipts, dated GPS/Timeline and photo metadata.
2. User's direct post-trip corrections.
3. Both October 18, 2026 device-labeled exports, separately: David Cell and David Work Cell. Never combine or overwrite device data.
4. Original planned itinerary as fallback context only, never as proof that an activity happened.
5. Inference from stop duration or geography must be visibly marked estimated.

## Implementation safeguards
- Inventory exact IDs and every cross-reference before changing master data.
- For a canceled/superseded flight, preserve original booking history while making the actually flown route the primary Timeline.
- Verify first-load normalization does not reinsert canceled flights or overwrite phone edits.
- Add regression tests for actual-route Timeline, day summaries, reservation references, sorting, persistence and offline boot.
- Keep production on v12.0.9 until a reviewed v12.0.10 release; no reset, import, uninstall, or cache clear.
- Await user's ongoing airplane-mode test result; do not claim offline issue resolved until phone verification.

## Open evidence
- DL112 actual times and the fate of the original Copenhagen segments.
- Whether DL2706 TPA→BOS was flown as originally scheduled.
- Exact October 15 water-taxi departure and VCE arrival.
- Verified receipt/GPS/photo evidence for meal stops and additional walking routes.
