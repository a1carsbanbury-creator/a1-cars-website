import { ContactStrip, FaqList, PageHero, PageShell, RelatedLinks, Section } from '@/components/page-shell';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Local Taxi in Banbury, Open 24/7',
  description: 'Local taxis in Banbury and the surrounding villages, day and night. Station pickups, hospital trips, school runs and nights out. Call 01295 266 778.',
  path: '/local-taxi',
});

export default function LocalTaxi() {
  return <PageShell>
    <PageHero eyebrow="Local taxi" title="Local taxis in Banbury, any hour." lead="Everyday journeys across Banbury and the area around it, with a driver who knows the roads. Tell us where you are and where you are going, and we will get a car to you." />
    <Section title="What we cover">
      <ul>
        <li>Train station pickups and drop-offs</li>
        <li>Hospital and appointment trips</li>
        <li>School runs and shopping trips</li>
        <li>Nights out, and getting home afterwards</li>
        <li>Prom transfers</li>
      </ul>
      <p>For local trips, both the pickup and the drop-off are within 15 miles of Banbury. Going further, to an airport for example? See <a href="/airport-transfers">airport transfers</a>.</p>
    </Section>
    <Section title="Cars for every journey">
      <p>We have 20+ vehicles, from everyday saloons and estates to larger people carriers. Say how many people and how much luggage, and we will send the right one. <a href="/fleet">See our vehicles</a>.</p>
    </Section>
    <FaqList items={[
      { q: 'How do I book a taxi?', a: `Call ${site.phone}, message us on WhatsApp, or use the booking form on our vehicles page. We will confirm your pickup.` },
      { q: 'Are you open at night and at weekends?', a: 'Yes. A1 Cars Banbury is open 24 hours a day, every day of the year.' },
      { q: 'How far can you take me?', a: 'Local trips stay within 15 miles of Banbury. For airports and longer journeys we collect you in the Banbury area and take you anywhere you need to go, or bring you back from there.' },
      { q: 'Can I pay by card?', a: 'Yes, all major payment cards are accepted.' },
    ]} />
    <RelatedLinks current="/local-taxi" />
    <ContactStrip />
  </PageShell>;
}
