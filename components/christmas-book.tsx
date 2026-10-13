'use client';
import { useState } from 'react';
import { BookingRequest } from '@/components/booking-request';

// Same pill buttons as the rest of the site; opens the existing booking flow.
export function ChristmasBookButton({ label = 'Reserve a Christmas journey', className = 'button primary' }: { label?: string; className?: string }) {
  const [open, setOpen] = useState(false);
  return <>
    <button type="button" className={className} onClick={() => setOpen(true)}>{label} <span>↗</span></button>
    <BookingRequest open={open} onOpenChange={setOpen} initialJourneyType="Local" purpose="Christmas journey" quick />
  </>;
}
