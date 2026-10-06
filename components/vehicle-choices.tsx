'use client';
import { useState } from 'react';
import { Briefcase, BusFront, Users } from 'lucide-react';
import { BookingRequest, type JourneyType } from '@/components/booking-request';
type VehicleChoice = { name: string; image?: string; alt?: string; copy: string };
const choices: VehicleChoice[] = [
  { name: 'Estate car', image: '/about-9-estate-street-day.webp', alt: 'Illustration of an estate car on a village street', copy: 'A practical choice for family trips and luggage.' },
  { name: 'Mercedes E-Class', image: '/revision-airport-arrival.webp', alt: 'Illustration of a modern Mercedes E-Class at an airport', copy: 'A smart, comfortable start to your trip.' },
  { name: 'Mercedes S-Class', image: '/revision-wedding.webp', alt: 'Illustration of a Mercedes S-Class at a wedding venue', copy: 'Premium comfort for business and special journeys.' },
  { name: 'Volkswagen Touran', copy: 'A versatile people carrier for family airport trips.' },
  { name: 'Mercedes V-Class', image: '/executive-people-carrier.webp', alt: 'Black Mercedes V-Class at an airport', copy: 'Premium travel for a party travelling together.' },
  { name: 'Volkswagen Transporter', image: '/fleet-transporter.webp', alt: 'White Volkswagen Transporter', copy: 'Flexible group travel for airport journeys.' },
  { name: 'Volkswagen 16-seater minibus', copy: 'A larger vehicle preference for travelling as one group.' },
];
export function VehicleChoices({ mode = 'airport' }: { mode?: 'airport' | 'executive' | 'group' }) {
  const [vehicle, setVehicle] = useState<string | null>(null);
  const displayed = mode === 'executive' ? choices.filter(choice => ['Mercedes E-Class', 'Mercedes S-Class', 'Mercedes V-Class'].includes(choice.name)) : mode === 'group' ? choices.slice(3) : choices;
  const journey: JourneyType = mode === 'airport' ? 'Airport' : mode === 'executive' ? 'Executive' : 'Group & minibus';
  return <div className="journey-vehicles"><div className="journey-vehicle-grid">{displayed.map(choice => <article className="journey-vehicle" key={choice.name}><div className={choice.image && choice.name !== 'Volkswagen Transporter' ? 'journey-vehicle-image lifestyle' : 'journey-vehicle-image'}>{choice.image ? <img src={choice.image} alt={choice.alt} loading="lazy" /> : <div className="journey-vehicle-placeholder"><BusFront aria-hidden="true" /><span>{choice.name === 'Volkswagen Touran' ? 'Family travel' : 'Travel together'}</span></div>}</div><div className="journey-vehicle-copy"><h3>{choice.name}</h3><p>{choice.copy}</p><dl><div><dt><Users aria-hidden="true" />Passengers</dt><dd>Tell us your party size</dd></div><div><dt><Briefcase aria-hidden="true" />Luggage</dt><dd>Tell us your bag count</dd></div></dl><button type="button" className="fleet-request" onClick={() => setVehicle(choice.name)}>Request this vehicle <span>↗</span></button></div></article>)}</div><p className="vehicle-capacity-note">Passenger and luggage space is confirmed when booking. Tell us about large cases, pushchairs or accessibility needs so we can match the right vehicle.</p><BookingRequest open={vehicle !== null} onOpenChange={open => !open && setVehicle(null)} initialJourneyType={journey} vehicle={vehicle ?? undefined} /></div>;
}
