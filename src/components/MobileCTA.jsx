import { Phone } from 'lucide-react'
import { Link } from 'react-router'
import { PHONE_HREF } from '../data/constants'

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/90 backdrop-blur-xl border-t border-warm-200/50"
      style={{ paddingBottom: 'max(8px, env(safe-area-inset-bottom))' }}>
      <div className="flex gap-2.5 max-w-lg mx-auto px-4 py-2.5">
        <a href={PHONE_HREF}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-brand-700 text-white rounded-full font-semibold text-[0.84rem] shadow-[0_2px_12px_rgba(24,55,96,0.3)] active:scale-[0.97] transition-transform">
          <Phone size={16} strokeWidth={2.5} /> Appeler
        </a>
        <Link to="/contact"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-accent-500 text-white rounded-full font-semibold text-[0.84rem] shadow-[0_2px_12px_rgba(224,107,45,0.3)] active:scale-[0.97] transition-transform">
          Devis gratuit
        </Link>
      </div>
    </div>
  )
}
