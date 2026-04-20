import { useRef, useEffect, useState } from 'react'
import TiltCard from './TiltCard'

const skillCategories = [
  { label: 'Backend', icon: '⚙️', color: 'var(--accent)', skills: [{ name: 'FastAPI', level: 95 }, { name: 'Django/DRF', level: 90 }, { name: 'Flask', level: 78 }, { name: 'Angular', level: 45 }] },
  { label: 'Databases', icon: '🗄️', color: 'var(--accent-2)', skills: [{ name: 'MongoDB', level: 88 }, { name: 'MySQL/SQL', level: 82 }, { name: 'Redis', level: 80 }, { name: 'Python', level: 95 }] },
  { label: 'Generative AI', icon: '🤖', color: '#a78bfa', skills: [{ name: 'LangChain', level: 85 }, { name: 'LLM APIs', level: 82 }, { name: 'Semantic Search', level: 80 }, { name: 'Vector RAG', level: 78 }] },
  { label: 'Data Eng.', icon: '📊', color: '#fb923c', skills: [{ name: 'Multiprocessing', level: 88 }, { name: 'Batch Processing', level: 86 }, { name: 'Data Warehouse', level: 80 }, { name: 'Data Cleaning', level: 84 }] },
  { label: 'Cloud & DevOps', icon: '☁️', color: '#34d399', skills: [{ name: 'AWS S3', level: 82 }, { name: 'AWS EC2', level: 78 }, { name: 'Route53', level: 70 }, { name: 'Docker', level: 65 }] },
  { label: 'Security', icon: '🔒', color: '#f472b6', skills: [{ name: 'JWT/OAuth2', level: 92 }, { name: 'API Security', level: 88 }, { name: 'IT Compliance', level: 85 }, { name: 'REST Design', level: 90 }] },
]

const techTags = ['Python', 'FastAPI', 'Django', 'DRF', 'Flask', 'MongoDB', 'MySQL', 'Redis', 'AWS S3', 'EC2', 'LangChain', 'OpenAI API', 'Hugging Face', 'JWT', 'OAuth2', 'Multiprocessing', 'RAG', 'Vector DB', 'Aggregation Pipeline', 'REST APIs', 'Batch Processing', 'NIC/UPSC']

function SkillRing({ level, color, size = 56 }) {
  const [animated, setAnimated] = useState(false)
  const ref = useRef(null)
  const r = 24, circ = 2 * Math.PI * r, offset = circ - (level / 100) * circ

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setAnimated(true) }, { threshold: 0.3 })
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
      <svg width={size} height={size} viewBox="0 0 56 56" className="skill-ring">
        <circle className="skill-ring-bg" cx="28" cy="28" r={r} />
        <circle className="skill-ring-fill" cx="28" cy="28" r={r} stroke={color}
          strokeDasharray={circ}
          strokeDashoffset={animated ? offset : circ}
          style={{ transition: animated ? 'stroke-dashoffset 1.4s cubic-bezier(0.23,1,0.32,1)' : 'none', filter: `drop-shadow(0 0 4px ${color}66)` }}
        />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 600, color }}>{level}%</div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }} className="reveal">
          <div className="section-tag" style={{ justifyContent: 'center' }}>Technical Skills</div>
          <h2 className="section-title">My <span>Arsenal</span></h2>
          <div className="accent-line" style={{ margin: '24px auto' }} />
          <p style={{ fontSize: 'clamp(14px,1.6vw,16px)', color: 'var(--text-secondary)', maxWidth: '460px', margin: '0 auto' }}>
            Full-stack Python expertise from API design to deployment, with deep roots in data engineering and AI.
          </p>
        </div>

        <div className="resp-grid-3 stagger-children" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px', marginBottom: '56px' }}>
          {skillCategories.map((cat, i) => (
            <TiltCard key={i} intensity={10} glowColor={cat.color} style={{
              background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)',
              overflow: 'hidden', transition: 'border-color 0.3s, box-shadow 0.3s',
            }} className="hoverable"
              onMouseEnter={e => { e.currentTarget.style.borderColor = cat.color.startsWith('var') ? 'rgba(200,255,0,0.35)' : cat.color; e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.4)` }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <div style={{ height: '2px', background: `linear-gradient(90deg, ${cat.color}, transparent)` }} />
              <div style={{ padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
                  <span style={{ fontSize: '16px' }}>{cat.icon}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: cat.color, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{cat.label}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {cat.skills.map((skill, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <SkillRing level={skill.level} color={cat.color} size={52} />
                      <div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-primary)', fontWeight: 500 }}>{skill.name}</div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text-muted)', marginTop: '2px' }}>
                          {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : skill.level >= 70 ? 'Proficient' : 'Familiar'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Tag cloud */}
        <div className="reveal" style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '18px' }}>Also Worked With</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', maxWidth: '820px', margin: '0 auto' }}>
            {techTags.map((tag, i) => (
              <span key={i} className="hoverable" style={{
                fontFamily: 'var(--font-mono)', fontSize: 'clamp(10px,1.2vw,12px)', color: 'var(--text-secondary)',
                background: 'var(--surface)', border: '1px solid var(--border)', padding: '5px 12px',
                borderRadius: '20px', transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.background = 'var(--accent-dim)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--surface)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
