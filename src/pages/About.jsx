import React from 'react'

const INFO_CARDS = [
  { icon: '⬡',    title: 'Data Engineering',    desc: 'Designing data workflows, exploring data processing, database technologies, and building reliable data-driven systems.' },
  { icon: '◈',    title: 'Artificial Intelligence', desc: 'Exploring machine learning, NLP, Generative AI, and intelligent applications that solve real-world problems.' },
  { icon: '⟨/⟩', title: 'Software Engineering', desc: 'Building practical applications using modern frontend, backend, database, and development technologies.' },
]

const TIMELINE = [
  {
    period: '2024 – 2028', current: true,
    degree: 'B.E. Computer Science and Engineering',
    institution: 'Sri Eshwar College of Engineering, Coimbatore',
    note: 'Currently pursuing — focusing on software development, data engineering, and AI/ML.',
  },
  {
    period: '2022 – 2024', current: false,
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Kongu Nadu Matric Higher Secondary School',
    note: 'Completed with 90.83 percentile. Focus on Mathematics and Computer Science.',
  },
  {
    period: '2021 – 2022', current: false,
    degree: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'Vidyaa Vikas Matric Higher Secondary School',
    note: 'Completed with 91.6 percentile.',
  },
]

export default function About() {
  return (
    <article style={{ background: 'var(--bg-primary)', padding: '90px 0 72px' }}>
      <style>{`
        .about-photo { transition: transform 0.4s ease, filter 0.4s ease; }
        .about-photo:hover { transform: scale(1.03); filter: brightness(1.06) contrast(1.04); }
        @media(max-width:768px){ .about-grid{ grid-template-columns:1fr !important; } }
      `}</style>

      <div className="container">
        <span className="section-label">About Me</span>
        <h2 className="section-title">Curiosity Drives My Engineering Journey.</h2>
        <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.8, maxWidth: 660, marginBottom: 56 }}>
          I am a Computer Science Engineering student interested in building intelligent, scalable,
          and data-driven applications. My learning journey spans software development, data engineering,
          artificial intelligence, and Generative AI. Through internships, projects, and technical
          challenges, I continuously explore how technology can address practical problems.
        </p>

        {/* Intro grid */}
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: 44, alignItems: 'flex-start', marginBottom: 72 }}>
          {/* Photo */}
          <div>
            <div className="card" style={{ padding: 10, borderRadius: 18 }}>
              <img
                src="/photo.jpg"
                alt="Pavithra M"
                className="about-photo"
                style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', borderRadius: 12, display: 'block' }}
                onError={e => {
                  e.currentTarget.style.display = 'none'
                  const fb = e.currentTarget.parentElement
                  fb.style.display = 'flex'; fb.style.alignItems = 'center'
                  fb.style.justifyContent = 'center'; fb.style.height = '300px'
                  fb.innerHTML = '<span style="font-size:4rem;font-weight:800;color:#0EA5E9;font-family:Space Grotesk,sans-serif">PM</span>'
                }}
              />
            </div>
          </div>

          {/* Info */}
          <div>
            <h3 style={{ fontSize: '1.55rem', fontWeight: 800, fontFamily: "'Space Grotesk',sans-serif", marginBottom: 4 }}>
              Pavithra M
            </h3>
            <p style={{ color: '#0EA5E9', fontWeight: 600, fontSize: '0.92rem', marginBottom: 18 }}>
              Data Engineering · AI/ML · Software Development
            </p>
            <p style={{ fontSize: '0.96rem', lineHeight: 1.8, color: '#475569', marginBottom: 14 }}>
              I'm a passionate Computer Science Engineering student at Sri Eshwar College of Engineering
              with a strong foundation in programming and web development. My journey in tech started
              with solving coding problems, and it has evolved into building complete web applications
              and intelligent data-driven systems.
            </p>
            <p style={{ fontSize: '0.96rem', lineHeight: 1.8, color: '#475569', marginBottom: 24 }}>
              I specialise in Python, Data Engineering, and AI technologies. I'm an active competitive
              programmer with 1500+ problems solved across platforms and have built several projects
              including AI-powered analytics platforms and RAG-based assistants.
            </p>

            <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap', marginBottom: 24 }}>
              {['Problem Solver', 'Team Player', 'Continuous Learner', 'Open Source Enthusiast'].map(t => (
                <span key={t} className="tag" style={{ fontSize: '0.82rem', padding: '5px 14px' }}>{t}</span>
              ))}
            </div>

            {/* Quick contact */}
            <div className="card" style={{ padding: '16px 18px' }}>
              {[
                { label: 'Email',    val: 'pavithra.m2024cse@sece.ac.in', href: 'mailto:pavithra.m2024cse@sece.ac.in' },
                { label: 'LinkedIn', val: 'linkedin.com/in/pavithra-m-005a70333', href: 'https://www.linkedin.com/in/pavithra-m-005a70333/' },
                { label: 'GitHub',   val: 'github.com/Pavithra-M-sece', href: 'https://github.com/Pavithra-M-sece' },
              ].map(c => (
                <div key={c.label} style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8 }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#0EA5E9', width: 52, flexShrink: 0, letterSpacing: '0.04em' }}>{c.label}</span>
                  <a href={c.href} target={c.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                     style={{ color: '#475569', fontSize: '0.84rem', textDecoration: 'none' }}
                     onMouseEnter={e => e.currentTarget.style.color='#0EA5E9'}
                     onMouseLeave={e => e.currentTarget.style.color='#475569'}>
                    {c.val}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Focus cards */}
        <div style={{ marginBottom: 72 }}>
          <h3 style={{ fontSize: '0.74rem', fontWeight: 700, color: '#94A3B8', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 20 }}>
            Focus Areas
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16 }}>
            {INFO_CARDS.map(card => (
              <div key={card.title} className="card" style={{ padding: '24px 22px' }}>
                <div style={{
                  width: 40, height: 40, background: 'rgba(14,165,233,0.08)',
                  border: '1px solid rgba(14,165,233,0.2)', borderRadius: 9,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1rem', color: '#0EA5E9', fontFamily: 'monospace',
                  fontWeight: 700, marginBottom: 14
                }}>
                  {card.icon}
                </div>
                <h4 style={{ color: '#1E293B', fontWeight: 700, fontSize: '0.96rem', marginBottom: 8 }}>{card.title}</h4>
                <p style={{ color: '#475569', fontSize: '0.87rem', lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education timeline */}
        <div>
          <h3 style={{ fontSize: '0.74rem', fontWeight: 700, color: '#94A3B8', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 24 }}>
            Education
          </h3>
          <div style={{ position: 'relative', maxWidth: 740 }}>
            <div style={{
              position: 'absolute', left: 18, top: 0, bottom: 0, width: 2,
              background: 'linear-gradient(to bottom, #0EA5E9, rgba(14,165,233,0.06))',
              borderRadius: 2
            }}/>
            {TIMELINE.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 26, marginBottom: i < TIMELINE.length - 1 ? 32 : 0 }}>
                <div style={{
                  width: 36, height: 36, flexShrink: 0, borderRadius: '50%',
                  background: item.current ? 'rgba(14,165,233,0.1)' : '#fff',
                  border: `2.5px solid ${item.current ? '#0EA5E9' : 'rgba(0,0,0,0.15)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1, marginTop: 2,
                  boxShadow: item.current ? '0 2px 10px rgba(14,165,233,0.2)' : 'none'
                }}>
                  <div style={{ width: 9, height: 9, borderRadius: '50%', background: item.current ? '#0EA5E9' : '#CBD5E1' }}/>
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4, flexWrap: 'wrap' }}>
                    <span style={{
                      fontSize: '0.72rem', fontWeight: 700,
                      color: item.current ? '#0EA5E9' : '#475569',
                      background: item.current ? 'rgba(14,165,233,0.08)' : 'rgba(0,0,0,0.04)',
                      border: `1px solid ${item.current ? 'rgba(14,165,233,0.2)' : 'rgba(0,0,0,0.08)'}`,
                      padding: '3px 10px', borderRadius: 12
                    }}>{item.period}</span>
                    {item.current && (
                      <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#0EA5E9', background: 'rgba(14,165,233,0.08)', padding: '2px 8px', borderRadius: 10 }}>
                        CURRENT
                      </span>
                    )}
                  </div>
                  <h4 style={{ color: '#1E293B', fontWeight: 700, fontSize: '0.96rem', marginBottom: 2 }}>{item.degree}</h4>
                  <p style={{ color: '#0EA5E9', fontSize: '0.85rem', fontWeight: 600, marginBottom: 3 }}>{item.institution}</p>
                  <p style={{ color: '#475569', fontSize: '0.83rem', lineHeight: 1.6, margin: 0 }}>{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
