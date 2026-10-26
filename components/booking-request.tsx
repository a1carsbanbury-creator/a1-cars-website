'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowRight, Check, Mail, MessageCircle, X } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { Drawer, DrawerContent, DrawerDescription, DrawerTitle } from '@/components/ui/drawer';
import { useIsMobile } from '@/hooks/use-mobile';
import { prepareBookingSummary } from '@/lib/booking-summary';
import { site } from '@/lib/site';
export type JourneyType = 'Airport' | 'Local' | 'Executive' | 'Group & minibus';
type FormProps = { initialJourneyType?: JourneyType; vehicle?: string; purpose?: string; initiallyAccessible?: boolean; airport?: string; source?: string; formVariant?: 'inline' | 'dialog' };
type BookingRequestProps = FormProps & { open: boolean; onOpenChange: (open: boolean) => void; quick?: boolean };
const airportNames = ['Heathrow (LHR)', 'Birmingham (BHX)', 'Gatwick (LGW)', 'Luton (LTN)', 'Stansted (STN)'];
const pageServices: Record<string, string> = { '/local-taxi': 'Local taxi', '/airport-transfers': 'Airport transfer', '/executive-travel': 'Executive travel', '/group-minibus': 'Group & minibus', '/port-transfers': 'Port & cruise transfer', '/silverstone-transfers': 'Silverstone & F1 transfer', '/celebrations': 'Celebration', '/cotswolds-trips': 'Cotswolds trip', '/long-distance-travel': 'Long-distance travel', '/christmas': 'Christmas travel' };
const journeyLabels: Record<JourneyType, string> = { Airport: 'Airport transfer', Local: 'Local taxi', Executive: 'Executive travel', 'Group & minibus': 'Group & minibus' };
export function EnquiryForm({ initialJourneyType = 'Local', vehicle, purpose, initiallyAccessible = false, airport, source, formVariant = 'inline' }: FormProps) {
  const path = usePathname() ?? '/';
  const formRef = useRef<HTMLFormElement>(null);
  const started = useRef(false);
  const eventContext = { form_variant: formVariant, journey_type: airport ? 'Airport' : initialJourneyType, vehicle_selected: Boolean(vehicle), page_path: path };
  function track(eventName: string, details: Record<string, string> = {}) {
    if (process.env.NEXT_PUBLIC_LOCAL_PREVIEW === '1' || window.location.hostname.endsWith('.vercel.app')) return;
    window.gtag?.('event', eventName, { ...eventContext, ...details });
  }
  useEffect(() => {
    let visible = false;
    let sent = false;
    const recordOpen = () => {
      if (!visible || sent || process.env.NEXT_PUBLIC_LOCAL_PREVIEW === '1' || window.location.hostname.endsWith('.vercel.app') || !window.gtag) return;
      sent = true;
      window.gtag('event', 'booking_form_open', { form_variant: formVariant, journey_type: airport ? 'Airport' : initialJourneyType, vehicle_selected: Boolean(vehicle), page_path: path });
      observer.disconnect();
    };
    const observer = new IntersectionObserver(entries => {
      visible = entries.some(entry => entry.isIntersecting);
      recordOpen();
    }, { threshold: 0.1 });
    if (formRef.current) observer.observe(formRef.current);
    window.addEventListener('a1-analytics-ready', recordOpen);
    return () => { observer.disconnect(); window.removeEventListener('a1-analytics-ready', recordOpen); };
  }, [formVariant, initialJourneyType, vehicle, airport, path]);
  const [journey, setJourney] = useState(pageServices[path] ?? (airport ? 'Airport transfer' : journeyLabels[initialJourneyType]));
  const [selectedAirport, setAirport] = useState(airport ?? '');
  const [direction, setDirection] = useState('to');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [passengers, setPassengers] = useState('');
  const [bags, setBags] = useState('');
  const [email, setEmail] = useState('');
  const [emailOffers, setEmailOffers] = useState(false);
  const [consentRecordedAt, setConsentRecordedAt] = useState<string>();
  const [flight, setFlight] = useState('');
  const [extra, setExtra] = useState('');
  const [returnTrip, setReturnTrip] = useState(false);
  const [returnDate, setReturnDate] = useState('');
  const [returnTime, setReturnTime] = useState('');
  const [accessible, setAccessible] = useState(initiallyAccessible);
  const [needs, setNeeds] = useState('');
  const [prepared, setPrepared] = useState(false);
  const service = journey.trim();
  const isAirport = /^airport(?: transfer)?$/i.test(service);
  const station = purpose === 'Station pickup' && /^local(?: taxi)?$/i.test(service);
  const pickup = isAirport && direction === 'from' ? selectedAirport : station && direction === 'from' ? 'Banbury station' : from;
  const destination = isAirport && direction === 'to' ? selectedAirport : station && direction === 'to' ? 'Banbury station' : to;
  const [minDate, setMinDate] = useState('');
  useEffect(() => {
    const today = new Date();
    setMinDate(`${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`);
  }, []);
  function changeDirection(value: string) {
    if (value === direction) return;
    const address = direction === 'to' ? from : to;
    setFrom(value === 'to' ? address : '');
    setTo(value === 'from' ? address : '');
    setDirection(value); setPrepared(false);
  }
  const summary = prepareBookingSummary({ journeyType: service, vehicle, purpose, from: pickup, to: destination, date, time, passengers, bags, email, emailOffers, consentRecordedAt, accessible, needs, page: path, source: source ?? purpose ?? (vehicle ? 'Vehicle choice' : airport ? `${airport} enquiry` : 'Book a journey'), flight: isAirport ? flight : undefined, extra, returnDate: returnTrip ? returnDate : undefined, returnTime: returnTrip ? returnTime : undefined });
  function prepare(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const selectedDate = (form.elements.namedItem('pickupDate') as HTMLInputElement).value;
    const selectedTime = (form.elements.namedItem('pickupTime') as HTMLInputElement).value;
    const selectedReturnDate = (form.elements.namedItem('returnDate') as HTMLInputElement | null)?.value ?? '';
    const selectedReturnTime = (form.elements.namedItem('returnTime') as HTMLInputElement | null)?.value ?? '';
    const pickupDate = new Date(`${selectedDate}T${selectedTime}`);
    if (!Number.isFinite(pickupDate.getTime()) || pickupDate.getTime() <= Date.now()) {
      const input = event.currentTarget.querySelector<HTMLInputElement>('input[type="time"]');
      input?.setCustomValidity('Choose a future pickup date and time.'); input?.reportValidity(); return;
    }
    const returnPickupDate = new Date(`${selectedReturnDate}T${selectedReturnTime}`);
    if (returnTrip && (!Number.isFinite(returnPickupDate.getTime()) || returnPickupDate.getTime() <= pickupDate.getTime())) {
      const input = event.currentTarget.querySelectorAll<HTMLInputElement>('input[type="time"]')[1];
      input?.setCustomValidity('Choose a return after the outbound pickup.'); input?.reportValidity(); return;
    }
    setDate(selectedDate); setTime(selectedTime);
    setReturnDate(selectedReturnDate); setReturnTime(selectedReturnTime);
    setConsentRecordedAt(emailOffers && email.trim() ? new Date().toISOString() : undefined);
    setPrepared(true);
  }
  return <form ref={formRef} className="enquiry-form" onSubmit={prepare} onChange={event => { if (!started.current) { started.current = true; track('booking_form_start'); } setPrepared(false); const target = event.target; if (target instanceof HTMLInputElement) { target.setCustomValidity(''); event.currentTarget.querySelectorAll('input[type="time"]').forEach(input => (input as HTMLInputElement).setCustomValidity('')); } }}>
    <div className="enquiry-heading"><h2>{airport ? 'Your airport journey' : 'Arrange your journey'}</h2><p>Send the details. We’ll confirm availability and price.</p></div>
    <div className="enquiry-inputs" hidden={prepared}>
    {vehicle && <p className="enquiry-selection">Vehicle preference: <strong>{vehicle}</strong><small>Model preference only. We confirm a suitable vehicle and capacity.</small></p>}
    {purpose && <p className="enquiry-selection">Occasion or booking choice: <strong>{purpose}</strong></p>}
    <label>Journey type<input required pattern={'.*\\S.*'} maxLength={100} value={journey} placeholder="Choose or describe your journey" onChange={event => setJourney(event.target.value)} /></label>
    {isAirport && <><label>Airport<select required value={selectedAirport} onChange={event => setAirport(event.target.value)}><option value="">Choose an airport</option>{airportNames.map(name => <option key={name}>{name}</option>)}</select></label><fieldset className="enquiry-direction"><legend>Which way?</legend><button type="button" aria-pressed={direction === 'to'} onClick={() => { changeDirection('to'); }}>To the airport</button><button type="button" aria-pressed={direction === 'from'} onClick={() => { changeDirection('from'); }}>From the airport</button></fieldset></>}
    {station && <fieldset className="enquiry-direction"><legend>Station journey</legend>{['to','from'].map(value => <button key={value} type="button" aria-pressed={direction === value} onClick={() => { changeDirection(value); }}>{value === 'to' ? 'To' : 'From'} Banbury station</button>)}</fieldset>}
    {(!isAirport && !station || direction === 'to') && <label>Pickup address or postcode<input required maxLength={180} pattern={'.*\\S.*'} autoComplete="street-address" value={from} placeholder="Enter your pickup postcode or address" onChange={event => setFrom(event.target.value)} /></label>}
    {(!isAirport && !station || direction === 'from') && <label>Destination address or postcode<input required maxLength={180} pattern={'.*\\S.*'} value={to} placeholder="Enter your destination postcode or address" onChange={event => setTo(event.target.value)} /></label>}
    <div className="enquiry-pair"><label>Pickup date<input name="pickupDate" required type="date" min={minDate} value={date} onInput={event => setDate(event.currentTarget.value)} onChange={event => setDate(event.target.value)} /></label><label>Pickup time<input name="pickupTime" required type="time" value={time} onInput={event => setTime(event.currentTarget.value)} onChange={event => setTime(event.target.value)} /></label></div>
    <div className="enquiry-access"><label className="enquiry-check"><input type="checkbox" checked={accessible} onChange={event => setAccessible(event.target.checked)} /><span>I need a wheelchair-accessible vehicle</span></label><small>We’ll confirm a suitable vehicle and the arrangements.</small>{accessible && <label>Practical access needs (optional)<textarea maxLength={400} value={needs} placeholder="Practical pickup or vehicle arrangements" onChange={event => setNeeds(event.target.value)} /><small>No medical details needed.</small></label>}</div>
    <fieldset className="enquiry-optional"><legend>Optional details</legend><p>You can leave these blank and prepare your enquiry.</p>
    <div className="enquiry-pair"><label>Passengers (optional)<input type="number" inputMode="numeric" min="1" max="100" step="1" value={passengers} placeholder="Number of passengers" onChange={event => setPassengers(event.target.value)} /></label><label>Luggage (optional)<input maxLength={150} value={bags} placeholder="e.g. 2 large cases" onChange={event => setBags(event.target.value)} /></label></div>
    <div className="enquiry-email"><label>Email address (optional)<input type="email" inputMode="email" autoComplete="email" maxLength={254} required={emailOffers} value={email} placeholder="Your email address (optional)" onChange={event => setEmail(event.target.value)} /></label><label className="enquiry-check"><input type="checkbox" checked={emailOffers} onChange={event => setEmailOffers(event.target.checked)} /><span>Email me A1 Cars Banbury offers and discounts.</span></label><small>Optional. You can opt out anytime. <a href="/privacy#email-offers">Privacy</a></small></div>
    {isAirport && <label>Flight / terminal (optional)<input maxLength={150} value={flight} placeholder="Flight number, terminal, arrival / departure time" onChange={event => setFlight(event.target.value)} /></label>}
    <details className="enquiry-options"><summary>Return journey or extra stops</summary><label className="enquiry-check"><input type="checkbox" checked={returnTrip} onChange={event => setReturnTrip(event.target.checked)} />Include a return journey</label>{returnTrip && <><p className="enquiry-hint">Return from {destination || 'your destination'} to {pickup || 'your pickup address'}.</p><div className="enquiry-pair"><label>Return date<input name="returnDate" required type="date" min={date || minDate} value={returnDate} onChange={event => setReturnDate(event.target.value)} /></label><label>Return pickup time<input name="returnTime" required type="time" value={returnTime} onChange={event => setReturnTime(event.target.value)} /></label></div></>}<label>Extra stops / journey notes (optional)<textarea maxLength={600} value={extra} placeholder="Additional pickup addresses, stops or timing details" onChange={event => setExtra(event.target.value)} /></label></details>
    </fieldset>
    </div>
    {!prepared ? <button className="enquiry-primary" type="submit">Prepare enquiry <ArrowRight size={18} /></button> : <div className="enquiry-ready" role="status"><h3><Check size={20} /> Your enquiry is ready</h3><pre>{summary}</pre><a className="enquiry-primary" href={`https://wa.me/447823642516?text=${encodeURIComponent(summary)}`} target="_blank" rel="noopener noreferrer" onClick={() => track('booking_request_handoff', { contact_method: 'whatsapp', contact_context: 'booking_form' })}><MessageCircle size={19} /> Open WhatsApp</a><a className="enquiry-secondary" href={`mailto:${site.email}?subject=${encodeURIComponent('Journey enquiry: ' + (purpose ?? airport ?? service))}&body=${encodeURIComponent(summary)}`} onClick={() => track('booking_request_handoff', { contact_method: 'email', contact_context: 'booking_form' })}><Mail size={18} /> Open email draft</a><button type="button" className="enquiry-edit" onClick={() => setPrepared(false)}>Edit details</button><p>Nothing has been sent yet. WhatsApp opens a message to A1 Cars; email opens your email app addressed to {site.email}. Press Send there. If no email app opens, use WhatsApp or call us.</p></div>}
    <p className="enquiry-note">This is an enquiry. Your booking is confirmed only when our team agrees availability, price and arrangements.</p>
    <a className="enquiry-phone" href={site.phoneHref}>Prefer to call? {site.phone}</a>
  </form>;
}
export function BookingRequest({ open, onOpenChange, quick: _quick, ...props }: BookingRequestProps) {
  const mobile = useIsMobile();
  const fields = <EnquiryForm key={`${open}-${props.vehicle}-${props.purpose}-${props.airport}`} {...props} formVariant="dialog" />;
  if (mobile) return <Drawer open={open} onOpenChange={onOpenChange}><DrawerContent className="booking-drawer enquiry-drawer"><DrawerTitle className="sr-only">Journey enquiry</DrawerTitle><DrawerDescription className="sr-only">Prepare a journey enquiry for WhatsApp or email.</DrawerDescription><button className="enquiry-close" type="button" aria-label="Close enquiry" onClick={() => onOpenChange(false)}><X size={20} /></button>{fields}</DrawerContent></Drawer>;
  return <Dialog open={open} onOpenChange={onOpenChange}><DialogContent className="booking-dialog enquiry-dialog" showCloseButton><DialogTitle className="sr-only">Journey enquiry</DialogTitle><DialogDescription className="sr-only">Prepare a journey enquiry for WhatsApp or email.</DialogDescription>{fields}</DialogContent></Dialog>;
}
