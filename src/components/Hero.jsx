import Icon from './Icon.jsx'
import heroImg from '../assets/hero.jpg'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Hero() {
  const { t } = useLanguage()
  return (
    <div className="hero-shell">
    <section className="hero">
      <img
        className="hero-photo"
        src={heroImg}
        alt={t('hero.photoAlt')}
        width="1536"
        height="1024"
      />
      <div className="wrap">
        <div className="kicker">{t('hero.kicker')}</div>
        <h1>
          {t('hero.title1')}<br />{t('hero.title2')}<br /><em>{t('hero.title3')}</em>
        </h1>
        <p>{t('hero.text')}</p>
        <div className="hero-actions">
          <a className="btn gold" href="#opportunities">
            {t('hero.cta')} <Icon name="arrow" />
          </a>
          <a className="text-link" href="#about">
            {t('hero.link')} <Icon name="arrow" />
          </a>
        </div>
      </div>
    </section>
    </div>
  )
}