'use client';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

export function PhotoSlider({ images, className = '', label = 'Journey photographs' }: { images: string[]; className?: string; label?: string }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [hidden, setHidden] = useState(false);
  const [interacting, setInteracting] = useState(false);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setReducedMotion(media.matches);
    const updateVisibility = () => setHidden(document.hidden);
    updateMotion(); updateVisibility();
    media.addEventListener('change', updateMotion);
    document.addEventListener('visibilitychange', updateVisibility);
    return () => { media.removeEventListener('change', updateMotion); document.removeEventListener('visibilitychange', updateVisibility); };
  }, []);
  useEffect(() => {
    if (paused || reducedMotion || hidden || interacting || images.length < 2) return;
    const timer = window.setInterval(() => setIndex(current => (current + 1) % images.length), 5000);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion, hidden, interacting, images.length, index]);
  const choose = (next: number) => setIndex((next + images.length) % images.length);
  return <div className={`photo-slider ${className}`} role="region" aria-roledescription="carousel" aria-label={label} onMouseEnter={() => setInteracting(true)} onMouseLeave={() => setInteracting(false)} onFocusCapture={() => setInteracting(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setInteracting(false); }}>
    <div className="photo-slides" aria-hidden="true">{images.map((src, slide) => <img key={src} src={src} alt="" className={slide === index ? 'photo-slide active' : 'photo-slide'} fetchPriority={slide === 0 ? 'high' : 'auto'} />)}</div>
    {images.length > 1 && <div className="photo-controls"><button type="button" onClick={() => choose(index - 1)} aria-label="Previous photograph"><ChevronLeft aria-hidden="true" /></button><div className="photo-dots">{images.map((src, slide) => <button key={src} type="button" className={slide === index ? 'active' : ''} aria-label={`Show photograph ${slide + 1}`} aria-pressed={slide === index} onClick={() => choose(slide)} />)}</div><button type="button" onClick={() => choose(index + 1)} aria-label="Next photograph"><ChevronRight aria-hidden="true" /></button>{!reducedMotion && <button type="button" onClick={() => setPaused(current => !current)} aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}>{paused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}</button>}<span className="sr-only" aria-live={paused || reducedMotion || interacting ? 'polite' : 'off'}>Photograph {index + 1} of {images.length}</span></div>}
  </div>;
}
