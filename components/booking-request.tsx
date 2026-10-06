'use client';

import { useEffect, useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { Drawer, DrawerContent, DrawerDescription, DrawerTitle } from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';
import { useIsMobile } from '@/hooks/use-mobile';

type JourneyType = 'Airport' | 'Local' | 'Executive' | 'Group & minibus';

type BookingRequestProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialJourneyType?: JourneyType;
  vehicle?: string;
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

function formatDate(value: string) {
  return new Intl.DateTimeFormat('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(`${value}T12:00:00`));
}

function BookingFields({ initialJourneyType = 'Airport', vehicle, close }: { initialJourneyType?: JourneyType; vehicle?: string; close: () => void }) {
  const [journeyType, setJourneyType] = useState<JourneyType>(initialJourneyType);
  const [from, setFrom] = useState('Banbury');
  const [to, setTo] = useState(initialJourneyType === 'Airport' ? airports[0] : 'To be confirmed');
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [time, setTime] = useState(roundedTime);
  const [passengers, setPassengers] = useState(1);
  const [bags, setBags] = useState('');

  useEffect(() => {
    setJourneyType(initialJourneyType);
    setTo(initialJourneyType === 'Airport' ? airports[0] : 'To be confirmed');
  }, [initialJourneyType, vehicle]);

  const summary = useMemo(() => [
    "Hi A1 Cars, I'd like to book:",
    `• Journey: ${journeyType === 'Airport' ? 'Airport transfer' : journeyType}`,
    vehicle ? `• Vehicle preference: ${vehicle}` : '',
    `• From: ${from || 'Banbury'}`,
    `• To: ${to || 'To be confirmed'}`,
    `• Date: ${formatDate(date)}`,
    `• Time: ${time}`,
    `• Passengers: ${passengers}`,
    bags ? `• Luggage: ${bags}` : '',
  ].filter(Boolean).join('\n'), [journeyType, vehicle, from, to, date, time, passengers, bags]);

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
    </div>
    <div className="booking-actions"><a className="booking-whatsapp" href={whatsappHref} onClick={close}>Send on WhatsApp <span>↗</span></a><a className="booking-call" href={phoneHref}>Call 01295 266 778</a><a className="booking-email" href={emailHref}>Email instead</a><p>All major payment cards accepted.</p></div>
  </div>;
}

export function BookingRequest({ open, onOpenChange, initialJourneyType, vehicle }: BookingRequestProps) {
  const isMobile = useIsMobile();
  const fields = <BookingFields initialJourneyType={initialJourneyType} vehicle={vehicle} close={() => onOpenChange(false)} />;

  if (isMobile) {
    return <Drawer open={open} onOpenChange={onOpenChange} showSwipeHandle><DrawerContent className="booking-drawer"><DrawerTitle className="sr-only">Arrange a journey</DrawerTitle><DrawerDescription className="sr-only">Send a prefilled booking request to A1 Cars on WhatsApp.</DrawerDescription>{fields}</DrawerContent></Drawer>;
  }

  return <Dialog open={open} onOpenChange={onOpenChange}><DialogContent className="booking-dialog" showCloseButton><DialogTitle className="sr-only">Arrange a journey</DialogTitle><DialogDescription className="sr-only">Send a prefilled booking request to A1 Cars on WhatsApp.</DialogDescription>{fields}</DialogContent></Dialog>;
}

export type { JourneyType };
