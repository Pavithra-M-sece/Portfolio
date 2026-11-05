import React, { useEffect, useState, useCallback } from 'react'
import './App.css'

import Preloader    from './components/Preloader'
import Nav          from './components/Nav'
import Footer       from './components/Footer'
import LocalChatbot from './components/LocalChatbot'

// Home-page sections
import Hero         from './components/Hero'
import Skills       from './components/Skills'
import Experience   from './components/Experience'
import Achievements from './components/Achievements'
import Contact      from './components/Contact'

// Sub-pages
import About    from './pages/About'
import Projects from './pages/Projects'
import Resume   from './pages/Resume'

// Sections that live on the home page (used for nav routing)
const HOME_SECTIONS = new Set(['home', 'skills', 'experience', 'achievements', 'contact'])

export default function App() {
  const [loading,  setLoading]  = useState(true)
  const [mounted,  setMounted]  = useState(false)
  const [page,     setPage]     = useState('home')

  // Mark chatbot as mounted only after hydration
  useEffect(() => setMounted(true), [])

  // Scroll to top when navigating to a sub-page
  useEffect(() => {
    if (!HOME_SECTIONS.has(page)) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [page])

  const handleNavigate = useCallback((target) => {
    if (HOME_SECTIONS.has(target)) {
      if (page !== 'home') {
        // Navigate home first, then scroll after render
        setPage('home')
        if (target !== 'home') {
          setTimeout(() => {
            document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }, 80)
        } else {
          setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 80)
        }
      } else {
        // Already on home — just scroll
        if (target !== 'home') {
          document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }
    } else {
      setPage(target)
    }
  }, [page])

  function renderContent() {
    switch (page) {
      case 'about':
        return <About />
      case 'projects':
        return <Projects />
      case 'resume':
        return <Resume />
      default:
        return (
          <>
            <Hero    onNavigate={handleNavigate} />
            <Skills />
            <Experience />
            <Achievements />
            <Contact />
          </>
        )
    }
  }

  if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />
  }

  return (
    <>
      <Nav current={page} onNavigate={handleNavigate} />
      <main style={{ paddingTop: 64 }}>
        {renderContent()}
      </main>
      <Footer onNavigate={handleNavigate} />
      {mounted && <LocalChatbot />}
    </>
  )
}
