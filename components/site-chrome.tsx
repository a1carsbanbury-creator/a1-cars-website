'use client';

import { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { site } from '@/lib/site';

const services: [string, string][] = [
  ['Local taxi', '/local-taxi'],
  ['Airport transfers', '/airport-transfers'],
  ['Executive cars', '/executive-travel'],
  ['Group & minibus travel', '/group-minibus'],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <>
    <header className="site-header">
      <a className="brand" href="/" aria-label="A1 Cars Banbury home"><img className="brand-logo" src="/a1-logo-header.png" alt="A1 Cars Banbury" /></a>
      <button className="menu-button" type="button" aria-controls="site-nav" aria-expanded={open} onClick={() => setOpen(!open)}><span className="sr-only">Open navigation</span><i /><i /></button>
      <nav className={open ? 'site-nav open' : 'site-nav'} id="site-nav" aria-label="Main navigation">
        <Collapsible className="services-menu"><CollapsibleTrigger className="services-trigger">Services <span>+</span></CollapsibleTrigger><CollapsibleContent className="services-submenu">{services.map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}</CollapsibleContent></Collapsible>
        <a href="/fleet" onClick={() => setOpen(false)}>Vehicles</a><a href="/about" onClick={() => setOpen(false)}>About</a><a href="/contact" onClick={() => setOpen(false)}>Contact</a>
        <div className="mobile-menu-contact"><a href={site.phoneHref}>{site.phone}</a><a href={`mailto:${site.email}`}>{site.email}</a><a href={site.mapHref} target="_blank" rel="noreferrer">{site.address}</a></div>
      </nav>
      <div className="header-contact"><a href={`mailto:${site.email}`}>{site.email}</a><a href={site.phoneHref}>Call <strong>{site.phone}</strong></a></div>
    </header>
    <div className="quick-contact"><a href={site.phoneHref}>Call <strong>{site.phone}</strong></a><a href={site.whatsappHref}>WhatsApp</a></div>
  </>;
}

export function SiteFooter() {
  return <footer>
    <a className="brand" href="/" aria-label="A1 Cars Banbury home"><img className="brand-logo" src="/a1-logo-header.png" alt="A1 Cars Banbury" /></a>
    <p>Local taxis · Airport transfers · Executive travel · Group transport<br />{site.address} · Open 24/7 · <a href={site.phoneHref}>{site.phone}</a></p>
    <p>© 2026 {site.legalName} · Company no. {site.companyNumber}<br /><a href="/privacy">Privacy</a> · <a href="/terms">Terms</a> · <a href="/about">About</a> · <a href="/contact">Contact</a></p>
  </footer>;
}
