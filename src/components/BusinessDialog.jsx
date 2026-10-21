import { forwardRef } from 'react'
import Icon from './Icon.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const BusinessDialog = forwardRef(function BusinessDialog({ business }, ref) {
  const { t } = useLanguage()
  const close = () => ref.current?.close()

  const onBackdropClick = (e) => {
    const dialog = ref.current
    if (e.target !== dialog) return
    const r = dialog.getBoundingClientRect()
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) close()
  }

  return (
    <dialog ref={ref} onClick={onBackdropClick} aria-labelledby="business-title">
      <button className="close" aria-label={t('directory.dialogClose')} onClick={close}>
        <Icon name="close" />
      </button>
      {business && (
        <>
          <div className="kicker">{t('directory.kicker')}</div>
          <h2 id="business-title">{t(`businessesData.${business.key}.name`)}</h2>
          <div className="biz-dialog-meta">
            <span className="tag">{t(`sectors.${business.category}`)}</span>
            <span className="verified"><Icon name="shield" /> {t('directory.verified')}</span>
          </div>
          <div className="tender-meta"><Icon name="pin" />{t(`businessesData.${business.key}.location`)}</div>
          <p>{t(`businessesData.${business.key}.description`)}</p>
          <p className="biz-dialog-note">{t('directory.sampleNotice')}</p>
          <button className="btn" onClick={close}>
            {t('directory.dialogBack')} <Icon name="arrow" />
          </button>
        </>
      )}
    </dialog>
  )
})

export default BusinessDialog