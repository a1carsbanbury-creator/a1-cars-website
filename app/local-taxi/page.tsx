import { ContactStrip, FaqList, Features, PageHero, PageShell, RelatedLinks, Section, Split, Steps } from '@/components/page-shell';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Local Private Hire in Banbury & Nearby Villages',
  description: 'Local private hire in Banbury and the surrounding villages within 15 miles. Station pickups, hospital trips, school runs and nights out. Open 24/7.',
  path: '/local-taxi',
});

export default function LocalTaxi() {
  return <PageShell>
    <PageHero eyebrow="Local private hire" title="In and around Banbury," accent="there for your plans." lead="Private hire for Banbury and the surrounding villages, day and night. Local pickups and destinations are within 15 miles of Banbury — from your doorstep to the station, an appointment or a night out." image="/revision-home-pickup.webp" />
    <Section eyebrow="What we cover" title="The journeys" accent="you actually make">
      <Features items={[
        ['Station pickups', 'Collected from, or dropped at, Banbury station for your train.'],
        ['Hospital and appointments', 'Reliable rides to and from appointments, any time of day.'],
        ['School runs and shopping', 'Regular, practical trips without the parking.'],
        ['Nights out', 'Arrange the journey there and a pickup to bring you home.'],
      ]} />
    </Section>
    <Section tone="cream">
      <Split image="/revision-fleet-lineup.webp" alt="Illustration of estate cars, executive cars and people carriers">
        <p className="eyebrow dark"><span />Our fleet</p>
        <h2>Cars for every <em>journey.</em></h2>
        <p>We have 20+ vehicles, from everyday saloons and estates to larger people carriers. Say how many people and how much luggage, and we will send the right one.</p>
        <p>We also have wheelchair-accessible vehicles. Tell us when you book. <a href="/fleet">See our vehicles</a>.</p>
      </Split>
    </Section>
    <Section eyebrow="Accessible journeys" title="A welcome arrival," accent="for everyone">
      <Split image="/revision-accessible-arrival.webp" alt="Illustration of a wheelchair user smiling with a driver beside an accessible vehicle" flip>
        <p>Wheelchair-accessible vehicles are available to request. Tell us your needs when booking so we can confirm a suitable vehicle and the arrangements for your journey.</p><a className="underlined-link" href={site.phoneHref}>Discuss an accessible journey <span>↗</span></a>
      </Split>
    </Section>
    <Section eyebrow="How it works" title="Booked in" accent="three steps">
      <Steps items={[
        ['Tell us the journey', `Call ${site.phone}, message us on WhatsApp, or use the booking form.`],
        ['We confirm your pickup', 'You get a confirmed time and the right vehicle for your group.'],
        ['Your driver arrives', 'Open 24/7, so day or night we will be there.'],
      ]} />
      <p style={{ marginTop: 28 }}>Local trips start and finish within 15 miles of Banbury. Heading to an airport? See <a href="/airport-transfers">airport transfers</a>.</p>
    </Section>
    <FaqList items={[
      { q: 'How do I book a private hire journey?', a: `Call ${site.phone}, message us on WhatsApp, or use the booking form on our vehicles page. We will confirm your pickup.` },
      { q: 'Are you open at night and at weekends?', a: 'Yes. A1 Cars Banbury is open 24 hours a day, every day of the year.' },
      { q: 'How far can you take me?', a: 'Local trips stay within 15 miles of Banbury. For airports and longer journeys we collect you in the Banbury area and take you anywhere you need to go, or bring you back from there.' },
      { q: 'Do you have wheelchair-accessible vehicles?', a: `Yes. Tell us when you book, by phone on ${site.phone} or on WhatsApp, so we send the right vehicle.` },
      { q: 'Can I pay by card?', a: 'Yes, all major payment cards are accepted.' },
    ]} />
    <RelatedLinks current="/local-taxi" />
    <ContactStrip />
  </PageShell>;
}
