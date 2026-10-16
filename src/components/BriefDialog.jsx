import { forwardRef } from 'react'
import Icon from './Icon.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

// Native <dialog>, controlled through the forwarded ref (showModal / close).
const BriefDialog = forwardRef(function BriefDialog({ brief }, ref) {
  const { t } = useLanguage()
  const close = () => ref.current?.close()

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
      <div className="kicker">{t('tenders.dialogKicker')}</div>
      <h2 id="brief-title">{brief.title}</h2>
      <p id="brief-description">{brief.description}</p>
      <button className="btn" id="close-brief" onClick={close}>
        {t('tenders.dialogBack')} <Icon name="arrow" />
      </button>
    </dialog>
  )
})

export default BriefDialog