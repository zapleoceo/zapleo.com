import { Footer } from '@/components/footer';
import { LangSwitcher } from '@/components/lang-switcher';
import { HOME_COPY } from '@/content/home';
import type { Locale } from '@/i18n/config';

function inquiryHref(subject: string, body: string): string {
  return `mailto:dima@zapleo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function localHref(href: string, locale: Locale): string {
  return href.startsWith('/') && locale !== 'en' ? `/${locale}${href}` : href;
}

export function ClientHome({ locale }: { locale: Locale }) {
  const c = HOME_COPY[locale];
  const base = locale === 'en' ? '' : `/${locale}`;
  const mailto = inquiryHref(c.contact.emailSubject, c.contact.emailBody);

  return (
    <>
      <main id="top">
        <section className="z-home-hero" aria-labelledby="home-title">
          <div className="z-home-hero-grid" aria-hidden="true" />
          <div className="z-home-topbar z-home-wrap">
            <a className="mono" href={base || '/'}>zapleo<span aria-hidden="true">.</span></a>
            <LangSwitcher current={locale} />
          </div>
          <div className="z-home-wrap z-home-hero-inner">
            <div className="z-home-hero-content">
              <p className="eyebrow z-home-kicker">{c.hero.eyebrow}</p>
              <h1 id="home-title" className="display z-home-title">{c.hero.title}</h1>
              <p className="z-home-lead">{c.hero.lead}</p>
              <div className="z-home-actions">
                <a className="offer-button" href={mailto}>{c.hero.ctaPrimary} <span aria-hidden="true">↗</span></a>
                <a className="z-home-quiet-link" href="#useful">{c.hero.ctaSecondary} <span aria-hidden="true">↓</span></a>
              </div>
              <a className="z-home-profile" href={c.hero.profile.href} target="_blank" rel="noopener noreferrer">{c.hero.profile.label} <span aria-hidden="true">↗</span></a>
            </div>
            <div className="z-home-signal" aria-hidden="true">
              <svg className="z-home-signal-lines" aria-hidden="true" viewBox="0 0 600 540" preserveAspectRatio="none">
                <path d="M122 110 L420 270" />
                <path d="M122 216 L420 270" />
                <path d="M122 324 L420 270" />
                <path d="M122 430 L420 270" />
                <path className="z-home-signal-out-line" d="M420 270 L560 270" />
              </svg>
              <div className="z-home-signal-inputs">{c.hero.flow.inputs.map((input) => <span key={input}>{input}</span>)}</div>
              <span className="z-home-signal-hub" />
              <span className="z-home-signal-output">{c.hero.flow.output}</span>
            </div>
          </div>
        </section>

        <div className="z-home-trust">
          <div className="z-home-wrap">
            <span className="mono">{c.history.trustLabel}</span>
            {c.history.trust.map((name) => <span key={name}>{name}</span>)}
          </div>
        </div>

        <section id="useful" className="z-home-section z-home-door-section" aria-labelledby="useful-title">
          <div className="z-home-wrap">
            <p className="eyebrow">{c.doors.label}</p>
            <h2 id="useful-title" className="display z-home-section-title">{c.doors.title}</h2>
            <div className="z-home-doors">
              {c.doors.items.map((door, index) => (
                <article className="z-home-door" key={door.key}>
                  <span className="mono z-home-index">0{index + 1}</span>
                  <div>
                    <h3 className="display">{door.title}</h3>
                    <p className="z-home-door-problem">{door.problem}</p>
                    <p className="z-home-door-approach">{door.approach}</p>
                    <div className="z-home-door-links">
                      {door.proof.map((proof) => <a key={proof.href} href={localHref(proof.href, locale)}>{proof.label} <span aria-hidden="true">↗</span></a>)}
                      {door.entry && <a className="z-home-entry" href={localHref(door.entry.href, locale)}>{door.entry.label} <span aria-hidden="true">→</span></a>}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="z-home-section z-home-cases-section" aria-labelledby="case-title">
          <div className="z-home-wrap">
            <div className="z-home-section-head">
              <div><p className="eyebrow">{c.cases.label}</p><h2 id="case-title" className="display z-home-section-title">{c.cases.title}</h2></div>
              <p className="z-home-section-note">{c.cases.note}</p>
            </div>
            <div className="z-home-cases">
              {c.cases.items.map((item, index) => (
                <article className="z-home-case" key={item.slug}>
                  <div className="z-home-case-top"><span className="mono z-home-index">0{index + 1} / {item.slug}</span><a href={localHref(item.href, locale)} aria-label={item.name}>↗</a></div>
                  <h3 className="display">{item.name}</h3>
                  <dl>
                    <div><dt>{c.cases.fields.problem}</dt><dd>{item.problem}</dd></div>
                    <div><dt>{c.cases.fields.built}</dt><dd>{item.built}</dd></div>
                    <div><dt>{c.cases.fields.observed}</dt><dd>{item.observed}</dd></div>
                  </dl>
                  <p className="z-home-case-limit"><strong>{c.cases.fields.limits}</strong> {item.limits}</p>
                </article>
              ))}
            </div>
            <a className="z-home-quiet-link z-home-all-work" href={`${base}/work/`}>{c.nav.work} <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="z-home-section z-home-depth-section" aria-labelledby="depth-title">
          <div className="z-home-wrap z-home-depth-grid">
            <div className="z-home-depth-art" aria-hidden="true">
              <div className="z-home-depth-inputs">{c.depth.flow.inputs.map((input) => <span key={input}>{input}</span>)}</div>
              <span className="z-home-depth-connector" />
              <span className="z-home-depth-core">Vera</span>
              <span className="z-home-depth-output">{c.depth.flow.output}</span>
            </div>
            <div className="z-home-depth-copy">
              <p className="eyebrow">{c.depth.label}</p>
              <h2 id="depth-title" className="display z-home-section-title">{c.depth.title}</h2>
              <p>{c.depth.body}</p>
            </div>
          </div>
        </section>

        <section className="z-home-history" aria-labelledby="history-title">
          <div className="z-home-wrap z-home-history-grid">
            <div><p className="eyebrow">{c.history.label}</p><h2 id="history-title" className="display">{c.history.title}</h2></div>
            <p>{c.history.body}</p>
          </div>
        </section>

        <section className="z-home-section z-home-method-section" aria-labelledby="method-title">
          <div className="z-home-wrap z-home-method-grid">
            <h2 id="method-title" className="display z-home-section-title">{c.principles.title}</h2>
            <ol className="z-home-principles">{c.principles.items.map((item, index) => <li key={item}><span className="mono z-home-index">0{index + 1}</span><span>{item}</span></li>)}</ol>
          </div>
        </section>

        <section className="z-home-section z-home-engage-section" aria-labelledby="engage-title">
          <div className="z-home-wrap">
            <h2 id="engage-title" className="display z-home-section-title">{c.engage.title}</h2>
            <p className="z-home-section-note">{c.engage.intro}</p>
            <div className="z-home-engagements">{c.engage.steps.map((step, index) => (
              <article key={step.name}>
                <span className="mono z-home-index">0{index + 1}</span>
                <h3 className="display">{step.name}</h3>
                <p>{step.body}</p>
                {step.href && <a href={localHref(step.href, locale)} aria-label={step.name}>↗</a>}
              </article>
            ))}</div>
          </div>
        </section>

        <section className="z-home-section z-home-contact-section" aria-labelledby="contact-title">
          <div className="z-home-wrap z-home-contact-grid">
            <div><p className="eyebrow">{c.nav.contact}</p><h2 id="contact-title" className="display z-home-section-title">{c.contact.title}</h2></div>
            <div>
              <p>{c.contact.body}</p>
              <a className="offer-button" href={mailto}>{c.contact.emailLabel} <span aria-hidden="true">↗</span></a>
              <a className="z-home-contact-mail" href="mailto:dima@zapleo.com">dima@zapleo.com</a>
              <div className="z-home-contact-alternatives">
                <a href="https://t.me/zapleosoft" target="_blank" rel="noopener noreferrer">Telegram ↗</a>
                <a href="https://wa.me/380994811889" target="_blank" rel="noopener noreferrer">WhatsApp ↗</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
