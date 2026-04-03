import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageHero from '../components/PageHero'
import FAQAccordion from '../components/FAQAccordion'
import CTABanner from '../components/CTABanner'
import { FiArrowRight } from 'react-icons/fi'

gsap.registerPlugin(ScrollTrigger)

const treatments = [
  {
    title: 'Laser Skin Resurfacing',
    desc: 'Fractional CO₂ laser technology precisely removes damaged skin layers, stimulating collagen production for dramatically smoother, younger-looking skin.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&q=80',
    tags: ['Anti-Aging', 'Scar Removal', 'Skin Tone'],
    popular: true,
  },
  {
    title: 'Chemical Peel',
    desc: 'Medical-grade chemical peels exfoliate dead skin layers, revealing fresh, radiant skin. Effective for acne scars, pigmentation, and dull complexion.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=700&q=80',
    tags: ['Pigmentation', 'Glow', 'Acne Scars'],
  },
  {
    title: 'Botox & Fillers',
    desc: 'FDA-approved Botulinum toxin and dermal filler treatments to smooth fine lines, restore facial volume, and achieve a naturally refreshed appearance.',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=700&q=80',
    tags: ['Anti-Aging', 'Volume', 'Wrinkles'],
    popular: true,
  },
  {
    title: 'Acne & Pimple Treatment',
    desc: 'Comprehensive acne management combining topical therapies, oral medication, chemical peels, and laser treatments for clear, breakout-free skin.',
    image: 'https://images.unsplash.com/photo-1620756236308-65c3ef5d25f3?w=700&q=80',
    tags: ['Acne', 'Oily Skin', 'Scars'],
  },
  {
    title: 'Microdermabrasion',
    desc: 'A gentle exfoliation treatment that uses fine crystals to remove the outermost skin layer, improving texture, tone, and the appearance of fine lines.',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=700&q=80',
    tags: ['Exfoliation', 'Skin Texture', 'Brightening'],
  },
  {
    title: 'Photofacial (IPL)',
    desc: 'Intense Pulsed Light therapy targets sun damage, redness, age spots, and uneven skin tone, revealing a clearer and more even complexion.',
    image: 'https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?w=700&q=80',
    tags: ['Sun Damage', 'Even Tone', 'Redness'],
  },
  {
    title: 'Stretch Mark Treatment',
    desc: 'A combination of microneedling, radiofrequency, and laser treatments to visibly reduce the appearance of stretch marks and improve skin texture.',
    image: 'https://images.unsplash.com/photo-1556228852-80b6e5eeff06?w=700&q=80',
    tags: ['Body Skin', 'Collagen', 'Texture'],
  },
  {
    title: 'Medical Vitiligo Treatment',
    desc: 'Advanced medical and surgical options for vitiligo including PUVA therapy, NB-UVB phototherapy, and surgical repigmentation procedures.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=700&q=80',
    tags: ['Vitiligo', 'Repigmentation', 'Medical'],
  },
]

const faqs = [
  {
    q: 'How many sessions do skin treatments typically require?',
    a: 'The number of sessions depends on the condition and treatment. Chemical peels may need 4–6 sessions, laser treatments 3–5 sessions, while Botox effects last 4–6 months. Dr. Kumar will provide a personalised treatment timeline during consultation.',
  },
  {
    q: 'Are laser treatments safe for Indian skin tones?',
    a: 'Yes, absolutely. Dr. Kumar has extensive experience treating South Asian skin types. We use appropriate laser settings and parameters specifically calibrated for darker skin tones (Fitzpatrick types IV–VI) to ensure safe, effective results.',
  },
  {
    q: 'Is there any downtime after skin treatments?',
    a: 'Downtime varies by procedure. Chemical peels may cause 3–7 days of peeling. Laser treatments can have 5–10 days of redness. Botox and fillers have minimal downtime. Non-invasive treatments like photofacial and microdermabrasion have zero downtime.',
  },
  {
    q: 'What is the best treatment for acne scars?',
    a: 'The most effective approach for acne scars combines fractional CO₂ laser resurfacing, microneedling with PRP, and chemical peels in a coordinated treatment protocol. The best option depends on scar type (ice-pick, rolling, boxcar) and severity.',
  },
  {
    q: 'Can I combine multiple skin treatments?',
    a: 'Yes, combination therapy often delivers superior results. Dr. Kumar regularly designs multi-modal treatment protocols. However, certain treatments require a gap between sessions. Your treatment plan will be carefully sequenced for maximum efficacy and safety.',
  },
]

