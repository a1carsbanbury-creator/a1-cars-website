import { ContactStrip, FaqList, Features, PageHero, PageShell, RelatedLinks, Section, Split } from '@/components/page-shell';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';
import { VehicleChoices } from '@/components/vehicle-choices';

export const metadata = pageMeta({
  title: 'Group Travel & Minibus Hire in Banbury',
  description: 'People carriers and minibuses for groups, events and days out from Banbury, with a driver. Open 24/7. Call 01295 266 778.',
  path: '/group-minibus',
});

export default function GroupMinibus() {
  return <PageShell>
    <PageHero eyebrow="Group & minibus" title="Good company." accent="One shared journey." lead="Friends, family and a day worth making plans for. Arrange a people carrier or minibus for your group, with every journey starting or ending within 15 miles of Banbury." image="/revision-group-dayout.webp" />
    <Section eyebrow="Good for" title="Everyone" accent="arrives together">
      <Features items={[
        ['Family trips and celebrations', 'Weddings, parties and prom transfers.'],
        ['Days out', 'Including Cotswold tours.'],
        ['Events', 'Silverstone, F1 weekends and more.'],
        ['Airport runs', 'Larger parties with luggage.'],
      ]} />
    </Section>
    <Section tone="cream">
      <Split image="/revision-group-dayout.webp" alt="Illustration of friends travelling with a people carrier and minibus">
        <p className="eyebrow dark"><span />How to book</p>
        <h2>Tell us the numbers, <em>we do the rest.</em></h2>
        <p>Call {site.phone}, message us on WhatsApp, or email {site.email} with the date, pickup, destination and number of passengers. Every journey starts or ends within 15 miles of Banbury.</p>
      </Split>
      <VehicleChoices mode="group" />
    </Section>
    <Section eyebrow="Events & days out" title="More of the day," accent="less of the organising">
      <div className="destination-links"><a href="/silverstone-transfers"><small>Race days & events</small><strong>Silverstone & F1</strong><span>Arrange your transfer ↗</span></a><a href="/cotswolds-trips"><small>Villages & scenery</small><strong>Cotswolds trips</strong><span>Plan a day together ↗</span></a></div>
      <p>Planning a festival trip? We can also discuss group travel for <a className="underlined-link" href="https://www.fairportconvention.com/festival-maps/">Fairport’s Cropredy Convention</a>. Tell us the event, pickup and return plans; every journey starts or ends within 15 miles of Banbury.</p>
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
