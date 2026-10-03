import { ContactStrip, FaqList, PageHero, PageShell, RelatedLinks, Section } from '@/components/page-shell';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Airport Transfers from Banbury',
  description: 'Banbury to Heathrow, Birmingham, Gatwick, Luton and Stansted by pre-booked private hire, 24/7. Call 01295 266 778.',
  path: '/airport-transfers',
});

const airports = ['Heathrow', 'Birmingham', 'Gatwick', 'Luton', 'Stansted'];

export default function AirportTransfers() {
  return <PageShell>
    <PageHero eyebrow="Airport transfers" title="Banbury to the airport, planned around your flight." lead="Pre-book a private hire car from Banbury to the airport and back. Early flights and late arrivals are no problem: we are open 24 hours a day." />
    <Section title="Airports we serve">
      <ul>{airports.map((a) => <li key={a}>Banbury to {a}</li>)}</ul>
      <p>We also arrange cruise and sea port transfers.</p>
    </Section>
    <Section title="How it works">
      <p>We pick you up from your home, hotel or workplace within 15 miles of Banbury and take you to the airport. Coming home, we collect you from the airport and bring you back into the area. Give us your flight details and passenger numbers when you book and we will plan the timings.</p>
    </Section>
    <FaqList items={[
      { q: 'How do I book an airport transfer?', a: `Call ${site.phone}, message us on WhatsApp, or email ${site.email} with your date, time, airport and number of passengers.` },
      { q: 'Do you cover early-morning and late-night flights?', a: 'Yes. We are open 24/7, every day.' },
      { q: 'Where do you collect from?', a: 'Anywhere within 15 miles of Banbury. Airport trips always start or end inside that area.' },
      { q: 'Can you take a group or a lot of luggage?', a: 'Yes. Tell us how many people and bags and we will send a suitable people carrier or minibus. We also have wheelchair-accessible vehicles, so tell us if you need one.' },
    ]} />
    <RelatedLinks current="/airport-transfers" />
    <ContactStrip />
  </PageShell>;
}
