import { useEffect } from 'react'
import { motion } from 'framer-motion'
import useLocalStorage from '../hooks/useLocalStorage.js'

export default function DarkModeToggle() {
  const [dark, setDark] = useLocalStorage(
    'sky-elect-dark-mode',
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  )

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

