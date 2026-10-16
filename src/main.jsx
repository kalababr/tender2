import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import '@fontsource/noto-sans-ethiopic/400.css'
import '@fontsource/noto-sans-ethiopic/500.css'
import '@fontsource/noto-sans-ethiopic/600.css'
import '@fontsource/noto-sans-ethiopic/700.css'
import '@fontsource/noto-serif-ethiopic/400.css'
import './styles/global.css'
import './styles/nav.css'
import './styles/sections.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
)