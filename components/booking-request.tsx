'use client';

import { useEffect, useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { Drawer, DrawerContent, DrawerDescription, DrawerTitle } from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';
import { useIsMobile } from '@/hooks/use-mobile';
import { prepareBookingSummary } from '@/lib/booking-summary';

type JourneyType = 'Airport' | 'Local' | 'Executive' | 'Group & minibus';

type BookingRequestProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialJourneyType?: JourneyType;
  vehicle?: string;
  quick?: boolean;
  purpose?: string;
  initiallyAccessible?: boolean;
};

const phoneHref = 'tel:+441295266778';
const email = 'business@a1carsbanbury.co.uk';
const airports = ['Heathrow (LHR)', 'Gatwick (LGW)', 'Luton (LTN)', 'Stansted (STN)', 'Birmingham (BHX)'];
const journeyTypes: JourneyType[] = ['Airport', 'Local', 'Executive', 'Group & minibus'];

function roundedTime() {
  const date = new Date();
  date.setHours(date.getHours() + 1, date.getMinutes() < 30 ? 30 : 60, 0, 0);
  return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
}

function AccessibilityFields({ accessible, setAccessible, needs, setNeeds }: { accessible: boolean; setAccessible: (value: boolean) => void; needs: string; setNeeds: (value: string) => void }) {
  return <div className="booking-accessibility"><label className="accessibility-check"><input type="checkbox" checked={accessible} onChange={event => setAccessible(event.target.checked)} /><span>Wheelchair-accessible vehicle needed</span></label>{accessible && <label className="accessibility-needs">Practical pickup or vehicle needs (optional)<textarea value={needs} maxLength={500} placeholder="e.g. step-free pickup or space for a mobility aid" onChange={event => setNeeds(event.target.value)} /><small>Share practical arrangements only. No medical details needed. Our team will confirm a suitable vehicle.</small></label>}</div>;
}

function BookingFields({ initialJourneyType = 'Airport', vehicle, close }: { initialJourneyType?: JourneyType; vehicle?: string; close: () => void }) {
  const [journeyType, setJourneyType] = useState<JourneyType>(initialJourneyType);
  const [from, setFrom] = useState('Banbury');
  const [to, setTo] = useState(initialJourneyType === 'Airport' ? airports[0] : 'To be confirmed');
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [time, setTime] = useState(roundedTime);
  const [passengers, setPassengers] = useState(1);
  const [bags, setBags] = useState('');
  const [accessible, setAccessible] = useState(false);
  const [needs, setNeeds] = useState('');

  useEffect(() => {
    setJourneyType(initialJourneyType);
    setTo(initialJourneyType === 'Airport' ? airports[0] : 'To be confirmed');
  }, [initialJourneyType, vehicle]);

  const summary = useMemo(() => prepareBookingSummary({ journeyType, vehicle, from: from || 'Banbury', to, date, time, passengers, bags, accessible, needs }), [journeyType, vehicle, from, to, date, time, passengers, bags, accessible, needs]);

  const whatsappHref = `https://wa.me/447823642516?text=${encodeURIComponent(summary)}`;
  const emailHref = `mailto:${email}?subject=${encodeURIComponent('Booking request')}&body=${encodeURIComponent(summary)}`;

  return <div className="booking-form">
    <div className="booking-heading"><p className="eyebrow dark"><span />Arrange a journey</p><h2>Book in a<br /><em>few taps.</em></h2><p>Choose what you need, then send the details directly to our team.</p></div>
    <div className="booking-fields">
      <fieldset><legend>Journey type</legend><div className="journey-chips">{journeyTypes.map((type) => <Button type="button" key={type} className={journeyType === type ? 'journey-chip active' : 'journey-chip'} onClick={() => { setJourneyType(type); if (type === 'Airport' && to === 'To be confirmed') setTo(airports[0]); }}>{type}</Button>)}</div></fieldset>
      {vehicle && <p className="vehicle-preference">Vehicle preference: <strong>{vehicle}</strong></p>}
      <label>From<Input value={from} onChange={(event) => setFrom(event.target.value)} /></label>
      <label>To<Input value={to} onChange={(event) => setTo(event.target.value)} /></label>
      {journeyType === 'Airport' && <div className="airport-chips" aria-label="Choose airport">{airports.map((airport) => <Button type="button" key={airport} className={to === airport ? 'airport-chip active' : 'airport-chip'} onClick={() => setTo(airport)}>{airport}</Button>)}</div>}
      <div className="booking-two-col"><label>Date<Input type="date" value={date} onChange={(event) => setDate(event.target.value)} /></label><label>Time<Input type="time" value={time} onChange={(event) => setTime(event.target.value)} /></label></div>
      <div className="passenger-row"><span>Passengers</span><div><Button type="button" className="stepper" aria-label="Reduce passengers" onClick={() => setPassengers((count) => Math.max(1, count - 1))}>−</Button><strong>{passengers}</strong><Button type="button" className="stepper" aria-label="Add passenger" onClick={() => setPassengers((count) => count + 1)}>+</Button></div></div>
      <label>Luggage / bags<Input value={bags} placeholder="e.g. 2 large cases and 2 cabin bags" onChange={event => setBags(event.target.value)} /></label>
      <AccessibilityFields accessible={accessible} setAccessible={setAccessible} needs={needs} setNeeds={setNeeds} />
    </div>
    <div className="booking-actions"><a className="booking-whatsapp" href={whatsappHref} onClick={close}>Send on WhatsApp <span>↗</span></a><a className="booking-call" href={phoneHref}>Call 01295 266 778</a><a className="booking-email" href={emailHref}>Email instead</a><p>All major payment cards accepted.</p></div>
  </div>;
}

