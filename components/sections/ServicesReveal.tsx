'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

const SERVICES = [
  {
    id: 'astrology',
    title: 'Vedic Astrology',
    titleMr: 'ज्योतिषशास्त्र',
    subtitle: 'Birth chart · Dasha · Muhurta',
    symbol: '☽',
    color: '#7B3FD4',
    glow: 'rgba(123,63,212,0.4)',
    border: 'rgba(123,63,212,0.3)',
    price: '₹1,500',
    duration: '60 min',
    href: '/#astrology',
    questions: [
      'Why do the same patterns keep repeating in my life?',
      'What do my planets reveal about career, love & timing?',
    ],
  },
  {
    id: 'numerology',
    title: 'Numerology',
    titleMr: 'अंकशास्त्र',
    subtitle: 'Life path · Destiny · Name',
    symbol: '∞',
    color: '#C9A84C',
    glow: 'rgba(201,168,76,0.4)',
    border: 'rgba(201,168,76,0.3)',
    price: '₹1,200',
    duration: '45 min',
    href: '/#numerology',
    questions: [
      'Does my name or birth date carry a hidden vibration?',
      'Which numbers govern my luck and major life cycles?',
    ],
  },
  {
    id: 'vastu',
    title: 'Vastu Shastra',
    titleMr: 'वास्तुशास्त्र',
    subtitle: 'Home · Office · Plot',
    symbol: '⊕',
    color: '#3d9963',
    glow: 'rgba(61,153,99,0.4)',
    border: 'rgba(61,153,99,0.3)',
    price: '₹2,500',
    duration: '90 min',
    href: '/#vastu',
    questions: [
      'Why does my home feel heavy despite being clean?',
      'Can space energy be affecting my finances or health?',
    ],
  },
  {
    id: 'tarot',
    title: 'Tarot Reading',
    titleMr: 'तारोट वाचन',
    subtitle: 'Career · Love · Guidance',
    symbol: '✦',
    color: '#B22222',
    glow: 'rgba(178,34,34,0.4)',
    border: 'rgba(178,34,34,0.3)',
    price: '₹800',
    duration: '30 min',
    href: '/#tarot',
    questions: [
      'I need clarity on a decision I have been avoiding.',
      'What is the energy around my relationship right now?',
    ],
  },
]

type Service = typeof SERVICES[0]

