import React from 'react'

const EXPERIENCES = [
  {
    role: 'Data Engineering & Generative AI Intern',
    org: 'CodeBoosters', period: '2025', type: 'Internship',
    techs: ['Python', 'Data Engineering', 'Generative AI', 'RAG', 'LLM'],
    points: [
      'Worked on data pipeline design and processing workflows.',
      'Explored Retrieval-Augmented Generation (RAG) architectures.',
      'Built and evaluated LLM-based solutions for practical use cases.',
      'Gained hands-on experience with vector databases and semantic search.',
    ],
  },
  {
    role: 'MERN Stack Development Intern',
    org: 'Campus Aacharya', period: '2025', type: 'Internship',
    techs: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JavaScript'],
    points: [
      'Developed full-stack web applications using the MERN stack.',
      'Built RESTful APIs with Express.js and Node.js.',
      'Designed responsive frontend interfaces using React.js.',
      'Integrated MongoDB for data persistence and management.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--bg-primary)', padding: '90px 0' }}>
      <div className="container">
        <span className="section-label">Journey</span>
        <h2 className="section-title">Experience &amp; Learning</h2>
        <p className="section-sub">Practical experience through internships and hands-on technical work.</p>

        <div style={{ position: 'relative', maxWidth: 780 }}>
          <div style={{
            position: 'absolute', left: 20, top: 0, bottom: 0, width: 2,
            background: 'linear-gradient(to bottom, #0EA5E9, rgba(14,165,233,0.06))',
            borderRadius: 2
          }}/>

          {EXPERIENCES.map((exp, i) => (
            <div key={i} style={{ display: 'flex', gap: 28, marginBottom: i < EXPERIENCES.length - 1 ? 44 : 0, position: 'relative' }}>
              <div style={{
                width: 40, height: 40, flexShrink: 0, borderRadius: '50%',
                background: '#fff', border: '2.5px solid #0EA5E9',
                display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1,
                boxShadow: '0 2px 10px rgba(14,165,233,0.2)'
              }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#0EA5E9' }}/>
              </div>

              <div className="card" style={{ flex: 1, padding: '22px 24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, marginBottom: 12 }}>
                  <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1E293B', marginBottom: 3 }}>{exp.role}</h3>
                    <p style={{ color: '#0EA5E9', fontWeight: 600, fontSize: '0.88rem', margin: 0 }}>{exp.org}</p>
                  </div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    <span style={{
                      padding: '4px 12px', background: 'rgba(14,165,233,0.08)',
                      border: '1px solid rgba(14,165,233,0.2)', borderRadius: 20,
                      fontSize: '0.72rem', fontWeight: 600, color: '#0EA5E9'
                    }}>{exp.type}</span>
                    <span style={{
                      padding: '4px 12px', background: 'rgba(0,0,0,0.04)',
                      border: '1px solid rgba(0,0,0,0.08)', borderRadius: 20,
                      fontSize: '0.72rem', color: '#475569'
                    }}>{exp.period}</span>
                  </div>
                </div>
                <ul style={{ paddingLeft: 18, margin: '0 0 16px 0' }}>
                  {exp.points.map((pt, j) => (
                    <li key={j} style={{ color: '#475569', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: 4 }}>{pt}</li>
                  ))}
                </ul>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                  {exp.techs.map(t => <span key={t} className="tag" style={{ fontSize: '0.74rem' }}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
