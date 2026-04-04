import React from "react";
import  { Link } from 'react-router-dom'
import { FiPhone, FiMail, FiMapPin, FiInstagram, FiFacebook, FiYoutube, FiLinkedin, FiTwitter } from 'react-icons/fi'
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
                { icon: FiTwitter, href: 'https://twitter.com/Practo', label: 'Twitter' },
                { icon: FiFacebook, href: 'https://www.facebook.com/practo', label: 'Facebook' },
                { icon: FiLinkedin, href: 'https://www.linkedin.com/company/practo-technologies-pvt-ltd', label: 'Linkedin' },
                { icon: FiYoutube, href: 'https://www.youtube.com/user/PractoSupport', label: 'YouTube' },
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

            <div className="mt-2 text-white/30 text-xs">
              Tue, Thu–Sun: 11:00 AM – 7:00 PM
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/30 text-xs tracking-wide">
            © {new Date().getFullYear()} Dermaclinix. All Rights Reserved. Built by{' '}
            <a
              href="https://www.strategixworks.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C9A96E] transition-colors duration-200"
              style={{ color: 'var(--gold)', opacity: 0.7 }}
            >
              Strategix
            </a>
          </div>
          <div className="text-white/20 text-xs">
            Reg. No. 54168 Delhi Medical Council, 2011
          </div>
        </div>
      </div>
    </footer>
  )
}