import { useRef } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { MapPin, ArrowUpRight, Phone, ArrowRight } from 'lucide-react'
import { IMG, PHONE_HREF, GALLERY } from '../data/constants'
import SectionHeader from '../components/SectionHeader'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const EXTRA_GALLERY = [
  ...GALLERY,
  { img: 'kitchen', badge: 'Rénovation cuisine', title: 'Plomberie cuisine', loc: 'Toulouse', tag: 'Évier · Lave-vaisselle · Arrivée d\'eau' },
  { img: 'pipe', badge: 'Tuyauterie', title: 'Remplacement colonne', loc: 'Muret', tag: 'Colonne montante · Cuivre · PER' },
]

export default function Realisations() {
  const pageRef = useRef(null)

  useGSAP(() => {
    gsap.from('.page-hero-content > *', { y: 40, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out' })
    gsap.utils.toArray('.real-card').forEach((c, i) => {
      gsap.from(c, { y: 60, opacity: 0, scale: 0.95, duration: 0.7, delay: i * 0.06, ease: 'power3.out',
        scrollTrigger: { trigger: c, start: 'top 88%' }
      })
    })
  }, { scope: pageRef })

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-brand-900 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={IMG.renovation} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/90 to-brand-900" />
        <div className="relative max-w-6xl mx-auto px-5 lg:px-10 page-hero-content">
          <SectionHeader light label="Portfolio" title="Nos réalisations" subtitle="Découvrez nos derniers projets de rénovation et d'installation dans la région toulousaine." />
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {EXTRA_GALLERY.map((item, i) => (
              <div key={item.title}
                className={`real-card rounded-[20px] overflow-hidden bg-white border border-warm-100/50 shadow-[0_2px_12px_rgba(0,0,0,0.04)] group hover:shadow-[0_12px_40px_rgba(12,30,53,0.1)] transition-all duration-400
                  ${i === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}`}>
                <div className={`relative overflow-hidden ${i === 0 ? 'h-[280px] lg:h-[400px]' : 'h-[220px] lg:h-[280px]'}`}>
                  <img src={IMG[item.img]} alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-brand-700 text-[0.7rem] font-bold px-3.5 py-1.5 rounded-full shadow-sm">
                    {item.badge}
                  </span>
                  <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight size={18} className="text-white" />
                  </div>
                </div>
                <div className="p-5 lg:p-6">
                  <h4 className="text-[0.95rem] font-bold text-warm-800 mb-1.5">{item.title}</h4>
                  <p className="text-[0.78rem] text-warm-400 flex items-center gap-1.5 mb-2">
                    <MapPin size={13} /> {item.loc}
                  </p>
                  <p className="text-[0.75rem] text-brand-500 font-medium">{item.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-warm-50">
        <div className="max-w-4xl mx-auto px-5 lg:px-10 text-center">
          <SectionHeader center label="Votre projet" title="Vous avez un projet de rénovation ?" subtitle="Parlons-en ensemble. Devis gratuit et sans engagement." />
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <a href={PHONE_HREF}
              className="group flex items-center justify-center gap-2.5 px-8 py-4 bg-accent-500 text-white rounded-2xl font-bold text-[0.95rem] shadow-[0_6px_24px_rgba(224,107,45,0.4)] active:scale-[0.97] transition-all">
              <Phone size={20} className="group-hover:rotate-12 transition-transform" /> Appeler
            </a>
            <Link to="/contact"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-700 text-white rounded-2xl font-semibold text-[0.9rem] transition-all">
              Demander un devis <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
