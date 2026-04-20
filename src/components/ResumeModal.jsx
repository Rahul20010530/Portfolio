import { useEffect } from 'react'
import useBreakpoint from '../utils/useBreakpoint'

export default function ResumeModal({ onClose }) {
  const { isMobile } = useBreakpoint()

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', handleKey); document.body.style.overflow = '' }
  }, [onClose])

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 9000,
      background: 'rgba(3,3,10,0.92)', backdropFilter: 'blur(16px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: isMobile ? '12px' : '32px', animation: 'fadeIn 0.2s ease forwards',
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        width: '100%', maxWidth: '860px',
        height: isMobile ? '95vh' : '90vh',
        background: 'var(--bg-3)', border: '1px solid var(--border)',
        borderRadius: isMobile ? 'var(--radius)' : 'var(--radius-lg)',
        overflow: 'hidden', display: 'flex', flexDirection: 'column',
        boxShadow: '0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(200,255,0,0.06)',
        animation: 'fadeInUp 0.3s ease forwards',
      }}>
        {/* Header */}
        <div style={{
          padding: isMobile ? '12px 14px' : '14px 20px', background: 'var(--surface)',
          borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', overflow: 'hidden' }}>
            {!isMobile && ['#ff5f57', '#febc2e', '#28c840'].map((c, i) => (
              <div key={i} style={{ width: '11px', height: '11px', borderRadius: '50%', background: c, flexShrink: 0 }} />
            ))}
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', marginLeft: isMobile ? 0 : '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              Rahul_Kumar_Resume.pdf
            </span>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexShrink: 0 }}>
            <a href="/resume.pdf" download="Rahul_Kumar_Resume.pdf" className="hoverable" style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600,
              color: 'var(--bg)', background: 'var(--accent)', padding: '7px 14px',
              borderRadius: 'var(--radius)', textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase', transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 4px 16px var(--accent-glow)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
              {!isMobile && 'Download'}
            </a>
            <button onClick={onClose} className="hoverable" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '32px', height: '32px', background: 'var(--surface-2)',
              border: '1px solid var(--border)', borderRadius: 'var(--radius)',
              color: 'var(--text-secondary)', transition: 'all 0.2s', flexShrink: 0,
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#ff5f57'; e.currentTarget.style.color = '#ff5f57' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div style={{ flex: 1, overflow: 'hidden', background: '#1a1a1a' }}>
          <iframe src="/resume.pdf#view=FitH" title="Rahul Kumar Resume" style={{ width: '100%', height: '100%', border: 'none', display: 'block' }} />
        </div>
      </div>

      {/* ESC hint — desktop only */}
      {!isMobile && (
        <div style={{ position: 'absolute', bottom: '14px', left: '50%', transform: 'translateX(-50%)', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ padding: '2px 6px', border: '1px solid var(--border)', borderRadius: '4px', fontSize: '10px' }}>ESC</span>
          to close
        </div>
      )}
    </div>
  )
}
