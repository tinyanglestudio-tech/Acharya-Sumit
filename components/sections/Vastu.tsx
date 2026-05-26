'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

const DIRECTIONS = [
  { dir: 'N',  angle: 270, color: '#4A90D9', element: 'Water · जल',  benefit: 'Career & Opportunities' },
  { dir: 'NE', angle: 315, color: '#E8D5A3', element: 'Space · आकाश', benefit: 'Wisdom & Spirituality' },
  { dir: 'E',  angle: 0,   color: '#5CB85C', element: 'Wood · वायु',  benefit: 'Health & New Beginnings' },
  { dir: 'SE', angle: 45,  color: '#FF6B1A', element: 'Fire · अग्नि', benefit: 'Wealth & Prosperity' },
]

const INCLUDES = [
  { icon: '🏠', label: 'Full Home/Office Analysis',  labelMr: 'घर/कार्यालय विश्लेषण',     desc: 'Room-by-room energy assessment' },
  { icon: '🧭', label: 'Direction & Zone Mapping',   labelMr: 'दिशा व क्षेत्र नकाशा',     desc: 'Precise 16-zone Vastu analysis' },
  { icon: '🔥', label: 'Five Elements Balance',      labelMr: 'पंचमहाभूत संतुलन',          desc: 'Earth, Water, Fire, Air & Space' },
  { icon: '🚪', label: 'Entrance & Bedroom Guide',   labelMr: 'प्रवेशद्वार व शयनकक्ष',     desc: 'Optimise the most critical spaces' },
  { icon: '🍳', label: 'Kitchen & Study Setup',      labelMr: 'स्वयंपाकघर व अभ्यासकक्ष',   desc: 'Align cooking & learning areas' },
  { icon: '🛠️', label: 'Simple Practical Remedies', labelMr: 'सोपे व व्यावहारिक उपाय',    desc: 'No major construction required' },
]

