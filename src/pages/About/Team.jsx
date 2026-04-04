import React from "react"
import PageHero from '../../components/PageHero'
import CTABanner from '../../components/CTABanner'
import { FiLinkedin, FiMail } from 'react-icons/fi'

const team = [
  {
    name: 'Dr. Amrendra Kumar',
    role: 'Director & Co-Founder',
    specialty: 'Hair Transplant Surgeon · Dermatologist',
    image: 'https://www.dermaclinix.in/team/img/Dr._Amrendra_Kumar.webp',
    qual: 'MBBS, MD – Dermatology (AIIMS)',
    tags: ['Hair Transplant', 'Trichology', 'Laser', 'Vitiligo'],
  },
  {
    name: 'Dr. Kavish Chauhan',
    role: 'Director & Co-Founder',
    specialty: 'Dermatologist · Hair Transplant Surgeon',
    image: 'https://dermaclinix.in/team/img/Dr_Kavish_Chouhan.webp',
    qual: 'MBBS, MD – Dermatology (AIIMS), MISHRS (USA)',
    tags: ['FUE', 'Hair Transplant', 'Megasession'],
  },
  {
    name: 'Dr. Neha Taneja',
    role: 'Consultant',
    specialty: 'Cosmetic Dermatology · Skin Treatments',
    image: 'https://www.dermaclinix.in/images/our-team3.png',
    qual: 'MD – Dermatology (AIIMS), New Delhi',
    tags: ['Skin Care', 'Laser', 'Anti-Aging'],
  },
  {
    name: 'Dr. Ariganesh',
    role: 'Director – Chennai Branch',
    specialty: 'Dermatologist · Hair Specialist',
    image: 'https://www.dermaclinix.in/images/our-team4.png',
    qual: 'MD – Dermatology (PGIMER)',
    tags: ['Dermatology', 'Hair Loss', 'Trichology'],
  },
]

const cardStyles = `
  .team-doctor-card {
    background: #fff;
    border-radius: 14px;
    overflow: hidden;
    border: 0.5px solid rgba(0,0,0,0.07);
    transition: transform 0.3s ease;
    cursor: pointer;
  }
  .team-doctor-card:hover {
    transform: translateY(-5px);
  }
  .team-card-img-wrap {
    position: relative;
    height: 230px;
    overflow: hidden;
    background: #e8f0ee;
  }
  .team-card-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    transition: transform 0.55s ease;
  }
  .team-doctor-card:hover .team-card-img-wrap img {
    transform: scale(1.05);
  }
  .team-card-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.38) 0%, transparent 60%);
  }
  .team-social-row {
    position: absolute;
    bottom: 12px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    gap: 8px;
    opacity: 0;
    transform: translateY(6px);
    transition: all 0.3s ease;
  }
  .team-doctor-card:hover .team-social-row {
    opacity: 1;
    transform: translateY(0);
  }
  .team-social-btn {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(255,255,255,0.15);
    border: 0.5px solid rgba(255,255,255,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s;
    color: white;
    text-decoration: none;
  }
  .team-social-btn:hover {
    background: #C9A96E;
  }
  .team-role-pill {
    display: inline-block;
    font-size: 9px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #C9A96E;
    background: rgba(201,169,110,0.1);
    border: 0.5px solid rgba(201,169,110,0.3);
    border-radius: 20px;
    padding: 3px 10px;
    margin-bottom: 8px;
    font-weight: 500;
  }
  .team-card-divider {
    height: 0.5px;
    background: rgba(0,0,0,0.07);
    margin: 10px 0;
  }
  .team-tag {
    font-size: 9px;
    letter-spacing: 1px;
    text-transform: uppercase;
    background: rgba(201,169,110,0.08);
    color: #b08940;
    padding: 3px 8px;
    border-radius: 20px;
    font-weight: 500;
  }
`

export default function Team() {
  return (
    <>
      <style>{cardStyles}</style>

      <PageHero
        label="Our Team"
        title={<>Meet Our <span className="italic font-light" style={{ color: 'var(--gold)' }}>Specialists</span></>}
        subtitle="A dedicated team of experienced dermatologists and skin specialists committed to your transformation."
        image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&q=80"
      />

      {/* Team grid */}
      <section className="py-24 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-6xl mx-auto">

          {/* Section heading */}
          <div className="text-center mb-14">
            <p className="section-label mb-3">Our Experts</p>
            <h2 className="font-display text-4xl md:text-5xl" style={{ color: 'var(--obsidian)' }}>
              Meet Our{' '}
              <span className="italic font-light" style={{ color: 'var(--gold)' }}>Specialists</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="team-doctor-card">

                {/* Image */}
                <div className="team-card-img-wrap">
                  <img
                    src={member.image}
                    alt={member.name}
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80'
                    }}
                  />
                  <div className="team-card-overlay" />
                
                </div>

                {/* Content */}
                <div style={{ padding: '18px 20px 20px' }}>
                  <div className="team-role-pill">{member.role}</div>

                  <h3
                    className="font-display transition-colors"
                    style={{ fontSize: '18px', color: 'var(--obsidian)', margin: '0 0 4px', lineHeight: 1.2 }}
                    onMouseEnter={e => e.currentTarget.style.color = '#C9A96E'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--obsidian)'}
                  >
                    {member.name}
                  </h3>

                  <div style={{ fontSize: '11px', color: '#8A8A8A', marginBottom: '4px' }}>
                    {member.qual}
                  </div>

                  <div className="team-card-divider" />

                  <div style={{ fontSize: '11px', color: '#8A8A8A', marginBottom: '10px', lineHeight: 1.5 }}>
                    {member.specialty}
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                    {member.tags.map(tag => (
                      <span key={tag} className="team-tag">{tag}</span>
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
              'https://www.dermaclinix.in/images/about-clinic-banner.jpg',
           
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