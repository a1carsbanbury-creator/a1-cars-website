import { christmasMode } from '@/lib/season';

const flakes = Array.from({ length: 16 }, (_, i) => ({
  left: `${(i * 37 + 7) % 100}%`,
  size: 3 + (i % 4),
  dur: 14 + (i * 5) % 11,
  delay: -((i * 7) % 18),
  drift: (i % 2 ? 1 : -1) * (18 + (i % 5) * 8),
}));

// Red banner, on every page (rendered once from app/layout.tsx).
export function SeasonalBanner() {
  if (!christmasMode) return null;
  return <aside className="xmas-banner" aria-label="Christmas bookings notice">
    <span aria-hidden="true">✦</span>
    <p><strong>Christmas bookings are open.</strong> <span>Book early for the best choice of cars and times.</span></p>
    <a href="/christmas">Christmas travel</a>
  </aside>;
}

// Gentle, sparse snow behind the page content. Decorative only, never blocks a click.
export function Snow() {
  if (!christmasMode) return null;
  return <div className="xmas-snow" aria-hidden="true">{flakes.map((f, i) =>
    <i key={i} style={{ left: f.left, width: f.size, height: f.size, animationDuration: `${f.dur}s`, animationDelay: `${f.delay}s`, ['--drift' as string]: `${f.drift}px` }} />)}</div>;
}
