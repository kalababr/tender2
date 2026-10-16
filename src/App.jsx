import { IconSprite } from './components/Icon.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import TrustedCompanies from './components/TrustedCompanies.jsx'
import TrustBand from './components/TrustBand.jsx'
import Opportunities from './components/Opportunities.jsx'
import Directory from './components/Directory.jsx'
import News from './components/News.jsx'
import Promotion from './components/Promotion.jsx'
import About from './components/About.jsx'
import CTA from './components/CTA.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <IconSprite />
      <Header />
      <main>
        <Hero />
        <TrustedCompanies />
        <TrustBand />
        <Opportunities />
        <Directory />
        <News />
        <Promotion />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
