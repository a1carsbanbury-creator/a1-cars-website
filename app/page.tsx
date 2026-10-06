import { HomeClient } from '@/components/home-client';
import { businessJsonLd, pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'A1 Cars Banbury | Private hire & airport transfers',
  description: 'Private hire for Banbury and surrounding villages within 15 miles. Airport transfers, executive cars and group travel. Open 24/7. Call 01295 266 778.',
  path: '/',
});

export default function Home() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }} />
    <HomeClient />
  </>;
}
