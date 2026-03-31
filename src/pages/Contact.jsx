import { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Phone, Mail, Clock, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { IMG, PHONE, PHONE_HREF, EMAIL } from '../data/constants'
import SectionHeader from '../components/SectionHeader'

gsap.registerPlugin(useGSAP)

export default function Contact() {
  const pageRef = useRef(null)
  const [submitted, setSubmitted] = useState(false)

  useGSAP(() => {
    gsap.from('.page-hero-content > *', { y: 40, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out' })
    gsap.from('.contact-form', { y: 40, opacity: 0, duration: 0.8, delay: 0.3, ease: 'power3.out' })
    gsap.from('.contact-info > *', { x: -30, opacity: 0, duration: 0.6, stagger: 0.1, delay: 0.4, ease: 'power2.out' })
  }, { scope: pageRef })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-brand-900 to-brand-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={IMG.contact} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/90 to-brand-800" />
        <div className="relative max-w-6xl mx-auto px-5 lg:px-10 page-hero-content">
          <SectionHeader light label="Contact" title="Parlons de votre projet" subtitle="Devis gratuit et sans engagement. Réponse garantie en moins de 30 minutes." />
        </div>
      </section>

      {/* Contact form + info */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="lg:flex lg:gap-12">
            {/* Form */}
            <div className="flex-1 mb-12 lg:mb-0">
              {submitted ? (
                <div className="contact-form bg-brand-50 rounded-[24px] p-10 lg:p-14 text-center border border-brand-100">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={32} className="text-emerald-600" />
                  </div>
                  <h3 className="font-[Plus_Jakarta_Sans] text-[1.3rem] font-extrabold text-brand-900 mb-3">Message envoyé !</h3>
                  <p className="text-[0.9rem] text-warm-500">Nous vous recontactons dans les 30 minutes. Merci pour votre confiance.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form bg-white rounded-[24px] p-7 lg:p-10 border border-warm-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                  <h3 className="font-[Plus_Jakarta_Sans] text-[1.2rem] font-extrabold text-brand-900 mb-6">Demander un devis gratuit</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-[0.78rem] font-semibold text-warm-600 mb-1.5">Nom complet</label>
                      <input type="text" required placeholder="Jean Dupont"
                        className="w-full px-4 py-3.5 bg-warm-50 border border-warm-200/60 rounded-xl text-[0.88rem] text-warm-800 placeholder:text-warm-300 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all" />
                    </div>
                    <div>
                      <label className="block text-[0.78rem] font-semibold text-warm-600 mb-1.5">Téléphone</label>
                      <input type="tel" required placeholder="06 00 00 00 00"
                        className="w-full px-4 py-3.5 bg-warm-50 border border-warm-200/60 rounded-xl text-[0.88rem] text-warm-800 placeholder:text-warm-300 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all" />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-[0.78rem] font-semibold text-warm-600 mb-1.5">Email</label>
                    <input type="email" placeholder="jean@email.com"
                      className="w-full px-4 py-3.5 bg-warm-50 border border-warm-200/60 rounded-xl text-[0.88rem] text-warm-800 placeholder:text-warm-300 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all" />
                  </div>

                  <div className="mb-4">
                    <label className="block text-[0.78rem] font-semibold text-warm-600 mb-1.5">Type d'intervention</label>
                    <select className="w-full px-4 py-3.5 bg-warm-50 border border-warm-200/60 rounded-xl text-[0.88rem] text-warm-800 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all appearance-none">
                      <option value="">Sélectionner...</option>
                      <option>Dépannage / Réparation</option>
                      <option>Débouchage</option>
                      <option>Chauffe-eau</option>
                      <option>Rénovation salle de bain</option>
                      <option>Recherche de fuite</option>
                      <option>Urgence</option>
                      <option>Autre</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-[0.78rem] font-semibold text-warm-600 mb-1.5">Décrivez votre besoin</label>
                    <textarea rows={4} placeholder="Décrivez votre problème ou votre projet..."
                      className="w-full px-4 py-3.5 bg-warm-50 border border-warm-200/60 rounded-xl text-[0.88rem] text-warm-800 placeholder:text-warm-300 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all resize-none" />
                  </div>

                  <button type="submit"
                    className="w-full flex items-center justify-center gap-2.5 py-4 bg-accent-500 text-white rounded-2xl font-bold text-[0.95rem] shadow-[0_6px_24px_rgba(224,107,45,0.4)] hover:shadow-[0_8px_36px_rgba(224,107,45,0.55)] hover:bg-accent-600 active:scale-[0.98] transition-all duration-300">
                    <Send size={18} /> Envoyer ma demande
                  </button>

                  <p className="text-[0.72rem] text-warm-400 text-center mt-4">
                    Réponse garantie en moins de 30 minutes · Devis gratuit
                  </p>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="lg:w-[380px] lg:shrink-0 contact-info">
              <div className="bg-brand-900 rounded-[24px] p-7 lg:p-8 text-white mb-5">
                <h4 className="font-[Plus_Jakarta_Sans] text-[1.05rem] font-extrabold mb-6">Nos coordonnées</h4>
                <div className="space-y-5">
                  <a href={PHONE_HREF} className="flex items-start gap-3.5 group">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-accent-400" />
                    </div>
                    <div>
                      <div className="text-[0.82rem] font-semibold text-white/80 group-hover:text-white transition-colors">{PHONE}</div>
                      <div className="text-[0.72rem] text-white/35">Appel gratuit</div>
                    </div>
                  </a>
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-accent-400" />
                    </div>
                    <div>
                      <div className="text-[0.82rem] font-semibold text-white/80">{EMAIL}</div>
                      <div className="text-[0.72rem] text-white/35">Réponse sous 30 min</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center shrink-0">
                      <Clock size={18} className="text-accent-400" />
                    </div>
                    <div>
                      <div className="text-[0.82rem] font-semibold text-white/80">Lun-Sam 7h-20h</div>
                      <div className="text-[0.72rem] text-white/35">Urgences 7j/7 24h/24</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-accent-400" />
                    </div>
                    <div>
                      <div className="text-[0.82rem] font-semibold text-white/80">Toulouse & agglomération</div>
                      <div className="text-[0.72rem] text-white/35">Rayon de 30 km</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Urgence card */}
              <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-[24px] p-7 text-white">
                <h4 className="font-[Plus_Jakarta_Sans] text-[1.05rem] font-extrabold mb-3">Urgence ?</h4>
                <p className="text-[0.85rem] text-white/60 mb-5">Ne perdez pas de temps avec un formulaire, appelez-nous directement.</p>
                <a href={PHONE_HREF}
                  className="group flex items-center justify-center gap-2.5 w-full py-4 bg-white text-accent-600 rounded-2xl font-bold text-[0.92rem] shadow-[0_4px_16px_rgba(0,0,0,0.1)] active:scale-[0.97] transition-all">
                  <Phone size={18} className="group-hover:rotate-12 transition-transform" /> Appeler maintenant
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
