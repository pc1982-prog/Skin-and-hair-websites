import React, { useState } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'

export default function FAQAccordion({ faqs, dark = false }) {
  const [open, setOpen] = useState(0)

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`rounded-sm overflow-hidden transition-all duration-300 ${
            dark
              ? 'border border-white/10 hover:border-[#C9A96E]/30'
              : 'border border-black/8 hover:border-[#C9A96E]/40'
          }`}
        >
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            className={`w-full flex items-center justify-between px-6 py-5 text-left transition-colors duration-200 ${
              dark
                ? open === i ? 'bg-[#C9A96E]/10' : 'bg-white/5'
                : open === i ? 'bg-[#C9A96E]/8' : 'bg-white'
            }`}
          >
            <span className={`font-medium text-sm pr-4 ${dark ? 'text-white' : 'text-[#1A1A1A]'}`}>
              {faq.q}
            </span>
            <span className="shrink-0" style={{ color: 'var(--gold)' }}>
              {open === i ? <FiMinus size={16} /> : <FiPlus size={16} />}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-400 ${open === i ? 'max-h-96' : 'max-h-0'}`}
          >
            <p className={`px-6 py-4 text-sm leading-relaxed ${dark ? 'text-white/55' : 'text-[#8A8A8A]'}`}>
              {faq.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
