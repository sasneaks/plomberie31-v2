import { useRef } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Star, Phone, ArrowRight, Quote } from 'lucide-react'
import { PHONE_HREF, REVIEWS } from '../data/constants'
import SectionHeader from '../components/SectionHeader'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function Avis() {
  const pageRef = useRef(null)

  useGSAP(() => {
    gsap.from('.page-hero-content > *', { y: 40, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out' })
    gsap.utils.toArray('.review-full').forEach((c, i) => {
      gsap.from(c, { y: 50, opacity: 0, x: i % 2 === 0 ? -20 : 20, duration: 0.6, delay: i * 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: c, start: 'top 88%' }
      })
    })
    gsap.from('.rating-block', { scale: 0.9, opacity: 0, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: '.rating-block', start: 'top 85%' }
    })
  }, { scope: pageRef })

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-brand-900 to-brand-800">
        <div className="relative max-w-6xl mx-auto px-5 lg:px-10 page-hero-content">
          <SectionHeader light label="Témoignages" title="Ce que disent nos clients" subtitle="127 avis vérifiés sur Google — notre meilleure carte de visite." />
        </div>
      </section>

      {/* Big rating card */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <div className="rating-block bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 rounded-[28px] p-8 lg:p-12 text-white shadow-[0_12px_50px_rgba(12,30,53,0.3)]">
            <div className="lg:flex lg:items-center lg:gap-16">
              <div className="text-center lg:text-left mb-8 lg:mb-0">
                <div className="font-[Plus_Jakarta_Sans] text-[5rem] lg:text-[6rem] font-extrabold leading-none tracking-tight">4.9</div>
                <div className="flex gap-1.5 justify-center lg:justify-start text-amber-400 mt-3 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={28} fill="currentColor" />)}
                </div>
                <p className="text-[0.9rem] text-white/45">sur 127 avis vérifiés Google</p>
              </div>
              <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8">
                {[
                  { val: '98%', label: 'Recommandent' },
                  { val: '100%', label: 'Avis répondus' },
                  { val: '<1h', label: 'Temps de réponse' },
                  { val: '5★', label: 'Avis les plus fréquents' },
                ].map(s => (
                  <div key={s.label} className="text-center">
                    <div className="text-[1.6rem] lg:text-[2rem] font-extrabold">{s.val}</div>
                    <div className="text-[0.72rem] text-white/35 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All reviews */}
      <section className="pb-16 lg:pb-24">
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {REVIEWS.map(review => (
              <div key={review.name}
                className="review-full relative bg-white rounded-[20px] p-6 lg:p-7 shadow-[0_1px_4px_rgba(12,30,53,0.04),0_6px_20px_rgba(12,30,53,0.05)] border border-warm-100/40 hover:shadow-[0_8px_30px_rgba(12,30,53,0.08)] transition-shadow duration-400">
                <Quote size={32} className="absolute top-6 right-6 text-warm-100" />
                <div className="flex items-center gap-3.5 mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center font-bold text-[0.82rem] text-brand-700 ring-2 ring-white shadow-sm`}>
                    {review.initials}
                  </div>
                  <div className="flex-1">
                    <div className="text-[0.9rem] font-bold text-warm-800">{review.name}</div>
                    <div className="text-[0.72rem] text-warm-400">{review.date}</div>
                  </div>
                </div>
                <div className="flex gap-0.5 text-amber-400 mb-3">
                  {[...Array(5)].map((_, j) => <Star key={j} size={15} fill="currentColor" />)}
                </div>
                <p className="text-[0.86rem] text-warm-600 leading-[1.7] mb-4">{review.text}</p>
                <span className="inline-block bg-brand-50 text-brand-600 text-[0.72rem] font-bold px-3.5 py-1.5 rounded-full">
                  {review.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-warm-50">
        <div className="max-w-4xl mx-auto px-5 lg:px-10 text-center">
          <SectionHeader center label="Rejoignez nos clients satisfaits" title="À votre tour ?" subtitle="Contactez-nous et découvrez pourquoi 98% de nos clients nous recommandent." />
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
