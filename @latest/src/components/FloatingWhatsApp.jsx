import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp() {
  const [number] = useState('+2348101335958')

  useEffect(() => {
    // no-op (reserved for future)
  }, [])

  return (
    <motion.a
      href={`https://wa.me/${number.replace(/\D/g, '')}?text=${encodeURIComponent(
        'Hello SKY-ELECT! I need help with electrical/solar installation.'
      )}`}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="fixed bottom-7 left-5 z-50 rounded-2xl bg-emerald-500 text-white border border-white/10 px-4 py-3 font-semibold shadow-premium flex items-center gap-2"
      aria-label="Chat with WhatsApp"
    >
      <MessageCircle size={18} />
      <span className="hidden sm:inline">WhatsApp Us</span>
    </motion.a>
  )
}

