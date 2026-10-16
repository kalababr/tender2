// Drop logo files into src/assets/logos/ named exactly like the `logo` keys below
// (e.g. ethiopian-airlines.svg or .png). If a file is missing, only the name shows.
const files = import.meta.glob('../assets/logos/*.{svg,png,webp,jpg}', {
  eager: true, query: '?url', import: 'default',
})
const logos = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [path.split('/').pop().replace(/\.[^.]+$/, ''), url])
)

const list = [
  { name: 'Ethiopian Airlines', logo: 'ethiopian-airlines' },
  { name: 'Commercial Bank of Ethiopia', logo: 'commercial-bank-of-ethiopia' },
  { name: 'Ethio Telecom', logo: 'ethio-telecom' },
  { name: 'Awash Bank', logo: 'awash-bank' },
  { name: 'Dashen Bank', logo: 'dashen-bank' },
  { name: 'Ethiopian Electric Power', logo: 'ethiopian-electric-power' },
  { name: 'Safaricom Ethiopia', logo: 'safaricom-ethiopia' },
  { name: 'Habesha Breweries', logo: 'habesha-breweries' },
  { name: 'Midroc Ethiopia', logo: 'midroc-ethiopia' },
  { name: 'Ethiopian Shipping & Logistics', logo: 'ethiopian-shipping-and-logistics' },
]

export const COMPANIES = list.map((c) => ({ name: c.name, logo: logos[c.logo] }))