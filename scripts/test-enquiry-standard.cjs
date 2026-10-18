const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');

const source = fs.readFileSync('lib/booking-summary.ts', 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const loaded = {};
new Function('exports', compiled)(loaded);
const message = loaded.prepareBookingSummary;
const base = { journeyType: 'Local taxi', from: 'OX16 0AA', to: 'Banbury station', date: '2026-10-23', time: '10:30', page: '/local-taxi', source: 'Book a local journey' };
let passed = 0;
function check(name, run) { run(); passed++; console.log(`PASS ${name}`); }

check('Website, page, choice and local service are retained', () => {
  const text = message(base);
  for (const part of ['Source: A1 Cars website', 'Page: /local-taxi', 'Booking choice: Book a local journey', 'Journey: Local taxi']) assert.ok(text.includes(part));
  assert.ok(!text.includes('Airport'));
});
check('Blank pickup cannot silently become Banbury', () => assert.ok(message({ ...base, from: '' }).includes('From: To be confirmed')));
check('Passenger count is optional and absent when omitted', () => assert.ok(!message(base).includes('Passengers:')));
check('Passenger count and luggage are preserved when supplied', () => {
  const text = message({ ...base, passengers: 3, bags: '2 medium cases and a pushchair' });
  assert.ok(text.includes('Passengers: 3'));
  assert.ok(text.includes('Luggage: 2 medium cases and a pushchair'));
});
check('No email or marketing permission is invented', () => assert.ok(!message(base).includes('Email')));
check('Providing email alone does not opt into marketing', () => {
  const text = message({ ...base, email: 'passenger@example.com' });
  assert.ok(text.includes('Email: passenger@example.com'));
  assert.ok(text.includes('Email offers: Not requested.'));
  assert.ok(!text.includes('Yes, I agree'));
});
check('Positive email choice includes exact scope and timestamp', () => {
  const text = message({ ...base, email: 'passenger@example.com', emailOffers: true, consentRecordedAt: '2026-10-18T18:00:00.000Z' });
  assert.ok(text.includes('Yes, I agree to receive A1 Cars Banbury offers and discounts by email.'));
  assert.ok(text.includes('2026-10-18T18:00:00.000Z (2026-10-18-email-offers-v1)'));
});
check('Unchecked choice cannot retain a previous positive timestamp', () => {
  const text = message({ ...base, email: 'passenger@example.com', emailOffers: false, consentRecordedAt: '2026-10-18T18:00:00.000Z' });
  assert.ok(text.includes('Not requested.'));
  assert.ok(!text.includes('Email offers choice recorded'));
});
check('Port context and edited journey remain distinct from airport', () => {
  const text = message({ ...base, journeyType: 'Port & cruise transfer', page: '/port-transfers', to: 'Cruise terminal' });
  assert.ok(text.includes('Journey: Port & cruise transfer'));
  assert.ok(!text.includes('Airport transfer'));
});
check('Access needs and additional stops remain available', () => {
  const text = message({ ...base, accessible: true, needs: 'Step-free pickup', extra: 'Second pickup at a named venue' });
  assert.ok(text.includes('Wheelchair-accessible vehicle requested: Yes'));
  assert.ok(text.includes('Practical pickup / vehicle needs: Step-free pickup'));
  assert.ok(text.includes('Extra stops / notes: Second pickup at a named venue'));
});
check('Readable line breaks and identical channel encoding', () => {
  const text = message({ ...base, email: 'passenger@example.com', extra: 'Gate A & reception' });
  assert.ok(text.split('\n').length > 5);
  const whatsapp = new URL(`https://wa.me/447823642516?text=${encodeURIComponent(text)}`);
  const email = new URL(`mailto:business@a1carsbanbury.co.uk?body=${encodeURIComponent(text)}`);
  assert.equal(whatsapp.searchParams.get('text'), email.searchParams.get('body'));
});
console.log(`${passed} enquiry-standard checks passed. No messages sent.`);
