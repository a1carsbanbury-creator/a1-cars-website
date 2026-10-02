import { FleetBrowser } from '@/components/fleet-browser';

const phone = '01295 266 778';
const phoneHref = 'tel:+441295266778';
const email = 'business@a1carsbanbury.co.uk';
const whatsappHref = 'https://wa.me/447823642516?text=Hi%20A1%20Cars%2C%20I%27d%20like%20to%20book%20a%20journey%20from%20Banbury.';

export default function FleetPage() {
  return <main className="fleet-page">
    <header className="site-header fleet-header"><a className="brand" href="/" aria-label="A1 Cars Banbury home"><img className="brand-logo" src="/a1-logo-header.png" alt="A1 Cars Banbury" /></a><a className="back-link" href="/">← Back to home</a><div className="header-contact"><a href={`mailto:${email}`}>{email}</a><a href={phoneHref}>Call <strong>{phone}</strong></a></div></header>
    <section className="fleet-hero"><p className="eyebrow dark"><span />Travel your way</p><h1>Choose your<br /><em>journey.</em></h1><p>Browse the travel styles available to request, then send your booking details straight to A1 Cars on WhatsApp.</p></section>
    <section className="fleet-browser-section"><FleetBrowser /></section>
    <section className="fleet-contact-strip"><div><small>Prefer to talk it through?</small><strong>Call A1 Cars Banbury</strong></div><a href={phoneHref}>{phone} <span>↗</span></a></section>
    <footer><a className="brand" href="/" aria-label="A1 Cars Banbury home"><img className="brand-logo" src="/a1-logo-header.png" alt="A1 Cars Banbury" /></a><p>Local taxis · Airport transfers · Executive travel · Group transport</p><a className="footer-whatsapp" href={whatsappHref}>WhatsApp A1 Cars</a></footer>
  </main>;
}
