export const lerp = (a, b, t) => a + (b - a) * t

export const clamp = (val, min, max) => Math.min(Math.max(val, min), max)

export const mapRange = (val, inMin, inMax, outMin, outMax) =>
  ((val - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin

export const scrambleText = (element, finalText, duration = 800) => {
  const chars = '!<>-_\\/[]{}—=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@$%&'
  let startTime = null
  const totalChars = finalText.length

  const step = (timestamp) => {
    if (!startTime) startTime = timestamp
    const progress = Math.min((timestamp - startTime) / duration, 1)
    const resolvedCount = Math.floor(progress * totalChars)

    element.textContent = finalText
      .split('')
      .map((char, i) => {
        if (char === ' ') return ' '
        if (i < resolvedCount) return char
        return chars[Math.floor(Math.random() * chars.length)]
      })
      .join('')

    if (progress < 1) requestAnimationFrame(step)
    else element.textContent = finalText
  }

  requestAnimationFrame(step)
}

export const countUp = (element, target, duration = 1500, suffix = '') => {
  let startTime = null
  const start = 0
  const step = (timestamp) => {
    if (!startTime) startTime = timestamp
    const progress = Math.min((timestamp - startTime) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3) // ease out cubic
    const current = Math.floor(eased * target)
    element.textContent = current + suffix
    if (progress < 1) requestAnimationFrame(step)
    else element.textContent = target + suffix
  }
  requestAnimationFrame(step)
}
