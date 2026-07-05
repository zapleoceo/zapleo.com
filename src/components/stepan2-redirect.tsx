const STEPAN2_URL = 'https://stepan2.zapleo.com';

export function Stepan2Redirect() {
  return (
    <div
      style={{
        minHeight: '40vh',
        display: 'grid',
        placeItems: 'center',
        padding: '48px',
        textAlign: 'center',
      }}
    >
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(STEPAN2_URL)})`,
        }}
      />
      <p style={{ fontFamily: 'monospace', fontSize: 14, color: 'var(--color-ink-mute)' }}>
        Redirecting to{' '}
        <a href={STEPAN2_URL} style={{ color: 'inherit' }}>
          {STEPAN2_URL.replace('https://', '')}
        </a>
        …
      </p>
    </div>
  );
}
