import SectionHeading from '../components/SectionHeading.jsx'
import GlassCard from '../components/GlassCard.jsx'
import { services } from '../data/services.js'
import Button from '../components/Button.jsx'

export default function Services() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeading
        title="Services"
        subtitle="Premium electrical and solar installation, maintenance and technical support."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {services.map((s) => (
          <GlassCard key={s.id} className="p-6 text-left">
            <div className="h-40 w-full rounded-3xl bg-hero-gradient border border-white/10" />
            <div className="mt-4 text-sm font-semibold text-sky-400">Service</div>
            <div className="mt-2 text-lg font-black text-[var(--text-h)]">{s.title}</div>
            <p className="mt-3 text-sm text-[var(--text)]">{s.description}</p>
            <div className="mt-4 grid gap-2">
              {s.benefits.map((b) => (
                <div key={b} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[var(--text-h)] font-semibold">
                  {b}
                </div>
              ))}
            </div>
            <div className="mt-5">
              <Button variant="orange" className="w-full" onClick={() => (window.location.href = '/contact')}>
                Book a Service
              </Button>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  )
}

