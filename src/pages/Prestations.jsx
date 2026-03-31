import { useRef } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { ArrowUpRight, Phone, CheckCircle2, ArrowRight } from 'lucide-react'
import { IMG, PHONE_HREF, SERVICES } from '../data/constants'
import { ICON_MAP } from '../components/Icons'
import SectionHeader from '../components/SectionHeader'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function Prestations() {
  const pageRef = useRef(null)

  useGSAP(() => {
    gsap.from('.page-hero-content > *', { y: 40, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out' })
    gsap.utils.toArray('.service-detail').forEach((card, i) => {
      gsap.from(card, { y: 60, opacity: 0, duration: 0.7, delay: i * 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: card, start: 'top 85%' }
      })
    })
    gsap.from('.process-block > *', { y: 40, opacity: 0, duration: 0.6, stagger: 0.1,
      scrollTrigger: { trigger: '.process-block', start: 'top 80%' }
    })
  }, { scope: pageRef })

  const details = [
    { ...SERVICES[0], features: ['Détection non destructive', 'Caméra thermique', 'Réparation immédiate', 'Rapport d\'intervention'] },
    { ...SERVICES[1], features: ['Débouchage haute pression', 'Curage canalisation', 'Inspection vidéo', 'Entretien préventif'] },
    { ...SERVICES[2], features: ['Remplacement robinets', 'Réparation chasse d\'eau', 'Changement joints', 'Pose sanitaires'] },
    { ...SERVICES[3], features: ['Installation neuve', 'Remplacement ancien', 'Dépannage urgent', 'Conseil économies'] },
    { ...SERVICES[4], features: ['Conception sur-mesure', 'Douche italienne', 'Double vasque', 'Éclairage LED intégré'] },
    { ...SERVICES[5], features: ['Mitigeur thermostatique', 'Robinet encastré', 'Pose baignoire', 'Marques premium'] },
    { ...SERVICES[6], features: ['Contrôle annuel', 'Détartrage', 'Vérification joints', 'Bilan installation'] },
    { ...SERVICES[7], features: ['Disponible 24h/24', 'Intervention < 1h', 'Week-ends et jours fériés', 'Devis sur place'] },
  ]

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-brand-900 via-brand-800 to-brand-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={IMG.pipe} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/90 to-brand-800/95" />
        <div className="relative max-w-6xl mx-auto px-5 lg:px-10 page-hero-content">
          <div className="flex items-center gap-2 text-accent-400 text-[0.72rem] font-bold uppercase tracking-[0.1em] mb-4">
            <div className="w-8 h-[2px] bg-accent-400 rounded-full" /> Nos prestations
          </div>
          <h1 className="font-[Plus_Jakarta_Sans] text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] font-extrabold text-white leading-[1.08] tracking-tight mb-4">
            Des solutions pour<br />chaque <span className="text-accent-400">situation</span>
          </h1>
          <p className="text-[0.95rem] lg:text-[1.05rem] text-white/50 max-w-lg leading-relaxed">
            Du petit dépannage à la rénovation complète, nous intervenons avec le même professionnalisme et le même soin.
          </p>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="space-y-6 lg:space-y-8">
            {details.map((s, i) => (
              <div key={s.slug}
                className={`service-detail rounded-[24px] overflow-hidden border border-warm-100/50 hover:shadow-[0_12px_40px_rgba(12,30,53,0.08)] transition-shadow duration-400
                  ${s.accent ? 'bg-gradient-to-r from-accent-500 to-accent-600 border-accent-400/20' : 'bg-white'}`}>
                <div className={`lg:flex lg:items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image side */}
                  <div className="lg:w-[45%] h-[200px] lg:h-[320px] overflow-hidden">
                    <img src={i < 5 ? IMG[`bath${i + 1}`] : i === 5 ? IMG.kitchen : i === 6 ? IMG.team : IMG.plumber}
                      alt={s.title} className="w-full h-full object-cover" />
                  </div>
                  {/* Content side */}
                  <div className="lg:w-[55%] p-6 lg:p-10">
                    <div className={`w-[48px] h-[48px] rounded-2xl flex items-center justify-center mb-4
                      ${s.accent ? 'bg-white/20 text-white' : 'bg-brand-50 text-brand-600'}`}>
                      {ICON_MAP[s.icon]?.({ size: 22 })}
                    </div>
                    <h3 className={`font-[Plus_Jakarta_Sans] text-[1.2rem] lg:text-[1.5rem] font-extrabold mb-2
                      ${s.accent ? 'text-white' : 'text-brand-900'}`}>
                      {s.title}
                    </h3>
                    <p className={`text-[0.88rem] leading-relaxed mb-5
                      ${s.accent ? 'text-white/65' : 'text-warm-500'}`}>
                      {s.desc}
                    </p>
                    <div className="grid grid-cols-2 gap-2.5 mb-6">
                      {s.features.map(f => (
                        <div key={f} className={`flex items-center gap-2 text-[0.8rem] font-medium
                          ${s.accent ? 'text-white/75' : 'text-warm-600'}`}>
                          <CheckCircle2 size={15} className={s.accent ? 'text-yellow-300' : 'text-brand-400'} />
                          {f}
                        </div>
                      ))}
                    </div>
                    <a href={PHONE_HREF}
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[0.85rem] transition-all active:scale-[0.97]
                        ${s.accent
                          ? 'bg-white text-accent-600 shadow-[0_4px_16px_rgba(0,0,0,0.1)]'
                          : 'bg-brand-700 text-white shadow-[0_4px_16px_rgba(24,55,96,0.25)]'}`}>
                      <Phone size={16} /> Demander un devis
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-warm-50">
        <div className="max-w-4xl mx-auto px-5 lg:px-10 text-center process-block">
          <SectionHeader center label="Prêt à démarrer ?" title="Contactez-nous dès maintenant" subtitle="Devis gratuit et sans engagement. Réponse en moins de 30 minutes." />
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <a href={PHONE_HREF}
              className="group flex items-center justify-center gap-2.5 px-8 py-4 bg-accent-500 text-white rounded-2xl font-bold text-[0.95rem] shadow-[0_6px_24px_rgba(224,107,45,0.4)] active:scale-[0.97] transition-all">
              <Phone size={20} className="group-hover:rotate-12 transition-transform" /> Appeler
            </a>
            <Link to="/contact"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-700 text-white rounded-2xl font-semibold text-[0.9rem] shadow-[0_4px_16px_rgba(24,55,96,0.25)] transition-all">
              Formulaire de contact <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
