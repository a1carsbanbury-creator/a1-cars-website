import type { Metadata, Viewport } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import { Analytics } from '@/components/analytics';
import { Motion } from '@/components/motion';
import { SITE_URL, site } from '@/lib/site';
import './globals.css';

// Two fonts, used everywhere: Inter for text, Instrument Serif for headlines.
const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const serif = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--font-serif', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'A1 Cars Banbury | Local taxis & airport transfers', template: '%s | A1 Cars Banbury' },
  description: 'Banbury taxi and private hire, open 24/7. Local taxis, airport transfers, executive cars and group travel. Call 01295 266 778.',
  applicationName: site.name,
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: { siteName: site.name, locale: 'en_GB', type: 'website' },
};

export const viewport: Viewport = { themeColor: '#292f37' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>
        {children}
        <Analytics />
        <Motion />
      </body>
    </html>
  );
}
