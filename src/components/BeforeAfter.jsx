import  React,{ useState, useRef, useEffect, useCallback } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const cases = [
  {
    label: 'Hair Transplant',
    before: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80',
    desc: 'FUE Hair Transplant — 3500 grafts, 12 months post-procedure',
  },
  {
    label: 'Skin Rejuvenation',
    before: 'https://images.unsplash.com/photo-1556228852-80b6e5eeff06?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80',
    desc: 'Laser resurfacing & chemical peel — 8 week treatment protocol',
  },
  {
    label: 'Acne Scar Treatment',
    before: 'https://images.unsplash.com/photo-1620756236308-65c3ef5d25f3?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?w=800&q=80',
    desc: 'Microneedling + PRP + Chemical Peel combination therapy',
  },
]

function Slider({ before, after, label }) {
  const [pos, setPos] = useState(50)
  const containerRef = useRef(null)
  const isDragging = useRef(false)

  const getPos = useCallback((clientX) => {
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    return (x / rect.width) * 100
  }, [])

  const handleMouseDown = (e) => {
    isDragging.current = true
    e.preventDefault()
  }
  const handleMouseMove = useCallback((e) => {
    if (!isDragging.current) return
    setPos(getPos(e.clientX))
  }, [getPos])
  const handleMouseUp = () => { isDragging.current = false }

  const handleTouchStart = () => { isDragging.current = true }
  const handleTouchMove = useCallback((e) => {
    if (!isDragging.current) return
    setPos(getPos(e.touches[0].clientX))
  }, [getPos])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('touchmove', handleTouchMove)
    window.addEventListener('touchend', handleMouseUp)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleMouseUp)
    }
  }, [handleMouseMove, handleTouchMove])

  return (
    <div
      ref={containerRef}
      className="before-after-container relative w-full aspect-[4/3] rounded-sm overflow-hidden select-none touch-none"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {/* After (base) */}
      <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute top-3 right-3 px-3 py-1 text-[10px] tracking-widest uppercase text-white glass-dark rounded-sm z-10">
        After
      </div>

      {/* Before (clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover" style={{ width: `${10000/pos}%`, maxWidth: 'none' }} />
        <div className="absolute top-3 left-3 px-3 py-1 text-[10px] tracking-widest uppercase text-white glass-dark rounded-sm z-10">
          Before
        </div>
      </div>

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white z-20"
        style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-xl cursor-ew-resize">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M6 10H14M6 10L3 7M6 10L3 13M14 10L17 7M14 10L17 13" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default function BeforeAfter() {
  const [active, setActive] = useState(0)
  const sectionRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8,
        scrollTrigger: { trigger: titleRef.current, start: 'top 85%' }
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-28 px-4 md:px-6" style={{ background: 'var(--obsidian)' }}>
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="mb-12 opacity-0">
          <p className="section-label mb-3">Real Results</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-display text-3xl md:text-4xl lg:text-6xl text-white">
              Transformation<br />
              <span className="italic font-light" style={{ color: 'var(--gold)' }}>Gallery</span>
            </h2>
            <p className="text-white/40 text-sm max-w-xs leading-relaxed">
              Drag the slider to reveal remarkable transformations achieved at Dermaclinix.
            </p>
          </div>
        </div>

        {/* Tab selectors */}
        <div className="flex gap-1 mb-8 border-b border-white/10 pb-1 overflow-x-auto scrollbar-none">
          {cases.map((c, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-3 md:px-5 py-2.5 text-[10px] md:text-xs tracking-widest uppercase transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                active === i
                  ? 'text-[#C9A96E] border-b-2 border-[#C9A96E]'
                  : 'text-white/40 hover:text-white/70'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <Slider
            key={active}
            before={cases[active].before}
            after={cases[active].after}
            label={cases[active].label}
          />
          <div className="lg:pl-8 mt-6 lg:mt-0">
            <div className="mb-6">
              <span className="section-label">Case Study {active + 1} / {cases.length}</span>
              <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-white mt-3 mb-4">
                {cases[active].label}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{cases[active].desc}</p>
            </div>
            <div className="border-t border-white/10 pt-6 space-y-4">
              {['Natural-looking permanent results', 'Minimally invasive procedures', 'Certified AIIMS-trained surgeon', 'Post-treatment care included'].map(point => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--gold)' }} />
                  <span className="text-white/60 text-sm">{point}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-3">
              {cases.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    background: active === i ? 'var(--gold)' : 'rgba(255,255,255,0.2)',
                    transform: active === i ? 'scale(1.5)' : 'scale(1)'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}