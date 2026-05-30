'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import IncludesMarquee, { IncludeCard } from '@/components/ui/IncludesMarquee'

const COLOR  = '#2D7A4F'
const COLOR2 = '#3d9963'

/* ── All 8 Vastu directions ─────────────────────────────── */
const ALL_DIRECTIONS = [
  {
    dir: 'N',  full: 'North',       sanskrit: 'उत्तर',   angle: 270,
    color: '#4A90D9',
    element: 'Water', elementHi: 'जल',      elementSymbol: '💧',
    deity: 'Kubera',  deityHi: 'कुबेर',
    significance: 'Career, Wealth & New Opportunities',
    signHi: 'करिअर, संपत्ती व नवीन संधी',
    idealFor: 'Study · Living Room · Locker / Safe',
  },
  {
    dir: 'NE', full: 'North-East',  sanskrit: 'ईशान',    angle: 315,
    color: '#C9A84C',
    element: 'Space', elementHi: 'आकाश',    elementSymbol: '✨',
    deity: 'Shiva',   deityHi: 'महादेव',
    significance: 'Wisdom, Spirituality & Divine Blessings',
    signHi: 'ज्ञान, अध्यात्म व दैवी आशीर्वाद',
    idealFor: 'Pooja Room · Meditation · Open / Light Space',
  },
  {
    dir: 'E',  full: 'East',        sanskrit: 'पूर्व',   angle: 0,
    color: '#5CB85C',
    element: 'Wood',  elementHi: 'वायु',    elementSymbol: '🌿',
    deity: 'Indra',   deityHi: 'इंद्र',
    significance: 'Health, New Beginnings & Vitality',
    signHi: 'आरोग्य, नवी सुरुवात व चैतन्य',
    idealFor: 'Main Entrance · Living Room · Balcony',
  },
  {
    dir: 'SE', full: 'South-East',  sanskrit: 'आग्नेय',  angle: 45,
    color: '#FF6B1A',
    element: 'Fire',  elementHi: 'अग्नि',   elementSymbol: '🔥',
    deity: 'Agni',    deityHi: 'अग्निदेव',
    significance: 'Wealth, Prosperity & Cooking Energy',
    signHi: 'संपत्ती, समृद्धी व स्वयंपाकघर ऊर्जा',
    idealFor: 'Kitchen · Electrical Panels · Generator',
  },
  {
    dir: 'S',  full: 'South',       sanskrit: 'दक्षिण',  angle: 90,
    color: '#D9534F',
    element: 'Earth', elementHi: 'पृथ्वी',  elementSymbol: '⛰️',
    deity: 'Yama',    deityHi: 'यमराज',
    significance: 'Fame, Recognition & Career Stability',
    signHi: 'कीर्ती, मान्यता व करिअर स्थैर्य',
    idealFor: 'Master Bedroom · Heavy Storage · Staircase',
  },
  {
    dir: 'SW', full: 'South-West',  sanskrit: 'नैऋत्य',  angle: 135,
    color: '#A0522D',
    element: 'Earth', elementHi: 'पृथ्वी',  elementSymbol: '🌍',
    deity: 'Nirriti', deityHi: 'निऋती',
    significance: 'Relationships, Stability & Long-term Support',
    signHi: 'नाते, स्थिरता व दीर्घकालीन आधार',
    idealFor: 'Master Bedroom · Marriage Corner · Basement',
  },
  {
    dir: 'W',  full: 'West',        sanskrit: 'पश्चिम',  angle: 180,
    color: '#7BAFD4',
    element: 'Water', elementHi: 'जल',      elementSymbol: '🌊',
    deity: 'Varuna',  deityHi: 'वरुण',
    significance: "Gains, Learning & Children's Prosperity",
    signHi: 'लाभ, शिक्षण व मुलांची समृद्धी',
    idealFor: "Children's Room · Dining Room · Bathroom",
  },
  {
    dir: 'NW', full: 'North-West',  sanskrit: 'वायव्य',  angle: 225,
    color: '#9B9B9B',
    element: 'Air',   elementHi: 'वायु',    elementSymbol: '🌬️',
    deity: 'Vayu',    deityHi: 'वायुदेव',
    significance: 'Social Connections, Movement & Support',
    signHi: 'सामाजिक संबंध, गती व सहाय्य',
    idealFor: 'Guest Room · Garage · Storage / Toilet',
  },
]

