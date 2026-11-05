import React, { useState } from 'react'

const PROJECTS = [
  {
    id: 'stocksense', title: 'StockSense', featured: true,
    category: 'Data Analytics · Machine Learning',
    tagline: 'Intelligent inventory analytics and demand forecasting platform.',
    description: 'An intelligent inventory analytics and demand forecasting platform that analyses historical sales data, predicts future demand, identifies stock-out risks, and provides explainable inventory replenishment recommendations.',
    features: ['Exploratory data analysis on historical sales data', 'Demand forecasting using XGBoost', 'Inventory risk identification and stock-out alerts', 'Explainable ML with feature importance insights', 'Replenishment recommendations engine', 'Interactive Streamlit analytics dashboard'],
    metrics: [{ label: 'MAE', value: '4.876' }, { label: 'RMSE', value: '6.767' }, { label: 'MAPE', value: '8.377%' }, { label: 'R²', value: '0.978' }],
    metricsNote: 'Reported evaluation results on test data.',
    techs: ['Python', 'Pandas', 'XGBoost', 'Streamlit', 'Machine Learning', 'Data Analytics'],
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    githubUrl: null, liveUrl: null,
  },
  {
    id: 'civicmind', title: 'CivicMindAI', featured: true,
    category: 'Artificial Intelligence · Civic Technology',
    tagline: 'AI-powered civic grievance processing and departmental routing platform.',
    description: 'An AI-powered civic grievance processing and intelligent departmental routing platform designed to improve complaint management through automation and intelligent analysis.',
    features: ['Citizen grievance submission portal', 'Automated complaint classification', 'AI-based priority prediction', 'Duplicate complaint detection', 'Intelligent departmental routing', 'Complaint status tracking', 'Officer assistance interface', 'Risk visualisation module'],
    metrics: [], metricsNote: '',
    techs: ['React', 'Node.js', 'Express.js', 'MongoDB', 'AI/ML', 'NLP'],
    color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    githubUrl: null, liveUrl: null,
  },
  {
    id: 'heritage', title: 'TN HeritageGuide', featured: true,
    category: 'Generative AI · Data Engineering · RAG',
    tagline: 'AI-powered Tamil Nadu heritage information assistant using RAG.',
    description: 'An AI-powered Tamil Nadu heritage information assistant that uses Retrieval-Augmented Generation to provide contextual, accurate information about historical monuments, temples, and heritage destinations.',
    features: ['Heritage data collection and curation pipeline', 'Data processing and document chunking', 'Vector embeddings for semantic search', 'Hybrid search combining BM25 and FAISS', 'Context-aware response generation', 'LLaMA-powered natural language interface'],
    metrics: [], metricsNote: '',
    techs: ['Python', 'RAG', 'FAISS', 'BM25', 'LangChain', 'Gradio', 'LLaMA'],
    color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    githubUrl: null, liveUrl: null,
  },
  {
    id: 'curetech', title: 'Curetech', featured: false,
    category: 'Web Development · Healthcare',
    tagline: 'Medical diagnosis assistant for patients and doctors.',
    description: 'Medical Diagnosis Assistant that helps patients and doctors by analysing symptoms, suggesting possible conditions, and providing treatment guidance.',
    features: ['Symptom analysis and condition suggestions', 'Treatment guidance module', 'Patient and doctor interfaces', 'MongoDB-backed data management'],
    metrics: [], metricsNote: '',
    techs: ['Python', 'Django', 'MongoDB', 'HTML', 'CSS'],
    color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    githubUrl: null, liveUrl: null,
  },
  {
    id: 'certgen', title: 'Certgen', featured: false,
    category: 'Web Development · Automation',
    tagline: 'Automated digital certificate creation and verification platform.',
    description: 'An online certification system that automates the creation, verification, and distribution of digital certificates.',
    features: ['Automated certificate generation', 'Secure verification system', 'Digital certificate distribution', 'Organisation management portal'],
    metrics: [], metricsNote: '',
    techs: ['Python', 'Django', 'MongoDB', 'HTML', 'CSS'],
    color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    githubUrl: null, liveUrl: null,
  },
  {
    id: 'imagecolour', title: 'Image Colourisation', featured: false,
    category: 'Deep Learning · Computer Vision',
    tagline: 'AI-powered grayscale image colourisation using a U-Net CNN model.',
    description: 'A full-stack AI Image Colourisation platform where users upload grayscale photos and receive AI-colourised results. Built with a U-Net encoder-decoder CNN trained on 1500+ image pairs.',
    features: ['U-Net CNN model trained on 1500+ image pairs', 'User registration and session management', 'Admin dashboard', 'Automatic file format conversion', 'Colourisation history in MongoDB'],
    metrics: [], metricsNote: '',
    techs: ['Python', 'Flask', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy', 'MongoDB'],
    color: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)',
    githubUrl: 'https://github.com/Pavithra-M-sece/Image_Colourisation', liveUrl: null,
  },
]

