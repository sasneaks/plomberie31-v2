import { useRef } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import {
  Phone, Clock, BadgeCheck, Timer, CircleCheck, ArrowRight,
  ArrowUpRight, Zap, CheckCircle2, Star, MapPin, ChevronDown,
  Search, ShowerHead, Wrench, Flame, Sparkles, Droplets, Shield,
  Award, Heart, Users
} from 'lucide-react'
import { IMG, PHONE_HREF, SERVICES, REVIEWS, GALLERY, ZONES } from '../data/constants'
import SectionHeader from '../components/SectionHeader'
import HScroll, { HScrollCard } from '../components/HScroll'
import { ICON_MAP } from '../components/Icons'

gsap.registerPlugin(ScrollTrigger, useGSAP)

function SplitText({ children, className = '' }) {
  return (
    <span className={className}>
      {children.split('').map((c, i) => (
        <span key={i} className="char inline-block" style={{ willChange: 'transform' }}>
          {c === ' ' ? '\u00A0' : c}
        </span>
      ))}
    </span>
  )
}

export default function Home() {
  const mainRef = useRef(null)
  const heroRef = useRef(null)
  const galleryTrackRef = useRef(null)
  const galleryRef = useRef(null)

  useGSAP(() => {
    /* Hero entrance */
    const heroTl = gsap.timeline({ defaults: { ease: 'power4.out' } })
    heroTl
      .set('.hero-overlay', { scaleY: 1 })
      .to('.hero-overlay', { scaleY: 0, duration: 1.2, ease: 'power4.inOut', transformOrigin: 'top' })
      .from('.hero-badge', { y: 30, opacity: 0, duration: 0.7 }, '-=0.4')
      .from('.hero-title .char', { y: 80, opacity: 0, rotateX: -40, duration: 0.8, stagger: 0.02, ease: 'power3.out' }, '-=0.5')
      .from('.hero-subtitle', { y: 30, opacity: 0, duration: 0.7 }, '-=0.4')
      .from('.hero-cta > *', { y: 30, opacity: 0, duration: 0.6, stagger: 0.15 }, '-=0.4')
      .from('.hero-trust > *', { y: 15, opacity: 0, duration: 0.5, stagger: 0.08 }, '-=0.3')

    /* Hero parallax */
    gsap.to('.hero-bg-img', {
      yPercent: 25, scale: 1.1, ease: 'none',
      scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true }
    })

    /* Marquee fade */
    gsap.from('.marquee-section', {
      opacity: 0, y: 20, duration: 0.8,
      scrollTrigger: { trigger: '.marquee-section', start: 'top 90%' }
    })

    /* Stats */
    gsap.utils.toArray('.stat-block').forEach((el, i) => {
      gsap.from(el, { y: 60, opacity: 0, duration: 0.8, delay: i * 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: '.stats-section', start: 'top 85%' }
      })
    })
    gsap.utils.toArray('.stat-num').forEach(el => {
      const target = parseFloat(el.dataset.target)
      gsap.from(el, { textContent: 0, duration: 2, ease: 'power2.out',
        snap: { textContent: target % 1 === 0 ? 1 : 0.1 },
        scrollTrigger: { trigger: el, start: 'top 85%' }
      })
    })

    /* Services */
    gsap.utils.toArray('.service-card').forEach((card, i) => {
      gsap.from(card, { y: 60, opacity: 0, duration: 0.7, delay: i * 0.06, ease: 'power3.out',
        scrollTrigger: { trigger: '.services-section', start: 'top 78%' }
      })
    })

    /* Process */
    gsap.utils.toArray('.process-step').forEach((step, i) => {
      gsap.from(step, { opacity: 0, y: 40, duration: 0.6, delay: i * 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: '.process-section', start: 'top 80%' }
      })
    })

    /* Gallery — horizontal scroll pinned (desktop) */
    if (window.innerWidth >= 1024 && galleryTrackRef.current) {
      const track = galleryTrackRef.current
      const cards = gsap.utils.toArray('.gallery-card', track)
      const totalWidth = cards.reduce((acc, c) => acc + c.offsetWidth + 20, 0)
      const scrollDist = totalWidth - window.innerWidth + 200
      gsap.to(track, { x: -scrollDist, ease: 'none',
        scrollTrigger: { trigger: galleryRef.current, start: 'top top', end: `+=${scrollDist}`, pin: true, scrub: 1, anticipatePin: 1 }
      })
    }

    /* Reviews */
    gsap.utils.toArray('.review-card').forEach((card, i) => {
      gsap.from(card, { y: 40, opacity: 0, x: i % 2 === 0 ? -20 : 20, duration: 0.6, delay: i * 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: '.reviews-section', start: 'top 78%' }
      })
    })

    /* CTA */
    gsap.from('.cta-block', { scale: 0.92, opacity: 0, y: 40, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: '.cta-section', start: 'top 80%' }
    })
  }, { scope: mainRef })

  return (
    <div ref={mainRef}>

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative h-[100svh] flex items-end lg:items-center overflow-hidden">
        <div className="hero-overlay absolute inset-0 z-20 bg-brand-900" style={{ transformOrigin: 'top' }} />
        <div className="absolute inset-0 z-0">
          <img src={IMG.hero} alt="" className="hero-bg-img w-full h-[130%] object-cover object-center" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/60 to-brand-900/20 lg:bg-[linear-gradient(105deg,rgba(12,30,53,0.95)_0%,rgba(12,30,53,0.7)_40%,rgba(12,30,53,0.15)_70%,transparent_100%)]" />
        </div>
        <div className="absolute top-[15%] right-[15%] w-[250px] h-[250px] lg:w-[450px] lg:h-[450px] rounded-full bg-accent-500/8 blur-[120px] z-[1]" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 lg:px-10 pb-16 lg:pb-0">
          <div className="max-w-2xl">
            <div className="hero-badge inline-flex items-center gap-2.5 bg-white/[0.08] border border-white/[0.12] rounded-full px-4 py-2.5 mb-7 backdrop-blur-md">
              <span className="relative w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
              </span>
              <span className="text-[0.78rem] font-medium text-white/80 tracking-wide">Disponible aujourd'hui — Intervention en 30 min</span>
            </div>

            <h1 className="hero-title font-[Plus_Jakarta_Sans] text-[2.2rem] sm:text-[3rem] lg:text-[3.8rem] font-extrabold leading-[1.05] tracking-[-0.02em] text-white mb-6" style={{ perspective: '600px' }}>
              <SplitText>Votre plombier</SplitText><br />
              <SplitText>de confiance à </SplitText>
              <span className="relative inline-block">
                <SplitText className="text-accent-400">Toulouse</SplitText>
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none"><path d="M2 5.5C40 2 80 2 100 3.5C120 5 160 5.5 198 3" stroke="#E06B2D" strokeWidth="3" strokeLinecap="round" opacity="0.6"/></svg>
              </span>
            </h1>

            <p className="hero-subtitle text-[0.95rem] sm:text-[1.08rem] lg:text-[1.18rem] leading-[1.7] text-white/55 mb-9 max-w-xl">
              Dépannage, rénovation salle de bain, chauffe-eau, débouchage — un artisan sérieux qui intervient vite et travaille proprement.
            </p>

            <div className="hero-cta flex flex-col sm:flex-row gap-3 mb-10">
              <a href={PHONE_HREF}
                className="group flex items-center justify-center gap-2.5 px-8 py-4.5 bg-accent-500 text-white rounded-2xl font-bold text-[0.95rem] shadow-[0_6px_24px_rgba(224,107,45,0.4)] hover:shadow-[0_8px_36px_rgba(224,107,45,0.55)] hover:bg-accent-600 active:scale-[0.97] transition-all duration-300">
                <Phone size={20} strokeWidth={2.5} className="group-hover:rotate-12 transition-transform" />
                Appeler maintenant
              </a>
              <Link to="/contact"
                className="group flex items-center justify-center gap-2.5 px-8 py-4.5 bg-white/[0.08] border border-white/15 text-white rounded-2xl font-semibold text-[0.92rem] backdrop-blur-md hover:bg-white/[0.14] active:scale-[0.97] transition-all duration-300">
                Demander un devis gratuit
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="hero-trust flex flex-wrap gap-x-7 gap-y-3">
              {[
                { icon: <Clock size={15} />, text: 'Disponible 7j/7' },
                { icon: <BadgeCheck size={15} />, text: 'Devis gratuit' },
                { icon: <Timer size={15} />, text: 'Réponse < 30 min' },
                { icon: <CircleCheck size={15} />, text: 'Travail soigné' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-[0.78rem] text-white/45 font-medium">
                  <span className="text-accent-400/70">{icon}</span> {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2.5 text-white/25">
          <span className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-white/30 to-transparent relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-4 bg-white/60 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="marquee-section py-5 bg-brand-900 border-y border-white/5 overflow-hidden">
        <div className="marquee-track">
          {[...Array(2)].map((_, d) => (
            <div key={d} className="flex items-center gap-10 px-5">
              {['12+ ans d\'expérience', 'Devis gratuit & sans engagement', 'Intervention rapide 7j/7', '2500+ interventions', 'Artisan qualifié & assuré', 'Toulouse & agglomération', 'Note Google 4.9/5', 'Garantie travaux'].map(item => (
                <span key={`${d}-${item}`} className="flex items-center gap-3 text-[0.78rem] font-medium text-white/40 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500/60 shrink-0" /> {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── STATS ── */}
      <section className="stats-section py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          {/* Mobile: horizontal scroll */}
          <div className="lg:hidden">
            <HScroll>
              {[
                { num: '12', suffix: '+', label: "Ans d'expérience", desc: 'De savoir-faire' },
                { num: '2500', suffix: '+', label: 'Interventions', desc: 'Réalisées avec succès' },
                { num: '4.9', suffix: '/5', label: 'Note Google', desc: 'Avis vérifiés' },
                { num: '98', suffix: '%', label: 'Satisfaction', desc: 'Recommandent' },
              ].map(({ num, suffix, label, desc }) => (
                <HScrollCard key={label} width="min-w-[160px]">
                  <div className="stat-block bg-warm-50 rounded-2xl p-5 text-center">
                    <div className="font-[Plus_Jakarta_Sans] text-[2rem] font-extrabold text-brand-800 leading-none mb-1">
                      <span className="stat-num" data-target={num}>{num}</span>
                      <span className="text-accent-500">{suffix}</span>
                    </div>
                    <div className="text-[0.82rem] font-semibold text-warm-700">{label}</div>
                    <div className="text-[0.72rem] text-warm-400">{desc}</div>
                  </div>
                </HScrollCard>
              ))}
            </HScroll>
          </div>
          {/* Desktop: grid */}
          <div className="hidden lg:grid grid-cols-4 gap-10">
            {[
              { num: '12', suffix: '+', label: "Ans d'expérience", desc: 'De savoir-faire artisanal' },
              { num: '2500', suffix: '+', label: 'Interventions', desc: 'Réalisées avec succès' },
              { num: '4.9', suffix: '/5', label: 'Note Google', desc: 'Avis clients vérifiés' },
              { num: '98', suffix: '%', label: 'Satisfaction', desc: 'Clients qui recommandent' },
            ].map(({ num, suffix, label, desc }) => (
              <div key={label} className="stat-block">
                <div className="font-[Plus_Jakarta_Sans] text-[2.8rem] font-extrabold text-brand-800 leading-none mb-1.5 tracking-tight">
                  <span className="stat-num" data-target={num}>{num}</span>
                  <span className="text-accent-500">{suffix}</span>
                </div>
                <div className="text-[0.85rem] font-semibold text-warm-700 mb-0.5">{label}</div>
                <div className="text-[0.75rem] text-warm-400">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="services-section py-16 lg:py-24 bg-warm-50/50">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="lg:flex lg:items-end lg:justify-between mb-10 lg:mb-14">
            <SectionHeader label="Nos services" title="Tous vos besoins<br class='hidden lg:block' /> en plomberie" subtitle="Solutions fiables pour chaque situation, du dépannage rapide à la rénovation complète." />
            <Link to="/prestations" className="hidden lg:inline-flex items-center gap-2 text-brand-600 font-semibold text-[0.88rem] hover:text-accent-500 transition-colors group">
              Toutes les prestations <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile: horizontal scroll */}
          <div className="lg:hidden">
            <HScroll>
              {SERVICES.map(s => (
                <HScrollCard key={s.slug} width="min-w-[260px]">
                  <Link to={s.slug === 'urgence' ? '/urgence' : '/prestations'}
                    className={`service-card block h-full p-6 rounded-[20px] transition-all duration-300
                      ${s.accent
                        ? 'bg-gradient-to-br from-accent-500 to-accent-600 text-white shadow-[0_8px_30px_rgba(224,107,45,0.3)]'
                        : `bg-gradient-to-br ${s.gradient} border border-warm-100/50`}`}>
                    <div className={`w-[48px] h-[48px] rounded-2xl flex items-center justify-center mb-4
                      ${s.accent ? 'bg-white/20' : 'bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-brand-600'}`}>
                      {ICON_MAP[s.icon]?.({ size: 22 })}
                    </div>
                    <h4 className={`text-[0.92rem] font-bold mb-1.5 ${s.accent ? '' : 'text-warm-800'}`}>{s.title}</h4>
                    <p className={`text-[0.8rem] leading-relaxed ${s.accent ? 'text-white/70' : 'text-warm-400'}`}>{s.desc}</p>
                  </Link>
                </HScrollCard>
              ))}
            </HScroll>
          </div>
          {/* Desktop: grid */}
          <div className="hidden lg:grid grid-cols-4 gap-5">
            {SERVICES.map(s => (
              <Link key={s.slug} to={s.slug === 'urgence' ? '/urgence' : '/prestations'}
                className={`service-card group relative p-7 rounded-[20px] transition-all duration-400
                  ${s.accent
                    ? 'bg-gradient-to-br from-accent-500 to-accent-600 text-white shadow-[0_8px_30px_rgba(224,107,45,0.3)] hover:shadow-[0_12px_40px_rgba(224,107,45,0.4)] hover:-translate-y-1.5'
                    : `bg-gradient-to-br ${s.gradient} border border-warm-100/50 hover:border-brand-200/60 hover:shadow-[0_12px_40px_rgba(12,30,53,0.08)] hover:-translate-y-1.5`}`}>
                <div className={`w-[52px] h-[52px] rounded-2xl flex items-center justify-center mb-5 transition-all duration-300
                  ${s.accent ? 'bg-white/20 group-hover:bg-white/30 group-hover:scale-110' : 'bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-brand-600 group-hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] group-hover:scale-110'}`}>
                  {ICON_MAP[s.icon]?.({ size: 22 })}
                </div>
                <h4 className={`text-[0.95rem] font-bold mb-2 ${s.accent ? '' : 'text-warm-800'}`}>{s.title}</h4>
                <p className={`text-[0.82rem] leading-relaxed ${s.accent ? 'text-white/70' : 'text-warm-400'}`}>{s.desc}</p>
                <div className={`absolute top-6 right-6 transition-all duration-300 group-hover:translate-x-0.5 ${s.accent ? 'text-white/40' : 'text-warm-300'}`}>
                  <ArrowUpRight size={18} />
                </div>
              </Link>
            ))}
          </div>

          <div className="lg:hidden mt-6 text-center">
            <Link to="/prestations" className="inline-flex items-center gap-2 text-brand-600 font-semibold text-[0.88rem]">
              Voir toutes les prestations <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="process-section py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <SectionHeader center label="Comment ça marche" title="Simple, rapide, efficace" subtitle="De votre appel à la résolution du problème, en 4 étapes." />
          <div className="mt-12 lg:mt-16">
            {/* Mobile: horizontal scroll */}
            <div className="lg:hidden">
              <HScroll>
                {[
                  { num: '01', title: 'Vous appelez', desc: 'Un conseiller répond en moins de 30 minutes, même le week-end.' },
                  { num: '02', title: 'Diagnostic gratuit', desc: 'Nous évaluons votre situation et vous donnons un devis clair.' },
                  { num: '03', title: 'Intervention', desc: 'Notre artisan qualifié intervient avec tout le matériel nécessaire.' },
                  { num: '04', title: 'Problème résolu', desc: 'Travail soigné, chantier propre. Vous ne payez que le prix convenu.' },
                ].map(step => (
                  <HScrollCard key={step.num} width="min-w-[220px]">
                    <div className="process-step text-center bg-white rounded-2xl p-6 border border-warm-100 h-full">
                      <div className="inline-flex items-center justify-center w-[64px] h-[64px] rounded-full bg-brand-50 border-2 border-brand-200 mb-4 mx-auto">
                        <span className="font-[Plus_Jakarta_Sans] text-[1rem] font-extrabold text-brand-700">{step.num}</span>
                      </div>
                      <h4 className="text-[0.92rem] font-bold text-warm-800 mb-2">{step.title}</h4>
                      <p className="text-[0.8rem] text-warm-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </HScrollCard>
                ))}
              </HScroll>
            </div>
            {/* Desktop: grid with connecting line */}
            <div className="hidden lg:grid grid-cols-4 gap-4 relative">
              <div className="absolute top-[52px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-brand-200 via-brand-300 to-accent-300 rounded-full" />
              {[
                { num: '01', title: 'Vous appelez', desc: 'Un conseiller vous répond en moins de 30 minutes, même le week-end.' },
                { num: '02', title: 'Diagnostic gratuit', desc: 'Nous évaluons votre situation et vous donnons un devis clair et détaillé.' },
                { num: '03', title: 'Intervention', desc: 'Notre artisan qualifié intervient rapidement avec tout le matériel nécessaire.' },
                { num: '04', title: 'Problème résolu', desc: 'Travail soigné, chantier propre. Vous ne payez que le prix convenu.' },
              ].map(step => (
                <div key={step.num} className="process-step relative text-center">
                  <div className="relative inline-flex items-center justify-center w-[84px] h-[84px] rounded-full bg-white border-2 border-brand-200 shadow-[0_4px_20px_rgba(12,30,53,0.06)] mb-5 mx-auto z-10">
                    <span className="font-[Plus_Jakarta_Sans] text-[1.1rem] font-extrabold text-brand-700">{step.num}</span>
                  </div>
                  <h4 className="text-[0.98rem] font-bold text-warm-800 mb-2">{step.title}</h4>
                  <p className="text-[0.82rem] text-warm-400 leading-relaxed max-w-[240px] mx-auto">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── URGENCY BANNER ── */}
      <section className="py-16 lg:py-24 bg-warm-50">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="relative overflow-hidden rounded-[28px] lg:rounded-[36px] bg-gradient-to-br from-accent-500 via-accent-500 to-[#d45a1e] shadow-[0_12px_50px_rgba(224,107,45,0.25)]">
            <div className="absolute top-[-25%] right-[-10%] w-[55%] h-[80%] rounded-full bg-white/[0.05] blur-[50px]" />
            <div className="absolute bottom-[-35%] left-[-15%] w-[45%] h-[65%] rounded-full bg-accent-600/40 blur-[70px]" />

            <div className="relative lg:flex lg:items-center lg:gap-16 p-8 sm:p-12 lg:p-16">
              <div className="flex-1 mb-10 lg:mb-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">
                    <Zap size={24} className="text-white" strokeWidth={2.5} />
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse shadow-[0_0_12px_rgba(250,204,21,0.6)]" />
                  </div>
                  <span className="text-[0.8rem] font-bold text-white/60 uppercase tracking-[0.12em]">Urgence plomberie 24h/24</span>
                </div>
                <h2 className="font-[Plus_Jakarta_Sans] text-[1.7rem] sm:text-[2rem] lg:text-[2.6rem] font-extrabold text-white leading-[1.1] mb-5 tracking-tight">
                  Une urgence ?<br />On arrive <span className="text-yellow-300">vite.</span>
                </h2>
                <p className="text-[0.92rem] text-white/55 leading-relaxed mb-7 max-w-md">
                  Fuite d'eau, dégât des eaux, canalisation bouchée — chaque minute compte.
                </p>

                <div className="flex flex-wrap gap-2.5 mb-9">
                  {['Fuite d\'eau', 'WC bouché', 'Canalisation', 'Chauffe-eau en panne'].map(item => (
                    <span key={item} className="flex items-center gap-2 bg-white/[0.1] backdrop-blur-sm rounded-full px-4 py-2.5 text-[0.8rem] font-medium text-white/85 border border-white/[0.08]">
                      <CheckCircle2 size={14} className="text-yellow-300" /> {item}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={PHONE_HREF}
                    className="group flex items-center justify-center gap-2.5 px-8 py-4.5 bg-white text-accent-600 rounded-2xl font-bold text-[0.95rem] shadow-[0_6px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_36px_rgba(0,0,0,0.18)] active:scale-[0.97] transition-all">
                    <Phone size={20} strokeWidth={2.5} className="group-hover:rotate-12 transition-transform" />
                    Appeler en urgence
                  </a>
                  <Link to="/urgence"
                    className="flex items-center justify-center gap-2 px-8 py-4.5 border-2 border-white/20 text-white rounded-2xl font-semibold text-[0.88rem] hover:bg-white/10 transition-all">
                    En savoir plus
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block flex-shrink-0 w-[360px] h-[420px] rounded-[24px] overflow-hidden shadow-[0_16px_50px_rgba(0,0,0,0.25)] border-2 border-white/10">
                <img src={IMG.plumber} alt="Plombier en intervention" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section ref={galleryRef} className="relative bg-brand-900 overflow-hidden">
        <div className="hidden lg:block">
          <div className="h-screen flex flex-col justify-center px-10 pt-8">
            <SectionHeader light label="Nos réalisations" title="Travaux récents" subtitle="Projets réalisés avec soin dans la région toulousaine." />
            <div ref={galleryTrackRef} className="flex gap-5 mt-10">
              {GALLERY.map(item => (
                <div key={item.title} className="gallery-card w-[420px] shrink-0 rounded-[20px] overflow-hidden bg-white/[0.05] border border-white/[0.08] backdrop-blur-sm group cursor-pointer hover:bg-white/[0.08] transition-all duration-500">
                  <div className="relative h-[280px] overflow-hidden">
                    <img src={IMG[item.img]} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-brand-700 text-[0.7rem] font-bold px-3.5 py-1.5 rounded-full">{item.badge}</span>
                  </div>
                  <div className="p-6">
                    <h4 className="text-[0.95rem] font-bold text-white mb-1.5">{item.title}</h4>
                    <p className="text-[0.78rem] text-white/40 flex items-center gap-1.5 mb-2"><MapPin size={13} /> {item.loc}</p>
                    <p className="text-[0.75rem] text-accent-400 font-medium">{item.tag}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:hidden py-14 px-5">
          <SectionHeader light label="Nos réalisations" title="Travaux récents" subtitle="Projets réalisés avec soin à Toulouse." />
          <div className="mt-8">
            <HScroll>
              {GALLERY.map(item => (
                <HScrollCard key={item.title} width="min-w-[300px]">
                  <div className="rounded-[20px] overflow-hidden bg-white/[0.05] border border-white/[0.08] group">
                    <div className="relative h-[200px] overflow-hidden">
                      <img src={IMG[item.img]} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-brand-700 text-[0.7rem] font-bold px-3 py-1.5 rounded-full">{item.badge}</span>
                    </div>
                    <div className="p-5">
                      <h4 className="text-[0.92rem] font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-[0.78rem] text-white/40 flex items-center gap-1 mb-2"><MapPin size={13} /> {item.loc}</p>
                      <p className="text-[0.75rem] text-accent-400 font-medium">{item.tag}</p>
                    </div>
                  </div>
                </HScrollCard>
              ))}
            </HScroll>
          </div>
          <div className="mt-6 text-center">
            <Link to="/realisations" className="inline-flex items-center gap-2 text-accent-400 font-semibold text-[0.88rem]">
              Voir toutes les réalisations <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── REVIEWS PREVIEW ── */}
      <section className="reviews-section py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="lg:flex lg:items-end lg:justify-between mb-10 lg:mb-14">
            <SectionHeader label="Avis clients" title="Ce que disent nos clients" subtitle="127 avis vérifiés Google — note moyenne 4.9/5" />
            <Link to="/avis" className="hidden lg:inline-flex items-center gap-2 text-brand-600 font-semibold text-[0.88rem] hover:text-accent-500 transition-colors group">
              Tous les avis <ArrowUpRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile: horizontal scroll */}
          <div className="lg:hidden">
            <HScroll>
              {REVIEWS.slice(0, 4).map(review => (
                <HScrollCard key={review.name} width="min-w-[300px]">
                  <div className="review-card bg-white rounded-[20px] p-5 shadow-[0_1px_4px_rgba(12,30,53,0.04),0_6px_20px_rgba(12,30,53,0.05)] border border-warm-100/40 h-full">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center font-bold text-[0.78rem] text-brand-700 ring-2 ring-white shadow-sm`}>{review.initials}</div>
                      <div className="flex-1">
                        <div className="text-[0.86rem] font-bold text-warm-800">{review.name}</div>
                        <div className="text-[0.7rem] text-warm-400">{review.date}</div>
                      </div>
                    </div>
                    <div className="flex gap-0.5 text-amber-400 mb-3">
                      {[...Array(5)].map((_, j) => <Star key={j} size={13} fill="currentColor" />)}
                    </div>
                    <p className="text-[0.82rem] text-warm-600 leading-[1.65] mb-3">{review.text}</p>
                    <span className="inline-block bg-brand-50 text-brand-600 text-[0.7rem] font-bold px-3 py-1.5 rounded-full">{review.tag}</span>
                  </div>
                </HScrollCard>
              ))}
            </HScroll>
            <div className="mt-6 text-center">
              <Link to="/avis" className="inline-flex items-center gap-2 text-brand-600 font-semibold text-[0.88rem]">
                Voir tous les avis <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Desktop: grid */}
          <div className="hidden lg:grid grid-cols-2 gap-5">
            {REVIEWS.slice(0, 4).map(review => (
              <div key={review.name} className="review-card bg-white rounded-[20px] p-7 shadow-[0_1px_4px_rgba(12,30,53,0.04),0_6px_20px_rgba(12,30,53,0.05)] border border-warm-100/40 hover:shadow-[0_8px_30px_rgba(12,30,53,0.08)] transition-shadow duration-400">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center font-bold text-[0.82rem] text-brand-700 ring-2 ring-white shadow-sm`}>{review.initials}</div>
                  <div className="flex-1">
                    <div className="text-[0.9rem] font-bold text-warm-800">{review.name}</div>
                    <div className="text-[0.72rem] text-warm-400">{review.date}</div>
                  </div>
                  <div className="flex gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                  </div>
                </div>
                <p className="text-[0.86rem] text-warm-600 leading-[1.7] mb-3.5">{review.text}</p>
                <span className="inline-block bg-brand-50 text-brand-600 text-[0.72rem] font-bold px-3.5 py-1.5 rounded-full">{review.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ZONES ── */}
      <section className="py-16 lg:py-24 bg-warm-50/50">
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <SectionHeader center label="Zone d'intervention" title="Nous intervenons près de chez vous" subtitle="Toulouse et l'ensemble de l'agglomération, dans un rayon de 30 km." />
          <div className="mt-10">
            {/* Mobile: horizontal scroll */}
            <div className="lg:hidden">
              <HScroll>
                {ZONES.map(zone => (
                  <HScrollCard key={zone.name} width="min-w-[140px]">
                    <div className={`flex items-center gap-2.5 px-4 py-3.5 rounded-2xl text-[0.84rem] font-medium whitespace-nowrap
                      ${zone.main
                        ? 'bg-brand-700 text-white shadow-[0_4px_16px_rgba(24,55,96,0.25)]'
                        : 'bg-white border border-warm-200/60 text-warm-600'}`}>
                      <MapPin size={14} className={zone.main ? 'text-accent-400' : 'text-brand-400'} />
                      {zone.name}
                    </div>
                  </HScrollCard>
                ))}
              </HScroll>
            </div>
            {/* Desktop: grid */}
            <div className="hidden lg:grid grid-cols-4 gap-3.5">
              {ZONES.map(zone => (
                <div key={zone.name} className={`flex items-center gap-3 px-5 py-4 rounded-2xl text-[0.85rem] font-medium transition-all duration-300 cursor-default
                  ${zone.main
                    ? 'bg-brand-700 text-white shadow-[0_4px_16px_rgba(24,55,96,0.25)]'
                    : 'bg-white border border-warm-200/60 text-warm-600 hover:border-brand-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)]'}`}>
                  <MapPin size={15} className={zone.main ? 'text-accent-400' : 'text-brand-400'} />
                  {zone.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="cta-section py-16 lg:py-28">
        <div className="max-w-4xl mx-auto px-5 lg:px-10">
          <div className="cta-block relative overflow-hidden rounded-[32px] lg:rounded-[40px] bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 p-10 sm:p-14 lg:p-20 text-center shadow-[0_16px_60px_rgba(12,30,53,0.3)]">
            <div className="absolute top-[-30%] left-[-15%] w-[55%] h-[65%] rounded-full bg-brand-500/12 blur-[100px]" />
            <div className="absolute bottom-[-25%] right-[-10%] w-[45%] h-[55%] rounded-full bg-accent-500/8 blur-[80px]" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-white/[0.08] rounded-full px-4 py-2 mb-6 border border-white/[0.08]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                <span className="text-[0.75rem] font-medium text-white/60">Réponse garantie en moins de 30 min</span>
              </div>
              <h2 className="font-[Plus_Jakarta_Sans] text-[1.6rem] sm:text-[2rem] lg:text-[2.6rem] font-extrabold text-white mb-4 leading-[1.1] tracking-tight">
                Besoin d'un plombier fiable ?
              </h2>
              <p className="text-[0.92rem] lg:text-[1.02rem] text-white/45 mb-10 max-w-md mx-auto leading-relaxed">
                Contactez-nous maintenant pour un devis gratuit ou une intervention rapide.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3.5">
                <a href={PHONE_HREF}
                  className="group flex items-center justify-center gap-2.5 px-9 py-4.5 bg-accent-500 text-white rounded-2xl font-bold text-[0.95rem] shadow-[0_6px_24px_rgba(224,107,45,0.4)] hover:shadow-[0_8px_36px_rgba(224,107,45,0.55)] active:scale-[0.97] transition-all duration-300">
                  <Phone size={20} strokeWidth={2.5} className="group-hover:rotate-12 transition-transform" /> Appeler
                </a>
                <Link to="/contact"
                  className="flex items-center justify-center gap-2 px-9 py-4.5 bg-white/[0.08] border border-white/15 text-white rounded-2xl font-semibold text-[0.9rem] hover:bg-white/[0.14] transition-all duration-300">
                  Demander un devis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
