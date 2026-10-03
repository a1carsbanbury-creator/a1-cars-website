import type { NextConfig } from 'next';

// Old indexed URLs from the previous site, bridged to the closest new page (permanent = 308).
const redirects = [
  { source: '/about.html', destination: '/about' },
  { source: '/contact.html', destination: '/contact' },
  { source: '/services/services-overview.html', destination: '/local-taxi' },
  { source: '/services', destination: '/local-taxi' },
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
