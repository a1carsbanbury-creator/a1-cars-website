export type BookingSummaryInput = {
  journeyType: string; vehicle?: string; purpose?: string; from: string; to: string;
  date: string; time: string; passengers?: string | number; bags?: string;
  accessible?: boolean; needs?: string;
  page?: string; source?: string; flight?: string; extra?: string; returnDate?: string; returnTime?: string;
  email?: string; emailOffers?: boolean; consentRecordedAt?: string;
};

// Pure preparation only: this helper never sends or navigates anywhere.
export function prepareBookingSummary(input: BookingSummaryInput) {
  const parsedDate = new Date(`${input.date}T12:00:00`);
  const date = Number.isNaN(parsedDate.getTime()) ? 'To be confirmed' : new Intl.DateTimeFormat('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }).format(parsedDate);
  return [
    "Hi A1 Cars, I'd like to book:",
    'Source: A1 Cars website',
    input.page ? `Page: ${input.page}` : '',
    input.source ? `Booking choice: ${input.source}` : '',
    `• Journey: ${input.journeyType === 'Airport' ? 'Airport transfer' : input.journeyType}`,
    input.purpose ? `• Journey purpose: ${input.purpose}` : '',
    input.vehicle ? `• Vehicle preference: ${input.vehicle}` : '',
    `• From: ${input.from.trim() || 'To be confirmed'}`,
    `• To: ${input.to.trim() || 'To be confirmed'}`,
    `• Date: ${date}`, `• Time: ${input.time || 'To be confirmed'}`,
    input.passengers ? `• Passengers: ${input.passengers}` : '',
    input.bags?.trim() ? `• Luggage: ${input.bags.trim()}` : '',
    input.email?.trim() ? `• Email: ${input.email.trim()}` : '',
    input.email?.trim() ? `• Email offers: ${input.emailOffers ? 'Yes, I agree to receive A1 Cars Banbury offers and discounts by email.' : 'Not requested.'}` : '',
    input.email?.trim() && input.emailOffers && input.consentRecordedAt ? `• Email offers choice recorded: ${input.consentRecordedAt} (2026-10-18-email-offers-v1)` : '',
    input.flight?.trim() ? `• Flight / terminal: ${input.flight.trim()}` : '',
    input.extra?.trim() ? `• Extra stops / notes: ${input.extra.trim()}` : '',
    input.returnDate ? `• Return: ${input.returnDate} at ${input.returnTime}; from ${input.to.trim()} to ${input.from.trim()}` : '',
    input.accessible ? '• Wheelchair-accessible vehicle requested: Yes; please confirm arrangements' : '',
    input.accessible && input.needs?.trim() ? `• Practical pickup / vehicle needs: ${input.needs.trim()}` : '',
  ].filter(Boolean).join('\n');
}
