import { useState } from 'react'
import SectionHeading from '../components/SectionHeading.jsx'
import GlassCard from '../components/GlassCard.jsx'
import Button from '../components/Button.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeading
        title="Contact"
        subtitle="Talk to a premium electrical and solar specialist. Fill the form or contact us directly via WhatsApp."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <GlassCard className="p-6 md:p-8 text-left">
          <form onSubmit={onSubmit} className="grid gap-4">
            <div className="grid gap-2 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-[var(--text-h)]">Full Name</span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-sky-500"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-[var(--text-h)]">Phone</span>
                <input
                  required
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-sky-500"
                  placeholder="WhatsApp number"
                />
              </label>
            </div>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-[var(--text-h)]">Email</span>
              <input
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-sky-500"
                placeholder="you@example.com"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-[var(--text-h)]">Message</span>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-sky-500"
                placeholder="Tell us what you need (wires, solar system, installation, maintenance...)"
              />
            </label>

            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <Button variant="orange" type="submit" className="w-full">
                {sent ? 'Request Sent ✓' : 'Send Request'}
              </Button>
              <Button variant="outline" type="button" className="w-full" onClick={() => (window.location.href = '/products')}>
                Browse Products
              </Button>
            </div>

            <div className="text-xs text-[var(--text)]">
              We respond fast. For urgent requests, use the WhatsApp floating button.
            </div>
          </form>
        </GlassCard>

        <div className="grid gap-4">
          <GlassCard className="p-6 md:p-8 text-left">
            <div className="text-sm font-semibold text-sky-400">Direct Contact</div>
            <div className="mt-3 space-y-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs text-[var(--text)]">Phone</div>
                <div className="mt-1 font-bold text-[var(--text-h)]">+234 000 000 0000</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs text-[var(--text)]">Email</div>
                <div className="mt-1 font-bold text-[var(--text-h)]">info@sky-elect.com</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs text-[var(--text)]">Business Hours</div>
                <div className="mt-1 font-bold text-[var(--text-h)]">Mon-Sat: 9:00am - 6:00pm</div>
              </div>
            </div>

            <div className="mt-5">
              <Button variant="secondary" className="w-full" onClick={() => (window.location.href = '/services')}>
                Service Booking
              </Button>
            </div>
          </GlassCard>

          <GlassCard className="p-6 md:p-8 text-left">
            <div className="text-sm font-semibold text-sky-400">Google Map</div>
            <div className="mt-3 h-56 w-full rounded-3xl border border-white/10 bg-white/5 flex items-center justify-center text-sm text-[var(--text)]">
              Map placeholder
            </div>
            <div className="mt-3 text-xs text-[var(--text)]">
              Replace with your real Google Maps embed URL.
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}

