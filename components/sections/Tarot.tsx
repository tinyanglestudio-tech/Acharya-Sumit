'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

const INCLUDES = [
  { icon: '🃏', label: '3-Card & Celtic Cross Spreads', labelMr: 'तीन पत्ते व सेल्टिक क्रॉस' },
  { icon: '💼', label: 'Career & Financial Guidance',   labelMr: 'करिअर व आर्थिक मार्गदर्शन' },
  { icon: '❤️', label: 'Love & Relationship Insights',  labelMr: 'प्रेम व नाते विश्लेषण' },
  { icon: '🧱', label: 'Obstacle Identification',       labelMr: 'अडथळे शोधणे' },
  { icon: '✨', label: 'Spiritual Path Insights',       labelMr: 'आध्यात्मिक मार्ग' },
  { icon: '📋', label: 'Actionable Guidance',           labelMr: 'व्यावहारिक मार्गदर्शन' },
]

const CARDS = [
  { rotate: -30, label: 'The Moon',  symbol: '☽' },
  { rotate: -15, label: 'The Star',  symbol: '★' },
  { rotate: 0,   label: 'The Sun',   symbol: '☀' },
  { rotate: 15,  label: 'Strength',  symbol: '♾' },
  { rotate: 30,  label: 'Justice',   symbol: '⚖' },
]

export default function TarotSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="tarot" ref={ref} className="relative overflow-hidden py-28 px-6"
      style={{ background: 'linear-gradient(180deg, #050510 0%, #0D0205 60%, #050510 100%)' }}>

      {/* Crimson glow */}
      <div className="pointer-events-none absolute top-1/2 right-1/3 -translate-y-1/2 rounded-full"
        style={{ width: '800px', height: '800px', background: 'radial-gradient(ellipse at center, rgba(139,26,26,0.11) 0%, transparent 65%)' }} />

      {/* Devanagari watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-start opacity-[0.05] select-none overflow-hidden" aria-hidden>
        <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: 'clamp(160px,22vw,300px)', color: '#8B1A1A', lineHeight: 1, marginLeft: '-20px' }}>
          तारोट
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT — Content */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}>

            <p className="font-cinzel uppercase mb-1" style={{ fontSize: '11px', letterSpacing: '4px', color: 'rgba(178,34,34,0.85)' }}>
              Ancient Wisdom Cards · <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", letterSpacing: 0 }}>तारोट ज्ञान</span>
            </p>
            <h2 className="font-cinzel font-bold text-white mb-1" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', letterSpacing: '2px', lineHeight: 1.1 }}>
              Tarot Reading
            </h2>
            <p className="mb-5" style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: 'clamp(15px,1.8vw,19px)', color: 'rgba(178,34,34,0.65)' }}>
              मनाचा आरसा, भविष्याचा दीप — पत्त्यांत उत्तरे शोधा
            </p>
            <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, #8B1A1A, transparent)', marginBottom: '20px' }} />

            {/* Sanskrit quote */}
            <div className="mb-6 p-4 rounded-[4px]" style={{ border: '1px solid rgba(139,26,26,0.3)', background: 'rgba(139,26,26,0.06)' }}>
              <p style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: 'clamp(17px,2vw,24px)', color: '#C9A84C', lineHeight: 1.4, marginBottom: '6px' }}>
                दैवं बलवत् — सर्वस्य दैवमेव परायणम्
              </p>
              <p style={{ fontSize: '13px', color: 'rgba(245,236,215,0.45)', fontStyle: 'italic' }}>
                &ldquo;Destiny is powerful — all things depend upon it ultimately&rdquo; — Mahābhārata
              </p>
            </div>

            <p className="mb-6" style={{ fontSize: 'clamp(15px, 1.7vw, 18px)', color: 'rgba(245,236,215,0.7)', lineHeight: 1.8 }}>
              Tarot is a profound mirror for your subconscious wisdom. Each of the 78 cards carries
              centuries of archetypal symbolism — through expertly guided spreads, Acharya Sumit helps
              you gain clarity on love, career, and your highest path.
            </p>

            {/* What's Included */}
            <div className="mb-2 flex items-center gap-3">
              <h3 className="font-cinzel font-bold text-white" style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase' }}>What&apos;s Included</h3>
              <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: '13px', color: 'rgba(201,168,76,0.5)' }}>· काय मिळते</span>
            </div>
            <div style={{ width: '100%', height: '1px', background: 'rgba(139,26,26,0.3)', marginBottom: '16px' }} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {INCLUDES.map(({ icon, label, labelMr }, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.4 + i * 0.08 }}
                  className="flex items-center gap-4 p-4 rounded-[4px]"
                  style={{ border: '1px solid rgba(139,26,26,0.3)', background: 'rgba(139,26,26,0.07)' }}>
                  <span className="text-[28px] flex-shrink-0 leading-none">{icon}</span>
                  <div>
                    <div className="font-cinzel text-white" style={{ fontSize: '12.5px', fontWeight: 600, letterSpacing: '0.3px', lineHeight: 1.3 }}>{label}</div>
                    <div style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: '12px', color: 'rgba(201,168,76,0.6)', marginTop: '3px' }}>{labelMr}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Visual */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
            className="flex flex-col items-center">

            <div className="relative flex items-center justify-center" style={{ width: '380px', height: '380px', maxWidth: '80vw' }}>
              <TarotVisual cards={CARDS} />
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 rounded-[4px] px-8 py-6 text-center w-full max-w-xs"
              style={{ border: '1px solid rgba(139,26,26,0.45)', background: 'rgba(139,26,26,0.06)', boxShadow: '0 0 50px rgba(139,26,26,0.12)' }}>
              <p style={{ fontSize: '10px', letterSpacing: '3px', color: 'rgba(201,168,76,0.45)', textTransform: 'uppercase', marginBottom: '8px' }}>
                Consultation Fee · <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif" }}>सल्ला शुल्क</span>
              </p>
              <div className="font-cinzel font-bold" style={{ fontSize: '44px', color: '#B22222' }}>₹800</div>
              <p style={{ fontSize: '13px', color: 'rgba(245,236,215,0.4)', marginTop: '4px' }}>30 min · Online / In-person</p>
              <Link href="/booking"
                className="mt-5 inline-block font-cinzel font-semibold uppercase transition-all duration-300 hover:brightness-125"
                style={{ fontSize: '12px', letterSpacing: '2px', color: '#fff', background: 'linear-gradient(135deg, #8B1A1A, #B22222)', padding: '12px 32px', borderRadius: '3px' }}>
                Book Session · बुक करा
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

