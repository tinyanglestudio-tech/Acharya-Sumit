'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

const INCLUDES = [
  { icon: '🃏', label: '3-Card & Celtic Cross Spreads', desc: 'Past, present, future clarity' },
  { icon: '💼', label: 'Career & Financial Guidance', desc: 'Navigate professional crossroads' },
  { icon: '❤️', label: 'Love & Relationship Insights', desc: 'Understand connections deeply' },
  { icon: '🧱', label: 'Obstacle Identification', desc: "Uncover what's holding you back" },
  { icon: '✨', label: 'Spiritual Path Insights', desc: 'Align with your higher purpose' },
  { icon: '📋', label: 'Actionable Guidance', desc: 'Clear next steps to move forward' },
]

const CARDS = [
  { rotate: -30, tx: -60, ty: 30, label: 'The Moon',  symbol: '☽' },
  { rotate: -15, tx: -25, ty: 12, label: 'The Star',  symbol: '★' },
  { rotate: 0,   tx: 0,   ty: 0,  label: 'The Sun',   symbol: '☀' },
  { rotate: 15,  tx: 25,  ty: 12, label: 'Strength',  symbol: '♾' },
  { rotate: 30,  tx: 60,  ty: 30, label: 'Justice',   symbol: '⚖' },
]

export default function TarotSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="tarot"
      ref={ref}
      className="relative overflow-hidden py-28 px-6"
      style={{ background: 'linear-gradient(180deg, #050510 0%, #0D0205 60%, #050510 100%)' }}
    >
      {/* Crimson glow */}
      <div
        className="pointer-events-none absolute top-1/2 right-1/3 -translate-y-1/2 rounded-full"
        style={{
          width: '800px', height: '800px',
          background: 'radial-gradient(ellipse at center, rgba(139,26,26,0.11) 0%, transparent 65%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <p className="font-garamond uppercase mb-3" style={{ fontSize: '12px', letterSpacing: '4px', color: 'rgba(178,34,34,0.85)' }}>
              Ancient Wisdom Cards
            </p>
            <h2
              className="font-cinzel font-bold text-white mb-4"
              style={{ fontSize: 'clamp(28px, 4vw, 50px)', letterSpacing: '2px', lineHeight: 1.18 }}
            >
              Tarot Reading
            </h2>
            <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, #8B1A1A, transparent)', marginBottom: '24px' }} />

            <p className="font-garamond mb-5" style={{ fontSize: 'clamp(16px, 1.8vw, 19px)', color: 'rgba(245,236,215,0.75)', lineHeight: 1.9 }}>
              <em style={{ color: '#C9A84C' }}>Tarot</em> is not a crystal ball — it is a profound mirror for your
              subconscious wisdom. Each of the 78 cards carries centuries of archetypal symbolism, drawn from
              mystical traditions across the world, serving as a gateway to your own inner knowing.
            </p>
            <p className="font-garamond mb-8" style={{ fontSize: 'clamp(15px, 1.6vw, 18px)', color: 'rgba(245,236,215,0.5)', lineHeight: 1.9 }}>
              Through expertly guided spreads, Acharya Sumit helps you gain clarity on the questions that
              keep you awake at night. Whether you seek direction in love, career, or your spiritual path —
              the cards reveal what is already known but not yet voiced.
            </p>

            <h3 className="font-cinzel font-semibold text-white mb-4" style={{ fontSize: '13px', letterSpacing: '2.5px', textTransform: 'uppercase' }}>
              What&apos;s Included
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {INCLUDES.map(({ icon, label, desc }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.09 }}
                  className="flex items-start gap-3 p-3 rounded-[3px]"
                  style={{ border: '1px solid rgba(139,26,26,0.3)', background: 'rgba(139,26,26,0.05)' }}
                >
                  <span className="text-[19px] mt-0.5 flex-shrink-0">{icon}</span>
                  <div>
                    <div className="font-cinzel text-cream/85" style={{ fontSize: '12px' }}>{label}</div>
                    <div className="font-garamond text-cream/38 mt-0.5" style={{ fontSize: '12px' }}>{desc}</div>
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
            className="flex flex-col items-center"
          >
            <div
              className="relative flex items-center justify-center"
              style={{ width: '380px', height: '380px', maxWidth: '80vw' }}
            >
              <TarotVisual cards={CARDS} />
            </div>

            {/* Price card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 rounded-[4px] px-10 py-7 text-center"
              style={{
                border: '1px solid rgba(139,26,26,0.45)',
                background: 'rgba(139,26,26,0.06)',
                boxShadow: '0 0 50px rgba(139,26,26,0.12)',
              }}
            >
              <p className="font-garamond uppercase mb-2" style={{ fontSize: '11px', letterSpacing: '3px', color: 'rgba(201,168,76,0.45)' }}>
                Consultation Fee
              </p>
              <div className="font-cinzel font-bold" style={{ fontSize: '44px', color: '#B22222' }}>
                ₹800
              </div>
              <p className="font-garamond mt-1" style={{ fontSize: '13px', color: 'rgba(245,236,215,0.4)' }}>
                30 min session &middot; Online / In-person
              </p>
              <Link
                href="/booking"
                className="mt-5 inline-block font-cinzel font-semibold uppercase transition-all duration-300 hover:brightness-125"
                style={{
                  fontSize: '12px',
                  letterSpacing: '2px',
                  color: '#fff',
                  background: 'linear-gradient(135deg, #8B1A1A, #B22222)',
                  padding: '12px 32px',
                  borderRadius: '3px',
                }}
              >
                Book Session
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

/* ── Tarot Card Fan SVG ──────────────────────────────── */
function TarotVisual({ cards }: { cards: typeof CARDS }) {
  return (
    <svg width="380" height="380" viewBox="0 0 380 380" fill="none">
      {/* Background circle */}
      <circle cx="190" cy="190" r="178" stroke="#8B1A1A" strokeWidth="0.7" opacity="0.3" />
      <circle cx="190" cy="190" r="155" stroke="#C9A84C" strokeWidth="0.3" strokeDasharray="3 8" opacity="0.3" />
      {/* Cross lines */}
      <line x1="190" y1="30" x2="190" y2="350" stroke="#8B1A1A" strokeWidth="0.5" opacity="0.35" />
      <line x1="30"  y1="190" x2="350" y2="190" stroke="#8B1A1A" strokeWidth="0.5" opacity="0.35" />
      <circle cx="190" cy="190" r="18" stroke="#C9A84C" strokeWidth="0.5" opacity="0.5" fill="none" />
      {/* Fanned cards */}
      {cards.map((card, i) => (
        <g key={i} transform={`rotate(${card.rotate} 190 340)`}>
          <rect x={162} y={100} width="56" height="88" rx="4"
            fill="#0D0205" stroke="#8B1A1A" strokeWidth="1" opacity="0.92" />
          <rect x={166} y={104} width="48" height="80" rx="2"
            fill="none" stroke="#C9A84C" strokeWidth="0.4" opacity="0.5" />
          <text x="190" y="138" textAnchor="middle" dominantBaseline="middle"
            fontSize="22" fill="#C9A84C" opacity="0.85" style={{ fontFamily: 'serif' }}>
            {card.symbol}
          </text>
          <text x="190" y="170" textAnchor="middle" dominantBaseline="middle"
            fontSize="7" fill="#C9A84C" opacity="0.65"
            style={{ fontFamily: "'Cinzel', serif" }}>
            {card.label}
          </text>
        </g>
      ))}
      {/* Center Om */}
      <text x="190" y="248" textAnchor="middle" dominantBaseline="middle"
        fontSize="42" fill="#C9A84C" opacity="0.65"
        style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif" }}>ॐ</text>
    </svg>
  )
}
