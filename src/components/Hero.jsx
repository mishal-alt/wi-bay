import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { couple, details } from '../data'

function Corner({ className }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className}>
      <path d="M10 190C40 140 40 90 10 40M10 40C50 60 90 60 110 20M10 40C30 70 30 110 60 130" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="110" cy="20" r="6" fill="currentColor" />
      <circle cx="60" cy="130" r="5" fill="currentColor" />
      <circle cx="10" cy="40" r="4" fill="currentColor" />
    </svg>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.1])
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  return (
    <section ref={ref} id="hero" className="relative flex h-[100svh] min-h-[600px] w-full items-center justify-center overflow-hidden bg-ink">
      <motion.div aria-hidden="true" style={{ scale }} className="absolute inset-0 z-0 h-full w-full">
        <img src="/images/hero_couple.png" alt="Ava and Noah engagement" className="h-full w-full object-cover object-center filter brightness-[0.9] contrast-[1.05]" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/40 to-ink/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(20,20,20,0.6)_100%)]" />
        <Corner className="absolute top-4 left-4 h-28 w-28 text-gold/40 sm:h-44 sm:w-44" />
        <Corner className="absolute bottom-4 right-4 h-28 w-28 rotate-180 text-gold/40 sm:h-44 sm:w-44" />
      </motion.div>
      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 mx-4 flex max-w-xl flex-col items-center rounded-3xl border border-white/20 bg-black/30 px-6 py-10 text-center shadow-2xl backdrop-blur-md sm:px-12 sm:py-14"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-3 text-xs uppercase tracking-[0.4em] text-gold-light/90 font-medium"
        >
          Together with their families
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-script text-balance text-6xl leading-tight text-white drop-shadow-lg sm:text-7xl md:text-8xl"
        >
          {couple.partnerOne} <span className="text-gold">&amp;</span> {couple.partnerTwo}
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="my-4 h-px w-24 bg-gradient-to-r from-transparent via-gold/70 to-transparent"
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="font-display text-xl italic text-cream/95 sm:text-2xl"
        >
          request the pleasure of your company
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-6 font-sans text-xs uppercase tracking-[0.3em] font-semibold text-gold-light sm:text-sm"
        >
          {details.dateLabel.toUpperCase()}
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/70 mb-1">Scroll</span>
        <motion.div animate={reduce ? {} : { y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}>
          <ChevronDown className="h-5 w-5 text-gold-light" aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  )
}
