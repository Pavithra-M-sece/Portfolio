import React from 'react';

export default function Footer({ onNavigate }) {
  const footerStyle = {
    background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
    color: 'white',
    padding: '40px 24px 24px',
    marginTop: '80px'
  };

  const containerStyle = {
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: 40
  };

  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  };

  const linkStyle = {
    color: '#cbd5e1',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    transition: 'color 0.2s ease'
  };

  const quickLinkStyle = {
    ...linkStyle,
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    font: 'inherit',
    textAlign: 'left'
  };

  const goHome = () => onNavigate?.('home');
  const goAbout = () => onNavigate?.('about');
  const goProjects = () => onNavigate?.('projects');
  const goContact = () => {
    onNavigate?.('home');
    window.setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  const socialLinksStyle = {
    display: 'flex',
    gap: 16,
    marginTop: 8
  };

  const socialLinkStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.2rem',
    transition: 'all 0.3s ease'
  };

  const copyrightStyle = {
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    paddingTop: 24,
    marginTop: 40,
    textAlign: 'center',
    color: '#94a3b8',
    fontSize: '0.9rem'
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <h3 style={{color: '#0ea5e9', marginBottom: 8}}>Pavithra M</h3>
          <p style={{color: '#cbd5e1', lineHeight: 1.6}}>
            Computer Science Engineering student passionate about building innovative solutions 
            and solving complex problems through code.
          </p>
          <div style={{display: 'flex', gap: 16, marginTop: 8, flexWrap: 'wrap'}}>
            <a 
              href="mailto:pavithra.m2024cse@sece.ac.in?subject=Portfolio Inquiry" 
              style={{color: '#0ea5e9', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500}}
              title="Send Email"
            >
              Email
            </a>
            <a 
              href="https://www.linkedin.com/in/pavithra-m-005a70333/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{color: '#0ea5e9', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500}}
              title="LinkedIn"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/Pavithra-M-sece" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{color: '#0ea5e9', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500}}
              title="GitHub"
            >
              GitHub
            </a>
          </div>
        </div>

        <div style={sectionStyle}>
          <h4 style={{color: 'white', marginBottom: 8}}>Quick Links</h4>
          <button type="button" onClick={goHome} style={quickLinkStyle}>🏠 Home</button>
          <button type="button" onClick={goAbout} style={quickLinkStyle}>👤 About</button>
          <button type="button" onClick={goProjects} style={quickLinkStyle}>💻 Projects</button>
          <button type="button" onClick={goContact} style={quickLinkStyle}>📞 Contact</button>
        </div>

        <div style={sectionStyle}>
          <h4 style={{color: 'white', marginBottom: 8}}>Coding Profiles</h4>
          <a href="https://leetcode.com/u/pavithra_168/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            🔥 LeetCode
          </a>
          <a href="https://www.skillrack.com/faces/resume.xhtml?id=515019&key=ec99021f0f8e3a4ae428457e5a8023dc40176ed0" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            🏆 SkillRack
          </a>
          <a href="https://www.geeksforgeeks.org/user/pavithramcw0v/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            💚 GeeksforGeeks
          </a>
          <a href="https://github.com/Pavithra-M-sece" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            📁 GitHub Projects
          </a>
        </div>

        <div style={sectionStyle}>
          <h4 style={{color: 'white', marginBottom: 8}}>Contact Info</h4>
          <div style={{...linkStyle, cursor: 'default'}}>
            📞 +91 9677558590
          </div>
          <a href="mailto:pavithra.m2024cse@sece.ac.in?subject=Portfolio Contact" style={linkStyle}>
            📧 pavithra.m2024cse@sece.ac.in
          </a>
          <div style={{...linkStyle, cursor: 'default'}}>
            🎓 Sri Eshwar College of Engineering
          </div>
          <div style={{...linkStyle, cursor: 'default'}}>
            📍 Coimbatore, India
          </div>
        </div>
      </div>

      <div style={copyrightStyle}>
        <p>© 2024 Pavithra M. All rights reserved. Built with React & passion for coding! 🚀</p>
      </div>
    </footer>
  );
}