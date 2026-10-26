# v12.0.10 — Actual-trip historical reconciliation (working specification)

Prepared October 25, 2026, 10:37 PM EDT. Working branch: develop. Production v12.0.9 remains unchanged. This is a source-reconciliation checklist, **not** an assertion that historical data has been corrected or deployed.

## Objective
Make the *actual trip* the permanent built-in itinerary and Timeline reference. Keep the originally booked itinerary distinguishable as superseded, not silently erase its provenance. Do not substitute tentative plans or inferred locations for confirmed activity. Preserve stable IDs, backup schema 6, offline behavior, both device-local JSON data sets, and phone-only photos.

## Verified from current source
- `data.js` currently contains **no DL112** and still includes `flight-sk928` and `tl-0007` for the October 4 BOS→CPH SK928 flight. The October 4 day summary and Boston transfer guidance also refer to the old itinerary.
- Current historical itinerary still includes the planned CPH connection; flight changes must be reconciled across flight records, timeline cards, day summary, reservation/wallet notes, airport guidance, and any door-to-door routes. Do not change only one card.
- Existing October 8 transfers were previously approved; preserve their cards and times while reconciling actual movements.
- October 15 Venice hotel→VCE transfer was later reported as a water taxi, replacing the earlier ATVO bus plan. The October 18 **David Work Cell** export records **08:15–09:15**, mode **Water Taxi**, and note **“Hotel booked taxi transfer.”** Preserve this device-labeled evidence and reconcile the conflicting old planned bus cards before editing.

## User-reported actual itinerary / pending source confirmation
- Replacement transatlantic flight **Delta DL112 BOS→FCO**, October 4 departure / October 5 arrival, instead of planned SK928 and SK681. The user's October 4 Delta screen showed **18:00 boarding, 18:55 scheduled departure, 08:40 scheduled arrival October 5**, gate E14, seat at gate. A later same-day flight update reported **19:30 delayed departure and 09:27 estimated arrival**. These are contemporaneous **schedule/status snapshots, not verified actual wheels-up/wheels-down times**. Keep that distinction in the historical display.
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
- **Phone evidence received:** v12.0.9 opened immediately in airplane mode on David's phone. This verifies core offline startup, not every optional guide/attachment.

## Open evidence
- DL112 actual operated times remain unverified; two contemporaneous flight status snapshots are documented above. The canceled/superseded SK928 and SK681 should not appear as actually flown.
- Whether DL2706 TPA→BOS was flown as originally scheduled.
- October 15 water-taxi 08:15–09:15 is recorded in the David Work Cell export, but actual clock precision and operator are not independently verified.
- Verified receipt/GPS/photo evidence for meal stops and additional walking routes.

## October 25 regression validation (v12.0.10 still unreleased)
- Draft PR #6 compares `develop` with production `main`; it must not be merged without explicit approval.
- GitHub Actions initially found eight failures. Most were pre-trip assertions conflicting with actual-flight and hotel-booked water-taxi evidence; the schema-6 phone-export difference retained a legacy `travel-8` override and is now explicitly covered by the revised test.
- The revised suite tests actual Venice water-taxi timing from the work-phone export, superseded SK681, return seat records, preservation of private phone notes, and the expanded 66-entry timeline. The complete suite must still pass on the final commit.
- Corrected Boston boarding-pass guidance from SAS to Delta DL112. Retired stale instructions to buy the Venice airport bus ticket and pursue SK681 seats; original bookings and stable IDs remain in history.
- No phone import, deletion, offline cache reset, main merge, or production deployment was performed.
