'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

const DIRECTIONS = [
  { dir: 'N',  angle: 270, color: '#4A90D9', element: 'Water · जल',   benefit: 'Career & Opportunities' },
  { dir: 'NE', angle: 315, color: '#E8D5A3', element: 'Space · आकाश', benefit: 'Wisdom & Spirituality' },
  { dir: 'E',  angle: 0,   color: '#5CB85C', element: 'Wood · वायु',   benefit: 'Health & Beginnings' },
  { dir: 'SE', angle: 45,  color: '#FF6B1A', element: 'Fire · अग्नि',  benefit: 'Wealth & Prosperity' },
]

const INCLUDES = [
  { icon: '🏠', label: 'Full Home / Office Analysis', labelMr: 'घर / कार्यालय विश्लेषण' },
  { icon: '🧭', label: 'Direction & Zone Mapping',    labelMr: 'दिशा व क्षेत्र नकाशा' },
  { icon: '🔥', label: 'Five Elements Balance',       labelMr: 'पंचमहाभूत संतुलन' },
  { icon: '🚪', label: 'Entrance & Bedroom Guide',    labelMr: 'प्रवेशद्वार व शयनकक्ष' },
  { icon: '🍳', label: 'Kitchen & Study Setup',       labelMr: 'स्वयंपाकघर व अभ्यासकक्ष' },
  { icon: '🛠️', label: 'Simple Practical Remedies',  labelMr: 'सोपे व व्यावहारिक उपाय' },
]

