import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiAward, FiArrowRight } from 'react-icons/fi'

gsap.registerPlugin(ScrollTrigger)

const credentials = [
  { label: 'Education', value: 'MBBS · MD Dermatology, AIIMS New Delhi' },
  { label: 'Speciality', value: 'Hair Transplant Surgeon · Trichologist · Cosmetologist' },
  { label: 'Experience', value: '19 Years Overall · 14 Years as Specialist' },
  { label: 'Memberships', value: 'ISHRS · IADVL · MIHRS' },
]

const awards = [
  'Young Dermatologist Award — 2010',
  'Faculty — AHRS 2014',
  'Guest Lecture ISHRS Kuala Lumpur — 2015',
  'Lecture IADVL DSB — 2014',
]

export default function DoctorSection() {
  const sectionRef = useRef(null)
  const imgRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(imgRef.current,
      { opacity: 0, x: -60 },
      {
        opacity: 1, x: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
      }
    )
    gsap.fromTo(contentRef.current,
      { opacity: 0, x: 60 },
      {
        opacity: 1, x: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="py-28 px-6 relative overflow-hidden" style={{ background: 'var(--obsidian)' }}>
      {/* Gold mesh bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, var(--gold) 0%, transparent 50%), radial-gradient(circle at 80% 50%, var(--gold-dark) 0%, transparent 50%)'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div ref={imgRef} className="relative opacity-0">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#C9A96E]/20 rounded-sm" />
              <div className="relative overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=85"
                  alt="Dr. Amrendra Kumar"
                  className="w-full aspect-[6/5] object-cover"
                  style={{ objectPosition: 'center top' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -right-6 top-1/3 glass-dark p-5 rounded-sm max-w-[180px]">
                <div className="font-display text-3xl text-white mb-1">93%</div>
                <div className="text-white/50 text-xs leading-relaxed">Patient recommendation rate</div>
              </div>
              {/* Bottom name plate */}
              <div className="absolute bottom-0 left-0 right-0 p-6 glass-dark">
                <div className="font-display text-2xl text-white">Dr. Amrendra Kumar</div>
                <div className="text-[#C9A96E] text-xs tracking-widest uppercase mt-1">
                  Founder & Director, Dermaclinix
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div ref={contentRef} className="opacity-0">
            <p className="section-label mb-4">Meet the Doctor</p>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6 leading-tight">
              Delhi's Most Trusted<br />
              <span style={{ color: 'var(--gold)' }} className="italic">Hair & Skin Specialist</span>
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              Dr. Amrendra Kumar is a Consultant Dermatologist and Hair Transplant Surgeon with MD Dermatology from AIIMS, New Delhi. 
              As Director & Founder of Dermaclinix, he brings 19 years of expertise, having performed thousands of successful hair transplant and skin procedures.
              A member of ISHRS and published author of international hair transplant textbooks.
            </p>

            {/* Credentials */}
            <div className="space-y-4 mb-8">
              {credentials.map((c) => (
                <div key={c.label} className="flex gap-4 border-b border-white/10 pb-4">
                  <div className="text-[10px] tracking-widest uppercase text-[#C9A96E] min-w-[90px] pt-0.5">{c.label}</div>
                  <div className="text-white/70 text-sm">{c.value}</div>
                </div>
              ))}
            </div>

            {/* Awards */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <FiAward size={14} style={{ color: 'var(--gold)' }} />
                <span className="text-[#C9A96E] text-xs tracking-widest uppercase">Awards & Recognition</span>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {awards.map(a => (
                  <div key={a} className="flex items-center gap-2 text-white/50 text-xs">
                    <span style={{ color: 'var(--gold)' }}>—</span> {a}
                  </div>
                ))}
              </div>
            </div>

            <Link to="/about/our-story" className="btn-gold inline-flex">
              Full Profile <FiArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
