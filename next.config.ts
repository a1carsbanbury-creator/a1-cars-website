import type { NextConfig } from 'next';

// Old indexed / advertised URLs from the previous site, bridged to the closest new page (permanent = 308).
const redirects = [
  // Pages and Google Ads URLs that used to exist under /services/
  { source: '/services/services-overview', destination: '/services' },
  { source: '/services/services-overview.html', destination: '/services' },
  { source: '/services/long-distance-travel', destination: '/long-distance-travel' },
  { source: '/services/executive-taxi', destination: '/executive-travel' },
  { source: '/services/16-seater-minibus-transfers', destination: '/group-minibus' },
  { source: '/services/banbury-taxi-hire', destination: '/local-taxi' },
  // Likely sibling paths from the same old site, so nothing else dead-ends
  { source: '/services/airport-transfers', destination: '/airport-transfers' },
  { source: '/services/airport-taxi', destination: '/airport-transfers' },
  { source: '/services/minibus-hire', destination: '/group-minibus' },
  { source: '/services/local-taxi', destination: '/local-taxi' },
  // Earlier bridges
  { source: '/about.html', destination: '/about' },
  { source: '/contact.html', destination: '/contact' },
  { source: '/locations/locations', destination: '/local-taxi' },
  { source: '/locations', destination: '/local-taxi' },
  { source: '/locations/shipston-on-stour.html', destination: '/local-taxi' },
  { source: '/airport-taxi', destination: '/airport-transfers' },
  { source: '/book', destination: '/contact' },
  { source: '/privacy-policy', destination: '/privacy' },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return redirects.map((r) => ({ ...r, permanent: true }));
  },
};

export default nextConfig;