const INCLUDES: IncludeCard[] = [
  { label: 'Full Home / Office Analysis',  labelMr: 'घर / कार्यालय विश्लेषण', symbol: 'ग', symbolFont: "'Tiro Devanagari Sanskrit', serif", gradient: 'radial-gradient(ellipse at 45% 35%, #072812 0%, #020f07 100%)', glowColor: '#020f07' },
  { label: 'Direction & Zone Mapping',     labelMr: 'दिशा व क्षेत्र नकाशा',   symbol: '⊕', symbolFont: 'serif',                                gradient: 'radial-gradient(ellipse at 55% 40%, #062210 0%, #020c06 100%)', glowColor: '#020c06' },
  { label: 'Five Elements Balance',        labelMr: 'पंचमहाभूत संतुलन',        symbol: 'प', symbolFont: "'Tiro Devanagari Sanskrit', serif", gradient: 'radial-gradient(ellipse at 40% 45%, #082e14 0%, #031108 100%)', glowColor: '#031108' },
  { label: 'Entrance & Bedroom Guide',     labelMr: 'प्रवेशद्वार व शयनकक्ष',   symbol: 'ॐ', symbolFont: "'Tiro Devanagari Sanskrit', serif", gradient: 'radial-gradient(ellipse at 50% 35%, #062610 0%, #020f06 100%)', glowColor: '#020f06' },
  { label: 'Kitchen & Study Setup',        labelMr: 'स्वयंपाकघर व अभ्यासकक्ष', symbol: '△', symbolFont: 'serif',                                gradient: 'radial-gradient(ellipse at 45% 40%, #072a12 0%, #031008 100%)', glowColor: '#031008' },
  { label: 'Simple Practical Remedies',    labelMr: 'सोपे व व्यावहारिक उपाय',  symbol: '◈', symbolFont: 'serif',                                gradient: 'radial-gradient(ellipse at 55% 35%, #062412 0%, #020e07 100%)', glowColor: '#020e07' },
]

