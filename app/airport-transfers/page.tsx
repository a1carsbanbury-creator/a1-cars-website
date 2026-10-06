import { ContactStrip, FaqList, Features, PageHero, PageShell, RelatedLinks, Section, Split, Steps } from '@/components/page-shell';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';
import { VehicleChoices } from '@/components/vehicle-choices';

export const metadata = pageMeta({
  title: 'Airport Transfers from Banbury & Surrounding Villages',
  description: 'Airport transfers from Banbury and villages within 15 miles to Heathrow, Birmingham, Gatwick, Luton and Stansted, with return pickups. Open 24/7.',
  path: '/airport-transfers',
});

export default function AirportTransfers() {
  return <PageShell>
    <PageHero eyebrow="Airport transfers" title="From your doorstep," accent="to your departure." lead="Airport transfers from Banbury and the surrounding villages within 15 miles, plus airport pickups bringing you back home. Early flight or late arrival, your journey is planned around you." image="/revision-airport-arrival.webp" />
    <Section eyebrow="Where we go" title="Five airports," accent="one phone call">
      <Features items={[
        ['Heathrow · LHR', 'From your home in Banbury or a nearby village to Heathrow, with return pickups.'],
        ['Birmingham · BHX', 'A pre-booked journey from your doorstep to Birmingham Airport and home again.'],
        ['Gatwick · LGW', 'Travel to Gatwick at the time your flight needs, with your pickup arranged in advance.'],
        ['Luton · LTN', 'Early departures and late arrivals, with transport planned both ways.'],
        ['Stansted · STN', 'Your own car or group vehicle for the journey to Stansted and back.'],
      ]} />
      <p style={{ marginTop: 28 }}>All five routes serve Banbury and surrounding villages within 15 miles. Every journey starts or ends within that area. We also arrange cruise and sea port transfers.</p>
    </Section>
    <Section tone="cream">
      <Split image="/executive-people-carrier.webp" alt="A1 Cars people carrier at an airport terminal with passengers and luggage" flip>
        <p className="eyebrow dark"><span />Groups and luggage</p>
        <h2>Room for everyone, <em>and the bags.</em></h2>
        <p>Tell us how many people and how many bags and we will send a suitable people carrier or minibus. We also have wheelchair-accessible vehicles, so tell us if you need one.</p>
      </Split>
      <VehicleChoices />
    </Section>
    <Section eyebrow="How it works" title="From your door" accent="to the terminal">
      <Steps items={[
        ['Give us the details', 'Date, time, airport, passengers and flight time. Call, WhatsApp or email.'],
        ['We plan the timings', 'We pick you up within 15 miles of Banbury, allowing for your check-in.'],
        ['Home again', 'Landing late? We collect you from the airport and bring you back into the area.'],
      ]} />
    </Section>
    <FaqList items={[
      { q: 'How do I book an airport transfer?', a: `Call ${site.phone}, message us on WhatsApp, or email ${site.email} with your date, time, airport and number of passengers.` },
      { q: 'Do you cover early-morning and late-night flights?', a: 'Yes. We are open 24/7, every day.' },
      { q: 'Where do you collect from?', a: 'Anywhere within 15 miles of Banbury. Airport trips always start or end inside that area.' },
      { q: 'Can you take a group or a lot of luggage?', a: 'Yes. Tell us how many people and bags and we will send a suitable people carrier or minibus.' },
    ]} />
    <RelatedLinks current="/airport-transfers" />
    <ContactStrip />
  </PageShell>;
}
