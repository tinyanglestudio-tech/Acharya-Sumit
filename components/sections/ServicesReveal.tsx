'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

const SERVICES = [
  {
    id: 'astrology',
    title: 'Vedic Astrology',
    subtitle: 'Birth chart · Dasha · Muhurta',
    symbol: '☽',
    color: '#7B3FD4',
    glow: 'rgba(123,63,212,0.35)',
    border: 'rgba(123,63,212,0.3)',
    price: '₹1,500',
    href: '#astrology',
    questions: [
      'Why do the same patterns keep repeating in my life?',
      'What do my planets reveal about career, love & timing?',
    ],
  },
  {
    id: 'numerology',
    title: 'Numerology',
    subtitle: 'Life path · Destiny · Name',
    symbol: '∞',
    color: '#C9A84C',
    glow: 'rgba(201,168,76,0.35)',
    border: 'rgba(201,168,76,0.3)',
    price: '₹1,200',
    href: '#numerology',
    questions: [
      'Does my name or birth date carry a hidden vibration?',
      'Which numbers govern my luck and major life cycles?',
    ],
  },
  {
    id: 'vastu',
    title: 'Vastu Shastra',
    subtitle: 'Home · Office · Plot',
    symbol: '⊕',
    color: '#3d9963',
    glow: 'rgba(61,153,99,0.35)',
    border: 'rgba(61,153,99,0.3)',
    price: '₹2,500',
    href: '#vastu',
    questions: [
      'Why does my home feel heavy despite being clean?',
      'Can space energy be affecting my finances or health?',
    ],
  },
  {
    id: 'tarot',
    title: 'Tarot Reading',
    subtitle: 'Career · Love · Guidance',
    symbol: '✦',
    color: '#B22222',
    glow: 'rgba(178,34,34,0.35)',
    border: 'rgba(178,34,34,0.3)',
    price: '₹800',
    href: '#tarot',
    questions: [
      'I need clarity on a decision I have been avoiding.',
      'What is the energy around my relationship right now?',
    ],
  },
]

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
        <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: 'clamp(280px, 40vw, 560px)', color: '#C9A84C', lineHeight: 1, opacity: 0.025 }}>ॐ</span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <p className="font-garamond uppercase mb-4"
            style={{ fontSize: '13px', letterSpacing: '4px', color: 'rgba(201,168,76,0.55)' }}>
            Ancient Wisdom &middot; Modern Guidance
          </p>
          <h2 className="font-cinzel font-bold text-white mb-5"
            style={{ fontSize: 'clamp(30px, 5vw, 56px)', letterSpacing: '3px' }}>
            Our Services
          </h2>
          <div style={{ width: '80px', height: '2px', background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)', margin: '0 auto 24px' }} />
          <p className="font-garamond text-cream/55 max-w-xl mx-auto"
            style={{ fontSize: 'clamp(16px, 1.8vw, 20px)', lineHeight: 1.85 }}>
            Each reading is a sacred conversation between your soul and the cosmos.
            Choose the path that calls to you.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.14, ease: 'easeOut' }}
            >
              <Link
                href={svc.href}
                className="group flex flex-col h-full rounded-[4px] p-8 text-center relative overflow-hidden transition-all duration-400"
                style={{ border: `1px solid ${svc.border}`, background: 'rgba(255,255,255,0.02)' }}
              >
                {/* Hover glow overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[4px]"
                  style={{ boxShadow: `inset 0 0 80px ${svc.glow}` }} />

                {/* Symbol */}
                <div className="text-[58px] leading-none mb-5 transition-transform duration-300 group-hover:-translate-y-1"
                  style={{ color: svc.color, filter: `drop-shadow(0 0 20px ${svc.glow})` }}>
                  {svc.symbol}
                </div>

                {/* Title */}
                <h3 className="font-cinzel font-bold text-white mb-2"
                  style={{ fontSize: '17px', letterSpacing: '1.5px' }}>
                  {svc.title}
                </h3>

                {/* Subtitle */}
                <p className="font-garamond mb-5"
                  style={{ fontSize: '13px', color: 'rgba(201,168,76,0.5)', letterSpacing: '0.5px', lineHeight: 1.6 }}>
                  {svc.subtitle}
                </p>

                {/* ── Guidance questions ── */}
                <div className="mb-5 text-left">
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: `${svc.color}70`, marginBottom: '8px' }}>
                    Choose this if you&apos;re asking…
                  </p>
                  <ul className="space-y-2">
                    {svc.questions.map((q, qi) => (
                      <li key={qi} className="flex items-start gap-2">
                        <span className="mt-[5px] flex-shrink-0 w-[5px] h-[5px] rounded-full"
                          style={{ background: svc.color, opacity: 0.6 }} />
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'rgba(245,236,215,0.55)', lineHeight: 1.55 }}>
                          {q}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Spacer pushes price to bottom */}
                <div className="flex-1" />

                {/* Gold divider */}
                <div style={{ width: '40px', height: '1px', background: `linear-gradient(90deg, transparent, ${svc.color}, transparent)`, margin: '0 auto 16px' }} />

                {/* Price */}
                <div className="font-cinzel font-bold" style={{ fontSize: '22px', color: svc.color }}>
                  {svc.price}
                </div>
                <div className="font-garamond mt-1" style={{ fontSize: '11px', color: 'rgba(245,236,215,0.3)', letterSpacing: '2px', textTransform: 'uppercase' }}>
                  per session
                </div>

                {/* Arrow */}
                <div className="mt-5 font-cinzel uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-0 translate-y-2"
                  style={{ fontSize: '11px', letterSpacing: '2px', color: svc.color }}>
                  Explore →
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center font-garamond mt-14"
          style={{ fontSize: '14px', color: 'rgba(245,236,215,0.3)', letterSpacing: '1.5px' }}
        >
          All consultations are by prior appointment only &middot; Paid sessions
        </motion.p>
      </div>
    </section>
  )
}
