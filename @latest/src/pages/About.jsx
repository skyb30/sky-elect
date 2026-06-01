import SectionHeading from '../components/SectionHeading.jsx'
import GlassCard from '../components/GlassCard.jsx'

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeading
        title="About SKY-ELECT"
        subtitle="Premium electrical and solar solutions delivered with technical excellence and customer-first service."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <GlassCard className="p-7 md:p-9">
          <div className="text-sm font-semibold text-sky-400">Our Story</div>
          <div className="mt-2 text-2xl font-black">Built to Power Reliable Systems</div>
          <p className="mt-4 text-sm text-[var(--text)]">
            SKY-ELECT was created to solve real challenges for homeowners, businesses and industries — from sourcing quality
            electrical components to designing and installing high-performance solar systems.
          </p>
          <p className="mt-3 text-sm text-[var(--text)]">
            We combine trusted products, experienced technicians and fast customer support to deliver long-term value.
          </p>
        </GlassCard>

        <GlassCard className="p-7 md:p-9">
          <div className="grid gap-4">
            {[ 
              { t: 'Mission', d: 'Deliver premium electrical and solar solutions with safety, quality and reliability at the core.' },
              { t: 'Vision', d: 'Become the most trusted provider of clean energy and electrical installation services.' },
              { t: 'Core Values', d: 'Integrity, Technical Excellence, Customer Satisfaction, Continuous Improvement.' },
            ].map((x) => (
              <div key={x.t} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="font-bold text-[var(--text-h)]">{x.t}</div>
                <div className="mt-2 text-sm text-[var(--text)]">{x.d}</div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {[ 
          { t: 'Verified Components', d: 'Quality-first sourcing for every project.' },
          { t: 'Skilled Technicians', d: 'Installation done right the first time.' },
          { t: 'Support & Maintenance', d: 'Troubleshooting and upgrades when you need them.' },
        ].map((c) => (
          <GlassCard key={c.t} className="p-6">
            <div className="text-sm font-semibold text-sky-400">Achievement</div>
            <div className="mt-2 text-lg font-bold text-[var(--text-h)]">{c.t}</div>
            <div className="mt-3 text-sm text-[var(--text)]">{c.d}</div>
          </GlassCard>
        ))}
      </div>

      <div className="mt-12">
        <SectionHeading title="Team" subtitle="A dedicated group of electrical and solar specialists committed to premium outcomes." />
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { n: 'Electrical Lead', r: 'Installation • Safety • Compliance' },
            { n: 'Solar Engineer', r: 'Panels • Inverters • System Design' },
            { n: 'Site Supervisor', r: 'Scheduling • Quality Control' },
            { n: 'Technical Support', r: 'Maintenance • Troubleshooting' },
          ].map((m) => (
            <GlassCard key={m.n} className="p-5 text-left">
              <div className="h-16 w-16 rounded-3xl bg-hero-gradient border border-white/10" />
              <div className="mt-3 font-bold text-[var(--text-h)]">{m.n}</div>
              <div className="mt-2 text-sm text-[var(--text)]">{m.r}</div>
            </GlassCard>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <SectionHeading title="Why Customers Trust Us" subtitle="We deliver clarity, quality and performance — from first conversation to long-term maintenance." />
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {[ 
            'Transparent recommendations and fast quotations',
            'Premium customer experience with responsive communication',
            'Safety-focused electrical installation practices',
            'Optimized solar setups for efficient energy production',
          ].map((t) => (
            <div key={t} className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-[18px] p-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-3xl bg-sky-500/15 border border-sky-500/25 flex items-center justify-center text-sky-400 font-bold">✓</div>
                <div className="font-semibold text-[var(--text-h)]">{t}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

