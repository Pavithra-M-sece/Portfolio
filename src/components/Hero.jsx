import React, { useState, useEffect } from 'react'

/* Only use nodes that stay safely within left half — right half reserved for image */
const TECH_NODES = [
  { label: 'Python',           x: 3,  y: 18, dur: 6.2 },
  { label: 'AWS',              x: 2,  y: 48, dur: 5.5 },
  { label: 'FAISS',            x: 2,  y: 72, dur: 8.4 },
  { label: 'PostgreSQL',       x: 3,  y: 85, dur: 7.3 },
  { label: 'Machine Learning', x: 22, y: 6,  dur: 9.0 },
  { label: 'Generative AI',    x: 48, y: 4,  dur: 6.8 },
  { label: 'Pandas',           x: 38, y: 90, dur: 6.2 },
  { label: 'Data Engineering', x: 14, y: 92, dur: 7.1 },
  { label: 'C++',              x: 58, y: 92, dur: 5.9 },
]

const ROLES = ['AI Enthusiast', 'Data Engineer', 'Software Developer', 'Problem Solver']

export default function Hero({ onNavigate }) {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing,    setTyping]    = useState(true)
  const [visible,   setVisible]   = useState(false)
  const [preview,   setPreview]   = useState(null)
  const [imgError,  setImgError]  = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const current = ROLES[roleIndex]
    let timeout
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 78)
      } else {
        timeout = setTimeout(() => setTyping(false), 1400)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38)
      } else {
        setRoleIndex(i => (i + 1) % ROLES.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  function handleFile(e) {
    const f = e.target.files && e.target.files[0]
    if (!f) return
    setImgError(false)
    setPreview(URL.createObjectURL(f))
  }

  return (
    <section
      id="home"
      style={{
        background: 'var(--bg-primary)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        /* NO overflow:hidden — that was clipping the right column */
        position: 'relative',
      }}
    >
      <style>{`
        @keyframes techFloat {
          0%,100% { transform: translateY(0px) translateX(0px); }
          33%      { transform: translateY(-7px) translateX(3px); }
          66%      { transform: translateY(4px)  translateX(-3px); }
        }
        @keyframes heroReveal {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes imgReveal {
          from { opacity:0; transform:scale(0.95); }
          to   { opacity:1; transform:scale(1); }
        }
        @keyframes scrollTech {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .tech-pill {
          position: absolute;
          padding: 5px 13px;
          background: rgba(255,255,255,0.88);
          border: 1px solid rgba(14,165,233,0.22);
          border-radius: 20px;
          font-size: 0.69rem; font-weight: 500;
          color: #475569; white-space: nowrap;
          backdrop-filter: blur(4px);
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          pointer-events: none;
          user-select: none;
        }
        /* hero two-col grid */
        .hero-outer {
          max-width: 1100px;
          margin: 0 auto;
          padding: 90px 24px 60px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        @media (max-width: 900px) {
          .hero-outer {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding-top: 100px !important;
          }
          .hero-img-col { order: -1; }
          .tech-pill    { display: none; }
        }
        /* ── Photo glow card ─────────────────────────── */
        .photo-glow-card:hover {
          box-shadow:
            0 0 0 2px rgba(14,165,233,0.55),
            0 0 24px 4px rgba(14,165,233,0.28),
            0 0 60px 10px rgba(6,182,212,0.18),
            0 16px 48px rgba(0,0,0,0.12) !important;
        }
        .photo-glow-card:hover img {
          filter: brightness(1.06) saturate(1.12) contrast(1.04);
        }
        @keyframes glowRingPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(14,165,233,0.0); }
          50%      { box-shadow: 0 0 0 6px rgba(14,165,233,0.12); }
        }
      `}</style>

      {/* Dot-grid background */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'radial-gradient(rgba(14,165,233,0.06) 1px, transparent 1px)',
        backgroundSize: '32px 32px', pointerEvents: 'none'
      }} />

      {/* Floating tech pills — only left side, z-index 1 */}
      {TECH_NODES.map((node, i) => (
        <div
          key={node.label}
          className="tech-pill"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            zIndex: 1,
            animation: `techFloat ${node.dur}s ease-in-out infinite`,
            animationDelay: `${i * 0.42}s`,
            opacity: 0.82,
          }}
        >
          {node.label}
        </div>
      ))}

      {/* ── Two-column grid ───────────────────────────────── */}
      <div className="hero-outer">

        {/* LEFT — text content */}
        <div style={{
          opacity: visible ? 1 : 0,
          animation: visible ? 'heroReveal 0.7s ease-out both' : 'none',
        }}>
          {/* Heading */}
          <h1 style={{
            fontSize: 'clamp(2rem, 4.5vw, 3rem)',
            fontWeight: 800, lineHeight: 1.15, marginBottom: 12,
            fontFamily: "'Space Grotesk', sans-serif",
            background: 'linear-gradient(135deg, #0EA5E9, #06B6D4)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Hi, I'm Pavithra M
          </h1>

          {/* Subheading */}
          <p style={{ fontSize: '1.1rem', color: '#1E293B', fontWeight: 600, marginBottom: 10 }}>
            Computer Science Engineering Student &amp; Aspiring{' '}
            <span style={{ color: '#0EA5E9' }}>Full-Stack Developer</span>
          </p>

          {/* Typing role */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 20, height: 28 }}>
            <span style={{ color: '#0EA5E9', fontSize: '1rem', fontWeight: 600 }}>{displayed}</span>
            <span style={{ color: '#0EA5E9', fontSize: '1.05rem', animation: 'blink 1s step-end infinite' }}>|</span>
          </div>

          {/* Description */}
          <p style={{ fontSize: '0.98rem', lineHeight: 1.8, color: '#475569', marginBottom: 34, maxWidth: 500 }}>
            I'm a passionate CSE student at Sri Eshwar College of Engineering, specializing in
            web development with Python, Django, and modern web technologies. I love solving
            problems and building innovative solutions.
          </p>

          {/* CTA buttons */}
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 26 }}>
            <button className="btn-primary" onClick={() => onNavigate('contact')}>
              Get In Touch ✨
            </button>
            <button className="btn-pink" onClick={() => onNavigate('projects')}>
              View Projects
            </button>
          </div>

          {/* Social links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap' }}>
            <span style={{ color: '#94A3B8', fontSize: '0.88rem' }}>Connect with me:</span>
            <a href="mailto:pavithra.m2024cse@sece.ac.in"
               style={{ color: '#0EA5E9', fontSize: '0.88rem', fontWeight: 500 }}>Email</a>
            <a href="https://www.linkedin.com/in/pavithra-m-005a70333/" target="_blank" rel="noopener noreferrer"
               style={{ color: '#0EA5E9', fontSize: '0.88rem', fontWeight: 500 }}>LinkedIn</a>
            <a href="https://github.com/Pavithra-M-sece" target="_blank" rel="noopener noreferrer"
               style={{ color: '#0EA5E9', fontSize: '0.88rem', fontWeight: 500 }}>GitHub</a>
          </div>

          {/* Scrolling tech stack */}
          <div style={{ marginTop: 36, overflow: 'hidden', maxWidth: 520 }}>
            <p style={{ color: '#94A3B8', fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 10 }}>
              Tech Stack
            </p>
            <div style={{ display: 'flex', width: 'max-content', animation: 'scrollTech 22s linear infinite' }}>
              {[
                'Python','AWS','TensorFlow','Django','React','MongoDB',
                'OpenCV','Flask','Keras','SQL','JavaScript','NumPy',
                'Python','AWS','TensorFlow','Django','React','MongoDB',
                'OpenCV','Flask','Keras','SQL','JavaScript','NumPy',
              ].map((tech, i) => (
                <span key={i} style={{
                  padding: '4px 13px', margin: '0 4px',
                  background: '#fff',
                  border: '1px solid rgba(14,165,233,0.2)',
                  borderRadius: 14, color: '#0284C7', fontSize: '0.76rem', fontWeight: 500,
                  whiteSpace: 'nowrap', boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
                }}>{tech}</span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — photo + upload */}
        <div
          className="hero-img-col"
          style={{
            opacity: visible ? 1 : 0,
            animation: visible ? 'imgReveal 0.75s ease-out 0.15s both' : 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 14,
          }}
        >
          {/* Photo card with HD glow-on-hover */}
          <div
            className="photo-glow-card"
            onMouseMove={e => {
              const card = e.currentTarget
              const rect = card.getBoundingClientRect()
              const x = e.clientX - rect.left
              const y = e.clientY - rect.top
              const cx = rect.width  / 2
              const cy = rect.height / 2
              const rotX = ((y - cy) / cy) * -10
              const rotY = ((x - cx) / cx) *  10
              card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03)`
              // Move the spotlight to follow the cursor
              card.querySelector('.photo-spotlight').style.background =
                `radial-gradient(320px circle at ${x}px ${y}px,
                  rgba(14,165,233,0.22),
                  rgba(6,182,212,0.10) 40%,
                  transparent 70%)`
              card.querySelector('.photo-spotlight').style.opacity = '1'
            }}
            onMouseLeave={e => {
              const card = e.currentTarget
              card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)'
              card.querySelector('.photo-spotlight').style.opacity = '0'
            }}
            style={{
              background: '#fff',
              borderRadius: 22,
              padding: 12,
              boxShadow: '0 8px 40px rgba(14,165,233,0.14), 0 2px 10px rgba(0,0,0,0.08)',
              border: '1.5px solid rgba(14,165,233,0.22)',
              width: '100%',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.12s ease, box-shadow 0.2s ease',
              cursor: 'default',
              willChange: 'transform',
            }}
          >
            {/* Spotlight overlay — follows cursor */}
            <div
              className="photo-spotlight"
              style={{
                position: 'absolute', inset: 0, zIndex: 3,
                pointerEvents: 'none', borderRadius: 22,
                opacity: 0,
                transition: 'opacity 0.2s ease',
                background: 'radial-gradient(320px circle at 50% 50%, rgba(14,165,233,0.18), transparent 70%)',
              }}
            />

            {/* Outer glow ring — always visible, pulses */}
            <div className="photo-glow-ring" style={{
              position: 'absolute', inset: -3, zIndex: 0,
              borderRadius: 26,
              background: 'transparent',
              pointerEvents: 'none',
            }}/>

            {/* The actual image */}
            {imgError ? (
              <div style={{
                width: '100%', height: 310, borderRadius: 14, zIndex: 1, position: 'relative',
                background: 'linear-gradient(135deg, rgba(14,165,233,0.1), rgba(6,182,212,0.08))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '2px dashed rgba(14,165,233,0.3)',
              }}>
                <span style={{ fontSize: '4rem', fontWeight: 800, color: '#0EA5E9', fontFamily: "'Space Grotesk',sans-serif" }}>
                  PM
                </span>
              </div>
            ) : (
              <img
                src={preview || '/photo.jpg'}
                alt="Pavithra M — profile photo"
                style={{
                  width: '100%', height: 310,
                  objectFit: 'cover', objectPosition: 'top center',
                  borderRadius: 14, display: 'block',
                  position: 'relative', zIndex: 1,
                  transition: 'filter 0.25s ease',
                }}
                onError={() => setImgError(true)}
              />
            )}

            {/* Bottom shimmer bar */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              height: 60, zIndex: 2, pointerEvents: 'none',
              borderRadius: '0 0 14px 14px',
              background: 'linear-gradient(to top, rgba(14,165,233,0.08), transparent)',
            }}/>
          </div>

          {/* Upload card */}
          <div style={{
            background: '#fff',
            border: '1.5px solid rgba(0,0,0,0.08)',
            borderRadius: 14,
            padding: '13px 18px',
            textAlign: 'center',
            width: '100%',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          }}>
            <label style={{ fontSize: '0.82rem', color: '#475569', fontWeight: 500, display: 'block', marginBottom: 7 }}>
              Upload photo (preview):
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFile}
              style={{
                fontSize: '0.78rem', color: '#475569',
                border: 'none', padding: 0,
                background: 'transparent', cursor: 'pointer',
              }}
            />
          </div>
        </div>

      </div>
    </section>
  )
}
