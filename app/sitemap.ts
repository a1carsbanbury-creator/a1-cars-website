import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

const paths = ['/', '/local-taxi', '/airport-transfers', '/executive-travel', '/group-minibus', '/silverstone-transfers', '/cotswolds-trips', '/fleet', '/about', '/contact', '/privacy', '/terms'];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : path === '/privacy' || path === '/terms' ? 0.3 : 0.8,
  }));
}
