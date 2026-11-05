import React, { useState } from 'react'

const CONTACT_LINKS = [
  { label: 'Email',    value: 'pavithra.m2024cse@sece.ac.in', href: 'mailto:pavithra.m2024cse@sece.ac.in', icon: '✉' },
  { label: 'LinkedIn', value: 'linkedin.com/in/pavithra-m-005a70333', href: 'https://www.linkedin.com/in/pavithra-m-005a70333/', icon: 'in' },
  { label: 'GitHub',   value: 'github.com/Pavithra-M-sece', href: 'https://github.com/Pavithra-M-sece', icon: '⌥' },
]

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const subject = `Portfolio Contact from ${form.name}`
    const body    = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    window.location.href = `mailto:pavithra.m2024cse@sece.ac.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    }, 900)
  }

  return (
    <section id="contact" style={{ background: 'var(--bg-primary)', padding: '90px 0' }}>
      <div className="container">
        <span className="section-label">Get In Touch</span>
        <h2 className="section-title">Let's Connect.</h2>
        <p className="section-sub">
          I'm always interested in exploring new technologies, collaborating on meaningful projects,
          and connecting with people who enjoy solving challenging problems.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.4fr)', gap: 40, alignItems: 'start' }}>
          {/* Left */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
              {CONTACT_LINKS.map(c => (
                <a key={c.label} href={c.href}
                   target={c.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                   style={{ textDecoration: 'none' }}>
                  <div className="card" style={{ display: 'flex', gap: 14, alignItems: 'center', padding: '16px 18px' }}>
                    <div style={{
                      width: 38, height: 38, flexShrink: 0,
                      background: 'rgba(14,165,233,0.08)',
                      border: '1px solid rgba(14,165,233,0.2)',
                      borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.82rem', fontWeight: 700, color: '#0EA5E9', fontFamily: 'monospace'
                    }}>{c.icon}</div>
                    <div>
                      <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#94A3B8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 2 }}>{c.label}</div>
                      <div style={{ fontSize: '0.86rem', color: '#1E293B', fontWeight: 500 }}>{c.value}</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="card" style={{ padding: '20px 24px', textAlign: 'center' }}>
              <p style={{ fontSize: '0.88rem', color: '#475569', marginBottom: 16, lineHeight: 1.6 }}>
                Interested in my technical journey?
              </p>
              <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="/Resume.pdf" download="Pavithra_M_Resume.pdf" className="btn-blue"
                   style={{ fontSize: '0.84rem', padding: '10px 18px' }}>
                  Download Resume
                </a>
                <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer"
                   className="btn-ghost" style={{ fontSize: '0.84rem', padding: '9px 18px' }}>
                  View Resume
                </a>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="card" style={{ padding: '28px 32px' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1E293B', marginBottom: 20 }}>
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 600, color: '#475569', display: 'block', marginBottom: 6 }}>Full Name</label>
                  <input name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
                </div>
                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 600, color: '#475569', display: 'block', marginBottom: 6 }}>Email Address</label>
                  <input name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 600, color: '#475569', display: 'block', marginBottom: 6 }}>Message</label>
                <textarea name="message" placeholder="Tell me about your project or opportunity..." value={form.message} onChange={handleChange} required style={{ height: 130, resize: 'vertical' }} />
              </div>
              <button type="submit" disabled={status === 'sending'} className="btn-blue" style={{ justifyContent: 'center', marginTop: 4 }}>
                {status === 'sending' ? 'Opening Email Client…' : 'Send Message'}
              </button>
              {status === 'sent' && (
                <p style={{ color: '#0EA5E9', fontSize: '0.85rem', textAlign: 'center', margin: 0 }}>
                  ✓ Email client opened. Thank you!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          #contact .container > div:last-child{ grid-template-columns:1fr !important; }
        }
      `}</style>
    </section>
  )
}
