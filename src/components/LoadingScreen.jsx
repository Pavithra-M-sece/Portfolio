import React, { useEffect, useState } from 'react'

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 400)
          return 100
        }
        return prev + 2
      })
    }, 40)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: '#07131F',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      zIndex: 99999,
      opacity: progress === 100 ? 0 : 1,
      transition: 'opacity 0.4s ease'
    }}>
      <style>{`
        @keyframes glowPulse {
          0%, 100% { text-shadow: 0 0 20px #14D9B8, 0 0 40px #14D9B8; }
          50% { text-shadow: 0 0 40px #14D9B8, 0 0 80px #42B3FF; }
        }
        @keyframes barGlow {
          0%, 100% { box-shadow: 0 0 8px #14D9B8; }
          50% { box-shadow: 0 0 20px #42B3FF; }
        }
      `}</style>

      <div style={{
        fontSize: '4.5rem', fontWeight: 800,
        color: '#14D9B8', letterSpacing: 6,
        animation: 'glowPulse 2s ease-in-out infinite',
        fontFamily: 'monospace', marginBottom: 12
      }}>
        PAS.
      </div>

      <p style={{ color: '#A0AEC0', fontSize: '0.95rem', letterSpacing: 4, marginBottom: 48, textTransform: 'uppercase' }}>
        Loading Portfolio
      </p>

      <div style={{ width: 280, height: 3, background: 'rgba(255,255,255,0.1)', borderRadius: 4, overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #14D9B8, #42B3FF)',
          borderRadius: 4,
          transition: 'width 0.04s linear',
          animation: 'barGlow 1.5s ease-in-out infinite'
        }} />
      </div>

      <p style={{ color: '#A0AEC0', fontSize: '0.8rem', marginTop: 16, letterSpacing: 2 }}>
        {progress}%
      </p>
    </div>
  )
}
