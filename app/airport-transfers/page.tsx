import { ContactStrip, FaqList, Features, PageHero, PageShell, RelatedLinks, Section, Split, Steps } from '@/components/page-shell';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Airport Transfers from Banbury',
  description: 'Banbury to Heathrow, Birmingham, Gatwick, Luton and Stansted by pre-booked private hire, 24/7. Call 01295 266 778.',
  path: '/airport-transfers',
});

export default function AirportTransfers() {
  return <PageShell>
    <PageHero eyebrow="Airport transfers" title="Banbury to the airport," accent="planned around your flight." lead="Pre-book a private hire car from Banbury to the airport and back. Early flights and late arrivals are no problem: we are open 24 hours a day." image="/executive-saloon.webp" />
    <Section eyebrow="Where we go" title="Five airports," accent="one phone call">
      <Features items={[
        ['Heathrow', 'Banbury to Heathrow, door to terminal.'],
        ['Birmingham', 'Banbury to Birmingham Airport (BHX).'],
        ['Gatwick', 'Banbury to Gatwick, whatever time your flight leaves.'],
        ['Luton and Stansted', 'Banbury to Luton and Banbury to Stansted.'],
      ]} />
      <p style={{ marginTop: 28 }}>We also arrange cruise and sea port transfers.</p>
    </Section>
    <Section tone="cream">
      <Split image="/executive-people-carrier.webp" alt="A1 Cars people carrier at an airport terminal with passengers and luggage" flip>
        <p className="eyebrow dark"><span />Groups and luggage</p>
        <h2>Room for everyone, <em>and the bags.</em></h2>
        <p>Tell us how many people and how many bags and we will send a suitable people carrier or minibus. We also have wheelchair-accessible vehicles, so tell us if you need one.</p>
      </Split>
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
