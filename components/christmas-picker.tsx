'use client';
import { useState } from 'react';
import { ArrowUpRight, Gift, PartyPopper, Plane, Users } from 'lucide-react';
import { BookingRequest, type JourneyType } from '@/components/booking-request';

const options: { title: string; note: string; journeyType: JourneyType; purpose: string; Icon: typeof Gift }[] = [
  { title: 'Family gathering', note: 'Door to door, up to 6 together', journeyType: 'Local', purpose: 'Christmas family gathering', Icon: Gift },
  { title: 'Christmas party', note: 'Enjoy the night, we handle the ride', journeyType: 'Local', purpose: 'Christmas party', Icon: PartyPopper },
  { title: 'Friends & bigger groups', note: '8-seat minibus, V-Class or 16-seat minibus', journeyType: 'Group & minibus', purpose: 'Christmas group travel', Icon: Users },
  { title: 'Airport journeys', note: 'Early flight or late arrival', journeyType: 'Airport', purpose: 'Christmas airport journey', Icon: Plane },
];

export function ChristmasPicker() {
  const [pick, setPick] = useState<(typeof options)[number] | null>(null);
  return <>
    <div className="xmas-picker">{options.map((o, i) =>
      <button type="button" className="xmas-pick reveal" style={{ ['--i' as string]: i }} key={o.title} onClick={() => setPick(o)}>
        <span className="xmas-pick-icon"><o.Icon aria-hidden="true" strokeWidth={1.65} /></span>
        <strong>{o.title}</strong><small>{o.note}</small>
        <span className="xmas-pick-go">Book this <ArrowUpRight aria-hidden="true" /></span>
      </button>)}</div>
    <BookingRequest open={pick !== null} onOpenChange={open => !open && setPick(null)} initialJourneyType={pick?.journeyType} purpose={pick?.purpose} quick />
  </>;
}
