import type { JourneyType } from '@/components/booking-request';
export const fleetCategories: { id: string; title: string; intro: string; journeyType: JourneyType; vehicles: { name: string; image?: string; alt?: string; copy: string; tag: string }[] }[] = [
  { id: 'local', title: 'Estates & local cars', intro: 'Room for everyday plans, station pickups and the luggage that comes with them.', journeyType: 'Local', vehicles: [
    { name: 'Škoda estate', image: '/fleet-estate-taxi.webp', alt: 'White Škoda estate in side profile', copy: 'A practical estate for everyday trips and luggage.', tag: 'Everyday space' },
    { name: 'Mercedes E-Class estate', image: '/fleet-mercedes-estate.webp', alt: 'Grey Mercedes E-Class estate', copy: 'Estate practicality with a little more comfort for longer journeys.', tag: 'Comfort & luggage' },
    { name: 'Škoda Superb', image: '/fleet-superb.webp', alt: 'Grey Škoda Superb liftback', copy: 'A spacious local car for journeys around Banbury and beyond.', tag: 'Local & longer trips' },
  ] },
  { id: 'executive', title: 'Executive cars', intro: 'A considered choice for business travel, airport journeys and special occasions.', journeyType: 'Executive', vehicles: [
    { name: 'Mercedes E-Class · black', image: '/fleet-executive-saloon.webp', alt: 'Black Mercedes E-Class saloon', copy: 'A smart saloon for meetings, client pickups and occasions.', tag: 'Business & occasions' },
    { name: 'Mercedes E-Class · silver', image: '/fleet-eclass-silver.webp', alt: 'Silver Mercedes E-Class saloon', copy: 'Comfortable executive travel for airport runs and longer distances.', tag: 'Airport & distance' },
    { name: 'Mercedes S-Class', image: '/fleet-sclass.webp', alt: 'Black Mercedes S-Class saloon', copy: 'A premium saloon preference for a more relaxed journey.', tag: 'Premium comfort' },
  ] },
  { id: 'minibus', title: 'Groups & minibuses', intro: 'From a premium people carrier to a larger minibus, make one plan for everyone.', journeyType: 'Group & minibus', vehicles: [
    { name: 'Mercedes V-Class', image: '/executive-people-carrier.webp', alt: 'Black Mercedes V-Class at an airport', copy: 'Premium group travel for family trips, airport transfers and occasions.', tag: 'Premium people carrier' },
    { name: 'Volkswagen Transporter', image: '/fleet-transporter.webp', alt: 'White Volkswagen Transporter people carrier', copy: 'A versatile people carrier for travelling together.', tag: 'People carrier' },
    { name: 'Ford Tourneo Custom', image: '/fleet-tourneo.webp', alt: 'Silver Ford Tourneo Custom people carrier', copy: 'A comfortable group option for days out and airport journeys.', tag: 'Group comfort' },
    { name: 'Volkswagen 16-seater minibus', copy: 'For a larger party, request a 16-seater and let our team confirm the right vehicle and luggage space.', tag: 'Larger groups · 16 seats' },
  ] },
];
