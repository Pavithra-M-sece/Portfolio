import React from 'react'

const NAV = [
  { label: 'Home',         id: 'home' },
  { label: 'About',        id: 'about' },
  { label: 'Skills',       id: 'skills' },
  { label: 'Projects',     id: 'projects' },
  { label: 'Experience',   id: 'experience' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Contact',      id: 'contact' },
]

export default function Footer({ onNavigate }) {
  function backToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    onNavigate?.('home')
  }

  const linkStyle = {
    color: '#64748B', textDecoration: 'none', fontSize: '0.88rem',
    transition: 'color 0.2s ease', display: 'block', marginBottom: 9
  }

  return (
    <footer style={{
      background: '#1E293B',
      color: '#fff',
      padding: '56px 24px 28px'
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
          gap: 36, marginBottom: 44
        }}>
          {/* Brand */}
          <div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0EA5E9', letterSpacing: '0.04em', marginBottom: 10, fontFamily: "'Space Grotesk',sans-serif" }}>
              PM.
            </div>
            <p style={{ color: '#94A3B8', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: 18, maxWidth: 220 }}>
              Data Engineering · AI/ML · Software Development
            </p>
            <div style={{ display: 'flex', gap: 16 }}>
              {[
                { label: 'GitHub',   href: 'https://github.com/Pavithra-M-sece' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pavithra-m-005a70333/' },
                { label: 'Email',    href: 'mailto:pavithra.m2024cse@sece.ac.in' },
              ].map(s => (
                <a key={s.label} href={s.href}
                   target={s.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                   style={{ color: '#94A3B8', fontSize: '0.84rem', textDecoration: 'none', transition: 'color 0.2s ease' }}
                   onMouseEnter={e => e.currentTarget.style.color = '#0EA5E9'}
                   onMouseLeave={e => e.currentTarget.style.color = '#94A3B8'}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.2em', color: '#0EA5E9', textTransform: 'uppercase', marginBottom: 16 }}>
              Navigation
            </p>
            {NAV.map(n => (
              <button key={n.id} onClick={() => onNavigate?.(n.id)}
                style={{ ...linkStyle, background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit', textAlign: 'left' }}
                onMouseEnter={e => e.currentTarget.style.color = '#0EA5E9'}
                onMouseLeave={e => e.currentTarget.style.color = '#64748B'}>
                {n.label}
              </button>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.2em', color: '#0EA5E9', textTransform: 'uppercase', marginBottom: 16 }}>
              Contact
            </p>
            <a href="mailto:pavithra.m2024cse@sece.ac.in" style={linkStyle}
               onMouseEnter={e => e.currentTarget.style.color='#0EA5E9'}
               onMouseLeave={e => e.currentTarget.style.color='#64748B'}>
              pavithra.m2024cse@sece.ac.in
            </a>
            <a href="https://www.linkedin.com/in/pavithra-m-005a70333/" target="_blank" rel="noopener noreferrer" style={linkStyle}
               onMouseEnter={e => e.currentTarget.style.color='#0EA5E9'}
               onMouseLeave={e => e.currentTarget.style.color='#64748B'}>
              LinkedIn Profile
            </a>
            <a href="https://github.com/Pavithra-M-sece" target="_blank" rel="noopener noreferrer" style={linkStyle}
               onMouseEnter={e => e.currentTarget.style.color='#0EA5E9'}
               onMouseLeave={e => e.currentTarget.style.color='#64748B'}>
              GitHub Profile
            </a>
          </div>

          {/* Resume */}
          <div>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.2em', color: '#0EA5E9', textTransform: 'uppercase', marginBottom: 16 }}>
              Resume
            </p>
            <a href="/Resume.pdf" download="Pavithra_M_Resume.pdf" className="btn-blue"
               style={{ fontSize: '0.84rem', padding: '10px 18px', marginBottom: 12, display: 'inline-flex' }}>
              Download
            </a>
            <br/>
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer"
               style={{ color: '#0EA5E9', fontSize: '0.84rem', textDecoration: 'none', marginTop: 10, display: 'inline-block' }}>
              View PDF →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: 20,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 14
        }}>
          <p style={{ color: '#475569', fontSize: '0.82rem', margin: 0 }}>
            © 2026 Pavithra M. All rights reserved.
          </p>
          <button
            onClick={backToTop}
            style={{
              background: 'rgba(14,165,233,0.12)', border: '1px solid rgba(14,165,233,0.28)',
              borderRadius: 7, padding: '8px 16px', color: '#0EA5E9',
              fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer',
              transition: 'all 0.2s ease', fontFamily: 'inherit',
              display: 'flex', alignItems: 'center', gap: 6
            }}
            onMouseEnter={e => { e.currentTarget.style.background='rgba(14,165,233,0.22)'; e.currentTarget.style.transform='translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background='rgba(14,165,233,0.12)'; e.currentTarget.style.transform='translateY(0)'; }}
            aria-label="Back to top"
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  )
}
