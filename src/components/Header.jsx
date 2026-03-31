import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router'
import { Phone, Menu, X, Droplets, Zap, Mail, MapPin, Wrench, Star, MessageCircle, CircleCheck, Sparkles, Users } from 'lucide-react'
import { NAV_LINKS, PHONE, PHONE_HREF } from '../data/constants'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => { setMenuOpen(false) }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || !isHome

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${solid
          ? 'bg-white/[0.95] backdrop-blur-xl border-b border-warm-100/60 shadow-[0_1px_20px_rgba(0,0,0,0.04)]'
          : 'bg-transparent border-b border-transparent'}`}
        style={{ height: 72 }}>
        <div className="flex items-center justify-between h-full max-w-7xl mx-auto px-5 lg:px-10">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-brand-700 flex items-center justify-center shadow-[0_2px_8px_rgba(24,55,96,0.3)] group-hover:shadow-[0_4px_16px_rgba(24,55,96,0.4)] transition-shadow">
              <Droplets size={19} className="text-white" strokeWidth={2.5} />
            </div>
            <span className={`font-[Plus_Jakarta_Sans] font-extrabold text-[1.15rem] tracking-tight transition-colors duration-300
              ${solid ? 'text-brand-900' : 'text-white'}`}>
              PLOMBERIE<span className="text-accent-500">31</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map(link => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 text-[0.84rem] font-medium rounded-lg transition-all duration-200
                  ${isActive
                    ? (solid ? 'text-brand-700 bg-brand-50' : 'text-white bg-white/15')
                    : (solid ? 'text-warm-500 hover:text-brand-700 hover:bg-brand-50/60' : 'text-white/70 hover:text-white hover:bg-white/10')}`
                }>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href={PHONE_HREF}
              className="hidden sm:flex items-center gap-2 bg-accent-500 text-white px-6 py-2.5 rounded-full text-[0.82rem] font-bold shadow-[0_4px_16px_rgba(224,107,45,0.35)] hover:shadow-[0_6px_24px_rgba(224,107,45,0.45)] hover:bg-accent-600 active:scale-[0.97] transition-all duration-200">
              <Phone size={15} strokeWidth={2.5} />
              {PHONE}
            </a>
            <a href={PHONE_HREF}
              className="sm:hidden flex items-center gap-1.5 bg-accent-500 text-white px-4 py-2.5 rounded-full text-[0.78rem] font-semibold shadow-[0_2px_12px_rgba(224,107,45,0.3)]">
              <Phone size={14} strokeWidth={2.5} /> Appeler
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-xl transition-colors
                ${solid ? 'hover:bg-warm-50' : 'hover:bg-white/10'}`}>
              {menuOpen
                ? <X size={22} className="text-warm-700" />
                : <Menu size={22} className={solid ? 'text-warm-700' : 'text-white'} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav */}
      <div className={`fixed inset-0 top-[72px] z-40 bg-white/[0.98] backdrop-blur-2xl transition-all duration-300 lg:hidden
        ${menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
        <div className="px-5 pt-4 pb-8 h-full overflow-y-auto">
          <div className="space-y-0.5">
            {[
              { label: 'Accueil', to: '/', icon: <CircleCheck size={19} /> },
              { label: 'Prestations', to: '/prestations', icon: <Wrench size={19} /> },
              { label: 'Urgence 24h', to: '/urgence', icon: <Zap size={19} />, accent: true },
              { label: 'Réalisations', to: '/realisations', icon: <Sparkles size={19} /> },
              { label: 'Avis clients', to: '/avis', icon: <Star size={19} /> },
              { label: 'Contact / Devis', to: '/contact', icon: <Mail size={19} /> },
            ].map(item => (
              <NavLink key={item.to} to={item.to} onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3.5 px-4 py-3.5 rounded-2xl text-[0.92rem] font-medium transition-colors
                  ${item.accent ? 'bg-accent-100/50 text-accent-600' : isActive ? 'bg-brand-50 text-brand-700' : 'text-warm-600 active:bg-warm-50'}`
                }>
                <span className={item.accent ? 'text-accent-500' : 'text-warm-400'}>{item.icon}</span>
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="mt-6 space-y-2.5">
            <a href={PHONE_HREF} className="flex items-center justify-center gap-2 w-full py-4 bg-brand-700 text-white rounded-2xl font-semibold text-[0.92rem]">
              <Phone size={18} /> Appeler maintenant
            </a>
            <Link to="/urgence" onClick={() => setMenuOpen(false)} className="flex items-center justify-center gap-2 w-full py-4 bg-accent-500 text-white rounded-2xl font-semibold text-[0.92rem]">
              <Zap size={18} /> Intervention urgente
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
