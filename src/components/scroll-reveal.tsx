'use client';

import { useEffect } from 'react';

/**
 * Global IntersectionObserver — toggles [data-reveal="visible"] on elements
 * marked with `data-reveal`. CSS handles the actual fade+rise.
 * Mounted once at root, observes everything matching the selector.
 */
export function ScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // skip animation, immediately reveal
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        (el as HTMLElement).dataset.reveal = 'visible';
      });
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.reveal = 'visible';
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    );

    const observeAll = () => {
      document
        .querySelectorAll('[data-reveal]:not([data-reveal="visible"])')
        .forEach((el) => io.observe(el));
    };

    observeAll();

    // re-scan when route changes
    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