export default function Projects() {
  const [selected, setSelected] = useState(null)
  const [filter,   setFilter]   = useState('all')

  const displayed = filter === 'featured' ? PROJECTS.filter(p => p.featured) : PROJECTS

  return (
    <article style={{ background: 'var(--bg-primary)', padding: '90px 0 72px' }}>
      <style>{`
        @keyframes shimmer { 0%{transform:translateX(-100%)} 100%{transform:translateX(100%)} }
        .proj-card { cursor: pointer; overflow: hidden; padding: 0; }
        .proj-card:hover .proj-view { opacity: 1 !important; }
      `}</style>

      <div className="container">
        <span className="section-label">Work</span>
        <h2 className="section-title">My Projects</h2>
        <p className="section-sub">
          A collection of engineering projects focused on intelligent systems, data analytics, and real-world problem solving.
        </p>

        {/* Filter */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 44 }}>
          {['all', 'featured'].map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{
              padding: '8px 20px', borderRadius: 20, cursor: 'pointer',
              background: filter === f ? '#0EA5E9' : '#fff',
              color: filter === f ? '#fff' : '#475569',
              border: filter === f ? 'none' : '1.5px solid rgba(0,0,0,0.1)',
              fontWeight: filter === f ? 700 : 500, fontSize: '0.86rem',
              transition: 'all 0.2s ease', fontFamily: 'inherit'
            }}>
              {f === 'all' ? 'All Projects' : 'Featured'}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
          {displayed.map(proj => (
            <div key={proj.id} className="card proj-card" onClick={() => setSelected(proj)}>
              {/* Thumb */}
              <div style={{ height: 180, background: proj.color, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg,transparent 40%,rgba(255,255,255,0.08) 50%,transparent 60%)', animation: 'shimmer 2.8s linear infinite' }}/>
                <div className="proj-view" style={{
                  position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.18)',
                  opacity: 0, transition: 'opacity 0.3s ease',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.86rem', fontWeight: 700, color: '#fff', letterSpacing: '0.08em'
                }}>VIEW DETAILS</div>
                <div style={{
                  position: 'absolute', top: 12, left: 12,
                  background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(6px)',
                  padding: '3px 10px', borderRadius: 12,
                  fontSize: '0.68rem', fontWeight: 600, color: '#475569'
                }}>{proj.category}</div>
              </div>

              {/* Body */}
              <div style={{ padding: '20px 20px 18px' }}>
                <h3 style={{ color: '#1E293B', fontWeight: 700, fontSize: '1.05rem', marginBottom: 7 }}>{proj.title}</h3>
                <p style={{ color: '#475569', fontSize: '0.86rem', lineHeight: 1.65, marginBottom: 14 }}>{proj.tagline}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                  {proj.techs.slice(0, 4).map(t => <span key={t} className="tag" style={{ fontSize: '0.72rem', padding: '3px 10px' }}>{t}</span>)}
                  {proj.techs.length > 4 && <span className="tag" style={{ fontSize: '0.72px', padding: '3px 10px' }}>+{proj.techs.length - 4}</span>}
                </div>
                <button
                  onClick={ev => { ev.stopPropagation(); setSelected(proj) }}
                  style={{
                    width: '100%', padding: '10px', borderRadius: 8,
                    background: 'rgba(14,165,233,0.07)', border: '1.5px solid rgba(14,165,233,0.2)',
                    color: '#0EA5E9', fontSize: '0.84rem', fontWeight: 600,
                    cursor: 'pointer', transition: 'all 0.2s ease', fontFamily: 'inherit'
                  }}
                  onMouseEnter={e => e.currentTarget.style.background='rgba(14,165,233,0.14)'}
                  onMouseLeave={e => e.currentTarget.style.background='rgba(14,165,233,0.07)'}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          background: 'rgba(0,0,0,0.45)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 20, backdropFilter: 'blur(4px)', animation: 'fadeIn 0.2s ease'
        }}
          onClick={() => setSelected(null)}
        >
          <div onClick={e => e.stopPropagation()} style={{
            width: '100%', maxWidth: 720,
            background: '#fff', borderRadius: 18,
            padding: '32px 36px', maxHeight: '90vh', overflowY: 'auto',
            boxShadow: '0 24px 64px rgba(0,0,0,0.15)',
            animation: 'scaleIn 0.22s ease'
          }}>
            <div style={{ height: 180, background: selected.color, borderRadius: 12, marginBottom: 22, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg,transparent 40%,rgba(255,255,255,0.08) 50%,transparent 60%)', animation: 'shimmer 2.8s linear infinite' }}/>
              <h2 style={{ fontSize: 'clamp(1.2rem,3vw,1.6rem)', fontWeight: 800, color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.3)', fontFamily: "'Space Grotesk',sans-serif", position: 'relative' }}>{selected.title}</h2>
            </div>

            <p style={{ color: '#0EA5E9', fontSize: '0.76rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>{selected.category}</p>
            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: 22 }}>{selected.description}</p>

            {selected.metrics.length > 0 && (
              <div style={{ marginBottom: 22 }}>
                <h4 style={{ color: '#1E293B', fontSize: '0.82rem', fontWeight: 700, marginBottom: 12, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Model Performance</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10 }}>
                  {selected.metrics.map(m => (
                    <div key={m.label} style={{ background: 'rgba(14,165,233,0.06)', border: '1px solid rgba(14,165,233,0.15)', borderRadius: 10, padding: '12px 10px', textAlign: 'center' }}>
                      <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0EA5E9', marginBottom: 3 }}>{m.value}</div>
                      <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#94A3B8', letterSpacing: '0.08em' }}>{m.label}</div>
                    </div>
                  ))}
                </div>
                {selected.metricsNote && <p style={{ color: '#94A3B8', fontSize: '0.76rem', marginTop: 7 }}>* {selected.metricsNote}</p>}
              </div>
            )}

            <div style={{ marginBottom: 22 }}>
              <h4 style={{ color: '#1E293B', fontSize: '0.82rem', fontWeight: 700, marginBottom: 12, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Key Features</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {selected.features.map((f, i) => (
                  <li key={i} style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
                    <span style={{ color: '#0EA5E9', fontSize: '0.78rem', marginTop: 2, flexShrink: 0 }}>▸</span>
                    <span style={{ color: '#475569', fontSize: '0.87rem', lineHeight: 1.6 }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginBottom: 24 }}>
              <h4 style={{ color: '#1E293B', fontSize: '0.82rem', fontWeight: 700, marginBottom: 12, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Technologies</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {selected.techs.map(t => <span key={t} className="tag" style={{ padding: '5px 14px' }}>{t}</span>)}
              </div>
            </div>

            <div style={{ display: 'flex', gap: 12, alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', gap: 10 }}>
                {selected.githubUrl && (
                  <a href={selected.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-blue" style={{ fontSize: '0.86rem', padding: '10px 18px' }}>
                    View on GitHub
                  </a>
                )}
                {selected.liveUrl && (
                  <a href={selected.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize: '0.86rem', padding: '9px 18px' }}>
                    Live Demo
                  </a>
                )}
              </div>
              <button onClick={() => setSelected(null)} style={{
                background: '#F1F5F9', border: '1.5px solid #E2E8F0',
                borderRadius: 8, padding: '10px 18px', color: '#475569',
                cursor: 'pointer', fontWeight: 500, fontSize: '0.86rem', fontFamily: 'inherit',
                transition: 'all 0.2s ease'
              }}
                onMouseEnter={e => e.currentTarget.style.background='#E2E8F0'}
                onMouseLeave={e => e.currentTarget.style.background='#F1F5F9'}
              >
                Close ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </article>
  )
}
