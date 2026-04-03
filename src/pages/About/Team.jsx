import React from "react"
import  PageHero from '../../components/PageHero'
import CTABanner from '../../components/CTABanner'
import { FiLinkedin, FiMail } from 'react-icons/fi'

const team = [
  {
    name: 'Dr. Amrendra Kumar',
    role: 'Director & Founder',
    specialty: 'Hair Transplant Surgeon · Dermatologist',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80',
    qual: 'MBBS, MD – Dermatology (AIIMS)',
    bio: 'Dr. Amrendra Kumar is a Consultant Dermatologist with 19 years of experience. He holds an MD in Dermatology from AIIMS and is a member of ISHRS and IADVL. He specialises in hair transplantation and vitiligo surgery.',
    tags: ['Hair Transplant', 'Trichology', 'Laser', 'Vitiligo'],
  },
  {
    name: 'Dr. Priya Sinha',
    role: 'Senior Dermatologist',
    specialty: 'Cosmetic Dermatology · Anti-Aging',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80',
    qual: 'MBBS, DNB – Dermatology',
    bio: 'Dr. Priya Sinha specialises in cosmetic and aesthetic dermatology, with a focus on anti-aging treatments, chemical peels, and laser skin rejuvenation procedures.',
    tags: ['Botox', 'Chemical Peels', 'Skin Glow', 'Anti-Aging'],
  },
  {
    name: 'Dr. Rohit Verma',
    role: 'Cosmetologist',
    specialty: 'Acne · Pigmentation · Laser',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=600&q=80',
    qual: 'MBBS, DDVL',
    bio: 'Dr. Rohit Verma focuses on medical dermatology including acne management, pigmentation treatment, and laser procedures. He brings precision and patient-centric care to every consultation.',
    tags: ['Acne', 'Pigmentation', 'Laser', 'Dermatology'],
  },
]

export default function Team() {
  return (
    <>
      <PageHero
        label="Our Team"
        title={<>Meet Our <span className="italic font-light" style={{ color: 'var(--gold)' }}>Specialists</span></>}
        subtitle="A dedicated team of experienced dermatologists and skin specialists committed to your transformation."
        image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&q=80"
      />

      {/* Team grid */}
      <section className="py-24 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="group bg-white rounded-sm overflow-hidden card-hover"
                style={{ border: '1px solid rgba(0,0,0,0.06)' }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {/* Social icons overlay */}
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#" className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#C9A96E] transition-colors">
                      <FiLinkedin size={13} />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#C9A96E] transition-colors">
                      <FiMail size={13} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="font-display text-xl text-[#1A1A1A] group-hover:text-[#C9A96E] transition-colors">
                      {member.name}
                    </h3>
                    <div className="text-xs tracking-widest uppercase mt-1" style={{ color: 'var(--gold)' }}>
                      {member.role}
                    </div>
                    <div className="text-[#8A8A8A] text-xs mt-0.5">{member.qual}</div>
                  </div>
                  <p className="text-[#8A8A8A] text-sm leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-[10px] tracking-wider px-2.5 py-1 rounded-full uppercase"
                        style={{ background: 'rgba(201,169,110,0.1)', color: 'var(--gold-dark)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic environment */}
      <section className="py-24 px-6" style={{ background: 'var(--obsidian)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Our Clinic</p>
            <h2 className="font-display text-4xl md:text-5xl text-white">
              A Space Designed for<br />
              <span className="italic font-light" style={{ color: 'var(--gold)' }}>Your Comfort</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80',
              'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80',
              'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
              'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80',
              'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80',
              'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80',
            ].map((src, i) => (
              <div key={i} className="overflow-hidden rounded-sm aspect-square group">
                <img
                  src={src}
                  alt={`Clinic ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
