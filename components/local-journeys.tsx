'use client';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { Accessibility, ArrowUpRight, Hospital, Moon, ShoppingBag, TrainFront } from 'lucide-react';
import { BookingRequest } from '@/components/booking-request';
import { StickyActions } from '@/components/site-chrome';
import { site } from '@/lib/site';

type LocalRequest = { purpose?: string; accessible?: boolean };
const LocalBookingContext = createContext<((request?: LocalRequest) => void) | null>(null);
function useLocalBooking() {
  const open = useContext(LocalBookingContext);
  if (!open) throw new Error('Local booking controls require LocalJourneyBooking');
  return open;
}
export function LocalJourneyBooking({ children }: { children: React.ReactNode }) {
  const [request, setRequest] = useState<LocalRequest | null>(null);
  return <LocalBookingContext.Provider value={options => setRequest(options ?? {})}>{children}<BookingRequest open={request !== null} onOpenChange={open => !open && setRequest(null)} initialJourneyType="Local" purpose={request?.purpose} initiallyAccessible={request?.accessible} quick /></LocalBookingContext.Provider>;
}
export function LocalHeroActions() {
  const open = useLocalBooking();
  return <div className="hero-actions local-hero-actions"><button type="button" className="button primary" onClick={() => open()}>Book a local journey <ArrowUpRight aria-hidden="true" /></button><a className="button quiet" href={site.phoneHref}>Call {site.phone}</a></div>;
}
export function LocalStickyActions() {
  const open = useLocalBooking();
  return <StickyActions onBook={() => open()} />;
}
const journeys = [
  { purpose: 'Station pickup', copy: 'To or from Banbury station, planned around your train.', Icon: TrainFront },
  { purpose: 'Hospital & appointments', copy: 'Arrange a pickup for your appointment and the journey home.', Icon: Hospital },
  { purpose: 'School runs & shopping', copy: 'Practical everyday trips, arranged around your plans.', Icon: ShoppingBag },
  { purpose: 'Nights out', copy: 'Book the journey there and plan a pickup to bring you home.', Icon: Moon },
  { purpose: 'Wheelchair-accessible journey', copy: 'Request a suitable vehicle and discuss practical pickup needs.', Icon: Accessibility, accessible: true },
];
export function LocalJourneyOptions() {
  const open = useLocalBooking();
  return <div className="local-journey-grid">{journeys.map(({ purpose, copy, Icon, accessible }) => <button type="button" className={accessible ? 'local-journey-card accessible' : 'local-journey-card'} key={purpose} onClick={() => open({ purpose, accessible })}><span className="local-journey-icon"><Icon aria-hidden="true" strokeWidth={1.5} /></span><span className="local-journey-title">{purpose}</span><span className="local-journey-copy">{copy}</span><span className="local-journey-action">Book this journey <ArrowUpRight aria-hidden="true" /></span></button>)}</div>;
}
export function LocalAccessibleAction() {
  const open = useLocalBooking();
  return <button type="button" className="underlined-link local-accessible-action" onClick={() => open({ purpose: 'Wheelchair-accessible journey', accessible: true })}>Request an accessible journey <span>↗</span></button>;
}
const bookingSteps = [
  ['Enter details', 'Choose your pickup, destination, date and time.'],
  ['Send request', 'Send the prepared request on WhatsApp or email.'],
  ['Team confirms', 'Our team confirms the vehicle and arrangements.'],
];
export function LocalBookingGuide() {
  const target = useRef<HTMLOListElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) { setVisible(true); return; }
    const observer = new IntersectionObserver(entries => { if (entries.some(entry => entry.isIntersecting)) { setVisible(true); observer.disconnect(); } }, { threshold: .25 });
    if (target.current) observer.observe(target.current);
    return () => observer.disconnect();
  }, []);
  return <div className="local-booking-guide"><p className="booking-guide-caption">How to book — a simple guide</p><ol ref={target} className={visible ? 'booking-guide-steps active' : 'booking-guide-steps'}>{bookingSteps.map(([title, copy], index) => <li key={title} style={{ '--step': index } as React.CSSProperties}><span className="booking-step-number">{index + 1}</span><h3>{title}</h3><p>{copy}</p></li>)}</ol><p className="booking-guide-note">This explains the booking steps. Sending a request does not confirm a booking.</p></div>;
}
