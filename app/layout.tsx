import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://a1carsbanbury.co.uk';

export const metadata: Metadata = {
  title: 'A1 Cars Banbury | Local taxis & airport transfers',
  description:
    'Local taxis, airport transfers, executive travel and group transport from Banbury.',
  metadataBase: new URL(siteUrl),
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'A1 Cars Banbury | Local taxis & airport transfers',
    description: 'Your journey. Handled well.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'A1 Cars Banbury' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A1 Cars Banbury | Local taxis & airport transfers',
    description: 'Your journey. Handled well.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
