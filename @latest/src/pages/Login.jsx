import { useState } from 'react'
import GlassCard from '../components/GlassCard.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [show, setShow] = useState(false)

  const [error, setError] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setError('')
    if (!form.email.trim()) return setError('Email is required.')
    if (form.password.length < 6) return setError('Password must be at least 6 characters.')
    // mock submit
    setError('')
    alert('Login submitted (demo).')
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeading
        title="Login"
        subtitle="Modern, secure access with responsive validation and a premium interface."
      />

      <div className="mt-10 flex justify-center">
        <div className="w-full max-w-md">
          <GlassCard className="p-7 md:p-9">
            <form onSubmit={onSubmit} className="grid gap-4">
              <label className="grid gap-2 text-left">
                <span className="text-sm font-semibold text-[var(--text-h)]">Email</span>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-sky-500"
                  placeholder="you@example.com"
                />
              </label>

              <label className="grid gap-2 text-left">
                <span className="text-sm font-semibold text-[var(--text-h)]">Password</span>
                <div className="relative">
                  <input
                    type={show ? 'text' : 'password'}
                    required
                    value={form.password}
                    onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-sky-500"
                    placeholder="••••••••"
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

              <button className="rounded-2xl bg-sky-500 px-5 py-3 font-semibold text-white hover:bg-sky-600" type="submit">
                Login
              </button>
              <div className="text-xs text-[var(--text)]">
                Don’t have an account?{' '}
                <a href="/register" className="text-sky-400 font-semibold hover:underline">
                  Register
                </a>
              </div>
            </form>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}

