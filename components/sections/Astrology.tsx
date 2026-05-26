'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

const ZODIAC_SIGNS = ['♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓']

const INCLUDES = [
  { icon: '🪐', label: 'Birth Chart (Kundali) Analysis',   labelMr: 'जन्मकुंडली विश्लेषण',    desc: 'A precise map of planets at your birth moment' },
  { icon: '⏳', label: 'Planetary Period (Dasha) Reading', labelMr: 'दशा विश्लेषण',            desc: 'Understand which cosmic energies rule your cycles' },
  { icon: '💼', label: 'Career & Financial Insights',      labelMr: 'करिअर व आर्थिक मार्गदर्शन', desc: 'Navigate opportunities with celestial guidance' },
  { icon: '❤️', label: 'Relationship Compatibility',       labelMr: 'विवाह जुळवणी',             desc: 'Synastry charts for deep relationship clarity' },
  { icon: '⏰', label: 'Auspicious Timing (Muhurta)',      labelMr: 'शुभ मुहूर्त',              desc: 'Choose the right moment for important decisions' },
  { icon: '💎', label: 'Remedies & Gemstone Guidance',    labelMr: 'उपाय व रत्न मार्गदर्शन',   desc: 'Practical tools to harmonise planetary energies' },
]

export default function AstrologySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="astrology"
      ref={ref}
      className="relative overflow-hidden py-28 px-6"
      style={{ background: 'linear-gradient(180deg, #050510 0%, #0D0520 60%, #050510 100%)' }}
    >
      {/* Purple radial glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ width: '900px', height: '900px', background: 'radial-gradient(ellipse at center, rgba(123,63,212,0.1) 0%, transparent 65%)' }} />

      {/* Devanagari watermark — ज्योतिष */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-end pr-[-60px] opacity-[0.055] select-none overflow-hidden" aria-hidden>
        <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: 'clamp(180px,25vw,340px)', color: '#7B3FD4', lineHeight: 1, marginRight: '-40px' }}>
          ज्योतिष
        </span>
      </div>

      {/* Faint zodiac ring — far right */}
      <div className="pointer-events-none absolute top-1/2 right-[-180px] -translate-y-1/2 opacity-[0.06]" style={{ width: '640px', height: '640px' }}>
        <ZodiacRingSvg size={640} />
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
              <div className="absolute inset-0"><ZodiacRingSvg size={380} /></div>
              <div className="relative z-10 flex flex-col items-center" style={{ filter: 'drop-shadow(0 0 40px rgba(123,63,212,0.7))' }}>
                <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: '96px', color: '#C9A84C', lineHeight: 1 }}>ॐ</span>
                <span className="font-cinzel uppercase mt-2" style={{ fontSize: '11px', letterSpacing: '4px', color: 'rgba(201,168,76,0.45)' }}>
                  Jyotish Shastra
                </span>
              </div>
            </div>

            {/* Price card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 rounded-[4px] px-10 py-7 text-center w-full max-w-xs"
              style={{ border: '1px solid rgba(123,63,212,0.4)', background: 'rgba(123,63,212,0.07)', boxShadow: '0 0 50px rgba(123,63,212,0.12)' }}
            >
              <p className="font-garamond uppercase mb-2" style={{ fontSize: '11px', letterSpacing: '3px', color: 'rgba(201,168,76,0.45)' }}>
                Consultation Fee · <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif" }}>सल्लामसलत शुल्क</span>
              </p>
              <div className="font-cinzel font-bold" style={{ fontSize: '44px', color: '#7B3FD4' }}>₹1,500</div>
              <p className="font-garamond mt-1" style={{ fontSize: '13px', color: 'rgba(245,236,215,0.4)' }}>
                60 min &middot; Online / In-person
              </p>
              <Link href="/booking"
                className="mt-5 inline-block font-cinzel font-semibold uppercase transition-all duration-300 hover:brightness-125"
                style={{ fontSize: '12px', letterSpacing: '2px', color: '#fff', background: 'linear-gradient(135deg, #7B3FD4, #9B59B6)', padding: '12px 32px', borderRadius: '3px' }}>
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
              <p className="font-garamond uppercase" style={{ fontSize: '12px', letterSpacing: '4px', color: 'rgba(123,63,212,0.85)' }}>
                Sacred Science of Light
              </p>
              <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: '14px', color: 'rgba(123,63,212,0.6)' }}>· ज्योतिषशास्त्र</span>
            </div>

            <h2 className="font-cinzel font-bold text-white mb-1" style={{ fontSize: 'clamp(28px, 4vw, 50px)', letterSpacing: '2px', lineHeight: 1.18 }}>
              Vedic Astrology
            </h2>

            {/* Marathi subtitle */}
            <p className="mb-4" style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: 'clamp(14px,1.8vw,18px)', color: 'rgba(201,168,76,0.55)', lineHeight: 1.5 }}>
              ग्रहांचे ज्ञान, जीवनाचा प्रकाश
            </p>

            <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, #7B3FD4, transparent)', marginBottom: '20px' }} />

            {/* Sanskrit verse box */}
            <div className="mb-6 p-4 rounded-[4px]" style={{ border: '1px solid rgba(123,63,212,0.25)', background: 'rgba(123,63,212,0.06)' }}>
              <p style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: 'clamp(16px,2vw,22px)', color: '#C9A84C', lineHeight: 1.5, marginBottom: '6px' }}>
                ज्योतिषं वेदानां चक्षुः
              </p>
              <p className="font-garamond italic" style={{ fontSize: '13px', color: 'rgba(245,236,215,0.45)', letterSpacing: '0.5px' }}>
                &ldquo;Astrology is the eye of the Vedas&rdquo; — Vedāṅga Jyotiṣa
              </p>
            </div>

            <p className="font-garamond mb-5" style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: 'rgba(245,236,215,0.75)', lineHeight: 1.9 }}>
              Vedic astrology — <em style={{ color: '#C9A84C' }}>Jyotish Shastra</em> — is one of the oldest
              predictive systems on earth. By studying the precise positions of the sun, moon, and planets
              at the exact moment of your birth, Acharya Sumit reveals the patterns and karmic signatures
              woven into your destiny.
            </p>
            <p className="font-garamond mb-8" style={{ fontSize: 'clamp(14px, 1.6vw, 17px)', color: 'rgba(245,236,215,0.45)', lineHeight: 1.9 }}>
              Unlike Western astrology, the Vedic system uses the sidereal zodiac — aligned with actual
              astronomical positions — making it extraordinarily precise. Each session is a deeply personal,
              confidential conversation that illuminates your past, clarifies your present, and guides your future.
            </p>

            <h3 className="font-cinzel font-semibold text-white mb-4" style={{ fontSize: '13px', letterSpacing: '2.5px', textTransform: 'uppercase' }}>
              What&apos;s Included · <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: '13px', fontWeight: 400, letterSpacing: 0 }}>काय समाविष्ट आहे</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {INCLUDES.map(({ icon, label, labelMr, desc }, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.09 }}
                  className="flex items-start gap-3 p-3 rounded-[3px]"
                  style={{ border: '1px solid rgba(123,63,212,0.2)', background: 'rgba(123,63,212,0.04)' }}
                >
                  <span className="text-[18px] mt-0.5 flex-shrink-0">{icon}</span>
                  <div>
                    <div className="font-cinzel text-cream/85" style={{ fontSize: '11px', letterSpacing: '0.3px' }}>{label}</div>
                    <div style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: '11px', color: 'rgba(201,168,76,0.45)', marginTop: '2px' }}>{labelMr}</div>
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