export default function VastuSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="vastu" ref={ref} className="relative"
      style={{ height: '100dvh', overflow: 'clip', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(1rem,3vh,2rem) clamp(1rem,4vw,2rem)', background: 'linear-gradient(180deg, #050510 0%, #020D06 60%, #050510 100%)' }}>

      {/* Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 rounded-full"
        style={{ width: '800px', height: '800px', background: 'radial-gradient(ellipse at center, rgba(45,122,79,0.09) 0%, transparent 65%)' }} />

      <div className="max-w-7xl mx-auto relative z-10" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 0, width: '100%' }}>

        {/* ── Top 2-col: Mandala + Content ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16" style={{ flex: 1, minHeight: 0, alignItems: 'center' }}>

          {/* LEFT — Visual */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }} className="flex flex-col items-center">
            <div className="relative flex items-center justify-center" style={{ width: 'clamp(220px,40vw,340px)', height: 'clamp(220px,40vw,340px)', maxHeight: '40vh' }}>
              <VastuMandala />
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="rounded-[4px] px-8 py-6 text-center w-full max-w-xs"
              style={{ border: '1px solid rgba(45,122,79,0.45)', background: 'rgba(45,122,79,0.06)', boxShadow: '0 0 50px rgba(45,122,79,0.12)', marginTop: 'clamp(0.5rem,1vh,1rem)' }}>
              <p style={{ fontSize: 'clamp(11px,1.1vw,13px)', letterSpacing: '2.5px', color: 'rgba(201,168,76,0.55)', textTransform: 'uppercase', marginBottom: '8px' }}>
                Consultation Fee · <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif" }}>सल्ला शुल्क</span>
              </p>
              <div className="font-cinzel font-bold" style={{ fontSize: 'clamp(28px,3.5vw,44px)', color: COLOR2 }}>₹2,500</div>
              <p style={{ fontSize: 'clamp(13px,1.3vw,15px)', color: 'rgba(245,236,215,0.5)', marginTop: '4px' }}>90 min · Site visit / Online</p>
              <Link href="/booking"
                className="mt-5 inline-block font-cinzel font-semibold uppercase transition-all duration-300 hover:brightness-125"
                style={{ fontSize: 'clamp(11px,1.1vw,13px)', letterSpacing: '2px', color: '#fff', background: 'linear-gradient(135deg, #2D7A4F, #3d9963)', padding: 'clamp(8px,1.2vw,12px) clamp(20px,2.5vw,32px)', borderRadius: '3px' }}>
                Book Session · बुक करा
              </Link>
            </motion.div>
            {/* Watermark below fee box */}
            <div className="mt-4 w-full max-w-xs overflow-hidden text-center select-none pointer-events-none" aria-hidden>
              <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: 'clamp(36px,4.5vw,54px)', color: '#3d9963', opacity: 0.18, lineHeight: 1, display: 'block', letterSpacing: '-1px' }}>
                वास्तुशास्त्र
              </span>
            </div>
          </motion.div>

          {/* RIGHT — Content */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.15 }}>
            <p className="font-cinzel uppercase" style={{ fontSize: 'clamp(11px,1.1vw,13px)', letterSpacing: '3.5px', color: 'rgba(61,153,99,0.85)', marginBottom: 'clamp(4px,0.8vh,12px)' }}>
              Ancient Architecture Science · <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", letterSpacing: 0 }}>वास्तुशास्त्र</span>
            </p>
            <h2 className="font-cinzel font-bold text-white mb-[clamp(4px,0.8vh,10px)]" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', letterSpacing: '2px', lineHeight: 1.1 }}>
              Vastu Shastra
            </h2>
            <p className="mb-[clamp(4px,0.8vh,10px)]" style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: 'clamp(15px,1.8vw,19px)', color: 'rgba(61,153,99,0.95)' }}>
              घराची ऊर्जा, जीवनाची शक्ती — वास्तूने बदला आपले भाग्य
            </p>
            <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, #2D7A4F, transparent)', marginBottom: '20px' }} />

            <div className="mb-[clamp(4px,0.8vh,10px)] p-4 rounded-[4px]" style={{ border: '1px solid rgba(45,122,79,0.25)', background: 'rgba(45,122,79,0.06)' }}>
              <p style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: 'clamp(17px,2vw,24px)', color: '#C9A84C', lineHeight: 1.4, marginBottom: '6px' }}>
                वास्तुना सुखमाप्नोति
              </p>
              <p style={{ fontSize: '14px', color: 'rgba(245,236,215,0.72)', fontStyle: 'italic' }}>
                "One attains happiness and prosperity through Vastu" — Mānasāra
              </p>
            </div>

            <p style={{ fontSize: 'clamp(15px, 1.7vw, 18px)', color: 'rgba(245,236,215,0.7)', lineHeight: 1.8 }}>
              Vastu Shastra aligns the energies of your home or workplace with the five elements
              (<em style={{ color: 'rgba(61,153,99,0.8)' }}>Pancha Bhuta · पंचमहाभूत</em>) and cosmic directions.
              Most corrections require no structural changes — simple practical remedies can transform
              the energy of any space.
            </p>
          </motion.div>
        </div>

        {/* ── Eight Sacred Directions ─────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-[clamp(2rem,5vw,5rem)]"
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-3">
            <div style={{ flex: 1, height: '1px', background: 'rgba(45,122,79,0.25)' }} />
            <h3 className="font-cinzel font-bold text-white" style={{ fontSize: '17px', letterSpacing: '3.5px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
              Eight Sacred Directions
            </h3>
            <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: '18px', color: 'rgba(61,153,99,0.6)', whiteSpace: 'nowrap' }}>
              · अष्ट दिशा
            </span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(45,122,79,0.25)' }} />
          </div>
          <p className="text-center mb-10" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '15px', color: 'rgba(245,236,215,0.45)' }}>
            Each direction is governed by a ruling deity, a cosmic element, and carries distinct life significance.
          </p>

          {/* Compass + Cards layout */}
          <div className="flex flex-col xl:flex-row gap-12 items-center xl:items-start">

            {/* Compass rose SVG */}
            <div className="flex-shrink-0 flex items-center justify-center" style={{ width: 'clamp(200px,35vw,300px)', height: 'clamp(200px,35vw,300px)' }}>
              <VastuCompass directions={ALL_DIRECTIONS} />
            </div>

            {/* Direction cards — 2x4 grid */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-[clamp(8px,1vw,12px)] w-full">
              {ALL_DIRECTIONS.map((d, i) => (
                <motion.div
                  key={d.dir}
                  initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.4 + i * 0.07 }}
                  className="flex gap-0 rounded-[5px] overflow-hidden"
                  style={{ border: `1px solid ${d.color}25`, background: 'rgba(5,5,16,0.7)' }}
                >
                  {/* Colored left bar */}
                  <div className="flex-shrink-0 flex flex-col items-center justify-center px-3 py-4"
                    style={{ background: `${d.color}14`, borderRight: `1px solid ${d.color}22`, minWidth: '68px' }}>
                    <div className="font-cinzel font-bold" style={{ fontSize: '19px', color: d.color, lineHeight: 1 }}>{d.dir}</div>
                    <div style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: '13px', color: `${d.color}80`, marginTop: '5px', textAlign: 'center' }}>{d.sanskrit}</div>
                    <div style={{ fontSize: '18px', marginTop: '7px' }}>{d.elementSymbol}</div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 px-4 py-3">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(13px,1.3vw,15px)', fontWeight: 700, color: 'rgba(245,236,215,0.95)' }}>{d.full}</span>
                      <span className="font-cinzel" style={{ fontSize: 'clamp(10px,1vw,12px)', letterSpacing: '0.8px', color: `${d.color}`, background: `${d.color}18`, padding: 'clamp(5px,0.6vw,7px) clamp(12px,1.4vw,18px)', borderRadius: '10px', border: `1px solid ${d.color}30`, whiteSpace: 'nowrap' }}>
                        {d.element} · {d.elementHi}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: 'clamp(11px,1.1vw,13px)', color: 'rgba(201,168,76,0.65)' }}>{d.deityHi}</span>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(11px,1.1vw,13px)', color: 'rgba(245,236,215,0.35)' }}>· {d.deity}</span>
                    </div>

                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: 'rgba(245,236,215,0.8)', lineHeight: 1.5, marginBottom: '5px', fontWeight: 500 }}>
                      {d.significance}
                    </p>
                    <p style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: 'clamp(11px,1.1vw,13px)', color: `${d.color}80`, lineHeight: 1.45, marginBottom: '7px' }}>
                      {d.signHi}
                    </p>

                    <div className="flex items-center gap-1 flex-wrap">
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(10px,1vw,12px)', color: 'rgba(245,236,215,0.35)', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Ideal for:</span>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(10px,1vw,12px)', color: `${d.color}75` }}>{d.idealFor}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Includes marquee */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <IncludesMarquee items={INCLUDES} accentColor={COLOR2} duration={32} />
      </div>
    </section>
  )
}

