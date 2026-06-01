import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LoadingOverlay() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 650)
    return () => clearTimeout(t)
  }, [])

  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 1 }}
      animate={{ opacity: loading ? 1 : 0, pointerEvents: loading ? 'auto' : 'none' }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] bg-[var(--bg)] flex items-center justify-center"
    >
      <div className="h-12 w-12 rounded-full border-2 border-sky-500/40 border-t-sky-500 animate-spin" />
    </motion.div>
  )
}

