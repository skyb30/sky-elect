import { Outlet } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import FloatingWhatsApp from '../components/FloatingWhatsApp.jsx'
import BackToTop from '../components/BackToTop.jsx'
import LoadingOverlay from '../components/LoadingOverlay.jsx'
import DarkModeToggle from '../components/DarkModeToggle.jsx'

export default function AppLayout({ children }) {
  return (
    <div className="min-h-dvh bg-[var(--bg)] text-[var(--text)]">
      <LoadingOverlay />
      <Header />

      <main className="flex-1">
        {children ? children : <Outlet />}
      </main>

      <Footer />
      <FloatingWhatsApp />
      <BackToTop />

      <div className="fixed bottom-5 right-5 z-50">
        <DarkModeToggle />
      </div>
    </div>
  )
}