/* ── Compass Rose SVG ───────────────────────────────────── */
function VastuCompass({ directions }: { directions: typeof ALL_DIRECTIONS }) {
  const cx = 150, cy = 150, outerR = 138, innerR = 58, labelR = 122, deityR = 80

  return (
    <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
      {/* Outer ring */}
      <circle cx={cx} cy={cy} r={outerR} stroke="#2D7A4F" strokeWidth="0.8" opacity="0.5" />
      <circle cx={cx} cy={cy} r={innerR} stroke="#C9A84C" strokeWidth="0.5" opacity="0.4" strokeDasharray="3 5" />

      {/* 8 coloured sectors */}
      {directions.map((d, i) => {
        const startDeg = i * 45 - 22.5 - 90
        const endDeg   = startDeg + 45
        const s = startDeg * Math.PI / 180
        const e = endDeg   * Math.PI / 180
        const x1 = cx + outerR * Math.cos(s), y1 = cy + outerR * Math.sin(s)
        const x2 = cx + outerR * Math.cos(e), y2 = cy + outerR * Math.sin(e)
        const xi1 = cx + innerR * Math.cos(s), yi1 = cy + innerR * Math.sin(s)
        const xi2 = cx + innerR * Math.cos(e), yi2 = cy + innerR * Math.sin(e)
        const path = `M ${xi1} ${yi1} L ${x1} ${y1} A ${outerR} ${outerR} 0 0 1 ${x2} ${y2} L ${xi2} ${yi2} A ${innerR} ${innerR} 0 0 0 ${xi1} ${yi1} Z`
        const mid = (startDeg + 22.5) * Math.PI / 180
        const lx = cx + labelR * Math.cos(mid), ly = cy + labelR * Math.sin(mid)
        return (
          <g key={d.dir}>
            <path d={path} fill={d.color} fillOpacity="0.13" stroke={d.color} strokeWidth="0.5" strokeOpacity="0.4" />
            {/* Direction label */}
            <text x={lx} y={ly} textAnchor="middle" dominantBaseline="middle"
              fontSize="12" fill={d.color} opacity="0.92"
              style={{ fontFamily: "'Cinzel', serif", fontWeight: '700' }}>
              {d.dir}
            </text>
            {/* Sanskrit name */}
            <text x={cx + deityR * Math.cos(mid)} y={cy + deityR * Math.sin(mid)}
              textAnchor="middle" dominantBaseline="middle"
              fontSize="7.5" fill={d.color} opacity="0.55"
              style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif" }}>
              {d.sanskrit}
            </text>
          </g>
        )
      })}

      {/* Dividing lines between sectors */}
      {[0,45,90,135,180,225,270,315].map((a, i) => {
        const rad = (a - 90) * Math.PI / 180
        return (
          <line key={i}
            x1={cx + innerR * Math.cos(rad)} y1={cy + innerR * Math.sin(rad)}
            x2={cx + outerR * Math.cos(rad)} y2={cy + outerR * Math.sin(rad)}
            stroke="rgba(45,122,79,0.35)" strokeWidth="0.7"
          />
        )
      })}

      {/* Cross lines through center */}
      <line x1={cx} y1={cy - outerR} x2={cx} y2={cy + outerR} stroke="#2D7A4F" strokeWidth="0.4" opacity="0.3" />
      <line x1={cx - outerR} y1={cy} x2={cx + outerR} y2={cy} stroke="#2D7A4F" strokeWidth="0.4" opacity="0.3" />
      <line x1={cx - outerR * 0.707} y1={cy - outerR * 0.707} x2={cx + outerR * 0.707} y2={cy + outerR * 0.707} stroke="#2D7A4F" strokeWidth="0.3" opacity="0.2" />
      <line x1={cx + outerR * 0.707} y1={cy - outerR * 0.707} x2={cx - outerR * 0.707} y2={cy + outerR * 0.707} stroke="#2D7A4F" strokeWidth="0.3" opacity="0.2" />

      {/* Centre Om */}
      <circle cx={cx} cy={cy} r="28" fill="rgba(5,5,16,0.9)" stroke="#C9A84C" strokeWidth="0.6" strokeOpacity="0.5" />
      <text x={cx} y={cy + 2} textAnchor="middle" dominantBaseline="middle"
        fontSize="26" fill="#C9A84C" opacity="0.85"
        style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif" }}>
        ॐ
      </text>
    </svg>
  )
}

