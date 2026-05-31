'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import IncludesMarquee, { IncludeCard } from '@/components/ui/IncludesMarquee'

const COLOR = '#C9A84C'

const INCLUDES: IncludeCard[] = [
  {
    label: 'Life Path Number',
    labelMr: 'जीवन मार्ग अंक',
    symbol: '१',
    symbolFont: "'Tiro Devanagari Sanskrit', serif",
    gradient: 'radial-gradient(ellipse at 45% 35%, #2a1e00 0%, #100b00 100%)',
    glowColor: '#100b00',
  },
  {
    label: 'Destiny Number',
    labelMr: 'भाग्य अंक',
    symbol: '७',
    symbolFont: "'Tiro Devanagari Sanskrit', serif",
    gradient: 'radial-gradient(ellipse at 55% 40%, #261a00 0%, #0e0900 100%)',
    glowColor: '#0e0900',
  },
  {
    label: 'Soul Urge Number',
    labelMr: 'आत्मा इच्छा अंक',
    symbol: '∞',
    symbolFont: 'serif',
    gradient: 'radial-gradient(ellipse at 40% 45%, #2e2000 0%, #120d00 100%)',
    glowColor: '#120d00',
  },
  {
    label: 'Personal Year Cycle',
    labelMr: 'वैयक्तिक वर्ष चक्र',
    symbol: '९',
    symbolFont: "'Tiro Devanagari Sanskrit', serif",
    gradient: 'radial-gradient(ellipse at 50% 35%, #221800 0%, #0d0800 100%)',
    glowColor: '#0d0800',
  },
  {
    label: 'Name Correction',
    labelMr: 'नाव सुधारणा',
    symbol: 'अ',
    symbolFont: "'Tiro Devanagari Sanskrit', serif",
    gradient: 'radial-gradient(ellipse at 45% 40%, #281c00 0%, #0f0a00 100%)',
    glowColor: '#0f0a00',
  },
  {
    label: 'Lucky Numbers & Colors',
    labelMr: 'शुभ अंक आणि रंग',
    symbol: '३',
    symbolFont: "'Tiro Devanagari Sanskrit', serif",
    gradient: 'radial-gradient(ellipse at 55% 35%, #241a00 0%, #0d0800 100%)',
    glowColor: '#0d0800',
  },
]

