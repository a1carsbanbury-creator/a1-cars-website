// Festive look, switched by date. No manual change needed.
//   - Subtle Christmas look: on now, off automatically from 16 January 2027.
//   - Heavier Christmas look: on from 1 November 2026, off with the rest on 16 January 2027.
// Pages are regenerated hourly (revalidate in app/layout.tsx), so the dates flip on their own.
// Preview the heavy look any time by adding ?xmas=heavy to a URL (see components/xmas-preview.tsx).
// Rollback: set FORCE_OFF = true.
const FORCE_OFF = false;
const HEAVY_FROM = Date.UTC(2026, 10, 1); // 1 Nov 2026 00:00 UTC
const OFF_FROM = Date.UTC(2027, 0, 16); // 16 Jan 2027 00:00 UTC

export const isChristmas = () => !FORCE_OFF && Date.now() < OFF_FROM;
export const isChristmasHeavy = () => isChristmas() && Date.now() >= HEAVY_FROM;

export const christmasWhatsappHref =
  'https://wa.me/447823642516?text=' + encodeURIComponent("Hi A1 Cars, I'd like to reserve a car for Christmas. Date and time: \nPickup and destination: \nNumber of passengers: ");
