import { NEWS } from '../data/news.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function News() {
  const { t, lang } = useLanguage()

  const formatDate = (iso) => {
    const date = new Date(`${iso}T00:00:00`)
    try {
      return new Intl.DateTimeFormat(lang === 'am' ? 'am-ET' : 'en-GB', {
        day: 'numeric', month: 'short', year: 'numeric',
      }).format(date)
    } catch {
      return iso
    }
  }

  return (
    <section className="section" id="news">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="kicker">{t('news.kicker')}</div>
            <h2>{t('news.title')}</h2>
            <p>{t('news.text')}</p>
          </div>
        </div>

        <div className="news-grid">
          {NEWS.map((n) => (
            <article className={`news-card${n.featured ? ' featured' : ''}`} key={n.id}>
              <span className="tag">{t(`newsData.${n.key}.tag`)}</span>
              <h3>{t(`newsData.${n.key}.title`)}</h3>
              <p>{t(`newsData.${n.key}.excerpt`)}</p>
              <div className="news-meta">
                <time dateTime={n.date}>{formatDate(n.date)}</time>
                <span>{t('news.separator')}</span>
                <span>{t('news.readTime', { n: n.minutes })}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}