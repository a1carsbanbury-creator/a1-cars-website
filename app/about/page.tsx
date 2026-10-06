import { ContactStrip, Features, PageHero, PageShell, Section, Split } from '@/components/page-shell';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = pageMeta({
  title: 'About A1 Cars Banbury',
  description: 'A1 Cars Banbury is a licensed private hire company, open 24/7 with 20+ vehicles. Every journey starts or ends within 15 miles of Banbury.',
  path: '/about',
});

export default function About() {
  return <PageShell>
    <PageHero eyebrow="About us" title="Your local private hire," accent="open every hour." lead="A1 Cars Banbury arranges local journeys, airport transfers, executive travel and group transport for Banbury and the surrounding villages. Every journey starts or ends within 15 miles of Banbury." image="/revision-home-pickup.webp" cta={false} />
    <Section tone="cream">
      <Split image="/group-travel.webp" alt="A1 Cars vehicles outside a Cotswold manor house">
        <p className="eyebrow dark"><span />Who we are</p>
        <h2>Local, licensed, <em>always on.</em></h2>
        <p>We are a local private hire firm with 20+ vehicles, from everyday saloons to larger people carriers, including wheelchair-accessible vehicles. We are open 24 hours a day, every day, and every journey we take starts or ends within 15 miles of Banbury.</p>
        <p>Been with us? <a href={site.reviewHref}>Leave us a Google review</a>.</p>
      </Split>
    </Section>
    <Section eyebrow="What you can rely on" title="The" accent="basics, done properly">
      <Features items={[
        ['Licensed', site.licence + '.'],
        ['Open 24/7', 'Early flights, late nights and weekends, every day of the year.'],
        ['20+ vehicles', 'Saloons, estates, people carriers and minibuses, including wheelchair-accessible vehicles.'],
        ['Local', `Based in ${site.area}.`],
      ]} />
    </Section>
    <Section tone="cream" eyebrow="Company details" title="The" accent="small print">
      <ul>
        <li>{site.legalName}</li>
        <li>{site.area}</li>
        <li>Phone: <a href={site.phoneHref}>{site.phone}</a></li>
        <li>Email: <a href={`mailto:${site.email}`}>{site.email}</a></li>
      </ul>
    </Section>
    <ContactStrip />
  </PageShell>;
}