export default function VastuSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="vastu" ref={ref} className="relative overflow-hidden py-28 px-6"
      style={{ background: 'linear-gradient(180deg, #050510 0%, #020D06 60%, #050510 100%)' }}>

      <div className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 rounded-full"
        style={{ width: '800px', height: '800px', background: 'radial-gradient(ellipse at center, rgba(45,122,79,0.09) 0%, transparent 65%)' }} />

      {/* Devanagari watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-end overflow-hidden opacity-[0.04] select-none" aria-hidden>
        <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: 'clamp(100px,14vw,200px)', color: '#2D7A4F', lineHeight: 1, writingMode: 'vertical-rl', marginRight: '-20px' }}>
          वास्तुशास्त्र
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT — Visual */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }} className="flex flex-col items-center">

            <div className="relative flex items-center justify-center" style={{ width: '340px', height: '340px', maxWidth: '80vw' }}>
              <VastuMandala />
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 rounded-[4px] px-8 py-6 text-center w-full max-w-xs"
              style={{ border: '1px solid rgba(45,122,79,0.45)', background: 'rgba(45,122,79,0.06)', boxShadow: '0 0 50px rgba(45,122,79,0.12)' }}>
              <p style={{ fontSize: '10px', letterSpacing: '3px', color: 'rgba(201,168,76,0.45)', textTransform: 'uppercase', marginBottom: '8px' }}>
                Consultation Fee · <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif" }}>सल्ला शुल्क</span>
              </p>
              <div className="font-cinzel font-bold" style={{ fontSize: '44px', color: '#3d9963' }}>₹2,500</div>
              <p style={{ fontSize: '13px', color: 'rgba(245,236,215,0.4)', marginTop: '4px' }}>90 min · Site visit / Online</p>
              <Link href="/booking"
                className="mt-5 inline-block font-cinzel font-semibold uppercase transition-all duration-300 hover:brightness-125"
                style={{ fontSize: '12px', letterSpacing: '2px', color: '#fff', background: 'linear-gradient(135deg, #2D7A4F, #3d9963)', padding: '12px 32px', borderRadius: '3px' }}>
                Book Session · बुक करा
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT — Content */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.15 }}>

            <p className="font-cinzel uppercase mb-1" style={{ fontSize: '11px', letterSpacing: '4px', color: 'rgba(61,153,99,0.85)' }}>
              Ancient Architecture Science · <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", letterSpacing: 0 }}>वास्तुशास्त्र</span>
            </p>
            <h2 className="font-cinzel font-bold text-white mb-1" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', letterSpacing: '2px', lineHeight: 1.1 }}>
              Vastu Shastra
            </h2>
            <p className="mb-5" style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: 'clamp(15px,1.8vw,19px)', color: 'rgba(61,153,99,0.7)' }}>
              घराची ऊर्जा, जीवनाची शक्ती — वास्तूने बदला आपले भाग्य
            </p>
            <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, #2D7A4F, transparent)', marginBottom: '20px' }} />

            {/* Sanskrit quote */}
            <div className="mb-6 p-4 rounded-[4px]" style={{ border: '1px solid rgba(45,122,79,0.25)', background: 'rgba(45,122,79,0.06)' }}>
              <p style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: 'clamp(17px,2vw,24px)', color: '#C9A84C', lineHeight: 1.4, marginBottom: '6px' }}>
                वास्तुना सुखमाप्नोति
              </p>
              <p style={{ fontSize: '13px', color: 'rgba(245,236,215,0.45)', fontStyle: 'italic' }}>
                "One attains happiness and prosperity through Vastu" — Mānasāra
              </p>
            </div>

            <p className="mb-6" style={{ fontSize: 'clamp(15px, 1.7vw, 18px)', color: 'rgba(245,236,215,0.7)', lineHeight: 1.8 }}>
              Vastu Shastra aligns the energies of your home or workplace with the five elements
              (<em style={{ color: 'rgba(61,153,99,0.8)' }}>Pancha Bhuta · पंचमहाभूत</em>) and cosmic directions.
              Most corrections require no structural changes — simple practical remedies can transform
              the energy of any space.
            </p>

            {/* Directions mini reference */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              {DIRECTIONS.map(({ dir, color, element, benefit }) => (
                <div key={dir} className="flex items-center gap-3 p-3 rounded-[3px]"
                  style={{ border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-cinzel font-bold"
                    style={{ background: `${color}18`, border: `1px solid ${color}50`, color, fontSize: '11px' }}>{dir}</div>
                  <div>
                    <div style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: '11px', color: 'rgba(245,236,215,0.7)' }}>{element}</div>
                    <div style={{ fontSize: '11px', color: 'rgba(245,236,215,0.35)' }}>{benefit}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* What's Included */}
            <div className="mb-2 flex items-center gap-3">
              <h3 className="font-cinzel font-bold text-white" style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase' }}>What&apos;s Included</h3>
              <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: '13px', color: 'rgba(201,168,76,0.5)' }}>· काय मिळते</span>
            </div>
            <div style={{ width: '100%', height: '1px', background: 'rgba(45,122,79,0.3)', marginBottom: '16px' }} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {INCLUDES.map(({ icon, label, labelMr }, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.4 + i * 0.08 }}
                  className="flex items-center gap-4 p-4 rounded-[4px]"
                  style={{ border: '1px solid rgba(45,122,79,0.3)', background: 'rgba(45,122,79,0.07)' }}>
                  <span className="text-[28px] flex-shrink-0 leading-none">{icon}</span>
                  <div>
                    <div className="font-cinzel text-white" style={{ fontSize: '12.5px', fontWeight: 600, letterSpacing: '0.3px', lineHeight: 1.3 }}>{label}</div>
                    <div style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: '12px', color: 'rgba(61,153,99,0.65)', marginTop: '3px' }}>{labelMr}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

function VastuMandala() {
  const dirs = [
    { label: 'N', angle: 270, color: '#4A90D9' }, { label: 'NE', angle: 315, color: '#E8D5A3' },
    { label: 'E', angle: 0,   color: '#5CB85C' }, { label: 'SE', angle: 45,  color: '#FF6B1A' },
    { label: 'S', angle: 90,  color: '#D9534F' }, { label: 'SW', angle: 135, color: '#A0522D' },
    { label: 'W', angle: 180, color: '#AAAAAA' }, { label: 'NW', angle: 225, color: '#888888' },
  ]
  return (
    <svg width="340" height="340" viewBox="0 0 380 380" fill="none">
      <circle cx="190" cy="190" r="178" stroke="#2D7A4F" strokeWidth="0.8" opacity="0.5" />
      <circle cx="190" cy="190" r="155" stroke="#C9A84C" strokeWidth="0.4" strokeDasharray="3 7" opacity="0.4" />
      <rect x="48" y="48" width="284" height="284" stroke="#2D7A4F" strokeWidth="0.8" opacity="0.45" />
      <rect x="80" y="80" width="220" height="220" stroke="#C9A84C" strokeWidth="0.4" strokeDasharray="4 4" opacity="0.3" />
      {[128, 190, 252].map(v => (
        <g key={v}>
          <line x1={v} y1="48" x2={v} y2="332" stroke="#2D7A4F" strokeWidth="0.3" opacity="0.3" />
          <line x1="48" y1={v} x2="332" y2={v} stroke="#2D7A4F" strokeWidth="0.3" opacity="0.3" />
        </g>
      ))}
      {dirs.map(({ label, angle, color }) => {
        const rad = angle * Math.PI / 180
        return <text key={label} x={190 + 164 * Math.cos(rad)} y={190 + 164 * Math.sin(rad)}
          textAnchor="middle" dominantBaseline="middle" fontSize="15" fill={color} opacity="0.9"
          style={{ fontFamily: "'Cinzel', serif", fontWeight: '700' }}>{label}</text>
      })}
      <line x1="190" y1="48" x2="190" y2="332" stroke="#2D7A4F" strokeWidth="0.4" opacity="0.3" />
      <line x1="48" y1="190" x2="332" y2="190" stroke="#2D7A4F" strokeWidth="0.4" opacity="0.3" />
      <text x="190" y="200" textAnchor="middle" dominantBaseline="middle" fontSize="52" fill="#C9A84C" opacity="0.75"
        style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif" }}>ॐ</text>
    </svg>
  )
}
