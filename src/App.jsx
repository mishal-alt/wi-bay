import { useState } from 'react'
import Envelope from './components/Envelope'
import Petals from './components/Petals'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import Story from './components/Story'
import EventDetails from './components/EventDetails'
import Closing from './components/Closing'

export default function App() {
  const [showEnvelope, setShowEnvelope] = useState(true)
  return (
    <>
      <Envelope visible={showEnvelope} onDone={() => setShowEnvelope(false)} />
      <Petals />
      <main className="min-h-screen w-full overflow-x-hidden bg-cream relative">
        <Hero />
        <Countdown />
        <Story />
        <EventDetails />
        <Closing />
      </main>
    </>
  )
}