export default function Skin() {
  const cardsRef = useRef([])

  useEffect(() => {
    cardsRef.current.forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.6, delay: (i % 4) * 0.08, scrollTrigger: { trigger: el, start: 'top 88%' } }
      )
    })
  }, [])

  return (
    <>
      <PageHero
        label="Skin Treatments"
        title={
          <>Radiant Skin,<br /><span className="italic font-light" style={{ color: 'var(--gold)' }}>Redefined</span></>
        }
        subtitle="Advanced aesthetic dermatology for acne, aging, pigmentation and beyond — personalised by Delhi's leading skin specialist."
        image="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1400&q=80"
      />

      {/* Treatments grid */}
      <section className="py-24 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-3">Our Skin Services</p>
            <h2 className="font-display text-4xl md:text-5xl text-[#1A1A1A]">
              Skin Treatments &<br />
              <span className="italic font-light text-gold-gradient">Procedures</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatments.map((t, i) => (
              <div
                key={t.title}
                ref={el => cardsRef.current[i] = el}
                className="group bg-white rounded-sm overflow-hidden card-hover opacity-0"
                style={{ border: '1px solid rgba(0,0,0,0.06)' }}
              >
                <div className="relative overflow-hidden h-44">
                  <img
                    src={t.image}
                    alt={t.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  {t.popular && (
                    <div className="absolute top-3 right-3 text-[9px] tracking-widest uppercase px-2 py-1"
                      style={{ background: 'var(--gold)', color: 'var(--obsidian)' }}>
                      Popular
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg text-[#1A1A1A] mb-2 group-hover:text-[#C9A96E] transition-colors leading-tight">
                    {t.title}
                  </h3>
                  <p className="text-[#8A8A8A] text-xs leading-relaxed mb-4 line-clamp-3">{t.desc}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {t.tags.map(tag => (
                      <span key={tag} className="text-[9px] tracking-wider px-2 py-0.5 rounded-full uppercase"
                        style={{ background: 'rgba(201,169,110,0.1)', color: 'var(--gold-dark)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="flex items-center gap-1.5 text-[#C9A96E] text-xs tracking-widest uppercase font-medium"
                  >
                    Book Now <FiArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After for skin */}
      <section className="py-24 px-6" style={{ background: 'var(--obsidian)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Real Results</p>
            <h2 className="font-display text-4xl md:text-5xl text-white">
              Skin Transformation<br />
              <span className="italic font-light" style={{ color: 'var(--gold)' }}>Gallery</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: 'Acne Scar Treatment', before: 'Before', after: 'After — 8 weeks' },
              { label: 'Pigmentation', before: 'Before', after: 'After — 6 sessions' },
              { label: 'Skin Glow', before: 'Before', after: 'After — Chemical Peel' },
            ].map((item, i) => (
              <div key={i} className="rounded-sm overflow-hidden">
                <div className="grid grid-cols-2 gap-1">
                  {[
                    'https://images.unsplash.com/photo-1620756236308-65c3ef5d25f3?w=400&q=80',
                    'https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?w=400&q=80',
                  ].map((src, j) => (
                    <div key={j} className="relative">
                      <img src={src} alt="" className="w-full aspect-square object-cover" />
                      <div className="absolute bottom-2 left-2 text-white text-[9px] tracking-wider glass-dark px-2 py-0.5">
                        {j === 0 ? item.before : item.after}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4" style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <p className="text-white/70 text-sm">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6" style={{ background: 'var(--cream)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Common Questions</p>
            <h2 className="font-display text-4xl md:text-5xl text-[#1A1A1A]">
              Skin Treatment<br />
              <span className="italic font-light text-gold-gradient">FAQs</span>
            </h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTABanner />
    </>
  )
}
