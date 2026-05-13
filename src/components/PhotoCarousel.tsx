'use client';

import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

interface Slide {
  src: string;
  caption?: string;
}

interface Props {
  slides: Slide[];
  height?: number;
}

export default function PhotoCarousel({ slides, height = 480 }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [current, setCurrent] = useState(0);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    setCurrent(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    setCurrent(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollTo = useCallback((i: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(i);
    setCurrent(i);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => {
      emblaApi.scrollNext();
      setCurrent(emblaApi.selectedScrollSnap());
    }, 5000);
    return () => clearInterval(id);
  }, [emblaApi]);

  const btnStyle = (side: 'left' | 'right'): React.CSSProperties => ({
    position: 'absolute',
    top: '50%',
    [side]: '1rem',
    transform: 'translateY(-50%)',
    zIndex: 2,
    background: 'rgba(0,0,0,0.45)',
    border: 'none',
    borderRadius: '50%',
    width: 44,
    height: 44,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: 'white',
    fontSize: '1.2rem',
    backdropFilter: 'blur(4px)',
  });

  return (
    <div style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 4px 32px rgba(0,0,0,0.18)', position: 'relative' }}>
      <div ref={emblaRef} style={{ overflow: 'hidden' }}>
        <div style={{ display: 'flex' }}>
          {slides.map(({ src, caption }, i) => (
            <div key={i} style={{ flex: '0 0 100%', minWidth: 0, position: 'relative', height }}>
              <div style={{
                position: 'absolute', inset: 0, backgroundColor: '#1e293b',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
              }}>
                <span style={{ fontSize: '3rem' }}>📷</span>
                <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>Add photo: {src}</span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={caption ?? `Slide ${i + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'relative', zIndex: 1 }}
              />
              {caption && (
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2,
                  padding: '2.5rem 1.5rem 1.25rem',
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  color: 'white', fontWeight: 600, fontSize: '1rem', fontFamily: 'Georgia, serif',
                }}>
                  {caption}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next */}
      <button onClick={scrollPrev} style={btnStyle('left')} aria-label="Previous">‹</button>
      <button onClick={scrollNext} style={btnStyle('right')} aria-label="Next">›</button>

      {/* Dots */}
      <div style={{ position: 'absolute', bottom: '1rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.4rem', zIndex: 2 }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: 10, height: 10, borderRadius: '50%', border: 'none', cursor: 'pointer', padding: 0,
              backgroundColor: i === current ? 'white' : 'rgba(255,255,255,0.4)',
              transition: 'background 0.2s',
            }}
          />
        ))}
      </div>
    </div>
  );
}
