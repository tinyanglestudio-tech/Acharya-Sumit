'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import IncludesMarquee, { IncludeCard } from '@/components/ui/IncludesMarquee'

const COLOR = '#7B3FD4'

const INCLUDES: IncludeCard[] = [
  {
    label: 'Birth Chart (Kundali) Analysis',
    labelMr: 'जन्मकुंडली विश्लेषण',
    symbol: '☿',
    symbolFont: 'serif',
    gradient: 'radial-gradient(ellipse at 40% 35%, #2a0a5e 0%, #0d0520 100%)',
    glowColor: '#0d0520',
  },
  {
    label: 'Planetary Period (Dasha) Reading',
    labelMr: 'दशा विश्लेषण',
    symbol: '♄',
    symbolFont: 'serif',
    gradient: 'radial-gradient(ellipse at 60% 40%, #1a0845 0%, #080318 100%)',
    glowColor: '#080318',
  },
  {
    label: 'Career & Financial Insights',
    labelMr: 'करिअर व आर्थिक मार्गदर्शन',
    symbol: '☉',
    symbolFont: 'serif',
    gradient: 'radial-gradient(ellipse at 50% 30%, #2d1060 0%, #0a0420 100%)',
    glowColor: '#0a0420',
  },
  {
    label: 'Relationship Compatibility',
    labelMr: 'विवाह जुळवणी',
    symbol: '♀',
    symbolFont: 'serif',
    gradient: 'radial-gradient(ellipse at 40% 50%, #1e0a50 0%, #09031c 100%)',
    glowColor: '#09031c',
  },
  {
    label: 'Auspicious Timing (Muhurta)',
    labelMr: 'शुभ मुहूर्त',
    symbol: '☽',
    symbolFont: 'serif',
    gradient: 'radial-gradient(ellipse at 55% 35%, #250d55 0%, #0b0420 100%)',
    glowColor: '#0b0420',
  },
  {
    label: 'Remedies & Gemstone Guidance',
    labelMr: 'उपाय व रत्न मार्गदर्शन',
    symbol: '♃',
    symbolFont: 'serif',
    gradient: 'radial-gradient(ellipse at 45% 40%, #1c0848 0%, #08031a 100%)',
    glowColor: '#08031a',
  },
]

const ZODIAC_SIGNS = ['♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓']

