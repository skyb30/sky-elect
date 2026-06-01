import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.button
      initial={false}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 12, pointerEvents: visible ? 'auto' : 'none' }}
      transition={{ duration: 0.2 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-24 right-5 z-50 rounded-2xl bg-white/5 border border-white/15 p-3 backdrop-blur-[18px]"
      aria-label="Back to top"
      type="button"
    >
      <ChevronUp size={18} />
    </motion.button>
  )
}

