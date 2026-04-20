import { useState, useEffect } from 'react'
import MagneticButton from './MagneticButton'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ onResumeOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
      const sections = ['about', 'skills', 'experience', 'education', 'contact']
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 140) { setActive(id); break }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '0 clamp(20px,4vw,48px)', height: '68px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled || menuOpen ? 'rgba(3,3,10,0.92)' : 'transparent',
        backdropFilter: scrolled || menuOpen ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(200,255,0,0.06)' : '1px solid transparent',
        transition: 'all 0.4s ease',
      }}>
        {/* Logo */}
        <a href="#" className="hoverable" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }} onClick={closeMenu}>
          <div style={{
            width: '34px', height: '34px', background: 'var(--accent)', color: 'var(--bg)',
            borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700,
            boxShadow: '0 0 16px var(--accent-glow)', transition: 'all 0.2s', flexShrink: 0,
          }}>RK</div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-secondary)', letterSpacing: '0.04em' }}>
            Rahul<span style={{ color: 'var(--accent)' }}> Kumar</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="resp-nav-links" style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="hoverable" style={{
              fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 500,
              color: active === link.href.slice(1) ? 'var(--accent)' : 'var(--text-secondary)',
              textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase',
              position: 'relative', padding: '4px 0', transition: 'color 0.2s',
            }}>
              {active === link.href.slice(1) && (
                <span style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'var(--accent)', boxShadow: '0 0 6px var(--accent-glow)', animation: 'fadeIn 0.2s ease' }} />
              )}
              <span style={{ color: 'var(--accent)', opacity: 0.4, marginRight: '3px' }}>{'// '}</span>
              {link.label}
            </a>
          ))}
          <MagneticButton onClick={onResumeOpen} strength={0.2} style={{
            alignItems: 'center', gap: '6px',
            fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600,
            color: 'var(--bg)', background: 'var(--accent)',
            padding: '8px 18px', borderRadius: 'var(--radius)',
            letterSpacing: '0.1em', textTransform: 'uppercase', border: 'none', transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 20px var(--accent-glow)' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none' }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
            Resume
          </MagneticButton>
        </div>

        {/* Hamburger */}
        <button
          className="resp-hamburger hoverable"
          onClick={() => setMenuOpen(o => !o)}
          style={{
            display: 'none', flexDirection: 'column', gap: '5px', background: 'none',
            border: '1px solid var(--border)', borderRadius: '6px', padding: '8px',
            width: '40px', height: '40px', alignItems: 'center', justifyContent: 'center',
            transition: 'border-color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
          onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
        >
          {menuOpen ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
          ) : (
            <>
              <span style={{ width: '16px', height: '1.5px', background: 'var(--accent)', display: 'block' }} />
              <span style={{ width: '12px', height: '1.5px', background: 'var(--text-secondary)', display: 'block', alignSelf: 'flex-start' }} />
              <span style={{ width: '16px', height: '1.5px', background: 'var(--accent)', display: 'block' }} />
            </>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <div style={{ position: 'absolute', top: '20px', right: '20px', fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '0.15em' }}>
            MENU
          </div>
          {navLinks.map((link, i) => (
            <a
              key={link.href} href={link.href}
              className="hoverable"
              onClick={closeMenu}
              style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 10vw, 56px)',
                color: 'var(--text-primary)', textDecoration: 'none',
                letterSpacing: '0.05em', transition: 'color 0.2s',
                animation: `slideInFromLeft 0.4s ease forwards`,
                animationDelay: `${i * 0.06}s`,
                opacity: 0,
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-primary)'}
            >{link.label}</a>
          ))}
          <button
            className="hoverable"
            onClick={() => { onResumeOpen(); closeMenu() }}
            style={{
              fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700,
              color: 'var(--bg)', background: 'var(--accent)',
              border: 'none', padding: '14px 36px', borderRadius: 'var(--radius)',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              marginTop: '8px', animation: 'slideInFromLeft 0.4s ease forwards',
              animationDelay: '0.35s', opacity: 0,
            }}
          >View Resume</button>
          {/* Decorative */}
          <div style={{ position: 'absolute', bottom: '40px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', display: 'flex', gap: '6px', alignItems: 'center' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', animation: 'pulse-glow 2s infinite' }} />
            rahulsiwan2001@gmail.com
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideInFromLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </>
  )
}
