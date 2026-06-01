import { motion } from 'framer-motion'
import { forwardRef } from 'react'

const Button = forwardRef(function Button(
  { variant = 'primary', className = '', ...props },
  ref,
) {
  const variants = {
    primary:
      'bg-sky-500 text-white hover:bg-sky-600 shadow-premium border border-white/10',
    secondary:
      'bg-white/5 text-[var(--text-h)] hover:bg-white/10 border border-white/15',
    outline:
      'bg-transparent text-[var(--text-h)] hover:bg-white/5 border border-white/20',
    ghost:
      'bg-transparent text-[var(--text-h)] hover:bg-white/5 border border-transparent',
    orange:
      'bg-orange-500 text-white hover:bg-orange-600 shadow-premium border border-white/10',
  }

  return (
    <motion.button
      ref={ref}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={
        'inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm md:text-base font-semibold transition ' +
        (variants[variant] ?? variants.primary) +
        ' ' +
        className
      }
      {...props}
    />
  )
})

export default Button

