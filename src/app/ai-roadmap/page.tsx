/**
 * /ai-roadmap/ → permanent redirect to /ai-dima/roadmap/
 * Keeps all Instagram bio links, QR codes, and PDF links working.
 */
export const metadata = {
  title: 'Redirecting…',
  robots: { index: false },
  alternates: { canonical: 'https://zapleo.com/ai-dima/roadmap/' },
};

export default function AIRoadmapRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/ai-dima/roadmap/" />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace('/ai-dima/roadmap/');`,
        }}
      />
      <p style={{ fontFamily: 'monospace', padding: 40, color: '#888' }}>
        Redirecting to{' '}
        <a href="/ai-dima/roadmap/" style={{ color: '#c9a14a' }}>
          /ai-dima/roadmap/
        </a>
        …
      </p>
    </>
  );
}
