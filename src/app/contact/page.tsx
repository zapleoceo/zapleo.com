import { PageShell } from '@/components/page-shell';

export const metadata = {
  title: 'Contact',
  description: 'Direct line. No form by default. Reply within 48h on weekdays, in your timezone.',
};

const CHANNELS = [
  { label: 'Email', value: 'dima@zapleo.com', href: 'mailto:dima@zapleo.com', primary: true, note: 'Best for anything that needs a paper trail.' },
  { label: 'Telegram', value: '@zapleosoft', href: 'https://t.me/zapleosoft', note: 'Fastest in Asia hours.' },
  { label: 'WhatsApp', value: '+380 99 481 1889', href: 'https://wa.me/380994811889', note: 'Voice notes welcome.' },
  { label: 'LinkedIn', value: 'in/dmitriy-zaporozhets', href: 'https://www.linkedin.com/in/dmitriy-zaporozhets-83b15375/', note: 'For formal intros.' },
  { label: 'Instagram', value: '@ai_dimaz', href: 'https://www.instagram.com/ai_dimaz/', note: 'Day-to-day, behind-the-scenes.' },
];

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Chapter 06 · Direct line"
      title={
        <>
          Working on something interesting? <em style={{ fontStyle: 'italic', color: 'var(--color-amber)' }}>Skip the form.</em>
        </>
      }
      intro="No form on this page by default. You'll get a reply within 48 hours on weekdays — in your timezone if you tell me where you are."
      chapter="CH 06 / 06"
    >
      <div
        style={{
          padding: 'clamp(64px, 10vh, 120px) clamp(24px, 6vw, 96px)',
          maxWidth: 980,
          margin: '0 auto',
        }}
      >
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {CHANNELS.map((c, i) => (
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
          Why no form on this page? Forms get triaged. Direct emails get answered. If you really
          prefer a form, &nbsp;
          <a className="link-line" href="mailto:dima@zapleo.com?subject=Inquiry%20via%20zapleo.com">
            this mailto link
          </a>
          &nbsp; pre-fills one for you.
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
