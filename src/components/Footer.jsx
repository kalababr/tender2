import Brand from './Brand.jsx'
import Icon from './Icon.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Brand />
            <p className="footer-about">{t('footer.about')}</p>
          </div>

          <div>
            <h4>{t('footer.explore')}</h4>
            <ul className="footer-links">
              <li><a href="#opportunities">{t('nav.tenders')}</a></li>
              <li><a href="#directory">{t('nav.directory')}</a></li>
              <li><a href="#news">{t('news.kicker')}</a></li>
            </ul>
          </div>

          <div>
            <h4>{t('footer.company')}</h4>
            <ul className="footer-links">
              <li><a href="#about">{t('nav.about')}</a></li>
              <li><a href="#contact">{t('nav.post')}</a></li>
              <li><a href="#advertise">{t('footer.advertise')}</a></li>
              <li><a href="#contact">{t('nav.contact')}</a></li>
            </ul>
          </div>

          <div>
            <h4>{t('footer.touch')}</h4>
            <ul className="footer-links">
              <li><Icon name="pin" style={{ display: 'inline', verticalAlign: '-4px', marginRight: 8, width: 16, height: 16 }} />{t('footer.address')}</li>
              <li><Icon name="mail" style={{ display: 'inline', verticalAlign: '-4px', marginRight: 8, width: 16, height: 16 }} />contact@example.com</li>
              <li><Icon name="phone" style={{ display: 'inline', verticalAlign: '-4px', marginRight: 8, width: 16, height: 16 }} />+251 11 000 0000</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{t('footer.copyright', { year: new Date().getFullYear() })}</span>

        </div>
      </div>
    </footer>
  )
}