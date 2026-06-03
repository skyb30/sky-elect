import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

function useCountUp(target, durationMs = 1100) {
  const controls = useAnimation()
  const [value, setValue] = useState(0)

  useEffect(() => {
    let raf
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min(1, (now - start) / durationMs)
      const v = Math.round(target * (1 - Math.pow(1 - t, 3)))
      setValue(v)
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, durationMs])

  useEffect(() => {
    controls.start({ opacity: 1 })
  }, [controls])

  return value
}

function StatItem({ label, value }) {
  const v = useCountUp(value)
  return (
    <div className="text-left">
      <motion.div className="text-4xl md:text-5xl font-black text-sky-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {v.toLocaleString()}
      </motion.div>
      <div className="mt-2 text-sm md:text-base text-[var(--text)] font-semibold">{label}</div>
    </div>
  )
}

export default function StatsCounter() {
  const stats = [
    { label: 'Products Supplied', value: 1200 },
    { label: 'Solar Systems Installed', value: 240 },
    { label: 'Projects Completed', value: 310 },
    { label: 'Years of Experience', value: 9 },
  ]

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-[18px] p-7 md:p-10">
      <div className="grid gap-6 md:grid-cols-4">
        {stats.map((s) => (
          <StatItem key={s.label} label={s.label} value={s.value} />
        ))}
      </div>
      <div className="mt-6 text-sm text-[var(--text)]">
        Premium electrical and solar delivery — quality components, professional installation and reliable support.
      </div>
    </div>
  )
}