/* ── Original Vastu Mandala (kept for visual panel) ─────── */
function VastuMandala() {
  const dirs = [
    { label: 'N', angle: 270, color: '#4A90D9' }, { label: 'NE', angle: 315, color: '#C9A84C' },
    { label: 'E', angle: 0,   color: '#5CB85C' }, { label: 'SE', angle: 45,  color: '#FF6B1A' },
    { label: 'S', angle: 90,  color: '#D9534F' }, { label: 'SW', angle: 135, color: '#A0522D' },
    { label: 'W', angle: 180, color: '#7BAFD4' }, { label: 'NW', angle: 225, color: '#9B9B9B' },
  ]
  return (
    <svg width="340" height="340" viewBox="0 0 380 380" fill="none">
      <circle cx="190" cy="190" r="178" stroke="#2D7A4F" strokeWidth="0.8" opacity="0.5" />
      <circle cx="190" cy="190" r="155" stroke="#C9A84C" strokeWidth="0.4" strokeDasharray="3 7" opacity="0.4" />
      <rect x="48" y="48" width="284" height="284" stroke="#2D7A4F" strokeWidth="0.8" opacity="0.45" />
      <rect x="80" y="80" width="220" height="220" stroke="#C9A84C" strokeWidth="0.4" strokeDasharray="4 4" opacity="0.3" />
      {[128, 190, 252].map(v => (
        <g key={v}>
          <line x1={v} y1="48" x2={v} y2="332" stroke="#2D7A4F" strokeWidth="0.3" opacity="0.3" />
          <line x1="48" y1={v} x2="332" y2={v} stroke="#2D7A4F" strokeWidth="0.3" opacity="0.3" />
        </g>
      ))}
      {dirs.map(({ label, angle, color }) => {
        const rad = angle * Math.PI / 180
        return <text key={label} x={190 + 164 * Math.cos(rad)} y={190 + 164 * Math.sin(rad)}
          textAnchor="middle" dominantBaseline="middle" fontSize="15" fill={color} opacity="0.9"
          style={{ fontFamily: "'Cinzel', serif", fontWeight: '700' }}>{label}</text>
      })}
      <line x1="190" y1="48" x2="190" y2="332" stroke="#2D7A4F" strokeWidth="0.4" opacity="0.3" />
      <line x1="48" y1="190" x2="332" y2="190" stroke="#2D7A4F" strokeWidth="0.4" opacity="0.3" />
      <text x="190" y="200" textAnchor="middle" dominantBaseline="middle" fontSize="52" fill="#C9A84C" opacity="0.75"
        style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif" }}>ॐ</text>
    </svg>
  )
}