export default function NumerologySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="numerology" ref={ref} className="relative overflow-hidden px-6"
      style={{
        height: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #050510 0%, #0A0800 60%, #050510 100%)',
      }}>

      <div className="pointer-events-none absolute top-1/2 right-1/4 -translate-y-1/2 rounded-full"
        style={{ width: '800px', height: '800px', background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.07) 0%, transparent 65%)' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT — Content */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }} className="order-2 lg:order-1">

            <p className="font-cinzel uppercase mb-1" style={{ fontSize: '11px', letterSpacing: '4px', color: 'rgba(201,168,76,0.92)' }}>
              Language of the Universe · <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", letterSpacing: 0 }}>विश्वाची भाषा</span>
            </p>
            <h2 className="font-cinzel font-bold text-white mb-1" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', letterSpacing: '2px', lineHeight: 1.1 }}>
              Numerology
            </h2>
            <p className="mb-5" style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: 'clamp(15px,1.8vw,19px)', color: 'rgba(201,168,76,0.9)' }}>
              अंकांतील रहस्य उलगडा — आपले जीवन समजून घ्या
            </p>
            <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, #C9A84C, transparent)', marginBottom: '20px' }} />

            {/* Sanskrit quote */}
            <div className="mb-6 p-4 rounded-[4px]" style={{ border: '1px solid rgba(201,168,76,0.25)', background: 'rgba(201,168,76,0.05)' }}>
              <p style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: 'clamp(17px,2vw,24px)', color: '#C9A84C', lineHeight: 1.4, marginBottom: '6px' }}>
                अंके सर्वं प्रतिष्ठितम्
              </p>
              <p style={{ fontSize: '13px', color: 'rgba(245,236,215,0.72)', fontStyle: 'italic' }}>
                "All of existence is established in numbers" — Vedic Wisdom
              </p>
            </div>

            <p className="mb-4" style={{ fontSize: 'clamp(15px, 1.7vw, 18px)', color: 'rgba(245,236,215,0.7)', lineHeight: 1.8 }}>
              Every name, every date of birth carries a unique cosmic vibration. Numerology decodes
              these hidden patterns to reveal your life path, soul purpose, and the timing of major
              life chapters — with practical guidance on name corrections and aligning your choices
              with your highest vibration.
            </p>
          </motion.div>

          {/* RIGHT — Visual */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.15 }} className="order-1 lg:order-2 flex flex-col items-center">

            <div className="relative flex items-center justify-center" style={{ width: 'clamp(200px, 30vh, 300px)', height: 'clamp(200px, 30vh, 300px)', maxWidth: '80vw' }}>
              <NumerologyMandala />
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-4 rounded-[4px] px-6 py-4 text-center w-full max-w-xs"
              style={{ border: '1px solid rgba(201,168,76,0.4)', background: 'rgba(201,168,76,0.05)', boxShadow: '0 0 50px rgba(201,168,76,0.1)' }}>
              <p style={{ fontSize: '10px', letterSpacing: '3px', color: 'rgba(201,168,76,0.82)', textTransform: 'uppercase', marginBottom: '8px' }}>
                Consultation Fee · <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif" }}>सल्ला शुल्क</span>
              </p>
              <div className="font-cinzel font-bold" style={{ fontSize: 'clamp(28px, 4vh, 40px)', color: COLOR }}>₹1,200</div>
              <p style={{ fontSize: '13px', color: 'rgba(245,236,215,0.65)', marginTop: '4px' }}>45 min · Online / In-person</p>
              <Link href="/booking"
                className="mt-5 inline-block font-cinzel font-semibold uppercase transition-all duration-300 hover:brightness-110"
                style={{ fontSize: '12px', letterSpacing: '2px', color: '#050510', background: 'linear-gradient(135deg, #C9A84C, #e8c96a)', padding: '12px 32px', borderRadius: '3px' }}>
                Book Session · बुक करा
              </Link>
            </motion.div>

            {/* Watermark below fee box */}
            <div className="mt-4 w-full max-w-xs overflow-hidden text-center select-none pointer-events-none" aria-hidden>
              <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: 'clamp(40px,5vw,60px)', color: '#C9A84C', opacity: 0.18, lineHeight: 1, display: 'block', letterSpacing: '-1px' }}>
                अंकशास्त्र
              </span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Includes marquee — constrained to content width */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <IncludesMarquee items={INCLUDES} accentColor={COLOR} duration={30} />
      </div>
    </section>
  )
}

function NumerologyMandala() {
  return (
    <svg width="340" height="340" viewBox="0 0 360 360" fill="none">
      <circle cx="180" cy="180" r="168" stroke="#C9A84C" strokeWidth="0.7" opacity="0.45" />
      <circle cx="180" cy="180" r="140" stroke="#C9A84C" strokeWidth="0.4" strokeDasharray="4 8" opacity="0.35" />
      <circle cx="180" cy="180" r="112" stroke="#C9A84C" strokeWidth="0.6" opacity="0.4" />
      <circle cx="180" cy="180" r="80"  stroke="#C9A84C" strokeWidth="0.3" strokeDasharray="2 4" opacity="0.3" />
      {[1,2,3,4,5,6,7,8,9].map((n, i) => {
        const angle = (i * 40 - 90) * Math.PI / 180
        return <text key={n} x={180 + 155 * Math.cos(angle)} y={180 + 155 * Math.sin(angle)}
          textAnchor="middle" dominantBaseline="middle" fontSize="22" fill="#C9A84C" opacity="0.9"
          style={{ fontFamily: "'Cinzel', serif", fontWeight: '700' }}>{n}</text>
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
