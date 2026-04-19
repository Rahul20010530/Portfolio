import { useState } from 'react'
import TiltCard from './TiltCard'

const experiences = [
  {
    role:'Python Developer', company:'Pioneer E Solutions',
    client:'Govt. of India (UPSC / NIC)', period:'Nov 2024 – Present', duration:'Current', type:'Full-time',
    highlights:[
      'Designed scalable backend APIs for India\'s UPSC portal using FastAPI + MongoDB',
      'Optimized large-scale pipelines using Python multiprocessing & multithreading',
      'Implemented Big Data report-generation workflows for operational analytics',
      'Integrated AWS S3 for secure government-grade document upload & retrieval',
      'Built high-performance MongoDB schemas, indexes & aggregation pipelines',
      'Ensured strict IT compliance, security standards, and government data policies',
    ],
    tags:['FastAPI','MongoDB','AWS S3','Multiprocessing','JWT','NIC','Redis'],
    accent:'var(--accent)',
  },
  {
    role:'Backend Developer', company:'Hostbooks Limited',
    client:'Internal Product', period:'Jul 2022 – Oct 2024', duration:'2y 3m', type:'Full-time',
    highlights:[
      'Developed a custom data preparation & cleaning platform similar to Tableau Prep Builder',
      'Built integration pipelines supporting MongoDB, MySQL, CSV, Excel, and JSON',
      'Designed Data Warehouse modules handling large-scale dataset transformations',
      'Built custom report generation engines based on dynamic user-defined parameters',
      'Developed backend plugins for Shopify, Hotelogix, and Consolidation XML/XLSX',
      'Implemented Canara Spring integration for real-time financial data processing',
    ],
    tags:['Django','DRF','MongoDB','MySQL','Shopify API','Data Warehouse','Python'],
    accent:'var(--accent-2)',
  },
]

export default function Experience() {
  const [active, setActive] = useState(0)
  const exp = experiences[active]

  return (
    <section id="experience" className="section">
      <div className="container">
        <div style={{ marginBottom:'64px' }} className="reveal">
          <div className="section-tag">Work Experience</div>
          <h2 className="section-title">Where I've<br /><span>Worked</span></h2>
          <div className="accent-line" />
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'320px 1fr', gap:'32px', alignItems:'start' }}>
          {/* Left tabs */}
          <div className="reveal-left" style={{ position:'sticky', top:'100px' }}>
            {experiences.map((e, i) => (
              <TiltCard
                key={i} intensity={5} glowColor={e.accent}
                onClick={() => setActive(i)}
                style={{
                  padding:'22px', marginBottom:'14px',
                  background: active===i ? 'var(--surface)' : 'transparent',
                  border:`1px solid ${active===i ? e.accent : 'var(--border)'}`,
                  borderRadius:'var(--radius-lg)',
                  transition:'all 0.3s ease',
                  position:'relative', overflow:'hidden',
                }}
                className="hoverable"
                onMouseEnter={el => { if(active!==i){ el.currentTarget.style.background='var(--surface)'; el.currentTarget.style.borderColor='var(--border-hover)' } }}
                onMouseLeave={el => { if(active!==i){ el.currentTarget.style.background='transparent'; el.currentTarget.style.borderColor='var(--border)' } }}
              >
                {active===i && <div style={{ position:'absolute', left:0, top:0, bottom:0, width:'3px', background:e.accent, boxShadow:`0 0 10px ${e.accent}` }} />}
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'8px' }}>
                  <div>
                    <div style={{ fontFamily:'var(--font-mono)', fontSize:'10px', color:e.accent, letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'4px' }}>{e.type}</div>
                    <div style={{ fontSize:'15px', fontWeight:600, color: active===i ? 'var(--text-primary)' : 'var(--text-secondary)', transition:'color 0.2s' }}>{e.role}</div>
                  </div>
                  <span style={{ fontFamily:'var(--font-mono)', fontSize:'10px', color:'var(--text-muted)', background:'var(--surface-2)', padding:'3px 8px', borderRadius:'4px', whiteSpace:'nowrap' }}>{e.duration}</span>
                </div>
                <div style={{ fontWeight:600, color:e.accent, fontSize:'13px', marginBottom:'4px' }}>{e.company}</div>
                <div style={{ fontFamily:'var(--font-mono)', fontSize:'11px', color:'var(--text-muted)', marginBottom:'8px' }}>{e.period}</div>
                <span style={{ fontFamily:'var(--font-mono)', fontSize:'10px', color:'var(--text-muted)', padding:'3px 8px', background:'var(--accent-dim)', border:'1px solid var(--border)', borderRadius:'4px' }}>
                  {e.client}
                </span>
              </TiltCard>
            ))}
          </div>

          {/* Right detail */}
          <div className="reveal-right">
            <div className="grad-border-wrap">
              <div className="grad-border-inner" style={{ padding:'40px', position:'relative', overflow:'hidden' }}>
                {/* Background glow */}
                <div style={{
                  position:'absolute', top:'-80px', right:'-80px',
                  width:'280px', height:'280px', pointerEvents:'none',
                  background:`radial-gradient(circle, ${exp.accent}06, transparent)`,
                }} />

                <div style={{ marginBottom:'32px' }}>
                  <div style={{ fontFamily:'var(--font-mono)', fontSize:'11px', color:exp.accent, letterSpacing:'0.15em', textTransform:'uppercase', marginBottom:'8px' }}>{exp.period}</div>
                  <h3 style={{ fontFamily:'var(--font-display)', fontSize:'42px', color:'var(--text-primary)', letterSpacing:'0.03em', lineHeight:1.05, marginBottom:'8px' }}>{exp.role}</h3>
                  <div style={{ fontSize:'18px', fontWeight:600, color:exp.accent, marginBottom:'4px' }}>{exp.company}</div>
                  <div style={{ fontFamily:'var(--font-mono)', fontSize:'12px', color:'var(--text-muted)' }}>Client: {exp.client}</div>
                </div>

                <div style={{ width:'36px', height:'2px', background:exp.accent, marginBottom:'28px', boxShadow:`0 0 8px ${exp.accent}` }} />

                <div style={{ marginBottom:'32px' }}>
                  <div style={{ fontFamily:'var(--font-mono)', fontSize:'10px', color:'var(--text-muted)', letterSpacing:'0.15em', textTransform:'uppercase', marginBottom:'16px' }}>Key Contributions</div>
                  {exp.highlights.map((h, i) => (
                    <div key={i} style={{ display:'flex', gap:'14px', marginBottom:'13px', alignItems:'flex-start' }}>
                      <span style={{ marginTop:'7px', width:'5px', height:'5px', borderRadius:'50%', background:exp.accent, flexShrink:0, boxShadow:`0 0 8px ${exp.accent}` }} />
                      <span style={{ fontSize:'14px', color:'var(--text-secondary)', lineHeight:1.75 }}>{h}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display:'flex', flexWrap:'wrap', gap:'8px' }}>
                  {exp.tags.map((tag, i) => (
                    <span key={i} style={{
                      fontFamily:'var(--font-mono)', fontSize:'11px', color:exp.accent,
                      background:`${exp.accent}11`, border:`1px solid ${exp.accent}33`,
                      padding:'5px 12px', borderRadius:'4px',
                      transition:'all 0.2s',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.background=`${exp.accent}22`; e.currentTarget.style.transform='translateY(-1px)' }}
                      onMouseLeave={e => { e.currentTarget.style.background=`${exp.accent}11`; e.currentTarget.style.transform='translateY(0)' }}
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
