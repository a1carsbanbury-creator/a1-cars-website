'use client';

import { useState } from 'react';
import { ArrowUpRight, BriefcaseBusiness, BusFront, CarFront, Phone, Plane } from 'lucide-react';
import { BookingRequest, type JourneyType } from '@/components/booking-request';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { site } from '@/lib/site';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const { phone, phoneHref, email, whatsappHref, address, mapHref } = site;

const services: {
  title: string;
  description: string;
  href: string;
  Icon: typeof CarFront;
}[] = [
  { title: 'Local taxi', description: 'Everyday journeys around Banbury', href: '/local-taxi', Icon: CarFront },
  { title: 'Airport transfers', description: 'Travel planned around your flight', href: '/airport-transfers', Icon: Plane },
  { title: 'Executive cars', description: 'Professional journeys, simply arranged', href: '/executive-travel', Icon: BriefcaseBusiness },
  { title: 'Group & minibus', description: 'Planned transport for travelling together', href: '/group-minibus', Icon: BusFront },
];

const serviceMenu = [
  ['Local taxi', '/local-taxi'], ['Airport transfers', '/airport-transfers'], ['Executive cars', '/executive-travel'], ['Group & minibus travel', '/group-minibus'],
];

const vehicles: [string, string, string, string, JourneyType, string][] = [
  ['local', 'Local taxi', 'Estate taxi', 'fleet-estate-taxi.webp', 'Local', 'Black estate taxi in side profile on a white background'],
  ['executive', 'Executive cars', 'E-Class executive car', 'fleet-executive-saloon.webp', 'Executive', 'Black executive saloon in side profile on a white background'],
  ['minibus', 'Group & minibus', 'Ford Transit', 'fleet-ford-transit.webp', 'Group & minibus', 'Black Ford Transit passenger van in side profile on a white background'],
];

const airports = [['Heathrow', 'LHR'], ['Gatwick', 'LGW'], ['Luton', 'LTN'], ['Stansted', 'STN'], ['Birmingham', 'BHX']];

