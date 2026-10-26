'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { GA_ID } from '@/lib/site';

declare global {
  interface Window { gtag?: (...args: unknown[]) => void }
}

// GA4 in Google consent mode: analytics storage (cookies) is denied until a visitor taps Accept.
// While denied, GA4 sends anonymous, cookieless pings only. Ads storage stays denied.
const init = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;
var c='denied';try{if(localStorage.getItem('a1-consent')==='granted')c='granted';}catch(e){}
gtag('consent','default',{analytics_storage:c,ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
gtag('js',new Date());gtag('config','${GA_ID}');
window.dispatchEvent(new Event('a1-analytics-ready'));`;

// Fires a GA4 event whenever a visitor taps a call, WhatsApp or email link (the real conversions).
export function Analytics() {
  // Local and Vercel review hosts must not pollute A1's live GA4 property.
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    setEnabled(process.env.NEXT_PUBLIC_LOCAL_PREVIEW !== '1' && !window.location.hostname.endsWith('.vercel.app'));
  }, []);
  useEffect(() => {
    if (!enabled) return;
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.('a[href]');
      if (!link || !window.gtag) return;
      const href = link.getAttribute('href') ?? '';
      const kind = href.startsWith('tel:') ? 'call' : href.includes('wa.me') ? 'whatsapp' : href.startsWith('mailto:') ? 'email' : null;
      if (kind) window.gtag('event', 'contact_click', { contact_method: kind, link_url: href.split('?')[0], page_path: window.location.pathname });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [enabled]);

  if (!enabled) return null;
  return <>
    <Script id="ga4-init" strategy="afterInteractive">{init}</Script>
    <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
  </>;
}
