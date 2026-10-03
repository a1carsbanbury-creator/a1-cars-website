import { SiteFooter, SiteHeader } from '@/components/site-chrome';
import { site } from '@/lib/site';

export type Faq = { q: string; a: string };

export function PageShell({ children }: { children: React.ReactNode }) {
  return <main className="info-page">
    <SiteHeader />
    {children}
    <SiteFooter />
  </main>;
}

export function PageHero({ eyebrow, title, lead, cta = true }: { eyebrow: string; title: string; lead: string; cta?: boolean }) {
  return <section className="info-hero">
    <p className="eyebrow dark"><span />{eyebrow}</p>
    <h1>{title}</h1>
    <p className="info-lead">{lead}</p>
    {cta && <div className="info-actions"><a className="button primary" href={site.phoneHref}>Call {site.phone} <span>↗</span></a><a className="button quiet-dark" href={site.whatsappHref}>WhatsApp us</a></div>}
    <p className="info-note">Open 24/7, every day.</p>
  </section>;
}

export function Section({ title, children }: { title?: string; children: React.ReactNode }) {
  return <section className="info-section">{title && <h2>{title}</h2>}{children}</section>;
}

export function FaqList({ items }: { items: Faq[] }) {
  return <Section title="Questions we get asked">
    <div className="faq">{items.map((f) => <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</div>
  </Section>;
}

export function RelatedLinks({ current }: { current: string }) {
  const all: [string, string][] = [['Local taxi', '/local-taxi'], ['Airport transfers', '/airport-transfers'], ['Executive travel', '/executive-travel'], ['Group & minibus', '/group-minibus'], ['Our vehicles', '/fleet']];
  return <Section title="Other ways we can help"><ul className="related">{all.filter(([, href]) => href !== current).map(([label, href]) => <li key={href}><a href={href}>{label} <span>↗</span></a></li>)}</ul></Section>;
}

export function ContactStrip() {
  return <section className="info-cta">
    <div><small>Ready to book?</small><strong>Call, message or send your details</strong></div>
    <div className="info-actions"><a className="button primary" href={site.phoneHref}>Call {site.phone}</a><a className="button quiet-dark" href={site.whatsappHref}>WhatsApp</a><a className="button quiet-dark" href={`mailto:${site.email}`}>Email</a></div>
  </section>;
}
