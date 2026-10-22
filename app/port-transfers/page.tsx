import { ContactStrip, FaqList, Features, PageHero, PageShell, RelatedLinks, Section, Split, Steps } from '@/components/page-shell';
import { VehicleChoices } from '@/components/vehicle-choices';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Port & Cruise Transfers from Banbury, inc. Southampton Docks',
  description: 'Pre-booked private hire from Banbury to Southampton Docks and other UK ports, for cruises and ferries. Door-to-door, room for your luggage, return pickups. Call 01295 266 778.',
  path: '/port-transfers',
});

export default function PortTransfers() {
  return <PageShell>
    <PageHero
      eyebrow="Ports & cruises"
      title="From your door"
      accent="to the gangway."
      lead="Cruise and ferry journeys start with a stress-free transfer. We collect you and your luggage from Banbury and the surrounding villages and take you to Southampton Docks or your departure port, with a return pickup when you’re back."
      image="/port-cruise-transfer-v1.webp"
      images={['/port-cruise-transfer-v1.webp', '/port-ferry-transfer-v1.webp']}
    />
    <Section eyebrow="Ports we cover" title="Southampton and" accent="beyond">
      <Features items={[
        ['Southampton Docks', 'Cruise terminals and the port, a popular route for Banbury travellers. Tell us your ship and terminal when you book.'],
        ['Other UK ports', 'Dover, Portsmouth, Harwich and others: ask us and we’ll confirm the journey.'],
        ['Cruise and ferry', 'Luggage-friendly vehicles for cruise cases, family holidays and ferry crossings.'],
        ['Return pickups', 'Arrange your journey home at the same time, so a driver is waiting when you disembark.'],
      ]} />
    </Section>
    <Section tone="cream" eyebrow="Cruise luggage, sorted" title="Room for" accent="everything you packed.">
      <Split image="/revision-fleet-lineup-optimized.webp" alt="A1 Cars Banbury vehicles ready for a port transfer">
        <p>Cruise holidays mean big cases. Tell us how many people and how much luggage, and we’ll recommend the right vehicle. Larger vehicles carry fewer cases when every seat is used, so a quick conversation when you book avoids surprises on the day.</p>
      </Split>
    </Section>
    <Section eyebrow="Choose your vehicle" title="Pick the size" accent="that suits you">
      <VehicleChoices mode="airport" />
    </Section>
    <Section tone="cream" eyebrow="How it works" title="Embark without" accent="the stress">
      <Steps items={[
        ['Share your sailing', 'Port, ship or ferry, boarding time, pickup address, passengers and luggage.'],
        ['We plan the timings', 'We allow for the journey and your check-in window so you arrive relaxed.'],
        ['Return home', 'Book your pickup for your return day, and we’ll be there when you disembark.'],
      ]} />
    </Section>
    <FaqList items={[
      { q: 'Can you take us to Southampton Docks?', a: 'Yes. Tell us your cruise terminal and boarding time and we’ll confirm the journey.' },
      { q: 'Can you collect us when we return?', a: 'Yes. Pre-book your return pickup and share your ship’s arrival details.' },
      { q: 'How much luggage can we bring?', a: 'It depends on the vehicle and how many passengers are travelling. Tell us your party size and number of cases and we’ll recommend the right vehicle.' },
      { q: 'Do you cover ports other than Southampton?', a: 'Ask us. Tell us the port and date and we’ll confirm whether we can arrange it.' },
    ]} />
    <RelatedLinks current="/port-transfers" /><ContactStrip />
  </PageShell>;
}
