import { useMemo, useRef, useState } from 'react'
import Icon from './Icon.jsx'
import TenderCard from './TenderCard.jsx'
import BriefDialog from './BriefDialog.jsx'
import { SECTORS, TENDERS } from '../data/tenders.js'
import { CITY_ADMINISTRATIONS, REGIONAL_STATES } from '../data/regions.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Opportunities() {
  const { t } = useLanguage()
  const [query, setQuery] = useState('')
  const [sector, setSector] = useState('all')
  const [region, setRegion] = useState('all')
  const [brief, setBrief] = useState({ title: '', description: '' })
  const dialogRef = useRef(null)

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return TENDERS.filter((tender) => {
      const text = [
        tender.key,
        tender.sector,
        tender.region,
        t(`tendersData.${tender.key}.tag`),
        t(`tendersData.${tender.key}.title`),
        t(`tendersData.${tender.key}.subtitle`),
        t(`regions.${tender.region}`),
        t('opportunities.sampleLabel'),
        tender.sample,
      ].join(' ').toLowerCase()
      return (
        (sector === 'all' || tender.sector === sector) &&
        (region === 'all' || tender.region === region) &&
        text.includes(q)
      )
    })
  }, [query, sector, region, t])

  const openBrief = (tender) => {
    const copy = `tendersData.${tender.key}`
    setBrief({
      title: t(`${copy}.briefTitle`),
      description: t(`${copy}.briefText`),
      scope: t(`tenderDetails.${tender.key}.scope`),
      deliverables: t(`tenderDetails.${tender.key}.deliverables`),
      reference: `SAMPLE-${tender.sample}`,
      sector: t(`${copy}.tag`),
      location: t(`regions.${tender.region}`),
    })
    dialogRef.current?.showModal()
  }

  return (
    <>
      <section className="section" id="opportunities">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="kicker">{t('opportunities.kicker')}</div>
              <h2>{t('opportunities.title')}</h2>
              <p>{t('opportunities.text')}</p>
            </div>
            <a className="text-link" href="#search-form">
              {t('opportunities.findSector')} <Icon name="arrow" />
            </a>
          </div>

          <form className="search" id="search-form" onSubmit={(e) => e.preventDefault()}>
            <Icon name="search" aria-hidden="true" />
            <input
              id="query"
              type="search"
              aria-label={t('opportunities.searchAria')}
              placeholder={t('opportunities.searchPlaceholder')}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <select
              id="sector"
              aria-label={t('opportunities.sectorAria')}
              value={sector}
              onChange={(e) => setSector(e.target.value)}
            >
              <option value="all">{t('opportunities.allSectors')}</option>
              {SECTORS.map((s) => (
                <option key={s} value={s}>{t(`sectors.${s}`)}</option>
              ))}
            </select>
            <select
              id="region"
              aria-label={t('opportunities.regionAria')}
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            >
              <option value="all">{t('opportunities.allLocations')}</option>
              <optgroup label={t('opportunities.cityAdministrations')}>
                {CITY_ADMINISTRATIONS.map((r) => <option key={r} value={r}>{t(`regions.${r}`)}</option>)}
              </optgroup>
              <optgroup label={t('opportunities.regionalStates')}>
                {REGIONAL_STATES.map((r) => <option key={r} value={r}>{t(`regions.${r}`)}</option>)}
              </optgroup>
            </select>
            <button className="btn" type="submit">
              {t('opportunities.search')} <Icon name="arrow" />
            </button>
          </form>

          <div className="listing-note">
            <span id="result-count">
              {t('opportunities.count', { n: String(results.length).padStart(2, '0') })}
            </span>
          </div>

          <div className="opportunities">
            {results.map((tender) => (
              <TenderCard key={tender.id} tender={tender} onOpen={openBrief} />
            ))}
          </div>

          {results.length === 0 && (
            <p className="no-results" id="no-results" role="status" style={{ display: 'block' }}>
              {t('opportunities.noResults')}
            </p>
          )}
        </div>
      </section>
      <BriefDialog ref={dialogRef} brief={brief} />
    </>
  )
}