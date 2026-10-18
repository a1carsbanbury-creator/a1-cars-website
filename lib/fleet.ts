import type { JourneyType } from '@/components/booking-request';

export type FleetVehicle = { id: string; name: string; image: string; alt: string; passengers?: number | string; luggage?: string; capacityNote?: string; tradeoff?: boolean };
// Capacities are indicative and must be confirmed by Kenneth before this goes live (see docs/pms-website-bundle-review.md).
// Seven-plus seaters trade luggage space for seats; saloons and estates are not affected.
export const vehicleCategoryNote = 'Choose a vehicle category. Images are examples: your vehicle may be a different make, model or colour within the same category, with suitable passenger and luggage capacity. We confirm the vehicle when you book.';
export const capacityReviewNote = 'Passenger figures exclude the driver. Passenger and luggage space depends on the seating layout; larger vehicles carry less luggage when every seat is used. Tell us your passenger numbers and bags when you book so we can confirm a suitable vehicle. Cases mean medium suitcases.';
export const vehicleCatalogue: Record<string, FleetVehicle> = {
  estate: { id: 'estate', name: 'Estate', image: '/fleet-estate-taxi.webp', alt: 'Illustrative estate in side profile', passengers: 4, luggage: '3 cases' },
  mercedesEstate: { id: 'mercedes-estate', name: 'Estate', image: '/profile-mercedes-estate.webp', alt: 'Illustrative estate in side profile', passengers: 4, luggage: '3 cases' },
  superb: { id: 'superb', name: 'Saloon', image: '/profile-superb.webp', alt: 'Illustrative saloon in side profile', passengers: 4, luggage: '2 cases' },
  touran: { id: 'touran', name: 'MPV / people carrier', image: '/profile-touran.webp', alt: 'Illustrative compact MPV in side profile', passengers: 'Up to 6', luggage: '3 cases with 4 passengers', capacityNote: 'Fewer cases when every seat is used', tradeoff: true },
  eclassBlack: { id: 'eclass-black', name: 'Mercedes E-Class', image: '/fleet-executive-saloon.webp', alt: 'Mercedes E-Class saloon in side profile', passengers: 4, luggage: '2 cases' },
  eclassSilver: { id: 'eclass-silver', name: 'Mercedes E-Class', image: '/profile-eclass-silver.webp', alt: 'Mercedes E-Class saloon in side profile', passengers: 4, luggage: '2 cases' },
  sclass: { id: 'sclass', name: 'Mercedes S-Class', image: '/profile-sclass.webp', alt: 'Mercedes S-Class saloon in side profile', passengers: 4, luggage: '2 cases' },
  vclass: { id: 'vclass', name: 'Mercedes V-Class', image: '/profile-vclass.webp', alt: 'Mercedes V-Class in side profile', passengers: 'Up to 6', luggage: '4 cases with fewer passengers', capacityNote: 'Fewer cases when every seat is used', tradeoff: true },
  transporter: { id: 'transporter', name: '8-seat minibus', image: '/profile-transporter.webp', alt: '8-seat minibus in side profile', passengers: 'Up to 8', luggage: '6 cases with fewer passengers', capacityNote: 'Fewer cases when every seat is used', tradeoff: true },
  transit: { id: 'transit', name: 'Minibus', image: '/profile-transit.webp', alt: 'Illustrative high-roof minibus in side profile', capacityNote: 'Tell us your group size and bags so we can confirm a suitable layout', tradeoff: true },
  tourneo: { id: 'tourneo', name: '8-seat people carrier', image: '/profile-tourneo.webp', alt: '8-seat people carrier in side profile', passengers: 'Up to 8', luggage: '6 cases with fewer passengers', capacityNote: 'Fewer cases when every seat is used', tradeoff: true },
  sprinter: { id: 'sprinter', name: '16-seat minibus', image: '/profile-sprinter.webp', alt: '16-seat minibus in side profile', passengers: 'Up to 16', luggage: 'To confirm', capacityNote: 'Fewer cases when every seat is used', tradeoff: true },
};
export const fleetCategories: { id: string; title: string; intro: string; journeyType: JourneyType; vehicles: FleetVehicle[] }[] = [
  { id: 'local', title: 'Standard cars', intro: 'Practical cars for everyday journeys, station pickups and family plans.', journeyType: 'Local', vehicles: [vehicleCatalogue.estate, vehicleCatalogue.mercedesEstate, vehicleCatalogue.superb] },
  { id: 'executive', title: 'Executive cars', intro: 'Mercedes cars and premium people carriers for business and occasions.', journeyType: 'Executive', vehicles: [vehicleCatalogue.eclassBlack, vehicleCatalogue.sclass, vehicleCatalogue.vclass] },
  { id: 'minibus', title: 'People carriers & minibuses', intro: 'MPVs and minibuses for travelling together. Choose a category to suit your group.', journeyType: 'Group & minibus', vehicles: [vehicleCatalogue.touran, vehicleCatalogue.transporter, vehicleCatalogue.transit, vehicleCatalogue.tourneo, vehicleCatalogue.sprinter] },
];
