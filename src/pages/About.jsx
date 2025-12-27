import React from 'react'
import { HomepageStyle } from '../styles/homepage-style'

export default function About() {
  const timelineData = [
    {
      year: '2024-2028',
      title: 'B.E Computer Science Engineering',
      company: 'Sri Eshwar College of Engineering',
      description: 'Currently pursuing Bachelor of Engineering in Computer Science, focusing on software development, data structures, and web technologies.'
    },
    {
      year: '2022-2024',
      title: 'Higher Secondary Certificate (HSC)',
      company: 'Kongu Nadu Matric Higher Secondary School',
      description: 'Completed higher secondary education with focus on Mathematics and Computer Science with 90.83 percentile.'
    },
    {
      year: '2021-2022',
      title: 'Secondary School Leaving Certificate (SSLC)',
      company: 'Vidyaa Vikas Matric Higher Secondary School',
      description: 'Completed secondary education with excellent academic performance with 91.6 percentile.'
    }
  ]

  const timelineStyle = {
    position: 'relative',
    paddingLeft: 32,
    borderLeft: '3px solid #0ea5e9',
    marginTop: 40
  }

  const timelineItemStyle = {
    marginBottom: 40,
    position: 'relative'
  }

  const timelineDotStyle = {
    position: 'absolute',
    left: -8,
    top: 8,
    width: 16,
    height: 16,
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
    border: '3px solid white',
    boxShadow: '0 2px 8px rgba(14, 165, 233, 0.3)'
  }

  return (
    <div style={{...HomepageStyle.container, paddingTop: 40}}>
      <style>
        {`
          @keyframes slideInLeft {
            0% { transform: translateX(-100px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          @keyframes slideInRight {
            0% { transform: translateX(100px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          @keyframes fadeInUp {
            0% { transform: translateY(50px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          @keyframes colorCycle {
            0%, 15% { background: radial-gradient(circle, #667eea, transparent); }
            20%, 35% { background: radial-gradient(circle, #f093fb, transparent); }
            40%, 55% { background: radial-gradient(circle, #4facfe, transparent); }
            60%, 75% { background: radial-gradient(circle, #43e97b, transparent); }
            80%, 95% { background: radial-gradient(circle, #fa709a, transparent); }
            100% { background: radial-gradient(circle, #667eea, transparent); }
          }
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px rgba(14, 165, 233, 0.3); }
            50% { box-shadow: 0 0 40px rgba(14, 165, 233, 0.6); }
          }
          @keyframes wiggle {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(-5deg); }
            75% { transform: rotate(5deg); }
          }
          .animate-slide-left { animation: slideInLeft 0.8s ease-out; }
          .animate-slide-right { animation: slideInRight 0.8s ease-out; }
          .animate-fade-up { animation: fadeInUp 0.6s ease-out; }
        `}
      </style>
      <section style={HomepageStyle.section}>
        <h2 style={HomepageStyle.sectionTitle}>About Me</h2>
        
        <div style={{
          ...HomepageStyle.card,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.9) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        }}>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 300px', gap: 40, alignItems: 'center'}}>
            <div className="animate-slide-left">
              <h3 style={{
                color: '#0ea5e9', 
                marginBottom: 20, 
                fontSize: '1.5rem',
                background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700
              }}>Hello! I'm Pavithra M</h3>
              <p style={{fontSize: '1.1rem', lineHeight: 1.8, marginBottom: 24}}>
                I'm a passionate Computer Science Engineering student at Sri Eshwar College of Engineering with a strong foundation in 
                programming and web development. My journey in tech started with solving coding problems, and it has evolved into 
                building complete web applications.
              </p>
              <p style={{fontSize: '1.1rem', lineHeight: 1.8, marginBottom: 24}}>
                I specialize in Python, Django, and web technologies. I'm an active competitive programmer with 1200+ problems solved 
                on various platforms and have built several projects including medical diagnosis systems and e-learning platforms.
              </p>
              <div style={{display: 'flex', gap: 16, flexWrap: 'wrap'}}>
                <span style={{
                  padding: '10px 20px', 
                  background: 'linear-gradient(135deg, #667eea, #764ba2)', 
                  color: 'white', 
                  borderRadius: 25, 
                  fontSize: '0.9rem', 
                  fontWeight: 600,
                  boxShadow: '0 8px 20px rgba(102, 126, 234, 0.3)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }} onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 12px 25px rgba(102, 126, 234, 0.4)';
                }} onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.3)';
                }}>Problem Solver</span>
                <span style={{
                  padding: '10px 20px', 
                  background: 'linear-gradient(135deg, #f093fb, #f5576c)', 
                  color: 'white', 
                  borderRadius: 25, 
                  fontSize: '0.9rem', 
                  fontWeight: 600,
                  boxShadow: '0 8px 20px rgba(240, 147, 251, 0.3)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }} onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 12px 25px rgba(240, 147, 251, 0.4)';
                }} onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 20px rgba(240, 147, 251, 0.3)';
                }}>Team Player</span>
                <span style={{
                  padding: '10px 20px', 
                  background: 'linear-gradient(135deg, #43e97b, #38f9d7)', 
                  color: 'white', 
                  borderRadius: 25, 
                  fontSize: '0.9rem', 
                  fontWeight: 600,
                  boxShadow: '0 8px 20px rgba(67, 233, 123, 0.3)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }} onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 12px 25px rgba(67, 233, 123, 0.4)';
                }} onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 20px rgba(67, 233, 123, 0.3)';
                }}>Continuous Learner</span>
              </div>
            </div>
            <div className="animate-slide-right" style={{textAlign: 'center'}}>
              <div style={{
                position: 'relative',
                width: 250,
                height: 250,
                margin: '0 auto'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: -15,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, #667eea, transparent)',
                  animation: 'colorCycle 8s ease-in-out infinite',
                  filter: 'blur(12px)',
                  opacity: 0.7
                }}></div>
                <img 
                  src="/photo.jpg" 
                  alt="Pavithra M" 
                  style={{
                    width: 250,
                    height: 250,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '6px solid rgba(255, 255, 255, 0.9)',
                    position: 'relative',
                    zIndex: 1,
                    transition: 'all 0.4s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.filter = 'brightness(1.1) contrast(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.filter = 'brightness(1) contrast(1)';
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.nextSibling.style.display = 'flex';
                  }}
                />
              </div>
              <div style={{
                position: 'relative',
                width: 250,
                height: 250,
                margin: '0 auto',
                display: 'none'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: -10,
                  borderRadius: '50%',
                  background: 'conic-gradient(from 0deg, #0ea5e9, #06b6d4, #0891b2, #0ea5e9)',
                  animation: 'spin 3s linear infinite',
                  filter: 'blur(8px)',
                  opacity: 0.8
                }}></div>
                <div style={{
                  width: 250,
                  height: 250,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '4rem',
                  fontWeight: 800,
                  border: '4px solid rgba(255, 255, 255, 0.9)',
                  position: 'relative',
                  zIndex: 1
                }}>
                  PM
                </div>
              </div>
              
              <div style={{marginTop: 24}}>
                <h4 style={{color: '#1e293b', marginBottom: 16}}>Contact Information</h4>
                <div style={{display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center'}}>
                  <a href="tel:+919677558590" style={{color: '#0ea5e9', textDecoration: 'none', fontWeight: 500}}>
                    +91 9677558590
                  </a>
                  <a href="mailto:pavithra.m2024cse@sece.ac.in?subject=Contact from Portfolio" style={{color: '#0ea5e9', textDecoration: 'none', fontWeight: 500}}>
                    pavithra.m2024cse@sece.ac.in
                  </a>
                  <a href="https://www.linkedin.com/in/pavithra-m-005a70333/" target="_blank" rel="noopener noreferrer" style={{color: '#0ea5e9', textDecoration: 'none', fontWeight: 500}}>
                    LinkedIn Profile
                  </a>
                  <a href="https://github.com/Pavithra-M-sece" target="_blank" rel="noopener noreferrer" style={{color: '#0ea5e9', textDecoration: 'none', fontWeight: 500}}>
                    GitHub Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="animate-fade-up" style={{marginTop: 60}}>
          <h3 style={{
            fontSize: '2rem', 
            marginBottom: 20, 
            textAlign: 'center', 
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700
          }}>My Journey</h3>
          <div style={timelineStyle}>
            {timelineData.map((item, index) => (
              <div 
                key={index} 
                style={{
                  ...timelineItemStyle,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(10px)';
                  e.currentTarget.style.background = 'rgba(14, 165, 233, 0.05)';
                  e.currentTarget.style.borderRadius = '12px';
                  e.currentTarget.style.padding = '16px';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.padding = '0';
                }}
              >
                <div style={timelineDotStyle}></div>
                <div style={{marginLeft: 24}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8}}>
                    <span style={{
                      padding: '4px 12px',
                      background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
                      color: 'white',
                      borderRadius: 12,
                      fontSize: '0.9rem',
                      fontWeight: 600
                    }}>
                      {item.year}
                    </span>
                    <h4 style={{margin: 0, color: '#1e293b', fontSize: '1.3rem'}}>{item.title}</h4>
                  </div>
                  <p style={{color: '#0ea5e9', fontWeight: 600, marginBottom: 8}}>{item.company}</p>
                  <p style={{color: '#64748b', lineHeight: 1.6}}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{marginTop: 60}}>
          <h3 style={{fontSize: '2rem', marginBottom: 32, textAlign: 'center', color: '#1e293b'}}>Recent Achievements</h3>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32, marginBottom: 60}}>
            <div style={{...HomepageStyle.card, textAlign: 'center'}}>
              <div style={{fontSize: '3rem', marginBottom: 16}}>🏆</div>
              <h4 style={{color: '#1e293b', marginBottom: 12}}>AI Datathon Finalist</h4>
              <p style={{color: '#64748b', lineHeight: 1.6}}>
                Reached the final round in AI Datathon conducted by SECE (November 2025)
              </p>
            </div>
            <div style={{...HomepageStyle.card, textAlign: 'center'}}>
              <div style={{fontSize: '3rem', marginBottom: 16}}>💻</div>
              <h4 style={{color: '#1e293b', marginBottom: 12}}>SICPC Second Round</h4>
              <p style={{color: '#64748b', lineHeight: 1.6}}>
                Selected to the second round in SICPC conducted by SECE (May 2025)
              </p>
            </div>
            <div style={{...HomepageStyle.card, textAlign: 'center'}}>
              <div style={{fontSize: '3rem', marginBottom: 16}}>🚀</div>
              <h4 style={{color: '#1e293b', marginBottom: 12}}>SELFE Hackathon</h4>
              <p style={{color: '#64748b', lineHeight: 1.6}}>
                Selected to the second round in SELFE Hackathon conducted by SECE (October 2024)
              </p>
            </div>
          </div>
        </div>

        <div style={{marginTop: 60}}>
          <h3 style={{fontSize: '2rem', marginBottom: 32, textAlign: 'center', color: '#1e293b'}}>What Drives Me</h3>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32}}>
            <div style={{...HomepageStyle.card, textAlign: 'center'}}>
              <div style={{fontSize: '3rem', marginBottom: 16}}>🚀</div>
              <h4 style={{color: '#1e293b', marginBottom: 12}}>Innovation</h4>
              <p style={{color: '#64748b', lineHeight: 1.6}}>
                I love exploring new technologies and finding creative solutions to complex challenges.
              </p>
            </div>
            <div style={{...HomepageStyle.card, textAlign: 'center'}}>
              <div style={{fontSize: '3rem', marginBottom: 16}}>🎯</div>
              <h4 style={{color: '#1e293b', marginBottom: 12}}>Quality</h4>
              <p style={{color: '#64748b', lineHeight: 1.6}}>
                Every line of code I write is crafted with attention to detail and best practices in mind.
              </p>
            </div>
            <div style={{...HomepageStyle.card, textAlign: 'center'}}>
              <div style={{fontSize: '3rem', marginBottom: 16}}>🤝</div>
              <h4 style={{color: '#1e293b', marginBottom: 12}}>Collaboration</h4>
              <p style={{color: '#64748b', lineHeight: 1.6}}>
                I believe the best solutions come from working together and sharing knowledge.
              </p>
            </div>
          </div>
        </div>

        <div style={{marginTop: 60}}>
          <h3 style={{fontSize: '2rem', marginBottom: 32, textAlign: 'center', color: '#1e293b'}}>Competitive Programming Profile</h3>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24}}>
            <a href="https://leetcode.com/u/Pavithra_mano/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
              <div style={{...HomepageStyle.card, padding: 24, cursor: 'pointer', transition: 'all 0.3s ease'}} 
                   onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                   onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16}}>
                  <div style={{width: 40, height: 40, background: '#FFA116', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: 'white', fontWeight: 'bold'}}>LC</div>
                  <h4 style={{color: '#1e293b', margin: 0, fontSize: '1.3rem'}}>LeetCode</h4>
                </div>
                <p style={{color: '#0ea5e9', fontWeight: 600, marginBottom: 8, fontSize: '1.1rem'}}>80+ Problems Solved</p>
                <p style={{color: '#64748b', fontSize: '0.95rem', marginBottom: 4}}>Global Rank: 1,418,175</p>
                <p style={{color: '#64748b', fontSize: '0.9rem'}}>Username: Pavithra_mano</p>
              </div>
            </a>
            
            <a href="https://www.skillrack.com/faces/resume.xhtml?id=515019&key=ec99021f0f8e3a4ae428457e5a8023dc40176ed0" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
              <div style={{...HomepageStyle.card, padding: 24, cursor: 'pointer', transition: 'all 0.3s ease'}}
                   onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                   onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16}}>
                  <div style={{width: 40, height: 40, background: '#4CAF50', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: 'white', fontWeight: 'bold'}}>SR</div>
                  <h4 style={{color: '#1e293b', margin: 0, fontSize: '1.3rem'}}>SkillRack</h4>
                </div>
                <p style={{color: '#0ea5e9', fontWeight: 600, marginBottom: 8, fontSize: '1.1rem'}}>1200+ Problems Solved</p>
                <p style={{color: '#64748b', fontSize: '0.95rem', marginBottom: 4}}>365 Bronze Medal 🥉</p>
                <p style={{color: '#64748b', fontSize: '0.9rem'}}>Rank: 12,382</p>
              </div>
            </a>
            
            <a href="https://www.geeksforgeeks.org/user/pavithramcw0v/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
              <div style={{...HomepageStyle.card, padding: 24, cursor: 'pointer', transition: 'all 0.3s ease'}}
                   onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                   onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16}}>
                  <div style={{width: 40, height: 40, background: '#0F9D58', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', color: 'white', fontWeight: 'bold'}}>GFG</div>
                  <h4 style={{color: '#1e293b', margin: 0, fontSize: '1.3rem'}}>GeeksforGeeks</h4>
                </div>
                <p style={{color: '#0ea5e9', fontWeight: 600, marginBottom: 8, fontSize: '1.1rem'}}>Coding Score: 10+</p>
                <p style={{color: '#64748b', fontSize: '0.95rem', marginBottom: 4}}>Rank: 800</p>
                <p style={{color: '#64748b', fontSize: '0.9rem'}}>Username: pavithramcw0v</p>
              </div>
            </a>
            
            <a href="https://www.hackerrank.com/profile/pavithra_m2024c1" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
              <div style={{...HomepageStyle.card, padding: 24, cursor: 'pointer', transition: 'all 0.3s ease'}}
                   onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                   onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16}}>
                  <div style={{width: 40, height: 40, background: '#00EA64', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: 'white', fontWeight: 'bold'}}>HR</div>
                  <h4 style={{color: '#1e293b', margin: 0, fontSize: '1.3rem'}}>HackerRank</h4>
                </div>
                <p style={{color: '#0ea5e9', fontWeight: 600, marginBottom: 8, fontSize: '1.1rem'}}>Multiple Star Ratings</p>
                <p style={{color: '#64748b', fontSize: '0.95rem', marginBottom: 4}}>3 ⭐ in C & Python</p>
                <p style={{color: '#64748b', fontSize: '0.9rem'}}>1 ⭐ in Problem Solving, C++ & SQL</p>
              </div>
            </a>
            
            <a href="https://www.codechef.com/users/pavithra_1004" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
              <div style={{...HomepageStyle.card, padding: 24, cursor: 'pointer', transition: 'all 0.3s ease'}}
                   onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                   onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16}}>
                  <div style={{width: 40, height: 40, background: '#5B4638', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: 'white'}}>CC</div>
                  <h4 style={{color: '#1e293b', margin: 0, fontSize: '1.3rem'}}>CodeChef</h4>
                </div>
                <p style={{color: '#0ea5e9', fontWeight: 600, marginBottom: 8, fontSize: '1.1rem'}}>170+ Problems Solved</p>
                <p style={{color: '#64748b', fontSize: '0.95rem', marginBottom: 4}}>Active Competitive Programmer</p>
                <p style={{color: '#64748b', fontSize: '0.9rem'}}>Username: pavithra_1004</p>
              </div>
            </a>
          </div>
          
          <div style={{textAlign: 'center', marginTop: 40, padding: 32, background: 'rgba(14, 165, 233, 0.05)', borderRadius: 16}}>
            <h4 style={{color: '#1e293b', marginBottom: 16}}>Total Problem Solving Stats</h4>
            <div style={{display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap'}}>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2rem', fontWeight: 700, color: '#0ea5e9'}}>1450+</div>
                <div style={{color: '#64748b', fontSize: '0.9rem'}}>Total Problems</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2rem', fontWeight: 700, color: '#06b6d4'}}>5</div>
                <div style={{color: '#64748b', fontSize: '0.9rem'}}>Platforms</div>
              </div>
              <div style={{textAlign: 'center'}}>
                <div style={{fontSize: '2rem', fontWeight: 700, color: '#0891b2'}}>365</div>
                <div style={{color: '#64748b', fontSize: '0.9rem'}}>Bronze Medals</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}