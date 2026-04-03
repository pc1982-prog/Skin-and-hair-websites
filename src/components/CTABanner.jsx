import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiPhone, FiArrowRight, FiCalendar } from 'react-icons/fi'

gsap.registerPlugin(ScrollTrigger)

export default function CTABanner() {
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(sectionRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' }
      }
    )
  }, [])

  return (
    <section className="py-8 px-6" style={{ background: 'var(--ivory)' }}>
      <div className="max-w-7xl mx-auto">
        <div
          ref={sectionRef}
          className="relative overflow-hidden rounded-sm opacity-0"
          style={{ background: 'var(--charcoal)' }}
        >
          {/* BG image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1400&q=80"
              alt=""
              className="w-full h-full object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#1A1A1A]/90 to-[#0A0A0A]/70" />
          </div>

          {/* Gold lines */}
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />
          <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-14">
            <div>
              <p className="section-label mb-3">Start Your Journey</p>
              <h2 className="font-display text-3xl md:text-5xl text-white leading-tight">
                Ready for Your<br />
                <span style={{ color: 'var(--gold)' }} className="italic">Transformation?</span>
              </h2>
              <p className="text-white/50 text-sm mt-4 max-w-md">
                Book a consultation with Dr. Amrendra Kumar. Available Tuesday, Thursday–Sunday 
                at Dermaclinix, Defence Colony, New Delhi.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a href="tel:+911234567890" className="btn-gold-solid flex items-center gap-2">
                <FiPhone size={14} /> Call Now
              </a>
              <Link to="/contact" className="btn-gold flex items-center gap-2">
                <FiCalendar size={14} /> Book Online
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
