'use client';

import { useEffect, useState } from 'react';

const KEY = 'a1-consent';

function stored(): 'granted' | 'denied' | null {
  try {
    const v = window.localStorage.getItem(KEY);
    return v === 'granted' || v === 'denied' ? v : null;
  } catch {
    return null;
  }
}

// A small corner notice. It never blocks the page. Ignoring it = analytics stay cookieless (consent mode: denied).
export function ConsentNotice() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let timer: number | undefined;
    if (stored() === null) timer = window.setTimeout(() => setOpen(true), 2500);
    const reopen = (event: Event) => {
      const link = (event.target as Element | null)?.closest?.('[data-cookie-settings]');
      if (link) { event.preventDefault(); setOpen(true); }
    };
    document.addEventListener('click', reopen);
    return () => { window.clearTimeout(timer); document.removeEventListener('click', reopen); };
  }, []);

  const choose = (value: 'granted' | 'denied') => {
    try { window.localStorage.setItem(KEY, value); } catch { /* private mode: choice lasts for this visit only */ }
    window.gtag?.('consent', 'update', { analytics_storage: value });
    setOpen(false);
  };

  if (!open) return null;
  return <aside className="consent" role="region" aria-label="Cookie notice">
    <p>We use a cookie to count visits. Decline and we still count anonymously, with no cookie. <a href="/privacy">Privacy</a></p>
    <div><button type="button" className="consent-yes" onClick={() => choose('granted')}>Accept</button><button type="button" className="consent-no" onClick={() => choose('denied')}>No thanks</button></div>
  </aside>;
}