export default function AstrologySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="astrology" ref={ref} className="relative overflow-hidden py-28 px-6"
      style={{ background: 'linear-gradient(180deg, #050510 0%, #0D0520 60%, #050510 100%)' }}>

      {/* Purple radial glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ width: '900px', height: '900px', background: 'radial-gradient(ellipse at center, rgba(123,63,212,0.1) 0%, transparent 65%)' }} />

      {/* Faint zodiac ring background */}
      <div className="pointer-events-none absolute top-1/2 right-[-180px] -translate-y-1/2 opacity-[0.06]" style={{ width: '640px', height: '640px' }}>
        <ZodiacRingSvg size={640} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT — Visual + Price */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }} className="flex flex-col items-center">

            <div className="relative flex items-center justify-center" style={{ width: '340px', height: '340px', maxWidth: '80vw' }}>
              <div className="absolute inset-0"><ZodiacRingSvg size={340} /></div>
              <div className="relative z-10 flex flex-col items-center" style={{ filter: 'drop-shadow(0 0 40px rgba(123,63,212,0.7))' }}>
                <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: '88px', color: '#C9A84C', lineHeight: 1 }}>ॐ</span>
                <span className="font-cinzel uppercase mt-2" style={{ fontSize: '10px', letterSpacing: '4px', color: 'rgba(201,168,76,0.82)' }}>Jyotish Shastra</span>
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 rounded-[4px] px-8 py-6 text-center w-full max-w-xs"
              style={{ border: '1px solid rgba(123,63,212,0.4)', background: 'rgba(123,63,212,0.07)', boxShadow: '0 0 50px rgba(123,63,212,0.12)' }}>
              <p style={{ fontSize: '10px', letterSpacing: '3px', color: 'rgba(201,168,76,0.82)', textTransform: 'uppercase', marginBottom: '8px' }}>
                Consultation Fee ·{' '}
                <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif" }}>सल्लामसलत शुल्क</span>
              </p>
              <div className="font-cinzel font-bold" style={{ fontSize: '44px', color: COLOR }}>₹1,500</div>
              <p style={{ fontSize: '13px', color: 'rgba(245,236,215,0.65)', marginTop: '4px' }}>60 min · Online / In-person</p>
              <Link href="/booking"
                className="mt-5 inline-block font-cinzel font-semibold uppercase transition-all duration-300 hover:brightness-125"
                style={{ fontSize: '12px', letterSpacing: '2px', color: '#fff', background: 'linear-gradient(135deg, #7B3FD4, #9B59B6)', padding: '12px 32px', borderRadius: '3px' }}>
                Book Session · बुक करा
              </Link>
            </motion.div>

            {/* Watermark below fee box */}
            <div className="mt-4 w-full max-w-xs overflow-hidden text-center select-none pointer-events-none" aria-hidden>
              <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: 'clamp(40px,5vw,60px)', color: '#7B3FD4', opacity: 0.18, lineHeight: 1, display: 'block', letterSpacing: '-1px' }}>
                ज्योतिषशास्त्र
              </span>
            </div>
          </motion.div>

          {/* RIGHT — Content */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.15 }}>

            <p className="font-cinzel uppercase mb-1" style={{ fontSize: '11px', letterSpacing: '4px', color: 'rgba(123,63,212,0.98)' }}>
              Sacred Science of Light · <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", letterSpacing: 0 }}>ज्योतिषशास्त्र</span>
            </p>
            <h2 className="font-cinzel font-bold text-white mb-1" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', letterSpacing: '2px', lineHeight: 1.1 }}>
              Vedic Astrology
            </h2>
            <p className="mb-5" style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: 'clamp(15px,1.8vw,19px)', color: 'rgba(201,168,76,0.9)' }}>
              ग्रहांचे ज्ञान, जीवनाचा प्रकाश
            </p>
            <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, #7B3FD4, transparent)', marginBottom: '20px' }} />

            {/* Sanskrit quote */}
            <div className="mb-6 p-4 rounded-[4px]" style={{ border: '1px solid rgba(123,63,212,0.25)', background: 'rgba(123,63,212,0.06)' }}>
              <p style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: 'clamp(17px,2vw,24px)', color: '#C9A84C', lineHeight: 1.4, marginBottom: '6px' }}>
                ज्योतिषं वेदानां चक्षुः
              </p>
              <p style={{ fontSize: '13px', color: 'rgba(245,236,215,0.72)', fontStyle: 'italic' }}>
                "Astrology is the eye of the Vedas" — Vedāṅga Jyotiṣa
              </p>
            </div>

            <p className="mb-4" style={{ fontSize: 'clamp(15px, 1.7vw, 18px)', color: 'rgba(245,236,215,0.7)', lineHeight: 1.8 }}>
              By studying the precise positions of the sun, moon, and planets at the exact moment of your birth,
              Acharya Sumit reveals the karmic patterns woven into your destiny — and guides you toward clarity,
              purpose, and right action.
            </p>
          </motion.div>

        </div>
      </div>

      {/* Includes marquee — constrained to content width */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <IncludesMarquee items={INCLUDES} accentColor={COLOR} duration={34} />
      </div>
    </section>
  )
}

function ZodiacRingSvg({ size }: { size: number }) {
  const signs = ['♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓']
  return (
    <svg width={size} height={size} viewBox="0 0 400 400" fill="none">
      <circle cx="200" cy="200" r="190" stroke="#7B3FD4" strokeWidth="0.8" opacity="0.7" />
      <circle cx="200" cy="200" r="168" stroke="#C9A84C" strokeWidth="0.4" strokeDasharray="3 7" opacity="0.5" />
      <circle cx="200" cy="200" r="145" stroke="#7B3FD4" strokeWidth="0.5" opacity="0.5" />
      {signs.map((sign, i) => {
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
        return <line key={a} x1={200+145*Math.cos(rad)} y1={200+145*Math.sin(rad)} x2={200+168*Math.cos(rad)} y2={200+168*Math.sin(rad)} stroke="#C9A84C" strokeWidth="0.6" opacity="0.5" />
      })}
    </svg>
  )
}
