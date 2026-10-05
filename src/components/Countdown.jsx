import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { WEDDING_ISO } from '../data'
import Reveal from './Reveal'
import Ornament from './Ornament'

function remaining() {
  const ms = Math.max(0, new Date(WEDDING_ISO).getTime() - Date.now())
  return {
    days: Math.floor(ms / (1e3 * 60 * 60 * 24)),
    hours: Math.floor((ms / (1e3 * 60 * 60)) % 24),
    minutes: Math.floor((ms / (1e3 * 60)) % 60),
    seconds: Math.floor((ms / 1e3) % 60),
  }
}

// One rolling digit.
function Digit({ value }) {
  return (
    <span className="relative inline-block h-[1.1em] w-[0.65em] overflow-hidden align-top">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={value}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

function Unit({ label, value }) {
  const text = String(value).padStart(2, '0')
  return (
    <div className="group relative flex flex-col items-center gap-1 rounded-2xl bg-white/80 px-3 py-4 shadow-md ring-1 ring-gold/30 backdrop-blur-md transition-all duration-300 hover:shadow-lg hover:ring-gold/60 hover:-translate-y-1 sm:px-5 sm:py-5">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-gold/10 to-transparent opacity-50 pointer-events-none" />
      <div className="flex font-display text-3xl font-semibold tabular-nums text-sage-dark sm:text-4xl">
        {text.split('').map((d, i) => (
          <Digit key={i} value={d} />
        ))}
      </div>
      <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-ink-soft sm:text-xs">{label}</span>
    </div>
  )
}

export default function Countdown() {
  const [t, setT] = useState(remaining)
  useEffect(() => {
    const id = setInterval(() => setT(remaining()), 1000)
    return () => clearInterval(id)
  }, [])
  const done = useMemo(() => new Date(WEDDING_ISO).getTime() - Date.now() <= 0, [t])
  return (
    <section id="countdown" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-md text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.35em] text-sage-dark">Counting down to</p>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">The Big Day</h2>
          <Ornament className="mt-4" />
        </Reveal>
        <Reveal delay={0.15}>
          {done ? (
            <p className="mt-10 font-display text-xl italic text-ink-soft">We're married! Thank you for celebrating with us.</p>
          ) : (
            <div className="mt-10 grid grid-cols-4 gap-2 sm:gap-4">
              <Unit label="Days" value={t.days} />
              <Unit label="Hours" value={t.hours} />
              <Unit label="Minutes" value={t.minutes} />
              <Unit label="Seconds" value={t.seconds} />
            </div>
          )}
        </Reveal>
      </div>
    </section>
  )
}