function ZodiacRingSvg({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 400 400" fill="none">
      <circle cx="200" cy="200" r="190" stroke="#7B3FD4" strokeWidth="0.8" opacity="0.7" />
      <circle cx="200" cy="200" r="168" stroke="#C9A84C" strokeWidth="0.4" strokeDasharray="3 7" opacity="0.5" />
      <circle cx="200" cy="200" r="145" stroke="#7B3FD4" strokeWidth="0.5" opacity="0.5" />
      <circle cx="200" cy="200" r="120" stroke="#C9A84C" strokeWidth="0.3" strokeDasharray="2 5" opacity="0.35" />
      {['♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓'].map((sign, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180)
        const lx1 = 200 + 155 * Math.cos(angle), ly1 = 200 + 155 * Math.sin(angle)
        const lx2 = 200 + 190 * Math.cos(angle), ly2 = 200 + 190 * Math.sin(angle)
        return (
          <g key={i}>
            <line x1={lx1} y1={ly1} x2={lx2} y2={ly2} stroke="#7B3FD4" strokeWidth="0.5" opacity="0.55" />
            <text x={200 + 178 * Math.cos(angle)} y={200 + 178 * Math.sin(angle)}
              textAnchor="middle" dominantBaseline="middle" fontSize="15" fill="#C9A84C" opacity="0.9" style={{ fontFamily: 'serif' }}>{sign}</text>
          </g>
        )
      })}
      {[0,60,120,180,240,300].map(a => {
        const rad = (a - 90) * Math.PI / 180
        return <line key={a} x1={200 + 145 * Math.cos(rad)} y1={200 + 145 * Math.sin(rad)}
          x2={200 + 168 * Math.cos(rad)} y2={200 + 168 * Math.sin(rad)} stroke="#C9A84C" strokeWidth="0.6" opacity="0.5" />
      })}
    </svg>
  )
}
