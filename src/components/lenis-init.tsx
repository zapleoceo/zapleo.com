'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';

/** Global smooth-scroll initializer. Skips on reduced-motion or touch-only devices. */
export function LenisInit() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    let raf = 0;
    function tick(time: number) {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
