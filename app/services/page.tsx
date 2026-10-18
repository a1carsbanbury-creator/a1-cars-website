import type { CSSProperties } from 'react';
import { ContactStrip, FaqList, PageHero, PageShell, Section } from '@/components/page-shell';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = pageMeta({
  title: 'All Our Services: Private Hire, Airport, Executive & Group Travel',
  description: 'Explore local private hire, airport transfers, executive travel, minibuses, long-distance journeys, weddings, parties, port transfers, Silverstone and Cotswold tours. Open 24/7.',
  path: '/services',
});

const services = [
  { label: 'Local private hire', href: '/local-taxi', image: '/local-private-hire-estate-v1.webp', blurb: 'Station pickups, hospital trips, school runs and nights out' },
  { label: 'Airport transfers', href: '/airport-transfers', image: '/revision-airport-arrival.webp', blurb: 'Heathrow, Birmingham, Gatwick, Luton and Stansted' },
  { label: 'Executive travel', href: '/executive-travel', image: '/revision-executive-hotel.webp', blurb: 'Business meetings, corporate travel and professional pickups' },
  { label: 'Group & minibus', href: '/group-minibus', image: '/revision-group-dayout.webp', blurb: 'People carriers and minibuses for the whole group' },
  { label: 'Long-distance travel', href: '/long-distance-travel', image: '/revision-fleet-lineup.webp', blurb: 'Journeys beyond the local area, planned in advance' },
];

const occasions = [
  { label: 'Weddings, parties & occasions', href: '/celebrations', image: '/revision-wedding.webp', blurb: 'Weddings, birthdays, proms and Christmas parties, with travel arranged together' },
  { label: 'Port & cruise transfers', href: '/port-transfers', image: '/port-cruise-transfer-v1.webp', blurb: 'Transfers for cruises and ferries, with pickup times and luggage planned ahead' },
  { label: 'Cotswold tours & days out', href: '/cotswolds-trips', image: '/revision-group-dayout.webp', blurb: 'Village visits, scenic stops and days out, with your itinerary agreed in advance' },
  { label: 'Silverstone & events', href: '/silverstone-transfers', image: '/minibus-travel.webp', blurb: 'F1, race days and other events, with pickup and return arrangements agreed' },
];

function ServiceCards({ items }: { items: typeof services }) {
  return <div className="related services-catalogue">{items.map((service, index) => <a className="reveal" href={service.href} key={service.href} style={{ ...({ '--i': index } as CSSProperties), backgroundImage: `linear-gradient(0deg, rgba(12,29,26,.94) 8%, rgba(12,29,26,.08) 85%), url('${service.image}')`, backgroundPosition: service.href === '/local-taxi' ? '70% center' : 'center' }}><strong>{service.label}</strong><small>{service.blurb}</small><b aria-hidden="true">↗</b></a>)}</div>;
}

export default function Services() {
  return <PageShell>
    <PageHero eyebrow="Our services" title="Everything we do," accent="in one place." lead="From everyday pickups to airports, celebrations, ports and days out. Travel from Banbury and the surrounding area, with suitable vehicles and arrangements confirmed when you book. Open 24/7, every day." image="/local-private-hire-estate-v1.webp" />
    <Section eyebrow="Choose a service" title="How can we" accent="help?">
      <ServiceCards items={services} />
      <p className="fleet-availability">Wheelchair-accessible vehicles are available to request. Tell us your passenger numbers, luggage and any practical pickup needs when you book.</p>
    </Section>
    <Section tone="cream" eyebrow="Occasions, ports & days out" title="More reasons" accent="to travel.">
      <ServiceCards items={occasions} />
    </Section>
    <FaqList items={[
      { q: 'How do I book?', a: `Call ${site.phone}, message us on WhatsApp, or email ${site.email}. We will confirm your pickup, timings and vehicle.` },
      { q: 'Are you open at night and at weekends?', a: 'Yes. A1 Cars Banbury is open 24 hours a day, every day of the year.' },
      { q: 'Do you have wheelchair-accessible vehicles?', a: 'Yes. Tell us when you book so we can confirm a suitable vehicle and the arrangements for your journey.' },
    ]} />
    <ContactStrip />
  </PageShell>;
}
