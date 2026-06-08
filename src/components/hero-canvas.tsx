'use client';
import { useEffect, useRef } from 'react';

/** Approximate sRGB values for CSS token oklch(82% 0.18 70) and oklch(78% 0.14 165) */
const AMBER = [232, 168, 75] as const;
const MINT = [100, 195, 160] as const;

const N = 55;
const MAX_D = 130;
const SPEED = 0.28;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  col: typeof AMBER | typeof MINT;
}

/**
 * Canvas particle-network background for the hero section.
 * Signals AI / neural-network aesthetic without any library dependency.
 * Pauses when off-screen. Respects prefers-reduced-motion.
 */
export function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio ?? 1, 2);

    let w = 0;
    let h = 0;
    let pts: Particle[] = [];
    let raf = 0;
    let paused = false;

    const init = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
      const speed = reduced ? 0 : SPEED;
      pts = Array.from({ length: N }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        col: Math.random() > 0.72 ? MINT : AMBER,
      }));
    };

    const frame = () => {
      if (paused) return;
      ctx.clearRect(0, 0, w, h);

      if (!reduced) {
        for (const p of pts) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
        }
      }

      // Lines between close particles
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_D) {
            const alpha = (1 - d / MAX_D) * 0.14;
            const [r, g, b] = pts[i].col;
            ctx.strokeStyle = `rgba(${r},${g},${b},${alpha.toFixed(3)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }

      // Dots
      for (const p of pts) {
        const [r, g, b] = p.col;
        ctx.fillStyle = `rgba(${r},${g},${b},0.3)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduced) raf = requestAnimationFrame(frame);
    };

    // Pause when off-screen (visibility API)
    const onVisibility = () => {
      paused = document.visibilityState === 'hidden';
      if (!paused && !reduced) raf = requestAnimationFrame(frame);
    };
    document.addEventListener('visibilitychange', onVisibility);

    const ro = new ResizeObserver(init);
    ro.observe(canvas.parentElement ?? canvas);
    init();
    raf = requestAnimationFrame(frame);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(raf);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity: 0.55,
      }}
    />
  );
}
