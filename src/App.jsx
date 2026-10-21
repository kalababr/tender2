import { Routes, Route, Navigate } from 'react-router-dom'
import { IconSprite } from './components/Icon.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import TrustedCompanies from './components/TrustedCompanies.jsx'
import Opportunities from './components/Opportunities.jsx'
import Directory from './components/Directory.jsx'
import News from './components/News.jsx'
import Promotion from './components/Promotion.jsx'
import About from './components/About.jsx'
import CTA from './components/CTA.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import AuthPage from './pages/AuthPage.jsx'

function handleAnchorNavigation(event) {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
  if (!(event.target instanceof Element)) return

  const link = event.target.closest('a[href^="#"]')
  if (!link) return

  event.preventDefault()
  const targetId = link.getAttribute('href').slice(1)
  const target = targetId ? document.getElementById(targetId) : null
  target?.scrollIntoView()
  window.history.replaceState(
    window.history.state,
    '',
    `${window.location.pathname}${window.location.search}`,
  )
}

function Landing() {
  return (
    <div onClick={handleAnchorNavigation}>
      <Header />
      <main>
        <Hero />
        <TrustedCompanies />
        <Opportunities />
        <Directory />
        <News />
        <Promotion />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <>
      <IconSprite />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/join" element={<AuthPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}