import { notFound } from 'next/navigation';
import { PageShell, Section } from '@/components/page-shell';
import { EnquiryForm } from '@/components/booking-request';
import { AirportLinks } from '@/components/airport-links';
import { airports } from '@/lib/airports';
import { pageMeta } from '@/lib/seo';
import { site } from '@/lib/site';

export function generateStaticParams() { return airports.map(airport => ({ airport: airport.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ airport: string }> }) {
  const { airport: slug } = await params;
  const airport = airports.find(item => item.slug === slug);
  if (!airport) return {};
  return pageMeta({ title: `Banbury to ${airport.name} Airport Transfers`, description: `${airport.lead} Private hire from Banbury and the surrounding area. Request a quote for ${airport.name} airport travel, with availability and price confirmed by A1 Cars Banbury.`, path: `/${slug}` });
}
export default async function AirportPage({ params }: { params: Promise<{ airport: string }> }) {
  const { airport: slug } = await params;
  const airport = airports.find(item => item.slug === slug);
  if (!airport) notFound();
  return <PageShell footerActions={false}><section className="airport-enquiry-layout"><div className="airport-story"><a className="airport-back" href="/airport-transfers">All airport transfers</a><h1>Banbury to<br />{airport.name}.</h1><p className="airport-lead">{airport.lead}</p><img src="/revision-airport-arrival.webp" alt="Illustrative A1 Cars airport transfer" /><h2>Plan your {airport.name} transfer</h2><p>{airport.detail}</p><p>{airport.note}</p><p>Open 24/7. Pickups in Banbury and the surrounding area, with airport collections bringing you back. Price, availability, meeting point and a suitable vehicle are confirmed before booking.</p><a className="airport-call" href={site.phoneHref}>Call {site.phone}</a></div><div className="airport-inline-form"><EnquiryForm initialJourneyType="Airport" airport={`${airport.name} (${airport.code})`} source={`${airport.name} airport page`} /><p className="airport-form-tip">{airport.prompt}</p></div></section><Section title="Another airport?"><AirportLinks /></Section></PageShell>;
}
