import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageHero from '../components/PageHero'
import BeforeAfter from '../components/BeforeAfter'
import FAQAccordion from '../components/FAQAccordion'
import CTABanner from '../components/CTABanner'
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi'
import one from "../images/Gemini_Generated_Image_nl1338nl1338nl13.png"
import LocationMap from '../components/Locationmap'

gsap.registerPlugin(ScrollTrigger)

const procedures = [
  {
    title: 'FUE Hair Transplant',
    desc: 'Follicular Unit Extraction — the gold standard in hair transplantation. Individual follicles are harvested from the donor area and implanted with precision. Minimal scarring, natural results.',
    image: one,
    points: ['Permanent results', 'No linear scar', 'Quick recovery (5–7 days)', 'Natural hairline design'],
  },
  {
    title: 'FUT Strip Method',
    desc: 'Follicular Unit Transplantation — a strip of donor hair is harvested and dissected into individual grafts. Ideal for patients requiring a higher number of grafts in a single session.',
    image: 'https://nowigs.com.au/wp-content/uploads/2024/03/FUT-Strip-Hair-Transplant-IN.jpg',
    points: ['Maximum graft count', 'High success rate', 'Proven technique', 'Cost-effective'],
  },
  {
    title: 'PRP Hair Therapy',
    desc: 'Platelet-Rich Plasma therapy uses your own blood\'s growth factors to stimulate dormant hair follicles, significantly reducing hair fall and promoting natural regrowth.',
    image: 'https://www.cliniquerevolution.com/wp-content/uploads/2019/03/prp-for-hair.jpg',
    points: ['Non-surgical', 'Natural growth factors', '3–6 sessions protocol', 'Zero downtime'],
  },
  {
    title: 'Mesotherapy for Hair',
    desc: 'Micro-injections of vitamins, minerals, and amino acids directly into the scalp to nourish hair follicles, improve circulation, and combat hair loss.',
    image: 'https://www.indiaplasticsurgery.com/wp-content/uploads/2025/04/21a699b06710cb97a571b29a3c19242b.jpg',
    points: ['Targets root cause', 'Improves scalp health', 'Visible results in 4–6 weeks', 'Minimal discomfort'],
  },
]

const benefits = [
  'Permanent, natural-looking results',
  'Performed by AIIMS-trained specialist',
  'ISHRS member — global standards',
  'State-of-the-art instruments',
  'Customised hairline design',
  'Complete pre & post-care support',
  'Transparent pricing, no hidden costs',
  '19+ years of transplant expertise',
]

const faqs = [
  {
    q: 'Am I a good candidate for hair transplant?',
    a: 'Good candidates typically have stable hair loss, sufficient donor hair, and realistic expectations. During your consultation, Dr. Kumar will assess your hair density, scalp laxity, and pattern of loss to determine the best approach.',
  },
  {
    q: 'How many grafts will I need?',
    a: 'The number of grafts depends on the extent of your hair loss (Norwood scale), the density desired, and donor availability. A typical session ranges from 1,500 to 4,000+ grafts. Dr. Kumar provides a precise estimate after examination.',
  },
  {
    q: 'Is hair transplant painful?',
    a: 'The procedure is performed under local anaesthesia, making it virtually painless during the surgery. Mild discomfort is common for 2–3 days post-procedure and is managed with prescribed medication.',
  },
  {
    q: 'When will I see final results?',
    a: 'Transplanted hair typically sheds within 2–4 weeks (a normal phase called "shock loss") before regrowing. Significant improvement is visible at 6 months; full, final results are seen at 12–18 months.',
  },
  {
    q: 'What is the success rate?',
    a: 'FUE hair transplant at Dermaclinix has an extremely high graft survival rate (95%+) when post-operative instructions are followed. Dr. Kumar\'s 14 years of specialised experience ensures consistent, natural-looking outcomes.',
  },
  {
    q: 'How much does hair transplant cost at Dermaclinix?',
    a: 'Cost depends on the number of grafts required and the technique chosen. Dermaclinix offers competitive, transparent pricing. Book a consultation (₹2,000 fee) for a personalised quote.',
  },
]

export default function Hair() {
  const proceduresRef = useRef([])
  const benefitsRef = useRef(null)

  useEffect(() => {
    proceduresRef.current.forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.7, scrollTrigger: { trigger: el, start: 'top 88%' } }
      )
    })
    gsap.fromTo(benefitsRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: benefitsRef.current, start: 'top 85%' } }
    )
  }, [])

  return (
    <>
      <PageHero
        label="Hair Treatments"
        title={
          <>Advanced Hair <br /><span className="italic font-light" style={{ color: 'var(--gold)' }}>Restoration</span></>
        }
        subtitle="From FUE hair transplant to PRP therapy — comprehensive solutions for every stage of hair loss, delivered by an AIIMS-trained specialist."
        image="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1400&q=80"
      />

      {/* Procedures */}
      <section className="py-24 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-3">Our Procedures</p>
            <h2 className="font-display text-4xl md:text-5xl text-[#1A1A1A]">
              Hair Restoration<br />
              <span className="italic font-light text-gold-gradient">Techniques</span>
            </h2>
          </div>

          <div className="space-y-16">
            {procedures.map((p, i) => (
              <div
                key={p.title}
                ref={el => proceduresRef.current[i] = el}
                className={`grid md:grid-cols-2 gap-12 items-center opacity-0 ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}
              >
                <div className={i % 2 === 1 ? 'md:[direction:ltr]' : ''}>
                  <div className="relative overflow-hidden rounded-sm group">
                    <img src={p.image} alt={p.title} className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'md:[direction:ltr]' : ''}>
                  <span className="section-label">Procedure {String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-display text-3xl md:text-4xl text-[#1A1A1A] mt-3 mb-4">{p.title}</h3>
                  <p className="text-[#8A8A8A] text-sm leading-relaxed mb-6">{p.desc}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {p.points.map(point => (
                      <div key={point} className="flex items-center gap-2">
                        <FiCheckCircle size={13} style={{ color: 'var(--gold)' }} className="shrink-0" />
                        <span className="text-[#2C2C2C] text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="btn-gold inline-flex mt-8">
                    Book Consultation <FiArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6" style={{ background: 'var(--charcoal)' }} >
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center opacity-0" ref={benefitsRef}>
            <div>
              <p className="section-label mb-4">Why Choose Us for Hair</p>
              <h2 className="font-display text-4xl md:text-5xl text-white mb-8">
                The Dermaclinix<br />
                <span className="italic font-light" style={{ color: 'var(--gold)' }}>Advantage</span>
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {benefits.map(b => (
                  <div key={b} className="flex items-center gap-3 text-white/60 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--gold)' }} />
                    {b}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-full h-full border border-[#C9A96E]/20" />
              <img
                src="https://www.hairmdindia.com/wp-content/uploads/2025/07/FUE-Hair-Transplant.webp"
                alt="Hair results"
                className="w-full rounded-sm relative z-10 aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Before/After */}
      <BeforeAfter />

      {/* FAQ */}
      <section className="py-24 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Common Questions</p>
            <h2 className="font-display text-4xl md:text-5xl text-[#1A1A1A]">
              Hair Transplant<br />
              <span className="italic font-light text-gold-gradient">FAQs</span>
            </h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>


      <CTABanner />
      <LocationMap/>
    </>
  )
}