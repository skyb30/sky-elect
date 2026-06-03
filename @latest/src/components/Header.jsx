import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Search, X } from 'lucide-react'
import Button from './Button.jsx'
import image from '../assets/skyicon.jpg'

function Logo() {
  return (
    <Link to="/" className="inline-flex items-center gap-2">
      {/* <div className="h-10 w-10 rounded-2xl bg-[linear-gradient(135deg,rgba(37,99,235,1),rgba(249,115,22,1))] shadow-premium" /> */}

      <img src={image} alt="" className='w-12 h-10 rounded-xl ' />
      <div className="leading-none">
        <div className="text-lg font-black tracking-tight">
          SKY<span className="text-sky-500">-</span>ELECT
     </div>
        <div className="text-[11px] text-[var(--text)] text-sky-500">Electrical • Solar • Installation</div>
      </div>
    </Link>
  )
}

export default function Header() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')

  const items = useMemo(
    () => [
      { to: '/', label: 'Home' },
      { to: '/about', label: 'About' },
      { to: '/products', label: 'Products' },
      { to: '/services', label: 'Services' },
      { to: '/projects', label: 'Projects' },
      { to: '/contact', label: 'Contact' },
    ],
    [],
  )

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onSearch = (e) => {
    e.preventDefault()
    setSearchOpen(false)
    setOpen(false)
    navigate('/products?search=' + encodeURIComponent(query))
  }

  return (
    <header
      className={
        'sticky top-0 z-40 w-full transition ' +
        (scrolled
          ? 'bg-[rgba(22,23,29,0.65)] backdrop-blur-[18px] border-b border-white/10'
          : 'bg-transparent')
      }
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Logo />

        <nav className="hidden items-center gap-6 md:flex">
          {items.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              className={({ isActive }) =>
                'text-sm font-semibold transition hover:text-sky-400 ' +
                (isActive ? 'text-sky-400' : 'text-[var(--text)]')
              }
            >
              {it.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="rounded-2xl border border-white/10 bg-white/5 p-3 text-[var(--text-h)] hover:border-sky-500/60"
            aria-label="Search"
          >
            <Search size={18} />
          </button>
          <Button
            variant="orange"
            onClick={() => navigate('/contact')}
            className="px-5"
          >
            Request Installation
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="rounded-2xl border border-white/10 bg-white/5 p-3 text-[var(--text-h)]"
            aria-label="Search"
          >
            <Search size={18} />
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-2xl border border-white/10 bg-white/5 p-3 text-[var(--text-h)]"
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-white/10"
          >
            <div className="mx-auto max-w-6xl px-4 py-4">
              <div className="grid gap-3">
                {items.map((it) => (
                  <NavLink
                    key={it.to}
                    to={it.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      'rounded-2xl border px-4 py-3 text-sm font-semibold transition ' +
                      (isActive
                        ? 'border-sky-500/60 bg-sky-500/10 text-sky-400'
                        : 'border-white/10 bg-white/5 text-[var(--text)]')
                    }
                  >
                    {it.label}
                  </NavLink>
                ))}
              </div>
              <div className="mt-4">
                <Button variant="orange" className="w-full" onClick={() => navigate('/contact')}>
                  Request Installation
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-[4px]"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="mx-auto mt-20 max-w-xl px-4"
            >
              <form onSubmit={onSearch} className="rounded-3xl border border-white/10 bg-[var(--bg)] p-4 shadow-premium">
                <div className="flex items-center gap-3">
                  <Search size={18} className="text-sky-500" />
                  <input
                    autoFocus
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full bg-transparent outline-none text-sm md:text-base"
                    placeholder="Search products (wires, solar panels, inverters...)"
                  />
                  <button
                    type="button"
                    onClick={() => setSearchOpen(false)}
                    className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm"
                  >
                    Close
                  </button>
                </div>
                <div className="mt-3 text-xs text-[var(--text)]">
                  Tip: try “cable”, “panel”, “inverter”, “breaker”.
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

