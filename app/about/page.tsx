import { ContactStrip, PageHero, PageShell, Section } from '@/components/page-shell';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = pageMeta({
  title: 'About A1 Cars Banbury',
  description: 'A1 Cars Banbury is a licensed Banbury taxi and private hire company, open 24/7 with 20+ vehicles. Based at 23 Grimsbury Square, Banbury.',
  path: '/about',
});

export default function About() {
  return <PageShell>
    <PageHero eyebrow="About us" title="A Banbury taxi company, open every hour." lead="A1 Cars Banbury runs local taxis, airport transfers, executive cars and group travel from Grimsbury, Banbury." cta={false} />
    <Section title="Who we are">
      <p>We are a local private hire firm with 20+ vehicles, from everyday saloons to larger people carriers, including wheelchair-accessible vehicles. We are open 24 hours a day, every day, and every journey we take starts or ends within 15 miles of Banbury.</p>
    </Section>
    <Section title="Licensed and insured">
      <p>{site.licence}. Our vehicles are covered by the insurance required for private hire.</p>
    </Section>
    <Section title="Company details">
      <ul>
        <li>{site.legalName}, company number {site.companyNumber}</li>
        <li>{site.address}</li>
        <li>Phone: <a href={site.phoneHref}>{site.phone}</a></li>
        <li>Email: <a href={`mailto:${site.email}`}>{site.email}</a></li>
      </ul>
      <p>Been with us? <a href={site.reviewHref}>Leave us a Google review</a>.</p>
    </Section>
    <ContactStrip />
  </PageShell>;
}
