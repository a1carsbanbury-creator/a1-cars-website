import { ContactStrip, FaqList, Features, PageHero, PageShell, RelatedLinks, Section, Steps } from '@/components/page-shell';
import { VehicleChoices } from '@/components/vehicle-choices';
import { pageMeta } from '@/lib/seo';
export const metadata = pageMeta({ title: 'Silverstone & F1 Transfers from Banbury', description: 'Pre-book private hire and group transport to Silverstone from Banbury and villages within 15 miles, with return pickups. Call 01295 266 778.', path: '/silverstone-transfers' });
export default function SilverstoneTransfers() {
  return <PageShell>
    <PageHero eyebrow="Silverstone & F1" title="The race-day buzz." accent="The journey arranged." lead="Private hire and group transfers to Silverstone from Banbury and the surrounding villages. Pre-book your outward journey and return, with every trip starting or ending within 15 miles of Banbury." image="/revision-group-dayout.webp" />
    <Section eyebrow="A day at Silverstone" title="Travel together," accent="enjoy the day"><Features items={[['F1 race weekends', 'Arrange transport for your party and share your planned arrival time.'], ['Other race days', 'Tell us the event and your route, and we’ll discuss the right vehicle.'], ['Executive journeys', 'Request a Mercedes preference for a smaller party.'], ['Groups and friends', 'People carriers and minibuses for a shared journey.']]} /><p>Check your tickets, opening times and event access details with <a className="underlined-link" href="https://www.silverstone.co.uk/events/formula-1-british-grand-prix">Silverstone’s official event information</a>. Pickup locations and timings are agreed when booking.</p></Section>
    <Section tone="cream" eyebrow="Your group" title="Pick the style" accent="that suits you"><VehicleChoices mode="group" /></Section>
    <Section eyebrow="Plan ahead" title="Before the engines" accent="start"><Steps items={[['Share the plans', 'Date, event, pickup address, party size and any bags.'], ['Agree both journeys', 'Confirm your outward and return pickup arrangements with our team.'], ['Keep in touch', 'Event traffic can affect journey times; leave room in your plans.']]} /></Section>
    <FaqList items={[{ q: 'Can you collect from a village outside Banbury?', a: 'Yes, from surrounding villages within 15 miles of Banbury. Every trip starts or ends within that area.' }, { q: 'Are you an official Silverstone transport partner?', a: 'No. A1 Cars Banbury provides independently booked private hire transport.' }, { q: 'Can you bring us home after the event?', a: 'Yes. Discuss the return time and pickup location when you book.' }]} />
    <RelatedLinks current="/silverstone-transfers" /><ContactStrip />
  </PageShell>;
}
