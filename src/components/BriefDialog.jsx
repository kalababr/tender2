import { forwardRef } from 'react'
import Icon from './Icon.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

// Native <dialog>, controlled through the forwarded ref (showModal / close).
const BriefDialog = forwardRef(function BriefDialog({ brief }, ref) {
  const { t } = useLanguage()
  const close = () => ref.current?.close()
  const deliverables = Array.isArray(brief.deliverables) ? brief.deliverables : []

  const onBackdropClick = (e) => {
    const dialog = ref.current
    if (e.target !== dialog) return
    const r = dialog.getBoundingClientRect()
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) close()
  }

  return (
    <dialog id="brief" ref={ref} onClick={onBackdropClick}>
      <button className="close" aria-label={t('tenders.dialogClose')} onClick={close}>
        <Icon name="close" />
      </button>
      <div className="kicker">{t('tenders.dialogKicker')} · {brief.reference}</div>
      <h2 id="brief-title">{brief.title}</h2>
      <p id="brief-description">{brief.description}</p>
      <dl className="brief-meta">
        <div><dt>{t('tenders.sector')}</dt><dd>{brief.sector}</dd></div>
        <div><dt>{t('tenders.location')}</dt><dd>{brief.location}</dd></div>
        <div><dt>{t('tenders.buyer')}</dt><dd>{t('tenders.notProvided')}</dd></div>
        <div><dt>{t('tenders.budget')}</dt><dd>{t('tenders.notProvided')}</dd></div>
        <div><dt>{t('tenders.deadline')}</dt><dd>{t('tenders.notProvided')}</dd></div>
        <div><dt>{t('tenders.submission')}</dt><dd>{t('tenders.notProvided')}</dd></div>
        <div><dt>{t('tenders.eligibility')}</dt><dd>{t('tenders.notProvided')}</dd></div>
        <div><dt>{t('tenders.documents')}</dt><dd>{t('tenders.notProvided')}</dd></div>
      </dl>
      <section className="brief-details">
        <h3>{t('tenders.scope')}</h3>
        <p>{brief.scope}</p>
      </section>
      <section className="brief-details">
        <h3>{t('tenders.deliverables')}</h3>
        <ul className="brief-deliverables">
          {deliverables.map((item, index) => <li key={`${index}-${item}`}>{item}</li>)}
        </ul>
      </section>
      <aside className="brief-note">
        <h3>{t('tenders.verifyTitle')}</h3>
        <p>{t('tenders.verifyText')}</p>
        <p>{t('tendersData.sampleNotice')}</p>
      </aside>
      <button type="button" className="btn" id="close-brief" onClick={close}>
        {t('tenders.dialogBack')} <Icon name="arrow" />
      </button>
    </dialog>
  )
})

export default BriefDialog