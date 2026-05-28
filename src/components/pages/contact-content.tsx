import { PageShell } from '@/components/page-shell';
import { getDict } from '@/i18n/dict';
import type { Locale } from '@/i18n/config';

// Static hrefs and primary flag — not locale-specific
const CHANNEL_META = [
  { href: 'mailto:dima@zapleo.com', primary: true },
  { href: 'https://t.me/zapleosoft', primary: false },
  { href: 'https://wa.me/380994811889', primary: false },
  { href: 'https://www.linkedin.com/in/dmitriy-zaporozhets-83b15375/', primary: false },
  { href: 'https://www.instagram.com/ai_dimaz/', primary: false },
];

export function ContactPageContent({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const tct = t.contact;
  const tc = t.common;

  const channels = tct.channels.map((c, i) => ({
    ...CHANNEL_META[i],
    label: c.label,
    value: c.value,
    note: c.note,
  }));

  return (
    <PageShell
      eyebrow={tct.eyebrow}
      title={
        <>
          {tct.title1}{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--color-amber)' }}>{tct.title2}</em>
        </>
      }
      intro={tct.intro}
      chapter={tc.chapter(6, 6)}
      locale={locale}
    >
      <div
        style={{
          padding: 'clamp(64px, 10vh, 120px) clamp(24px, 6vw, 96px)',
          maxWidth: 980,
          margin: '0 auto',
        }}
      >
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {channels.map((c, i) => (
            <li
              key={c.label}
              data-reveal
              style={
                {
                  '--stagger': `${i * 70}ms`,
                  padding: 'clamp(28px, 4vh, 40px) 0',
                  borderTop: '1px solid var(--color-line)',
                  display: 'grid',
                  gridTemplateColumns: 'minmax(120px, 1fr) minmax(0, 2fr) auto',
                  gap: 'clamp(20px, 4vw, 56px)',
                  alignItems: 'baseline',
                } as React.CSSProperties
              }
              className="contact-row"
            >
              <span className="mono uppercase" style={{ fontSize: 12, letterSpacing: '0.22em', color: c.primary ? 'var(--color-amber)' : 'var(--color-ink-faint)' }}>
                {c.label}
              </span>
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener' : undefined}
                className="display link-line"
                style={{
                  fontSize: 'clamp(24px, 3vw, 36px)',
                  fontWeight: 400,
                  fontVariationSettings: '"SOFT" 50, "opsz" 144',
                  letterSpacing: '-0.015em',
                  lineHeight: 1.1,
                  color: c.primary ? 'var(--color-amber)' : 'var(--color-ink)',
                }}
              >
                {c.value}
              </a>
              <span className="marginalia" style={{ maxWidth: '24ch', textAlign: 'right' }}>
                {c.note}
              </span>
            </li>
          ))}
        </ul>

        <p className="marginalia" style={{ marginTop: 'clamp(56px, 8vh, 80px)', maxWidth: '60ch', fontStyle: 'italic' }}>
          {tct.footnote}{' '}
          <a className="link-line" href="mailto:dima@zapleo.com?subject=Inquiry%20via%20zapleo.com">
            →
          </a>
        </p>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .contact-row { grid-template-columns: 1fr !important; }
          .contact-row > span:last-child { text-align: left !important; }
        }
      `}</style>
    </PageShell>
  );
}
