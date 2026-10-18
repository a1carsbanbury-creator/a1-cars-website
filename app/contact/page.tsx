import { PageHero, PageShell, Section, Steps } from '@/components/page-shell';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';
import { Phone, MessageCircle, Mail, ArrowUpRight } from 'lucide-react';

export const metadata = pageMeta({
  title: 'Contact & Book Private Hire in Banbury',
  description: 'Call 01295 266 778, WhatsApp or email to book private hire in Banbury and surrounding villages. Open 24/7.',
  path: '/contact',
});

export default function Contact() {
  return <PageShell footerActions={false}>
    <section className="contact-first"><div><h1>Let’s get you there.</h1><p>Call, message or email A1 Cars Banbury. Open 24/7.</p><div className="contact-immediate"><a href={site.phoneHref}><Phone aria-hidden="true" /><span>Call A1 Cars<small>{site.phone}</small></span><ArrowUpRight aria-hidden="true" /></a><a href={site.whatsappHref}><MessageCircle aria-hidden="true" /><span>WhatsApp<small>Message our team</small></span><ArrowUpRight aria-hidden="true" /></a><a href={`mailto:${site.email}`}><Mail aria-hidden="true" /><span>Email<small>{site.email}</small></span><ArrowUpRight aria-hidden="true" /></a></div><a className="where-we-work" href="/local-taxi">Where we work <ArrowUpRight size={16} /></a><p className="contact-confirmation">We confirm availability, price and journey details before your booking is agreed.</p></div><img src="/local-private-hire-estate-v1.webp" alt="Illustrative A1 Cars private hire journey" /></section>
    <Section tone="cream" title="What to tell us">
      <Steps items={[
        ['Where and when', 'Pickup address, destination, date and time. For airports, add your flight time.'],
        ['Who is travelling', 'How many people and how much luggage, and tell us if you need a wheelchair-accessible vehicle.'],
        ['Stops and the return', 'Let us know about any extra stops or a return pickup. We’ll confirm availability and the arrangements when you book.'],
      ]} />
      <p style={{ marginTop: 28 }}><a href="/fleet">Choose a vehicle and send a booking request</a>.</p>
    </Section>
  </PageShell>;
}
