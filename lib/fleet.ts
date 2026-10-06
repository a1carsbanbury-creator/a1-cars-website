import type { JourneyType } from '@/components/booking-request';

export type FleetVehicle = { id: string; name: string; image: string; alt: string; passengers?: number; luggage?: string; capacityNote?: string };
// Kenneth-approved indicative estimates for local review, not verified operating limits.
export const capacityReviewNote = 'Local review: indicative planning estimates, not verified manufacturer or A1 vehicle limits. Cases mean medium suitcases, approximately 65 × 45 × 25 cm each. Passenger and luggage space depends on the seating layout; confirm the vehicle and your bags when booking.';
export const vehicleCatalogue: Record<string, FleetVehicle> = {
  estate: { id: 'estate', name: 'Škoda estate', image: '/fleet-estate-taxi.webp', alt: 'White Škoda estate in side profile', passengers: 4, luggage: '3 cases' },
  mercedesEstate: { id: 'mercedes-estate', name: 'Mercedes E-Class estate', image: '/profile-mercedes-estate.webp', alt: 'Mercedes E-Class estate in side profile', passengers: 4, luggage: '3 cases' },
  superb: { id: 'superb', name: 'Škoda Superb', image: '/profile-superb.webp', alt: 'Škoda Superb liftback in side profile', passengers: 4, luggage: '3 cases' },
  touran: { id: 'touran', name: 'Volkswagen Touran', image: '/profile-touran.webp', alt: 'Volkswagen Touran in side profile', passengers: 4, luggage: '3 cases', capacityNote: '4-passenger luggage layout · rear row folded' },
  eclassBlack: { id: 'eclass-black', name: 'Mercedes E-Class · black', image: '/fleet-executive-saloon.webp', alt: 'Black Mercedes E-Class saloon in side profile', passengers: 4, luggage: '2 cases' },
  eclassSilver: { id: 'eclass-silver', name: 'Mercedes E-Class · silver', image: '/profile-eclass-silver.webp', alt: 'Silver Mercedes E-Class saloon in side profile', passengers: 4, luggage: '2 cases' },
  sclass: { id: 'sclass', name: 'Mercedes S-Class', image: '/profile-sclass.webp', alt: 'Black Mercedes S-Class saloon in side profile', passengers: 4, luggage: '2 cases' },
  vclass: { id: 'vclass', name: 'Mercedes V-Class', image: '/profile-vclass.webp', alt: 'Black Mercedes V-Class in side profile', passengers: 6, luggage: '4 cases' },
  transporter: { id: 'transporter', name: 'Volkswagen Transporter', image: '/profile-transporter.webp', alt: 'Volkswagen Transporter in side profile', passengers: 8, luggage: '6 cases' },
  transit: { id: 'transit', name: 'Ford Transit', image: '/profile-transit.webp', alt: 'White Ford Transit in side profile', passengers: 8, luggage: '6 cases' },
  tourneo: { id: 'tourneo', name: 'Ford Tourneo Custom', image: '/profile-tourneo.webp', alt: 'Ford Tourneo Custom in side profile', passengers: 8, luggage: '6 cases' },
  sprinter: { id: 'sprinter', name: 'Mercedes Sprinter 16-seater', image: '/profile-sprinter.webp', alt: 'Mercedes Sprinter minibus in side profile', passengers: 16, luggage: '4 cases' },
};
export const fleetCategories: { id: string; title: string; intro: string; journeyType: JourneyType; vehicles: FleetVehicle[] }[] = [
  { id: 'local', title: 'Private hire & estates', intro: 'Practical cars for everyday journeys, station pickups and family plans.', journeyType: 'Local', vehicles: [vehicleCatalogue.estate, vehicleCatalogue.mercedesEstate, vehicleCatalogue.superb, vehicleCatalogue.touran] },
  { id: 'executive', title: 'Executive cars', intro: 'Mercedes cars and premium people carriers for business and occasions.', journeyType: 'Executive', vehicles: [vehicleCatalogue.eclassBlack, vehicleCatalogue.eclassSilver, vehicleCatalogue.sclass, vehicleCatalogue.vclass] },
  { id: 'minibus', title: 'Minibuses', intro: 'People carriers and minibuses for travelling together.', journeyType: 'Group & minibus', vehicles: [vehicleCatalogue.touran, vehicleCatalogue.transporter, vehicleCatalogue.transit, vehicleCatalogue.tourneo, vehicleCatalogue.sprinter] },
];
