import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { FiMenu, FiX, FiChevronDown, FiPhone } from 'react-icons/fi'

const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'About',
    dropdown: [
      { label: 'Our Story', path: '/about/our-story' },
      { label: 'Why Choose Us', path: '/about/why-us' },
      { label: 'Our Team', path: '/about/team' },
    ]
  },
  { label: 'Hair Treatments', path: '/hair' },
  { label: 'Skin Treatments', path: '/skin' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024)
  const location = useLocation()
  const mobileMenuRef = useRef(null)
  const overlayRef = useRef(null)
  const menuItemsRef = useRef([])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setDropdownOpen(false)
  }, [location])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      gsap.fromTo(overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      )
      gsap.fromTo(mobileMenuRef.current,
        { x: '100%' },
        { x: '0%', duration: 0.4, ease: 'power3.out' }
      )
      gsap.fromTo(menuItemsRef.current,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.07, delay: 0.2, ease: 'power2.out' }
      )
    } else {
      document.body.style.overflow = ''
      if (mobileMenuRef.current) {
        gsap.to(mobileMenuRef.current, { x: '100%', duration: 0.35, ease: 'power3.in' })
        gsap.to(overlayRef.current, { opacity: 0, duration: 0.3 })
      }
    }
  }, [menuOpen])

  const isActive = (path) => location.pathname === path
  const isAboutActive = location.pathname.startsWith('/about')

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none group">
            <span className="font-display text-2xl md:text-3xl font-light text-white tracking-wider">
              Derma<span style={{color: 'var(--gold)'}}>clinix</span>
            </span>
            <span className="text-[9px] tracking-[0.3em] uppercase" style={{color: 'var(--gold-light)', opacity: 0.8}}>
              Laser · Skin · Hair
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className={`flex items-center gap-1 text-sm tracking-wide transition-colors duration-200 ${
                    isAboutActive ? 'text-[#C9A96E]' : 'text-white/80 hover:text-white'
                  }`}>
                    {link.label}
                    <FiChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                      <div className="bg-[#0A0A0A]/98 backdrop-blur-xl border border-[#C9A96E]/20 rounded-sm overflow-hidden min-w-[200px] shadow-2xl">
                        {link.dropdown.map((item, i) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className={`block px-5 py-3 text-sm transition-all duration-200 border-b border-white/5 last:border-0 ${
                              isActive(item.path)
                                ? 'text-[#C9A96E] bg-[#C9A96E]/10'
                                : 'text-white/70 hover:text-white hover:bg-white/5 hover:pl-7'
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm tracking-wide transition-colors duration-200 relative group ${
                    isActive(link.path) ? 'text-[#C9A96E]' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-px bg-[#C9A96E] transition-all duration-300 ${
                    isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              )
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-2">
            <a
              href="tel:  +91 8882227080"
              className="flex items-center gap-1.5 btn-gold mr-1"
              style={isDesktop
                ? { fontSize: '0.75rem', padding: '10px 20px', letterSpacing: '0.1em' }
                : { fontSize: '10px', padding: '6px 13px', letterSpacing: '0.1em' }
              }
            >
              <FiPhone size={isDesktop ? 13 : 11} />
              <span className="hidden sm:inline">Book Appointment</span>
              <span className="sm:hidden">Book</span>
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-white p-2 relative z-[60]"
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 bg-black/60 z-40 lg:hidden ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none opacity-0'}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        ref={mobileMenuRef}
        className="fixed top-0 right-0 h-full w-[300px] bg-[#0A0A0A] z-50 lg:hidden overflow-y-auto translate-x-full"
        style={{borderLeft: '1px solid rgba(201,169,110,0.2)'}}
      >
        <div className="p-8 pt-20">
          <div className="mb-8">
            <span className="font-display text-2xl text-white">
              Derma<span style={{color: 'var(--gold)'}}>clinix</span>
            </span>
          </div>
          <div className="space-y-1">
            {navLinks.map((link, i) => (
              link.dropdown ? (
                <div key={link.label} ref={el => menuItemsRef.current[i] = el}>
                  <button
                    onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                    className="flex items-center justify-between w-full py-3 text-white/80 text-sm tracking-wide border-b border-white/10"
                  >
                    {link.label}
                    <FiChevronDown size={14} className={`transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileAboutOpen && (
                    <div className="pl-4 py-2 space-y-1">
                      {link.dropdown.map(item => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block py-2 text-sm text-[#C9A96E]/80 hover:text-[#C9A96E] tracking-wide"
                        >
                          — {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  ref={el => menuItemsRef.current[i] = el}
                  className={`block py-3 text-sm tracking-wide border-b border-white/10 transition-colors ${
                    isActive(link.path) ? 'text-[#C9A96E]' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
          <div className="mt-8">
            <a href="tel:  +91 8882227080" className="btn-gold-solid w-full justify-center text-xs py-3">
              <FiPhone size={13} /> Book Appointment
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-white/40 text-xs tracking-widest uppercase">Defence Colony, Delhi</p>
            <p className="text-[#C9A96E] text-sm mt-1">+91 8882227080</p>
          </div>
        </div>
      </div>
    </>
  )
}