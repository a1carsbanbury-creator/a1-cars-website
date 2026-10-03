import { ContactStrip, FaqList, PageHero, PageShell, RelatedLinks, Section } from '@/components/page-shell';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Group Travel & Minibus Hire in Banbury',
  description: 'People carriers and minibuses for groups, events and days out from Banbury, with a driver. Open 24/7. Call 01295 266 778.',
  path: '/group-minibus',
});

export default function GroupMinibus() {
  return <PageShell>
    <PageHero eyebrow="Group & minibus" title="Group travel, with one driver and one booking." lead="Travelling together is easier in one vehicle. Tell us how many of you there are and we will match a people carrier or minibus to the group." />
    <Section title="Good for">
      <ul>
        <li>Family trips and celebrations</li>
        <li>Days out, including Cotswold tours</li>
        <li>Event travel, such as Silverstone and F1 weekends</li>
        <li>Airport runs for larger parties</li>
        <li>Weddings and prom transfers</li>
      </ul>
    </Section>
    <Section title="How to book">
      <p>Call {site.phone}, message us on WhatsApp, or email {site.email} with the date, pickup, destination and number of passengers. Every journey starts or ends within 15 miles of Banbury.</p>
    </Section>
    <FaqList items={[
      { q: 'How do I know which vehicle I need?', a: 'Tell us the number of passengers and how much luggage. We will recommend the right vehicle when you book.' },
      { q: 'Can you take us to an event outside the area?', a: 'Yes, as long as the journey starts or ends within 15 miles of Banbury. For example, we can take you from Banbury to Silverstone and bring you back.' },
      { q: 'Can we book for late at night?', a: 'Yes. We are open 24 hours a day, every day.' },
    ]} />
    <RelatedLinks current="/group-minibus" />
    <ContactStrip />
  </PageShell>;
}
