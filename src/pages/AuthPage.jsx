import { useEffect, useState } from 'react'
import Brand from '../components/Brand.jsx'
import Icon from '../components/Icon.jsx'
import LanguageToggle from '../components/LanguageToggle.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

function GoogleLogo() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  )
}

export default function AuthPage() {
  const { t } = useLanguage()
  const [mode, setMode] = useState('register')
  const [sent, setSent] = useState(false)
  const isRegister = mode === 'register'

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const switchMode = (next) => {
    setMode(next)
    setSent(false)
  }

  // Mock only: the backend dev replaces this with the real auth call.
  const onSubmit = (e) => {
    e.preventDefault()
    e.currentTarget.reset()
    setSent(true)
  }

  // Mock only: the backend dev replaces this with the real Google OAuth flow.
  const onGoogle = () => setSent(true)

  return (
    <main className="auth">
      <aside className="auth-side">
        <Brand href="/" />
        <div>
          <div className="kicker">{t('auth.kicker')}</div>
          <h1>{t('auth.title1')} <em>{t('auth.title2')}</em></h1>
          <p>{t('auth.text')}</p>
        </div>
        <small>{t('auth.mockNote')}</small>
      </aside>

      <section className="auth-main">
        <div className="auth-top">
          <a className="auth-back" href="/"><Icon name="arrow" /> {t('auth.back')}</a>
          <LanguageToggle />
        </div>

        <div className="auth-card">
          <div className="auth-tabs" role="group" aria-label={t('auth.groupAria')}>
            <button type="button" aria-pressed={!isRegister} onClick={() => switchMode('signin')}>
              {t('auth.signInTab')}
            </button>
            <button type="button" aria-pressed={isRegister} onClick={() => switchMode('register')}>
              {t('auth.registerTab')}
            </button>
          </div>

          <h2>{t(isRegister ? 'auth.registerTitle' : 'auth.signInTitle')}</h2>
          <p className="auth-sub">{t(isRegister ? 'auth.registerSub' : 'auth.signInSub')}</p>

          <button type="button" className="btn google" onClick={onGoogle}>
            <GoogleLogo /> {t('auth.google')}
          </button>
          <div className="auth-or"><span>{t('auth.or')}</span></div>

          <form className="contact-form" key={mode} onSubmit={onSubmit}>
            {isRegister && (
              <>
                <label className="auth-field">
                  <span>{t('auth.name')}</span>
                  <input name="name" type="text" autoComplete="name" required />
                </label>
                <label className="auth-field">
                  <span>{t('auth.company')}</span>
                  <input name="company" type="text" autoComplete="organization" required />
                </label>
              </>
            )}
            <label className="auth-field">
              <span>{t('auth.email')}</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label className="auth-field">
              <span>{t('auth.password')}</span>
              <input
                name="password"
                type="password"
                autoComplete={isRegister ? 'new-password' : 'current-password'}
                minLength={isRegister ? 8 : undefined}
                required
              />
            </label>
            <button className="btn" type="submit">
              {t(isRegister ? 'auth.registerBtn' : 'auth.signInBtn')} <Icon name="arrow" />
            </button>
            {sent && <p className="form-status" role="status">{t('auth.mockSent')}</p>}
          </form>
        </div>
      </section>
    </main>
  )
}