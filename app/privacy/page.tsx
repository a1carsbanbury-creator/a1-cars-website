import { PageHero, PageShell, Section } from '@/components/page-shell';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Privacy Policy',
  description: 'How A1 Cars Banbury Ltd collects and uses personal information when you contact or book with us and use this website.',
  path: '/privacy',
});

export default function Privacy() {
  return <PageShell>
    <PageHero eyebrow="Legal" title="Privacy policy" lead="Last updated 3 October 2026." cta={false} />
    <Section title="Who we are">
      <p>{site.legalName} (company number {site.companyNumber}), {site.address}, is responsible for your personal information. Contact us at <a href={`mailto:${site.email}`}>{site.email}</a> or {site.phone}.</p>
    </Section>
    <Section title="What we collect">
      <ul>
        <li>Details you give us when you call, message or email to book: name, phone number, pickup and drop-off addresses, journey date and time, passenger numbers, flight details.</li>
        <li>Messages you send on WhatsApp or email.</li>
        <li>Website usage data through Google Analytics (pages visited, device and approximate location, taps on call, WhatsApp and email links). This uses cookies.</li>
      </ul>
      <p>The booking form on this site does not send anything to our servers. It prepares a message that opens in WhatsApp or your email app, and you choose whether to send it.</p>
    </Section>
    <Section title="How we use it">
      <p>To arrange and carry out your journey, to reply to you, to keep records we are required to keep as a licensed private hire operator, and to understand how people use our website.</p>
    </Section>
    <Section title="How long we keep it">
      <p>Only as long as we need it for those purposes or the law requires.</p>
    </Section>
    <Section title="Your rights">
      <p>Under UK data protection law you can ask to see, correct or delete your information, or object to how we use it. Email us and we will respond. You can also complain to the Information Commissioner&apos;s Office at ico.org.uk.</p>
    </Section>
    <Section title="Cookies">
      <p>Google Analytics sets cookies to measure website use. You can block or delete cookies in your browser settings, or use Google&apos;s opt-out browser add-on.</p>
    </Section>
  </PageShell>;
}