export default function VastuSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="vastu"
      ref={ref}
      className="relative overflow-hidden py-28 px-6"
      style={{ background: 'linear-gradient(180deg, #050510 0%, #020D06 60%, #050510 100%)' }}
    >
      {/* Green earth glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 rounded-full"
        style={{ width: '800px', height: '800px', background: 'radial-gradient(ellipse at center, rgba(45,122,79,0.09) 0%, transparent 65%)' }} />

      {/* Devanagari watermark — वास्तुशास्त्र */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-end opacity-[0.04] select-none overflow-hidden" aria-hidden>
        <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: 'clamp(100px,14vw,200px)', color: '#2D7A4F', lineHeight: 1, writingMode: 'vertical-rl', marginRight: '-20px' }}>
          वास्तुशास्त्र
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex flex-col items-center"
          >
            <div className="relative flex items-center justify-center" style={{ width: '380px', height: '380px', maxWidth: '80vw' }}>
              <VastuMandala />
            </div>

            {/* Price card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 rounded-[4px] px-10 py-7 text-center w-full max-w-xs"
              style={{ border: '1px solid rgba(45,122,79,0.45)', background: 'rgba(45,122,79,0.06)', boxShadow: '0 0 50px rgba(45,122,79,0.12)' }}
            >
              <p className="font-garamond uppercase mb-2" style={{ fontSize: '11px', letterSpacing: '3px', color: 'rgba(201,168,76,0.45)' }}>
                Consultation Fee · <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif" }}>सल्ला शुल्क</span>
              </p>
              <div className="font-cinzel font-bold" style={{ fontSize: '44px', color: '#3d9963' }}>₹2,500</div>
              <p className="font-garamond mt-1" style={{ fontSize: '13px', color: 'rgba(245,236,215,0.4)' }}>
                90 min &middot; Site visit / Online
              </p>
              <Link href="/booking"
                className="mt-5 inline-block font-cinzel font-semibold uppercase transition-all duration-300 hover:brightness-125"
                style={{ fontSize: '12px', letterSpacing: '2px', color: '#fff', background: 'linear-gradient(135deg, #2D7A4F, #3d9963)', padding: '12px 32px', borderRadius: '3px' }}>
                Book Session · बुक करा
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT — Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
          >
            {/* Label row */}
            <div className="flex items-center gap-3 mb-3">
              <p className="font-garamond uppercase" style={{ fontSize: '12px', letterSpacing: '4px', color: 'rgba(61,153,99,0.85)' }}>
                Ancient Architecture Science
              </p>
              <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: '14px', color: 'rgba(61,153,99,0.6)' }}>· वास्तुशास्त्र</span>
            </div>

            <h2 className="font-cinzel font-bold text-white mb-1" style={{ fontSize: 'clamp(28px, 4vw, 50px)', letterSpacing: '2px', lineHeight: 1.18 }}>
              Vastu Shastra
            </h2>

            {/* Marathi subtitle */}
            <p className="mb-4" style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: 'clamp(14px,1.8vw,18px)', color: 'rgba(61,153,99,0.6)', lineHeight: 1.5 }}>
              घराची ऊर्जा, जीवनाची शक्ती — वास्तूने बदला आपले भाग्य
            </p>

            <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, #2D7A4F, transparent)', marginBottom: '20px' }} />

            {/* Sanskrit verse box */}
            <div className="mb-6 p-4 rounded-[4px]" style={{ border: '1px solid rgba(45,122,79,0.25)', background: 'rgba(45,122,79,0.06)' }}>
              <p style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: 'clamp(16px,2vw,22px)', color: '#C9A84C', lineHeight: 1.5, marginBottom: '6px' }}>
                वास्तुना सुखमाप्नोति
              </p>
              <p className="font-garamond italic" style={{ fontSize: '13px', color: 'rgba(245,236,215,0.45)', letterSpacing: '0.5px' }}>
                &ldquo;One attains happiness and prosperity through Vastu&rdquo; — Mānasāra
              </p>
            </div>

            <p className="font-garamond mb-5" style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: 'rgba(245,236,215,0.75)', lineHeight: 1.9 }}>
              <em style={{ color: '#C9A84C' }}>Vastu Shastra</em> is the 5,000-year-old Vedic science of harmonious
              living. It aligns the energies of your home or workplace with the natural forces of the universe —
              the five elements (<em style={{ color: 'rgba(61,153,99,0.8)' }}>Pancha Bhuta · पंचमहाभूत</em>),
              directional energies, and the rhythms of the cosmos.
            </p>
            <p className="font-garamond mb-6" style={{ fontSize: 'clamp(14px, 1.6vw, 17px)', color: 'rgba(245,236,215,0.45)', lineHeight: 1.9 }}>
              Most corrections require no structural changes; simple, practical remedies can transform the
              energy of any space. <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", color: 'rgba(201,168,76,0.4)' }}>वास्तू दोष दूर करा, जीवन सुखी करा.</span>
            </p>

            {/* Directions reference */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              {DIRECTIONS.map(({ dir, color, element, benefit }) => (
                <div key={dir} className="flex items-center gap-3 p-3 rounded-[3px]"
                  style={{ border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-cinzel font-bold"
                    style={{ background: `${color}18`, border: `1px solid ${color}50`, color, fontSize: '11px' }}>{dir}</div>
                  <div>
                    <div style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: '11px', color: 'rgba(245,236,215,0.7)' }}>{element}</div>
                    <div className="font-garamond text-cream/35 text-[11px]">{benefit}</div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="font-cinzel font-semibold text-white mb-4" style={{ fontSize: '13px', letterSpacing: '2.5px', textTransform: 'uppercase' }}>
              What&apos;s Included · <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: '13px', fontWeight: 400, letterSpacing: 0 }}>काय मिळते</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {INCLUDES.map(({ icon, label, labelMr, desc }, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.09 }}
                  className="flex items-start gap-3 p-3 rounded-[3px]"
                  style={{ border: '1px solid rgba(45,122,79,0.25)', background: 'rgba(45,122,79,0.05)' }}
                >
                  <span className="text-[18px] mt-0.5 flex-shrink-0">{icon}</span>
                  <div>
                    <div className="font-cinzel text-cream/85" style={{ fontSize: '11px' }}>{label}</div>
                    <div style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: '11px', color: 'rgba(61,153,99,0.55)', marginTop: '2px' }}>{labelMr}</div>
                    <div className="font-garamond text-cream/35 mt-1" style={{ fontSize: '11px' }}>{desc}</div>
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
    <svg width="380" height="380" viewBox="0 0 380 380" fill="none">
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
        return (
          <text key={label} x={190 + 164 * Math.cos(rad)} y={190 + 164 * Math.sin(rad)}
            textAnchor="middle" dominantBaseline="middle" fontSize="15" fill={color} opacity="0.9"
            style={{ fontFamily: "'Cinzel', serif", fontWeight: '700' }}>{label}</text>
        )
      })}
      <line x1="190" y1="48" x2="190" y2="332" stroke="#2D7A4F" strokeWidth="0.4" opacity="0.3" />
      <line x1="48" y1="190" x2="332" y2="190" stroke="#2D7A4F" strokeWidth="0.4" opacity="0.3" />
      <text x="190" y="200" textAnchor="middle" dominantBaseline="middle" fontSize="52" fill="#C9A84C" opacity="0.75"
        style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif" }}>ॐ</text>
    </svg>
  )
}
