# Fleet catalogue review — 6 October 2026

Kenneth requested Bespoke-style side-profile cards using A1 models, pale backgrounds, passenger/luggage figures, slight hover lift and direct booking. Built locally; no push or deployment by Codex.

Private hire & estates: Skoda estate, Mercedes E-Class estate, Skoda Superb and Touran. Executive cars: E-Class black/silver, S-Class and V-Class. Minibuses: Touran, Transporter, Ford Transit, Tourneo Custom and Mercedes Sprinter 16-seater. No airport vehicle category; existing airport service still uses a selection of these shared cards. Homepage lifestyle slideshow retained; homepage car section uses the new profiles.

## Capacity draft — must review before release

Kenneth requested estimates on 6 October so the design could be reviewed. These are NOT verified A1 operating capacities or manufacturer suitcase limits. Cards explicitly say Indicative capacity and carry a local-review disclaimer. Medium cases assumed about 65 × 45 × 25 cm. Driver is excluded from passenger figures. Do not remove disclaimers or present these as confirmed without Kenneth/client sign-off.

| Vehicle | Passengers | Medium cases |
|---|---:|---:|
| Skoda estate / Mercedes estate / Superb | 4 | 3 |
| E-Class black/silver / S-Class | 4 | 2 |
| V-Class | 6 | 4 |
| Touran, rear row folded | 4 | 3 |
| Transporter / Transit / Tourneo Custom | 8 | 6 |
| Sprinter | 16 | 4 |

Sprinter 16 seats is Kenneth's explicitly supplied model/capacity. Its luggage figure remains a conservative draft, not a measured limit. All figures need practical vehicle/seat-layout/bag-size checks. Manufacturer literature demonstrates layout dependence, not these suitcase estimates: [Volkswagen Touran dimensions](https://www.volkswagen.co.uk/en/new/touran/touran-dimensions.html), [2017-era Ford Tourneo Custom brochure](https://www.ford.co.uk/content/dam/guxeu/uk/documents/brochures/commercial-vehicles/BRO-Tourneo_Custom.pdf), [Mercedes V-Class](https://www.mercedes-benz.co.uk/passengercars/models/van/v-class/overview.html).

## Assets and verification

Ten new built-in ImageGen studio profiles saved as public/profile-*.webp. PNG masters and prompts kept outside the Git checkout in ../profile-images and ../PROFILE_IMAGE_PROMPTS.md. Model illustrations, not documentary vehicle photographs. No competitor artwork copied. No invented readable registrations in these profiles. Ford Transit and Sprinter are illustrative models pending exact A1 reference photos. The old fleet-ford-transit.webp was visually a Volkswagen and is not used in the catalogue.

Independent parent defect review completed. Found and fixed screen-reader capacity omission in whole-card accessible names. Typecheck and whitespace checks pass. Production build passed. Desktop 1440px: three columns and no page overflow; phone 390px: single-column fleet, scrollable homepage category rows, no page overflow. V-Class desktop and Sprinter keyboard/phone bookings open with correct preference. Only From/To/date/time required; blank addresses rejected, optional passenger/luggage fields. Final send not exercised: no customer request was sent. General booking retained. Generated assets visually inspected, loaded in local preview.

Preview: http://127.0.0.1:3100/fleet . Original Claude checkout preserved. Claude handles any later GitHub push at Kenneth's request.
