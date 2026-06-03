import { motion } from 'framer-motion'
import Button from '../components/Button.jsx'
import GlassCard from '../components/GlassCard.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import StatsCounter from '../components/StatsCounter.jsx'
import TestimonialCarousel from '../components/TestimonialCarousel.jsx'
import LatestProjects from '../components/LatestProjects.jsx'
import TrustedBrands from '../components/TrustedBrands.jsx'

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-500/25 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="grid gap-10 md:grid-cols-2 md:items-center"
          >
            <div className="text-left">
              <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-[var(--text-h)]">
                Premium Electrical & Solar Solutions
                <span className="h-2 w-2 rounded-full bg-sky-500" />
              </div>

              <h1 className="mt-5 text-4xl md:text-6xl font-black leading-tight">
                Powering Homes, Businesses & Industries
              </h1>
              <p className="mt-5 text-base md:text-lg text-[var(--text)] max-w-xl">
                Your Trusted Partner for Electrical and Solar Solutions — from high-quality products to professional installation, maintenance and technical support.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  className="w-full sm:w-auto"
                  onClick={() => (window.location.href = '/products')}
                >
                  Shop Products
                </Button>
                <Button
                  variant="secondary"
                  className="w-full sm:w-auto"
                  onClick={() => (window.location.href = '/services')}
                >
                  Request Installation
                </Button>
                <Button
                  variant="ghost"
                  className="w-full sm:w-auto"
                  onClick={() => (window.location.href = '/contact')}
                >
                  Contact Us
                </Button>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
                {["Quality Certified Products", "Fast Responsive Support", "Solar Experts", "Nationwide Services"].map((t) => (
                  <div key={t} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-orange-500 inline-block mr-2" />
                    <span className="text-[var(--text-h)] font-semibold">{t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <GlassCard className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-sky-400">Instant Quote</div>
                    <div className="mt-2 text-2xl font-black">Get Premium Support</div>
                  </div>
                  <div className="rounded-2xl bg-orange-500/15 border border-orange-500/30 px-3 py-2">
                    <div className="text-xs font-semibold text-orange-400">24/7</div>
                    <div className="text-xs text-[var(--text)]">WhatsApp Available</div>
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  {[
                    { k: 'Wires & Cables', v: 'Premium brands & specs' },
                    { k: 'Solar Systems', v: 'Panels, inverters & batteries' },
                    { k: 'Installation', v: 'Residential & industrial' },
                  ].map((row) => (
                    <div key={row.k} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <div className="font-semibold text-[var(--text-h)]">{row.k}</div>
                      <div className="text-xs text-[var(--text)] mt-1">{row.v}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button variant="orange" className="w-full" onClick={() => (window.location.href = '/contact')}>
                    Request a Quote
                  </Button>
                  <Button variant="outline" className="w-full" onClick={() => (window.location.href = '/projects')}>
                    View Projects
                  </Button>
                </div>
              </GlassCard>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-10 md:grid-cols-2 items-start mt-14">
          <div>
            <SectionHeading
              title="Featured Products"
              subtitle="Premium electrical & solar components — sourced for quality, reliability and performance."
            />
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                { t: 'Electrical Wires & Cables', d: 'Trusted conductors and durable installations' },
                { t: 'Armoured Cables', d: 'Superior protection for demanding environments' },
                { t: 'Circuit Breakers', d: 'Safety-first protection for your system' },
                { t: 'Solar Panels & Inverters', d: 'Clean energy with dependable conversion' },
              ].map((p) => (
                <GlassCard key={p.t} className="p-5">
                  <div className="text-sm font-semibold text-[var(--text-h)]">{p.t}</div>
                  <div className="mt-2 text-sm text-[var(--text)]">{p.d}</div>
                  <div className="mt-4">
                    <Button variant="ghost" className="px-4 py-2" onClick={() => (window.location.href = '/products')}>
                      Explore
                    </Button>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading
              title="Why Choose Sky-Elect"
              subtitle="Luxury-level service, technical excellence and premium product selection."
            />
            <div className="mt-5 grid gap-4">
              {[
                { t: 'Quality & Authenticity', d: 'We supply reliable brands and verified specifications.' },
                { t: 'Professional Installation', d: 'Residential, commercial and industrial systems.' },
                { t: 'Maintenance & Support', d: 'Technical assistance and long-term reliability.' },
                { t: 'Conversion-First Customer Experience', d: 'Fast quotes, clear recommendations and responsive support.' },
              ].map((x) => (
                <div key={x.t} className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-[18px] p-5">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-[var(--text-h)]">{x.t}</div>
                    <div className="h-9 w-9 rounded-2xl bg-sky-500/15 border border-sky-500/25 flex items-center justify-center text-sky-400 font-bold">
                      ✓
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-[var(--text)]">{x.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <StatsCounter />
        </div>

        <div className="mt-16">
          <SectionHeading
            title="Services Overview"
            subtitle="From electrical installation to solar system maintenance — we deliver premium outcomes."
          />
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              { t: 'Residential Electrical Installation', d: 'Safe wiring, sockets, breakers and lighting upgrades.' },
              { t: 'Solar Installation Services', d: 'Panels, inverters, batteries and optimized performance.' },
              { t: 'Electrical Maintenance & Technical Support', d: 'Troubleshooting, upgrades and long-term reliability.' },
            ].map((s) => (
              <GlassCard key={s.t} className="p-6">
                <div className="text-sm font-semibold text-sky-400">Service</div>
                <div className="mt-2 text-lg font-bold text-[var(--text-h)]">{s.t}</div>
                <div className="mt-3 text-sm text-[var(--text)]">{s.d}</div>
                <div className="mt-5">
                  <Button variant="outline" className="w-full" onClick={() => (window.location.href = '/services')}>
                    Book Service
                  </Button>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <TestimonialCarousel />
        </div>

        <div className="mt-16">
          <LatestProjects />
        </div>

        <div className="mt-16">
          <TrustedBrands />
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-7 md:p-10 backdrop-blur-[18px]">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="text-left">
              <div className="text-sm font-semibold text-sky-400">Newsletter Subscription</div>
              <div className="mt-2 text-2xl md:text-3xl font-black">Get Premium Updates</div>
              <p className="mt-3 text-sm md:text-base text-[var(--text)] max-w-xl">
                New product arrivals, installation tips and solar energy insights — delivered monthly.
              </p>
            </div>
            <div className="w-full md:max-w-md">
              <div className="flex gap-2">
                <input
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-sky-500"
                  placeholder="Email address"
                />
                <button className="rounded-2xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-600">
                  Subscribe
                </button>
              </div>
              <div className="mt-2 text-xs text-[var(--text)]">No spam. Unsubscribe anytime.</div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="grid gap-4 md:grid-cols-2 items-center">
            <GlassCard className="p-6 md:p-8">
              <SectionHeading
                title="Ready for Electrical or Solar Installation?"
                subtitle="Request a quote today — we’ll respond quickly with clear recommendations."
              />
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <Button variant="orange" className="w-full" onClick={() => (window.location.href = '/contact')}>
                  Request Installation
                </Button>
                <Button variant="secondary" className="w-full" onClick={() => (window.location.href = '/products')}>
                  Shop Products
                </Button>
              </div>
            </GlassCard>

            <GlassCard className="p-6 md:p-8">
              <div className="text-left">
                <div className="text-sm font-semibold text-sky-400">Premium Support</div>
                <div className="mt-2 text-2xl font-black">Talk to Experts</div>
                <p className="mt-3 text-sm text-[var(--text)]">
                  Need help choosing cables, breakers, solar components or installation services? Chat with us on WhatsApp.
                </p>
                <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-left">
                  <div className="text-xs text-[var(--text)]">Phone</div>
                  <div className="font-bold text-[var(--text-h)]">+234 8101335958</div>
                </div>
                <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-left">
                  <div className="text-xs text-[var(--text)]">Email</div>
                  <div className="font-bold text-[var(--text-h)]">bestay30@gmail.com</div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  )
}

