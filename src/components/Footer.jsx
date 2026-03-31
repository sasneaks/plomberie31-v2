import { Link } from 'react-router'
import { Droplets, Phone, Mail, Clock, MapPin } from 'lucide-react'
import { PHONE, PHONE_HREF, EMAIL, NAV_LINKS, ZONES } from '../data/constants'

export default function Footer() {
  return (
    <footer className="bg-brand-900 pt-16 lg:pt-20 pb-32 lg:pb-14">
      <div className="max-w-6xl mx-auto px-5 lg:px-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 mb-12">
          <div className="lg:col-span-5 mb-10 lg:mb-0">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-11 h-11 rounded-xl bg-white/[0.06] flex items-center justify-center">
                <Droplets size={21} className="text-white" />
              </div>
              <span className="font-[Plus_Jakarta_Sans] font-extrabold text-[1.2rem] text-white">
                PLOMBERIE<span className="text-accent-400">31</span>
              </span>
            </Link>
            <p className="text-[0.86rem] text-white/35 leading-relaxed max-w-sm mb-7">
              Votre plombier de confiance à Toulouse et alentours. Dépannage, installation et rénovation — intervention rapide et travail soigné depuis plus de 12 ans.
            </p>
            <div className="space-y-3.5">
              <a href={PHONE_HREF} className="flex items-center gap-3 text-[0.86rem] text-white/55 hover:text-white transition-colors">
                <Phone size={16} className="text-brand-400" /> {PHONE}
              </a>
              <div className="flex items-center gap-3 text-[0.86rem] text-white/55">
                <Mail size={16} className="text-brand-400" /> {EMAIL}
              </div>
              <div className="flex items-center gap-3 text-[0.86rem] text-white/55">
                <Clock size={16} className="text-brand-400" /> Lun-Sam 7h-20h · Urgences 7j/7
              </div>
              <div className="flex items-center gap-3 text-[0.86rem] text-white/55">
                <MapPin size={16} className="text-brand-400" /> Toulouse et agglomération (31)
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 mb-8 lg:mb-0">
            <h4 className="text-[0.8rem] font-bold text-white/80 uppercase tracking-[0.1em] mb-5">Navigation</h4>
            <div className="space-y-3">
              {NAV_LINKS.map(link => (
                <Link key={link.to} to={link.to} className="block text-[0.84rem] text-white/35 hover:text-white/70 transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-[0.8rem] font-bold text-white/80 uppercase tracking-[0.1em] mb-5">Zone d'intervention</h4>
            <div className="flex flex-wrap gap-2">
              {ZONES.slice(0, 9).map(z => (
                <span key={z.name} className="text-[0.76rem] text-white/30 bg-white/[0.04] rounded-lg px-3 py-1.5">{z.name}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-[0.75rem] text-white/20">© 2026 Plomberie31 — Tous droits réservés</p>
          <p className="text-[0.75rem] text-white/20">Plombier Toulouse · Dépannage · Rénovation · Devis gratuit</p>
        </div>
      </div>
    </footer>
  )
}
