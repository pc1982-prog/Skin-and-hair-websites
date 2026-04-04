import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiStar } from 'react-icons/fi'

gsap.registerPlugin(ScrollTrigger)

export default function Testimonials() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const widgetRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8,
        scrollTrigger: { trigger: titleRef.current, start: 'top 85%' }
      }
    )

    gsap.fromTo(widgetRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.8, delay: 0.2,
        scrollTrigger: { trigger: widgetRef.current, start: 'top 90%' }
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="py-28 px-6 relative overflow-hidden" style={{ background: 'var(--cream)' }}>
      {/* BG decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 -translate-y-1/2 translate-x-1/2"
        style={{ background: 'var(--gold)' }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5 translate-y-1/2 -translate-x-1/2"
        style={{ background: 'var(--gold)' }} />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section heading */}
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <p className="section-label mb-3">Patient Stories</p>
          <h2 className="font-display text-4xl md:text-6xl text-[#1A1A1A]">
            What Our Patients<br />
            <span className="italic font-light text-gold-gradient">Say About Us</span>
          </h2>
        </div>

        {/* Elfsight Google Reviews Widget */}
        <div ref={widgetRef} className="opacity-0">
          <div
            className="elfsight-app-c311fdfa-7ea9-46c4-a6ef-7943beca88f8"
            data-elfsight-app-lazy
          />
        </div>

       
      </div>
    </section>
  )
}