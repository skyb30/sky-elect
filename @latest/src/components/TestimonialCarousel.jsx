import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { testimonials } from '../data/testimonials.js'
import GlassCard from './GlassCard.jsx'

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0)
  const items = useMemo(() => testimonials, [])

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 5200)
    return () => clearInterval(id)
  }, [items.length])

  const t = items[index]

  return (
    <div className="text-left">
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="text-sm font-semibold text-sky-400">Customer Testimonials</div>
          <div className="mt-2 text-3xl md:text-4xl font-black">Trusted by Premium Clients</div>
        </div>
        <div className="hidden md:flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={
                'h-2.5 w-2.5 rounded-full transition ' +
                (i === index ? 'bg-orange-500' : 'bg-white/20 hover:bg-white/35')
              }
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-6">
        <GlassCard className="p-7 md:p-9">
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-3xl border border-white/10 bg-white/5" />
              <div>
                <div className="font-bold text-[var(--text-h)]">{t.name}</div>
                <div className="text-sm text-[var(--text)]">{t.role}</div>
              </div>
              <div className="ml-auto rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-sky-400">
                ★ {t.rating}
              </div>
            </div>
            <p className="mt-5 text-sm md:text-base text-[var(--text)]">“{t.quote}”</p>
          </motion.div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <div className="text-xs text-[var(--text)]">Result-focused installation & responsive support.</div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setIndex((i) => (i - 1 + items.length) % items.length)}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold hover:border-sky-500/40"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={() => setIndex((i) => (i + 1) % items.length)}
                className="rounded-2xl bg-sky-500 px-4 py-3 text-sm font-semibold text-white hover:bg-sky-600"
              >
                Next
              </button>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}

