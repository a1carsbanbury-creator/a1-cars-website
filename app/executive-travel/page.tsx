import { ContactStrip, FaqList, Features, PageHero, PageShell, RelatedLinks, Section, Split } from '@/components/page-shell';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Executive & Corporate Cars from Banbury',
  description: 'Executive cars for business travel, client pickups and weddings from Banbury. Pre-booked, professional, open 24/7. Call 01295 266 778.',
  path: '/executive-travel',
});

export default function ExecutiveTravel() {
  return <PageShell>
    <PageHero eyebrow="Executive travel" title="Executive cars" accent="for business and occasions." lead="Smart, comfortable cars for client pickups, business trips and special days, arranged simply and driven professionally." image="/executive-travel.webp" />
    <Section eyebrow="Where it fits" title="Arrive" accent="well">
      <Features items={[
        ['Business travel', 'Client transfers and meetings, on time and presentable.'],
        ['Weddings', 'Tell us the date, route and numbers and we will arrange the right car.'],
        ['Prom transfers', 'Arrive in style, with a smart car and a professional driver.'],
        ['Events and locations', 'Silverstone, F1 weekends and other occasions.'],
      ]} />
      <p style={{ marginTop: 28 }}>Heading to the airport? See <a href="/airport-transfers">airport transfers</a>.</p>
    </Section>
    <Section tone="cream">
      <Split image="/executive-people-carrier.webp" alt="Executive Mercedes people carrier at an airport terminal" flip>
        <p className="eyebrow dark"><span />Business accounts</p>
        <h2>Travelling for work <em>regularly?</em></h2>
        <p>Email <a href={`mailto:${site.email}`}>{site.email}</a> or call {site.phone} and we will talk through what your company needs.</p>
      </Split>
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