function TarotVisual({ cards }: { cards: typeof CARDS }) {
  return (
    <svg width="380" height="380" viewBox="0 0 380 380" fill="none">
      <circle cx="190" cy="190" r="178" stroke="#8B1A1A" strokeWidth="0.7" opacity="0.3" />
      <circle cx="190" cy="190" r="155" stroke="#C9A84C" strokeWidth="0.3" strokeDasharray="3 8" opacity="0.3" />
      <line x1="190" y1="30" x2="190" y2="350" stroke="#8B1A1A" strokeWidth="0.5" opacity="0.35" />
      <line x1="30"  y1="190" x2="350" y2="190" stroke="#8B1A1A" strokeWidth="0.5" opacity="0.35" />
      <circle cx="190" cy="190" r="18" stroke="#C9A84C" strokeWidth="0.5" opacity="0.5" fill="none" />
      {cards.map((card, i) => (
        <g key={i} transform={`rotate(${card.rotate} 190 340)`}>
          <rect x={162} y={100} width="56" height="88" rx="4" fill="#0D0205" stroke="#8B1A1A" strokeWidth="1" opacity="0.92" />
          <rect x={166} y={104} width="48" height="80" rx="2" fill="none" stroke="#C9A84C" strokeWidth="0.4" opacity="0.5" />
          <text x="190" y="138" textAnchor="middle" dominantBaseline="middle" fontSize="22" fill="#C9A84C" opacity="0.85" style={{ fontFamily: 'serif' }}>{card.symbol}</text>
          <text x="190" y="170" textAnchor="middle" dominantBaseline="middle" fontSize="7" fill="#C9A84C" opacity="0.65" style={{ fontFamily: "'Cinzel', serif" }}>{card.label}</text>
        </g>
      ))}
      <text x="190" y="248" textAnchor="middle" dominantBaseline="middle" fontSize="42" fill="#C9A84C" opacity="0.65"
        style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif" }}>ॐ</text>
    </svg>
  )
}
