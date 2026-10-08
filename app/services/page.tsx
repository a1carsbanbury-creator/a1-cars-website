import type { CSSProperties } from 'react';
import { ContactStrip, FaqList, PageHero, PageShell, Section } from '@/components/page-shell';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = pageMeta({
  title: 'All Our Services: Private Hire, Airport, Executive & Group Travel',
  description: 'Everything A1 Cars Banbury does: local private hire, airport transfers, executive cars, group and minibus travel, long-distance trips, Silverstone and the Cotswolds. Open 24/7.',
  path: '/services',
});

const services = [
  { label: 'Local private hire', href: '/local-taxi', image: '/revision-home-pickup.webp', blurb: 'Station pickups, hospital trips, school runs and nights out' },
  { label: 'Airport transfers', href: '/airport-transfers', image: '/revision-airport-arrival.webp', blurb: 'Heathrow, Birmingham, Gatwick, Luton and Stansted' },
  { label: 'Executive travel', href: '/executive-travel', image: '/revision-executive-hotel.webp', blurb: 'Business trips, weddings and special occasions' },
  { label: 'Group & minibus', href: '/group-minibus', image: '/revision-group-dayout.webp', blurb: 'People carriers and minibuses for the whole group' },
  { label: 'Long-distance travel', href: '/long-distance-travel', image: '/revision-fleet-lineup.webp', blurb: 'Journeys beyond the local area, planned in advance' },
];

export default function Services() {
  return <PageShell>
    <PageHero eyebrow="Our services" title="Everything we do," accent="in one place." lead="Local private hire, airport transfers, executive cars, group travel and longer journeys from Banbury and the surrounding villages. Open 24/7, every day. Every journey starts or ends within 15 miles of Banbury." image="/revision-home-pickup.webp" />
    <Section eyebrow="Choose a service" title="How can we" accent="help?">
      <div className="related">{services.map((s, i) => <a className="reveal" href={s.href} key={s.href} style={{ ...({ '--i': i } as CSSProperties), backgroundImage: `linear-gradient(0deg, rgba(12,29,26,.88) 8%, rgba(12,29,26,.1) 65%), url('${s.image}')` }}><strong>{s.label}</strong><small>{s.blurb}</small><b aria-hidden="true">↗</b></a>)}</div>
    </Section>
    <Section tone="cream" eyebrow="Days out and events" title="Make a day" accent="of it">
      <div className="destination-links"><a href="/silverstone-transfers"><small>Race days & events</small><strong>Silverstone & F1</strong><span>Arrange your transfer ↗</span></a><a href="/cotswolds-trips"><small>Villages & scenery</small><strong>Cotswolds trips</strong><span>Plan a day together ↗</span></a></div>
    </Section>
    <FaqList items={[
      { q: 'How do I book?', a: `Call ${site.phone}, message us on WhatsApp, or email ${site.email}. We will confirm your pickup, timings and vehicle.` },
      { q: 'Are you open at night and at weekends?', a: 'Yes. A1 Cars Banbury is open 24 hours a day, every day of the year.' },
      { q: 'Do you have wheelchair-accessible vehicles?', a: 'Yes. Tell us when you book so we can confirm a suitable vehicle and the arrangements for your journey.' },
    ]} />
    <ContactStrip />
  </PageShell>;
}
