import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    setDark(prefersDark)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (dark) root.classList.add('dark')
    else root.classList.remove('dark')
  }, [dark])

  return (
    <motion.button
      type="button"
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => setDark((v) => !v)}
      className="rounded-2xl bg-white/5 border border-white/15 px-3 py-2 text-xs font-semibold backdrop-blur-[18px]"
    >
      {dark ? 'Dark' : 'Light'}
    </motion.button>
  )
}

