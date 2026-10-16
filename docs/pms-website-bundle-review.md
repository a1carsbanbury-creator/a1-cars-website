# PMS website bundle (16 Oct 2026): review notes

Tasks from Ken Labs PMS, bundled for review. Nothing here is deployed.

## Needs Kenneth's confirmation before merge
1. **Capacities (blocking).** Passenger and luggage figures in `lib/fleet.ts` are still indicative. Seven-plus seaters now say "Up to N passengers" with "fewer cases when every seat is used". Confirm real numbers for: 7-seat people carrier, V-Class, 8-seaters, 16-seat minibus.
2. **"Unlimited mileage" wording.** Used on the homepage hero note, booking form, contact, group, long-distance, Silverstone, terms and a few more. It is not in SOURCE_OF_TRUTH.md. Confirm you want to say it, or swap for "Banbury and the surrounding area".
3. **Terms page** (`app/terms/page.tsx`) was reworded to drop the radius. Check the legal wording.
4. **Structured data** (`lib/seo.ts`) still carries a 15-mile `geoRadius`. Not visible on pages, left untouched. Say if you want it removed.
5. **Vehicle names.** Estates/saloon/people carriers/minibuses are now categories; Mercedes E-Class, S-Class and V-Class keep their names without colours. Only one E-Class card is shown now (black and silver were duplicates).
6. **Port wording.** Southampton Docks is named; Dover, Portsmouth and Harwich are listed as "ask us". Confirm you actually cover them.
7. **Images.** The new pages reuse existing site photos. Port-specific photos would need to be generated or supplied.

## Changes
- 15-mile radius removed from all visible copy.
- Vehicle names replaced with categories; representative-image note replaces the internal "Local review" disclaimer.
- New `/celebrations` (birthdays, weddings, Christmas parties) and `/port-transfers` (Southampton Docks and other ports), linked from nav, homepage, related links and sitemap. Christmas page links to Celebrations.

The heavier Christmas theme and its date gating are in a separate PR.
