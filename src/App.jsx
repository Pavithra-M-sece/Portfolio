import React, { useEffect, useState } from 'react'
import HomepageComponent from './pages/Home'
import LocalChatbot from './components/LocalChatbot'
import Nav from './components/Nav'
import Footer from './components/Footer'
import About from './pages/About'
import Projects from './pages/Projects'
import Resume from './pages/Resume'

export default function App() {
  const [mounted, setMounted] = useState(false)
  const [page, setPage] = useState('home')

  useEffect(() => setMounted(true), [])
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [page])

  function renderPage() {
    switch (page) {
      case 'about': return <About />
      case 'projects': return <Projects />
      case 'resume': return <Resume />
      default: return <HomepageComponent />
    }
  }

  return (
    <div>
      <Nav current={page} onNavigate={setPage} />
      {renderPage()}
      <Footer onNavigate={setPage} />
      {mounted && <LocalChatbot />}
    </div>
  )
}
