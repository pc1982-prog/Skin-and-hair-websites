import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { FiArrowRight, FiAward } from 'react-icons/fi'

export default function Hero() {
  const heroRef    = useRef(null)
  const headingRef = useRef(null)
  const subRef     = useRef(null)
  const ctaRef     = useRef(null)
  const statsRef   = useRef(null)
  const badgeRef   = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 })
    tl.fromTo(badgeRef.current,   { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 })
      .fromTo(headingRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.3')
      .fromTo(subRef.current,     { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.4')
      .fromTo(ctaRef.current,     { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
      .fromTo(statsRef.current,   { opacity: 0 },        { opacity: 1, duration: 0.8 },        '-=0.2')
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: 'var(--obsidian)' }}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=85"
          alt="Clinic"
          className="w-full h-full object-cover opacity-35"
          style={{ objectPosition: 'center 30%' }}
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.65) 40%, rgba(10,10,10,0.85) 100%)'
        }} />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px z-10"
        style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />
      <div className="absolute top-24 left-8 w-16 h-16 opacity-10 hidden lg:block"
        style={{ border: '1px solid var(--gold)', borderRight: 'none', borderBottom: 'none' }} />
      <div className="absolute top-24 right-8 w-16 h-16 opacity-10 hidden lg:block"
        style={{ border: '1px solid var(--gold)', borderLeft: 'none', borderBottom: 'none' }} />

      <div className="relative z-10 flex-1 flex items-center justify-center w-full">
        <div className="max-w-5xl mx-auto px-6 pt-28 pb-8 w-full flex flex-col items-center text-center">

          {/* ── Badge row: AIIMS + Elfsight side by side ── */}
          <div
            ref={badgeRef}
            className="flex flex-row flex-wrap items-center justify-center gap-3 mb-10 opacity-0"
          >
            {/* AIIMS Badge */}
            <div className="flex items-center gap-1.5 px-4 py-2 rounded-full glass-dark border border-[#C9A96E]/30">
              <FiAward size={12} style={{ color: 'var(--gold)' }} />
              <span className="text-[10px] tracking-[0.25em] uppercase text-white/70">
                AIIMS Trained Dermatologist
              </span>
            </div>

            {/* Elfsight widget — same line */}
            <div
              className="elfsight-app-ddc7c118-6c5d-4ded-9fc4-a29c1c887025"
              data-elfsight-app-lazy
            ></div>
          </div>

          <h1
            ref={headingRef}
            className="font-display text-white leading-[0.95] opacity-0 mb-8 w-full"
            style={{ fontSize: 'clamp(1.8rem, 8vw, 8rem)' }}
          >
            Restore.&nbsp;
            <span style={{ color: 'var(--gold)' }}>Renew.</span>&nbsp;
            <span className="italic font-light">Reveal.</span>
          </h1>

          <div className="w-16 h-px mb-8 opacity-60" style={{ background: 'var(--gold)' }} />

          <p ref={subRef} className="text-white/55 text-base md:text-lg leading-relaxed opacity-0 max-w-xl mb-10">
            Delhi's premier Hair &amp; Skin Clinic, led by Dr. Amrendra Kumar — MD Dermatology, AIIMS.
            19 years of transforming lives through advanced hair transplant &amp; aesthetic dermatology.
          </p>

          <div ref={ctaRef} className="flex flex-wrap items-center justify-center gap-4 opacity-0">
            <Link to="/contact" className="btn-gold-solid">
              Book Consultation <FiArrowRight size={14} />
            </Link>
            <Link to="/hair" className="btn-gold">
              Explore Treatments
            </Link>
          </div>

        </div>
      </div>

      <div ref={statsRef} className="relative z-10 w-full opacity-0">
        <div className="max-w-7xl mx-auto px-4 md:px-6 pb-8">
          <div className="glass-dark rounded-sm p-5 md:p-6 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-0 md:divide-x divide-[#C9A96E]/20">
            {[
              { num: '19+',   label: 'Years Experience' },
              { num: '1211+', label: 'Happy Patients'   },
              { num: '4.5★',  label: 'Patient Rating'   },
              { num: 'AIIMS', label: 'Trained Doctor'   },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:px-8">
                <div className="font-display text-3xl md:text-4xl font-light" style={{ color: 'var(--gold)' }}>
                  {stat.num}
                </div>
                <div className="text-white/50 text-xs tracking-widest uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-24 right-8 hidden lg:flex flex-col items-center gap-3 z-10">
        <div className="text-white/30 text-[10px] tracking-[0.3em] uppercase" style={{ writingMode: 'vertical-rl' }}>
          Scroll
        </div>
        <div className="w-px h-16 relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.15)' }}>
          <div className="absolute top-0 left-0 w-full h-8 animate-bounce" style={{ background: 'var(--gold)' }} />
        </div>
      </div>
    </section>
  )
}