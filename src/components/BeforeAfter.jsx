import React, { useState, useRef, useEffect, useCallback } from 'react'
import  FUETransplant from "../images/1ha.png"
import  FUETransplant1 from "../images/1h.png"
import PRPTherapy from "../images/2h.png"
import PRPTherapy1 from "../images/2ha.png"
import DHITransplant from "../images/4h.png"
import DHITransplant1 from "../images/4ha.png"
import FemaleHairLoss from "../images/3h.png"
import FemaleHairLoss1 from "../images/3ha.png"
import BeardTransplant from "../images/5h.png"
import BeardTransplant1 from "../images/5ha.png"
import AcneScars from "../images/6s.png"
import AcneScars1 from "../images/6sa.png"
import Pigmentation from "../images/7s.png"
import Pigmentation1 from "../images/7sa.png"
import AntiAgeing from "../images/8s.png"
import AntiAgeing1 from "../images/8sa.png"
import SkinBrightening from "../images/9s.png"
import SkinBrightening1 from "../images/9sa.png"





const cases = [
  // ── HAIR (5 cases) ──
  {
    category: 'Hair',
    tag: 'FUE Transplant',
    before: FUETransplant,
    after:  FUETransplant1,
    title: 'FUE Hair Transplant',
    desc: '3500 grafts — natural hairline fully restored in 12 months.',
    stats: [{ v: '3500', l: 'Grafts' }, { v: '1', l: 'Session' }, { v: '12m', l: 'Result' }],
  },
  {
    category: 'Hair',
    tag: 'PRP Therapy',
    before:  PRPTherapy,
    after:   PRPTherapy1,
    title: 'PRP Hair Regrowth',
    desc: 'Platelet-Rich Plasma injections — 70% density regrowth in 6 months.',
    stats: [{ v: '8', l: 'Sessions' }, { v: 'Monthly', l: 'Interval' }, { v: '70%', l: 'Regrowth' }],
  },
  {
    category: 'Hair',
    tag: 'DHI Transplant',
    before: DHITransplant1,
    after:  DHITransplant,
    title: 'DHI Crown Restoration',
    desc: '2800 grafts on crown thinning — dense coverage at 10 months.',
    stats: [{ v: '2800', l: 'Grafts' }, { v: '1', l: 'Session' }, { v: '10m', l: 'Result' }],
  },
  {
    category: 'Hair',
    tag: 'Female Hair Loss',
    before: FemaleHairLoss,
    after:  FemaleHairLoss1,
    title: 'Female Pattern Loss',
    desc: 'Minoxidil + Mesotherapy protocol — visible volume restored.',
    stats: [{ v: '12', l: 'Sessions' }, { v: 'Weekly', l: 'Interval' }, { v: '80%', l: 'Volume' }],
  },
  {
    category: 'Hair',
    tag: 'Beard Transplant',
    before: BeardTransplant,
    after:  BeardTransplant1,
    title: 'Beard FUE Transplant',
    desc: '1200 grafts for full, even beard coverage — 8 months result.',
    stats: [{ v: '1200', l: 'Grafts' }, { v: '1', l: 'Session' }, { v: '8m', l: 'Result' }],
  },

  // ── SKIN (5 cases) ──
  {
    category: 'Skin',
    tag: 'Acne Scars',
    before: AcneScars,
    after:  AcneScars1,
    title: 'Acne Scar Removal',
    desc: 'Microneedling + PRP combo — 90% scar reduction in 8 weeks.',
    stats: [{ v: '6', l: 'Sessions' }, { v: '8wk', l: 'Protocol' }, { v: '90%', l: 'Reduction' }],
  },
  {
    category: 'Skin',
    tag: 'Pigmentation',
    before: Pigmentation,
    after:  Pigmentation1,
    title: 'Pigmentation & Glow',
    desc: 'Laser toning + Glutathione IV — even tone and visible radiance.',
    stats: [{ v: '4', l: 'Sessions' }, { v: 'Zero', l: 'Downtime' }, { v: 'Glow', l: 'Result' }],
  },
  {
    category: 'Skin',
    tag: 'Anti-Ageing',
    before: AntiAgeing,
    after:  AntiAgeing1,
    title: 'Anti-Ageing Lift',
    desc: 'HIFU + Fillers + Collagen Booster — 5-year visible age reversal.',
    stats: [{ v: '3', l: 'Sessions' }, { v: '45min', l: 'Per Visit' }, { v: '5yr', l: 'Reverse' }],
  },
  {
    category: 'Skin',
    tag: 'Skin Brightening',
    before: SkinBrightening,
    after:  SkinBrightening1,
    title: 'Skin Brightening',
    desc: 'Chemical peel series — tan removal and glass-skin glow achieved.',
    stats: [{ v: '5', l: 'Peels' }, { v: '3wk', l: 'Gap' }, { v: 'Glow', l: 'Result' }],
  },
 
]

