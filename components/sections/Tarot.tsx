'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import IncludesMarquee, { IncludeCard } from '@/components/ui/IncludesMarquee'

const COLOR = '#D03535'
const COLOR2 = '#A82828'

const INCLUDES: IncludeCard[] = [
  {
    label: '3-Card & Celtic Cross Spreads',
    labelMr: 'तीन पत्ते व सेल्टिक क्रॉस',
    symbol: '✦',
    symbolFont: 'serif',
    gradient: 'radial-gradient(ellipse at 45% 35%, #2a0505 0%, #100202 100%)',
    glowColor: '#100202',
  },
  {
    label: 'Career & Financial Guidance',
    labelMr: 'करिअर व आर्थिक मार्गदर्शन',
    symbol: '☽',
    symbolFont: 'serif',
    gradient: 'radial-gradient(ellipse at 55% 40%, #220404 0%, #0d0202 100%)',
    glowColor: '#0d0202',
  },
  {
    label: 'Love & Relationship Insights',
    labelMr: 'प्रेम व नाते विश्लेषण',
    symbol: '♡',
    symbolFont: 'serif',
    gradient: 'radial-gradient(ellipse at 40% 45%, #2e0606 0%, #120202 100%)',
    glowColor: '#120202',
  },
  {
    label: 'Obstacle Identification',
    labelMr: 'अडथळे शोधणे',
    symbol: '⊗',
    symbolFont: 'serif',
    gradient: 'radial-gradient(ellipse at 50% 35%, #250505 0%, #0f0101 100%)',
    glowColor: '#0f0101',
  },
  {
    label: 'Spiritual Path Insights',
    labelMr: 'आध्यात्मिक मार्ग',
    symbol: '★',
    symbolFont: 'serif',
    gradient: 'radial-gradient(ellipse at 45% 40%, #280606 0%, #110202 100%)',
    glowColor: '#110202',
  },
  {
    label: 'Actionable Guidance',
    labelMr: 'व्यावहारिक मार्गदर्शन',
    symbol: '⊕',
    symbolFont: 'serif',
    gradient: 'radial-gradient(ellipse at 55% 35%, #230505 0%, #0e0101 100%)',
    glowColor: '#0e0101',
  },
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
    <section id="tarot" ref={ref} className="relative"
      style={{ height: '100dvh', overflow: 'clip', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(1rem,3vh,2rem) clamp(1rem,4vw,2rem)', background: 'linear-gradient(180deg, #050510 0%, #0D0205 60%, #050510 100%)' }}>

      {/* Crimson glow */}
      <div className="pointer-events-none absolute top-1/2 right-1/3 -translate-y-1/2 rounded-full"
        style={{ width: '800px', height: '800px', background: 'radial-gradient(ellipse at center, rgba(139,26,26,0.11) 0%, transparent 65%)' }} />

      <div className="max-w-7xl mx-auto relative z-10" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 0, width: '100%' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(1rem,3vw,2.5rem)]" style={{ flex: 1, minHeight: 0, alignItems: 'center' }}>

          {/* LEFT — Content */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}>

            <p className="font-cinzel uppercase" style={{ fontSize: 'clamp(10px,1vw,12px)', letterSpacing: '4px', color: 'rgba(208,53,53,0.98)', marginBottom: 'clamp(4px,0.8vh,12px)' }}>
              Ancient Wisdom Cards · <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", letterSpacing: 0 }}>तारोट ज्ञान</span>
            </p>
            <h2 className="font-cinzel font-bold text-white mb-[clamp(4px,0.8vh,10px)]" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', letterSpacing: '2px', lineHeight: 1.1 }}>
              Tarot Reading
            </h2>
            <p className="mb-[clamp(4px,0.8vh,10px)]" style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: 'clamp(15px,1.8vw,19px)', color: 'rgba(208,53,53,0.9)' }}>
              मनाचा आरसा, भविष्याचा दीप — पत्त्यांत उत्तरे शोधा
            </p>
            <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, #8B1A1A, transparent)', marginBottom: '20px' }} />

            {/* Sanskrit quote */}
            <div className="mb-[clamp(4px,0.8vh,10px)] p-4 rounded-[4px]" style={{ border: '1px solid rgba(139,26,26,0.3)', background: 'rgba(139,26,26,0.06)' }}>
              <p style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: 'clamp(17px,2vw,24px)', color: '#C9A84C', lineHeight: 1.4, marginBottom: '6px' }}>
                दैवं बलवत् — सर्वस्य दैवमेव परायणम्
              </p>
              <p style={{ fontSize: 'clamp(11px,1.1vw,13px)', color: 'rgba(245,236,215,0.72)', fontStyle: 'italic' }}>
                &ldquo;Destiny is powerful — all things depend upon it ultimately&rdquo; — Mahābhārata
              </p>
            </div>

            <p className="mb-4" style={{ fontSize: 'clamp(15px, 1.7vw, 18px)', color: 'rgba(245,236,215,0.7)', lineHeight: 1.8 }}>
              Tarot is a profound mirror for your subconscious wisdom. Each of the 78 cards carries
              centuries of archetypal symbolism — through expertly guided spreads, Acharya Sumit helps
              you gain clarity on love, career, and your highest path.
            </p>
          </motion.div>

          {/* RIGHT — Visual */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
            className="flex flex-col items-center">

            <div className="relative flex items-center justify-center" style={{ width: 'clamp(220px,40vw,340px)', height: 'clamp(220px,40vw,340px)', maxHeight: '40vh' }}>
              <TarotVisual cards={CARDS} />
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="rounded-[4px] px-8 py-6 text-center w-full max-w-xs"
              style={{ border: '1px solid rgba(139,26,26,0.45)', background: 'rgba(139,26,26,0.06)', boxShadow: '0 0 50px rgba(139,26,26,0.12)', marginTop: 'clamp(0.5rem,1vh,1rem)' }}>
              <p style={{ fontSize: '10px', letterSpacing: '3px', color: 'rgba(201,168,76,0.82)', textTransform: 'uppercase', marginBottom: '8px' }}>
                Consultation Fee · <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif" }}>सल्ला शुल्क</span>
              </p>
              <div className="font-cinzel font-bold" style={{ fontSize: 'clamp(28px,3.5vw,44px)', color: COLOR }}>₹800</div>
              <p style={{ fontSize: 'clamp(11px,1.1vw,13px)', color: 'rgba(245,236,215,0.65)', marginTop: '4px' }}>30 min · Online / In-person</p>
              <Link href="/booking"
                className="mt-5 inline-block font-cinzel font-semibold uppercase transition-all duration-300 hover:brightness-125"
                style={{ fontSize: 'clamp(11px,1.1vw,13px)', letterSpacing: '2px', color: '#fff', background: `linear-gradient(135deg, ${COLOR2}, ${COLOR})`, padding: 'clamp(8px,1.2vw,12px) clamp(20px,2.5vw,32px)', borderRadius: '3px' }}>
                Book Session · बुक करा
              </Link>
            </motion.div>

            {/* Watermark below fee box */}
            <div className="mt-4 w-full max-w-xs overflow-hidden text-center select-none pointer-events-none" aria-hidden>
              <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: 'clamp(40px,5vw,60px)', color: COLOR, opacity: 0.18, lineHeight: 1, display: 'block', letterSpacing: '-1px' }}>
                तारोट
              </span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Includes marquee — constrained to content width */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <IncludesMarquee items={INCLUDES} accentColor={COLOR} duration={28} />
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
