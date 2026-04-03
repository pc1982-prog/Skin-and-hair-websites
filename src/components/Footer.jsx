import React from "react";
import  { Link } from 'react-router-dom'
import { FiPhone, FiMail, FiMapPin, FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Our Story', path: '/about/our-story' },
  { label: 'Why Choose Us', path: '/about/why-us' },
  { label: 'Our Team', path: '/about/team' },
  { label: 'Contact', path: '/contact' },
]

const services = [
  { label: 'Hair Transplant Surgery', path: '/hair' },
  { label: 'Hair Loss Treatment', path: '/hair' },
  { label: 'Laser Skin Resurfacing', path: '/skin' },
  { label: 'Anti-Aging Treatments', path: '/skin' },
  { label: 'Acne & Scar Treatment', path: '/skin' },
  { label: 'Vitiligo Treatment', path: '/skin' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--obsidian)' }}>
      {/* Gold top border */}
      <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="block mb-6">
              <span className="font-display text-3xl text-white">
                Derma<span style={{ color: 'var(--gold)' }}>clinix</span>
              </span>
              <div className="text-[9px] tracking-[0.3em] uppercase mt-0.5" style={{ color: 'var(--gold-light)', opacity: 0.7 }}>
                Laser · Skin · Hair
              </div>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              The Complete Skin and Hair Solution Centre. Led by Dr. Amrendra Kumar, MD Dermatology, AIIMS.
            </p>
            <div className="flex gap-4">
              {[
                { icon: FiInstagram, href: '#', label: 'Instagram' },
                { icon: FiFacebook, href: '#', label: 'Facebook' },
                { icon: FaWhatsapp, href: '#', label: 'WhatsApp' },
                { icon: FiYoutube, href: '#', label: 'YouTube' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center border border-white/10 text-white/40 hover:text-[#C9A96E] hover:border-[#C9A96E]/40 transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white text-xs tracking-[0.2em] uppercase mb-6 pb-2 border-b border-white/10">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/40 text-sm hover:text-[#C9A96E] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-[#C9A96E]/30 group-hover:w-6 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-xs tracking-[0.2em] uppercase mb-6 pb-2 border-b border-white/10">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s.label}>
                  <Link
                    to={s.path}
                    className="text-white/40 text-sm hover:text-[#C9A96E] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-[#C9A96E]/30 group-hover:w-6 transition-all duration-200" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Map */}
          <div>
            <h4 className="text-white text-xs tracking-[0.2em] uppercase mb-6 pb-2 border-b border-white/10">
              Contact Us
            </h4>
            <div className="space-y-4 mb-6">
              <div className="flex gap-3 items-start">
                <FiMapPin size={14} className="mt-0.5 shrink-0" style={{ color: 'var(--gold)' }} />
                <div>
                  <div className="text-white/60 text-sm">29, Block L, Lajpat Nagar 4</div>
                  <div className="text-white/40 text-xs">Ring Road, Defence Colony, Delhi</div>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <FiPhone size={14} style={{ color: 'var(--gold)' }} />
                <a href="tel:+911234567890" className="text-white/60 text-sm hover:text-[#C9A96E] transition-colors">
                  +91 12345 67890
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <FiMail size={14} style={{ color: 'var(--gold)' }} />
                <a href="mailto:info@dermaclinix.com" className="text-white/60 text-sm hover:text-[#C9A96E] transition-colors">
                  info@dermaclinix.com
                </a>
              </div>
            </div>

            {/* Map preview */}
            <div className="rounded-sm overflow-hidden border border-white/10" style={{ height: '120px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.3!2d77.2390!3d28.5750!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1f0b1b1b1b1%3A0x1b1b1b1b1b1b1b1b!2sDefence%20Colony%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="120"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dermaclinix Location"
              />
            </div>
            <div className="mt-2 text-white/30 text-xs">
              Tue, Thu–Sun: 11:00 AM – 7:00 PM
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/30 text-xs tracking-wide">
            © {new Date().getFullYear()} Dermaclinix. All Rights Reserved. Dr. Amrendra Kumar.
          </div>
          <div className="text-white/20 text-xs">
            Reg. No. 54168 Delhi Medical Council, 2011
          </div>
        </div>
      </div>
    </footer>
  )
}
