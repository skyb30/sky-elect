import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white/0">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="text-left">
            <div className="text-xl font-bold tracking-tight">
              SKY<span className="text-sky-500">-</span>ELECT
            </div>
            <p className="mt-3 text-sm text-[var(--text)]">
              Electrical wires, solar power systems, installation, maintenance and technical support.
            </p>
            <div className="mt-4 flex items-center gap-3 text-sm text-[var(--text)]">
              <Phone size={16} />
              <a href="tel:+2348101335958" className="hover:text-sky-400">+234 8101335958</a>
            </div>
            <div className="mt-2 flex items-center gap-3 text-sm text-[var(--text)]">
              <Mail size={16} />
              <a href="mailto:info@sky-elect.com" className="hover:text-sky-400">bestay30@gmail.com</a>
            </div>
            <div className="mt-2 flex items-center gap-3 text-sm text-[var(--text)]">
              <MapPin size={16} />
              <span>Serving Homes & Industries</span>
            </div>
          </div>

          <div className="text-left">
            <div className="font-semibold">Quick Links</div>
            <ul className="mt-3 space-y-2 text-sm text-[var(--text)]">
              <li><Link to="/about" className="hover:text-sky-400">About</Link></li>
              <li><Link to="/products" className="hover:text-sky-400">Products</Link></li>
              <li><Link to="/services" className="hover:text-sky-400">Services</Link></li>
              <li><Link to="/projects" className="hover:text-sky-400">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-sky-400">Contact</Link></li>
            </ul>
          </div>

          <div className="text-left">
            <div className="font-semibold">Product Categories</div>
            <ul className="mt-3 space-y-2 text-sm text-[var(--text)]">
              <li className="hover:text-sky-400">Electrical Wires & Cables</li>
              <li className="hover:text-sky-400">Armoured Cables</li>
              <li className="hover:text-sky-400">Solar Panels</li>
              <li className="hover:text-sky-400">Inverters & Batteries</li>
              <li className="hover:text-sky-400">Circuit Breakers & Sockets</li>
            </ul>
          </div>

          <div className="text-left">
            <div className="font-semibold">Newsletter</div>
            <p className="mt-3 text-sm text-[var(--text)]">Get premium updates, installation tips and new stock alerts.</p>
            <div className="mt-4 flex gap-2">
              <input
                className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-sky-500"
                placeholder="Email address"
              />
              <button className="rounded-2xl bg-sky-500 px-4 py-3 text-sm font-semibold text-white hover:bg-sky-600">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-[var(--text)]">© {new Date().getFullYear()} SKY-ELECT. All rights reserved.</div>
          <div className="text-xs text-[var(--text)]">Premium electrical & solar solutions.</div>
        </div>
      </div>
    </footer>
  )
}

