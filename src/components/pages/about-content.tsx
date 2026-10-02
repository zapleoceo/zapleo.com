import { PageShell } from '@/components/page-shell';
import { HOME_COPY } from '@/content/home';
import type { Locale } from '@/i18n/config';

export function AboutPageContent({ locale }: { locale: Locale }) {
  const c = HOME_COPY[locale];
  const base = locale === 'en' ? '' : `/${locale}`;

  return (
    <PageShell eyebrow={c.about.eyebrow} title={c.about.title} intro={c.about.intro} chapter="PROFILE / 01" locale={locale}>
      <section className="z-home-section z-home-door-section">
        <div className="z-home-wrap z-home-method-grid">
          <div><p className="eyebrow">{c.history.label}</p><h2 className="display z-home-section-title">{c.history.title}</h2></div>
          <div className="z-about-story">
            <p>{c.about.story}</p>
            <p>{c.history.body}</p>
            <a href="https://www.linkedin.com/in/dmitriy-zaporozhets-83b15375/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </div>
        </div>
      </section>
      <section className="z-home-section z-home-cases-section">
        <div className="z-home-wrap z-home-method-grid">
          <h2 className="display z-home-section-title">{c.about.methodTitle}</h2>
          <div className="z-about-story"><p>{c.about.methodBody}</p><ol className="z-home-principles">{c.principles.items.map((item, index) => <li key={item}><span className="mono z-home-index">0{index + 1}</span><span>{item}</span></li>)}</ol></div>
        </div>
      </section>
      <section className="z-home-section z-home-contact-section">
        <div className="z-home-wrap z-home-contact-grid">
          <h2 className="display z-home-section-title">{c.contact.title}</h2>
          <div><p>{c.contact.body}</p><a className="offer-button" href={`${base}/contact/`}>{c.nav.contact} ↗</a></div>
        </div>
      </section>
    </PageShell>
  );
}
