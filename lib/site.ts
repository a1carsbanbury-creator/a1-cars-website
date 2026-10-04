// Single place for business facts. Values come from SOURCE_OF_TRUTH.md (A1 workspace).
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.a1carsbanbury.co.uk').replace(/\/$/, '');
export const GA_ID = 'G-K9SG5GLPBK';

export const site = {
  name: 'A1 Cars Banbury',
  legalName: 'A1 Cars Banbury Ltd',
  companyNumber: '16396053',
  phone: '01295 266 778',
  phoneHref: 'tel:+441295266778',
  // Customer email: still the outreach address on purpose. Switch to a1carsbanbury@gmail.com only when Kenneth says so.
  email: 'business@a1carsbanbury.co.uk',
  whatsappHref: 'https://wa.me/447823642516?text=Hi%20A1%20Cars%2C%20I%27d%20like%20to%20book%20a%20journey%20from%20Banbury.',
  // Kenneth (2026-10-04): do not publish the street address on the website. Show the area instead.
  area: 'Banbury and the surrounding area',
  reviewHref: 'https://g.page/r/CQNy57T-QzepEBM/review',
  licence: 'Licensed private hire operator, Cherwell District Council',
} as const;
