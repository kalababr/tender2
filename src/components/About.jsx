import { useLanguage } from '../i18n/LanguageContext.jsx'

const STEPS = ['one', 'two', 'three']

export default function About() {
  const { t } = useLanguage()
  return (
    <section className="section about" id="about">
      <div className="wrap about-grid">
        <div>
          <div className="kicker">{t('about.kicker')}</div>
          <h2>{t('about.title1')}<br />{t('about.title2')}</h2>
          <p>{t('about.text')}</p>
        </div>
        <div className="steps">
          {STEPS.map((key, i) => (
            <div className="step" key={key}>
              <span className="number">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{t(`steps.${key}.title`)}</h3>
                <p>{t(`steps.${key}.text`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}