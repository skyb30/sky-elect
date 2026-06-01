import GlassCard from './GlassCard.jsx'

export default function TrustedBrands() {
  const brands = ['Siemens', 'Schneider', 'LG Solar', 'Growatt', 'Huawei', 'Tata Power']

  return (
    <div className="text-left">
      <div className="text-sm font-semibold text-sky-400">Trusted Brands</div>
      <div className="mt-2 text-3xl md:text-4xl font-black">Premium Quality from Leaders</div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {brands.map((b) => (
          <GlassCard key={b} className="p-6 flex items-center justify-center">
            <div className="text-lg font-black text-[var(--text-h)]">{b}</div>
          </GlassCard>
        ))}
      </div>
    </div>
  )
}

