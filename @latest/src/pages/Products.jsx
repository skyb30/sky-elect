import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import GlassCard from '../components/GlassCard.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ProductDetailModal from '../components/ProductDetailModal.jsx'
import { products } from '../data/products.js'

export default function Products() {
  const [params] = useSearchParams()
  const searchQuery = params.get('search') || ''

  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category))
    return Array.from(set)
  }, [])

  const [activeCategory, setActiveCategory] = useState('All')
  const [query, setQuery] = useState(searchQuery)
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return products.filter((p) => {
      const categoryOk = activeCategory === 'All' ? true : p.category === activeCategory
      const searchOk = !q
        ? true
        : p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
      return categoryOk && searchOk
    })
  }, [activeCategory, query])

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeading
        title="Products"
        subtitle="Premium electrical and solar components. Search, filter and request orders via WhatsApp."
      />

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <GlassCard className="p-6 h-fit lg:sticky lg:top-24">
          <div className="text-sm font-semibold text-sky-400">Filters</div>
          <div className="mt-3">
            <div className="text-xs text-[var(--text)] mb-2">Category</div>
            <div className="grid gap-2">
              <button
                type="button"
                onClick={() => setActiveCategory('All')}
                className={
                  'rounded-2xl border px-4 py-3 text-sm font-semibold transition ' +
                  (activeCategory === 'All'
                    ? 'border-sky-500/60 bg-sky-500/10 text-sky-400'
                    : 'border-white/10 bg-white/5 text-[var(--text)] hover:border-sky-500/40')
                }
              >
                All
              </button>
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActiveCategory(c)}
                  className={
                    'rounded-2xl border px-4 py-3 text-sm font-semibold transition ' +
                    (activeCategory === c
                      ? 'border-sky-500/60 bg-sky-500/10 text-sky-400'
                      : 'border-white/10 bg-white/5 text-[var(--text)] hover:border-sky-500/40')
                  }
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <div className="text-xs text-[var(--text)] mb-2">Search</div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-sky-500"
              placeholder="Search products..."
            />
          </div>

          <div className="mt-6 text-xs text-[var(--text)]">
            Showing <span className="font-semibold text-[var(--text-h)]">{filtered.length}</span> items
          </div>
        </GlassCard>

        <div className="lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {filtered.map((p) => (
              <GlassCard key={p.id} className="p-5 text-left">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs font-semibold text-sky-400">{p.category}</div>
                    <div className="mt-2 font-black text-[var(--text-h)]">{p.name}</div>
                  </div>
                  <div className="h-10 w-10 rounded-2xl bg-white/5 border border-white/10" />
                </div>
                <div className="mt-3 text-sm text-[var(--text)]">{p.description}</div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-xs text-[var(--text)]">From</div>
                  <div className="font-black text-sky-400">${p.fromPrice}</div>
                </div>
                <div className="mt-4 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setSelected(p)}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold hover:border-sky-500/40"
                  >
                    View Details
                  </button>
                  <button
                    type="button"
                    onClick={() => window.open(p.whatsappLink, '_blank', 'noreferrer')}
                    className="rounded-2xl bg-sky-500 text-white px-4 py-3 text-sm font-semibold hover:bg-sky-600"
                  >
                    WhatsApp Order
                  </button>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>

      <ProductDetailModal product={selected} onClose={() => setSelected(null)} />
    </div>
  )
}

