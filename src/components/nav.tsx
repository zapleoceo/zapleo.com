'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { isLocale, type Locale } from '@/i18n/config';
import { getDict } from '@/i18n/dict';
import { LangSwitcher } from './lang-switcher';

/** Home paths where the nav starts hidden and appears on scroll. */
function isHomePath(p: string) {
  return p === '/' || /^\/(uk|ru|id)\/?$/.test(p);
}

/**
 * Global sticky navigation.
 *
 * Behavior:
 *   - Homepage: hidden until scrollY > 80, then slides down with glass bg.
 *   - All other pages: always visible.
 *   - Mobile: links collapse behind a hamburger (shown at ≤768 px).
 */
export function Nav() {
  const pathname = usePathname() ?? '/';
  const onHome = isHomePath(pathname);

  // Infer locale from URL prefix
  const segments = pathname.split('/').filter(Boolean);
  const locale: Locale = (segments.length > 0 && isLocale(segments[0]) ? segments[0] : 'en') as Locale;
  const base = locale === 'en' ? '' : `/${locale}`;
  const t = getDict(locale);

  const [visible, setVisible] = useState(!onHome);
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Scroll-triggered reveal (homepage only)
  useEffect(() => {
    if (!onHome) {
      setVisible(true);
      return;
    }
    const check = () => setVisible(window.scrollY > 80);
    window.addEventListener('scroll', check, { passive: true });
    check();
    return () => window.removeEventListener('scroll', check);
  }, [onHome]);

  // Close drawer on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  // Close on route change
  useEffect(() => setOpen(false), [pathname]);

  const links: [string, string][] = [
    [t.nav.work, `${base}/work/`],
    [t.nav.journey, `${base}/journey/`],
    [t.nav.now, `${base}/now/`],
    [t.nav.journal, `${base}/journal/`],
    [t.nav.contact, `${base}/contact/`],
  ];

  return (
    <nav
      aria-label="Main navigation"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 56,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        padding: '0 clamp(24px, 6vw, 96px)',
        justifyContent: 'space-between',
        background: visible ? 'oklch(14% 0.02 60 / 0.9)' : 'transparent',
        backdropFilter: visible ? 'blur(28px) saturate(160%)' : 'none',
        WebkitBackdropFilter: visible ? 'blur(28px) saturate(160%)' : 'none',
        borderBottom: visible ? '1px solid var(--color-line)' : '1px solid transparent',
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        transition:
          'transform 420ms var(--ease-out-cinema), background 300ms, border-color 300ms, backdrop-filter 300ms',
        pointerEvents: visible ? 'auto' : 'none',
        willChange: 'transform',
      }}
    >
      {/* Brand mark */}
      <a
        href={base || '/'}
        className="mono uppercase"
        style={{ fontSize: 12, letterSpacing: '0.22em', color: 'var(--color-ink)', textDecoration: 'none', flexShrink: 0 }}
      >
        zapleo
      </a>

      {/* Desktop links */}
      <div
        className="nav-desktop"
        style={{ display: 'flex', gap: 'clamp(20px, 3vw, 40px)', alignItems: 'center' }}
      >
        {links.map(([label, href]) => (
          <a
            key={href}
            href={href}
            className="mono uppercase link-line"
            style={{
              fontSize: 11,
              letterSpacing: '0.16em',
              color: pathname.startsWith(href) ? 'var(--color-ink)' : 'var(--color-ink-mute)',
            }}
          >
            {label}
          </a>
        ))}
      </div>

      {/* Right cluster */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexShrink: 0 }}>
        <LangSwitcher current={locale} />

        {/* Hamburger (mobile) */}
        <button
          className="nav-burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            padding: '6px',
            cursor: 'pointer',
            color: 'var(--color-ink)',
            lineHeight: 1,
          }}
        >
          <span
            aria-hidden
            style={{
              display: 'block',
              width: 18,
              height: 12,
              position: 'relative',
              transition: 'all 300ms var(--ease-out-cinema)',
            }}
          >
            <span
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                height: 1,
                background: 'currentColor',
                top: open ? '50%' : 0,
                transform: open ? 'rotate(45deg)' : 'none',
                transition: 'top 250ms, transform 250ms 120ms',
              }}
            />
            <span
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                height: 1,
                background: 'currentColor',
                top: '50%',
                opacity: open ? 0 : 1,
                transition: 'opacity 200ms',
              }}
            />
            <span
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                height: 1,
                background: 'currentColor',
                top: open ? '50%' : '100%',
                transform: open ? 'rotate(-45deg)' : 'none',
                transition: 'top 250ms, transform 250ms 120ms',
              }}
            />
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        ref={drawerRef}
        style={{
          position: 'absolute',
          top: 56,
          left: 0,
          right: 0,
          background: 'oklch(14% 0.02 60 / 0.97)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          borderBottom: '1px solid var(--color-line)',
          padding: open ? 'clamp(20px, 3vh, 32px) clamp(24px, 6vw, 96px) clamp(24px, 4vh, 40px)' : '0 clamp(24px, 6vw, 96px)',
          display: 'grid',
          gap: 20,
          maxHeight: open ? '80vh' : 0,
          overflow: 'hidden',
          transition: 'max-height 400ms var(--ease-out-cinema), padding 400ms var(--ease-out-cinema)',
          pointerEvents: open ? 'auto' : 'none',
        }}
        aria-hidden={!open}
      >
        {links.map(([label, href]) => (
          <a
            key={href}
            href={href}
            onClick={() => setOpen(false)}
            className="mono uppercase"
            style={{ fontSize: 15, letterSpacing: '0.18em', color: 'var(--color-ink)', textDecoration: 'none' }}
          >
            {label}
          </a>
        ))}
        <a
          href={`${base}/ai-dima/`}
          onClick={() => setOpen(false)}
          className="mono uppercase"
          style={{ fontSize: 15, letterSpacing: '0.18em', color: 'var(--color-amber)', textDecoration: 'none', marginTop: 4 }}
        >
          {t.nav.aiDima}
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
