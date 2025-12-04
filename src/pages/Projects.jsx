import React, { useState } from 'react'
import { HomepageStyle } from '../styles/homepage-style'

const projectsData = [
  {
    id: 'p1',
    title: 'Curetech - Medical Diagnosis Assistant',
    summary: 'AI-powered medical diagnosis system helping patients and doctors',
    details: 'Medical Diagnosis Assistant helps patients and doctors by analyzing symptoms, suggesting possible conditions and providing treatment guidance. It improves decision making, ensures quick access to medical information and supports early disease detection. Built with Python Django framework and MongoDB for robust data management.',
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    technologies: ['Python', 'Django', 'MongoDB', 'HTML', 'CSS'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    date: 'July 2025'
  },
  {
    id: 'p2',
    title: 'Certgen - Online Certification System',
    summary: 'Automated digital certificate creation and verification platform',
    details: 'An online certification system that automates the creation, verification, and distribution of digital certificates. It ensures authenticity, enhanced security, reduces manual efforts and allows organizations to access easily and validate credentials. Features secure certificate generation and blockchain-based verification.',
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    technologies: ['Python', 'Django', 'MongoDB', 'HTML', 'CSS'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    date: 'May 2025'
  },
  {
    id: 'p3',
    title: 'Letslearn - E-Learning Platform',
    summary: 'Interactive online learning platform with courses and assessments',
    details: 'An e-learning platform that offers interactive courses, digital study materials, and assessments for learners. It enables flexible, self-paced learning, supports real-time progress tracking, and delivers personalized educational experiences accessible anytime, anywhere. Built with modern web technologies for optimal user experience.',
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    date: 'November 2024'
  },
  {
    id: 'p4',
    title: 'Portfolio Website',
    summary: 'Modern portfolio with interactive elements and animations',
    details: 'This very portfolio website you\'re viewing! Built with React and Vite, featuring smooth animations, responsive design, chatbot integration, and optimized performance. Includes contact forms, project showcases, and modern UI components.',
    image: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    technologies: ['React', 'Vite', 'CSS3', 'JavaScript'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    date: 'Current'
  }
]

export default function Projects() {
  const [selected, setSelected] = useState(null)
  const [filter, setFilter] = useState('all')

  const filteredProjects = filter === 'featured' 
    ? projectsData.filter(p => p.featured)
    : projectsData

  const filterButtonStyle = (active) => ({
    padding: '8px 16px',
    borderRadius: 20,
    border: 'none',
    background: active ? 'linear-gradient(135deg, #0ea5e9, #06b6d4)' : 'transparent',
    color: active ? 'white' : '#64748b',
    cursor: 'pointer',
    fontWeight: active ? 600 : 500,
    transition: 'all 0.2s ease'
  })



  const modalStyle = {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    padding: 20
  }

  const modalContentStyle = {
    width: '100%',
    maxWidth: 800,
    background: '#fff',
    padding: 40,
    borderRadius: 16,
    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
    maxHeight: '90vh',
    overflowY: 'auto'
  }

  return (
    <div style={{...HomepageStyle.container, paddingTop: 40}}>
      <style>
        {`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>
      <section style={HomepageStyle.section}>
        <h2 style={HomepageStyle.sectionTitle}>My Projects</h2>
        <p style={{textAlign: 'center', fontSize: '1.1rem', color: '#64748b', marginBottom: 40}}>
          Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
        </p>

        <div style={{display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 40}}>
          <button 
            style={filterButtonStyle(filter === 'all')}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            style={filterButtonStyle(filter === 'featured')}
            onClick={() => setFilter('featured')}
          >
            Featured
          </button>
        </div>

        <div style={HomepageStyle.projectsGrid}>
          {filteredProjects.map((project, index) => {
            const rotateDirection = index % 2 === 0 ? 5 : -5;
            const shadowColors = {
              'linear-gradient(135deg, #667eea 0%, #764ba2 100%)': 'rgba(102, 126, 234, 0.3)',
              'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)': 'rgba(240, 147, 251, 0.3)',
              'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)': 'rgba(79, 172, 254, 0.3)',
              'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)': 'rgba(168, 237, 234, 0.3)'
            };
            
            return (
              <div 
                key={project.id} 
                style={{
                  ...HomepageStyle.card,
                  transition: 'all 0.4s ease',
                  cursor: 'pointer'
                }}
                onClick={() => setSelected(project)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = `translateY(-10px) rotateY(${rotateDirection}deg)`;
                  e.currentTarget.style.boxShadow = `0 25px 50px ${shadowColors[project.image] || 'rgba(0,0,0,0.2)'}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) rotateY(0deg)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div style={{
                  width: '100%',
                  height: 200,
                  background: project.image,
                  borderRadius: 12,
                  marginBottom: 20,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%)',
                    backgroundSize: '20px 20px',
                    animation: 'shimmer 2s linear infinite'
                  }}></div>
                  {project.title.split(' - ')[0] || project.title.split(' ')[0]}
                </div>
                
                <h3 style={{color: '#1e293b', marginBottom: 12}}>{project.title}</h3>
                <p style={{color: '#64748b', lineHeight: 1.6, marginBottom: 20}}>{project.summary}</p>
                
                <div style={{display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 20}}>
                  {project.technologies.slice(0, 3).map((tech, techIndex) => {
                    const techColors = [
                      'linear-gradient(135deg, #667eea, #764ba2)',
                      'linear-gradient(135deg, #4facfe, #00f2fe)',
                      'linear-gradient(135deg, #43e97b, #38f9d7)',
                      'linear-gradient(135deg, #f093fb, #f5576c)',
                      'linear-gradient(135deg, #fa709a, #fee140)',
                      'linear-gradient(135deg, #a8edea, #fed6e3)'
                    ];
                    const techShadows = [
                      'rgba(102, 126, 234, 0.3)',
                      'rgba(79, 172, 254, 0.3)',
                      'rgba(67, 233, 123, 0.3)',
                      'rgba(240, 147, 251, 0.3)',
                      'rgba(250, 112, 154, 0.3)',
                      'rgba(168, 237, 234, 0.3)'
                    ];
                    
                    return (
                      <span 
                        key={tech} 
                        style={{
                          padding: '6px 14px',
                          background: techColors[techIndex % techColors.length],
                          color: techIndex === 5 ? '#333' : 'white',
                          borderRadius: 20,
                          fontSize: '0.85rem',
                          boxShadow: `0 4px 15px ${techShadows[techIndex % techShadows.length]}`,
                          transition: 'transform 0.2s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
                
                <button 
                  style={{
                    ...HomepageStyle.button,
                    width: '100%',
                    fontSize: '0.9rem',
                    padding: '12px 16px'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelected(project);
                  }}
                >
                  View Details
                </button>
              </div>
            );
          })}
        </div>

        {selected && (
          <div style={modalStyle} onClick={() => setSelected(null)}>
            <div style={modalContentStyle} onClick={e => e.stopPropagation()}>
              <div style={{
                width: '100%',
                height: 250,
                background: selected.image,
                borderRadius: 12,
                marginBottom: 24,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 700,
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%)',
                  backgroundSize: '20px 20px',
                  animation: 'shimmer 2s linear infinite'
                }}></div>
                {selected.title}
              </div>

              <h3 style={{color: '#1e293b', marginBottom: 16, fontSize: '1.8rem'}}>{selected.title}</h3>
              <p style={{color: '#64748b', lineHeight: 1.7, marginBottom: 24, fontSize: '1.1rem'}}>{selected.details}</p>

              <div style={{marginBottom: 24}}>
                <h4 style={{color: '#1e293b', marginBottom: 12}}>Technologies Used:</h4>
                <div style={{display: 'flex', gap: 8, flexWrap: 'wrap'}}>
                  {selected.technologies.map(tech => (
                    <span key={tech} style={{
                      padding: '6px 16px',
                      background: 'linear-gradient(135deg, #e0f2fe, #f0f9ff)',
                      color: '#0369a1',
                      borderRadius: 20,
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      border: '1px solid #bae6fd'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{display: 'flex', gap: 16, justifyContent: 'space-between', alignItems: 'center'}}>
                <div style={{display: 'flex', gap: 12}}>
                  <a href={selected.liveUrl} style={{
                    ...HomepageStyle.button,
                    textDecoration: 'none',
                    display: 'inline-block'
                  }}>
                    🚀 Live Demo
                  </a>
                  <a href={selected.githubUrl} style={{
                    ...HomepageStyle.button,
                    background: 'transparent',
                    color: '#0ea5e9',
                    border: '2px solid #0ea5e9',
                    textDecoration: 'none',
                    display: 'inline-block'
                  }}>
                    📁 View Code
                  </a>
                </div>
                <button 
                  style={{
                    padding: '12px 20px',
                    background: '#f1f5f9',
                    color: '#64748b',
                    border: 'none',
                    borderRadius: 8,
                    cursor: 'pointer',
                    fontWeight: 500
                  }}
                  onClick={() => setSelected(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}