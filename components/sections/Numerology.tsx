'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

const INCLUDES = [
  { icon: '🔢', label: 'Life Path Number',     labelMr: 'जीवन मार्ग अंक',       desc: 'Your core life purpose and journey' },
  { icon: '🌟', label: 'Destiny Number',        labelMr: 'भाग्य अंक',             desc: 'Your potential and life expression' },
  { icon: '💫', label: 'Soul Urge Number',      labelMr: 'आत्मा इच्छा अंक',      desc: 'Your inner desires and motivations' },
  { icon: '📅', label: 'Personal Year Cycle',   labelMr: 'वैयक्तिक वर्ष चक्र',   desc: 'Current energies and upcoming shifts' },
  { icon: '✏️', label: 'Name Correction',       labelMr: 'नाव सुधारणा',           desc: 'Align your name with your vibration' },
  { icon: '🍀', label: 'Lucky Numbers & Colors', labelMr: 'शुभ अंक आणि रंग',      desc: 'Amplify positive energy daily' },
]

export default function NumerologySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="numerology"
      ref={ref}
      className="relative overflow-hidden py-28 px-6"
      style={{ background: 'linear-gradient(180deg, #050510 0%, #0A0800 60%, #050510 100%)' }}
    >
      {/* Gold ambient glow */}
      <div className="pointer-events-none absolute top-1/2 right-1/4 -translate-y-1/2 rounded-full"
        style={{ width: '800px', height: '800px', background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.07) 0%, transparent 65%)' }} />

      {/* Devanagari watermark — अंकशास्त्र */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-start pl-[-40px] opacity-[0.045] select-none overflow-hidden" aria-hidden>
        <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: 'clamp(100px,16vw,220px)', color: '#C9A84C', lineHeight: 1, marginLeft: '-20px', writingMode: 'vertical-rl' }}>
          अंकशास्त्र
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="order-2 lg:order-1"
          >
            {/* Label row */}
            <div className="flex items-center gap-3 mb-3">
              <p className="font-garamond uppercase" style={{ fontSize: '12px', letterSpacing: '4px', color: 'rgba(201,168,76,0.65)' }}>
                Language of the Universe
              </p>
              <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: '14px', color: 'rgba(201,168,76,0.5)' }}>· विश्वाची भाषा</span>
            </div>

            <h2 className="font-cinzel font-bold text-white mb-1" style={{ fontSize: 'clamp(28px, 4vw, 50px)', letterSpacing: '2px', lineHeight: 1.18 }}>
              Numerology
            </h2>

            {/* Marathi subtitle */}
            <p className="mb-4" style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: 'clamp(14px,1.8vw,18px)', color: 'rgba(201,168,76,0.55)', lineHeight: 1.5 }}>
              अंकांतील रहस्य उलगडा — आपले जीवन समजून घ्या
            </p>

            <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, #C9A84C, transparent)', marginBottom: '20px' }} />

            {/* Sanskrit verse box */}
            <div className="mb-6 p-4 rounded-[4px]" style={{ border: '1px solid rgba(201,168,76,0.25)', background: 'rgba(201,168,76,0.05)' }}>
              <p style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: 'clamp(16px,2vw,22px)', color: '#C9A84C', lineHeight: 1.5, marginBottom: '6px' }}>
                अंके सर्वं प्रतिष्ठितम्
              </p>
              <p className="font-garamond italic" style={{ fontSize: '13px', color: 'rgba(245,236,215,0.45)', letterSpacing: '0.5px' }}>
                &ldquo;All of existence is established in numbers&rdquo; — Vedic Wisdom
              </p>
            </div>

            <p className="font-garamond mb-5" style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: 'rgba(245,236,215,0.75)', lineHeight: 1.9 }}>
              Numbers are the fundamental language of the cosmos. Every name, every date of birth carries
              a unique vibration. <em style={{ color: '#C9A84C' }}>Numerology</em> decodes these hidden patterns
              to reveal your life&apos;s deepest blueprint — your strengths, challenges, soul purpose, and the
              timing of major life chapters.
            </p>
            <p className="font-garamond mb-8" style={{ fontSize: 'clamp(14px, 1.6vw, 17px)', color: 'rgba(245,236,215,0.45)', lineHeight: 1.9 }}>
              Using both Pythagorean and Chaldean systems, Acharya Sumit provides a comprehensive
              analysis offering practical guidance for name corrections, business naming, and aligning
              your daily choices with your highest vibration.
              <br /><br />
              <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: '0.95em', color: 'rgba(201,168,76,0.4)' }}>
                आचार्य सुमित यांच्याकडून आपल्या जीवनातील अंकांचे गूढ रहस्य जाणून घ्या.
              </span>
            </p>

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
                  style={{ border: '1px solid rgba(201,168,76,0.2)', background: 'rgba(201,168,76,0.04)' }}
                >
                  <span className="text-[18px] mt-0.5 flex-shrink-0">{icon}</span>
                  <div>
                    <div className="font-cinzel text-cream/85" style={{ fontSize: '11px' }}>{label}</div>
                    <div style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: '11px', color: 'rgba(201,168,76,0.45)', marginTop: '2px' }}>{labelMr}</div>
                    <div className="font-garamond text-cream/35 mt-1" style={{ fontSize: '11px' }}>{desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
            className="order-1 lg:order-2 flex flex-col items-center"
          >
            <div className="relative flex items-center justify-center" style={{ width: '360px', height: '360px', maxWidth: '80vw' }}>
              <NumerologyMandala />
            </div>

            {/* Price card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 rounded-[4px] px-10 py-7 text-center w-full max-w-xs"
              style={{ border: '1px solid rgba(201,168,76,0.4)', background: 'rgba(201,168,76,0.05)', boxShadow: '0 0 50px rgba(201,168,76,0.1)' }}
            >
              <p className="font-garamond uppercase mb-2" style={{ fontSize: '11px', letterSpacing: '3px', color: 'rgba(201,168,76,0.45)' }}>
                Consultation Fee · <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif" }}>सल्ला शुल्क</span>
              </p>
              <div className="font-cinzel font-bold" style={{ fontSize: '44px', color: '#C9A84C' }}>₹1,200</div>
              <p className="font-garamond mt-1" style={{ fontSize: '13px', color: 'rgba(245,236,215,0.4)' }}>
                45 min &middot; Online / In-person
              </p>
              <Link href="/booking"
                className="mt-5 inline-block font-cinzel font-semibold uppercase transition-all duration-300 hover:brightness-110"
                style={{ fontSize: '12px', letterSpacing: '2px', color: '#050510', background: 'linear-gradient(135deg, #C9A84C, #e8c96a)', padding: '12px 32px', borderRadius: '3px' }}>
                Book Session · बुक करा
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

function NumerologyMandala() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <svg width="360" height="360" viewBox="0 0 360 360" fill="none">
      <circle cx="180" cy="180" r="168" stroke="#C9A84C" strokeWidth="0.7" opacity="0.45" />
      <circle cx="180" cy="180" r="140" stroke="#C9A84C" strokeWidth="0.4" strokeDasharray="4 8" opacity="0.35" />
      <circle cx="180" cy="180" r="112" stroke="#C9A84C" strokeWidth="0.6" opacity="0.4" />
      <circle cx="180" cy="180" r="80"  stroke="#C9A84C" strokeWidth="0.3" strokeDasharray="2 4" opacity="0.3" />
      {nums.map((n, i) => {
        const angle = (i * 40 - 90) * Math.PI / 180
        return (
          <text key={n} x={180 + 155 * Math.cos(angle)} y={180 + 155 * Math.sin(angle)}
            textAnchor="middle" dominantBaseline="middle" fontSize="22" fill="#C9A84C" opacity="0.9"
            style={{ fontFamily: "'Cinzel', serif", fontWeight: '700' }}>{n}</text>
        )
      })}
      <polygon points="180,50 310,270 50,270"  fill="none" stroke="#C9A84C" strokeWidth="0.6" opacity="0.45" />
      <polygon points="180,310 50,90 310,90"   fill="none" stroke="#C9A84C" strokeWidth="0.6" opacity="0.45" />
      {[0,40,80,120,160,200,240,280,320].map((a, i) => {
        const rad = a * Math.PI / 180
        return <line key={i} x1="180" y1="180" x2={180 + 112 * Math.cos(rad)} y2={180 + 112 * Math.sin(rad)} stroke="#C9A84C" strokeWidth="0.25" opacity="0.2" />
      })}
      <text x="180" y="190" textAnchor="middle" dominantBaseline="middle" fontSize="60" fill="#C9A84C" opacity="0.85" style={{ fontFamily: 'serif' }}>∞</text>
      {[0,45,90,135,180,225,270,315].map((a, i) => {
        const rad = a * Math.PI / 180
        return <circle key={i} cx={180 + 80 * Math.cos(rad)} cy={180 + 80 * Math.sin(rad)} r="2.5" fill="#C9A84C" opacity="0.5" />
      })}
    </svg>
  )
}
