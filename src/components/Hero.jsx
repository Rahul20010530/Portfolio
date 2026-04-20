import { useState, useEffect, useRef } from 'react'
import MagneticButton from './MagneticButton'

const roles = ['Backend Developer','Python Developer','FastAPI Architect', 'Microservices Architect',  'GenAI Developer', 'System Designer']

export default function Hero({ onResumeOpen }) {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayText, setDisplayText] = useState('') 
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIdx, setCharIdx] = useState(0)
  const matrixRef = useRef(null)
  const statsRef = useRef([])

  // Matrix rain canvas
  useEffect(() => {
    const canvas = matrixRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&{}[]<>/\\'
    const fontSize = 13
    let drops = []
    const initDrops = () => { const cols = Math.floor(canvas.width / fontSize); drops = Array(cols).fill(0).map(() => Math.random() * -50) }
    initDrops()
    window.addEventListener('resize', initDrops)
    let animId
    const draw = () => {
      ctx.fillStyle = 'rgba(3,3,10,0.04)'; ctx.fillRect(0, 0, canvas.width, canvas.height)
      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const isLead = Math.random() > 0.96
        ctx.fillStyle = isLead ? 'rgba(200,255,0,0.9)' : `rgba(200,255,0,${Math.random() * 0.15 + 0.02})`
        ctx.font = `${fontSize}px IBM Plex Mono`
        ctx.fillText(char, i * fontSize, y * fontSize)
        if (y * fontSize > canvas.height && Math.random() > 0.97) drops[i] = 0
        drops[i] += 0.5
      })
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); window.removeEventListener('resize', initDrops) }
  }, [])

  // Typewriter
  useEffect(() => {
    const current = roles[roleIdx]; let t
    if (!isDeleting && charIdx < current.length) { t = setTimeout(() => { setDisplayText(current.slice(0, charIdx + 1)); setCharIdx(c => c + 1) }, 75) }
    else if (!isDeleting && charIdx === current.length) { t = setTimeout(() => setIsDeleting(true), 2000) }
    else if (isDeleting && charIdx > 0) { t = setTimeout(() => { setDisplayText(current.slice(0, charIdx - 1)); setCharIdx(c => c - 1) }, 40) }
    else { setIsDeleting(false); setRoleIdx(i => (i + 1) % roles.length) }
    return () => clearTimeout(t)
  }, [charIdx, isDeleting, roleIdx])

  // Count up
  useEffect(() => {
    const targets = [4, 2, 10, 2], suffixes = ['+', '', '+', '']
    statsRef.current.forEach((el, i) => {
      if (!el) return
      let t0 = null
      const tick = (now) => {
        if (!t0) t0 = now
        const p = Math.min((now - t0) / 1800, 1)
        el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * targets[i]) + suffixes[i]
        if (p < 1) requestAnimationFrame(tick)
        else el.textContent = targets[i] + suffixes[i]
      }
      setTimeout(() => requestAnimationFrame(tick), 900 + i * 120)
    })
  }, [])

  const btnBase = {
    display: 'inline-flex', alignItems: 'center', gap: '10px',
    fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 600,
    letterSpacing: '0.1em', textTransform: 'uppercase',
    padding: '14px 28px', borderRadius: 'var(--radius)',
    textDecoration: 'none', border: 'none', transition: 'all 0.25s ease', whiteSpace: 'nowrap',
  }

  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', zIndex: 1, paddingTop: '68px' }}>
      {/* Matrix canvas */}
      <canvas ref={matrixRef} style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.5,
        maskImage: 'linear-gradient(to left, black 0%, black 40%, transparent 75%)',
        WebkitMaskImage: 'linear-gradient(to left, black 0%, black 40%, transparent 75%)',
      }} />

      <div style={{ position: 'absolute', top: '50%', left: '30%', transform: 'translate(-50%,-50%)', width: '600px', height: '600px', pointerEvents: 'none', zIndex: 0, background: 'radial-gradient(circle, rgba(200,255,0,0.04) 0%, transparent 65%)' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div className="resp-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: '60px', alignItems: 'center' }}>

          {/* LEFT */}
          <div>
            {/* Status badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent)',
              background: 'var(--accent-dim)', border: '1px solid var(--border)',
              padding: '6px 14px', borderRadius: '20px', marginBottom: '28px',
              animation: 'fadeInUp 0.6s ease forwards', opacity: 0, animationDelay: '0.1s',
            }}>
              <span style={{ width: '6px', height: '6px', background: 'var(--accent)', borderRadius: '50%', animation: 'pulse-glow 2s infinite', flexShrink: 0 }} />
              Available — New Delhi, India
            </div>

            {/* Name */}
            <div style={{ animation: 'fadeInUp 0.8s ease forwards', opacity: 0, animationDelay: '0.2s' }}>
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(64px, 12vw, 168px)',
                lineHeight: 0.88, letterSpacing: '0.04em', color: 'var(--text-primary)',
              }}>
                <span style={{ display: 'block' }}>RAHUL</span>
                <span style={{ display: 'block', WebkitTextStroke: '1.5px var(--accent)', color: 'transparent', animation: 'glow-text 4s ease-in-out infinite' }}>KUMAR</span>
              </h1>
            </div>

            {/* Typewriter */}
            <div style={{
              marginTop: '24px', display: 'flex', alignItems: 'center', gap: '10px',
              animation: 'fadeInUp 0.8s ease forwards', opacity: 0, animationDelay: '0.4s', flexWrap: 'wrap',
            }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(14px,2vw,20px)', color: 'var(--accent)', opacity: 0.5 }}>{'>'}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(14px,2vw,20px)', color: 'var(--accent-2)', minWidth: '200px' }}>
                {displayText}
                <span style={{ display: 'inline-block', width: '2px', height: '1em', background: 'var(--accent-2)', marginLeft: '3px', verticalAlign: 'middle', animation: 'blink 1s step-end infinite' }} />
              </span>
            </div>

            {/* Desc */}
            <p style={{
              marginTop: '20px', fontSize: 'clamp(14px,1.6vw,16px)', color: 'var(--text-secondary)', maxWidth: '520px', lineHeight: 1.8,
              animation: 'fadeInUp 0.8s ease forwards', opacity: 0, animationDelay: '0.55s',
            }}>
              4 years crafting scalable backend systems at government scale. Specializing in{' '}
              <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>FastAPI</span>,{' '}
              <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Django</span>,{' '}
              <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>MongoDB</span> &{' '}
              <span style={{ color: 'var(--accent)', fontWeight: 600 }}>LangChain AI</span>.
            </p>

            {/* CTAs */}
            <div style={{
              marginTop: '36px', display: 'flex', gap: '12px', flexWrap: 'wrap',
              animation: 'fadeInUp 0.8s ease forwards', opacity: 0, animationDelay: '0.7s',
            }}>
              <MagneticButton href="#experience" style={{ ...btnBase, background: 'var(--accent)', color: 'var(--bg)' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 30px var(--accent-glow)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                View Work
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </MagneticButton>
              <MagneticButton onClick={onResumeOpen} style={{ ...btnBase, background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.background = 'var(--accent-dim)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.background = 'transparent' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
                View Resume
              </MagneticButton>
            </div>

            {/* Stats */}
            <div className="resp-stat-grid" style={{
              marginTop: '52px', display: 'flex', gap: '36px',
              animation: 'fadeInUp 0.8s ease forwards', opacity: 0, animationDelay: '0.85s',
            }}>
              {[{ label: 'Years Exp.' }, { label: 'Companies' }, { label: 'Projects' }, { label: 'AI Apps' }].map((s, i) => (
                <div key={i} style={{ minWidth: '60px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px,4vw,42px)', color: 'var(--accent)', lineHeight: 1 }}>
                    <span ref={el => statsRef.current[i] = el}>0</span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '4px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT Terminal card — hidden on mobile */}
          <div className="resp-hide-mobile" style={{ animation: 'fadeInUp 1s ease forwards', opacity: 0, animationDelay: '0.6s', position: 'relative' }}>
            <div className="grad-border-wrap" style={{ animation: 'float-slow 7s ease-in-out infinite' }}>
              <div className="grad-border-inner">
                <div style={{ padding: '14px 20px', borderBottom: '1px solid rgba(200,255,0,0.08)', display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.02)' }}>
                  {['#ff5f57', '#febc2e', '#28c840'].map((c, i) => <div key={i} style={{ width: '11px', height: '11px', borderRadius: '50%', background: c }} />)}
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', marginLeft: '8px' }}>rahul@upsc-portal:~</span>
                </div>
                <div style={{ padding: '24px', fontFamily: 'var(--font-mono)', fontSize: '12.5px', lineHeight: 2 }}>
                  {[
                    { p: '$ ', cmd: 'whoami' }, { out: 'rahul_kumar', c: 'var(--text-primary)' },
                    { p: '$ ', cmd: 'cat stack.json' },
                    { key: '"backend"', val: '["FastAPI","Django","DRF"]', vc: '#fbbf24' },
                    { key: '"database"', val: '["MongoDB","MySQL","Redis"]', vc: '#34d399' },
                    { key: '"cloud"', val: '["AWS S3","EC2","Route53"]', vc: 'var(--accent-2)' },
                    { key: '"ai"', val: '["LangChain","OpenAI","RAG"]', vc: '#a78bfa' },
                    { key: '"compliance"', val: '"Govt. Grade / NIC"', vc: 'var(--accent)' },
                    { p: '$ ', cmd: 'status' }, { out: '✓ Available for opportunities', c: '#28c840' },
                  ].map((l, i) => (
                    <div key={i} style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {l.p && <><span style={{ color: 'var(--accent)' }}>{l.p}</span><span style={{ color: 'var(--text-primary)' }}>{l.cmd}</span></>}
                      {l.out && <span style={{ color: l.c }}>{l.out}</span>}
                      {l.key && (<><span style={{ color: 'var(--text-muted)', marginLeft: '10px' }} /><span style={{ color: 'var(--accent-2)' }}>{l.key}</span><span style={{ color: 'var(--text-muted)' }}>:</span><span style={{ color: l.vc }}>{l.val}</span></>)}
                    </div>
                  ))}
                  <div style={{ display: 'flex', gap: '6px', marginTop: '4px' }}>
                    <span style={{ color: 'var(--accent)' }}>$ </span>
                    <span style={{ display: 'inline-block', width: '8px', height: '15px', background: 'var(--accent)', animation: 'blink 1s step-end infinite' }} />
                  </div>
                </div>
              </div>
            </div>
            {/* Floating badges */}
            <div style={{ position: 'absolute', right: '-16px', top: '70px', background: 'var(--surface)', border: '1px solid rgba(0,229,255,0.3)', borderRadius: '10px', padding: '12px 16px', boxShadow: '0 8px 32px rgba(0,0,0,0.5)', animation: 'float 4s ease-in-out infinite' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '26px', color: 'var(--accent-2)', lineHeight: 1 }}>4+</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text-muted)', marginTop: '2px' }}>YEARS</div>
            </div>
            <div style={{ position: 'absolute', left: '-20px', bottom: '70px', background: 'var(--surface)', border: '1px solid rgba(124,58,237,0.3)', borderRadius: '10px', padding: '12px 16px', boxShadow: '0 8px 32px rgba(0,0,0,0.5)', animation: 'float 5s ease-in-out infinite', animationDelay: '1s' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', color: 'var(--accent-3)', lineHeight: 1 }}>NIC</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text-muted)', marginTop: '2px' }}>GOV SCALE</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', animation: 'fadeInUp 1s ease forwards', opacity: 0, animationDelay: '1.4s' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: '1px', height: '44px', background: 'linear-gradient(to bottom, var(--accent), transparent)', animation: 'slide-up 1.5s ease infinite' }} />
      </div>
    </section>
  )
}
