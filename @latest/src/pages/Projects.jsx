import SectionHeading from '../components/SectionHeading.jsx'
import GlassCard from '../components/GlassCard.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeading
        title="Projects"
        subtitle="Before-and-after results across residential, commercial, solar and industrial installations."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {projects.map((p) => (
          <GlassCard key={p.id} className="p-5 text-left">
            <div className="h-44 w-full rounded-3xl border border-white/10 bg-hero-gradient" />
            <div className="mt-3 font-black text-[var(--text-h)]">{p.title}</div>
            <div className="mt-2 text-sm text-[var(--text)]">{p.category}</div>
            <div className="mt-4 grid gap-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-[var(--text-h)]">
                Before: {p.before}
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-[var(--text-h)]">
                After: {p.after}
              </div>
            </div>
            <div className="mt-5 text-sm text-[var(--text)]">Customer rating: ★ {p.rating}</div>
          </GlassCard>
        ))}
      </div>

      <div className="mt-12">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-[18px] p-7 md:p-10 text-left">
          <div className="text-sm font-semibold text-sky-400">Customer Reviews</div>
          <div className="mt-2 text-2xl font-black">What Clients Say</div>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {["Efficient installation", "Clean wiring & safety", "Solar performance improved"].map((x) => (
              <GlassCard key={x} className="p-5">
                <div className="font-bold text-[var(--text-h)]">{x}</div>
                <div className="mt-2 text-sm text-[var(--text)]">Premium service experience from SKY-ELECT.</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

