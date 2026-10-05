import { useEffect, useRef } from 'react'

// Falling petals + gold dust on a fixed canvas.
export default function Petals() {
  const ref = useRef(null)
  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf
    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)
    const onResize = () => {
      if (!canvas) return
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)
    const items = Array.from({ length: 24 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      size: Math.random() * 6 + 4,
      speedY: Math.random() * 0.8 + 0.3,
      speedX: Math.random() * 0.4 - 0.2,
      rotation: Math.random() * 360,
      rotationSpeed: Math.random() * 1.5 - 0.75,
      opacity: Math.random() * 0.5 + 0.25,
      isGoldDust: Math.random() > 0.6,
    }))
    const tick = () => {
      ctx.clearRect(0, 0, w, h)
      items.forEach((p) => {
        p.y += p.speedY
        p.x += Math.sin(p.y * 0.01) * 0.5 + p.speedX
        p.rotation += p.rotationSpeed
        if (p.y > h + 20) {
          p.y = -20
          p.x = Math.random() * w
        }
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate((p.rotation * Math.PI) / 180)
        ctx.globalAlpha = p.opacity
        if (p.isGoldDust) {
          ctx.beginPath()
          ctx.arc(0, 0, p.size * 0.4, 0, Math.PI * 2)
          ctx.fillStyle = '#C9A66B'
          ctx.shadowBlur = 8
          ctx.shadowColor = '#E3D1AC'
          ctx.fill()
        } else {
          ctx.beginPath()
          ctx.ellipse(0, 0, p.size, p.size * 0.6, 0, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(225, 175, 175, 0.75)'
          ctx.fill()
        }
        ctx.restore()
      })
      raf = requestAnimationFrame(tick)
    }
    tick()
    return () => {
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(raf)
    }
  }, [])
  return <canvas ref={ref} className="pointer-events-none fixed inset-0 z-30 h-full w-full opacity-70" />
}
