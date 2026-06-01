import { motion } from 'framer-motion'

export default function GlassCard({ className = '', children, as: Comp = 'div' }) {
  return (
    <motion.div
      as={Comp}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={
        'rounded-3xl border border-white/10 bg-white/5 backdrop-blur-[18px] shadow-soft ' +
        className
      }
    >
      {children}
    </motion.div>
  )
}

