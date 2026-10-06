'use client';
import { FleetCards } from '@/components/fleet-cards';
import { fleetCategories } from '@/lib/fleet';

export function FleetBrowser() {
  return <>
    <nav className="fleet-category-nav" aria-label="Vehicle categories">{fleetCategories.map(category => <a href={`#${category.id}`} key={category.id}>{category.title} <span>↗</span></a>)}</nav>
    <p className="fleet-availability">Choose a vehicle preference. Our team confirms availability, passenger capacity and luggage space when booking.</p>
    {fleetCategories.map(category => <section className="fleet-category" id={category.id} key={category.id} aria-labelledby={`${category.id}-title`}>
      <div className="fleet-category-heading"><p className="eyebrow dark"><span />Travel your way</p><h2 id={`${category.id}-title`}>{category.title}</h2><p>{category.intro}</p></div>
      <FleetCards vehicles={category.vehicles} journeyType={category.journeyType} />
    </section>)}
  </>;
}
