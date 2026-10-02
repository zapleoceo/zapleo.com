import { PageShell } from '@/components/page-shell';
import { RECOVERY_COPY, recoveryEmailHref } from '@/content/recovery';
import type { Locale } from '@/i18n/config';
import { getDict } from '@/i18n/dict';

export function RecoveryLanding({ locale }: { locale: Locale }) {
  const copy = RECOVERY_COPY[locale].service;
  const t = getDict(locale);

  return (
    <PageShell eyebrow={copy.eyebrow} title={copy.title} intro={copy.intro} chapter="SERVICE / 01" locale={locale}>
      <section className="offer-section offer-section-raised" data-testid="service-fit">
        <div className="offer-container offer-two-col">
          <div>
            <p className="eyebrow">01</p>
            <h2 className="display offer-section-title">{copy.fitTitle}</h2>
            <p className="offer-section-intro">{copy.fitBody}</p>
          </div>
          <ul className="offer-list">
            {copy.fit.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="offer-section">
        <div className="offer-container">
          <p className="eyebrow">02</p>
          <h2 className="display offer-section-title">{copy.leaksTitle}</h2>
          <div className="offer-cards">
            {copy.leaks.map((item, i) => <article className="offer-card" key={item.title}>
              <span className="mono offer-card-index">0{i + 1}</span>
              <h3>{item.title}</h3><p>{item.body}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="offer-section offer-section-raised">
        <div className="offer-container">
          <p className="eyebrow">03</p>
          <h2 className="display offer-section-title">{copy.deliverTitle}</h2>
          <div className="offer-cards">
            {copy.deliver.map((item, i) => <article className="offer-card" key={item.title}>
              <span className="mono offer-card-index">0{i + 1}</span>
              <h3>{item.title}</h3><p>{item.body}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="offer-section">
        <div className="offer-container offer-two-col">
          <div>
            <p className="eyebrow">04</p>
            <h2 className="display offer-section-title">{copy.processTitle}</h2>
          </div>
          <div className="offer-steps">
            {copy.process.map((step) => <div className="offer-step" key={step.title}>
              <h3>{step.title}</h3><p>{step.body}</p>
            </div>)}
          </div>
        </div>
      </section>

      <section className="offer-section offer-section-raised">
        <div className="offer-container offer-two-col">
          <div>
            <p className="eyebrow">05</p>
            <h2 className="display offer-section-title">{copy.proofTitle}</h2>
          </div>
          <p className="offer-section-copy">{copy.proofBody}</p>
        </div>
      </section>

      <section className="offer-section" data-testid="service-terms">
        <div className="offer-container offer-two-col">
          <div>
            <p className="eyebrow">06 / {t.colophon.notes.scopeFee}</p>
            <h2 className="display offer-section-title">{copy.termsTitle}</h2>
            <p className="offer-fee">{copy.fee}</p>
            <p className="offer-fee-note">{copy.feeNote}</p>
          </div>
          <ul className="offer-list">{copy.terms.map((term) => <li key={term}>{term}</li>)}</ul>
        </div>
      </section>

      <section className="offer-section offer-section-raised offer-home-close">
        <div className="offer-container">
          <h2 className="display offer-section-title">{copy.cta}</h2>
          <p className="offer-section-intro">{copy.ctaNote}</p>
          <a className="offer-button" data-testid="service-cta" href={recoveryEmailHref(locale)}>{copy.cta} <span aria-hidden>↗</span></a>
        </div>
      </section>
    </PageShell>
  );
}
