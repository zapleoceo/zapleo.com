'use client';
import { useEffect, useRef } from 'react';

/**
 * Enhanced cursor: inner dot + outer ring.
 * Ring expands on interactive element hover, signaling clickability.
 * Pure rAF lerp — no GSAP dependency.
 * Auto-disabled on touch devices and prefers-reduced-motion.
 */
export function CursorDot() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let dx = mx, dy = my;
    let rx = mx, ry = my;
    let raf = 0;
    let hovering = false;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    };

    const onLeave = () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };

    const onEnterInteractive = () => {
      hovering = true;
    };
    const onLeaveInteractive = () => {
      hovering = false;
    };

    // Watch links, buttons, and interactive elements for ring expansion
    const registerInteractives = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
        el.addEventListener('mouseenter', onEnterInteractive);
        el.addEventListener('mouseleave', onLeaveInteractive);
      });
    };
    registerInteractives();
    const mo = new MutationObserver(registerInteractives);
    mo.observe(document.body, { childList: true, subtree: true });

    const tick = () => {
      // Dot tracks tightly
      dx += (mx - dx) * 0.22;
      dy += (my - dy) * 0.22;
      dot.style.transform = `translate3d(${dx - 3}px, ${dy - 3}px, 0)`;

      // Ring follows with more lag
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      const size = hovering ? 32 : 18;
      ring.style.transform = `translate3d(${rx - size / 2}px, ${ry - size / 2}px, 0)`;
      ring.style.width = `${size}px`;
      ring.style.height = `${size}px`;

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
      mo.disconnect();
    };
  }, []);

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: 'var(--color-ink)',
          mixBlendMode: 'difference',
          pointerEvents: 'none',
          zIndex: 'var(--z-cursor)' as string,
          opacity: 0,
          willChange: 'transform',
        }}
      />
      {/* Outer ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 18,
          height: 18,
          borderRadius: '50%',
          border: '1px solid var(--color-ink)',
          mixBlendMode: 'difference',
          pointerEvents: 'none',
          zIndex: 'var(--z-cursor)' as string,
          opacity: 0,
          transition: 'width 280ms var(--ease-out-cinema), height 280ms var(--ease-out-cinema)',
          willChange: 'transform, width, height',
        }}
      />
    </>
  );
}
