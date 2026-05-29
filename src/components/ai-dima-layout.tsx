import type { ReactNode } from 'react';
import { LangSwitcher } from '@/components/lang-switcher';

/**
 * Shared chrome for all AI-Dima sub-pages (roadmap, kids, resources, playbook).
 * Hub page (/ai-dima/) has its own layout with complex section nav.
 */
export function AIDimaLayout({
  headerLabel,
  children,
}: {
  /** Element shown between back-link and LangSwitcher */
  headerLabel?: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      {/* ── Sticky nav ── */}
      <header
        style={{
          padding: 'clamp(20px, 3vw, 36px) clamp(24px, 4vw, 48px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'var(--color-bg-deep)',
          borderBottom: '1px solid var(--color-line)',
          position: 'sticky',
          top: 0,
          zIndex: 50,
          backdropFilter: 'blur(12px)',
        }}
      >
        <a href="/ai-dima/" className="mono uppercase link-line" style={{ fontSize: 12, letterSpacing: '0.22em' }}>
          ← AI-Dima
        </a>
        <div style={{ display: 'flex', gap: 'clamp(16px, 2.5vw, 32px)', alignItems: 'center' }}>
          {headerLabel}
          <LangSwitcher current="en" homeOnly />
        </div>
      </header>

      {children}

      {/* ── Operator cross-link ── */}
      <section
        style={{
          padding: 'clamp(36px, 5vh, 52px) clamp(24px, 6vw, 96px)',
          background: 'var(--color-bg-deep)',
          borderTop: '1px solid var(--color-line)',
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '3px 1fr auto',
            gap: 'clamp(20px, 3vw, 36px)',
            alignItems: 'center',
          }}
          className="aidima-op-bridge"
        >
          <div
            style={{
              background: 'var(--color-amber-deep)',
              borderRadius: 2,
              alignSelf: 'stretch',
              minHeight: 40,
            }}
          />
          <div>
            <p className="eyebrow" style={{ margin: '0 0 8px' }}>
              Operator behind this
            </p>
            <p
              style={{
                margin: 0,
                fontSize: 'clamp(14px, 1vw, 15.5px)',
                color: 'var(--color-ink-mute)',
                lineHeight: 1.5,
              }}
            >
              <a href="/" className="link-line" style={{ color: 'var(--color-ink)' }}>
                Dmitriy Zaporozhets
              </a>{' '}
              · 12 years shipping software · Branch Director at IT STEP Academy Jakarta
            </p>
          </div>
          <a
            href="/journey/"
            className="mono uppercase link-line"
            style={{ fontSize: 11, letterSpacing: '0.2em', color: 'var(--color-amber)', flexShrink: 0 }}
          >
            See the full journey →
          </a>
        </div>
      </section>

      {/* ── Copyright footer ── */}
      <footer
        style={{
          padding: 'clamp(32px, 4vh, 44px) clamp(24px, 6vw, 96px)',
          background: 'var(--color-bg-deep)',
          borderTop: '1px solid var(--color-line)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 20,
        }}
      >
        <a href="/ai-dima/" className="mono uppercase link-line" style={{ fontSize: 12, letterSpacing: '0.22em' }}>
          ← AI-Dima
        </a>
        <span className="mono" style={{ fontSize: 11, letterSpacing: '0.18em', color: 'var(--color-ink-ghost)' }}>
          © {new Date().getFullYear()} · AI-Dima · Jakarta (ID) → Asia → the world
        </span>
      </footer>

      {/* ── Shared sub-page CSS ── */}
      <style>{`
        @media (max-width: 640px) {
          .ai-dima-header-label { display: none; }
        }
        @media (max-width: 700px) {
          .aidima-op-bridge {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }
          .aidima-op-bridge > div:first-child { display: none; }
          .aidima-op-bridge > a { align-self: flex-start; }
        }
      `}</style>
    </>
  );
}

/** Plain mono text label used in roadmap, resources, playbook headers */
export function AIDimaHeaderLabel({
  children,
  color = 'var(--color-ink-faint)',
}: {
  children: ReactNode;
  color?: string;
}) {
  return (
    <span className="mono uppercase ai-dima-header-label" style={{ fontSize: 11, letterSpacing: '0.22em', color }}>
      {children}
    </span>
  );
}

/** Rounded pill badge used in kids page header */
export function AIDimaHeaderBadge({
  children,
  color = 'var(--color-mint)',
  bg = 'oklch(65% 0.20 160 / 0.12)',
}: {
  children: ReactNode;
  color?: string;
  bg?: string;
}) {
  return (
    <span
      className="mono uppercase ai-dima-header-label"
      style={{
        display: 'inline-block',
        padding: '4px 12px',
        background: bg,
        border: `1px solid ${color}`,
        borderRadius: 999,
        fontSize: 10,
        letterSpacing: '0.22em',
        color,
        fontWeight: 700,
      }}
    >
      {children}
    </span>
  );
}
