// Sector ids only; labels live in the i18n dictionary under `sectors.*`.
export const SECTORS = ['construction', 'technology', 'supply']

// Displayed copy lives in the i18n dictionary under `tendersData.*`.
// `key` selects the entry, `sector` and `region` are filter values (see regions.js).
export const TENDERS = [
  { id: 1, key: 'construction', sector: 'construction', icon: 'construction', region: 'addis-ababa', sample: '01' },
  { id: 2, key: 'technology', sector: 'technology', icon: 'technology', region: 'dire-dawa', sample: '02' },
  { id: 3, key: 'supply', sector: 'supply', icon: 'supply', region: 'oromia', sample: '03' },
  { id: 4, key: 'rural', sector: 'construction', icon: 'construction', region: 'amhara', sample: '04' },
  { id: 5, key: 'education', sector: 'technology', icon: 'technology', region: 'sidama', sample: '05' },
  { id: 6, key: 'medical', sector: 'supply', icon: 'supply', region: 'somali', sample: '06' },
]