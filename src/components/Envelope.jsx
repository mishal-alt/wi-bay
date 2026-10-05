import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { couple } from '../data'

// Opening envelope: tap the gold wax seal to enter.
export default function Envelope({ visible, onDone }) {
  const [opening, setOpening] = useState(false)
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#211f1c]/95 backdrop-blur-lg px-4 select-none overflow-hidden"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,166,107,0.15),transparent_70%)] pointer-events-none" />
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => {
                if (opening) return
                setOpening(true)
                setTimeout(onDone, 1400)
              }}
              className="relative cursor-pointer w-[300px] h-[200px] sm:w-[380px] sm:h-[250px] rounded-2xl bg-[#f4efe6] shadow-2xl border border-[#d6c7b0] flex flex-col items-center justify-center p-6 text-center overflow-hidden transition-transform active:scale-98"
            >
              <div className="absolute inset-0 border-4 border-double border-gold/30 rounded-2xl pointer-events-none m-2" />
              <motion.div
                animate={opening ? { rotateX: 180, y: -20, opacity: 0.3 } : { rotateX: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                style={{ transformOrigin: 'top' }}
                className="absolute top-0 inset-x-0 h-1/2 bg-[#eadfce] border-b border-gold/40 shadow-sm z-10 clip-flap"
              />
              <motion.div
                animate={opening ? { y: -80, opacity: 1, scale: 1.05 } : { y: 0, opacity: 0.9 }}
                transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
                className="z-0 flex flex-col items-center justify-center rounded-xl bg-white/90 p-5 shadow-lg border border-gold/30 w-[85%] h-[75%]"
              >
                <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-sage-dark font-medium">Wedding Invitation</p>
                <h2 className="font-script text-3xl sm:text-4xl text-ink mt-1">
                  {couple.partnerOne} &amp; {couple.partnerTwo}
                </h2>
              </motion.div>
              <AnimatePresence>
                {!opening && (
                  <motion.div exit={{ scale: 1.4, opacity: 0 }} transition={{ duration: 0.5 }} className="absolute z-20 flex flex-col items-center">
                    <motion.div
                      animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.9, 0.4] }}
                      transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                      className="absolute -inset-3 rounded-full border-2 border-gold/60 pointer-events-none"
                    />
                    <div className="relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#dfb97a] via-[#c9a66b] to-[#8c6b30] shadow-2xl border-2 border-white/50 ring-4 ring-gold/20 hover:scale-105 transition-transform">
                      <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-gold-light/60 bg-gradient-to-br from-[#c9a66b] to-[#7a5b25] shadow-inner">
                        <span className="font-script text-xl sm:text-2xl font-bold text-cream drop-shadow-md">{couple.monogram}</span>
                      </div>
                    </div>
                    <motion.span
                      animate={{ y: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.8 }}
                      className="mt-3 text-[10px] uppercase tracking-[0.3em] font-sans font-semibold text-white/90 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm shadow-md"
                    >
                      Tap to Open
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-cream/70 font-sans">Click the gold wax seal to enter</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
