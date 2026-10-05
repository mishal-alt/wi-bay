import { closing, couple } from '../data'
import Reveal from './Reveal'
import Ornament from './Ornament'
import Credit from './Credit'

export default function Closing() {
  return (
    <section
      id="closing"
      className="relative overflow-hidden bg-gradient-to-b from-cream-dark/40 via-cream-dark/70 to-cream-dark px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-md text-center">
        <Reveal>
          <div className="rounded-3xl border border-gold/25 bg-white/60 p-8 shadow-lg backdrop-blur-md sm:p-10">
            <p className="font-display text-2xl italic leading-relaxed text-ink sm:text-3xl">"{closing.message}"</p>
            <Ornament className="mt-8" />
            <div className="mt-8 flex flex-col items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold/40 bg-cream shadow-inner ring-4 ring-gold/15">
                <span className="font-script text-3xl font-bold text-sage-dark">{couple.monogram}</span>
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.35em] text-ink-soft">{closing.signature}</p>
            </div>
          </div>
        </Reveal>
        <Credit />
      </div>
    </section>
  )
}
