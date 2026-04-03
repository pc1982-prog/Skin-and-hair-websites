import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiStar } from 'react-icons/fi'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Hair Transplant Patient',
    text: 'Dr. Amrendra Kumar is a superb doctor. The staff was amazing, and the clinic was very hygienic. The wait time was reasonable, and the consultation felt worth the fee. I\'m thrilled with my hair transplant results.',
    rating: 5,
    avatar: 'RS',
    color: '#C9A96E'
  },
  {
    name: 'Priya Mehta',
    role: 'Skin Treatment Patient',
    text: 'Clear explanation and understandable treatment plan. Acts according to betterment of patient. I\'ve been seeing Dr. Kumar for hair loss since 2024 — significant improvement in my hair condition. Thankful for his effective treatment.',
    rating: 5,
    avatar: 'PM',
    color: '#8B9E6E'
  },
  {
    name: 'Vikram Singh',
    role: 'Acne Treatment Patient',
    text: 'Dr. Amrendra Kumar is a good, easily approachable, and cooperative doctor. The clinic was clean, the staff was friendly, and the appointment process was smooth. I would definitely recommend him.',
    rating: 5,
    avatar: 'VS',
    color: '#6E8B9E'
  },
  {
    name: 'Anjali Gupta',
    role: 'Hair Regrowth Patient',
    text: 'He was welcoming and gave straightforward solutions that were easy to follow, without expensive unnecessary treatments. Dr. Kumar who explained my treatment in detail and provided the best care.',
    rating: 5,
    avatar: 'AG',
    color: '#9E6E8B'
  },
  {
    name: 'Deepak Verma',
    role: 'Laser Treatment Patient',
    text: 'Dr. Amrendra Kumar was good, listened carefully to my main problem, and discussed everything clearly. The clinic was clean, the staff polite and well-mannered. I would definitely recommend him to others.',
    rating: 5,
    avatar: 'DV',
    color: '#C9A96E'
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const cardRef = useRef(null)
  const sectionRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8,
        scrollTrigger: { trigger: titleRef.current, start: 'top 85%' }
      }
    )
  }, [])

  const goTo = (idx) => {
    if (isAnimating) return
    setIsAnimating(true)
    gsap.to(cardRef.current, {
      opacity: 0, x: -30, duration: 0.3,
      onComplete: () => {
        setCurrent(idx)
        gsap.fromTo(cardRef.current,
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, duration: 0.4, onComplete: () => setIsAnimating(false) }
        )
      }
    })
  }

  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length)
  const next = () => goTo((current + 1) % testimonials.length)

  useEffect(() => {
    const interval = setInterval(next, 5500)
    return () => clearInterval(interval)
  }, [current])

  const touchStartX = useRef(null)

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev()
    }
    touchStartX.current = null
  }

  const t = testimonials[current]

  return (
    <section ref={sectionRef} className="py-28 px-6 relative overflow-hidden" style={{ background: 'var(--cream)' }}>
      {/* BG decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 -translate-y-1/2 translate-x-1/2"
        style={{ background: 'var(--gold)' }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5 translate-y-1/2 -translate-x-1/2"
        style={{ background: 'var(--gold)' }} />

      <div className="max-w-5xl mx-auto relative z-10">
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <p className="section-label mb-3">Patient Stories</p>
          <h2 className="font-display text-4xl md:text-6xl text-[#1A1A1A]">
            What Our Patients<br />
            <span className="italic font-light text-gold-gradient">Say About Us</span>
          </h2>
        </div>

        {/* Main card */}
        <div ref={cardRef} className="relative" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <div className="bg-white rounded-sm p-8 md:p-12 shadow-sm" style={{ border: '1px solid rgba(201,169,110,0.15)' }}>
            {/* Quote */}
            <div className="font-display text-7xl leading-none mb-4" style={{ color: 'var(--gold)', opacity: 0.3 }}>"</div>

            <p className="font-display text-xl md:text-2xl text-[#2C2C2C] leading-relaxed mb-8 italic">
              {t.text}
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-medium text-sm"
                  style={{ background: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-medium text-[#1A1A1A]">{t.name}</div>
                  <div className="text-xs text-[#8A8A8A] tracking-wide">{t.role}</div>
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <FiStar key={i} size={14} fill="#C9A96E" style={{ color: 'var(--gold)' }} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Controls — dots centered only */}
        <div className="flex items-center justify-center mt-8">
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: current === i ? '32px' : '8px',
                  height: '8px',
                  background: current === i ? 'var(--gold)' : 'rgba(201,169,110,0.3)'
                }}
              />
            ))}
          </div>
        </div>

        {/* Trust badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full" style={{ border: '1px solid rgba(201,169,110,0.3)', background: 'rgba(201,169,110,0.05)' }}>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} size={12} fill="#C9A96E" style={{ color: 'var(--gold)' }} />
              ))}
            </div>
            <span className="text-xs text-[#8A8A8A]">4.5 rating · 1211 verified patients on Practo</span>
          </div>
        </div>
      </div>
    </section>
  )
}