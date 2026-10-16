'use client';

import { useEffect } from 'react';

// Review aid: adding ?xmas=heavy to any URL shows the heavier Christmas look before its start date.
// Visitors without the parameter get exactly what the date rules in lib/season.ts decide.
export function XmasPreview() {
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get('xmas') === 'heavy') document.body.classList.add('xmas', 'xmas-heavy');
  }, []);
  return null;
}
