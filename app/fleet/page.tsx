import { FleetBrowser } from '@/components/fleet-browser';
import { SiteFooter, SiteHeader } from '@/components/site-chrome';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Our Vehicles & Book a Journey',
  description: 'Browse A1 Cars Banbury taxis, executive cars and minibuses, then send your booking request on WhatsApp. Open 24/7. Call 01295 266 778.',
  path: '/fleet',
});

export default function FleetPage() {
  return <main className="fleet-page">
    <SiteHeader />
    <section className="fleet-hero"><p className="eyebrow dark"><span />Travel your way</p><h1>Choose your<br /><em>journey.</em></h1><p>Browse the travel styles available to request, then send your booking details straight to A1 Cars on WhatsApp.</p></section>
    <section className="fleet-browser-section"><FleetBrowser /></section>
    <section className="fleet-contact-strip"><div><small>Prefer to talk it through?</small><strong>Call A1 Cars Banbury</strong></div><a href={site.phoneHref}>{site.phone} <span>↗</span></a></section>
    <SiteFooter />
  </main>;
}
