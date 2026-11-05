import React from 'react'

const CODING_STATS = [
  { platform: 'LeetCode',      stat: '200+',  label: 'Problems Solved', color: '#FFA116', abbr: 'LC',  url: 'https://leetcode.com/u/pavithra_168/' },
  { platform: 'SkillRack',     stat: '1500+', label: 'Problems Solved', color: '#4CAF50', abbr: 'SR',  url: 'https://www.skillrack.com/faces/resume.xhtml?id=515019&key=ec99021f0f8e3a4ae428457e5a8023dc40176ed0' },
  { platform: 'HackerRank',    stat: '3★',    label: 'C & Python',      color: '#00C853', abbr: 'HR',  url: 'https://www.hackerrank.com/profile/pavithra_m2024c1' },
  { platform: 'CodeChef',      stat: '170+',  label: 'Problems Solved', color: '#5B4638', abbr: 'CC',  url: 'https://www.codechef.com/users/pavithra_1004' },
  { platform: 'GeeksforGeeks', stat: '10+',   label: 'Coding Score',    color: '#0F9D58', abbr: 'GFG', url: 'https://www.geeksforgeeks.org/user/pavithramcw0v/' },
]

const HACKATHONS = [
  { title: 'AI Datathon Finalist',          org: 'SECE', date: 'November 2025', icon: '🏆' },
  { title: 'SICPC Second Round',            org: 'SECE', date: 'May 2025',      icon: '💻' },
  { title: 'SELFE Hackathon Second Round',  org: 'SECE', date: 'October 2024',  icon: '🚀' },
]

const CERTIFICATIONS = [
  'Introduction to Prompt Engineering — July 2025',
  'DSA with C++ Bootcamp — April 2025',
  'Introduction to Web Design and Development — February 2025',
  'Bronze Medal — SkillRack, December 2024',
  'Introduction to HTML — SoloLearn, December 2024',
  'Introduction to C — SoloLearn, December 2024',
  'Certificate of Completion of C Training — IIT Bombay, December 2024',
  'Certificate of Completion of C++ Training — IIT Bombay, December 2024',
]

export default function Achievements() {
  return (
    <section id="achievements" style={{ background: '#fff', padding: '90px 0' }}>
      <div className="container">
        <span className="section-label">Milestones</span>
        <h2 className="section-title">Problem Solving &amp; Achievements</h2>
        <p className="section-sub">Competitive programming milestones, hackathon participations, and certifications.</p>

        {/* Coding Stats */}
        <div style={{ marginBottom: 56 }}>
          <h3 style={{ fontSize: '0.74rem', fontWeight: 700, color: '#94A3B8', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 20 }}>
            Coding Profiles
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 14 }}>
            {CODING_STATS.map(s => (
              <a key={s.platform} href={s.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <div className="card" style={{ textAlign: 'center', padding: '20px 12px' }}>
                  <div style={{
                    width: 38, height: 38, background: s.color, borderRadius: 9,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.7rem', fontWeight: 800, color: '#fff', margin: '0 auto 12px'
                  }}>{s.abbr}</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0EA5E9', marginBottom: 3 }}>{s.stat}</div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#1E293B', marginBottom: 2 }}>{s.platform}</div>
                  <div style={{ fontSize: '0.72rem', color: '#94A3B8' }}>{s.label}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
          <div>
            <h3 style={{ fontSize: '0.74rem', fontWeight: 700, color: '#94A3B8', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 20 }}>
              Hackathons &amp; Competitions
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {HACKATHONS.map((h, i) => (
                <div key={i} className="card" style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '18px 20px' }}>
                  <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{h.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, color: '#1E293B', fontSize: '0.92rem', marginBottom: 3 }}>{h.title}</div>
                    <div style={{ fontSize: '0.8rem', color: '#0EA5E9', fontWeight: 600, marginBottom: 2 }}>{h.org}</div>
                    <div style={{ fontSize: '0.78rem', color: '#94A3B8' }}>{h.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '0.74rem', fontWeight: 700, color: '#94A3B8', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 20 }}>
              Certifications
            </h3>
            <div className="card" style={{ padding: '22px 24px' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {CERTIFICATIONS.map((cert, i) => (
                  <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: '#0EA5E9', fontSize: '0.78rem', marginTop: 3, flexShrink: 0 }}>▸</span>
                    <span style={{ fontSize: '0.86rem', color: '#475569', lineHeight: 1.55 }}>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
