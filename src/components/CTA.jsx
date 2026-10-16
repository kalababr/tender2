import Icon from './Icon.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function CTA() {
  const { t } = useLanguage()
  return (
    <section className="cta">
      <div className="wrap">
        <div>
          <div className="kicker">{t('cta.kicker')}</div>
          <h2>{t('cta.title1')}<br />{t('cta.title2')}</h2>
          <p>{t('cta.text')}</p>
        </div>
        <a className="btn gold" href="#opportunities">
          {t('cta.button')} <Icon name="arrow" />
        </a>
      </div>
    </section>
  )
}