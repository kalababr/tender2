import { COMPANIES } from '../data/companies.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function TrustedCompanies() {
  const { t } = useLanguage()
  return (
    <section className="marquee-section" aria-label={t('trusted.aria')}>
      <div className="wrap">
        <div className="kicker marquee-label">{t('trusted.label')}</div>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div className="marquee-group" key={copy} aria-hidden={copy === 1 ? 'true' : undefined}>
              {COMPANIES.map((c) => (
                <span className="marquee-item" key={`${copy}-${c.name}`}>
                  <span className="company">
                    {c.logo ? (
                      <img className="company-logo" src={c.logo} alt={c.name} loading="lazy" />
                    ) : (
                      <span>{c.name}</span>
                    )}
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}