import React from 'react'

const CATEGORIES = [
  { icon: '{ }',   title: 'Programming Languages',          skills: ['Python', 'C', 'C++', 'JavaScript', 'SQL'] },
  { icon: '⬡',     title: 'Data Engineering & Databases',   skills: ['PostgreSQL', 'MongoDB', 'Data Processing', 'Data Analysis', 'Pandas', 'PySpark'] },
  { icon: '◈',     title: 'AI & Machine Learning',          skills: ['Machine Learning', 'Generative AI', 'NLP', 'Retrieval-Augmented Generation', 'FAISS', 'XGBoost'] },
  { icon: '⟨/⟩',  title: 'Development',                    skills: ['React.js', 'Node.js', 'Express.js', 'HTML', 'CSS', 'FastAPI'] },
  { icon: '☁',     title: 'Cloud & Tools',                  skills: ['AWS', 'Git', 'GitHub', 'VS Code', 'Google Colab', 'Streamlit'] },
]

export default function Skills() {
  return (
    <section id="skills" style={{ background: '#fff', padding: '90px 0' }}>
      <div className="container">
        <span className="section-label">Expertise</span>
        <h2 className="section-title">Technical Expertise</h2>
        <p className="section-sub">
          Technologies and tools I use to explore, build, and develop practical solutions.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
          {CATEGORIES.map(cat => (
            <div key={cat.title} className="card" style={{ padding: '24px 26px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                <div style={{
                  width: 36, height: 36,
                  background: 'rgba(14,165,233,0.08)',
                  border: '1px solid rgba(14,165,233,0.2)',
                  borderRadius: 8, display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: '0.85rem', color: '#0EA5E9',
                  fontWeight: 700, fontFamily: 'monospace', flexShrink: 0
                }}>
                  {cat.icon}
                </div>
                <h3 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#1E293B', margin: 0 }}>
                  {cat.title}
                </h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {cat.skills.map(s => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
