import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageHero from '../../components/PageHero'
import CTABanner from '../../components/CTABanner'
import { FiAward, FiShield, FiHeart, FiUsers, FiZap, FiCheckCircle } from 'react-icons/fi'

gsap.registerPlugin(ScrollTrigger)

const reasons = [
  {
    icon: FiAward,
    title: 'AIIMS-Trained Expertise',
    desc: 'Dr. Amrendra Kumar completed his MD in Dermatology from AIIMS — India\'s most prestigious medical institute. Every treatment benefits from this world-class clinical foundation.',
  },
  {
    icon: FiShield,
    title: 'Medically Verified',
    desc: 'Medical registration verified. Member of ISHRS (International Society of Hair Transplant Surgeons) and IADVL. Internationally recognised standards of care.',
  },
  {
    icon: FiHeart,
    title: '93% Patient Satisfaction',
    desc: 'Over 1,211 patients trust Dermaclinix. A 93% recommendation rate on Practo reflects our commitment to outcomes that genuinely transform lives.',
  },
  {
    icon: FiUsers,
    title: 'Personalised Treatment',
    desc: 'No cookie-cutter protocols. Every patient receives a bespoke treatment plan tailored to their skin type, hair condition, medical history and lifestyle.',
  },
  {
    icon: FiZap,
    title: 'Advanced Technology',
    desc: 'From FUE hair transplant to fractional CO₂ laser, PRP therapy and chemical peels — we invest in the latest clinically-proven technologies.',
  },
  {
    icon: FiCheckCircle,
    title: 'Transparent Pricing',
    desc: 'Honest consultations, clear treatment plans, no hidden costs. We believe world-class dermatology should be accessible without financial anxiety.',
  },
]

const stats = [
  { num: '19+', label: 'Years of Clinical Experience' },
  { num: '1211+', label: 'Patients Treated' },
  { num: '93%', label: 'Recommendation Rate' },
  { num: '4.5★', label: 'Practo Rating' },
]

export default function WhyUs() {
  const cardsRef = useRef([])
  const statsRef = useRef(null)

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.7, delay: (i % 3) * 0.1,
          scrollTrigger: { trigger: card, start: 'top 88%' }
        }
      )
    })
    gsap.fromTo(statsRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: statsRef.current, start: 'top 85%' } }
    )
  }, [])

  return (
    <>
      <PageHero
        label="Why Dermaclinix"
        title={<>Why Choose <span className="italic font-light" style={{ color: 'var(--gold)' }}>Us?</span></>}
        subtitle="Six compelling reasons why Delhi's most discerning patients choose Dermaclinix for their hair and skin care."
        image="https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=1400&q=80"
      />

      {/* Stats bar */}
      <section className="py-16 px-6" style={{ background: 'var(--charcoal)' }}>
        <div className="max-w-5xl mx-auto">
          <div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/10 opacity-0"
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center py-6 px-4">
                <div className="font-display text-4xl md:text-5xl font-light" style={{ color: 'var(--gold)' }}>
                  {s.num}
                </div>
                <div className="text-white/40 text-xs tracking-widest uppercase mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons grid */}
      <section className="py-24 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-3">Our Differentiators</p>
            <h2 className="font-display text-4xl md:text-5xl text-[#1A1A1A]">
              The Dermaclinix<br />
              <span className="italic font-light text-gold-gradient">Difference</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((r, i) => {
              const Icon = r.icon
              return (
                <div
                  key={r.title}
                  ref={el => cardsRef.current[i] = el}
                  className="group p-8 bg-white rounded-sm card-hover opacity-0"
                  style={{ border: '1px solid rgba(0,0,0,0.06)' }}
                >
                  <div className="w-12 h-12 rounded-sm flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                    style={{ background: 'rgba(201,169,110,0.12)', color: 'var(--gold)' }}>
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-xl text-[#1A1A1A] mb-3 group-hover:text-[#C9A96E] transition-colors duration-300">
                    {r.title}
                  </h3>
                  <p className="text-[#8A8A8A] text-sm leading-relaxed">{r.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Trust section */}
      <section className="py-24 px-6" style={{ background: 'var(--obsidian)' }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-4">Our Promise</p>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              We Don't Just Treat —<br />
              <span className="italic font-light" style={{ color: 'var(--gold)' }}>We Transform</span>
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              At Dermaclinix, every appointment is an investment in your confidence. Dr. Kumar personally oversees all procedures and treatment plans, ensuring the highest quality of care from consultation to recovery.
            </p>
            <ul className="space-y-3">
              {[
                'Free post-procedure follow-up care',
                'Evidence-based, clinically proven treatments',
                'Transparent consultation with no pressure',
                'Comfortable, hygienic clinic environment',
              ].map(p => (
                <li key={p} className="flex items-center gap-3 text-white/60 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--gold)' }} />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -top-3 -left-3 w-full h-full border border-[#C9A96E]/20" />
            <img
              src="https://images.unsplash.com/photo-1629909615957-be38d48fbbe4?w=800&q=80"
              alt="Clinic interior"
              className="w-full rounded-sm relative z-10 aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
