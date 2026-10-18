import { PageHero, PageShell, Prose } from '@/components/page-shell';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Privacy Policy',
  description: 'How A1 Cars Banbury Ltd collects and uses personal information when you contact or book with us and use this website.',
  path: '/privacy',
});

export default function Privacy() {
  return <PageShell>
    <PageHero eyebrow="Legal" title="Privacy" accent="policy." lead="Last updated 18 October 2026." cta={false} />
    <Prose>
      <h2>Who we are</h2>
      <p>{site.legalName}, based in Banbury, is responsible for your personal information. Contact us at <a href={`mailto:${site.email}`}>{site.email}</a> or {site.phone}.</p>
      <h2>What we collect</h2>
      <ul>
        <li>Details you give us when you call, message or email to book: name, phone number, optional email address, pickup and drop-off addresses, journey date and time, passenger numbers, flight details, and any email-offers choice you make.</li>
        <li>Messages you send on WhatsApp or email.</li>
        <li>Website usage data through Google Analytics (pages visited, device and approximate location, taps on call, WhatsApp and email links). If you accept, this uses a cookie. If you decline or ignore the notice, we still count visits and taps, but anonymously and without a cookie.</li>
      </ul>
      <p>The booking form on this site does not send anything to our servers. It prepares a message that opens in WhatsApp or your email app, and you choose whether to send it.</p>
      <h2>How we use it</h2>
      <p>To arrange and carry out your journey, to reply to you, to keep records we are required to keep as a licensed private hire operator, and to understand how people use our website.</p>
      <h2 id="email-offers">Optional email offers</h2>
      <p>If you choose to receive email offers, we may use the email address you provide to send A1 Cars Banbury promotions, discounts and loyalty updates. The choice starts unticked and is separate from your journey enquiry. You can book without providing an email address or agreeing to offers.</p>
      <p>Your email address and choice are included in the enquiry you choose to send through WhatsApp or email, along with the time a positive choice was prepared. Completing the form alone does not add you to a mailing list. You can withdraw your choice at any time by contacting us at <a href={`mailto:${site.email}`}>{site.email}</a>. Future promotional emails must include a way to opt out.</p>
      <h2>How long we keep it</h2>
      <p>Only as long as we need it for those purposes or the law requires.</p>
      <h2>Your rights</h2>
      <p>Under UK data protection law you can ask to see, correct or delete your information, or object to how we use it. Email us and we will respond. You can also complain to the Information Commissioner&apos;s Office at ico.org.uk.</p>
      <h2>Cookies</h2>
      <p>Google Analytics sets a cookie to measure website use only if you tap Accept on the cookie notice. You can change your choice at any time with &quot;Cookie settings&quot; in the footer, or block and delete cookies in your browser settings. We do not use advertising cookies on this site.</p>
    </Prose>
  </PageShell>;
}
