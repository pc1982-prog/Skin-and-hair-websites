import React from "react";
export default function PageHero({ label, title, subtitle, image, overlay = 'rgba(10,10,10,0.75)' }) {
  return (
    <section className="relative pt-40 pb-24 px-6 overflow-hidden" style={{ background: 'var(--obsidian)' }}>
      {image && (
        <div className="absolute inset-0 z-0">
          <img src={image} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0" style={{ background: overlay }} />
        </div>
      )}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {label && <p className="section-label mb-4">{label}</p>}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/50 text-base max-w-xl mx-auto leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
