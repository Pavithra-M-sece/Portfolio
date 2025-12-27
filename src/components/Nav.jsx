import React from 'react'

export default function Nav({ current, onNavigate }) {
  const navStyle = {
    display: 'flex',
    gap: 8,
    padding: '16px 32px',
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
  }

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 800,
    background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginRight: 32
  }

  const linkStyle = (active) => ({
    padding: '10px 16px',
    cursor: 'pointer',
    borderRadius: 8,
    background: active ? 'linear-gradient(135deg, #0ea5e9, #06b6d4)' : 'transparent',
    color: active ? '#ffffff' : '#475569',
    border: 'none',
    fontWeight: active ? 600 : 500,
    fontSize: '0.95rem',
    transition: 'all 0.2s ease',
    boxShadow: active ? '0 2px 8px rgba(14, 165, 233, 0.3)' : 'none'
  })

  const contactButtonStyle = {
    padding: '10px 20px',
    background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
    color: 'white',
    textDecoration: 'none',
    borderRadius: 8,
    fontWeight: 600,
    fontSize: '0.95rem',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 8px rgba(14, 165, 233, 0.3)'
  }

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>PM</div>
      <button style={linkStyle(current === 'home')} onClick={() => onNavigate('home')}>Home</button>
      <button style={linkStyle(current === 'about')} onClick={() => onNavigate('about')}>About</button>
      <button style={linkStyle(current === 'projects')} onClick={() => onNavigate('projects')}>Projects</button>
      <button style={linkStyle(current === 'resume')} onClick={() => onNavigate('resume')}>Resume</button>
      <div style={{flex: 1}} />
      <div style={{display: 'flex', alignItems: 'center', gap: 20}}>
        <a href="mailto:pavithra.m2024cse@sece.ac.in?subject=Portfolio Contact" style={{color: '#64748b', fontSize: '0.9rem', textDecoration: 'none', fontWeight: 500}} title="Send Email">
          Email
        </a>
        <a href="https://www.linkedin.com/in/pavithra-m-005a70333/" target="_blank" rel="noopener noreferrer" style={{color: '#64748b', fontSize: '0.9rem', textDecoration: 'none', fontWeight: 500}} title="LinkedIn">
          LinkedIn
        </a>
        <a href="https://github.com/Pavithra-M-sece" target="_blank" rel="noopener noreferrer" style={{color: '#64748b', fontSize: '0.9rem', textDecoration: 'none', fontWeight: 500}} title="GitHub">
          GitHub
        </a>
        <a href="#contact" style={contactButtonStyle}>Contact Me</a>
      </div>
    </nav>
  )
}