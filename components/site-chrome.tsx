'use client';

import { useState } from 'react';
import { ArrowUpRight, Phone } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { site } from '@/lib/site';

const services: [string, string][] = [
  ['Local private hire', '/local-taxi'],
  ['Airport transfers', '/airport-transfers'],
  ['Executive cars', '/executive-travel'],
  ['Group & minibus travel', '/group-minibus'],
];

const whatsappIcon = <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path fill="currentColor" d="M16 3a13 13 0 0 0-11 19.9L3.4 28.6l5.9-1.5A13 13 0 1 0 16 3Zm0 23.7a10.7 10.7 0 0 1-5.4-1.5l-.4-.2-3.5.9.9-3.4-.2-.4A10.7 10.7 0 1 1 16 26.7Zm5.9-8c-.3-.2-1.7-.8-2-1s-.5-.2-.7.2-.8 1-.9 1.2-.3.3-.6.1a8.7 8.7 0 0 1-2.5-1.6 9.4 9.4 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.4-.5c.1-.1.2-.3.3-.5s0-.4 0-.5l-.9-2.1c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.4 1 2.8 1.2 3 .1.3.2.4a12.2 12.2 0 0 0 4.7 4.1c.7.3 1.2.5 1.7.7.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.3s.2-1.2.1-1.3-.2-.2-.5-.4Z" /></svg>;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <>
    <header className="site-header">
      <a className="brand" href="/" aria-label="A1 Cars Banbury home"><img className="brand-logo" src="/a1-logo-full.png" alt="A1 Cars Banbury" /></a>
      <button className="menu-button" type="button" aria-controls="site-nav" aria-expanded={open} onClick={() => setOpen(!open)}><span className="sr-only">Open navigation</span><i /><i /></button>
      <nav className={open ? 'site-nav open' : 'site-nav'} id="site-nav" aria-label="Main navigation">
        <Collapsible className="services-menu"><CollapsibleTrigger className="services-trigger">Services <span>+</span></CollapsibleTrigger><CollapsibleContent className="services-submenu">{services.map(([label, href]) => <a href={href} key={href} onClick={close}>{label}</a>)}</CollapsibleContent></Collapsible>
        <a href="/fleet" onClick={close}>Vehicles</a><Collapsible className="services-menu"><CollapsibleTrigger className="services-trigger">Destinations <span>+</span></CollapsibleTrigger><CollapsibleContent className="services-submenu"><a href="/silverstone-transfers" onClick={close}>Silverstone & F1</a><a href="/cotswolds-trips" onClick={close}>Cotswolds trips</a></CollapsibleContent></Collapsible><a href="/about" onClick={close}>About</a><a href="/contact" onClick={close}>Contact</a>
        <div className="mobile-menu-contact"><a href={site.phoneHref}>{site.phone}</a><a href={`mailto:${site.email}`}>{site.email}</a></div>
      </nav>
      <div className="header-contact"><span className="header-availability">Private hire · Open 24/7</span><a href={site.phoneHref}>Call <strong>{site.phone}</strong></a></div>
    </header>
    <div className="quick-contact"><a href={site.phoneHref}>Call <strong>{site.phone}</strong></a><a href={site.whatsappHref}>WhatsApp</a></div>
  </>;
}

// The sticky call + WhatsApp controls, shown on every page. Mobile: bottom bar. Desktop: floating pill.
export function StickyActions({ onBook }: { onBook?: () => void }) {
  return <>
    <a className="floating-whatsapp" href={site.whatsappHref} aria-label="Message A1 Cars on WhatsApp">{whatsappIcon}</a>
    <div className="mobile-actions">
      <a href={site.phoneHref}><Phone aria-hidden="true" strokeWidth={1.8} /><span><small>Call A1 Cars</small><strong>{site.phone}</strong></span></a>
      {onBook
        ? <button type="button" onClick={onBook}><span>Book now</span><ArrowUpRight aria-hidden="true" strokeWidth={1.8} /></button>
        : <a className="mobile-book" href="/fleet"><span>Book now</span><ArrowUpRight aria-hidden="true" strokeWidth={1.8} /></a>}
    </div>
    <div className="desk-sticky">
      <a className="desk-call" href={site.phoneHref}><Phone aria-hidden="true" strokeWidth={1.8} /><span><small>Call 24/7</small><strong>{site.phone}</strong></span></a>
      <a className="desk-wa" href={site.whatsappHref} aria-label="Message A1 Cars on WhatsApp">{whatsappIcon}</a>
      {onBook && <button className="desk-book" type="button" onClick={onBook}>Book now <ArrowUpRight aria-hidden="true" /></button>}
    </div>
  </>;
}

export function SiteFooter({ stickyActions }: { stickyActions?: React.ReactNode }) {
  return <>
    <footer>
      <a className="brand" href="/" aria-label="A1 Cars Banbury home"><img className="brand-logo" src="/a1-logo-sticker.png" alt="A1 Cars Banbury" /></a>
      <p>Local private hire · Airport transfers · Executive travel · Group transport<br />{site.area} · Open 24/7 · <a href={site.phoneHref}>{site.phone}</a><br /><a href="/silverstone-transfers">Silverstone & F1</a> · <a href="/cotswolds-trips">Cotswolds trips</a></p>
      <p>© 2026 {site.legalName} · Company no. {site.companyNumber}<br /><a href="/privacy">Privacy</a> · <a href="/terms">Terms</a> · <a href="/about">About</a> · <a href="/contact">Contact</a> · <a href="#cookies" data-cookie-settings>Cookie settings</a></p>
    </footer>
    {stickyActions ?? <StickyActions />}
  </>;
}
