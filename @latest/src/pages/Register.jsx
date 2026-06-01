import { useState } from 'react'
import GlassCard from '../components/GlassCard.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Button from '../components/Button.jsx'

export default function Register() {
  const [form, setForm] = useState({ fullName: '', email: '', phone: '', password: '' })
  const [show, setShow] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setError('')
    if (form.fullName.trim().length < 3) return setError('Please enter your full name.')
    if (!form.email.includes('@')) return setError('Please enter a valid email.')
    if (form.phone.trim().length < 8) return setError('Please enter a valid phone number.')
    if (form.password.length < 6) return setError('Password must be at least 6 characters.')
    alert('Registration submitted (demo).')
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeading
        title="Registration"
        subtitle="A professional, validated sign-up experience with modern glassmorphism styling."
      />

      <div className="mt-10 flex justify-center">
        <div className="w-full max-w-md">
          <GlassCard className="p-7 md:p-9">
            <form onSubmit={onSubmit} className="grid gap-4 text-left">
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-[var(--text-h)]">Full Name</span>
                <input
                  value={form.fullName}
                  onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-sky-500"
                  placeholder="Your name"
                  required
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-[var(--text-h)]">Email</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-sky-500"
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-[var(--text-h)]">Phone</span>
                <input
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-sky-500"
                  placeholder="WhatsApp number"
                  required
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-[var(--text-h)]">Password</span>
                <div className="relative">
                  <input
                    type={show ? 'text' : 'password'}
                    value={form.password}
                    onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-sky-500"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShow((v) => !v)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-2xl bg-white/5 border border-white/10 px-3 py-2 text-xs font-semibold"
                  >
                    {show ? 'Hide' : 'Show'}
                  </button>
                </div>
              </label>

              {error ? (
                <div className="rounded-2xl border border-orange-500/30 bg-orange-500/10 px-4 py-3 text-sm font-semibold text-orange-400">
                  {error}
                </div>
              ) : null}

              <Button variant="orange" type="submit" className="w-full">
                Create Account
              </Button>

              <div className="text-xs text-[var(--text)]">
                Already have an account?{' '}
                <a href="/login" className="text-sky-400 font-semibold hover:underline">
                  Login
                </a>
              </div>
            </form>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}

