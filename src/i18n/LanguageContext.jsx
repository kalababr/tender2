import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from './translations.js'

const LanguageContext = createContext(null)
const lookup = (dict, key) => key.split('.').reduce((obj, k) => obj?.[k], dict)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('lang') || 'en' } catch { return 'en' }
  })

  useEffect(() => {
    document.documentElement.lang = lang
    try { localStorage.setItem('lang', lang) } catch { /* ignore */ }
  }, [lang])

  // t('nav.tenders') -> current language, falls back to English, then the key
  // t('opportunities.count', { n: 4 }) -> replaces {n} placeholders
  const t = useCallback((key, params) => {
    const value = lookup(translations[lang], key) ?? lookup(translations.en, key)
    if (value === undefined) return key
    if (!params) return value
    return String(value).replace(/\{(\w+)\}/g, (m, name) =>
      params[name] === undefined ? m : String(params[name])
    )
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => useContext(LanguageContext)