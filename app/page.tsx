import { HomeClient } from '@/components/home-client';
import { businessJsonLd, pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'A1 Cars Banbury | Local taxis & airport transfers',
  description: 'Banbury taxi and private hire, open 24/7. Local taxis, airport transfers, executive cars and group travel. Call 01295 266 778.',
  path: '/',
});

export default function Home() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }} />
    <HomeClient />
  </>;
}
