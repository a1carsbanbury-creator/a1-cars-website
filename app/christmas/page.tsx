import { ContactStrip, FaqList, PageHero, PageShell, Section } from '@/components/page-shell';
import { ChristmasPicker } from '@/components/christmas-picker';
import { ChristmasBookButton } from '@/components/christmas-book';
import { FleetCards } from '@/components/fleet-cards';
import { vehicleCatalogue as v } from '@/lib/fleet';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Christmas Travel: Book Your Car Early',
  description: 'Christmas bookings are open at A1 Cars Banbury. Family gatherings, Christmas parties and groups: E-Class, V-Class, people carriers, minibuses and a 16-seat minibus. Book early. Open 24/7.',
  path: '/christmas',
});

export default function Christmas() {
  return <PageShell>
    <PageHero
      eyebrow="Christmas travel · bookings open"
      title="Make the moments."
      accent="We’ll handle the journey."
      lead="Family visits, festive nights and group travel from Banbury. Book early for the best choice of cars and times, and ask us about early-booking rates."
      image="/revision-group-dayout.webp"
      ctaContent={<div className="hero-actions"><ChristmasBookButton /><a className="button quiet" href={site.phoneHref}>Call {site.phone}</a></div>}
    />
    <Section eyebrow="Who’s travelling?" title="Who are you" accent="travelling with?">
      <ChristmasPicker />
    </Section>
    <Section tone="cream" eyebrow="Choose your car" title="Room for the" accent="whole family.">
      <FleetCards journeyType="Local" vehicles={[v.eclassBlack, v.vclass, v.transporter, v.touran]} />
    </Section>
    <Section eyebrow="Bigger group?" title="Everyone" accent="together.">
      <p className="info-lead xmas-note">Christmas parties and big family days: our 16-seat minibus keeps the whole group in one vehicle.</p>
      <FleetCards journeyType="Group & minibus" vehicles={[v.sprinter]} />
    </Section>
    <Section eyebrow="Party season" title="Christmas parties," accent="sorted.">
      <p className="info-lead xmas-note">Work dos, family get-togethers and festive nights out: book one vehicle for the whole party and a ride home when it ends. Planning a birthday or wedding too? See our <a className="underlined-link" href="/celebrations">celebrations page</a>.</p>
    </Section>
    <Section tone="ink" eyebrow="Book early" title="Sorted before" accent="the rush.">
      <p className="info-lead xmas-note">Christmas fills up. Booking early gives you the best choice of cars and pickup times, and early-booking rates may be available. Ask when you book.</p>
      <div className="hero-actions"><ChristmasBookButton label="Plan your Christmas journey" /><a className="button quiet" href={site.whatsappHref}>WhatsApp us</a></div>
    </Section>
    <FaqList items={[
      { q: 'Are you open on Christmas Day and Boxing Day?', a: 'We are open 24 hours a day, every day. Availability at peak times is confirmed when you book, so please book early.' },
      { q: 'Do you have early-booking rates?', a: 'Ask when you book and we will confirm what is available for your date and journey.' },
      { q: 'Which car should we choose?', a: 'The E-Class suits smaller family trips, the 7-seat people carrier and V-Class suit families with luggage, the 8-seat minibus suits bigger groups, and the 16-seat minibus is for parties and large gatherings. Capacities are confirmed when you book.' },
    ]} />
    <ContactStrip />
  </PageShell>;
}
