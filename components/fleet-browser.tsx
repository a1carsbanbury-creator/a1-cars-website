'use client';

import { useState } from 'react';
import { BookingRequest, type JourneyType } from '@/components/booking-request';
import { BusFront } from 'lucide-react';
import { fleetCategories } from '@/lib/fleet';

export function FleetBrowser() {
  const [booking, setBooking] = useState<{ journeyType: JourneyType; vehicle: string } | null>(null);

  return <>
    <nav className="fleet-category-nav" aria-label="Vehicle categories">{fleetCategories.map(category => <a href={`#${category.id}`} key={category.id}>{category.title} <span>↗</span></a>)}</nav>
    <p className="fleet-availability">Choose a vehicle preference. Our team will confirm availability, passenger numbers and luggage space before your booking is agreed.</p>
    {fleetCategories.map(category => <section className="fleet-category" id={category.id} key={category.id} aria-labelledby={`${category.id}-title`}>
      <div className="fleet-category-heading"><p className="eyebrow dark"><span />Travel your way</p><h2 id={`${category.id}-title`}>{category.title}</h2><p>{category.intro}</p></div>
      <div className="fleet-catalogue">{category.vehicles.map(vehicle => <article className={`fleet-catalogue-card${vehicle.image ? '' : ' text-led'}`} key={vehicle.name}>
        <div className={`fleet-catalogue-image${vehicle.name === 'Mercedes V-Class' ? ' lifestyle' : ''}`}>{vehicle.image ? <img src={vehicle.image} alt={vehicle.alt} loading="lazy" /> : <div className="fleet-large-group"><BusFront aria-hidden="true" strokeWidth={1} /><strong>16</strong><span>Travel together</span></div>}</div>
        <div className="fleet-catalogue-copy"><p className="fleet-tag">{vehicle.tag}</p><h3>{vehicle.name}</h3><p>{vehicle.copy}</p><button type="button" className="fleet-request" onClick={() => setBooking({ journeyType: category.journeyType, vehicle: vehicle.name })}>Request this vehicle <span>↗</span></button></div>
      </article>)}</div>
    </section>)}
    <BookingRequest open={booking !== null} onOpenChange={(open) => !open && setBooking(null)} initialJourneyType={booking?.journeyType} vehicle={booking?.vehicle} />
  </>;
}
