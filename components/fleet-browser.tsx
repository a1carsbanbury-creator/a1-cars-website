'use client';

import { useState } from 'react';
import { BookingRequest, type JourneyType } from '@/components/booking-request';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const fleet: { category: string; journeyType: JourneyType; vehicle: string; image: string; alt: string; copy: string }[] = [
  { category: 'Local taxi', journeyType: 'Local', vehicle: 'Estate taxi', image: '/fleet-estate-taxi.png', alt: 'Black estate taxi in side profile on a white background', copy: 'A practical local option for everyday Banbury journeys.' },
  { category: 'Executive cars', journeyType: 'Executive', vehicle: 'E-Class executive car', image: '/fleet-executive-saloon.png', alt: 'Black executive saloon in side profile on a white background', copy: 'A modern executive choice for business travel and occasions.' },
  { category: 'Group & minibus', journeyType: 'Group & minibus', vehicle: 'Ford Transit', image: '/fleet-ford-transit.png', alt: 'Black Ford Transit passenger van in side profile on a white background', copy: 'A straightforward option when your group travels together.' },
];

export function FleetBrowser() {
  const [booking, setBooking] = useState<{ journeyType: JourneyType; vehicle: string } | null>(null);

  return <>
    <Carousel className="fleet-carousel" opts={{ align: 'start', loop: false }}><CarouselContent className="fleet-carousel-content">{fleet.map((vehicle, index) => <CarouselItem className="fleet-carousel-item" key={vehicle.vehicle}><article className="fleet-option" id={index === 0 ? 'local' : index === 1 ? 'executive' : 'minibus'}><div className="fleet-image"><img src={vehicle.image} alt={vehicle.alt} /></div><div className="fleet-option-copy"><p className="eyebrow dark"><span />{vehicle.category}</p><h2>{vehicle.vehicle}</h2><p>{vehicle.copy}</p><Button type="button" className="fleet-book" onClick={() => setBooking({ journeyType: vehicle.journeyType, vehicle: vehicle.vehicle })}>Book this journey <span>↗</span></Button></div></article></CarouselItem>)}</CarouselContent><CarouselPrevious className="fleet-carousel-previous" /><CarouselNext className="fleet-carousel-next" /></Carousel>
    <p className="fleet-note">Swipe through the vehicle styles, then choose the one you would like to request.</p>
    <BookingRequest open={booking !== null} onOpenChange={(open) => !open && setBooking(null)} initialJourneyType={booking?.journeyType} vehicle={booking?.vehicle} />
  </>;
}
