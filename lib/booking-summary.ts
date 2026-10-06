export type BookingSummaryInput = {
  journeyType: string; vehicle?: string; purpose?: string; from: string; to: string;
  date: string; time: string; passengers?: string | number; bags?: string;
  accessible?: boolean; needs?: string;
};

// Pure preparation only: this helper never sends or navigates anywhere.
export function prepareBookingSummary(input: BookingSummaryInput) {
  const parsedDate = new Date(`${input.date}T12:00:00`);
  const date = Number.isNaN(parsedDate.getTime()) ? 'To be confirmed' : new Intl.DateTimeFormat('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }).format(parsedDate);
  return [
    "Hi A1 Cars, I'd like to book:",
    `• Journey: ${input.journeyType === 'Airport' ? 'Airport transfer' : input.journeyType}`,
    input.purpose ? `• Journey purpose: ${input.purpose}` : '',
    input.vehicle ? `• Vehicle preference: ${input.vehicle}` : '',
    `• From: ${input.from.trim() || 'To be confirmed'}`,
    `• To: ${input.to.trim() || 'To be confirmed'}`,
    `• Date: ${date}`, `• Time: ${input.time || 'To be confirmed'}`,
    input.passengers ? `• Passengers: ${input.passengers}` : '',
    input.bags?.trim() ? `• Luggage: ${input.bags.trim()}` : '',
    input.accessible ? '• Wheelchair-accessible vehicle requested: Yes — please confirm arrangements' : '',
    input.accessible && input.needs?.trim() ? `• Practical pickup / vehicle needs: ${input.needs.trim()}` : '',
  ].filter(Boolean).join('\n');
}
