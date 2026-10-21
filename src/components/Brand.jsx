import logo from '../assets/bidora-logo.png'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Brand({ ariaLabel, href = '#' }) {
  const { t } = useLanguage()
  return (
    <a className="brand" href={href} aria-label={ariaLabel || t('nav.home')}>
      <img className="brand-logo" src={logo} alt="" width="37" height="38" />
      <span>
        <strong>Bidora</strong>
        <small>{t('brand.tagline')}</small>
      </span>
    </a>
  )
}