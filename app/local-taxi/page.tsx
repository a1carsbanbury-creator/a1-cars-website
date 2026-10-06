import { ContactStrip, FaqList, PageHero, PageShell, RelatedLinks, Section, Split } from '@/components/page-shell';
import { LocalAccessibleAction, LocalBookingGuide, LocalHeroActions, LocalJourneyBooking, LocalJourneyOptions, LocalStickyActions } from '@/components/local-journeys';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Local Private Hire in Banbury & Nearby Villages',
  description: 'Local private hire in Banbury and the surrounding villages within 15 miles. Station pickups, hospital trips, school runs and nights out. Open 24/7.',
  path: '/local-taxi',
});
export default function LocalTaxi() {
  return <LocalJourneyBooking><PageShell footerActions={<LocalStickyActions />}>
    <PageHero eyebrow="Local private hire" title="In and around Banbury," accent="there for your plans." lead="Private hire for Banbury and the surrounding villages, day and night. Local pickups and destinations are within 15 miles of Banbury — from your doorstep to the station, an appointment or a night out." image="/revision-home-pickup.webp" ctaContent={<LocalHeroActions />} />
    <Section eyebrow="Where are you heading?" title="Choose your" accent="local journey">
      <LocalJourneyOptions />
    </Section>
    <Section tone="cream" compact><LocalBookingGuide /><p className="local-journey-area">Local trips start and finish within 15 miles of Banbury. Heading to an airport? See <a href="/airport-transfers">airport transfers</a>.</p></Section>
    <Section>
      <Split image="/revision-fleet-lineup.webp" alt="Illustration of estate cars, executive cars and people carriers">
        <p className="eyebrow dark"><span />Our fleet</p><h2>Cars for every <em>journey.</em></h2><p>We have 20+ vehicles, from everyday saloons and estates to larger people carriers. Tell us your party size and bags so we can confirm the right vehicle.</p><a className="underlined-link" href="/fleet">See our vehicles <span>↗</span></a>
      </Split>
    </Section>
    <Section tone="cream" eyebrow="Accessible journeys" title="A welcome arrival," accent="for everyone">
      <Split image="/revision-accessible-arrival.webp" alt="Illustration of a wheelchair user smiling with a driver beside an accessible vehicle" flip>
        <p>Wheelchair-accessible vehicles are available to request. Tell us the practical pickup or vehicle arrangements you need when booking. Our team will confirm a suitable vehicle.</p><LocalAccessibleAction />
      </Split>
    </Section>
    <FaqList items={[
      { q: 'How do I book a private hire journey?', a: `Choose a journey above, enter your pickup and destination, and send the prepared request. Or call ${site.phone}. Our team will confirm the arrangements.` },
      { q: 'Are you open at night and at weekends?', a: 'Yes. A1 Cars Banbury is open 24 hours a day, every day of the year.' },
      { q: 'How far can you take me?', a: 'Local trips start and finish within 15 miles of Banbury. For airports and longer journeys, every trip starts or ends within that area.' },
      { q: 'Do you have wheelchair-accessible vehicles?', a: 'Yes. Choose the wheelchair-accessible journey card or tick the option in the booking form. Share practical pickup needs so our team can confirm the right arrangements.' },
      { q: 'Is my booking confirmed when I send the request?', a: 'No. The request goes to our team, who confirm the vehicle, timings and arrangements before your booking is agreed.' },
      { q: 'Can I pay by card?', a: 'Yes, all major payment cards are accepted.' },
    ]} />
    <RelatedLinks current="/local-taxi" /><ContactStrip />
  </PageShell></LocalJourneyBooking>;
}