function QuickBookingFields({ vehicle, journeyType, purpose, initiallyAccessible = false, close }: { vehicle?: string; journeyType: JourneyType; purpose?: string; initiallyAccessible?: boolean; close: () => void }) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState(purpose === 'Station pickup' ? 'Banbury station' : '');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [passengers, setPassengers] = useState('');
  const [bags, setBags] = useState('');
  const [accessible, setAccessible] = useState(initiallyAccessible);
  const [needs, setNeeds] = useState('');
  const [stationDirection, setStationDirection] = useState<'to' | 'from'>('to');
  const selectedPurpose = purpose === 'Station pickup' ? `${purpose} · ${stationDirection === 'to' ? 'To' : 'From'} Banbury station` : purpose;
  const summary = prepareBookingSummary({ journeyType, vehicle, purpose: selectedPurpose, from, to, date, time, passengers, bags, accessible, needs });
  function changeStationDirection(direction: 'to' | 'from') {
    if (direction === stationDirection) return;
    const otherAddress = stationDirection === 'to' ? from : to;
    setFrom(direction === 'from' ? 'Banbury station' : otherAddress);
    setTo(direction === 'to' ? 'Banbury station' : otherAddress);
    setStationDirection(direction);
  }
  function send(event: React.FormEvent<HTMLFormElement>, channel: 'whatsapp' | 'email') {
    event.preventDefault();
    window.location.href = channel === 'whatsapp' ? `https://wa.me/447823642516?text=${encodeURIComponent(summary)}` : `mailto:${email}?subject=Booking%20request&body=${encodeURIComponent(summary)}`;
    close();
  }
  return <form className="booking-form quick-booking-form" onSubmit={event => send(event, (event.nativeEvent as SubmitEvent).submitter?.getAttribute('data-channel') === 'email' ? 'email' : 'whatsapp')}>
    <div className="booking-heading"><p className="eyebrow dark"><span />Quick booking</p><h2>Your journey,<br /><em>in a few taps.</em></h2><p>Send a request. Our team will confirm the arrangements.</p></div>
    {vehicle && <p className="vehicle-preference">Vehicle preference: <strong>{vehicle}</strong></p>}
    {purpose && <p className="journey-purpose">Journey purpose: <strong>{purpose}</strong></p>}
    {purpose === 'Station pickup' && <fieldset className="station-direction"><legend>Station journey</legend><div><button type="button" aria-pressed={stationDirection === 'to'} onClick={() => changeStationDirection('to')}>To Banbury station</button><button type="button" aria-pressed={stationDirection === 'from'} onClick={() => changeStationDirection('from')}>From Banbury station</button></div></fieldset>}
    <div className="booking-fields"><label>From<Input required pattern={'.*\\S.*'} title="Enter a pickup address" value={from} placeholder="Pickup address" onChange={event => setFrom(event.target.value)} /></label><label>To<Input required pattern={'.*\\S.*'} title="Enter a destination" value={to} placeholder="Destination" onChange={event => setTo(event.target.value)} /></label><div className="booking-two-col"><label>Date<Input required type="date" value={date} onChange={event => setDate(event.target.value)} /></label><label>Time<Input required type="time" value={time} onChange={event => setTime(event.target.value)} /></label></div>
      <details className="quick-booking-options"><summary>Passengers & luggage <span>Optional +</span></summary><div><label>Passengers<Input type="number" min="1" step="1" value={passengers} placeholder="Party size" onChange={event => setPassengers(event.target.value)} /></label><label>Luggage / bags<Input value={bags} placeholder="e.g. 2 large cases" onChange={event => setBags(event.target.value)} /></label></div></details>
      <AccessibilityFields accessible={accessible} setAccessible={setAccessible} needs={needs} setNeeds={setNeeds} />
    </div>
    <div className="booking-actions"><button type="submit" className="booking-whatsapp">Send on WhatsApp <span>↗</span></button><a className="booking-call" href={phoneHref}>Call 01295 266 778</a><button type="submit" data-channel="email" className="booking-email">Email instead</button><p>Every journey starts or ends within 15 miles of Banbury.</p></div>
  </form>;
}

export function BookingRequest({ open, onOpenChange, initialJourneyType, vehicle, quick = false, purpose, initiallyAccessible }: BookingRequestProps) {
  const isMobile = useIsMobile();
  const fields = quick ? <QuickBookingFields key={`${vehicle ?? ''}-${purpose ?? ''}-${initiallyAccessible ?? false}-${open}`} vehicle={vehicle} journeyType={initialJourneyType ?? 'Local'} purpose={purpose} initiallyAccessible={initiallyAccessible} close={() => onOpenChange(false)} /> : <BookingFields initialJourneyType={initialJourneyType} vehicle={vehicle} close={() => onOpenChange(false)} />;

  if (isMobile) {
    return <Drawer open={open} onOpenChange={onOpenChange} showSwipeHandle><DrawerContent className="booking-drawer"><DrawerTitle className="sr-only">Arrange a journey</DrawerTitle><DrawerDescription className="sr-only">Send a prefilled booking request to A1 Cars on WhatsApp.</DrawerDescription>{fields}</DrawerContent></Drawer>;
  }

  return <Dialog open={open} onOpenChange={onOpenChange}><DialogContent className="booking-dialog" showCloseButton><DialogTitle className="sr-only">Arrange a journey</DialogTitle><DialogDescription className="sr-only">Send a prefilled booking request to A1 Cars on WhatsApp.</DialogDescription>{fields}</DialogContent></Dialog>;
}

export type { JourneyType };
