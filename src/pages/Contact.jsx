import React, { useRef, useState } from 'react'
import PageHero from '../components/PageHero'
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheckCircle } from 'react-icons/fi'
import LocationMap from '../components/Locationmap'

const info = [
  {
    icon: FiMapPin,
    label: 'Clinic Address',
    value: '29, Block L, Lajpat Nagar 4, Ring Road',
    sub: 'Near Andrews Ganj Bus Stop, Defence Colony, Delhi – 110024',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+91 8882227080',
    sub: 'Available during clinic hours',
    href: 'tel:+911234567890',
  },
  {
    icon: FiMail,
    label: 'Email',
    value: 'info@dermaclinix.com',
    sub: 'We respond within 24 hours',
    href: 'mailto:info@dermaclinix.com',
  },
  {
    icon: FiClock,
    label: 'Clinic Hours',
    value: 'Tue, Thu – Sun: 11:00 AM – 7:00 PM',
    sub: 'Monday & Wednesday: Closed',
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', treatment: '', message: '' })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        label="Get In Touch"
        title={<>Book Your <span className="italic font-light" style={{ color: 'var(--gold)' }}>Consultation</span></>}
        subtitle="Take the first step towards your transformation. Dr. Amrendra Kumar and the Dermaclinix team are ready to guide you."
        image="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1400&q=80"
      />

      {/* Contact section */}
      <section className="py-24 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Left — form */}
            <div>
              <p className="section-label mb-4">Send a Message</p>
              <h2 className="font-display text-4xl text-[#1A1A1A] mb-8">
                We'd Love to<br />
                <span className="italic font-light text-gold-gradient">Hear From You</span>
              </h2>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center border border-[#C9A96E]/30 rounded-sm" style={{ background: 'rgba(201,169,110,0.05)' }}>
                  <FiCheckCircle size={48} style={{ color: 'var(--gold)' }} className="mb-4" />
                  <h3 className="font-display text-2xl text-[#1A1A1A] mb-2">Message Sent!</h3>
                  <p className="text-[#8A8A8A] text-sm max-w-xs">
                    Thank you for reaching out. Dr. Kumar's team will contact you within 24 hours to confirm your consultation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-[#8A8A8A] mb-2">Full Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 bg-white border border-black/10 focus:border-[#C9A96E] outline-none text-sm transition-colors rounded-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-[#8A8A8A] mb-2">Phone Number</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 bg-white border border-black/10 focus:border-[#C9A96E] outline-none text-sm transition-colors rounded-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[#8A8A8A] mb-2">Email Address *</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-white border border-black/10 focus:border-[#C9A96E] outline-none text-sm transition-colors rounded-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[#8A8A8A] mb-2">Treatment of Interest</label>
                    <select
                      name="treatment"
                      value={form.treatment}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-black/10 focus:border-[#C9A96E] outline-none text-sm transition-colors rounded-sm text-[#2C2C2C]"
                    >
                      <option value="">Select a treatment...</option>
                      <optgroup label="Hair">
                        <option>Hair Transplant (FUE)</option>
                        <option>Hair Transplant (FUT)</option>
                        <option>PRP Hair Therapy</option>
                        <option>Mesotherapy</option>
                        <option>Hair Loss Consultation</option>
                      </optgroup>
                      <optgroup label="Skin">
                        <option>Laser Resurfacing</option>
                        <option>Chemical Peel</option>
                        <option>Botox & Fillers</option>
                        <option>Acne Treatment</option>
                        <option>Pigmentation</option>
                        <option>Vitiligo Treatment</option>
                      </optgroup>
                      <option>General Dermatology Consultation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs tracking-widests uppercase text-[#8A8A8A] mb-2">Your Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Briefly describe your concern or question..."
                      className="w-full px-4 py-3 bg-white border border-black/10 focus:border-[#C9A96E] outline-none text-sm transition-colors resize-none rounded-sm"
                    />
                  </div>
                  <button type="submit" className="btn-gold-solid w-full justify-center py-4">
                    <FiSend size={14} /> Send Message
                  </button>
                  <p className="text-[#8A8A8A] text-xs text-center">
                    Consultation fee: ₹2,000 · Available on Practo · Slots fill quickly
                  </p>
                </form>
              )}
            </div>

            {/* Right — info + map */}
            <div>
           
              <h2 className="font-display text-4xl text-[#1A1A1A] mb-8">
                Visit<br />
                <span className="italic font-light text-gold-gradient">Dermaclinix</span>
              </h2>

              {/* Info cards */}
              <div className="space-y-4 mb-8">
                {info.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="flex gap-4 p-4 bg-white rounded-sm border border-black/6">
                      <div className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(201,169,110,0.1)', color: 'var(--gold)' }}>
                        <Icon size={16} />
                      </div>
                      <div>
                        <div className="text-[10px] tracking-widest uppercase text-[#8A8A8A] mb-0.5">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} className="text-[#1A1A1A] text-sm font-medium hover:text-[#C9A96E] transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-[#1A1A1A] text-sm font-medium">{item.value}</div>
                        )}
                        <div className="text-[#8A8A8A] text-xs mt-0.5">{item.sub}</div>
                      </div>
                    </div>
                  )
                })}
              </div>

            
            </div>
          </div>
        </div>
        <LocationMap/>
      </section>
    </>
  )
}
