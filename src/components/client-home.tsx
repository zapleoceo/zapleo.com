import { Footer } from '@/components/footer';
import { LocaleHero } from '@/components/locale-hero';
import { RECOVERY_COPY, recoveryEmailHref, recoveryPath } from '@/content/recovery';
import type { Locale } from '@/i18n/config';

export function ClientHome({ locale }: { locale: Locale }) {
  const copy = RECOVERY_COPY[locale];
  const base = locale === 'en' ? '' : `/${locale}`;

  return (
    <>
      <main>
        <LocaleHero
          locale={locale}
          eyebrow={copy.home.eyebrow}
          title={<>{copy.home.title} <em className="offer-accent">{copy.home.accent}</em></>}
          intro={copy.home.lead}
          ctaPrimary={{ label: copy.links.offer, href: recoveryPath(locale) }}
          ctaSecondary={{ label: copy.links.work, href: `${base}/work/` }}
          contextNote={copy.home.context}
        />

        <section className="offer-section offer-section-raised" data-testid="service-preview">
          <div className="offer-container offer-two-col">
            <div>
              <p className="eyebrow">{copy.home.serviceLabel}</p>
              <h2 className="display offer-section-title">{copy.home.serviceTitle}</h2>
            </div>
            <div className="offer-section-copy">
              <p>{copy.home.serviceBody}</p>
              <a className="offer-button" href={recoveryPath(locale)}>{copy.links.offer} <span aria-hidden>↗</span></a>
            </div>
          </div>
        </section>

        <section className="offer-section" data-testid="selected-proof">
          <div className="offer-container">
            <p className="eyebrow">{copy.home.proofLabel}</p>
            <h2 className="display offer-section-title">{copy.home.proofTitle}</h2>
            <p className="offer-section-intro">{copy.home.proofBody}</p>
            <div className="offer-cards">
              {copy.home.cases.map((item, index) => (
                <a
                  className="offer-card offer-card-link"
                  key={item.name}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <span className="mono offer-card-index">0{index + 1}</span>
                  <h3>{item.name}</h3>
                  <p>{item.outcome}</p>
                  <span className="offer-card-arrow" aria-hidden>↗</span>
                </a>
              ))}
            </div>
            <a className="offer-text-link" href={`${base}/work/`}>{copy.home.workLabel} ↗</a>
          </div>
        </section>

        <section className="offer-section offer-section-raised">
          <div className="offer-container offer-two-col">
            <h2 className="display offer-section-title">{copy.home.aboutTitle}</h2>
            <p className="offer-section-copy">{copy.home.aboutBody}</p>
          </div>
        </section>

        <section className="offer-section offer-home-close">
          <div className="offer-container">
            <h2 className="display offer-section-title">{copy.home.contactTitle}</h2>
            <p className="offer-section-intro">{copy.home.contactBody}</p>
            <div className="offer-actions">
              <a className="offer-button" href={recoveryEmailHref(locale)}>{copy.links.email} <span aria-hidden>↗</span></a>
              <a className="offer-text-link" href={`${base}/contact/`}>{copy.links.contact} ↗</a>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
