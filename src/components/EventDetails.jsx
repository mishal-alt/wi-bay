import { Calendar, Church, Clock, MapPin, PartyPopper } from 'lucide-react'
import { couple, details } from '../data'
import Reveal from './Reveal'
import Ornament from './Ornament'

// Google Calendar "add event" link.
function calendarLink(title, text, location, startIso, endIso) {
  const fmt = (d) => new Date(d).toISOString().replace(/-|:|\.\d\d\d/g, '')
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${fmt(startIso)}/${fmt(endIso)}&details=${encodeURIComponent(text)}&location=${encodeURIComponent(location)}`
}

function EventCard({ icon: Icon, label, time, venue, address, mapUrl, calendarUrl, delay }) {
  return (
    <Reveal delay={delay} className="rounded-3xl bg-white/80 p-6 shadow-md ring-1 ring-gold/20 backdrop-blur-sm sm:p-8">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage/20 text-sage-dark">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] font-semibold text-sage-dark">{label}</p>
          <p className="flex items-center gap-1.5 font-display text-lg text-ink font-medium">
            <Clock className="h-4 w-4 text-gold" aria-hidden="true" />
            {time}
          </p>
        </div>
      </div>
      <div className="mt-5 border-t border-gold/15 pt-5">
        <p className="font-display text-xl font-medium text-ink">{venue}</p>
        <p className="mt-1 text-sm text-ink-soft">{address}</p>
        <div className="mt-5 flex flex-wrap gap-2.5">
          <a
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-10 items-center gap-2 rounded-full bg-sage-dark px-4 py-2 text-xs font-medium uppercase tracking-wider text-cream transition-transform hover:scale-105 active:scale-95 shadow-sm"
          >
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Get Directions
          </a>
          <a
            href={calendarUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-10 items-center gap-2 rounded-full bg-gold/15 text-sage-dark ring-1 ring-gold/40 px-4 py-2 text-xs font-medium uppercase tracking-wider transition-colors hover:bg-gold/25 active:scale-95"
          >
            <Calendar className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            Add to Calendar
          </a>
        </div>
      </div>
    </Reveal>
  )
}

export default function EventDetails() {
  const { ceremony, reception } = details
  const ceremonyUrl = calendarLink(
    `${couple.partnerOne} & ${couple.partnerTwo}'s Wedding Ceremony`,
    'We invite you to join our ceremony!',
    `${ceremony.venue}, ${ceremony.address}`,
    '2026-10-24T16:00:00Z',
    '2026-10-24T18:00:00Z',
  )
  const receptionUrl = calendarLink(
    `${couple.partnerOne} & ${couple.partnerTwo}'s Wedding Reception`,
    'Dinner, drinks & celebration!',
    `${reception.venue}, ${reception.address}`,
    '2026-10-24T18:30:00Z',
    '2026-10-24T23:00:00Z',
  )
  return (
    <section id="details" className="px-6 py-20 sm:py-28 bg-gradient-to-b from-cream to-cream-dark/30">
      <div className="mx-auto max-w-md">
        <Reveal className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-sage-dark font-medium">When &amp; Where</p>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">Event Details</h2>
          <Ornament className="mt-4" />
        </Reveal>
        <div className="mt-12 space-y-6">
          <EventCard icon={Church} label="Ceremony" {...ceremony} calendarUrl={ceremonyUrl} delay={0} />
          <EventCard icon={PartyPopper} label="Reception" {...reception} calendarUrl={receptionUrl} delay={0.1} />
        </div>
      </div>
    </section>
  )
}
