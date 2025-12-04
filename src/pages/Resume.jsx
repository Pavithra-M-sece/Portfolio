import React from 'react'
import { HomepageStyle } from '../styles/homepage-style'

export default function Resume() {
  const experience = [
    {
      title: 'Computer Science Engineering Student',
      company: 'Sri Eshwar College of Engineering',
      period: '2024 - 2028',
      location: 'Coimbatore, India',
      responsibilities: [
        'Pursuing Bachelor of Engineering in Computer Science with focus on software development',
        'Learning advanced programming concepts, data structures, and algorithms',
        'Working on practical projects using Python, Django, and web technologies',
        'Participating in coding competitions and hackathons'
      ]
    },
    {
      title: 'Competitive Programming Achievements',
      company: 'Various Platforms',
      period: '2024 - Present',
      location: 'Online',
      responsibilities: [
        'Solved 1200+ problems on SkillRack with 365 Bronze Medal achievement',
        'Solved 80+ problems on LeetCode with Global Rank 1418175',
        'Achieved 3 stars in C and Python on HackerRank',
        'Solved 170+ problems on CodeChef platform'
      ]
    },
    {
      title: 'Project Development Experience',
      company: 'Personal & Academic Projects',
      period: '2024 - Present',
      location: 'Self-directed',
      responsibilities: [
        'Developed Curetech - Medical Diagnosis Assistant using Python and Django',
        'Built Certgen - Online Certification System with MongoDB integration',
        'Created Letslearn - E-learning platform with interactive features',
        'Implemented responsive designs and user-friendly interfaces'
      ]
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Engineering in Computer Science',
      school: 'Sri Eshwar College of Engineering',
      period: '2024 - 2028',
      gpa: 'In Progress',
      relevant: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Database Management', 'Web Technologies', 'Software Engineering']
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      school: 'Kongu Nadu Matric Higher Secondary School',
      period: '2022 - 2024',
      gpa: 'First Class',
      relevant: ['Mathematics', 'Physics', 'Chemistry']
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      school: 'Vidyaa Vikas Matric Higher Secondary School',
      period: '2021 - 2022',
      gpa: 'First Class',
      relevant: ['Mathematics', 'Science', 'English']
    }
  ]

  const skills = {
    'Programming Languages': ['C', 'C++', 'Python', 'Java (Basics)', 'JavaScript (Basics)'],
    'Web Technologies': ['HTML', 'CSS', 'JavaScript', 'Django Framework'],
    'Database': ['SQL (Basics)', 'MongoDB (Basics)'],
    'Core Concepts': ['Data Structures & Algorithms (Basic)', 'Object-Oriented Programming (Basic)'],
    'Tools & Technologies': ['VS Code', 'Canva', 'Figma', 'Google Colab', 'Git']
  }

  const certifications = [
    'Introduction to Prompt Engineering (July 2025)',
    'DSA with C++ Bootcamp (April 2025)',
    'Introduction to Web Design and Development (February 2025)',
    'Bronze Medal from SkillRack (December 2024)',
    'Introduction to HTML - SoloLearn (December 2024)',
    'Introduction to C - SoloLearn (December 2024)',
    'Certificate of Completion of C Training - IIT Bombay (December 2024)',
    'Certificate of Completion of C++ Training - IIT Bombay (December 2024)'
  ]

  const sectionStyle = {
    marginBottom: 48,
    padding: 32,
    background: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    boxShadow: '0 8px 32px rgba(2,6,23,0.08)'
  }

  const experienceItemStyle = {
    marginBottom: 32,
    paddingBottom: 24,
    borderBottom: '1px solid #e2e8f0'
  }

  const downloadButtonStyle = {
    ...HomepageStyle.button,
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    fontSize: '1.1rem',
    padding: '16px 32px',
    marginBottom: 40
  }

  return (
    <div style={{...HomepageStyle.container, paddingTop: 40}}>
      <section style={HomepageStyle.section}>
        <div style={{textAlign: 'center', marginBottom: 40}}>
          <h2 style={HomepageStyle.sectionTitle}>Resume</h2>
          <p style={{fontSize: '1.1rem', color: '#64748b', marginBottom: 32}}>
            Download my resume or view my experience and qualifications below
          </p>
          <div style={{display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" style={{
              ...downloadButtonStyle, 
              textDecoration: 'none',
              background: 'linear-gradient(135deg, #667eea, #764ba2)'
            }}>
              👁️ View Resume
            </a>
            <a href="/Resume.pdf" download="Pavithra_M_Resume.pdf" style={{
              ...downloadButtonStyle, 
              textDecoration: 'none',
              background: 'linear-gradient(135deg, #f093fb, #f5576c)'
            }}>
              📄 Download PDF
            </a>
          </div>
        </div>

        {/* Professional Summary */}
        <div style={sectionStyle}>
          <h3 style={{color: '#1e293b', marginBottom: 20, fontSize: '1.5rem', borderBottom: '2px solid #0ea5e9', paddingBottom: 8, display: 'inline-block'}}>
            Professional Summary
          </h3>
          <p style={{fontSize: '1.1rem', lineHeight: 1.8, color: '#475569'}}>
            Passionate Computer Science Engineering student with strong foundation in programming and web development. 
            Expertise in Python, Django, and competitive programming with 1200+ problems solved across various platforms. 
            Proven track record of building innovative projects including medical diagnosis systems and e-learning platforms. 
            Strong problem-solver with excellent coding skills and commitment to continuous learning.
          </p>
          <div style={{marginTop: 16, padding: 16, background: '#f8fafc', borderRadius: 8, borderLeft: '4px solid #0ea5e9'}}>
            <p style={{margin: 0, color: '#475569', fontSize: '1rem'}}>
              <strong>Contact:</strong> +91 9677558590 | pavithra.m2024cse@sece.ac.in
            </p>
          </div>
        </div>

        {/* Experience */}
        <div style={sectionStyle}>
          <h3 style={{color: '#1e293b', marginBottom: 32, fontSize: '1.5rem', borderBottom: '2px solid #0ea5e9', paddingBottom: 8, display: 'inline-block'}}>
            Professional Experience
          </h3>
          {experience.map((job, index) => (
            <div key={index} style={experienceItemStyle}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12, flexWrap: 'wrap', gap: 16}}>
                <div>
                  <h4 style={{color: '#1e293b', fontSize: '1.3rem', margin: 0}}>{job.title}</h4>
                  <p style={{color: '#0ea5e9', fontWeight: 600, margin: '4px 0', fontSize: '1.1rem'}}>{job.company}</p>
                  <p style={{color: '#64748b', margin: 0, fontSize: '0.95rem'}}>{job.location}</p>
                </div>
                <span style={{
                  background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
                  color: 'white',
                  padding: '6px 16px',
                  borderRadius: 20,
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  whiteSpace: 'nowrap'
                }}>
                  {job.period}
                </span>
              </div>
              <ul style={{paddingLeft: 20, lineHeight: 1.7}}>
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx} style={{color: '#475569', marginBottom: 8}}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div style={sectionStyle}>
          <h3 style={{color: '#1e293b', marginBottom: 32, fontSize: '1.5rem', borderBottom: '2px solid #0ea5e9', paddingBottom: 8, display: 'inline-block'}}>
            Technical Skills
          </h3>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 32}}>
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category}>
                <h4 style={{color: '#1e293b', marginBottom: 16, fontSize: '1.2rem'}}>{category}</h4>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: 8}}>
                  {skillList.map(skill => (
                    <span key={skill} style={{
                      padding: '6px 12px',
                      background: 'linear-gradient(135deg, #e0f2fe, #f0f9ff)',
                      color: '#0369a1',
                      borderRadius: 16,
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      border: '1px solid #bae6fd'
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div style={sectionStyle}>
          <h3 style={{color: '#1e293b', marginBottom: 32, fontSize: '1.5rem', borderBottom: '2px solid #0ea5e9', paddingBottom: 8, display: 'inline-block'}}>
            Education
          </h3>
          {education.map((edu, index) => (
            <div key={index} style={{marginBottom: 24}}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12, flexWrap: 'wrap', gap: 16}}>
                <div>
                  <h4 style={{color: '#1e293b', fontSize: '1.2rem', margin: 0}}>{edu.degree}</h4>
                  <p style={{color: '#0ea5e9', fontWeight: 600, margin: '4px 0'}}>{edu.school}</p>
                  <p style={{color: '#64748b', margin: 0}}>GPA: {edu.gpa}</p>
                </div>
                <span style={{
                  background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
                  color: 'white',
                  padding: '6px 16px',
                  borderRadius: 20,
                  fontSize: '0.9rem',
                  fontWeight: 600
                }}>
                  {edu.period}
                </span>
              </div>
              <div>
                <strong style={{color: '#475569'}}>Relevant Coursework: </strong>
                <span style={{color: '#64748b'}}>{edu.relevant.join(', ')}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div style={sectionStyle}>
          <h3 style={{color: '#1e293b', marginBottom: 24, fontSize: '1.5rem', borderBottom: '2px solid #0ea5e9', paddingBottom: 8, display: 'inline-block'}}>
            Certifications
          </h3>
          <ul style={{paddingLeft: 20, lineHeight: 2}}>
            {certifications.map((cert, index) => (
              <li key={index} style={{color: '#475569', fontSize: '1.1rem', marginBottom: 8}}>
                <span style={{color: '#0ea5e9', marginRight: 8}}>🏆</span>
                {cert}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact CTA */}
        <div style={{textAlign: 'center', marginTop: 60}}>
          <h3 style={{color: '#1e293b', marginBottom: 16}}>Interested in collaborating?</h3>
          <p style={{color: '#64748b', marginBottom: 24, fontSize: '1.1rem'}}>
            I'm always open to discussing internship opportunities, projects, and learning experiences.
          </p>
          <a href="#contact" style={{
            ...HomepageStyle.button,
            textDecoration: 'none',
            fontSize: '1.1rem',
            padding: '16px 32px'
          }}>
            Let's Connect 🚀
          </a>
        </div>
      </section>
    </div>
  )
}