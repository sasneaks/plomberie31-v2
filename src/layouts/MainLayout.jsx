import { Outlet, useLocation } from 'react-router'
import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MobileCTA from '../components/MobileCTA'

export default function MainLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="relative min-h-screen w-full bg-white overflow-x-hidden grain">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  )
}