function SliderCard({ item }) {
  const [pos, setPos] = useState(50)
  const containerRef = useRef(null)
  const isDragging = useRef(false)

  const getPos = useCallback((clientX) => {
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(2, Math.min(clientX - rect.left, rect.width - 2))
    return (x / rect.width) * 100
  }, [])

  const onMouseDown = (e) => { isDragging.current = true; e.preventDefault() }
  const onMouseMove = useCallback((e) => { if (isDragging.current) setPos(getPos(e.clientX)) }, [getPos])
  const onMouseUp = () => { isDragging.current = false }
  const onTouchStart = () => { isDragging.current = true }
  const onTouchMove = useCallback((e) => { if (isDragging.current) setPos(getPos(e.touches[0].clientX)) }, [getPos])

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('touchend', onMouseUp)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onMouseUp)
    }
  }, [onMouseMove, onTouchMove])

  const catColor = item.category === 'Hair' ? '#A78BFA' : '#C9A96E'

  return (
    <div style={styles.card}>
      <span style={{ ...styles.catPill, background: `${catColor}22`, color: catColor, borderColor: `${catColor}44` }}>
        {item.category}
      </span>

      <div ref={containerRef} style={styles.sliderWrap} onMouseDown={onMouseDown} onTouchStart={onTouchStart}>
        <img src={item.after} alt="After" style={styles.imgBase} draggable={false} />
        <span style={{ ...styles.badge, right: 10 }}>AFTER</span>

        <div style={{ ...styles.clipWrap, width: `${pos}%` }}>
          <img src={item.before} alt="Before" draggable={false}
            style={{ ...styles.imgBase, width: `${10000 / pos}%`, maxWidth: 'none' }} />
          <span style={{ ...styles.badge, left: 10 }}>BEFORE</span>
        </div>

        <div style={{ ...styles.divider, left: `${pos}%` }}>
          <div style={styles.handle}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M6 10H14M6 10L3 7M6 10L3 13M14 10L17 7M14 10L17 13"
                stroke="#0A0A0A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        
      </div>

      <div style={styles.cardBody}>
        <span style={{ ...styles.tag, color: catColor, borderColor: `${catColor}33` }}>{item.tag}</span>
        <h3 style={styles.cardTitle}>{item.title}</h3>
        <p style={styles.cardDesc}>{item.desc}</p>
        <div style={styles.statsRow}>
          {item.stats.map((s, i) => (
            <div key={i} style={{ ...styles.statItem, borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
              <span style={{ ...styles.statValue, color: catColor }}>{s.v}</span>
              <span style={styles.statLabel}>{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function BeforeAfter() {
  const [filter, setFilter] = useState('All')
  const trackRef = useRef(null)
  const autoRef = useRef(null)
  const isPaused = useRef(false)

  const filtered = filter === 'All' ? cases : cases.filter(c => c.category === filter)

  const startAuto = useCallback(() => {
    clearInterval(autoRef.current)
    autoRef.current = setInterval(() => {
      if (isPaused.current || !trackRef.current) return
      const t = trackRef.current
      const maxScroll = t.scrollWidth - t.clientWidth
      t.scrollLeft >= maxScroll - 10
        ? t.scrollTo({ left: 0, behavior: 'smooth' })
        : t.scrollBy({ left: 318, behavior: 'smooth' })
    }, 3200)
  }, [])

  useEffect(() => {
    startAuto()
    return () => clearInterval(autoRef.current)
  }, [startAuto, filter])

  const pause = () => { isPaused.current = true }
  const resume = () => { isPaused.current = false }

  const scrollBy = (dir) => {
    isPaused.current = true
    trackRef.current?.scrollBy({ left: dir * 318, behavior: 'smooth' })
    setTimeout(() => { isPaused.current = false }, 3000)
  }

  return (
    <section style={styles.section}>
      {/* Centred heading */}
      <div style={styles.headingWrap}>
        <p style={styles.sectionLabel}>Real Results</p>
        <h2 style={styles.heading}>
          Transformation<br />
          <em style={styles.headingItalic}>Gallery</em>
        </h2>
        <p style={styles.clinicName}>Dermaclinix.</p>
      </div>

      {/* Filter + arrows */}
      <div style={styles.controls}>
        <div style={styles.tabs}>
          {['All', 'Hair', 'Skin'].map(f => (
            <button key={f} onClick={() => { setFilter(f); pause(); setTimeout(resume, 500) }}
              style={{ ...styles.tab, color: filter === f ? '#C9A96E' : 'rgba(255,255,255,0.35)',
                borderBottom: filter === f ? '2px solid #C9A96E' : '2px solid transparent' }}>
              {f}
            </button>
          ))}
        </div>
        <div style={styles.arrowRow}>
          <button style={styles.arrowBtn} onClick={() => scrollBy(-1)}>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M13 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
          </button>
          <button style={styles.arrowBtn} onClick={() => scrollBy(1)}>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>

      {/* Scroll track */}
      <div ref={trackRef} style={styles.track}
        onMouseEnter={pause} onMouseLeave={resume}
        onTouchStart={pause} onTouchEnd={() => setTimeout(resume, 2000)}>
        {filtered.map((item, i) => <SliderCard key={`${filter}-${i}`} item={item} />)}
      </div>

      <style>{`
        @media (max-width: 600px) { .ba-card { min-width: 86vw !important; } }
      `}</style>
    </section>
  )
}

const GOLD = '#C9A96E'

const styles = {
  section: { background: '#0A0A0A', padding: '80px 24px 100px', fontFamily: "'DM Sans', sans-serif", overflow: 'hidden' },
  headingWrap: { textAlign: 'center', marginBottom: 44 },
  sectionLabel: { fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: GOLD, margin: '0 0 10px' },
  heading: { fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2.2rem, 5.5vw, 4rem)', color: '#fff', fontWeight: 400, lineHeight: 1.08, margin: '0 0 12px' },
  headingItalic: { fontStyle: 'italic', fontWeight: 300, color: GOLD },
  clinicName: { fontSize: 13, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.2)', margin: 0, textTransform: 'uppercase' },
  controls: { maxWidth: 1280, margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 4px 4px', borderBottom: '1px solid rgba(255,255,255,0.07)' },
  tabs: { display: 'flex', gap: 4 },
  tab: { background: 'none', border: 'none', padding: '8px 18px', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.25s', borderRadius: 0 },
  arrowRow: { display: 'flex', gap: 8 },
  arrowBtn: { width: 34, height: 34, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.15)', background: 'transparent', color: 'rgba(255,255,255,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s' },
  track: { maxWidth: 1280, margin: '0 auto', display: 'flex', gap: 18, overflowX: 'auto', scrollSnapType: 'x mandatory', paddingBottom: 8, WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' },
  card: { position: 'relative', minWidth: 290, maxWidth: 310, flex: '0 0 300px', background: '#141414', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)', scrollSnapAlign: 'start' },
  catPill: { position: 'absolute', top: 8, right: 8, zIndex: 30, fontSize: 8.5, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '3px 9px', borderRadius: 20, border: '1px solid', pointerEvents: 'none' },
  sliderWrap: { position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden', userSelect: 'none', touchAction: 'none', cursor: 'col-resize', background: '#1a1a1a' },
  imgBase: { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' },
  badge: { position: 'absolute', top: 9, padding: '3px 9px', fontSize: 8.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#fff', background: 'rgba(0,0,0,0.55)', borderRadius: 3, zIndex: 10, pointerEvents: 'none' },
  clipWrap: { position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 2 },
  divider: { position: 'absolute', top: 0, bottom: 0, width: 2, background: '#fff', transform: 'translateX(-50%)', zIndex: 20, pointerEvents: 'none' },
  handle: { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 36, height: 36, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 14px rgba(0,0,0,0.4)', cursor: 'ew-resize', pointerEvents: 'all' },
  dragHint: { position: 'absolute', bottom: 9, left: '50%', transform: 'translateX(-50%)', fontSize: 9, color: 'rgba(255,255,255,0.5)', background: 'rgba(0,0,0,0.5)', borderRadius: 20, padding: '3px 10px', whiteSpace: 'nowrap', pointerEvents: 'none', zIndex: 15 },
  cardBody: { padding: '16px 18px 20px' },
  tag: { display: 'inline-block', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', border: '1px solid', borderRadius: 3, padding: '3px 9px', marginBottom: 9 },
  cardTitle: { fontFamily: "'DM Serif Display', serif", fontSize: 17, fontWeight: 400, color: '#fff', margin: '0 0 7px' },
  cardDesc: { fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65, margin: '0 0 14px' },
  statsRow: { display: 'flex', borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 12 },
  statItem: { flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 },
  statValue: { fontSize: 14, fontWeight: 600 },
  statLabel: { fontSize: 8.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)' },
}