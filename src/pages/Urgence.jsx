import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Phone, Zap, CheckCircle2, Clock, Shield, Timer, AlertTriangle, Droplets, ArrowRight } from 'lucide-react'
import { IMG, PHONE_HREF } from '../data/constants'
import SectionHeader from '../components/SectionHeader'
import HScroll, { HScrollCard } from '../components/HScroll'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function Urgence() {
  const pageRef = useRef(null)

  useGSAP(() => {
    gsap.from('.urg-hero > *', { y: 40, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out' })
    gsap.utils.toArray('.urg-card').forEach((c, i) => {
      gsap.from(c, { y: 50, opacity: 0, duration: 0.6, delay: i * 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: c, start: 'top 85%' }
      })
    })
    gsap.from('.urg-steps > *', { x: -30, opacity: 0, duration: 0.6, stagger: 0.1,
      scrollTrigger: { trigger: '.urg-steps', start: 'top 80%' }
    })
  }, { scope: pageRef })

  return (
    <div ref={pageRef}>
      {/* Hero urgence */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-accent-600 via-accent-500 to-[#d45a1e] overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[70%] rounded-full bg-white/[0.04] blur-[60px]" />
        <div className="absolute bottom-[-30%] left-[-10%] w-[40%] h-[60%] rounded-full bg-accent-600/40 blur-[70px]" />
        <div className="absolute top-[20%] left-[40%] w-[200px] h-[200px] rounded-full bg-yellow-400/[0.06] blur-[60px]" />

        <div className="relative max-w-6xl mx-auto px-5 lg:px-10 urg-hero">
          <div className="flex items-center gap-3 mb-6">
            <div className="relative w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center">
              <Zap size={28} className="text-white" strokeWidth={2.5} />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full animate-pulse shadow-[0_0_16px_rgba(250,204,21,0.6)]" />
            </div>
            <span className="text-[0.85rem] font-bold text-white/70 uppercase tracking-[0.12em]">Urgence plomberie</span>
          </div>

          <h1 className="font-[Plus_Jakarta_Sans] text-[2.2rem] sm:text-[3rem] lg:text-[3.6rem] font-extrabold text-white leading-[1.05] tracking-tight mb-5">
            Une urgence ?<br />On arrive <span className="text-yellow-300">vite.</span>
          </h1>
          <p className="text-[1rem] lg:text-[1.1rem] text-white/55 max-w-lg leading-relaxed mb-8">
            Fuite d'eau, dégât des eaux, canalisation bouchée, chauffe-eau en panne — chaque minute compte. Appelez-nous, on intervient immédiatement.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a href={PHONE_HREF}
              className="group flex items-center justify-center gap-2.5 px-9 py-5 bg-white text-accent-600 rounded-2xl font-bold text-[1rem] shadow-[0_6px_24px_rgba(0,0,0,0.15)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)] active:scale-[0.97] transition-all">
              <Phone size={22} strokeWidth={2.5} className="group-hover:rotate-12 transition-transform" />
              Appeler en urgence
            </a>
          </div>

          <div className="flex flex-wrap gap-4">
            {[
              { icon: <Timer size={18} />, text: 'Intervention < 1h' },
              { icon: <Clock size={18} />, text: '24h/24 — 7j/7' },
              { icon: <Shield size={18} />, text: 'Devis avant intervention' },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-2.5 bg-white/[0.1] backdrop-blur-sm rounded-full px-5 py-3 text-[0.85rem] font-medium text-white/85 border border-white/[0.08]">
                {icon} {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types d'urgence */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <SectionHeader center label="Types d'urgence" title="Nous intervenons pour" subtitle="Tous types d'urgences plomberie, sans exception." />

          <div className="mt-12">
            <div className="lg:hidden">
              <HScroll>
                {[
                  { icon: <Droplets size={24} />, title: 'Fuite d\'eau', desc: 'Fuite visible ou cachée, nous détectons et réparons rapidement.', color: 'text-blue-500', bg: 'bg-blue-50' },
                  { icon: <AlertTriangle size={24} />, title: 'Dégât des eaux', desc: 'Intervention d\'urgence pour limiter les dégâts et sécuriser votre habitation.', color: 'text-red-500', bg: 'bg-red-50' },
                  { icon: <Zap size={24} />, title: 'WC bouché', desc: 'Débouchage professionnel rapide avec matériel adapté.', color: 'text-amber-500', bg: 'bg-amber-50' },
                  { icon: <Shield size={24} />, title: 'Canalisation bouchée', desc: 'Curage et nettoyage haute pression pour rétablir l\'écoulement.', color: 'text-emerald-500', bg: 'bg-emerald-50' },
                ].map(item => (
                  <HScrollCard key={item.title} width="min-w-[260px]">
                    <div className="urg-card h-full p-6 rounded-[20px] bg-white border border-warm-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                      <div className={`w-[52px] h-[52px] rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-4`}>{item.icon}</div>
                      <h3 className="text-[0.95rem] font-bold text-warm-800 mb-2">{item.title}</h3>
                      <p className="text-[0.82rem] text-warm-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </HScrollCard>
                ))}
              </HScroll>
            </div>
            <div className="hidden lg:grid grid-cols-4 gap-5">
              {[
                { icon: <Droplets size={24} />, title: 'Fuite d\'eau', desc: 'Fuite visible ou cachée, nous détectons et réparons rapidement pour éviter les dégâts.', color: 'text-blue-500', bg: 'bg-blue-50' },
                { icon: <AlertTriangle size={24} />, title: 'Dégât des eaux', desc: 'Intervention d\'urgence pour limiter les dégâts et sécuriser votre habitation.', color: 'text-red-500', bg: 'bg-red-50' },
                { icon: <Zap size={24} />, title: 'WC bouché', desc: 'Débouchage professionnel rapide avec matériel haute pression adapté.', color: 'text-amber-500', bg: 'bg-amber-50' },
                { icon: <Shield size={24} />, title: 'Canalisation bouchée', desc: 'Curage et nettoyage haute pression pour rétablir l\'écoulement normal.', color: 'text-emerald-500', bg: 'bg-emerald-50' },
              ].map(item => (
                <div key={item.title} className="urg-card p-7 rounded-[20px] bg-white border border-warm-100 hover:shadow-[0_12px_40px_rgba(12,30,53,0.08)] transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-[52px] h-[52px] rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-5`}>{item.icon}</div>
                  <h3 className="text-[0.98rem] font-bold text-warm-800 mb-2">{item.title}</h3>
                  <p className="text-[0.84rem] text-warm-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche en urgence */}
      <section className="py-16 lg:py-24 bg-warm-50">
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <SectionHeader center label="En cas d'urgence" title="Comment ça se passe ?" />

          <div className="urg-steps mt-12 space-y-6 max-w-2xl mx-auto">
            {[
              { num: '1', title: 'Vous nous appelez', desc: 'Un technicien vous répond immédiatement et évalue la situation avec vous par téléphone.' },
              { num: '2', title: 'Diagnostic par téléphone', desc: 'Nous vous guidons sur les premiers gestes à faire en attendant notre arrivée (couper l\'eau, etc.).' },
              { num: '3', title: 'Arrivée sur place', desc: 'Notre artisan arrive dans l\'heure avec tout le matériel nécessaire. Devis avant toute intervention.' },
              { num: '4', title: 'Réparation immédiate', desc: 'Nous réparons sur place. Vous ne payez que le montant convenu. Facture détaillée.' },
            ].map(step => (
              <div key={step.num} className="flex gap-5 items-start bg-white rounded-2xl p-6 border border-warm-100 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                <div className="w-12 h-12 rounded-full bg-accent-500 text-white flex items-center justify-center font-[Plus_Jakarta_Sans] font-extrabold text-[1rem] shrink-0 shadow-[0_4px_16px_rgba(224,107,45,0.3)]">
                  {step.num}
                </div>
                <div>
                  <h4 className="text-[0.95rem] font-bold text-warm-800 mb-1">{step.title}</h4>
                  <p className="text-[0.84rem] text-warm-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA urgence */}
      <section className="py-16 lg:py-24 bg-accent-500">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <h2 className="font-[Plus_Jakarta_Sans] text-[1.6rem] lg:text-[2.4rem] font-extrabold text-white mb-4">
            N'attendez pas, appelez maintenant
          </h2>
          <p className="text-[0.95rem] text-white/60 mb-8 max-w-md mx-auto">
            Chaque minute compte en cas d'urgence. Notre équipe est prête à intervenir.
          </p>
          <a href={PHONE_HREF}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-accent-600 rounded-2xl font-bold text-[1.05rem] shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] active:scale-[0.97] transition-all">
            <Phone size={24} strokeWidth={2.5} className="group-hover:rotate-12 transition-transform" />
            Appeler en urgence
          </a>
        </div>
      </section>
    </div>
  )
}
