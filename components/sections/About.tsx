'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

const STATS = [
  { value: '15+',   label: 'Years of Practice',   labelMr: 'वर्षांचा अनुभव' },
  { value: '5K+',   label: 'Consultations Done',   labelMr: 'समुपदेशन पूर्ण' },
  { value: '4',     label: 'Sacred Sciences',      labelMr: 'शास्त्रांचे ज्ञान' },
  { value: '★ 4.9', label: 'Client Rating',        labelMr: 'ग्राहक मूल्यांकन' },
]

const CREDENTIALS = [
  { icon: '📜', text: 'Jyotish Vishardh — Vedic Astrology Specialist' },
  { icon: '🏆', text: 'BV Raman Memorial Foundation — Certified Practitioner' },
  { icon: '🏠', text: 'Vastu Shastra Ratna — Traditional Architecture Sciences' },
  { icon: '🃏', text: 'Advanced Tarot & Intuitive Counseling Certification' },
  { icon: '📿', text: 'Trained under Guru-Parampara lineage, Pune' },
]

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      ref={ref}
      className="relative"
      style={{
        height: '100dvh',
        overflow: 'clip',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(1rem,3vh,2rem) clamp(1rem,4vw,2rem)',
        background: 'linear-gradient(180deg, #050510 0%, #06090F 55%, #050510 100%)',
      }}
    >
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ width: '900px', height: '600px', background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.05) 0%, rgba(123,63,212,0.04) 50%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 0, width: '100%' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(1rem,3vw,2rem)] items-center">

          {/* ── LEFT — Avatar + credentials ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="flex flex-col items-center lg:items-start"
          >
            {/* Avatar frame */}
            <div
              className="relative mb-[clamp(0.5rem,1.5vh,1.25rem)]"
              style={{
                width: 'clamp(200px, 35vw, 280px)',
                height: 'clamp(200px, 35vw, 280px)',
                maxHeight: '35vh',
              }}
            >
              {/* Outer ring */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 280 280" fill="none">
                <circle cx="140" cy="140" r="136" stroke="#C9A84C" strokeWidth="0.8" opacity="0.4" strokeDasharray="4 6" />
                <circle cx="140" cy="140" r="118" stroke="#7B3FD4" strokeWidth="0.5" opacity="0.35" />
                {/* 8 tick marks */}
                {[0,45,90,135,180,225,270,315].map((a,i) => {
                  const rad = (a - 90) * Math.PI / 180
                  return (
                    <line key={i}
                      x1={140 + 118 * Math.cos(rad)} y1={140 + 118 * Math.sin(rad)}
                      x2={140 + 136 * Math.cos(rad)} y2={140 + 136 * Math.sin(rad)}
                      stroke="#C9A84C" strokeWidth="1" opacity="0.5"
                    />
                  )
                })}
                {/* Inner decorative squares */}
                <rect x="40" y="40" width="200" height="200" rx="4" stroke="#C9A84C" strokeWidth="0.4" opacity="0.2" transform="rotate(45 140 140)" />
              </svg>

              {/* Photo placeholder circle */}
              <div
                className="absolute rounded-full flex flex-col items-center justify-center overflow-hidden"
                style={{
                  inset: '24px',
                  background: 'linear-gradient(145deg, #0d0a1e 0%, #1a0f38 50%, #0a0d1a 100%)',
                  border: '1px solid rgba(201,168,76,0.3)',
                  boxShadow: '0 0 60px rgba(123,63,212,0.2), inset 0 0 40px rgba(201,168,76,0.05)',
                }}
              >
                {/* Decorative Om as avatar placeholder */}
                <span
                  style={{
                    fontFamily: "'Tiro Devanagari Sanskrit', serif",
                    fontSize: 'clamp(44px, 6vw, 72px)',
                    color: '#C9A84C',
                    opacity: 0.7,
                    lineHeight: 1,
                    filter: 'drop-shadow(0 0 20px rgba(201,168,76,0.5))',
                  }}
                >
                  ॐ
                </span>
                <span
                  className="font-cinzel font-bold"
                  style={{ fontSize: 'clamp(10px, 1vw, 12px)', letterSpacing: '3px', color: 'rgba(201,168,76,0.78)', marginTop: '8px', textTransform: 'uppercase' }}
                >
                  Acharya Sumit
                </span>

                {/* Replace with actual photo when available:
                <Image src="/images/acharya-sumit.jpg" alt="Acharya Sumit" fill className="object-cover" />
                */}
              </div>

              {/* Gold dot at top */}
              <div
                className="absolute rounded-full"
                style={{ width: '8px', height: '8px', background: '#C9A84C', top: '2px', left: '50%', transform: 'translateX(-50%)', boxShadow: '0 0 12px rgba(201,168,76,0.8)' }}
              />
            </div>

            {/* Credentials list */}
            <div className="w-full max-w-sm">
              <p
                className="font-cinzel uppercase mb-4"
                style={{ fontSize: '10px', letterSpacing: '3px', color: 'rgba(201,168,76,0.85)' }}
              >
                Credentials &amp; Training · <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", letterSpacing: 0 }}>पात्रता</span>
              </p>
              <div className="space-y-3">
                {CREDENTIALS.map(({ icon, text }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-[4px]"
                    style={{ border: '1px solid rgba(201,168,76,0.12)', background: 'rgba(201,168,76,0.04)' }}
                  >
                    <span className="text-[16px] flex-shrink-0 mt-0.5">{icon}</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(11px, 1.1vw, 13px)', color: 'rgba(245,236,215,0.55)', lineHeight: 1.55 }}>
                      {text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT — Bio content ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.15 }}
          >
            <p className="font-cinzel uppercase mb-2" style={{ fontSize: 'clamp(10px, 1vw, 12px)', letterSpacing: '4px', color: 'rgba(201,168,76,0.9)' }}>
              Meet Your Guide · <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", letterSpacing: 0 }}>आपला मार्गदर्शक</span>
            </p>
            <h2 className="font-cinzel font-bold text-white mb-1" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', letterSpacing: '2px', lineHeight: 1.1 }}>
              Acharya Sumit
            </h2>
            <p className="mb-5" style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: 'clamp(14px,1.6vw,18px)', color: 'rgba(201,168,76,0.88)' }}>
              ज्योतिषी · अंकशास्त्रज्ञ · वास्तुतज्ज्ञ
            </p>
            <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, #C9A84C, transparent)', marginBottom: '24px' }} />

            {/* Philosophy quote */}
            <div className="mb-[clamp(0.4rem,1vh,1rem)] p-4 rounded-[4px]" style={{ border: '1px solid rgba(201,168,76,0.2)', background: 'rgba(201,168,76,0.04)', borderLeft: '3px solid rgba(201,168,76,0.5)' }}>
              <p style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: 'clamp(16px,1.8vw,22px)', color: '#C9A84C', lineHeight: 1.5, marginBottom: '6px' }}>
                ज्ञानं परमं ध्येयम्
              </p>
              <p style={{ fontSize: 'clamp(10px, 1.1vw, 12px)', color: 'rgba(245,236,215,0.72)', fontStyle: 'italic' }}>
                "Knowledge is the highest goal" — the principle that guides every consultation
              </p>
            </div>

            {/* Bio */}
            <div className="space-y-[clamp(4px,0.8vh,12px)] mb-[clamp(0.4rem,1vh,1rem)]" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(14px,1.6vw,17px)', color: 'rgba(245,236,215,0.65)', lineHeight: 1.85 }}>
              <p>
                With over <strong style={{ color: 'rgba(245,236,215,0.85)', fontWeight: 600 }}>15 years of dedicated practice</strong>, Acharya Sumit has guided thousands of individuals and families through life's most important crossroads — using the time-tested sciences of Vedic Astrology, Numerology, Vastu Shastra, and Tarot.
              </p>
              <p>
                Trained under the Guru-Parampara lineage in Pune and certified by the BV Raman Memorial Foundation, his approach bridges ancient wisdom with practical, modern guidance — grounded in compassion, privacy, and authentic Vedic tradition.
              </p>
              <p>
                Every consultation is personal. Whether you seek clarity on career, relationships, health, or the right timing for a life decision — Acharya Sumit works with you to illuminate the path ahead.
              </p>
            </div>

            {/* Stats strip */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-px mb-[clamp(0.4rem,1vh,1rem)] rounded-[4px] overflow-hidden"
              style={{ border: '1px solid rgba(201,168,76,0.15)', background: 'rgba(201,168,76,0.08)' }}
            >
              {STATS.map(({ value, label, labelMr }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="flex flex-col items-center justify-center py-[clamp(0.5rem,1vh,1rem)] px-3 text-center"
                  style={{ background: 'rgba(5,5,16,0.7)', borderRight: i < 3 ? '1px solid rgba(201,168,76,0.1)' : 'none' }}
                >
                  <div className="font-cinzel font-bold" style={{ fontSize: 'clamp(18px,2.2vw,26px)', color: '#C9A84C', lineHeight: 1 }}>{value}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', letterSpacing: '1px', color: 'rgba(245,236,215,0.72)', textTransform: 'uppercase', marginTop: '4px' }}>{label}</div>
                  <div style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: '10px', color: 'rgba(201,168,76,0.75)', marginTop: '2px' }}>{labelMr}</div>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/booking"
                className="font-cinzel font-bold uppercase transition-all duration-300 hover:brightness-115 hover:scale-[1.02]"
                style={{ fontSize: 'clamp(10px, 1.1vw, 12px)', letterSpacing: '2px', color: '#050510', background: 'linear-gradient(135deg, #C9A84C, #e8c96a)', padding: 'clamp(9px,1.3vw,13px) clamp(18px,2.5vw,32px)', borderRadius: '3px', boxShadow: '0 0 30px rgba(201,168,76,0.2)', display: 'inline-block' }}
              >
                Book a Consultation
              </Link>
              <a
                href="https://wa.me/919999999999"
                target="_blank" rel="noopener noreferrer"
                className="font-cinzel font-semibold uppercase transition-all duration-300 hover:brightness-115"
                style={{ fontSize: 'clamp(10px, 1.1vw, 12px)', letterSpacing: '2px', color: '#25D366', border: '1px solid rgba(37,211,102,0.35)', padding: 'clamp(9px,1.3vw,13px) clamp(18px,2.5vw,28px)', borderRadius: '3px', display: 'inline-block' }}
              >
                WhatsApp Chat
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
