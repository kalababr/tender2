import Icon from './Icon.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function TenderCard({ tender, onOpen }) {
  const { t } = useLanguage()
  const copy = (field) => t(`tendersData.${tender.key}.${field}`)

  return (
    <article className="tender" data-sector={tender.sector}>
      <div className="tender-head">
        <span className="sector-icon"><Icon name={tender.icon} /></span>
        <span className="tag">{copy('tag')}</span>
      </div>
      <h3>{copy('title')}</h3>
      <p>{copy('subtitle')}</p>
      <div className="tender-meta">
        <Icon name="pin" />
        {t('tenders.meta', { region: t(`regions.${tender.region}`), n: tender.sample })}
      </div>
      <button className="detail" onClick={() => onOpen(tender)}>
        {t('tenders.explore')} <Icon name="arrow" />
      </button>
    </article>
  )
}