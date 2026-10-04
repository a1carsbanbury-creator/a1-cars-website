'use client';

import { useEffect } from 'react';

// Scroll-reveal: anything with class "reveal" fades up once when it enters the screen.
// Content stays visible without JavaScript; the hidden state only applies after "motion-ready" is set.
export function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const items = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    const seen = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          seen.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    items.forEach((el) => seen.observe(el));
    root.classList.add('motion-ready');
    return () => seen.disconnect();
  }, []);
  return null;
}
