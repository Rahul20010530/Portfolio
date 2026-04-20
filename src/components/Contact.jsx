import MagneticButton from './MagneticButton'

const contactLinks = [
  { label: 'Email', value: 'rahulsiwan2001@gmail.com', href: 'mailto:rahulsiwan2001@gmail.com', accent: 'var(--accent)', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg> },
  { label: 'Phone', value: '+91 9135578125', href: 'tel:+919135578125', accent: 'var(--accent-2)', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.97-1.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg> },
  { label: 'LinkedIn', value: 'rahul2001kumar', href: 'https://linkedin.com/in/rahul2001kumar', accent: '#a78bfa', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg> },
  { label: 'Location', value: 'New Delhi, India', href: '#', accent: '#fb923c', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg> },
]

export default function Contact({ onResumeOpen }) {
  return (
    <section id="contact" className="section" style={{ paddingBottom: '80px' }}>
      <div className="container">
        {/* Big CTA */}
        <div style={{ textAlign: 'center', marginBottom: '64px', position: 'relative' }} className="reveal">
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '500px', height: '350px', background: 'radial-gradient(ellipse, rgba(200,255,0,0.04), transparent)', pointerEvents: 'none', maxWidth: '100vw' }} />
          <div className="section-tag" style={{ justifyContent: 'center' }}>Get In Touch</div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(44px,9vw,110px)',
            lineHeight: 0.92, letterSpacing: '0.03em', color: 'var(--text-primary)', marginBottom: '24px',
          }}>
            LET'S BUILD<br />
            <span style={{ color: 'var(--accent)', animation: 'glow-text 4s ease-in-out infinite' }}>SOMETHING</span><br />
            GREAT.
          </h2>
          <p style={{ fontSize: 'clamp(14px,1.6vw,16px)', color: 'var(--text-secondary)', maxWidth: '440px', margin: '0 auto 40px', lineHeight: 1.75 }}>
            Open to full-time backend roles, freelance projects, and interesting conversations about systems, AI, and Python.
          </p>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <MagneticButton href="mailto:rahulsiwan2001@gmail.com" style={{
              alignItems: 'center', gap: '10px', background: 'var(--accent)', color: 'var(--bg)',
              fontFamily: 'var(--font-mono)', fontSize: 'clamp(12px,1.4vw,14px)', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase', padding: 'clamp(14px,2vw,18px) clamp(28px,4vw,48px)',
              borderRadius: 'var(--radius)', textDecoration: 'none', border: 'none', transition: 'all 0.25s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 14px 40px var(--accent-glow)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              Say Hello
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </MagneticButton>

            <MagneticButton onClick={onResumeOpen} style={{
              alignItems: 'center', gap: '8px', background: 'transparent', color: 'var(--text-primary)',
              fontFamily: 'var(--font-mono)', fontSize: 'clamp(12px,1.4vw,14px)', fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase', padding: 'clamp(14px,2vw,18px) clamp(24px,3vw,40px)',
              borderRadius: 'var(--radius)', border: '1px solid var(--border)', transition: 'all 0.25s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.background = 'var(--accent-dim)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
              View Resume
            </MagneticButton>
          </div>
        </div>

        {/* Contact cards */}
        <div className="resp-grid-4 stagger-children" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '14px', marginBottom: '56px' }}>
          {contactLinks.map((link, i) => (
            <a key={i} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="hoverable"
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
                padding: 'clamp(20px,3vw,32px) 16px', background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)', textDecoration: 'none', transition: 'all 0.3s ease', gap: '12px',
                position: 'relative', overflow: 'hidden',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = link.accent.startsWith('var') ? 'rgba(200,255,0,0.3)' : link.accent; e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.4)`; e.currentTarget.style.background = 'var(--surface-2)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.background = 'var(--surface)' }}
            >
              <div style={{ color: link.accent }}>{link.icon}</div>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '4px' }}>{link.label}</div>
                <div style={{ fontSize: 'clamp(10px,1.2vw,12px)', color: 'var(--text-secondary)', lineHeight: 1.5, wordBreak: 'break-all' }}>{link.value}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }} className="reveal">
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(10px,1.2vw,12px)', color: 'var(--text-muted)' }}>
            © 2026 <span style={{ color: 'var(--accent)' }}>Rahul Kumar</span>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', display: 'flex', gap: '6px', alignItems: 'center' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', animation: 'pulse-glow 2s infinite' }} />
            Available for work
          </div>
        </div>
      </div>
    </section>
  )
}