/* ── Individual flip card ───────────────────────────────── */
function ServiceCard({ svc, index, inView }: { svc: Service; index: number; inView: boolean }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 + index * 0.14, ease: 'easeOut' }}
      style={{ perspective: '1200px', height: '420px' }}
    >
      {/* 3-D flip wrapper */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >

        {/* ══ FRONT — questions ══ */}
        <div
          onClick={() => setFlipped(true)}
          style={{
            position: 'absolute', inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            cursor: 'pointer',
            borderRadius: '6px',
            border: `1px solid ${svc.color}40`,
            background: `linear-gradient(150deg, ${svc.color}14 0%, rgba(5,5,16,0.97) 55%)`,
            padding: '32px 28px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Service name */}
          <h3
            className="font-cinzel font-bold text-white"
            style={{ fontSize: '19px', letterSpacing: '1px', lineHeight: 1.2, marginBottom: '10px' }}
          >
            {svc.title}
          </h3>
          <div
            style={{ width: '32px', height: '2px', background: svc.color, opacity: 0.6, marginBottom: '22px', borderRadius: '1px' }}
          />

          {/* Label */}
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '13px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: `${svc.color}CC`,
              marginBottom: '18px',
            }}
          >
            Choose this if you&apos;re asking…
          </p>

          {/* Questions */}
          <ul style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {svc.questions.map((q, qi) => (
              <li key={qi} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span
                  style={{
                    marginTop: '8px',
                    flexShrink: 0,
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: svc.color,
                    opacity: 0.75,
                    boxShadow: `0 0 8px ${svc.color}`,
                  }}
                />
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '15px',
                    fontWeight: 400,
                    color: 'rgba(245,236,215,0.82)',
                    lineHeight: 1.65,
                  }}
                >
                  {q}
                </span>
              </li>
            ))}
          </ul>

          {/* Tap hint */}
          <div
            style={{
              marginTop: '28px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '13px',
                color: `${svc.color}BB`,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
              }}
            >
              Tap to see details
            </span>
            <span style={{ color: svc.color, opacity: 0.85, fontSize: '13px' }}>→</span>
          </div>
        </div>

        {/* ══ BACK — service details ══ */}
        <div
          style={{
            position: 'absolute', inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            borderRadius: '6px',
            border: `1px solid ${svc.color}40`,
            background: `linear-gradient(160deg, ${svc.color}10 0%, rgba(5,5,16,0.97) 70%)`,
            padding: '32px 28px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {/* Symbol */}
          <div
            style={{
              fontSize: '56px',
              lineHeight: 1,
              marginBottom: '16px',
              color: svc.color,
              filter: `drop-shadow(0 0 24px ${svc.glow})`,
            }}
          >
            {svc.symbol}
          </div>

          {/* Title + Marathi */}
          <h3
            className="font-cinzel font-bold text-white"
            style={{ fontSize: '18px', letterSpacing: '1.5px', marginBottom: '4px' }}
          >
            {svc.title}
          </h3>
          <p
            style={{
              fontFamily: "'Tiro Devanagari Sanskrit', serif",
              fontSize: '13px',
              color: `${svc.color}CC`,
              marginBottom: '10px',
            }}
          >
            {svc.titleMr}
          </p>

          {/* Subtitle */}
          <p
            className="font-garamond"
            style={{ fontSize: '13px', color: 'rgba(201,168,76,0.88)', letterSpacing: '0.5px', lineHeight: 1.6, marginBottom: '18px' }}
          >
            {svc.subtitle}
          </p>

          {/* Divider */}
          <div
            style={{ width: '48px', height: '1px', background: `linear-gradient(90deg, transparent, ${svc.color}, transparent)`, marginBottom: '18px' }}
          />

          {/* Price */}
          <div
            className="font-cinzel font-bold"
            style={{ fontSize: '30px', color: svc.color, lineHeight: 1, marginBottom: '4px' }}
          >
            {svc.price}
          </div>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '13px',
              color: 'rgba(245,236,215,0.58)',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '6px',
            }}
          >
            per session
          </div>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px',
              color: 'rgba(245,236,215,0.5)',
            }}
          >
            {svc.duration} · Online / In-person
          </div>

          <div style={{ flex: 1 }} />

          {/* Book CTA */}
          <Link
            href={svc.href}
            onClick={e => e.stopPropagation()}
            className="font-cinzel font-semibold uppercase transition-all duration-300 hover:brightness-125"
            style={{
              fontSize: '13px',
              letterSpacing: '2px',
              color: '#fff',
              background: `linear-gradient(135deg, ${svc.color}cc, ${svc.color})`,
              padding: '11px 28px',
              borderRadius: '3px',
              display: 'inline-block',
              marginBottom: '14px',
            }}
          >
            Explore Service →
          </Link>

          {/* Flip back */}
          <button
            onClick={() => setFlipped(false)}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '13px',
              color: `${svc.color}50`,
              letterSpacing: '1px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px 8px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = `${svc.color}99`)}
            onMouseLeave={e => (e.currentTarget.style.color = `${svc.color}50`)}
          >
            ← Back
          </button>
        </div>

      </div>
    </motion.div>
  )
}

/* ── Section ────────────────────────────────────────────── */
export default function ServicesReveal() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050510 0%, #08082A 50%, #050510 100%)' }}
    >
      {/* Faint Om watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none" aria-hidden>
        <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: 'clamp(280px,40vw,560px)', color: '#C9A84C', lineHeight: 1, opacity: 0.025 }}>
          ॐ
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <p
            className="font-cinzel uppercase mb-4"
            style={{ fontSize: '11px', letterSpacing: '4px', color: 'rgba(201,168,76,0.88)' }}
          >
            Ancient Wisdom &middot; Modern Guidance
          </p>
          <h2
            className="font-cinzel font-bold text-white mb-5"
            style={{ fontSize: 'clamp(30px, 5vw, 56px)', letterSpacing: '3px' }}
          >
            Our Services
          </h2>
          <div
            style={{ width: '80px', height: '2px', background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)', margin: '0 auto 24px' }}
          />
          <p
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(15px, 1.7vw, 18px)', color: 'rgba(245,236,215,0.5)', lineHeight: 1.8, maxWidth: '520px', margin: '0 auto' }}
          >
            Each reading is a sacred conversation between your soul and the cosmos.
            Tap a card to discover the right path for you.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((svc, i) => (
            <ServiceCard key={svc.id} svc={svc} index={i} inView={inView} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center mt-14"
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: 'rgba(245,236,215,0.25)', letterSpacing: '1.5px' }}
        >
          All consultations are by prior appointment only &middot; Paid sessions
        </motion.p>
      </div>
    </section>
  )
}
