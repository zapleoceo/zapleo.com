export function Footer() {
  return (
    <footer
      style={{
        background: 'var(--color-bg-deep)',
        padding: 'clamp(56px, 8vh, 88px) clamp(24px, 6vw, 96px) clamp(40px, 6vh, 64px)',
        borderTop: '1px solid var(--color-line)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 6fr) repeat(3, minmax(0, 2fr))',
          gap: 'clamp(32px, 4vw, 64px)',
          maxWidth: 1400,
          margin: '0 auto',
        }}
        className="footer-grid"
      >
        <div>
          <h3
            className="display"
            style={{
              fontSize: 'clamp(28px, 3vw, 48px)',
              fontWeight: 360,
              fontVariationSettings: '"SOFT" 50, "opsz" 144',
              letterSpacing: '-0.02em',
              margin: 0,
              lineHeight: 1,
            }}
          >
            zapleo
          </h3>
          <p
            className="marginalia"
            style={{ marginTop: 16, maxWidth: '38ch', color: 'var(--color-ink-faint)' }}
          >
            Dmitriy Zaporozhets · Operator · Educator · AI-augmented.
            <br />
            Dnipro → Bali → Jakarta. Building one classroom and a few products.
          </p>
        </div>

        <div>
          <p className="eyebrow" style={{ marginBottom: 16 }}>Map</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 }}>
            {[
              ['Work', '/work/'],
              ['Journey', '/journey/'],
              ['Now', '/now/'],
              ['Journal', '/journal/'],
              ['Contact', '/contact/'],
              ['Colophon', '/colophon/'],
            ].map(([label, href]) => (
              <li key={href}>
                <a href={href} className="link-line" style={{ fontSize: 14, color: 'var(--color-ink-mute)' }}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow" style={{ marginBottom: 16 }}>Around the web</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 }}>
            {[
              ['LinkedIn', 'https://www.linkedin.com/in/dmitriy-zaporozhets-83b15375/'],
              ['GitHub · org', 'https://github.com/zapleo'],
              ['Instagram', 'https://www.instagram.com/zapleosoft/'],
              ['X · zapleosoft', 'https://x.com/zapleosoft'],
            ].map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener"
                  className="link-line"
                  style={{ fontSize: 14, color: 'var(--color-ink-mute)' }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow" style={{ marginBottom: 16 }}>Direct</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 }}>
            <li>
              <a href="mailto:dmitriy@zapleo.com" className="link-line" style={{ fontSize: 14, color: 'var(--color-amber)' }}>
                dmitriy@zapleo.com
              </a>
            </li>
            <li>
              <a href="https://wa.me/380994811889" className="link-line" style={{ fontSize: 14, color: 'var(--color-ink-mute)' }}>
                WhatsApp
              </a>
            </li>
            <li>
              <a href="/colophon/" className="link-line" style={{ fontSize: 14, color: 'var(--color-ink-mute)' }}>
                Colophon (built with)
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        style={{
          marginTop: 'clamp(56px, 8vh, 88px)',
          paddingTop: 32,
          borderTop: '1px solid var(--color-line)',
          maxWidth: 1400,
          margin: 'clamp(56px, 8vh, 88px) auto 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 24,
        }}
      >
        <span className="mono" style={{ fontSize: 11, letterSpacing: '0.18em', color: 'var(--color-ink-ghost)' }}>
          © {new Date().getFullYear()} · Zapleo · Built with Claude, code reviewed by a human.
        </span>
        <span className="mono" style={{ fontSize: 11, letterSpacing: '0.18em', color: 'var(--color-ink-ghost)' }}>
          v0.1 · Jakarta, GMT+7
        </span>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .footer-grid > div:first-child {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 500px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
