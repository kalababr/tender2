import Icon from './Icon.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const PLANS = [
  { icon: 'megaphone', key: 'banner' },
  { icon: 'star', key: 'listing' },
  { icon: 'building', key: 'business' },
]

export default function Promotion() {
  const { t } = useLanguage()
  return (
    <section className="section promo" id="advertise">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="kicker">{t('promo.kicker')}</div>
            <h2>{t('promo.title')}</h2>
            <p>{t('promo.text')}</p>
          </div>
          <a className="btn gold" href="#contact">{t('promo.quote')} <Icon name="arrow" /></a>
        </div>

        <div className="promo-grid">
          {PLANS.map((p) => (
            <article className="promo-card" key={p.key}>
              <span className="promo-icon"><Icon name={p.icon} /></span>
              <h3>{t(`plans.${p.key}.title`)}</h3>
              <p>{t(`plans.${p.key}.text`)}</p>
              <ul>
                <li>{t(`plans.${p.key}.f1`)}</li>
                <li>{t(`plans.${p.key}.f2`)}</li>
              </ul>
            </article>
          ))}
        </div>

        <aside className="ad-sample" aria-label={t('promo.sampleAria')}>
          <span className="ad-label">{t('promo.sampleLabel')}</span>
          <div>
            <strong>{t('promo.sampleTitle')}</strong>
            <span className="copy">{t('promo.sampleText')}</span>
          </div>
          <a className="btn" href="#contact">{t('promo.book')} <Icon name="arrow" /></a>
        </aside>
      </div>
    </section>
  )
}