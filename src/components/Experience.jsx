import { useState } from 'react'
import TiltCard from './TiltCard'
import useBreakpoint from '../utils/useBreakpoint'

const experiences = [
  {
    role: 'Python Developer', company: 'Pioneer E Solutions',
    client: 'Govt. of India (UPSC / NIC)', period: 'Nov 2024 – Present', duration: 'Current', type: 'Full-time',
    highlights: ['Designed scalable backend APIs for India\'s UPSC portal using FastAPI + MongoDB', 'Optimized large-scale pipelines using Python multiprocessing & multithreading', 'Implemented Big Data report-generation workflows for operational analytics', 'Integrated AWS S3 for secure government-grade document upload & retrieval', 'Built high-performance MongoDB schemas, indexes & aggregation pipelines', 'Ensured strict IT compliance, security standards, and government data policies'],
    tags: ['FastAPI', 'MongoDB', 'AWS S3', 'Multiprocessing', 'JWT', 'NIC', 'Redis'],
    accent: 'var(--accent)',
  },
  {
    role: 'Backend Developer', company: 'Hostbooks Limited',
    client: 'Internal Product', period: 'Jul 2022 – Oct 2024', duration: '2y 3m', type: 'Full-time',
    highlights: ['Developed a custom data preparation & cleaning platform similar to Tableau Prep Builder', 'Built integration pipelines supporting MongoDB, MySQL, CSV, Excel, and JSON', 'Designed Data Warehouse modules handling large-scale dataset transformations', 'Built custom report generation engines based on dynamic user-defined parameters', 'Developed backend plugins for Shopify, Hotelogix, and Consolidation XML/XLSX', 'Implemented Canara Spring integration for real-time financial data processing'],
    tags: ['Django', 'DRF', 'MongoDB', 'MySQL', 'Shopify API', 'Data Warehouse', 'Python'],
    accent: 'var(--accent-2)',
  },
]

export default function Experience() {
  const [active, setActive] = useState(0)
  const { isMobile, isTablet } = useBreakpoint()
  const exp = experiences[active]
  const stacked = isMobile || isTablet

  return (
    <section id="experience" className="section">
      <div className="container">
        <div style={{ marginBottom: '56px' }} className="reveal">
          <div className="section-tag">Work Experience</div>
          <h2 className="section-title">Where I've<br /><span>Worked</span></h2>
          <div className="accent-line" />
        </div>

        <div className="resp-exp-grid" style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '28px', alignItems: 'start' }}>
          {/* Tabs */}
          <div className="reveal-left" style={{ position: stacked ? 'static' : 'sticky', top: '100px' }}>
            {/* Mobile: Tab buttons */}
            {stacked && (
              <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
                {experiences.map((e, i) => (
                  <button key={i} onClick={() => setActive(i)} className="hoverable" style={{
                    fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600,
                    color: active === i ? 'var(--bg)' : e.accent,
                    background: active === i ? e.accent : 'transparent',
                    border: `1px solid ${e.accent}`,
                    padding: '8px 16px', borderRadius: 'var(--radius)',
                    letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'all 0.2s',
                  }}>{e.company.split(' ').slice(0, 2).join(' ')}</button>
                ))}
              </div>
            )}

            {/* Desktop: Card tabs */}
            {!stacked && experiences.map((e, i) => (
              <TiltCard key={i} intensity={5} glowColor={e.accent} onClick={() => setActive(i)}
                style={{ padding: '20px', marginBottom: '12px', background: active === i ? 'var(--surface)' : 'transparent', border: `1px solid ${active === i ? e.accent : 'var(--border)'}`, borderRadius: 'var(--radius-lg)', transition: 'all 0.3s', position: 'relative', overflow: 'hidden' }}
                className="hoverable"
              >
                {active === i && <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: e.accent, boxShadow: `0 0 10px ${e.accent}` }} />}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: e.accent, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>{e.type}</div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: active === i ? 'var(--text-primary)' : 'var(--text-secondary)', transition: 'color 0.2s' }}>{e.role}</div>
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text-muted)', background: 'var(--surface-2)', padding: '3px 7px', borderRadius: '4px', whiteSpace: 'nowrap', marginLeft: '8px' }}>{e.duration}</span>
                </div>
                <div style={{ fontWeight: 600, color: e.accent, fontSize: '13px', marginBottom: '3px' }}>{e.company}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-muted)', marginBottom: '8px' }}>{e.period}</div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text-muted)', padding: '3px 8px', background: 'var(--accent-dim)', border: '1px solid var(--border)', borderRadius: '4px' }}>{e.client}</span>
              </TiltCard>
            ))}
          </div>

          {/* Detail card */}
          <div className="reveal-right">
            <div className="grad-border-wrap">
              <div className="grad-border-inner" style={{ padding: 'clamp(24px,4vw,40px)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '220px', height: '220px', background: `radial-gradient(circle, ${exp.accent}06, transparent)`, pointerEvents: 'none' }} />
                <div style={{ marginBottom: '28px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: exp.accent, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px' }}>{exp.period}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,4vw,42px)', color: 'var(--text-primary)', letterSpacing: '0.03em', lineHeight: 1.05, marginBottom: '6px' }}>{exp.role}</h3>
                  <div style={{ fontSize: 'clamp(15px,2vw,18px)', fontWeight: 600, color: exp.accent, marginBottom: '4px' }}>{exp.company}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)' }}>Client: {exp.client}</div>
                </div>
                <div style={{ width: '32px', height: '2px', background: exp.accent, marginBottom: '24px', boxShadow: `0 0 8px ${exp.accent}` }} />
                <div style={{ marginBottom: '28px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '14px' }}>Key Contributions</div>
                  {exp.highlights.map((h, i) => (
                    <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '12px', alignItems: 'flex-start' }}>
                      <span style={{ marginTop: '7px', width: '5px', height: '5px', borderRadius: '50%', background: exp.accent, flexShrink: 0, boxShadow: `0 0 6px ${exp.accent}` }} />
                      <span style={{ fontSize: 'clamp(13px,1.4vw,14px)', color: 'var(--text-secondary)', lineHeight: 1.75 }}>{h}</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                  {exp.tags.map((tag, i) => (
                    <span key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: exp.accent, background: `${exp.accent}11`, border: `1px solid ${exp.accent}33`, padding: '4px 10px', borderRadius: '4px', transition: 'all 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.background = `${exp.accent}22`; e.currentTarget.style.transform = 'translateY(-1px)' }}
                      onMouseLeave={e => { e.currentTarget.style.background = `${exp.accent}11`; e.currentTarget.style.transform = 'translateY(0)' }}
                    >{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
