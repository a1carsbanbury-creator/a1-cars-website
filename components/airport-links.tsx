import { airports } from '@/lib/airports';
import { ArrowUpRight } from 'lucide-react';
export function AirportLinks() { return <div className="airport-route-links">{airports.map(airport => <a key={airport.code} href={`/${airport.slug}`}><span><strong>{airport.name}</strong><small>{airport.code} · Plan an airport transfer</small></span><ArrowUpRight aria-hidden="true" /></a>)}</div>; }
