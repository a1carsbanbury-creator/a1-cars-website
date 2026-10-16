import type { JourneyType } from '@/components/booking-request';

export type FleetVehicle = { id: string; name: string; image: string; alt: string; passengers?: number | string; luggage?: string; capacityNote?: string; tradeoff?: boolean };
// Capacities are indicative and must be confirmed by Kenneth before this goes live (see docs/pms-website-bundle-review.md).
// Seven-plus seaters trade luggage space for seats; saloons and estates are not affected.
export const capacityReviewNote = 'Images are representative: you will be given a vehicle of a similar category and standard. Passenger and luggage space depends on the seating layout, and larger vehicles carry less luggage when every seat is used. Tell us about your bags when you book and we will confirm the right vehicle. Cases means medium suitcases.';
export const vehicleCatalogue: Record<string, FleetVehicle> = {
  estate: { id: 'estate', name: 'Estate vehicle', image: '/fleet-estate-taxi.webp', alt: 'White estate vehicle in side profile', passengers: 4, luggage: '3 cases' },
  mercedesEstate: { id: 'mercedes-estate', name: 'Premium estate vehicle', image: '/profile-mercedes-estate.webp', alt: 'Premium estate vehicle in side profile', passengers: 4, luggage: '3 cases' },
  superb: { id: 'superb', name: 'Standard saloon car', image: '/profile-superb.webp', alt: 'Standard saloon car in side profile', passengers: 4, luggage: '2 cases' },
  touran: { id: 'touran', name: '7-seat people carrier', image: '/profile-touran.webp', alt: '7-seat people carrier in side profile', passengers: 'Up to 7', luggage: '3 cases with 4 passengers', capacityNote: 'Fewer cases when every seat is used', tradeoff: true },
  eclassBlack: { id: 'eclass-black', name: 'Mercedes E-Class', image: '/fleet-executive-saloon.webp', alt: 'Mercedes E-Class saloon in side profile', passengers: 4, luggage: '2 cases' },
  eclassSilver: { id: 'eclass-silver', name: 'Mercedes E-Class', image: '/profile-eclass-silver.webp', alt: 'Mercedes E-Class saloon in side profile', passengers: 4, luggage: '2 cases' },
  sclass: { id: 'sclass', name: 'Mercedes S-Class', image: '/profile-sclass.webp', alt: 'Mercedes S-Class saloon in side profile', passengers: 4, luggage: '2 cases' },
  vclass: { id: 'vclass', name: 'Mercedes V-Class', image: '/profile-vclass.webp', alt: 'Mercedes V-Class in side profile', passengers: 'Up to 6', luggage: '4 cases with fewer passengers', capacityNote: 'Fewer cases when every seat is used', tradeoff: true },
  transporter: { id: 'transporter', name: '8-seat minibus', image: '/profile-transporter.webp', alt: '8-seat minibus in side profile', passengers: 'Up to 8', luggage: '6 cases with fewer passengers', capacityNote: 'Fewer cases when every seat is used', tradeoff: true },
  transit: { id: 'transit', name: '8-seat van-style minibus', image: '/profile-transit.webp', alt: '8-seat van-style minibus in side profile', passengers: 'Up to 8', luggage: '6 cases with fewer passengers', capacityNote: 'Fewer cases when every seat is used', tradeoff: true },
  tourneo: { id: 'tourneo', name: '8-seat people carrier', image: '/profile-tourneo.webp', alt: '8-seat people carrier in side profile', passengers: 'Up to 8', luggage: '6 cases with fewer passengers', capacityNote: 'Fewer cases when every seat is used', tradeoff: true },
  sprinter: { id: 'sprinter', name: '16-seat minibus', image: '/profile-sprinter.webp', alt: '16-seat minibus in side profile', passengers: 'Up to 16', luggage: '4 cases with a full load', capacityNote: 'Fewer cases when every seat is used', tradeoff: true },
};
export const fleetCategories: { id: string; title: string; intro: string; journeyType: JourneyType; vehicles: FleetVehicle[] }[] = [
  { id: 'local', title: 'Private hire & estates', intro: 'Practical cars for everyday journeys, station pickups and family plans.', journeyType: 'Local', vehicles: [vehicleCatalogue.estate, vehicleCatalogue.mercedesEstate, vehicleCatalogue.superb, vehicleCatalogue.touran] },
  { id: 'executive', title: 'Executive cars', intro: 'Mercedes cars and premium people carriers for business and occasions.', journeyType: 'Executive', vehicles: [vehicleCatalogue.eclassBlack, vehicleCatalogue.sclass, vehicleCatalogue.vclass] },
  { id: 'minibus', title: 'Minibuses', intro: 'People carriers and minibuses for travelling together.', journeyType: 'Group & minibus', vehicles: [vehicleCatalogue.touran, vehicleCatalogue.transporter, vehicleCatalogue.transit, vehicleCatalogue.tourneo, vehicleCatalogue.sprinter] },
];
