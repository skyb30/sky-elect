import { AnimatePresence, motion } from 'framer-motion'
import Button from './Button.jsx'
import WhatsAppOrderButton from './WhatsAppOrderButton.jsx'

export default function ProductDetailModal({ product, onClose }) {
  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] bg-black/45 backdrop-blur-[6px]"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="mx-auto mt-16 w-[min(900px,100% - 24px)] rounded-3xl border border-white/10 bg-[var(--bg)] p-6 md:p-8 shadow-premium"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-sky-400">{product.category}</div>
                <h3 className="mt-2 text-2xl font-black">{product.name}</h3>
                <p className="mt-3 text-sm text-[var(--text)]">{product.longDescription}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold hover:border-sky-500/40"
              >
                Close
              </button>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm font-semibold text-[var(--text-h)]">Key Specifications</div>
                <div className="mt-4 grid gap-3">
                  {product.specs.map((s) => (
                    <div key={s.k} className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <div className="text-sm text-[var(--text)]">{s.k}</div>
                      <div className="text-sm font-semibold text-[var(--text-h)]">{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm font-semibold text-[var(--text-h)]">Pricing & Order</div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="text-sm text-[var(--text)]">Starting from</div>
                  <div className="text-xl font-black text-sky-400">${product.fromPrice}</div>
                </div>
                <div className="mt-5 flex flex-col gap-3">
                  <WhatsAppOrderButton product={product} />
                  <Button variant="outline" onClick={() => (window.location.href = '/contact')}>
                    Request Installation
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

