import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageHero from '../../components/PageHero'
import CTABanner from '../../components/CTABanner'

gsap.registerPlugin(ScrollTrigger)

const milestones = [
  { year: '2007', event: 'MBBS from Patna Medical College' },
  { year: '2008', event: 'Residency at AIIMS, New Delhi — India\'s top medical institute' },
  { year: '2011', event: 'MD Dermatology from AIIMS · Senior Resident at PGI Chandigarh' },
  { year: '2012', event: 'Founded Dermaclinix — The Complete Skin & Hair Solution Centre' },
  { year: '2014', event: 'Published in ACSI Textbook of Cutaneous Surgery' },
  { year: '2015', event: 'Guest Lecture at ISHRS Kuala Lumpur — International Recognition' },
  { year: '2025', event: '19+ years · 1211+ successful patients · Delhi\'s most trusted dermatologist' },
]

export default function OurStory() {
  const timelineRef = useRef(null)

  useEffect(() => {
    const items = timelineRef.current?.querySelectorAll('.timeline-item')
    items?.forEach((item, i) => {
      gsap.fromTo(item,
        { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
        {
          opacity: 1, x: 0, duration: 0.7,
          scrollTrigger: { trigger: item, start: 'top 88%' }
        }
      )
    })
  }, [])

  return (
    <>
      <PageHero
        label="About Dermaclinix"
        title={<>Our <span className="italic font-light" style={{color:'var(--gold)'}}>Story</span></>}
        subtitle="From AIIMS to Delhi's most trusted skin & hair clinic — a journey of excellence, compassion and transformation."
        image="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1400&q=80"
      />

      {/* Story intro */}
      <section className="py-24 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-4">The Beginning</p>
              <h2 className="font-display text-4xl md:text-5xl text-[#1A1A1A] mb-6">
                A Vision Born at<br />
                <span className="italic font-light text-gold-gradient">AIIMS, New Delhi</span>
              </h2>
              <p className="text-[#8A8A8A] text-sm leading-relaxed mb-4">
                Dr. Amrendra Kumar's journey began with a single conviction: that every person deserves expert, affordable, and compassionate dermatological care. After completing his MD in Dermatology from AIIMS — India's most prestigious medical institution — and gaining experience at PGI Chandigarh and Safdarjung Hospital, he founded Dermaclinix in 2012.
              </p>
              <p className="text-[#8A8A8A] text-sm leading-relaxed">
                What started as a boutique practice in Defence Colony, Delhi has grown into one of the city's most respected skin and hair clinics, serving over 1,211 patients with a 93% recommendation rate.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-3 -right-3 w-full h-full border border-[#C9A96E]/20" />
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80"
                alt="Clinic"
                className="w-full rounded-sm relative z-10 aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6" style={{ background: 'var(--obsidian)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-3">Journey</p>
            <h2 className="font-display text-4xl md:text-5xl text-white">
              Milestones of <span className="italic font-light" style={{color:'var(--gold)'}}>Excellence</span>
            </h2>
          </div>

          <div ref={timelineRef} className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block" style={{ background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)' }} />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className={`timeline-item relative flex gap-8 md:gap-0 items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="glass-dark p-6 rounded-sm inline-block w-full md:max-w-sm">
                      <div className="font-display text-2xl mb-2" style={{ color: 'var(--gold)' }}>{m.year}</div>
                      <p className="text-white/70 text-sm leading-relaxed">{m.event}</p>
                    </div>
                  </div>
                  {/* Center dot */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full" style={{ background: 'var(--gold)' }} />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
