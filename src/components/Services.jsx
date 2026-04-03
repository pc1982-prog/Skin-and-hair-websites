import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiArrowRight } from 'react-icons/fi'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    category: 'Hair',
    title: 'Hair Transplant Surgery',
    desc: 'Advanced FUE & FUT techniques for natural, permanent hair restoration by an ISHRS member surgeon.',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80',
    link: '/hair',
    tag: 'Most Popular'
  },
  {
    category: 'Hair',
    title: 'Hair Loss Treatment',
    desc: 'Comprehensive trichology solutions including PRP therapy, mesotherapy & medicated treatments.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    link: '/hair',
  },
  {
    category: 'Skin',
    title: 'Laser Skin Resurfacing',
    desc: 'State-of-the-art laser technology for skin rejuvenation, scar removal & tone correction.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
    link: '/skin',
  },
  {
    category: 'Skin',
    title: 'Anti-Aging Treatments',
    desc: 'Botox, chemical peels, dermal fillers and advanced therapies to restore youthful, radiant skin.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80',
    link: '/skin',
    tag: 'Premium'
  },
  {
    category: 'Skin',
    title: 'Acne & Scar Treatment',
    desc: 'Comprehensive acne management and advanced scar revision for clear, confident skin.',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80',
    link: '/skin',
  },
  {
    category: 'Hair',
    title: 'Vitiligo Treatment',
    desc: 'Specialized medical vitiligo treatment and surgical options for skin repigmentation.',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80',
    link: '/skin',
  },
]

export default function Services() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8,
        scrollTrigger: { trigger: titleRef.current, start: 'top 85%' }
      }
    )
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 0.7, delay: (i % 3) * 0.12,
          scrollTrigger: { trigger: card, start: 'top 88%' }
        }
      )
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-28 px-6" style={{ background: 'var(--ivory)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className="mb-20 opacity-0 items-center justify-center">
          <p className="section-label mb-3">What We Offer</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-display text-4xl md:text-6xl text-[#1A1A1A]">
              Treatments &<br />
              <span className="italic font-light text-gold-gradient">Specialisations</span>
            </h2>
            <p className="text-[#8A8A8A] text-sm max-w-xs leading-relaxed">
              Comprehensive dermatological care combining clinical expertise with cutting-edge technology.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Link
              to={service.link}
              key={i}
              ref={el => cardsRef.current[i] = el}
              className="group relative rounded-sm overflow-hidden opacity-0 bg-white"
              style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.06)' }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {service.tag && (
                  <div className="absolute top-4 right-4 px-3 py-1 text-[10px] tracking-widest uppercase"
                    style={{ background: 'var(--gold)', color: 'var(--obsidian)' }}>
                    {service.tag}
                  </div>
                )}
                <div className="absolute bottom-3 left-4">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-white/70">{service.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl text-[#1A1A1A] mb-2 group-hover:text-[#C9A96E] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#8A8A8A] text-sm leading-relaxed mb-5">{service.desc}</p>
                <div className="flex items-center gap-2 text-[#C9A96E] text-xs tracking-widest uppercase font-medium">
                  Learn More
                  <FiArrowRight size={12} className="transform transition-transform duration-200 group-hover:translate-x-2" />
                </div>
              </div>

              {/* Hover border */}
              <div className="absolute inset-0 border border-[#C9A96E]/0 group-hover:border-[#C9A96E]/30 transition-all duration-300 pointer-events-none rounded-sm" />
            </Link>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-12">
          <Link to="/hair" className="btn-gold">
            View All Services <FiArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  )
}
