import { useRef } from 'react'

export default function TiltCard({
  children,
  intensity = 12,
  style = {},
  className = '',
  glowColor = 'var(--accent)',
  onClick,
}) {
  const cardRef = useRef(null)
  const shineRef = useRef(null)
  const glowRef = useRef(null)

  const handleMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const rotX = (y - 0.5) * -intensity
    const rotY = (x - 0.5) * intensity

    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(8px)`

    if (shineRef.current) {
      shineRef.current.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.08) 0%, transparent 60%)`
      shineRef.current.style.opacity = '1'
    }

    if (glowRef.current) {
      glowRef.current.style.opacity = '1'
      glowRef.current.style.left = `${x * 100}%`
      glowRef.current.style.top = `${y * 100}%`
    }
  }

  const handleLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)'
    card.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
    if (shineRef.current) shineRef.current.style.opacity = '0'
    if (glowRef.current) glowRef.current.style.opacity = '0'
  }

  const handleEnter = () => {
    const card = cardRef.current
    if (card) card.style.transition = 'transform 0.1s ease'
  }

  return (
    <div
      ref={cardRef}
      className={className}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onMouseEnter={handleEnter}
      style={{
        transformStyle: 'preserve-3d',
        position: 'relative',
        cursor: onClick ? 'pointer' : 'default',
        ...style,
      }}
    >
      {/* Holographic shine */}
      <div
        ref={shineRef}
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          opacity: 0,
          transition: 'opacity 0.2s',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />
      {/* Moving glow point */}
      <div
        ref={glowRef}
        style={{
          position: 'absolute',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${glowColor}20, transparent 70%)`,
          transform: 'translate(-50%, -50%)',
          opacity: 0,
          transition: 'opacity 0.2s',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 3, height: '100%' }}>
        {children}
      </div>
    </div>
  )
}
