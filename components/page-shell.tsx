import type { CSSProperties } from 'react';
import { SiteFooter, SiteHeader } from '@/components/site-chrome';
import { site } from '@/lib/site';
import { PhotoSlider } from '@/components/photo-slider';

export type Faq = { q: string; a: string };

const services = [
  { label: 'Local private hire', href: '/local-taxi', image: '/revision-home-pickup.webp', blurb: 'Banbury and the surrounding villages' },
  { label: 'Airport transfers', href: '/airport-transfers', image: '/revision-airport-arrival.webp', blurb: 'Planned around your flight' },
  { label: 'Executive travel', href: '/executive-travel', image: '/revision-executive-hotel.webp', blurb: 'Business trips and occasions' },
  { label: 'Group & minibus', href: '/group-minibus', image: '/revision-group-dayout.webp', blurb: 'One booking for the whole group' },
  { label: 'Silverstone & F1', href: '/silverstone-transfers', image: '/revision-group-dayout.webp', blurb: 'Race days, arranged together' },
  { label: 'Cotswolds trips', href: '/cotswolds-trips', image: '/revision-home-pickup.webp', blurb: 'Villages, scenery and days out' },
];

const stagger = (i: number) => ({ '--i': i }) as CSSProperties;
const heroPhotos: Record<string, string[]> = {
  '/revision-home-pickup.webp': ['/revision-home-pickup.webp', '/revision-accessible-arrival.webp', '/revision-fleet-lineup.webp'],
  '/revision-airport-arrival.webp': ['/revision-airport-arrival.webp', '/executive-people-carrier.webp', '/revision-fleet-lineup.webp'],
  '/revision-executive-hotel.webp': ['/revision-executive-hotel.webp', '/revision-wedding.webp', '/executive-people-carrier.webp'],
  '/revision-group-dayout.webp': ['/revision-group-dayout.webp', '/executive-people-carrier.webp', '/revision-fleet-lineup.webp'],
};

export function PageShell({ children }: { children: React.ReactNode }) {
  return <main className="info-page">
    <SiteHeader />
    {children}
    <SiteFooter />
  </main>;
}

export function PageHero({ eyebrow, title, accent, lead, image, cta = true }: { eyebrow: string; title: string; accent?: string; lead: string; image?: string; cta?: boolean }) {
  return <>
    <section className={image ? 'info-hero has-slider' : 'info-hero compact'}>
      {image && <PhotoSlider className="info-hero-slider" images={heroPhotos[image] ?? [image]} label={`${eyebrow} photographs`} />}
      <div className="info-hero-inner">
        <p className="eyebrow"><span />{eyebrow}</p>
        <h1>{title}{accent && <><br /><em>{accent}</em></>}</h1>
        <p className="info-lead">{lead}</p>
        {cta && <div className="hero-actions"><a className="button primary" href={site.phoneHref}>Call {site.phone} <span>↗</span></a><a className="button quiet" href={site.whatsappHref}>WhatsApp us</a></div>}
      </div>
    </section>
    {image && <TrustBar />}
  </>;
}

export function TrustBar() {
  const items: [string, string][] = [['Open', '24 hours, every day'], ['Fleet', '20+ vehicles'], ['Based in', 'Banbury'], ['Licensed', 'Cherwell District Council']];
  return <div className="trust-bar">{items.map(([k, v], i) => <div className="reveal" style={stagger(i)} key={k}><small>{k}</small><strong>{v}</strong></div>)}</div>;
}

export function Section({ eyebrow, title, accent, children, tone = 'paper' }: { eyebrow?: string; title?: string; accent?: string; children: React.ReactNode; tone?: 'paper' | 'cream' | 'ink' }) {
  return <section className={`sec sec-${tone}`}>
    <div className="sec-inner">
      {(eyebrow || title) && <div className="sec-head reveal">{eyebrow && <p className={tone === 'ink' ? 'eyebrow' : 'eyebrow dark'}><span />{eyebrow}</p>}{title && <h2>{title}{accent && <> <em>{accent}</em></>}</h2>}</div>}
      {children}
    </div>
  </section>;
}

export function Features({ items }: { items: [string, string][] }) {
  return <div className="features">{items.map(([t, d], i) => <article className="reveal" style={stagger(i)} key={t}><span className="num">{String(i + 1).padStart(2, '0')}</span><h3>{t}</h3><p>{d}</p></article>)}</div>;
}

export function Steps({ items }: { items: [string, string][] }) {
  return <ol className="steps">{items.map(([t, d], i) => <li className="reveal" style={stagger(i)} key={t}><span className="num">{i + 1}</span><h3>{t}</h3><p>{d}</p></li>)}</ol>;
}

export function Split({ image, alt, children, flip }: { image: string; alt: string; children: React.ReactNode; flip?: boolean }) {
  return <div className={flip ? 'split flip' : 'split'}><div className="split-text reveal">{children}</div><img className="reveal" style={stagger(1)} src={image} alt={alt} loading="lazy" /></div>;
}

export function Prose({ children }: { children: React.ReactNode }) {
  return <section className="sec sec-paper"><div className="sec-inner prose reveal">{children}</div></section>;
}

export function FaqList({ items }: { items: Faq[] }) {
  return <Section tone="cream" eyebrow="Good to know" title="Questions" accent="we get asked">
    <div className="faq">{items.map((f, i) => <details className="reveal" style={stagger(i)} key={f.q}><summary>{f.q}<b aria-hidden="true">+</b></summary><p>{f.a}</p></details>)}</div>
  </Section>;
}

export function RelatedLinks({ current }: { current: string }) {
  return <Section eyebrow="More from A1" title="Other ways we can" accent="help">
    <div className="related">{services.filter((s) => s.href !== current).map((s, i) => <a className="reveal" href={s.href} key={s.href} style={{ ...stagger(i), backgroundImage: `linear-gradient(0deg, rgba(12,29,26,.88) 8%, rgba(12,29,26,.1) 65%), url('${s.image}')` }}><strong>{s.label}</strong><small>{s.blurb}</small><b aria-hidden="true">↗</b></a>)}</div>
  </Section>;
}

export function ContactStrip() {
  return <section className="info-cta">
    <div className="reveal">
      <p className="eyebrow dark"><span />Ready when you are</p>
      <h2>Where are you <em>heading?</em></h2>
      <div className="hero-actions cta-actions"><a className="button dark" href={site.phoneHref}>Call {site.phone} <span>↗</span></a><a className="button ghost" href={site.whatsappHref}>WhatsApp</a><a className="button ghost" href={`mailto:${site.email}`}>Email</a></div>
      <p className="cta-note">Open 24/7 · {site.area}</p>
    </div>
  </section>;
}
