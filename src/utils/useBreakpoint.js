import { useState, useEffect } from 'react'

export default function useBreakpoint() {
  const [bp, setBp] = useState(() => {
    const w = typeof window !== 'undefined' ? window.innerWidth : 1200
    return { w, isMobile: w < 640, isTablet: w >= 640 && w < 1024, isDesktop: w >= 1024 }
  })

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      setBp({ w, isMobile: w < 640, isTablet: w >= 640 && w < 1024, isDesktop: w >= 1024 })
    }
    window.addEventListener('resize', update)
    update()
    return () => window.removeEventListener('resize', update)
  }, [])

  return bp
}
