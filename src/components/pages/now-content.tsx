import { PageShell } from '@/components/page-shell';
import { RECOVERY_COPY, recoveryPath } from '@/content/recovery';
import type { Locale } from '@/i18n/config';

export function NowPageContent({ locale }: { locale: Locale }) {
  const copy = RECOVERY_COPY[locale];

  return (
    <PageShell
      eyebrow={copy.home.eyebrow}
      title={copy.home.aboutTitle}
      intro={copy.home.aboutBody}
      chapter="PROFILE / 01"
      locale={locale}
    >
      <section className="offer-section offer-section-raised">
        <div className="offer-container">
          <p className="eyebrow">{copy.home.proofLabel}</p>
          <h2 className="display offer-section-title">{copy.home.proofTitle}</h2>
          <p className="offer-section-intro">{copy.home.proofBody}</p>
          <div className="offer-cards">
            {copy.home.cases.map((item) => (
              <a className="offer-card offer-card-link" key={item.name} href={item.href}>
                <h3>{item.name}</h3><p>{item.outcome}</p><span className="offer-card-arrow" aria-hidden>↗</span>
              </a>
            ))}
          </div>
          <a className="offer-text-link" href={recoveryPath(locale)}>{copy.links.offer} ↗</a>
        </div>
      </section>
    </PageShell>
  );
}
