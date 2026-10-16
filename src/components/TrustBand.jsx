import Icon from './Icon.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const ITEMS = [
  { icon: 'shield', key: 'trust.clarity' },
  { icon: 'globe', key: 'trust.perspective' },
  { icon: 'bell', key: 'trust.ahead' },
]

export default function TrustBand() {
  const { t } = useLanguage()
  return (
    <section className="trust-band" aria-label={t('trust.aria')}>
      <div className="wrap">
        {ITEMS.map((item) => (
          <div className="trust-item" key={item.icon}>
            <Icon name={item.icon} />
            <div>
              <strong>{t(`${item.key}.title`)}</strong>
              <small>{t(`${item.key}.text`)}</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}