import type { Locale } from '@/i18n/config';
import { getDict } from '@/i18n/dict';

export function TrustedStrip({ locale }: { locale: Locale }) {
  const t = getDict(locale).trusted;

  return (
    <section
      style={{
        position: 'relative',
        padding: 'clamp(80px, 12vh, 140px) clamp(24px, 6vw, 96px)',
        background: 'var(--color-bg-elevated)',
        borderTop: '1px solid var(--color-line)',
        borderBottom: '1px solid var(--color-line)',
      }}
    >
      <p className="eyebrow" data-reveal style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vh, 72px)' }}>
        {t.eyebrow}
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 'clamp(32px, 4vw, 64px)',
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        {t.stats.map((s, i) => (
          <div
            key={s.label}
            data-reveal
            style={
              {
                '--stagger': `${i * 80}ms`,
                textAlign: 'center',
                position: 'relative',
              } as React.CSSProperties
            }
          >
            <div
              className="display"
              style={{
                fontSize: 'clamp(56px, 9vw, 120px)',
                fontWeight: 280,
                fontVariationSettings: '"SOFT" 100, "opsz" 144',
                color: 'var(--color-amber)',
                lineHeight: 0.9,
                letterSpacing: '-0.04em',
              }}
            >
              {s.value}
            </div>
            <div
              className="mono uppercase"
              style={{
                marginTop: 18,
                fontSize: 11,
                letterSpacing: '0.22em',
                color: 'var(--color-ink-mute)',
              }}
            >
              {s.unit && <span style={{ marginRight: 6 }}>{s.unit}</span>}
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <div
        data-reveal
        style={
          {
            '--stagger': '400ms',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px 24px',
            justifyContent: 'center',
            maxWidth: 920,
            margin: 'clamp(64px, 10vh, 120px) auto 0',
          } as React.CSSProperties
        }
      >
        {t.industries.map((ind) => (
          <span
            key={ind}
            className="mono uppercase"
            style={{
              fontSize: 11,
              letterSpacing: '0.18em',
              padding: '8px 16px',
              border: '1px solid var(--color-line-bright)',
              borderRadius: 999,
              color: 'var(--color-ink-mute)',
            }}
          >
            {ind}
          </span>
        ))}
      </div>

      <p
        data-reveal
        className="marginalia"
        style={
          {
            '--stagger': '500ms',
            textAlign: 'center',
            marginTop: 56,
            maxWidth: '54ch',
            marginInline: 'auto',
            fontStyle: 'italic',
          } as React.CSSProperties
        }
      >
        * {t.footnote}{' '}
        <a className="link-line" href="https://github.com/zapleo" style={{ color: 'var(--color-ink-mute)' }}>
          github.com/zapleo
        </a>{' '}
        ·{' '}
        <a className="link-line" href="https://www.linkedin.com/company/zapleo" style={{ color: 'var(--color-ink-mute)' }}>
          linkedin/company/zapleo
        </a>
      </p>
    </section>
  );
}
