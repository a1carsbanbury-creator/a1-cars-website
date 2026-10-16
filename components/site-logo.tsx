import { isChristmas } from '@/lib/season';

// The only place the logo file is chosen. The Christmas logo has the hat built in: one image, one switch (lib/season.ts).
export function SiteLogo({ footer = false }: { footer?: boolean }) {
  const src = isChristmas() ? '/a1-logo-christmas.png' : footer ? '/a1-logo-sticker.png' : '/a1-logo-full.png';
  return <img className={isChristmas() ? 'brand-logo is-christmas' : 'brand-logo'} src={src} alt="A1 Cars Banbury" />;
}
