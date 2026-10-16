import Icon from './Icon.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function LanguageToggle({ compact = false, className = '' }) {
  const { lang, setLang, t } = useLanguage()
  return (
    <div className={`lang ${className}`} role="group" aria-label={t('nav.language')}>
      <Icon name="globe" />
      <button type="button" lang="en" aria-pressed={lang === 'en'} onClick={() => setLang('en')}>EN</button>
      <button type="button" lang="am" aria-pressed={lang === 'am'} onClick={() => setLang('am')}>
        {compact ? 'አማ' : 'አማርኛ'}
      </button>
    </div>
  )
}