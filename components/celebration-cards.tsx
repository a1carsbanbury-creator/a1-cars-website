'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BookingRequest, type JourneyType } from '@/components/booking-request';

type Occasion = { title: string; eyebrow: string; image: string; alt: string; description: string; journeyType: JourneyType };
const occasions: Occasion[] = [
  { title: 'Prom nights', eyebrow: 'Make an entrance', image: '/celebration-prom-v1.webp', alt: 'Friends in formal evening clothes arriving at a prom venue beside an executive people carrier', description: 'The outfits, the photos, the arrival together. Plan a people carrier or minibus for your friends, with a pickup home agreed in advance.', journeyType: 'Group & minibus' },
  { title: 'Birthday parties', eyebrow: 'A night to remember', image: '/celebration-birthday-v1.webp', alt: 'Adult friends arriving by saloon car for a birthday dinner', description: 'A surprise dinner, a milestone birthday or a proper night out. Bring your favourite people and tell us where the evening takes you.', journeyType: 'Group & minibus' },
  { title: 'Weddings', eyebrow: 'Your big day', image: '/revision-wedding.webp', alt: 'A wedding couple beside an executive car at a stone venue', description: 'A car for the couple, transport for the guests. Share your venues and timings so we can help plan each part of the day.', journeyType: 'Executive' },
  { title: 'Christmas parties', eyebrow: 'A little festive sparkle', image: '/celebration-christmas-v1.webp', alt: 'Colleagues arriving by people carrier at a hotel decorated with Christmas lights', description: 'Work parties, festive dinners and evenings with friends. Arrange the journey together and agree your return before the celebrations begin.', journeyType: 'Group & minibus' },
  { title: 'Anniversaries & more', eyebrow: 'Just worth celebrating', image: '/celebration-anniversary-v1.webp', alt: 'A couple with flowers arriving by executive car for an anniversary dinner', description: 'An anniversary dinner, an engagement or a long-awaited reunion. Tell us the occasion and we will help arrange a fitting journey.', journeyType: 'Executive' },
];

export function CelebrationCards() {
  const [selected, setSelected] = useState<Occasion | null>(null);
  return <>
    <div className="occasion-grid">{occasions.map(occasion => <article className="occasion-card reveal" key={occasion.title}>
      <div className="occasion-image"><img src={occasion.image} alt={occasion.alt} loading="lazy" /></div>
      <div className="occasion-copy"><p className="occasion-eyebrow">{occasion.eyebrow}</p><h3>{occasion.title}</h3><p>{occasion.description}</p><button type="button" onClick={() => setSelected(occasion)} aria-label={`Plan travel for ${occasion.title.toLowerCase()}`}>Plan the journey <ArrowUpRight aria-hidden="true" /></button></div>
    </article>)}</div>
    <BookingRequest open={selected !== null} onOpenChange={open => { if (!open) setSelected(null); }} initialJourneyType={selected?.journeyType} purpose={selected?.title} quick />
  </>;
}