export function HomeClient() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [booking, setBooking] = useState<{ journeyType: JourneyType; vehicle?: string } | null>(null);
  const closeMenu = () => setMenuOpen(false);

  return <main>
    <header className="site-header">
      <a className="brand" href="/" aria-label="A1 Cars Banbury home"><img className="brand-logo" src="/a1-logo-header.png" alt="A1 Cars Banbury" /></a>
      <button className="menu-button" type="button" aria-controls="site-nav" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span className="sr-only">Open navigation</span><i /><i /></button>
      <nav className={menuOpen ? 'site-nav open' : 'site-nav'} id="site-nav" aria-label="Main navigation"><Collapsible className="services-menu"><CollapsibleTrigger className="services-trigger">Services <span>+</span></CollapsibleTrigger><CollapsibleContent className="services-submenu">{serviceMenu.map(([label, href]) => <a href={href} key={label} onClick={closeMenu}>{label}</a>)}</CollapsibleContent></Collapsible><a href="/fleet" onClick={closeMenu}>Vehicles</a><a href="#why-us" onClick={closeMenu}>Why A1</a><a href="/about" onClick={closeMenu}>About</a><a href="/contact" onClick={closeMenu}>Contact</a><div className="mobile-menu-contact"><a href={phoneHref}>{phone}</a><a href={`mailto:${email}`}>{email}</a><a href={mapHref} target="_blank" rel="noreferrer">{address}</a></div></nav>
      <div className="header-contact"><a href={`mailto:${email}`}>{email}</a><a href={phoneHref}>Call <strong>{phone}</strong></a></div>
    </header>
    <div className="quick-contact"><a href={phoneHref}>Call <strong>{phone}</strong></a><a href={`mailto:${email}`}>{email}</a></div>

    <section className="hero" id="top" aria-labelledby="hero-title"><div className="hero-image" /><div className="hero-content"><p className="eyebrow"><span />Local travel, properly arranged</p><h1 id="hero-title">Your journey.<br /><em>Handled well.</em></h1><p className="hero-copy">Reliable travel from Banbury, whether you are heading across town, to the airport, or further afield.</p><div className="hero-actions"><button className="button primary" type="button" onClick={() => setBooking({ journeyType: 'Airport' })}>Book a journey <span>↗</span></button><a className="button quiet" href={phoneHref}>Call A1 Cars</a></div></div><a className="hero-phone" href={phoneHref}><span>Book by phone</span><strong>{phone}</strong></a></section>

    <section className="services" id="services" aria-label="Our services">{services.map(({ title, description, href, Icon }) => <a href={href} key={title}><span className="service-icon"><Icon aria-hidden="true" strokeWidth={1.65} /></span><span><strong>{title}</strong><small>{description}</small></span><b><ArrowUpRight aria-hidden="true" strokeWidth={1.7} /></b></a>)}</section>

    <section className="vehicles" id="vehicles" aria-labelledby="vehicles-title"><div className="section-heading"><p className="eyebrow dark"><span />Travel your way</p><h2 id="vehicles-title">Choose your<br /><em>journey.</em></h2><p>Swipe across the vehicle styles, select your preference, then send a prepared booking request to our team.</p></div><Carousel className="home-fleet-carousel" opts={{ align: 'start', loop: false }}><CarouselContent className="home-fleet-content">{vehicles.map(([slug, label, vehicle, image, journeyType, alt]) => <CarouselItem className="home-fleet-item" key={slug}><article className="vehicle-card"><img src={`/${image}`} alt={alt} /><div><p className="vehicle-label">{label}</p><h3>{vehicle}</h3><a href={`/fleet#${slug}`}>Explore options <span>↗</span></a><button type="button" className="vehicle-book" onClick={() => setBooking({ journeyType, vehicle })}>Book now</button></div></article></CarouselItem>)}</CarouselContent><CarouselPrevious className="home-fleet-previous" /><CarouselNext className="home-fleet-next" /></Carousel></section>

    <section className="intro" id="why-us"><p className="eyebrow dark"><span />A Banbury local</p><div className="intro-grid"><h2>Less waiting.<br />More <em>getting on.</em></h2><div><p>Tell us where you need to be and when. We’ll help arrange the right journey, with clear, human service from the first call.</p><a className="underlined-link" href={phoneHref}>Speak to our team <span>↗</span></a></div></div></section>

    <section className="airports" id="airports" aria-label="Airport transfers"><div className="airport-copy"><p className="eyebrow"><span />Airport transfers</p><h2>Start the trip<br />before the terminal.</h2><p>Share your flight, date and passenger details. We’ll arrange your airport journey from Banbury.</p><button className="text-button" type="button" onClick={() => setBooking({ journeyType: 'Airport' })}>Arrange an airport journey <span>↗</span></button></div><div className="airport-list">{airports.map(([name, code]) => <div key={code}><span>{name}</span><small>{code}</small></div>)}</div></section>

    <section className="contact" id="contact"><p className="eyebrow dark"><span />Ready when you are</p><h2>Where are you<br /><em>heading?</em></h2><div className="contact-actions"><a className="call-card" href={phoneHref}><small>Call A1 Cars Banbury</small><strong>{phone}</strong><b>↗</b></a><div className="contact-links"><a className="whatsapp-link" href={whatsappHref}><span>Message us on WhatsApp</span><b>↗</b></a><a className="email-link" href={`mailto:${email}`}>{email} <b>↗</b></a></div></div><a className="location-card" href={mapHref} target="_blank" rel="noreferrer"><small>Based in Banbury · Get directions</small><strong>{address}</strong></a></section>

    <footer><a className="brand" href="/" aria-label="A1 Cars Banbury home"><img className="brand-logo" src="/a1-logo-header.png" alt="A1 Cars Banbury" /></a><p>Local taxis · Airport transfers · Executive travel · Group transport</p><p>© 2026 {site.legalName} · Company no. {site.companyNumber}<br /><a href="/privacy">Privacy</a> · <a href="/terms">Terms</a> · <a href="/about">About</a> · <a href="/contact">Contact</a></p></footer>
    <a className="floating-whatsapp" href={whatsappHref} aria-label="Message A1 Cars on WhatsApp"><svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path fill="currentColor" d="M16 3a13 13 0 0 0-11 19.9L3.4 28.6l5.9-1.5A13 13 0 1 0 16 3Zm0 23.7a10.7 10.7 0 0 1-5.4-1.5l-.4-.2-3.5.9.9-3.4-.2-.4A10.7 10.7 0 1 1 16 26.7Zm5.9-8c-.3-.2-1.7-.8-2-1s-.5-.2-.7.2-.8 1-.9 1.2-.3.3-.6.1a8.7 8.7 0 0 1-2.5-1.6 9.4 9.4 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.4-.5c.1-.1.2-.3.3-.5s0-.4 0-.5l-.9-2.1c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.4 1 2.8 1.2 3 .1.3.2.4a12.2 12.2 0 0 0 4.7 4.1c.7.3 1.2.5 1.7.7.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.3s.2-1.2.1-1.3-.2-.2-.5-.4Z" /></svg></a><div className="mobile-actions"><a href={phoneHref}><Phone aria-hidden="true" strokeWidth={1.8} /><span><small>Call A1 Cars</small><strong>{phone}</strong></span></a><button type="button" onClick={() => setBooking({ journeyType: 'Airport' })}><span>Book now</span><ArrowUpRight aria-hidden="true" strokeWidth={1.8} /></button></div>
    <BookingRequest open={booking !== null} onOpenChange={(open) => !open && setBooking(null)} initialJourneyType={booking?.journeyType} vehicle={booking?.vehicle} />
  </main>;
}
