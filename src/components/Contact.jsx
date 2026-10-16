import { useState } from 'react'
import Icon from './Icon.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

// Placeholder details + placeholder map location (Bole, Addis Ababa).
const LAT = 8.9955
const LNG = 38.787
const MAP_SRC = `https://www.openstreetmap.org/export/embed.html?bbox=${LNG - 0.022}%2C${LAT - 0.015}%2C${LNG + 0.023}%2C${LAT + 0.015}&layer=mapnik&marker=${LAT}%2C${LNG}`
const MAP_LINK = `https://www.openstreetmap.org/?mlat=${LAT}&mlon=${LNG}#map=15/${LAT}/${LNG}`

export default function Contact() {
  const { t } = useLanguage()
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    e.currentTarget.reset()
    setSent(true)
  }

  return (
    <section className="section contact" id="contact">
      <div className="wrap contact-grid">
        <div>
          <div className="kicker">{t('contact.kicker')}</div>
          <h2>{t('contact.title')}</h2>
          <p className="contact-intro">{t('contact.intro')}</p>

          <ul className="contact-list">
            <li><Icon name="pin" /> {t('footer.address')}</li>
            <li><Icon name="mail" /> contact@example.com</li>
            <li><Icon name="phone" /> +251 11 000 0000</li>
          </ul>

          <form className="contact-form" onSubmit={onSubmit}>
            <div className="row">
              <input name="name" type="text" placeholder={t('contact.yourName')} aria-label={t('contact.yourName')} required />
              <input name="email" type="email" placeholder={t('contact.email')} aria-label={t('contact.email')} required />
            </div>
            <textarea name="message" placeholder={t('contact.message')} aria-label={t('contact.message')} required />
            <button className="btn" type="submit">{t('contact.send')} <Icon name="arrow" /></button>
            {sent && (
              <p className="form-status" role="status">{t('contact.sent')}</p>
            )}
          </form>
        </div>

        <div className="map">
          <iframe title={t('contact.mapTitle')} src={MAP_SRC} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          <div className="map-caption">
            <span>{t('contact.mapCaption')}</span>
            <a href={MAP_LINK} target="_blank" rel="noreferrer">{t('contact.mapLink')}</a>
          </div>
        </div>
      </div>
    </section>
  )
}