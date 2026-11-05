import React, { useState, useEffect } from 'react'

const NAV_LINKS = [
  { id: 'home',         label: 'Home' },
  { id: 'about',        label: 'About' },
  { id: 'skills',       label: 'Skills' },
  { id: 'projects',     label: 'Projects' },
  { id: 'experience',   label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact',      label: 'Contact' },
]

export default function Nav({ current, onNavigate }) {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  function handleNav(id) { onNavigate(id); setMenuOpen(false) }

  return (
    <>
      <style>{`
        .nav-link {
          background: none; border: none;
          padding: 7px 13px;
          font-size: 0.9rem; font-weight: 500;
          color: #475569; cursor: pointer;
          border-radius: 8px;
          transition: color 0.2s ease, background 0.2s ease;
          font-family: inherit; white-space: nowrap;
        }
        .nav-link:hover { color: #0EA5E9; background: rgba(14,165,233,0.07); }
        .nav-link.active {
          color: #fff;
          background: #0EA5E9;
          font-weight: 600;
        }
        .nav-contact-btn {
          padding: 9px 20px;
          background: #0EA5E9;
          color: #fff; border: none;
          border-radius: 9px; font-size: 0.9rem; font-weight: 700;
          cursor: pointer; transition: all 0.2s ease;
          font-family: inherit; text-decoration: none;
          display: inline-block;
        }
        .nav-contact-btn:hover {
          background: #0284C7;
          box-shadow: 0 4px 16px rgba(14,165,233,0.3);
          transform: translateY(-1px);
          color: #fff;
        }
        .nav-logo {
          font-size: 1.2rem; font-weight: 800;
          color: #0EA5E9;
          font-family: 'Space Grotesk', sans-serif;
          letter-spacing: 0.04em;
          background: none; border: none;
          cursor: pointer; padding: 0;
          transition: opacity 0.2s ease;
        }
        .nav-logo:hover { opacity: 0.8; }
        .hamburger {
          display: none; flex-direction: column; gap: 5px;
          background: none; border: none; cursor: pointer; padding: 4px;
        }
        .hamburger span {
          display: block; width: 22px; height: 2px;
          background: #475569; border-radius: 2px; transition: all 0.22s ease;
        }
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .hamburger   { display: flex !important; }
        }
        @media (min-width: 901px) {
          .nav-mobile  { display: none !important; }
        }
      `}</style>

      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled
          ? 'rgba(255,255,255,0.96)'
          : 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: scrolled
          ? '1px solid rgba(0,0,0,0.08)'
          : '1px solid rgba(0,0,0,0.06)',
        boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.06)' : 'none',
        transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
        padding: '0 24px'
      }}>
        <div style={{
          maxWidth: 1100, margin: '0 auto',
          display: 'flex', alignItems: 'center', height: 62, gap: 6
        }}>
          {/* Logo */}
          <button className="nav-logo" onClick={() => handleNav('home')} aria-label="Go home">
            PM
          </button>

          {/* Desktop links */}
          <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1, marginLeft: 16 }}>
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                className={`nav-link${current === link.id ? ' active' : ''}`}
                onClick={() => handleNav(link.id)}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Spacer */}
          <div style={{ flex: 1 }} className="nav-desktop" />

          {/* Right side links */}
          <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <a href="mailto:pavithra.m2024cse@sece.ac.in" style={{ color: '#475569', fontSize: '0.88rem', fontWeight: 500, textDecoration: 'none' }}
               onMouseEnter={e => e.currentTarget.style.color = '#0EA5E9'}
               onMouseLeave={e => e.currentTarget.style.color = '#475569'}>
              Email
            </a>
            <a href="https://www.linkedin.com/in/pavithra-m-005a70333/" target="_blank" rel="noopener noreferrer"
               style={{ color: '#475569', fontSize: '0.88rem', fontWeight: 500, textDecoration: 'none' }}
               onMouseEnter={e => e.currentTarget.style.color = '#0EA5E9'}
               onMouseLeave={e => e.currentTarget.style.color = '#475569'}>
              LinkedIn
            </a>
            <a href="https://github.com/Pavithra-M-sece" target="_blank" rel="noopener noreferrer"
               style={{ color: '#475569', fontSize: '0.88rem', fontWeight: 500, textDecoration: 'none' }}
               onMouseEnter={e => e.currentTarget.style.color = '#0EA5E9'}
               onMouseLeave={e => e.currentTarget.style.color = '#475569'}>
              GitHub
            </a>
            <button className="nav-contact-btn" onClick={() => handleNav('contact')}>
              Contact Me
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            style={{ marginLeft: 12 }}
          >
            <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className="nav-mobile"
          style={{
            background: 'rgba(255,255,255,0.98)',
            borderTop: '1px solid rgba(0,0,0,0.07)',
            padding: menuOpen ? '12px 0 20px' : '0',
            maxHeight: menuOpen ? 480 : 0,
            overflow: 'hidden',
            transition: 'max-height 0.3s ease, padding 0.3s ease'
          }}
        >
          {NAV_LINKS.map(link => (
            <button
              key={link.id}
              className={`nav-link${current === link.id ? ' active' : ''}`}
              onClick={() => handleNav(link.id)}
              style={{ display: 'block', width: '100%', textAlign: 'left', borderRadius: 0, padding: '12px 24px' }}
            >
              {link.label}
            </button>
          ))}
          <div style={{ padding: '12px 24px 0', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="mailto:pavithra.m2024cse@sece.ac.in" style={{ color: '#0EA5E9', fontSize: '0.88rem' }}>Email</a>
            <a href="https://www.linkedin.com/in/pavithra-m-005a70333/" target="_blank" rel="noopener noreferrer" style={{ color: '#0EA5E9', fontSize: '0.88rem' }}>LinkedIn</a>
            <a href="https://github.com/Pavithra-M-sece" target="_blank" rel="noopener noreferrer" style={{ color: '#0EA5E9', fontSize: '0.88rem' }}>GitHub</a>
          </div>
          <div style={{ padding: '10px 24px 0' }}>
            <button className="nav-contact-btn" onClick={() => handleNav('contact')}>Contact Me</button>
          </div>
        </div>
      </nav>
    </>
  )
}
