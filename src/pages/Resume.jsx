import React from 'react'

const EXPERIENCE = [
  {
    title: 'Data Engineering & Generative AI Intern', company: 'CodeBoosters', period: '2025', location: 'Remote',
    points: ['Worked on data pipeline design and processing workflows.', 'Explored RAG architectures for intelligent applications.', 'Built and evaluated LLM-based solutions for practical use cases.', 'Gained hands-on experience with vector databases and semantic search.'],
  },
  {
    title: 'MERN Stack Development Intern', company: 'Campus Aacharya', period: '2025', location: 'Remote',
    points: ['Developed full-stack web applications using the MERN stack.', 'Built RESTful APIs with Express.js and Node.js.', 'Designed responsive frontend interfaces using React.js.', 'Integrated MongoDB for data persistence and management.'],
  },
]

const EDUCATION = [
  { degree: 'Bachelor of Engineering — Computer Science', school: 'Sri Eshwar College of Engineering', period: '2024 – 2028', status: 'In Progress', courses: ['Data Structures & Algorithms', 'OOP', 'Database Management', 'Web Technologies', 'Software Engineering'] },
  { degree: 'Higher Secondary Certificate (HSC)', school: 'Kongu Nadu Matric Higher Secondary School', period: '2022 – 2024', status: 'First Class — 90.83%', courses: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science'] },
  { degree: 'Secondary School Leaving Certificate (SSLC)', school: 'Vidyaa Vikas Matric Higher Secondary School', period: '2021 – 2022', status: 'First Class — 91.6%', courses: ['Mathematics', 'Science', 'English'] },
]

const SKILLS = {
  'Programming Languages': ['C', 'C++', 'Python', 'JavaScript'],
  'Web Technologies':      ['HTML', 'CSS', 'React.js', 'Node.js', 'Express.js', 'Django'],
  'Database':              ['SQL', 'MongoDB', 'PostgreSQL'],
  'AI & Data':             ['Machine Learning', 'Generative AI', 'RAG', 'Pandas', 'XGBoost', 'FAISS'],
  'Cloud & Tools':         ['AWS', 'Git', 'GitHub', 'VS Code', 'Google Colab', 'Streamlit'],
}

const CERTIFICATIONS = [
  'Introduction to Prompt Engineering — July 2025',
  'DSA with C++ Bootcamp — April 2025',
  'Introduction to Web Design and Development — February 2025',
  'Bronze Medal — SkillRack, December 2024',
  'Introduction to HTML — SoloLearn, December 2024',
  'Introduction to C — SoloLearn, December 2024',
  'C Training Certificate — IIT Bombay, December 2024',
  'C++ Training Certificate — IIT Bombay, December 2024',
]

const S = {
  card: { marginBottom: 24, padding: '26px 28px', background: '#fff', border: '1.5px solid rgba(0,0,0,0.07)', borderRadius: 14, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' },
  heading: { fontSize: '0.72rem', fontWeight: 700, color: '#0EA5E9', letterSpacing: '0.2em', textTransform: 'uppercase', borderBottom: '1px solid rgba(14,165,233,0.15)', paddingBottom: 9, marginBottom: 20, display: 'block' },
}

export default function Resume() {
  return (
    <article style={{ background: 'var(--bg-primary)', padding: '90px 0 72px' }}>
      <div className="container" style={{ maxWidth: 840 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <span className="section-label">Curriculum Vitae</span>
          <h2 className="section-title">Ready to Explore My Work?</h2>
          <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.75, maxWidth: 540, margin: '0 auto 28px' }}>
            Interested in my technical journey, projects, and experience? Explore my resume or connect with me to discuss opportunities and collaborations.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '0.92rem', padding: '12px 26px' }}>
              👁 View Resume
            </a>
            <a href="/Resume.pdf" download="Pavithra_M_Resume.pdf" className="btn-pink" style={{ fontSize: '0.92rem', padding: '12px 26px' }}>
              ↓ Download PDF
            </a>
          </div>
        </div>

        {/* Summary */}
        <div style={S.card}>
          <span style={S.heading}>Professional Summary</span>
          <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.8 }}>
            Passionate Computer Science Engineering student with a strong foundation in programming, data engineering, and web development. Expertise in Python, data workflows, and competitive programming with 1500+ problems solved. Proven track record of building innovative projects including AI analytics platforms and RAG-based applications.
          </p>
          <div style={{ marginTop: 12, padding: '11px 14px', background: 'rgba(14,165,233,0.05)', borderLeft: '3px solid #0EA5E9', borderRadius: 4 }}>
            <p style={{ margin: 0, color: '#475569', fontSize: '0.86rem' }}>
              <strong style={{ color: '#1E293B' }}>Contact:</strong> +91 9677558590 &nbsp;|&nbsp; pavithra.m2024cse@sece.ac.in
            </p>
          </div>
        </div>

        {/* Experience */}
        <div style={S.card}>
          <span style={S.heading}>Experience</span>
          {EXPERIENCE.map((job, i) => (
            <div key={i} style={{ marginBottom: i < EXPERIENCE.length - 1 ? 24 : 0, paddingBottom: i < EXPERIENCE.length - 1 ? 24 : 0, borderBottom: i < EXPERIENCE.length - 1 ? '1px solid rgba(0,0,0,0.07)' : 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 10 }}>
                <div>
                  <h3 style={{ color: '#1E293B', fontSize: '0.98rem', fontWeight: 700, marginBottom: 2 }}>{job.title}</h3>
                  <p style={{ color: '#0EA5E9', fontWeight: 600, fontSize: '0.84rem', margin: 0 }}>{job.company} — {job.location}</p>
                </div>
                <span style={{ padding: '4px 12px', background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.2)', borderRadius: 12, fontSize: '0.74rem', fontWeight: 600, color: '#0EA5E9', height: 'fit-content' }}>{job.period}</span>
              </div>
              <ul style={{ paddingLeft: 18, margin: 0 }}>
                {job.points.map((pt, j) => <li key={j} style={{ color: '#475569', fontSize: '0.87rem', lineHeight: 1.7, marginBottom: 3 }}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div style={S.card}>
          <span style={S.heading}>Technical Skills</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: 20 }}>
            {Object.entries(SKILLS).map(([cat, list]) => (
              <div key={cat}>
                <h4 style={{ color: '#1E293B', fontSize: '0.84rem', fontWeight: 700, marginBottom: 10 }}>{cat}</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {list.map(s => <span key={s} className="tag" style={{ fontSize: '0.76rem', padding: '3px 10px' }}>{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div style={S.card}>
          <span style={S.heading}>Education</span>
          {EDUCATION.map((edu, i) => (
            <div key={i} style={{ marginBottom: i < EDUCATION.length - 1 ? 20 : 0, paddingBottom: i < EDUCATION.length - 1 ? 20 : 0, borderBottom: i < EDUCATION.length - 1 ? '1px solid rgba(0,0,0,0.07)' : 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 5 }}>
                <div>
                  <h4 style={{ color: '#1E293B', fontSize: '0.94rem', fontWeight: 700, marginBottom: 2 }}>{edu.degree}</h4>
                  <p style={{ color: '#0EA5E9', fontWeight: 600, fontSize: '0.84rem', margin: '0 0 1px' }}>{edu.school}</p>
                  <p style={{ color: '#94A3B8', fontSize: '0.78rem', margin: 0 }}>{edu.status}</p>
                </div>
                <span style={{ padding: '4px 12px', background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.2)', borderRadius: 12, fontSize: '0.74rem', fontWeight: 600, color: '#0EA5E9', height: 'fit-content' }}>{edu.period}</span>
              </div>
              <p style={{ color: '#94A3B8', fontSize: '0.78rem', margin: 0 }}>
                <strong style={{ color: '#475569' }}>Coursework:</strong> {edu.courses.join(' · ')}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div style={S.card}>
          <span style={S.heading}>Certifications</span>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
            {CERTIFICATIONS.map((cert, i) => (
              <li key={i} style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
                <span style={{ color: '#0EA5E9', fontSize: '0.76rem', marginTop: 3, flexShrink: 0 }}>▸</span>
                <span style={{ color: '#475569', fontSize: '0.87rem', lineHeight: 1.55 }}>{cert}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: 44, padding: '28px', background: '#fff', border: '1.5px solid rgba(0,0,0,0.07)', borderRadius: 14, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <h3 style={{ color: '#1E293B', fontWeight: 700, marginBottom: 9 }}>Interested in collaborating?</h3>
          <p style={{ color: '#475569', marginBottom: 22, fontSize: '0.94rem' }}>I'm always open to internship opportunities, research projects, and technical collaborations.</p>
          <a href="mailto:pavithra.m2024cse@sece.ac.in?subject=Opportunity — Pavithra M Portfolio" className="btn-blue" style={{ fontSize: '0.9rem', padding: '12px 26px' }}>
            Get In Touch
          </a>
        </div>
      </div>
    </article>
  )
}
