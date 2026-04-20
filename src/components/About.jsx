import TiltCard from './TiltCard'

export default function About() {
  return (
    <section id="about" className="section" style={{ paddingTop: '80px' }}>
      <div className="container">
        <div className="resp-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'start' }}>

          {/* LEFT */}
          <div className="reveal-left">
            <div className="section-tag">About Me</div>
            <h2 className="section-title">Building Systems<br /><span>That Scale.</span></h2>
            <div className="accent-line" />
            <p style={{ fontSize: 'clamp(14px,1.6vw,16px)', color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '18px' }}>
              Backend Developer with 4 years crafting scalable systems for
              <span style={{ color: 'var(--accent)' }}> government-grade applications</span>. Currently building APIs for India's UPSC portal under NIC at Pioneer E Solutions.
            </p>
            <p style={{ fontSize: 'clamp(14px,1.6vw,16px)', color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '32px' }}>
              I thrive at the intersection of performance, security, and compliance — from raw data pipelines to AI-powered workflows.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {[
                { label: 'Location', value: 'New Delhi, India', icon: '📍' },
                { label: 'Experience', value: '4 Years', icon: '⏱' },
                { label: 'Email', value: 'rahulsiwan2001\n@gmail.com', icon: '✉️' },
                { label: 'Phone', value: '+91 9135578125', icon: '📞' },
                { label: 'LinkedIn', value: 'rahul2001kumar', icon: '🔗' },
                { label: 'Status', value: 'Open to Offers', icon: '🟢' },
              ].map((item, i) => (
                <TiltCard key={i} intensity={8} glowColor="var(--accent)" style={{
                  padding: '12px 14px', background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)', transition: 'border-color 0.2s, background 0.2s',
                }} className="hoverable"
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.background = 'var(--surface-2)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--surface)' }}
                >
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '4px' }}>{item.icon} {item.label}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-primary)', fontWeight: 500, wordBreak: 'break-word', whiteSpace: 'pre-line' }}>{item.value}</div>
                </TiltCard>
              ))}
            </div>
          </div>

          {/* RIGHT Terminal — hide on mobile, show from tablet+ */}
          <div className="reveal-right resp-hide-mobile" style={{ paddingTop: '32px', position: 'relative' }}>
            <TiltCard intensity={6} glowColor="var(--accent-2)" style={{
              background: 'var(--bg-3)', borderRadius: 'var(--radius-lg)', overflow: 'hidden',
              boxShadow: '0 24px 80px rgba(0,0,0,0.6)', animation: 'float-slow 8s ease-in-out infinite',
              border: '1px solid rgba(0,229,255,0.12)',
            }}>
              <div style={{ padding: '12px 16px', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(0,229,255,0.08)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                {['#ff5f57', '#febc2e', '#28c840'].map((c, i) => <div key={i} style={{ width: '11px', height: '11px', borderRadius: '50%', background: c }} />)}
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', marginLeft: '8px' }}>developer.json</span>
              </div>
              <div style={{ padding: '20px', fontFamily: 'var(--font-mono)', fontSize: '12.5px', lineHeight: 1.9 }}>
                {[
                  { t: 'p', cmd: 'cat developer.json' },
                  { t: 'o' },
                  { t: 'kv', k: '"name"', v: '"Rahul Kumar"', vc: '#fbbf24' },
                  { t: 'kv', k: '"role"', v: '"Backend Developer"', vc: '#fbbf24' },
                  { t: 'kv', k: '"exp"', v: '"4 years"', vc: 'var(--accent)' },
                  { t: 'kv', k: '"stack"', v: '["Python","FastAPI","Django"]', vc: '#34d399' },
                  { t: 'kv', k: '"ai"', v: '["LangChain","OpenAI","RAG"]', vc: '#a78bfa' },
                  { t: 'kv', k: '"db"', v: '["MongoDB","MySQL","Redis"]', vc: 'var(--accent-2)' },
                  { t: 'c' },
                ].map((l, i) => (
                  <div key={i} style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {l.t === 'p' && <><span style={{ color: 'var(--accent)' }}>$ </span><span style={{ color: 'var(--text-primary)' }}>{l.cmd}</span></>}
                    {l.t === 'o' && <span style={{ color: 'var(--text-secondary)' }}>{'{'}</span>}
                    {l.t === 'c' && <span style={{ color: 'var(--text-secondary)' }}>{'}'}</span>}
                    {l.t === 'kv' && <><span style={{ width: '12px' }} /><span style={{ color: 'var(--accent-2)' }}>{l.k}</span><span style={{ color: 'var(--text-muted)' }}>: </span><span style={{ color: l.vc }}>{l.v}</span></>}
                  </div>
                ))}
                <div style={{ display: 'flex', gap: '6px', marginTop: '4px' }}>
                  <span style={{ color: 'var(--accent)' }}>$ </span>
                  <span style={{ display: 'inline-block', width: '8px', height: '15px', background: 'var(--accent)', animation: 'blink 1s step-end infinite' }} />
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  )
}
