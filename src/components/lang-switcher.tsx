/**
 * Quiet footer-anchored switcher. Monospace, no flags.
 * Routing logic stubbed — pages will read `lang` from URL once next-intl middleware lands.
 */
const LOCALES = [
  { code: 'en', label: 'EN', native: 'English' },
  { code: 'uk', label: 'UK', native: 'Українська' },
  { code: 'ru', label: 'RU', native: 'Русский' },
  { code: 'id', label: 'ID', native: 'Bahasa' },
] as const;

export function LangSwitcher({ current = 'en' }: { current?: string }) {
  return (
    <nav
      aria-label="Language"
      className="mono inline-flex items-center gap-2"
      style={{ fontSize: 11, letterSpacing: '0.16em' }}
    >
      {LOCALES.map((l, i) => (
        <span key={l.code} className="flex items-center gap-2">
          <a
            href={l.code === 'en' ? '/' : `/${l.code}/`}
            aria-current={current === l.code ? 'true' : undefined}
            title={l.native}
            className="link-line uppercase transition-opacity"
            style={{
              color: current === l.code ? 'var(--color-ink)' : 'var(--color-ink-faint)',
            }}
          >
            {l.label}
          </a>
          {i < LOCALES.length - 1 && (
            <span aria-hidden style={{ color: 'var(--color-ink-ghost)' }}>
              ·
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
