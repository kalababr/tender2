import { useState } from 'react'
import Brand from './Brand.jsx'
import Icon from './Icon.jsx'
import { Link } from 'react-router-dom'
import LanguageToggle from './LanguageToggle.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const MAIN_LINKS = [
  { href: '#opportunities', key: 'nav.tenders' },
  { href: '#directory', key: 'nav.directory' },
  { href: '#news', key: 'nav.news' },
  { href: '#contact', key: 'nav.contact' },
]
const SECONDARY_LINKS = [
  { to: '/join', key: 'nav.post' },
  { href: '#about', key: 'nav.about' },
  { to: '/join', key: 'nav.join' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()
  const close = () => setOpen(false)

  return (
    <header className={`site-header${open ? ' open' : ''}`}>
      <div className="nav-tab">
        <Brand ariaLabel={t('nav.home')} />
        <LanguageToggle compact className="lang-mobile" />
        <button
          className="btn menu-btn"
          id="menu-toggle"
          aria-label={open ? t('nav.closeNav') : t('nav.openNav')}
          aria-expanded={open}
          aria-controls="nav-left nav-right"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
        <nav className="nav-left" id="nav-left" aria-label={t('nav.mainNav')}>
          {MAIN_LINKS.map((l) => (
            <a key={l.key} href={l.href} onClick={close}>{t(l.key)}</a>
          ))}
        </nav>
      </div>
      <nav className="nav-right" id="nav-right" aria-label={t('nav.secondaryNav')}>
        {SECONDARY_LINKS.map((l) => l.to ? (
          <Link key={l.key} to={l.to} onClick={close}>{t(l.key)}</Link>
        ) : (
          <a key={l.key} href={l.href} onClick={close}>{t(l.key)}</a>
        ))}
        <LanguageToggle className="lang-desktop" />
      </nav>
    </header>
  )
}