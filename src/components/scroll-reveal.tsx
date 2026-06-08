'use client';
import { useEffect } from 'react';

/**
 * Global scroll-reveal controller.
 *
 * FIX (impeccable): elements must be visible by default so SEO crawlers,
 * headless renderers, and paused background tabs always see content.
 *
 * Strategy:
 *  1. IntersectionObserver marks in-viewport elements "visible" first.
 *  2. One rAF tick later we add `body.motion-ok` — CSS then hides only the
 *     off-screen ones (they haven't been marked yet).
 *  3. A persistent IO + MutationObserver reveals remaining elements on scroll.
 *
 * Skipped entirely on prefers-reduced-motion (elements stay visible).
 */
export function ScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Step 1 — Snapshot which elements are already in the viewport.
    const snapshot = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.reveal = 'visible';
          }
        }
      },
      { threshold: 0.01 },
    );
    document.querySelectorAll('[data-reveal]').forEach((el) => snapshot.observe(el));

    // Step 2 — Enable the CSS hiding one frame after the snapshot has fired.
    let rafId = requestAnimationFrame(() => {
      rafId = requestAnimationFrame(() => {
        snapshot.disconnect();
        document.body.classList.add('motion-ok');

        // Step 3 — Persistent observer for off-screen elements.
        const io = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                (entry.target as HTMLElement).dataset.reveal = 'visible';
                io.unobserve(entry.target);
              }
            }
          },
          { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
        );

        const observeAll = () => {
          document
            .querySelectorAll('[data-reveal]:not([data-reveal="visible"])')
            .forEach((el) => io.observe(el));
        };

        observeAll();

        // Watch for dynamically added elements (route changes, lazy sections).
        const mo = new MutationObserver(observeAll);
        mo.observe(document.body, { childList: true, subtree: true });

        // Cleanup stored on window so the outer useEffect return can reach it.
        (window as Window & { _srCleanup?: () => void })._srCleanup = () => {
          io.disconnect();
          mo.disconnect();
        };
      });
    });

    return () => {
      cancelAnimationFrame(rafId);
      snapshot.disconnect();
      document.body.classList.remove('motion-ok');
      const cleanup = (window as Window & { _srCleanup?: () => void })._srCleanup;
      cleanup?.();
    };
  }, []);

  return null;
}
