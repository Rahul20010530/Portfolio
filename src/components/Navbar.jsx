import { useState, useEffect } from 'react'
import MagneticButton from './MagneticButton'

const navLinks = [
  { label:'About', href:'#about' },
  { label:'Skills', href:'#skills' },
  { label:'Experience', href:'#experience' },
  { label:'Education', href:'#education' },
  { label:'Contact', href:'#contact' },
]

export default function Navbar({ onResumeOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
      const sections = ['about','skills','experience','education','contact']
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 140) { setActive(id); break }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav style={{
      position:'fixed', top:0, left:0, right:0, zIndex:1000,
      padding:'0 48px', height:'72px',
      display:'flex', alignItems:'center', justifyContent:'space-between',
      background: scrolled ? 'rgba(3,3,10,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(200,255,0,0.06)' : '1px solid transparent',
      transition:'all 0.4s ease',
    }}>
      {/* Logo */}
      <a href="#" className="hoverable" style={{ display:'flex', alignItems:'center', gap:'10px', textDecoration:'none' }}>
        <div style={{
          width:'34px', height:'34px',
          background:'var(--accent)', color:'var(--bg)',
          borderRadius:'6px', display:'flex', alignItems:'center', justifyContent:'center',
          fontFamily:'var(--font-mono)', fontSize:'13px', fontWeight:700,
          boxShadow:'0 0 16px var(--accent-glow)',
          transition:'all 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform='rotate(5deg) scale(1.05)'; e.currentTarget.style.boxShadow='0 0 28px var(--accent-glow)' }}
          onMouseLeave={e => { e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='0 0 16px var(--accent-glow)' }}
        >RK</div>
        <span style={{ fontFamily:'var(--font-mono)', fontSize:'13px', color:'var(--text-secondary)', letterSpacing:'0.04em' }}>
          Rahul<span style={{ color:'var(--accent)' }}> Kumar</span>
        </span>
      </a>

      {/* Links */}
      <div style={{ display:'flex', alignItems:'center', gap:'32px' }}>
        {navLinks.map(link => (
          <a key={link.href} href={link.href} className="hoverable" style={{
            fontFamily:'var(--font-mono)', fontSize:'11px', fontWeight:500,
            color: active === link.href.slice(1) ? 'var(--accent)' : 'var(--text-secondary)',
            textDecoration:'none', letterSpacing:'0.08em', textTransform:'uppercase',
            position:'relative', padding:'4px 0',
            transition:'color 0.2s',
          }}>
            {active === link.href.slice(1) && (
              <span style={{
                position:'absolute', bottom:0, left:0, right:0,
                height:'1px', background:'var(--accent)',
                boxShadow:'0 0 6px var(--accent-glow)',
                animation:'fadeIn 0.2s ease',
              }} />
            )}
            <span style={{ color:'var(--accent)', opacity:0.4, marginRight:'3px' }}>{'// '}</span>
            {link.label}
          </a>
        ))}

        <MagneticButton
          onClick={onResumeOpen}
          strength={0.2}
          style={{
            fontFamily:'var(--font-mono)', fontSize:'11px', fontWeight:600,
            color:'var(--bg)', background:'var(--accent)',
            padding:'8px 20px', borderRadius:'var(--radius)',
            letterSpacing:'0.1em', textTransform:'uppercase', border:'none',
            alignItems:'center', gap:'6px',
            transition:'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.boxShadow='0 4px 20px var(--accent-glow)'; e.currentTarget.style.background='#d4ff1a' }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow='none'; e.currentTarget.style.background='var(--accent)' }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          Resume
        </MagneticButton>
      </div>
    </nav>
  )
}
