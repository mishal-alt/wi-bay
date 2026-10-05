import { motion, useReducedMotion } from 'framer-motion'

// Fade/slide-in on scroll; plain element when reduced motion is requested.
export default function Reveal({ as = 'div', children, delay = 0, y = 28, className = '', once = true, amount = 0.2 }) {
  const reduce = useReducedMotion()
  const Tag = motion[as] ?? motion.div
  if (reduce) {
    const Plain = as
    return <Plain className={className}>{children}</Plain>
  }
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  )
}
