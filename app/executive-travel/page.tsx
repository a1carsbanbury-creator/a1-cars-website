import { ContactStrip, FaqList, PageHero, PageShell, RelatedLinks, Section } from '@/components/page-shell';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Executive & Corporate Cars from Banbury',
  description: 'Executive cars for business travel, client pickups and weddings from Banbury. Pre-booked, professional, open 24/7. Call 01295 266 778.',
  path: '/executive-travel',
});

export default function ExecutiveTravel() {
  return <PageShell>
    <PageHero eyebrow="Executive travel" title="Executive cars for business and occasions." lead="Smart, comfortable cars for client pickups, business trips and special days, arranged simply and driven professionally." />
    <Section title="Where it fits">
      <ul>
        <li>Business travel and client transfers</li>
        <li>Airport runs for directors and teams</li>
        <li>Weddings and special occasions</li>
        <li>Event travel, including Silverstone and F1 weekends</li>
      </ul>
    </Section>
    <Section title="Business accounts">
      <p>Travelling for work regularly? Email <a href={`mailto:${site.email}`}>{site.email}</a> or call us and we will talk through what your company needs.</p>
    </Section>
    <FaqList items={[
      { q: 'Can I pre-book a car for a client?', a: `Yes. Call ${site.phone} or email us with the pickup, destination, date and time.` },
      { q: 'Do you do weddings?', a: 'Yes. Tell us the date, the route and how many people are travelling and we will arrange the right car.' },
      { q: 'Is it only available in the daytime?', a: 'No. We are open 24/7, every day.' },
    ]} />
    <RelatedLinks current="/executive-travel" />
    <ContactStrip />
  </PageShell>;
}
