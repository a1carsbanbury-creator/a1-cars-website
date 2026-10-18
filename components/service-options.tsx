'use client';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BookingRequest, type JourneyType } from '@/components/booking-request';

export function ServiceOptions({ items }: { items: [string, string][] }) {
  const [selected, setSelected] = useState<string | null>(null);
  const journeyType: JourneyType = selected && /airport/i.test(selected) ? 'Airport' : selected && /business|wedding|prom/i.test(selected) ? 'Executive' : 'Group & minibus';
  return <><div className="service-options">{items.map(([title, description]) => <button type="button" key={title} onClick={() => setSelected(title)}><span><strong>{title}</strong><span>{description}</span></span><ArrowUpRight aria-hidden="true" /></button>)}</div><BookingRequest open={selected !== null} onOpenChange={open => !open && setSelected(null)} initialJourneyType={journeyType} purpose={selected ?? undefined} source={selected ?? undefined} /></>;
}
