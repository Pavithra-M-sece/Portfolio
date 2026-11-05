import React, { useEffect, useState } from 'react'

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [fading,   setFading]   = useState(false)

  useEffect(() => {
    const steps = 70, duration = 1400
    const interval = duration / steps
    let current = 0
    const timer = setInterval(() => {
      current += 1
      const p = Math.min(Math.round((current / steps) * 100), 100)
      setProgress(p)
      if (current >= steps) {
        clearInterval(timer)
        setFading(true)
        setTimeout(onComplete, 480)
      }
    }, interval)
    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: '#EEF2F7',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      zIndex: 99999,
      opacity: fading ? 0 : 1,
      transition: 'opacity 0.48s ease',
      pointerEvents: fading ? 'none' : 'all'
    }}>
      <style>{`
        @keyframes preloaderPulse {
          0%,100% { opacity:.7; }
          50%      { opacity:1; }
        }
        @keyframes preloaderBar {
          0%,100% { box-shadow:0 0 6px #0EA5E9; }
          50%     { box-shadow:0 0 18px #0EA5E9, 0 0 32px #06B6D4; }
        }
      `}</style>

      {/* Subtle dot grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(rgba(14,165,233,0.07) 1px, transparent 1px)',
        backgroundSize: '32px 32px', pointerEvents: 'none'
      }}/>

      {/* Logo / name */}
      <div style={{
        fontSize: 'clamp(2.2rem,6vw,3.6rem)',
        fontWeight: 800,
        background: 'linear-gradient(135deg, #0EA5E9, #06B6D4)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        letterSpacing: '0.14em',
        fontFamily: "'Space Grotesk', sans-serif",
        animation: 'preloaderPulse 2s ease-in-out infinite',
        marginBottom: 6, textAlign: 'center'
      }}>
        PAVITHRA M.
      </div>

      {/* Tagline */}
      <p style={{
        color: '#94A3B8',
        fontSize: '0.68rem',
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        marginBottom: 48,
        fontWeight: 500
      }}>
        DATA ENGINEERING · AI · SOFTWARE
      </p>

      {/* Progress bar */}
      <div style={{ width: 240, marginBottom: 14 }}>
        <div style={{
          width: '100%', height: 2,
          background: 'rgba(14,165,233,0.15)',
          borderRadius: 2, overflow: 'hidden'
        }}>
          <div style={{
            height: '100%',
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #0EA5E9, #06B6D4)',
            borderRadius: 2,
            transition: 'width 0.04s linear',
            animation: 'preloaderBar 1.8s ease-in-out infinite'
          }}/>
        </div>
      </div>

      <p style={{
        color: '#94A3B8',
        fontSize: '0.68rem',
        letterSpacing: '0.22em',
        textTransform: 'uppercase'
      }}>
        INITIALIZING PORTFOLIO
      </p>
    </div>
  )
}
