import { PageHero, PageShell, Section } from '@/components/page-shell';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Contact & Book a Taxi in Banbury',
  description: 'Call 01295 266 778, message us on WhatsApp or email to book a taxi in Banbury. Open 24/7. 23 Grimsbury Square, Banbury, OX16 3HU.',
  path: '/contact',
});

export default function Contact() {
  return <PageShell>
    <PageHero eyebrow="Contact" title="Book a taxi in Banbury." lead="The quickest way is to call. You can also message us on WhatsApp or email your journey details. We are open 24/7." cta={false} />
    <Section>
      <div className="contact-cards">
        <a href={site.phoneHref}><small>Call, 24/7</small><strong>{site.phone}</strong></a>
        <a href={site.whatsappHref}><small>WhatsApp</small><strong>Message A1 Cars</strong></a>
        <a href={`mailto:${site.email}`}><small>Email</small><strong>{site.email}</strong></a>
        <a href={site.mapHref} target="_blank" rel="noreferrer"><small>Find us</small><strong>{site.address}</strong></a>
      </div>
    </Section>
    <Section title="What to tell us">
      <p>Your pickup address, where you are going, the date and time, and how many people are travelling. For airports, add your flight time. Every journey starts or ends within 15 miles of Banbury.</p>
      <p><a href="/fleet">Choose a vehicle and send a booking request</a>.</p>
    </Section>
  </PageShell>;
}
