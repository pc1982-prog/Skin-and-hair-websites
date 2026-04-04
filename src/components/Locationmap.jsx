import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiMapPin, FiPhone, FiMail, FiClock, FiNavigation } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const INFO = [
  {
    icon: FiMapPin,
    label: 'Address',
    lines: ['29, Block L, Lajpat Nagar 4', 'Ring Road, Defence Colony, New Delhi'],
  },
  {
    icon: FiPhone,
    label: 'Phone',
    lines: ['+91 12345 67890'],
    href: 'tel:+911234567890',
  },
  {
    icon: FiMail,
    label: 'Email',
    lines: ['info@dermaclinix.com'],
    href: 'mailto:info@dermaclinix.com',
  },
  {
    icon: FiClock,
    label: 'Hours',
    lines: ['Tue, Thu – Sun: 11:00 AM – 7:00 PM', 'Mon & Wed: Closed'],
  },
]

const MAPS_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.3!2d77.2390!3d28.5750!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1f0b1b1b1b1%3A0x1b1b1b1b1b1b1b1b!2sDefence%20Colony%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1234567890'

const DIRECTIONS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=29+Block+L+Lajpat+Nagar+4+Delhi'



export default function LocationMap() {
  const sectionRef = useRef(null)
  const leftRef   = useRef(null)
  const mapRef    = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: leftRef.current, start: 'top 85%' } }
      )
      gsap.fromTo(mapRef.current,
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: mapRef.current, start: 'top 85%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6"
     
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Section heading ── */}
        <div className="text-center mb-16">
          <p className="section-label mb-3">Find Us</p>
          <h2 className="font-display text-4xl md:text-5xl text-black">
            Visit <span className="italic font-light" style={{ color: 'var(--gold)' }}>Dermaclinix</span>
          </h2>
          <p className="text-black/40 text-sm mt-4 max-w-md mx-auto leading-relaxed">
            Located in the heart of South Delhi, easily accessible from Defence Colony and Lajpat Nagar.
          </p>
        </div>

        {/* ── Main grid ── */}
        <div className=" gap-0 rounded-sm overflow-hidden border border-white/10">

        

          {/* Right — map */}
          <div
            ref={mapRef}
            className="relative opacity-0"
            style={{ minHeight: 480 }}
          >
            <iframe
              src={MAPS_EMBED}
              width="100%"
              height="100%"
              style={{
                border: 0,
                display: 'block',
                minHeight: 480,
                filter: 'invert(90%) hue-rotate(180deg) brightness(0.85) contrast(1.1)',
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dermaclinix Location"
            />
            {/* Gold pin overlay label */}
            <div
              className="absolute bottom-5 left-5 flex items-center gap-2 px-4 py-2 text-xs"
              style={{
                background: 'rgba(10,10,10,0.85)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(201,169,110,0.3)',
                color: 'rgba(255,255,255,0.7)',
              }}
            >
              <FiMapPin size={12} style={{ color: 'var(--gold)' }} />
              Dermaclinix · Lajpat Nagar 4, New Delhi
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}