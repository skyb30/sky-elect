import GlassCard from './GlassCard.jsx'
import { projects } from '../data/projects.js'

export default function LatestProjects() {
  const featured = projects.slice(0, 3)

  return (
    <div className="text-left">
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="text-sm font-semibold text-sky-400">Latest Projects</div>
          <div className="mt-2 text-3xl md:text-4xl font-black">Before & After Results</div>
        </div>
        <button
          type="button"
          onClick={() => (window.location.href = '/projects')}
          className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold hover:border-sky-500/40"
        >
          View All
        </button>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {featured.map((p) => (
          <GlassCard key={p.id} className="p-5">
            <div className="h-40 w-full rounded-3xl border border-white/10 bg-hero-gradient" />
            <div className="mt-3 font-bold text-[var(--text-h)]">{p.title}</div>
            <div className="mt-2 text-sm text-[var(--text)]">{p.category}</div>
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                onClick={() => (window.location.href = '/projects')}
                className="w-full rounded-2xl bg-sky-500 px-4 py-3 text-sm font-semibold text-white hover:bg-sky-600"
              >
                See Details
              </button>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  )
}

