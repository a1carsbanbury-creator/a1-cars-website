'use client';
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Briefcase, Users } from 'lucide-react';
import { BookingRequest, type JourneyType } from '@/components/booking-request';
import { capacityReviewNote, type FleetVehicle } from '@/lib/fleet';
export function FleetCards({ vehicles, journeyType, carousel = false }: { vehicles: FleetVehicle[]; journeyType: JourneyType; carousel?: boolean }) {
  const [selected, setSelected] = useState<FleetVehicle | null>(null);
  const [index, setIndex] = useState(0);
  const [viewport, api] = useEmblaCarousel({ loop: true, align: 'start', active: carousel, breakpoints: { '(max-width:600px)': { active: true } } });
  const sync = useCallback(() => { if (api) setIndex(api.selectedScrollSnap()); }, [api]);
  useEffect(() => { if (!api) return; sync(); api.on('select', sync).on('reInit', sync); return () => { api.off('select', sync).off('reInit', sync); }; }, [api, sync]);
  return <>
    <div className={carousel ? 'fleet-carousel always-carousel' : 'fleet-carousel'} role="region" aria-roledescription="carousel" aria-label={`${journeyType} vehicle preferences`}><div className="fleet-carousel-viewport" ref={viewport}><div className="profile-cards">{vehicles.map(vehicle => <button type="button" className="profile-card" key={vehicle.id} aria-label={`Enquire about ${vehicle.name} or similar. Indicative capacity ${vehicle.passengers ?? 'to confirm'} passengers. Capacity confirmed when booking.`} onClick={() => setSelected(vehicle)}>
      <span className="profile-card-image"><img src={vehicle.image} alt={vehicle.alt} loading="lazy" /></span><span className="profile-card-copy"><span className="profile-card-title">{vehicle.name} <small>or similar</small></span><span className="profile-capacity-label">Indicative capacity</span><span className="profile-card-capacity"><span><Users aria-hidden="true" /><span>Passengers<strong>{vehicle.passengers ?? 'To confirm'}</strong></span></span><span><Briefcase aria-hidden="true" /><span>Luggage<strong>{vehicle.luggage ?? 'To confirm'}</strong></span></span></span>{vehicle.capacityNote && <span className="profile-layout-note">{vehicle.capacityNote}</span>}<span className="profile-book">Enquire about this vehicle <ArrowUpRight aria-hidden="true" /></span></span>
    </button>)}</div></div><div className="fleet-carousel-controls"><span aria-live="polite">{index + 1} / {vehicles.length} · Swipe to explore</span><button type="button" aria-label={`Previous ${journeyType} vehicle`} onClick={() => api?.scrollPrev()}><ArrowLeft size={18} /></button><button type="button" aria-label={`Next ${journeyType} vehicle`} onClick={() => api?.scrollNext()}><ArrowRight size={18} /></button></div></div><p className="capacity-review-note">{capacityReviewNote}</p><BookingRequest open={selected !== null} onOpenChange={open => !open && setSelected(null)} initialJourneyType={journeyType} vehicle={selected ? `${selected.name} or similar` : undefined} quick />
  </>;
}
