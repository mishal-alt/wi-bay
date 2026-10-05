import { Heart } from 'lucide-react'
import { story } from '../data'
import Reveal from './Reveal'
import Ornament from './Ornament'

export default function Story() {
  return (
    <section id="our-story" className="bg-gradient-to-b from-cream-dark/30 via-cream to-cream px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-md">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-sage-dark font-medium">Our Journey</p>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">Our Story</h2>
          <Ornament className="mt-4" />
        </Reveal>
        <ol className="relative mt-14 space-y-10 border-l-2 border-gradient-to-b border-gold/40 pl-8">
          {story.map((s, i) => (
            <Reveal as="li" key={s.year} delay={i * 0.08} className="relative">
              <span className="absolute -left-[2.55rem] top-1 flex h-7 w-7 items-center justify-center rounded-full bg-white ring-2 ring-gold/60 shadow-md transition-transform hover:scale-110">
                <Heart className="h-3.5 w-3.5 fill-gold text-gold animate-pulse" aria-hidden="true" />
              </span>
              <div className="rounded-2xl bg-white/70 p-5 shadow-sm ring-1 ring-gold/20 backdrop-blur-sm transition-all hover:shadow-md hover:ring-gold/40">
                <span className="inline-block rounded-full bg-gold/15 px-3 py-0.5 font-display text-sm font-semibold text-sage-dark">{s.year}</span>
                <h3 className="mt-2 font-display text-xl font-medium text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
