import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import ResumeModal from './components/ResumeModal'
import ScrollProgress from './components/ScrollProgress'

function App() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [resumeOpen, setResumeOpen] = useState(false)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0

    const moveCursor = (e) => {
      mouseX = e.clientX; mouseY = e.clientY
      dot.style.left = mouseX + 'px'; dot.style.top = mouseY + 'px'
    }

    const onDown = () => ring.classList.add('clicking')
    const onUp = () => ring.classList.remove('clicking')

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.1
      ringY += (mouseY - ringY) * 0.1
      ring.style.left = ringX + 'px'; ring.style.top = ringY + 'px'
      requestAnimationFrame(animateRing)
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    animateRing()

    const handleHoverIn = () => ring.classList.add('hovering')
    const handleHoverOut = () => ring.classList.remove('hovering')

    // Re-run hover binds when DOM updates
    const bindHovers = () => {
      document.querySelectorAll('a, button, .hoverable').forEach(el => {
        el.addEventListener('mouseenter', handleHoverIn)
        el.addEventListener('mouseleave', handleHoverOut)
      })
    }
    bindHovers()
    const mo = new MutationObserver(bindHovers)
    mo.observe(document.body, { childList: true, subtree: true })

    // Scroll reveal
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.08 })
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger-children').forEach(el => io.observe(el))

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      mo.disconnect()
    }
  }, [])

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
      <div className="grid-bg" />
      <div className="blob-container">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>
      <ScrollProgress />
      <Navbar onResumeOpen={() => setResumeOpen(true)} />
      <Hero onResumeOpen={() => setResumeOpen(true)} />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact onResumeOpen={() => setResumeOpen(true)} />
      {resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />}
    </>
  )
}

export default App
