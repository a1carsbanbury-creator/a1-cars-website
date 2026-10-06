import { FleetBrowser } from '@/components/fleet-browser';
import { SiteFooter, SiteHeader } from '@/components/site-chrome';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Our Vehicles & Book a Journey',
  description: 'Browse A1 Cars Banbury private hire cars, executive cars and minibuses, then send your booking request on WhatsApp. Open 24/7. Call 01295 266 778.',
  path: '/fleet',
});

export default function FleetPage() {
  return <main className="fleet-page">
    <SiteHeader />
    <section className="fleet-hero"><p className="eyebrow dark"><span />Travel your way · 20+ vehicles</p><h1>A car for<br /><em>your plans.</em></h1><p>Explore estates, executive cars, people carriers and minibuses. Find your preferred vehicle, then send the journey details to our team.</p></section>
    <section className="fleet-browser-section"><FleetBrowser /></section>
    <section className="fleet-contact-strip"><div><small>Prefer to talk it through?</small><strong>Call A1 Cars Banbury</strong></div><a href={site.phoneHref}>{site.phone} <span>↗</span></a></section>
    <SiteFooter />
  </main>;
}
