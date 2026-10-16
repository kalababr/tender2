import { useState } from 'react'
import Icon from './Icon.jsx'
import { BUSINESSES, BUSINESS_CATEGORIES } from '../data/businesses.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Directory() {
  const { t } = useLanguage()
  const [active, setActive] = useState('all')
  const list = active === 'all' ? BUSINESSES : BUSINESSES.filter((b) => b.category === active)

  return (
    <section className="section alt" id="directory">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="kicker">{t('directory.kicker')}</div>
            <h2>{t('directory.title')}</h2>
            <p>{t('directory.text')}</p>
          </div>
          <a className="text-link" href="#directory">{t('directory.browseFull')} <Icon name="arrow" /></a>
        </div>

        <div className="chips" role="group" aria-label={t('directory.filterAria')}>
          <button className="chip" aria-pressed={active === 'all'} onClick={() => setActive('all')}>
            {t('directory.all')}
          </button>
          {BUSINESS_CATEGORIES.map((c) => (
            <button key={c} className="chip" aria-pressed={active === c} onClick={() => setActive(c)}>
              {t(`sectors.${c}`)}
            </button>
          ))}
        </div>

        <div className="listing-note">
          <span>{t('directory.count', { n: String(list.length).padStart(2, '0') })}</span>
          <span>{t('directory.disclaimer')}</span>
        </div>

        <div className="opportunities">
          {list.map((b) => (
            <article className="tender biz" key={b.id}>
              <div className="biz-top">
                <span className="tag">{t(`sectors.${b.category}`)}</span>
                <span className="verified"><Icon name="shield" /> {t('directory.verified')}</span>
              </div>
              <h3>{t(`businessesData.${b.key}.name`)}</h3>
              <p>{t(`businessesData.${b.key}.description`)}</p>
              <div className="tender-meta"><Icon name="pin" />{t(`businessesData.${b.key}.location`)}</div>
              <a className="detail" href="#directory">{t('directory.viewProfile')} <Icon name="arrow" /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}