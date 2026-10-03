import { PageHero, PageShell, Section } from '@/components/page-shell';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Website Terms',
  description: 'Terms of use for the A1 Cars Banbury website and how booking requests work.',
  path: '/terms',
});

export default function Terms() {
  return <PageShell>
    <PageHero eyebrow="Legal" title="Website terms" lead="Last updated 3 October 2026." cta={false} />
    <Section title="Booking requests">
      <p>Sending a booking request through this website, WhatsApp, email or phone is a request only. A journey is booked when A1 Cars Banbury confirms it with you. Prices and timings are confirmed when you book.</p>
    </Section>
    <Section title="Where we operate">
      <p>Every journey must start or end within 15 miles of Banbury. We cannot accept journeys that neither start nor end in that area.</p>
    </Section>
    <Section title="Information on this site">
      <p>We take care to keep this website accurate, but vehicle images and descriptions are a guide and the vehicle sent may differ. Please call us if something matters to your booking.</p>
    </Section>
    <Section title="Who we are">
      <p>{site.legalName}, company number {site.companyNumber}, {site.address}. {site.licence}. Contact: <a href={`mailto:${site.email}`}>{site.email}</a>, {site.phone}.</p>
    </Section>
  </PageShell>;
}
