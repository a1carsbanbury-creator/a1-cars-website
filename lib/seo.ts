import type { Metadata } from 'next';
import { SITE_URL, site } from '@/lib/site';

export function pageMeta({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: 'website', locale: 'en_GB', siteName: site.name, images: [{ url: '/og.jpg', width: 1200, height: 630, alt: site.name }] },
    twitter: { card: 'summary_large_image', title, description, images: ['/og.jpg'] },
  };
}

// Every journey starts or ends within 15 miles of Banbury (SOURCE_OF_TRUTH.md). 15 miles = 24,140 m.
export const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'TaxiService'],
  '@id': `${SITE_URL}/#business`,
  name: site.name,
  legalName: site.legalName,
  url: SITE_URL,
  logo: `${SITE_URL}/icon-192.png`,
  image: `${SITE_URL}/og.jpg`,
  telephone: '+441295266778',
  email: site.email,
  identifier: site.companyNumber,
  address: { '@type': 'PostalAddress', streetAddress: '23 Grimsbury Square', addressLocality: 'Banbury', postalCode: 'OX16 3HU', addressCountry: 'GB' },
  geo: { '@type': 'GeoCoordinates', latitude: 52.0629, longitude: -1.3398 },
  areaServed: { '@type': 'GeoCircle', geoMidpoint: { '@type': 'GeoCoordinates', latitude: 52.0629, longitude: -1.3398 }, geoRadius: 24140 },
  openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '00:00', closes: '23:59' },
};
