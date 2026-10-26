import { ContactStrip, FaqList, Features, PageHero, PageShell, RelatedLinks, Section, Steps } from '@/components/page-shell';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Long-Distance Private Hire from Banbury',
  description: 'Pre-booked long-distance journeys from Banbury and surrounding villages: airports, stations, ports, events and family visits, with return pickups. Open 24/7.',
  path: '/long-distance-travel',
});

export default function LongDistanceTravel() {
  return <PageShell>
    <PageHero eyebrow="Long-distance travel" title="Further afield," accent="planned properly." lead="A comfortable, pre-booked journey from your door in Banbury or a nearby village to wherever you are going, and home again. Open 24/7, every day." image="/revision-fleet-lineup-optimized.webp" />
    <Section eyebrow="Where it fits" title="Journeys worth" accent="a good driver">
      <Features items={[
        ['Airports', 'Heathrow, Birmingham, Gatwick, Luton and Stansted, with return pickups.'],
        ['Stations and ports', 'Rail stations further afield and cruise or sea port transfers.'],
        ['Family and business trips', 'Visits, meetings and events in other towns and cities.'],
        ['Events and days out', 'Silverstone, F1 weekends and other occasions.'],
      ]} />
      <p style={{ marginTop: 28 }}>Longer journeys to or from Banbury and the surrounding area, planned around your destination and timings. We confirm availability when you book.</p>
    </Section>
    <Section tone="cream" eyebrow="How it works" title="Booked in" accent="three steps">
      <Steps items={[
        ['Tell us the journey', `Pickup, destination, date and time. Call ${site.phone}, WhatsApp or email.`],
        ['We confirm the details', 'We confirm the vehicle, timings and price with you before the journey is agreed.'],
        ['Travel in comfort', 'Your driver arrives on time, with a vehicle matched to your party and luggage.'],
      ]} />
    </Section>
    <FaqList items={[
      { q: 'How far can you take me?', a: 'Mileage is unlimited. Tell us where you need to go and we will confirm the journey when you book.' },
      { q: 'How do I get a price?', a: `Call ${site.phone} or message us on WhatsApp with your pickup, destination and date, and we will confirm the price when you book.` },
      { q: 'Can you collect me from my destination for the return?', a: 'Yes. Tell us the return time and place and we will arrange the pickup to bring you back into the area.' },
      { q: 'Can you take a group or lots of luggage?', a: 'Yes. Tell us how many people and bags and we will send a suitable people carrier or minibus.' },
    ]} />
    <RelatedLinks current="/long-distance-travel" />
    <ContactStrip />
  </PageShell>;
}
