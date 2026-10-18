import { ContactStrip, FaqList, PageHero, PageShell, RelatedLinks, Section, Split, Steps } from '@/components/page-shell';
import { CelebrationCards } from '@/components/celebration-cards';
import { VehicleChoices } from '@/components/vehicle-choices';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Celebrations: Proms, Birthdays, Weddings & Christmas Parties',
  description: 'Private hire for proms, birthdays, weddings, Christmas parties and anniversaries from Banbury. Executive cars, people carriers and minibuses. Call 01295 266 778.',
  path: '/celebrations',
});

export default function Celebrations() {
  return <PageShell>
    <PageHero
      eyebrow="Celebrations"
      title="Arrive together."
      accent="Celebrate properly."
      lead="Prom nights, birthdays, weddings and festive evenings. Get dressed up, bring your favourite people and let us help arrange the journey there and home."
      image="/celebration-prom-v1.webp"
      images={['/celebration-prom-v1.webp', '/celebration-birthday-v1.webp', '/revision-wedding.webp', '/celebration-christmas-v1.webp', '/celebration-anniversary-v1.webp']}
    />
    <Section eyebrow="Occasions we travel to" title="Whatever you’re" accent="celebrating">
      <CelebrationCards />
    </Section>
    <Section tone="cream" eyebrow="Wedding days" title="A calm start to" accent="the big day.">
      <Split image="/revision-wedding.webp" alt="Wedding party arriving by private hire car">
        <p>Choose a Mercedes executive car for the couple and a people carrier or minibus for family and guests. Tell us your timings, venues and numbers, and we’ll confirm the arrangements before the day so you can focus on everything else.</p>
      </Split>
    </Section>
    <Section eyebrow="Party time" title="Everyone in" accent="one vehicle">
      <p className="info-lead">Keep the group together, from the first pickup to the journey home. Tell us your numbers and timings so we can confirm a suitable vehicle and agree your return pickup.</p>
      <VehicleChoices mode="group" />
    </Section>
    <Section tone="cream" eyebrow="Make it special" title="Executive" accent="cars">
      <p className="info-lead">For weddings, milestone birthdays and special evenings, choose a Mercedes with a professional driver.</p>
      <VehicleChoices mode="executive" />
    </Section>
    <Section eyebrow="Plan it" title="Three steps to" accent="sorted">
      <Steps items={[
        ['Tell us the plan', 'The date, the occasion, pickup and drop-off addresses, and how many of you are travelling.'],
        ['Choose your vehicle', 'We’ll suggest the right category for your group and your luggage, and confirm availability.'],
        ['Enjoy the day', 'Your driver arrives on time. Add a return journey so the ride home is already arranged.'],
      ]} />
    </Section>
    <FaqList items={[
      { q: 'Can I book a return journey for after the party?', a: 'Yes. Give us your pickup time or ask us to be on call. We’ll agree the return arrangements when you book.' },
      { q: 'Can you collect guests from different addresses?', a: 'Often, yes. Share the addresses and times when you book and we’ll confirm what we can arrange.' },
      { q: 'How early should we book for a wedding or Christmas party?', a: 'As early as you can. Weekends and the festive season fill up first, and booking early gives you the best choice of vehicles.' },
      { q: 'Will I get the exact vehicle in the photos?', a: 'Photos are representative. You will receive a vehicle of a similar category and standard, and executive Mercedes bookings are confirmed by model.' },
    ]} />
    <RelatedLinks current="/celebrations" /><ContactStrip />
  </PageShell>;
}
