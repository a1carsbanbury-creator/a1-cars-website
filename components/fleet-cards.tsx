'use client';
import { useState } from 'react';
import { ArrowUpRight, Briefcase, Users } from 'lucide-react';
import { BookingRequest, type JourneyType } from '@/components/booking-request';
import { capacityReviewNote, type FleetVehicle } from '@/lib/fleet';

export function FleetCards({ vehicles, journeyType, carousel = false }: { vehicles: FleetVehicle[]; journeyType: JourneyType; carousel?: boolean }) {
  const [selected, setSelected] = useState<FleetVehicle | null>(null);
  return <>
    <div className={carousel ? 'profile-cards profile-cards-scroll' : 'profile-cards'}>{vehicles.map(vehicle => <button type="button" className="profile-card" key={vehicle.id} aria-label={`Book now: ${vehicle.name}. Indicative capacity: ${vehicle.passengers ?? 'To confirm'} passengers, ${vehicle.luggage ?? 'luggage to confirm'}.${vehicle.capacityNote ? ` ${vehicle.capacityNote}.` : ''} Capacity must be confirmed when booking.`} onClick={() => setSelected(vehicle)}>
      <span className="profile-card-image"><img src={vehicle.image} alt={vehicle.alt} loading="lazy" /></span>
      <span className="profile-card-copy"><span className="profile-card-title">{vehicle.name}</span><span className="profile-capacity-label">Indicative capacity</span><span className="profile-card-capacity"><span><Users aria-hidden="true" /><span>Passengers<strong>{vehicle.passengers ?? 'To confirm'}</strong></span></span><span><Briefcase aria-hidden="true" /><span>Luggage<strong>{vehicle.luggage ?? 'To confirm'}</strong></span></span></span>{vehicle.capacityNote && <span className="profile-layout-note">{vehicle.capacityNote}</span>}<span className="profile-book">Book now <ArrowUpRight aria-hidden="true" /></span></span>
    </button>)}</div>
    <p className="capacity-review-note">{capacityReviewNote}</p>
    <BookingRequest open={selected !== null} onOpenChange={open => !open && setSelected(null)} initialJourneyType={journeyType} vehicle={selected?.name} quick />
  </>;
}
