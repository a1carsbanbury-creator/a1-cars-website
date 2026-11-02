// Festive look, switched by date. No manual change needed.
// The heavier treatment runs from 1 November 2026 until the whole theme ends on 16 January 2027.
// Rollback: set FORCE_OFF = true.
const FORCE_OFF = false;
const HEAVY_FROM = Date.UTC(2026, 10, 1);
const OFF_FROM = Date.UTC(2027, 0, 16);

export const isChristmas = () => !FORCE_OFF && Date.now() < OFF_FROM;
export const isChristmasHeavy = () => isChristmas() && Date.now() >= HEAVY_FROM;

export const christmasWhatsappHref =
  'https://wa.me/447823642516?text=' + encodeURIComponent("Hi A1 Cars, I'd like to reserve a car for Christmas. Date and time: \nPickup and destination: \nNumber of passengers: ");
