'use client';
import { FleetCards } from '@/components/fleet-cards';
import { fleetCategories, vehicleCatalogue } from '@/lib/fleet';

export function VehicleChoices({ mode = 'airport' }: { mode?: 'airport' | 'executive' | 'group' }) {
  const category = fleetCategories.find(item => item.id === (mode === 'executive' ? 'executive' : 'minibus'))!;
  const vehicles = mode === 'airport' ? [vehicleCatalogue.estate, vehicleCatalogue.eclassBlack, vehicleCatalogue.sclass, vehicleCatalogue.touran, vehicleCatalogue.vclass, vehicleCatalogue.transporter, vehicleCatalogue.sprinter] : category.vehicles;
  return <div className="journey-vehicles"><FleetCards vehicles={vehicles} journeyType={mode === 'airport' ? 'Airport' : category.journeyType} /><p className="vehicle-capacity-note">Passenger and luggage capacity is confirmed when booking. Tell us about large cases, pushchairs or accessibility needs if you need help choosing.</p></div>;
}
