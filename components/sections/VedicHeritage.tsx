'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

/* ── Sanskrit / Marathi / English verses ─────────────── */
const VERSES = [
  {
    devanagari:     'ज्योतिषं वेदानां चक्षुः',
    transliteration:'Jyotiṣaṁ Vedānāṁ Cakṣuḥ',
    translation:    'Astrology is the eye of the Vedas — the sacred light that reveals cosmic truth hidden within time.',
    source:         '— Vedāṅga Jyotiṣa',
    marathi:        'ज्योतिष हे वेदांचे नेत्र आहे',
  },
  {
    devanagari:     'अंके सर्वं प्रतिष्ठितम्',
    transliteration:'Aṅke Sarvaṁ Pratiṣṭhitam',
    translation:    'All of existence is established in numbers — the universe speaks in the eternal language of mathematics.',
    source:         '— Vedic Wisdom',
    marathi:        'सर्व विश्व अंकांवर प्रतिष्ठित आहे',
  },
  {
    devanagari:     'यथा देशे तथा वास्तुः',
    transliteration:'Yathā Deśe Tathā Vāstuḥ',
    translation:    'As is the land, so is the dwelling — your space reflects and shapes the energy of your entire life.',
    source:         '— Mānasāra Śilpaśāstra',
    marathi:        'जसा देश, तसे घर — वास्तू आणि जीवन एकच आहे',
  },
]

/* ── Service tags (trilingual) ───────────────────────── */
const TAGS = [
  { en: 'Astrology',             mr: 'ज्योतिष' },
  { en: 'Numerology',            mr: 'अंकशास्त्र' },
  { en: 'Vastu Shastra',         mr: 'वास्तुशास्त्र' },
  { en: 'Tarot Reading',         mr: 'तारोट' },
  { en: 'Career Guidance',       mr: 'करिअर मार्गदर्शन' },
  { en: 'Marriage Analysis',     mr: 'विवाह विश्लेषण' },
  { en: 'Business Consultation', mr: 'व्यवसाय सल्ला' },
  { en: 'Health Insights',       mr: 'आरोग्य अंतर्दृष्टी' },
]

export default function VedicHeritage() {
  const [active, setActive] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  /* Auto-advance carousel */
  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % VERSES.length), 5500)
    return () => clearInterval(t)
  }, [])

  const verse = VERSES[active]

  return (
    <section
      ref={ref}
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050510 0%, #080820 50%, #050510 100%)' }}
    >
      {/* Subtle star dots */}
      {[...Array(24)].map((_, i) => (
        <div
          key={i}
          className="pointer-events-none absolute rounded-full"
          style={{
            width: Math.random() * 2 + 1,
            height: Math.random() * 2 + 1,
            top: `${(i * 37) % 100}%`,
            left: `${(i * 53 + 11) % 100}%`,
            background: i % 4 === 0 ? '#C9A84C' : '#fff',
            opacity: 0.15 + (i % 5) * 0.06,
          }}
        />
      ))}

      <div className="max-w-5xl mx-auto">

        {/* ── Om divider ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="flex items-center justify-center gap-5 mb-20"
        >
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.35))' }} />
          <span
            style={{
              fontFamily: "'Tiro Devanagari Sanskrit', serif",
              fontSize: '30px',
              color: '#C9A84C',
              filter: 'drop-shadow(0 0 12px rgba(201,168,76,0.7))',
            }}
          >ॐ</span>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(201,168,76,0.35), transparent)' }} />
        </motion.div>

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-14"
        >
          <p
            className="font-garamond uppercase mb-3"
            style={{ fontSize: '12px', letterSpacing: '4px', color: 'rgba(201,168,76,0.55)' }}
          >
            Sacred Knowledge &nbsp;·&nbsp; <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif" }}>पवित्र ज्ञान</span>
          </p>
          <h2
            className="font-cinzel font-bold text-white"
            style={{ fontSize: 'clamp(28px, 5vw, 52px)', letterSpacing: '2px' }}
          >
            The Vedic Heritage
          </h2>
        </motion.div>

        {/* ── Verse carousel card ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative rounded-[6px] p-10 md:p-14 mb-12 overflow-hidden"
          style={{
            border: '1px solid rgba(201,168,76,0.2)',
            background: 'rgba(255,255,255,0.025)',
            boxShadow: 'inset 0 0 80px rgba(201,168,76,0.04)',
          }}
        >
          {/* Corner ornaments */}
          {['top-3 left-3', 'top-3 right-3', 'bottom-3 left-3', 'bottom-3 right-3'].map((cls, i) => (
            <svg key={i} className={`absolute pointer-events-none ${cls} opacity-30`} width="24" height="24" viewBox="0 0 24 24" fill="none"
              style={{ transform: ['','scaleX(-1)','scaleY(-1)','scale(-1,-1)'][i] }}>
              <path d="M1 1 L12 1 M1 1 L1 12" stroke="#C9A84C" strokeWidth="1.5" />
            </svg>
          ))}

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              {/* Devanagari verse */}
              <p
                className="mb-4"
                style={{
                  fontFamily: "'Tiro Devanagari Sanskrit', serif",
                  fontSize: 'clamp(26px, 4vw, 48px)',
                  color: '#C9A84C',
                  lineHeight: 1.4,
                  filter: 'drop-shadow(0 0 20px rgba(201,168,76,0.35))',
                }}
              >
                {verse.devanagari}
              </p>

              {/* Transliteration */}
              <p
                className="font-garamond italic mb-6"
                style={{ fontSize: 'clamp(14px, 1.8vw, 18px)', color: 'rgba(201,168,76,0.65)', letterSpacing: '1px' }}
              >
                {verse.transliteration}
              </p>

              {/* Gold divider */}
              <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)', margin: '0 auto 20px' }} />

              {/* English translation */}
              <p
                className="font-garamond text-cream/75 max-w-2xl mx-auto mb-4"
                style={{ fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: 1.85 }}
              >
                {verse.translation}
              </p>

              {/* Marathi */}
              <p
                className="mb-5"
                style={{
                  fontFamily: "'Tiro Devanagari Sanskrit', serif",
                  fontSize: 'clamp(13px, 1.5vw, 16px)',
                  color: 'rgba(245,236,215,0.4)',
                  letterSpacing: '1px',
                }}
              >
                {verse.marathi}
              </p>

              {/* Source */}
              <p
                className="font-garamond italic"
                style={{ fontSize: '13px', color: 'rgba(201,168,76,0.4)', letterSpacing: '1px' }}
              >
                {verse.source}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* ── Dots ── */}
        <div className="flex justify-center gap-3 mb-16">
          {VERSES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="transition-all duration-300"
              style={{
                width: i === active ? '28px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: i === active ? '#C9A84C' : 'rgba(201,168,76,0.3)',
              }}
              aria-label={`Verse ${i + 1}`}
            />
          ))}
        </div>

        {/* ── Service tags ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {TAGS.map(({ en, mr }) => (
            <span
              key={en}
              className="font-garamond"
              style={{
                fontSize: 'clamp(12px, 1.3vw, 14px)',
                color: 'rgba(245,236,215,0.65)',
                border: '1px solid rgba(201,168,76,0.25)',
                borderRadius: '20px',
                padding: '7px 18px',
                background: 'rgba(201,168,76,0.04)',
                letterSpacing: '0.5px',
              }}
            >
              {en} &nbsp;<span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", color: 'rgba(201,168,76,0.6)', fontSize: '0.9em' }}>· {mr}</span>
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
