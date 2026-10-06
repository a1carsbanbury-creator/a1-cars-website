'use client';

import { useState } from 'react';
import { PhotoSlider } from '@/components/photo-slider';
import { ArrowUpRight, BriefcaseBusiness, BusFront, CarFront, Plane } from 'lucide-react';
import { BookingRequest, type JourneyType } from '@/components/booking-request';
import { FleetCards } from '@/components/fleet-cards';
import { fleetCategories } from '@/lib/fleet';
import { SiteHeader, StickyActions } from '@/components/site-chrome';
import { site } from '@/lib/site';

const { phone, phoneHref, email, whatsappHref, area } = site;

const services: {
  title: string;
  description: string;
  href: string;
  Icon: typeof CarFront;
}[] = [
  { title: 'Local private hire', description: 'Banbury and the surrounding villages', href: '/local-taxi', Icon: CarFront },
  { title: 'Airport transfers', description: 'Travel planned around your flight', href: '/airport-transfers', Icon: Plane },
  { title: 'Executive cars', description: 'Professional journeys, simply arranged', href: '/executive-travel', Icon: BriefcaseBusiness },
  { title: 'Group & minibus', description: 'Planned transport for travelling together', href: '/group-minibus', Icon: BusFront },
];

const airports = [['Heathrow', 'LHR'], ['Gatwick', 'LGW'], ['Luton', 'LTN'], ['Stansted', 'STN'], ['Birmingham', 'BHX']];

export function HomeClient() {
  const [booking, setBooking] = useState<{ journeyType: JourneyType; vehicle?: string } | null>(null);

  return <main>
    <SiteHeader />

    <section className="hero" id="top" aria-labelledby="hero-title"><PhotoSlider className="hero-image" images={['/revision-home-pickup.webp', '/executive-people-carrier.webp', '/revision-accessible-arrival.webp', '/revision-fleet-lineup.webp']} label="A1 Cars journeys" /><div className="hero-content"><p className="eyebrow"><span />Banbury & surrounding villages · 24/7</p><h1 id="hero-title">Your journey.<br /><em>Handled well.</em></h1><p className="hero-copy">Private hire for Banbury and the surrounding villages. From your doorstep to the station, the airport or a day out, we’ll help you get there.</p><p className="hero-area-note">Every journey starts or ends within 15 miles of Banbury.</p><div className="hero-actions"><button className="button primary" type="button" onClick={() => setBooking({ journeyType: 'Airport' })}>Book a journey <span>↗</span></button><a className="button quiet" href={phoneHref}>Call A1 Cars</a></div></div><a className="hero-phone" href={phoneHref}><span>Book by phone</span><strong>{phone}</strong></a></section>

    <section className="services reveal" id="services" aria-label="Our services">{services.map(({ title, description, href, Icon }) => <a href={href} key={title}><span className="service-icon"><Icon aria-hidden="true" strokeWidth={1.65} /></span><span><strong>{title}</strong><small>{description}</small></span><b><ArrowUpRight aria-hidden="true" strokeWidth={1.7} /></b></a>)}</section>

    <section className="vehicles reveal" id="vehicles" aria-labelledby="vehicles-title"><div className="section-heading"><p className="eyebrow dark"><span />Travel your way</p><h2 id="vehicles-title">Choose your<br /><em>vehicle.</em></h2><p>Private hire, executive cars and minibuses. Choose a vehicle and send a quick booking request.</p></div><div className="home-catalogue">{fleetCategories.map(category => <section className="home-catalogue-category" key={category.id} aria-labelledby={`home-${category.id}`}><div className="home-catalogue-heading"><h3 id={`home-${category.id}`}>{category.title}</h3><a href={`/fleet#${category.id}`}>Explore category ↗</a></div><FleetCards vehicles={category.vehicles} journeyType={category.journeyType} carousel /></section>)}</div></section>

    <section className="intro reveal" id="why-us"><p className="eyebrow dark"><span />A Banbury local</p><div className="intro-grid"><h2>Less waiting.<br />More <em>getting on.</em></h2><div><p>Tell us where you need to be and when. We’ll help arrange the right journey, with clear, human service from the first call.</p><a className="underlined-link" href={phoneHref}>Speak to our team <span>↗</span></a></div></div></section>

    <section className="airports reveal" id="airports" aria-label="Airport transfers"><div className="airport-copy"><p className="eyebrow"><span />Airport transfers</p><h2>From your door<br />to departures.</h2><p>Airport transfers from Banbury and the surrounding villages within 15 miles, with return pickups bringing you home. Share your flight, date, passengers and bags.</p><button className="text-button" type="button" onClick={() => setBooking({ journeyType: 'Airport' })}>Arrange an airport journey <span>↗</span></button></div><div className="airport-list">{airports.map(([name, code]) => <div key={code}><span>{name}</span><small>{code}</small></div>)}</div></section>

    <section className="contact reveal" id="contact"><p className="eyebrow dark"><span />Ready when you are</p><h2>Where are you<br /><em>heading?</em></h2><div className="contact-actions"><a className="call-card" href={phoneHref}><small>Call A1 Cars Banbury</small><strong>{phone}</strong><b>↗</b></a><div className="contact-links"><a className="whatsapp-link" href={whatsappHref}><span>Message us on WhatsApp</span><b>↗</b></a><a className="email-link" href={`mailto:${email}`}>{email} <b>↗</b></a></div></div><div className="location-card"><small>Based in Banbury</small><strong>{area}</strong></div></section>

    <section className="home-destinations reveal"><p className="eyebrow dark"><span />Days worth travelling for</p><h2>Make a day <em>of it.</em></h2><div className="destination-links"><a href="/silverstone-transfers"><small>Race days & events</small><strong>Silverstone & F1</strong><span>Plan the journey ↗</span></a><a href="/cotswolds-trips"><small>Villages & days out</small><strong>The Cotswolds</strong><span>Travel together ↗</span></a></div></section>
    <footer><a className="brand" href="/" aria-label="A1 Cars Banbury home"><img className="brand-logo" src="/a1-logo-sticker.png" alt="A1 Cars Banbury" /></a><p>Local private hire · Airport transfers · Executive travel · Group transport</p><p>© 2026 {site.legalName} · Company no. {site.companyNumber}<br /><a href="/privacy">Privacy</a> · <a href="/terms">Terms</a> · <a href="/about">About</a> · <a href="/contact">Contact</a> · <a href="#cookies" data-cookie-settings>Cookie settings</a></p></footer>
    <StickyActions onBook={() => setBooking({ journeyType: 'Airport' })} />
    <BookingRequest open={booking !== null} onOpenChange={(open) => !open && setBooking(null)} initialJourneyType={booking?.journeyType} vehicle={booking?.vehicle} />
  </main>;
}
