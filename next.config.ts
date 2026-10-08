import type { NextConfig } from 'next';

// Old indexed / advertised URLs from the previous site, bridged to the closest new page (permanent = 308).
// The 29 "Not found (404)" URLs in Google Search Console (8 Oct 2026) plus the Google Ads sitelink/ad URLs are all covered.
// The old site also leaked a doubled host into some URLs (/a1carsbanbury.co.uk/services/...), so each path is also matched with that prefix.
const bridges: [string, string][] = [
  ['/services/services-overview', '/services'],
  ['/services/long-distance-travel', '/long-distance-travel'],
  ['/services/executive-taxi', '/executive-travel'],
  ['/services/corporate-travel', '/executive-travel'],
  ['/services/business-travel', '/executive-travel'],
  ['/services/prom-transfers', '/executive-travel'],
  ['/services/16-seater-minibus-transfers', '/group-minibus'],
  ['/services/6-8-seater-taxi', '/group-minibus'],
  ['/services/minibus-hire', '/group-minibus'],
  ['/services/banbury-taxi-hire', '/local-taxi'],
  ['/services/local-taxi', '/local-taxi'],
  ['/services/hospital-taxi-service', '/local-taxi'],
  ['/services/airport-transfers', '/airport-transfers'],
  ['/services/airport-taxi', '/airport-transfers'],
  ['/services/cotswold-tours', '/cotswolds-trips'],
  ['/services/silverstone-f1-transfers', '/silverstone-transfers'],
  ['/banbury-to-heathrow-taxi', '/airport-transfers'],
  ['/banbury-to-birmingham-airport-taxi', '/airport-transfers'],
  ['/airport-taxi', '/airport-transfers'],
  ['/locations/locations', '/local-taxi'],
  ['/about', '/about'],
  ['/contact', '/contact'],
  ['/book', '/contact'],
  ['/privacy-policy', '/privacy'],
  ['/index', '/'],
];

const redirects: { source: string; destination: string }[] = [];
for (const [from, to] of bridges) {
  for (const prefix of ['', '/a1carsbanbury.co.uk']) {
    for (const ext of ['', '.html']) {
      const source = `${prefix}${from}${ext}`;
      if (source !== to) redirects.push({ source, destination: to });
    }
  }
}
// Old town/location pages: no thin town pages on the new site, so they go to the local private hire page.
for (const prefix of ['', '/a1carsbanbury.co.uk']) {
  redirects.push({ source: `${prefix}/locations`, destination: '/local-taxi' });
  redirects.push({ source: `${prefix}/locations/:path*`, destination: '/local-taxi' });
  redirects.push({ source: `${prefix}/services`, destination: '/services' });
}
redirects.push({ source: '/a1carsbanbury.co.uk', destination: '/' });
// /services itself is a real page now, so drop the self-redirects created above.
const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return redirects
      .filter((r) => r.source !== r.destination)
      .filter((r) => !(r.source === '/services' || r.source === '/contact' || r.source === '/about'))
      .map((r) => ({ ...r, permanent: true }));
  },
};

export default nextConfig;
