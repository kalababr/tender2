import Icon from './Icon.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Brand({ ariaLabel }) {
  const { t } = useLanguage()
  return (
    <a className="brand" href="#" aria-label={ariaLabel || t('nav.home')}>
      <span className="mark"><Icon name="mark" /></span>
      <span>
        <strong>Ethiopia Tender Hub</strong>
        <small>{t('brand.tagline')}</small>
      </span>
    </a>
  )
}