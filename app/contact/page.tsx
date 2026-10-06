import { PageHero, PageShell, Section, Steps } from '@/components/page-shell';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Contact & Book Private Hire in Banbury',
  description: 'Call 01295 266 778, WhatsApp or email to book private hire in Banbury and surrounding villages within 15 miles. Open 24/7.',
  path: '/contact',
});

export default function Contact() {
  return <PageShell>
    <PageHero eyebrow="Contact" title="Your next journey," accent="starts here." lead="Book private hire in Banbury and the surrounding villages. Call, WhatsApp or email your journey details. Open 24/7, with every trip starting or ending within 15 miles of Banbury." image="/revision-home-pickup.webp" cta={false} />
    <Section>
      <div className="contact-cards">
        <a href={site.phoneHref}><small>Call, 24/7</small><strong>{site.phone}</strong></a>
        <a href={site.whatsappHref}><small>WhatsApp</small><strong>Message A1 Cars</strong></a>
        <a href={`mailto:${site.email}`}><small>Email</small><strong>{site.email}</strong></a>
        <a href="/local-taxi"><small>Where we work</small><strong>{site.area}</strong></a>
      </div>
    </Section>
    <Section tone="cream" eyebrow="Before you call" title="What to" accent="tell us">
      <Steps items={[
        ['Where and when', 'Pickup address, destination, date and time. For airports, add your flight time.'],
        ['Who is travelling', 'How many people and how much luggage, and tell us if you need a wheelchair-accessible vehicle.'],
        ['Within 15 miles', 'Every journey starts or ends within 15 miles of Banbury.'],
      ]} />
      <p style={{ marginTop: 28 }}><a href="/fleet">Choose a vehicle and send a booking request</a>.</p>
    </Section>
  </PageShell>;
}
