import { useState, useEffect, useRef } from 'react'
import MagneticButton from './MagneticButton'

const roles = ['Backend Developer','Python Engineer','FastAPI Architect','GenAI Integrator','System Designer']

export default function Hero({ onResumeOpen }) {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIdx, setCharIdx] = useState(0)
  const matrixRef = useRef(null)
  const nameRef = useRef(null)
  const statsRef = useRef([])

  // Matrix rain canvas
  useEffect(() => {
    const canvas = matrixRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&{}[]<>/\\'
    const fontSize = 13
    let columns = Math.floor(canvas.width / fontSize)
    let drops = Array(columns).fill(0).map(() => Math.random() * -50)

    let animId
    const draw = () => {
      ctx.fillStyle = 'rgba(3,3,10,0.04)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      columns = Math.floor(canvas.width / fontSize)
      while (drops.length < columns) drops.push(Math.random() * -50)

      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize
        // bright lead char
        const isLead = Math.random() > 0.95
        ctx.fillStyle = isLead ? 'rgba(200,255,0,0.95)' : `rgba(200,255,0,${Math.random() * 0.18 + 0.02})`
        ctx.font = `${isLead ? fontSize + 1 : fontSize}px IBM Plex Mono`
        ctx.fillText(char, x, y * fontSize)

        if (y * fontSize > canvas.height && Math.random() > 0.97) drops[i] = 0
        drops[i] += 0.5
      })
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  // Typewriter
  useEffect(() => {
    const current = roles[roleIdx]
    let t
    if (!isDeleting && charIdx < current.length) {
      t = setTimeout(() => { setDisplayText(current.slice(0, charIdx+1)); setCharIdx(c=>c+1) }, 75)
    } else if (!isDeleting && charIdx === current.length) {
      t = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && charIdx > 0) {
      t = setTimeout(() => { setDisplayText(current.slice(0, charIdx-1)); setCharIdx(c=>c-1) }, 40)
    } else if (isDeleting && charIdx === 0) {
      setIsDeleting(false); setRoleIdx(i => (i+1) % roles.length)
    }
    return () => clearTimeout(t)
  }, [charIdx, isDeleting, roleIdx])

  // Count-up stats
  useEffect(() => {
    const targets = [3, 2, 5, 2]
    const suffixes = ['+', '', '+', '']
    statsRef.current.forEach((el, i) => {
      if (!el) return
      let start = 0
      const end = targets[i]
      const dur = 1800
      const t0 = performance.now()
      const tick = (now) => {
        const p = Math.min((now - t0) / dur, 1)
        const ease = 1 - Math.pow(1-p, 3)
        el.textContent = Math.floor(ease * end) + suffixes[i]
        if (p < 1) requestAnimationFrame(tick)
        else el.textContent = end + suffixes[i]
      }
      setTimeout(() => requestAnimationFrame(tick), 800 + i * 120)
    })
  }, [])

  const btnBase = {
    display: 'inline-flex', alignItems: 'center', gap: '10px',
    fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 600,
    letterSpacing: '0.1em', textTransform: 'uppercase',
    padding: '15px 36px', borderRadius: 'var(--radius)',
    textDecoration: 'none', border: 'none', transition: 'all 0.25s ease',
    whiteSpace: 'nowrap',
  }

  return (
    <section style={{ position:'relative', minHeight:'100vh', display:'flex', alignItems:'center', overflow:'hidden', zIndex:1 }}>
      {/* Matrix rain — right half mask */}
      <canvas ref={matrixRef} style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.55,
        maskImage: 'linear-gradient(to left, black 0%, black 45%, transparent 75%)',
        WebkitMaskImage: 'linear-gradient(to left, black 0%, black 45%, transparent 75%)',
      }} />

      {/* Center radial glow */}
      <div style={{
        position:'absolute', top:'50%', left:'30%',
        transform:'translate(-50%,-50%)',
        width:'800px', height:'800px', pointerEvents:'none', zIndex:0,
        background:'radial-gradient(circle, rgba(200,255,0,0.04) 0%, transparent 65%)',
      }} />

      <div className="container" style={{ position:'relative', zIndex:1, paddingTop:'80px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 420px', gap:'60px', alignItems:'center' }}>

          {/* LEFT CONTENT */}
          <div>
            {/* Status badge */}
            <div style={{
              display:'inline-flex', alignItems:'center', gap:'8px',
              fontFamily:'var(--font-mono)', fontSize:'11px', color:'var(--accent)',
              background:'var(--accent-dim)', border:'1px solid var(--border)',
              padding:'6px 16px', borderRadius:'20px', marginBottom:'36px',
              animation:'fadeInUp 0.6s ease forwards', opacity:0, animationDelay:'0.1s',
            }}>
              <span style={{ width:'6px', height:'6px', background:'var(--accent)', borderRadius:'50%', animation:'pulse-glow 2s infinite' }} />
              Available — New Delhi, India
            </div>

            {/* Name */}
            <div style={{ animation:'fadeInUp 0.8s ease forwards', opacity:0, animationDelay:'0.2s', overflow:'hidden' }}>
              <h1 ref={nameRef} style={{
                fontFamily:'var(--font-display)',
                fontSize:'clamp(80px,12vw,168px)',
                lineHeight:0.88, letterSpacing:'0.04em',
                color:'var(--text-primary)',
                textShadow:'0 0 80px rgba(200,255,0,0.08)',
              }}>
                <span style={{ display:'block' }}>RAHUL</span>
                <span style={{
                  display:'block',
                  WebkitTextStroke:'1.5px var(--accent)',
                  color:'transparent',
                  animation:'glow-text 4s ease-in-out infinite',
                }}>KUMAR</span>
              </h1>
            </div>

            {/* Typewriter */}
            <div style={{
              marginTop:'28px', display:'flex', alignItems:'center', gap:'12px',
              animation:'fadeInUp 0.8s ease forwards', opacity:0, animationDelay:'0.4s',
            }}>
              <span style={{ fontFamily:'var(--font-mono)', fontSize:'20px', color:'var(--accent)', opacity:0.5 }}>{'>'}</span>
              <span style={{ fontFamily:'var(--font-mono)', fontSize:'clamp(15px,2vw,20px)', color:'var(--accent-2)', minWidth:'260px' }}>
                {displayText}
                <span style={{ display:'inline-block', width:'2px', height:'1em', background:'var(--accent-2)', marginLeft:'3px', verticalAlign:'middle', animation:'blink 1s step-end infinite' }} />
              </span>
            </div>

            {/* Description */}
            <p style={{
              marginTop:'24px', fontSize:'16px', color:'var(--text-secondary)',
              maxWidth:'520px', lineHeight:1.8,
              animation:'fadeInUp 0.8s ease forwards', opacity:0, animationDelay:'0.55s',
            }}>
              3+ years crafting scalable backend systems at government scale.
              Specializing in{' '}
              <span style={{ color:'var(--text-primary)', fontWeight:600 }}>FastAPI</span>,{' '}
              <span style={{ color:'var(--text-primary)', fontWeight:600 }}>Django</span>,{' '}
              <span style={{ color:'var(--text-primary)', fontWeight:600 }}>MongoDB</span> &{' '}
              <span style={{ color:'var(--accent)', fontWeight:600 }}>LangChain AI</span>.
            </p>

            {/* CTAs */}
            <div style={{
              marginTop:'44px', display:'flex', gap:'14px', flexWrap:'wrap',
              animation:'fadeInUp 0.8s ease forwards', opacity:0, animationDelay:'0.7s',
            }}>
              <MagneticButton
                href="#experience"
                style={{
                  ...btnBase,
                  background:'var(--accent)', color:'var(--bg)',
                  boxShadow:'0 0 0 0 var(--accent-glow)',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow='0 8px 30px var(--accent-glow)'; e.currentTarget.style.transform='translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow='none'; e.currentTarget.style.transform='translateY(0)' }}
              >
                View Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </MagneticButton>

              <MagneticButton
                onClick={onResumeOpen}
                style={{
                  ...btnBase,
                  background:'transparent', color:'var(--text-primary)',
                  border:'1px solid var(--border)',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor='var(--accent)'; e.currentTarget.style.color='var(--accent)'; e.currentTarget.style.background='var(--accent-dim)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.color='var(--text-primary)'; e.currentTarget.style.background='transparent' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                View Resume
              </MagneticButton>
            </div>

            {/* Stats */}
            <div style={{
              marginTop:'60px', display:'flex', gap:'40px',
              animation:'fadeInUp 0.8s ease forwards', opacity:0, animationDelay:'0.85s',
            }}>
              {[
                { label:'Years Exp.', suffix:'+' },
                { label:'Companies', suffix:'' },
                { label:'Projects', suffix:'+' },
                { label:'AI Apps', suffix:'' },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontFamily:'var(--font-display)', fontSize:'42px', color:'var(--accent)', lineHeight:1, letterSpacing:'0.02em' }}>
                    <span ref={el => statsRef.current[i] = el}>0</span>
                  </div>
                  <div style={{ fontFamily:'var(--font-mono)', fontSize:'10px', color:'var(--text-muted)', letterSpacing:'0.12em', textTransform:'uppercase', marginTop:'4px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Holographic Terminal Card */}
          <div style={{ animation:'fadeInUp 1s ease forwards', opacity:0, animationDelay:'0.6s' }}>
            <div className="grad-border-wrap" style={{ animation:'float-slow 7s ease-in-out infinite' }}>
              <div className="grad-border-inner" style={{ padding:'0' }}>
                {/* Terminal top bar */}
                <div style={{
                  padding:'14px 20px', borderBottom:'1px solid rgba(200,255,0,0.08)',
                  display:'flex', alignItems:'center', gap:'8px',
                  background:'rgba(255,255,255,0.02)',
                }}>
                  {['#ff5f57','#febc2e','#28c840'].map((c,i) => <div key={i} style={{ width:'11px', height:'11px', borderRadius:'50%', background:c }} />)}
                  <span style={{ fontFamily:'var(--font-mono)', fontSize:'11px', color:'var(--text-muted)', marginLeft:'8px' }}>rahul@upsc-portal:~</span>
                </div>

                {/* Terminal body */}
                <div style={{ padding:'24px', fontFamily:'var(--font-mono)', fontSize:'12.5px', lineHeight:2 }}>
                  {[
                    { p:'$ ', cmd:'whoami', c:'var(--accent)' },
                    { out:'rahul_kumar', c:'var(--text-primary)' },
                    { p:'$ ', cmd:'cat stack.json', c:'var(--accent)' },
                    { key:'"backend"', val:'["FastAPI","Django","DRF"]', vc:'#fbbf24' },
                    { key:'"database"', val:'["MongoDB","MySQL","Redis"]', vc:'#34d399' },
                    { key:'"cloud"', val:'["AWS S3","EC2","Route53"]', vc:'var(--accent-2)' },
                    { key:'"ai"', val:'["LangChain","OpenAI","RAG"]', vc:'#a78bfa' },
                    { key:'"compliance"', val:'"Govt. Grade / NIC"', vc:'var(--accent)' },
                    { p:'$ ', cmd:'status', c:'var(--accent)' },
                    { out:'✓ Available for opportunities', c:'#28c840' },
                  ].map((l,i) => (
                    <div key={i} style={{ display:'flex', gap:'6px', flexWrap:'wrap' }}>
                      {l.p && <><span style={{ color:l.c }}>{l.p}</span><span style={{ color:'var(--text-primary)' }}>{l.cmd}</span></>}
                      {l.out && <span style={{ color:l.c }}>{l.out}</span>}
                      {l.key && (
                        <>
                          <span style={{ color:'var(--text-muted)', marginLeft:'12px' }}>{'  '}</span>
                          <span style={{ color:'var(--accent-2)' }}>{l.key}</span>
                          <span style={{ color:'var(--text-muted)' }}>:</span>
                          <span style={{ color:l.vc }}>{l.val}</span>
                        </>
                      )}
                    </div>
                  ))}
                  {/* Blinking cursor */}
                  <div style={{ display:'flex', gap:'6px', marginTop:'4px' }}>
                    <span style={{ color:'var(--accent)' }}>$ </span>
                    <span style={{ display:'inline-block', width:'8px', height:'15px', background:'var(--accent)', animation:'blink 1s step-end infinite' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div style={{
              position:'absolute', right:'-16px', top:'80px',
              background:'var(--surface)', border:'1px solid rgba(0,229,255,0.3)',
              borderRadius:'10px', padding:'12px 16px',
              boxShadow:'0 8px 32px rgba(0,0,0,0.5), 0 0 20px rgba(0,229,255,0.08)',
              animation:'float 4s ease-in-out infinite',
            }}>
              <div style={{ fontFamily:'var(--font-display)', fontSize:'26px', color:'var(--accent-2)', lineHeight:1 }}>3+</div>
              <div style={{ fontFamily:'var(--font-mono)', fontSize:'9px', color:'var(--text-muted)', marginTop:'2px', letterSpacing:'0.1em' }}>YEARS</div>
            </div>
            <div style={{
              position:'absolute', left:'-20px', bottom:'80px',
              background:'var(--surface)', border:'1px solid rgba(124,58,237,0.3)',
              borderRadius:'10px', padding:'12px 16px',
              boxShadow:'0 8px 32px rgba(0,0,0,0.5), 0 0 20px rgba(124,58,237,0.08)',
              animation:'float 5s ease-in-out infinite', animationDelay:'1s',
            }}>
              <div style={{ fontFamily:'var(--font-display)', fontSize:'22px', color:'var(--accent-3)', lineHeight:1 }}>NIC</div>
              <div style={{ fontFamily:'var(--font-mono)', fontSize:'9px', color:'var(--text-muted)', marginTop:'2px', letterSpacing:'0.1em' }}>GOV SCALE</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{
        position:'absolute', bottom:'40px', left:'50%', transform:'translateX(-50%)',
        display:'flex', flexDirection:'column', alignItems:'center', gap:'8px',
        animation:'fadeInUp 1s ease forwards', opacity:0, animationDelay:'1.4s',
      }}>
        <span style={{ fontFamily:'var(--font-mono)', fontSize:'9px', color:'var(--text-muted)', letterSpacing:'0.15em', textTransform:'uppercase' }}>Scroll</span>
        <div style={{ width:'1px', height:'48px', background:'linear-gradient(to bottom, var(--accent), transparent)', animation:'slide-up 1.5s ease infinite' }} />
      </div>
    </section>
  )
}
