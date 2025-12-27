import React, {useState} from 'react'
import { HomepageStyle } from '../styles/homepage-style'

const Home = () => {
  const [contact, setContact] = useState({ name: '', email: '', message: '' });
  const [preview, setPreview] = useState(null)

  const skills = [
    { name: 'Python', level: 85 },
    { name: 'C/C++', level: 80 },
    { name: 'Django', level: 75 },
    { name: 'HTML/CSS', level: 85 },
    { name: 'JavaScript', level: 70 },
    { name: 'MongoDB', level: 75 },
    { name: 'SQL', level: 70 },
    { name: 'Java', level: 65 }
  ];

  function handleChange(e) {
    const { name, value } = e.target;
    setContact(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `Portfolio Contact from ${contact.name}`;
    const body = `Name: ${contact.name}\nEmail: ${contact.email}\n\nMessage:\n${contact.message}`;
    const mailtoLink = `mailto:pavithra.m2024cse@sece.ac.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Opening your email client to send the message!');
    
    // Reset form
    setContact({ name: '', email: '', message: '' });
  }

  function handleFile(e) {
    const f = e.target.files && e.target.files[0]
    if (!f) return
    const url = URL.createObjectURL(f)
    setPreview(url)
  }

  const profileSrc = '/photo.jpg';

  return (
    <div style={HomepageStyle.container}>
      <style>
        {`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.8; }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }


        `}
      </style>

      <header style={HomepageStyle.hero}>
        <div style={HomepageStyle.heroContent}>
          <h1 style={HomepageStyle.heading}>Hi, I'm Pavithra M</h1>
          <p style={HomepageStyle.subheading}>Computer Science Engineering Student & Aspiring Full-Stack Developer</p>
          <p style={{marginTop: 24, fontSize: '1.1rem', lineHeight: 1.7}}>I'm a passionate CSE student at Sri Eshwar College of Engineering, specializing in web development with Python, Django, and modern web technologies. I love solving problems and building innovative solutions.</p>
          <div style={{marginTop: 32, display: 'flex', gap: 16, flexWrap: 'wrap'}}>
            <a 
              href="#contact" 
              style={{
                ...HomepageStyle.ctaButton,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 15px 35px rgba(102, 126, 234, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 8px 25px rgba(14, 165, 233, 0.3)';
              }}
            >
              Get In Touch ✨
            </a>
            <a 
              href="#projects" 
              style={{
                ...HomepageStyle.ctaButton, 
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', 
                color: 'white', 
                border: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 15px 35px rgba(240, 147, 251, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 8px 25px rgba(240, 147, 251, 0.3)';
              }}
            >
              View Projects
            </a>
          </div>
          
          <div style={{marginTop: 24, display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap'}}>
            <span style={{color: '#64748b', fontSize: '1rem'}}>Connect with me:</span>
            <a href="mailto:pavithra.m2024cse@sece.ac.in?subject=Hello from Portfolio" style={{color: '#0ea5e9', fontSize: '1rem', textDecoration: 'none', fontWeight: 500}} title="Send Email">
              Email
            </a>
            <a href="https://www.linkedin.com/in/pavithra-m-005a70333/" target="_blank" rel="noopener noreferrer" style={{color: '#0ea5e9', fontSize: '1rem', textDecoration: 'none', fontWeight: 500}} title="LinkedIn">
              LinkedIn
            </a>
            <a href="https://github.com/Pavithra-M-sece" target="_blank" rel="noopener noreferrer" style={{color: '#0ea5e9', fontSize: '1rem', textDecoration: 'none', fontWeight: 500}} title="GitHub">
              GitHub
            </a>
          </div>
        </div>
        <div style={{textAlign: 'center'}}>
          <div style={{
            position: 'relative',
            display: 'inline-block'
          }}>

            
            <img 
              src={preview || '/photo.jpg'} 
              alt="Profile" 
              style={{
                ...HomepageStyle.profileImage,
                position: 'relative',
                zIndex: 1,
                transition: 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                cursor: 'pointer',
                filter: 'brightness(1.1) contrast(1.05)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.15)';
                e.target.style.filter = 'brightness(1.2) contrast(1.1) saturate(1.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.filter = 'brightness(1.1) contrast(1.05)';
              }}
              onError={(e)=>{e.currentTarget.src='https://via.placeholder.com/300x300/0ea5e9/ffffff?text=PM';}} 
            />
          </div>
          <div style={{marginTop: 20, padding: 16, background: 'rgba(255,255,255,0.8)', borderRadius: 12}}>
            <label style={{fontSize: 14, color: '#64748b', fontWeight: 500}}>Upload photo (preview):</label>
            <input type="file" accept="image/*" onChange={handleFile} style={{display: 'block', marginTop: 8, fontSize: 12}} />
          </div>
        </div>
      </header>

      <section style={HomepageStyle.section}>
        <h2 style={HomepageStyle.sectionTitle}>About Me</h2>
        <div style={HomepageStyle.card}>
          <p style={{fontSize: '1.1rem', lineHeight: 1.8, marginBottom: 24}}>I'm a passionate full-stack developer creating modern web applications. I love turning complex problems into simple, beautiful solutions that users enjoy.</p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 32, marginTop: 32}}>
            <div>
              <h3 style={{color: '#0ea5e9', marginBottom: 16}}>🚀 What I Do</h3>
              <ul style={{listStyle: 'none', padding: 0, lineHeight: 2}}>
                <li>• Frontend Development (React)</li>
                <li>• Backend APIs (Node.js, Express)</li>
                <li>• Database Design (MongoDB)</li>
                <li>• UI/UX Implementation</li>
                <li>• API Integration(Postman API)</li>
              </ul>
            </div>
            <div>
              <h3 style={{color: '#06b6d4', marginBottom: 16}}>💡 Interests</h3>
              <ul style={{listStyle: 'none', padding: 0, lineHeight: 2}}>
                <li>• Web Performance Optimization</li>
                <li>• Accessibility & Inclusive Design</li>
                <li>• Open Source Contributions</li>
                <li>• Emerging Web Technologies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={HomepageStyle.section}>
        <h2 style={HomepageStyle.sectionTitle}>Skills & Technologies</h2>
        <div style={HomepageStyle.skillsGrid}>
          {skills.map((skill, index) => {
            const colors = [
              'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
              'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
              'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
              'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
              'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
              'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
              'linear-gradient(135deg, #ff8a80 0%, #ea80fc 100%)'
            ];
            return (
              <div 
                key={skill.name} 
                style={{
                  ...HomepageStyle.skillCard,
                  background: colors[index % colors.length],
                  color: 'white',
                  transform: 'scale(1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05) translateY(-5px)';
                  e.target.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1) translateY(0)';
                  e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                }}
              >
                <h4 style={{margin: '0 0 12px 0', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>{skill.name}</h4>
                <div style={{background: 'rgba(255,255,255,0.3)', borderRadius: 8, height: 8, overflow: 'hidden'}}>
                  <div style={{background: 'white', height: '100%', width: `${skill.level}%`, borderRadius: 8, transition: 'width 1s ease'}}></div>
                </div>
                <span style={{fontSize: '0.9rem', color: 'rgba(255,255,255,0.9)', marginTop: 8, display: 'block', textShadow: '0 1px 2px rgba(0,0,0,0.3)'}}>{skill.level}%</span>
              </div>
            );
          })}
        </div>
      </section>

      <section id="projects" style={HomepageStyle.section}>
        <h2 style={HomepageStyle.sectionTitle}>Featured Projects</h2>
        <div style={HomepageStyle.projectsGrid}>
          <div 
            style={{
              ...HomepageStyle.card,
              transition: 'all 0.4s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px) rotateY(5deg)';
              e.currentTarget.style.boxShadow = '0 25px 50px rgba(102, 126, 234, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) rotateY(0deg)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }}
          >
            <div style={{
              width: '100%', 
              height: 200, 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
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
              Portfolio Website
            </div>
            <h3 style={{color: '#1e293b', marginBottom: 12}}>Personal Portfolio</h3>
            <p style={{color: '#64748b', lineHeight: 1.6, marginBottom: 20}}>A modern, responsive portfolio built with React and Vite. Features smooth animations, chatbot integration, and optimized performance.</p>
            <div style={{display: 'flex', gap: 12, flexWrap: 'wrap'}}>
              <span style={{padding: '6px 14px', background: 'linear-gradient(135deg, #667eea, #764ba2)', color: 'white', borderRadius: 20, fontSize: '0.85rem', boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)', transition: 'transform 0.2s ease'}} onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>React</span>
              <span style={{padding: '6px 14px', background: 'linear-gradient(135deg, #4facfe, #00f2fe)', color: 'white', borderRadius: 20, fontSize: '0.85rem', boxShadow: '0 4px 15px rgba(79, 172, 254, 0.3)', transition: 'transform 0.2s ease'}} onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>Vite</span>
              <span style={{padding: '6px 14px', background: 'linear-gradient(135deg, #43e97b, #38f9d7)', color: 'white', borderRadius: 20, fontSize: '0.85rem', boxShadow: '0 4px 15px rgba(67, 233, 123, 0.3)', transition: 'transform 0.2s ease'}} onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>CSS3</span>
            </div>
          </div>
          <div 
            style={{
              ...HomepageStyle.card,
              transition: 'all 0.4s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px) rotateY(-5deg)';
              e.currentTarget.style.boxShadow = '0 25px 50px rgba(240, 147, 251, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) rotateY(0deg)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }}
          >
            <div style={{
              width: '100%', 
              height: 200, 
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', 
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
              E-Commerce App
            </div>
            <h3 style={{color: '#1e293b', marginBottom: 12}}>E-Commerce Platform</h3>
            <p style={{color: '#64748b', lineHeight: 1.6, marginBottom: 20}}>Full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built for scalability and performance.</p>
            <div style={{display: 'flex', gap: 12, flexWrap: 'wrap'}}>
              <span style={{padding: '6px 14px', background: 'linear-gradient(135deg, #f093fb, #f5576c)', color: 'white', borderRadius: 20, fontSize: '0.85rem', boxShadow: '0 4px 15px rgba(240, 147, 251, 0.3)', transition: 'transform 0.2s ease'}} onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>React</span>
              <span style={{padding: '6px 14px', background: 'linear-gradient(135deg, #fa709a, #fee140)', color: 'white', borderRadius: 20, fontSize: '0.85rem', boxShadow: '0 4px 15px rgba(250, 112, 154, 0.3)', transition: 'transform 0.2s ease'}} onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>Node.js</span>
              <span style={{padding: '6px 14px', background: 'linear-gradient(135deg, #a8edea, #fed6e3)', color: '#333', borderRadius: 20, fontSize: '0.85rem', boxShadow: '0 4px 15px rgba(168, 237, 234, 0.3)', transition: 'transform 0.2s ease'}} onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>MongoDB</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" style={HomepageStyle.section}>
        <h2 style={HomepageStyle.sectionTitle}>Let's Work Together</h2>
        <p style={{textAlign: 'center', fontSize: '1.1rem', color: '#64748b', marginBottom: 40}}>Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.</p>
        <div style={HomepageStyle.contactForm}>
          <form onSubmit={handleSubmit}>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20}}>
              <input style={HomepageStyle.input} name="name" placeholder="Your Name" value={contact.name} onChange={handleChange} required />
              <input style={HomepageStyle.input} name="email" type="email" placeholder="Your Email" value={contact.email} onChange={handleChange} required />
            </div>
            <textarea style={{...HomepageStyle.input, height: 120, resize: 'vertical'}} name="message" placeholder="Tell me about your project..." value={contact.message} onChange={handleChange} required />
            <button style={HomepageStyle.button} type="submit">Send Message 🚀</button>
            
            <div style={{textAlign: 'center', marginTop: 20, padding: 16, background: '#f8fafc', borderRadius: 8}}>
              <p style={{color: '#64748b', fontSize: '0.95rem', margin: '0 0 8px 0'}}>
                💡 <strong>Alternative ways to reach me:</strong>
              </p>
              <div style={{display: 'flex', justifyContent: 'center', gap: 20, flexWrap: 'wrap'}}>
                <a href="mailto:pavithra.m2024cse@sece.ac.in?subject=Portfolio Contact" style={{color: '#0ea5e9', textDecoration: 'none', fontWeight: 500}}>
                  📧 Direct Email
                </a>
                <a href="tel:+919677558590" style={{color: '#0ea5e9', textDecoration: 'none', fontWeight: 500}}>
                  📞 Call Me
                </a>
                <a href="https://www.linkedin.com/in/pavithra-m-005a70333/" target="_blank" rel="noopener noreferrer" style={{color: '#0ea5e9', textDecoration: 'none', fontWeight: 500}}>
                  💼 LinkedIn
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Home
