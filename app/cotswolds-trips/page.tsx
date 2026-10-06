import { ContactStrip, FaqList, Features, PageHero, PageShell, RelatedLinks, Section, Split } from '@/components/page-shell';
import { VehicleChoices } from '@/components/vehicle-choices';
import { pageMeta } from '@/lib/seo';
export const metadata = pageMeta({ title: 'Cotswolds Trips from Banbury & Nearby Villages', description: 'Private hire for Cotswolds days out and group trips from Banbury and villages within 15 miles. Plan your route and return with A1 Cars Banbury.', path: '/cotswolds-trips' });
export default function CotswoldsTrips() {
  return <PageShell>
    <PageHero eyebrow="Cotswolds trips" title="A change of scenery." accent="Good company along." lead="Explore the Cotswolds with a private hire journey arranged around your plans. We collect from Banbury and surrounding villages within 15 miles, or bring you back to that area." image="/revision-home-pickup.webp" />
    <Section eyebrow="Your day, your route" title="Take the time" accent="to enjoy it"><Features items={[['Village days out', 'Share the places you want to visit and we’ll discuss your route.'], ['Lunch and celebrations', 'Arrange transport for your meal or occasion, including the journey home.'], ['Friends and family', 'Travel together in a people carrier or minibus.'], ['A more comfortable journey', 'Request an executive car preference for a smaller party.']]} /></Section>
    <Section tone="cream"><Split image="/revision-group-dayout.webp" alt="Illustration of friends preparing for a shared day out"><p className="eyebrow dark"><span />Make a plan together</p><h2>A day out, <em>without the parking.</em></h2><p>Tell us your pickup, destinations, any planned stops and return time. We’ll confirm the route, vehicle and arrangements before booking. Each journey must start or end within 15 miles of Banbury.</p></Split><VehicleChoices mode="group" /></Section>
    <FaqList items={[{ q: 'Can we plan several stops?', a: 'Tell us your proposed route and timings so our team can confirm what can be arranged and quote for the journey.' }, { q: 'Do you offer a guided tour?', a: 'This is private hire transport. Share your own itinerary and we’ll discuss the travel arrangements.' }, { q: 'Can you pick us up anywhere in the Cotswolds?', a: 'We can collect from a Cotswolds destination when the journey brings you back within 15 miles of Banbury. Trips that neither start nor end in that area are not offered.' }]} />
    <RelatedLinks current="/cotswolds-trips" /><ContactStrip />
  </PageShell>;
}
