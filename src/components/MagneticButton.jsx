import { useRef } from 'react'

export default function MagneticButton({ children, strength = 0.35, style = {}, className = '', onClick, href, download, target }) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
    el.style.transition = 'transform 0.1s ease'
  }

  const handleLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate(0, 0)'
    el.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)'
  }

  const Tag = href ? 'a' : 'button'
  const extraProps = href ? { href, download, target, rel: target === '_blank' ? 'noreferrer' : undefined } : {}

  return (
    <Tag
      ref={ref}
      className={`hoverable ${className}`}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ display: 'inline-flex', ...style }}
      {...extraProps}
    >
      {children}
    </Tag>
  )
}
