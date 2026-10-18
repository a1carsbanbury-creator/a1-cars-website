# Consolidated website review — 18 October 2026

This extends PR #1 (`claude/pms-website-bundle-2026-10-16`) from original commit `b355ed537b8777d3f222304de25f2975ec433e81`. Kenneth requested one PR containing Claude's bundle and the subsequent website work. The heavy Christmas theme in PR #2 remains separate and unchanged.

## Included work

- Claude's removal of public radius wording, vehicle categories, celebrations page and port-transfer page.
- Reviewed vehicle names, representative category wording and indicative capacity/luggage explanations. Mercedes E/S/V-Class remain named preferences. Unverified Transit capacities and precise Sprinter luggage figures are not presented as confirmed.
- Everyday local-hire image, fuller services collection, visual celebration cards and a five-scene rotating hero, plus relevant cruise/ferry images. Seven optimized illustrative WebP assets are included; originals/masters are preserved outside this checkout.
- Removal of the unsupported unlimited-mileage claim in public copy. Contact planning copy asks about stops and returns.
- The completed separate website task's contact-page improvements, five dedicated airport pages, linked airport destinations, actionable service choices and independent looping fleet carousels. That task copied the earlier review site, so both sets of work are included without overwriting either agent's working folder.
- One shared enquiry form with editable page-specific journey type; blank postcode/address pickup prompt; selected destination/airport context; chosen date/time; optional passengers; existing text-based luggage field; access needs, extra stops and optional return journey.
- Optional email address and an unticked **Email me A1 Cars Banbury offers and discounts** choice. A positive choice requires an email address. An address alone is not marketing permission. The enquiry includes the address, explicit choice and the preparation timestamp/version for a positive choice. No mailing provider, subscription database or automatic promotional sending is added.
- Privacy copy explains the optional email choice and how to withdraw it. A promotions page/campaign remains future work; no discount or coupon has been invented.
- Source page and booking choice are preserved in the prepared WhatsApp/email summary. Port enquiries are labelled as port transfers. The receiving team still confirms availability, vehicle and price.
- Date/time values are read from the submitted controls and retained when editing. This fixes a browser check that previously produced “To be confirmed” despite filled native date/time fields.

## Validation

- TypeScript and Next.js production build passed: all 27 static route outputs generated, including the five airports.
- 8 existing booking-summary checks plus 11 new enquiry-standard checks passed (`node scripts/test-local-booking.cjs` and `node scripts/test-enquiry-standard.cjs`).
- Browser checks: optional blank passenger/email fields; unchecked initial consent; opt-in email requirement; affirmative/declined consent messages; date/time in summary and retained after editing; identical decoded WhatsApp/email text; Local taxi default and editable service; port default; mobile 393 × 852 without document overflow; no console warnings/errors. No message was sent.
- The separate task's prior 98 browser checks are documented in its preserved review folder. Current integration checks supplement those; they are not claimed as a new rerun of all 98.
- UI lint: zero failures; one harmless date-padding warning. Impeccable detector: no findings. Changed React components use controlled fields, valid labels, scoped IDs and the existing accessible dialog/drawer.
- Local preview uses `NEXT_PUBLIC_LOCAL_PREVIEW=1` to avoid live analytics. This environment flag is not committed or set on Vercel. Production tracking settings are unchanged.

## Remaining operational checks

- A1 must confirm actual seating layouts and luggage capacities. Existing values remain indicative, not certified operating limits. The Touran's six-passenger example excludes the driver; source photographs/layout evidence is incomplete.
- The port page lists Southampton; other ports remain subject to confirmation. Review the terms wording before production.
- WhatsApp/email links and payloads are verified. Actual recipient-side receipt is not tested; customers must press Send in WhatsApp or their email application.
- Positive email choices accompany customer-sent enquiries. The client must maintain consent records, withdrawals and an appropriate mailing system before running campaigns. No automatic subscription or email delivery is claimed.
- No production merge/deploy or Google Ads change is part of this review. The standard change-notification draft is due when production changes are approved and made.

## Coordination and review

Integration happens in `Ongoing Project/Combined Website PR 2026-10-18 - Codex/site`, a new clone of PR #1. Earlier review and the completed other-agent copy remain intact. Before push, recheck the remote branch and use a normal fast-forward push; never force over another agent's commits. Only PR #1's branch and review metadata are updated. PR #2's head is recorded separately for an unchanged-head check.

The Wi-Fi review server runs on KENNY, bound to `0.0.0.0:3119`, currently reachable at `http://192.168.4.183:3119/`. KENNY and the server must remain awake/running. This address was tested from KENNY/browser; a second physical device has not been independently tested. No firewall or router rules were changed.

Consent wording follows the ICO guidance on a separate affirmative email-marketing choice: https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-direct-marketing-using-electronic-mail/how-do-we-comply-with-the-pecr-electronic-mail-marketing-rules/
