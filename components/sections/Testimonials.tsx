'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

/* ── Testimonial data ─────────────────────────────────────── */
const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    city: 'Pune',
    service: 'Vedic Astrology',
    serviceColor: '#7B3FD4',
    rating: 5,
    quote:
      'Acharya Sumit\'s birth chart reading was incredibly accurate. He identified patterns in my life I had never been able to explain — and gave me a clear roadmap for the next two years. Truly life-changing guidance.',
    quoteMr: 'अत्यंत अचूक आणि मार्गदर्शक वाचन',
    initial: 'P',
  },
  {
    name: 'Rahul Deshmukh',
    city: 'Mumbai',
    service: 'Vastu Shastra',
    serviceColor: '#3d9963',
    rating: 5,
    quote:
      'After Acharya Sumit\'s Vastu consultation, we made simple changes to our home — no demolition, no construction. Within months the energy of the house felt completely different. Business improved and family harmony restored.',
    quoteMr: 'घराची ऊर्जा पूर्णपणे बदलली',
    initial: 'R',
  },
  {
    name: 'Sneha Kulkarni',
    city: 'Nashik',
    service: 'Numerology',
    serviceColor: '#C9A84C',
    rating: 5,
    quote:
      'I was sceptical about numerology until this session. Acharya Sumit decoded my name and birth date with such precision — the name correction he suggested has already brought noticeable positive shifts in my career.',
    quoteMr: 'नावातील बदलाने जीवन बदलले',
    initial: 'S',
  },
  {
    name: 'Amit Joshi',
    city: 'Nagpur',
    service: 'Tarot Reading',
    serviceColor: '#D03535',
    rating: 5,
    quote:
      'The tarot reading gave me absolute clarity on a business decision I had been postponing for months. Acharya Sumit\'s interpretation was compassionate, honest, and practical — not vague or fear-based at all.',
    quoteMr: 'स्पष्ट आणि व्यावहारिक मार्गदर्शन',
    initial: 'A',
  },
  {
    name: 'Meera Patil',
    city: 'Kolhapur',
    service: 'Vedic Astrology',
    serviceColor: '#7B3FD4',
    rating: 5,
    quote:
      'Consulted Acharya Sumit for marriage timing and compatibility. His Dasha analysis was spot on and the muhurta he suggested was perfect. The session was deeply personal and I felt genuinely heard and guided.',
    quoteMr: 'विवाह मुहूर्त व कुंडली विश्लेषण',
    initial: 'M',
  },
  {
    name: 'Vikram Naik',
    city: 'Aurangabad',
    service: 'Vastu Shastra',
    serviceColor: '#3d9963',
    rating: 5,
    quote:
      'We had a new office and wanted to ensure the Vastu was aligned before we moved in. Acharya Sumit did a thorough site analysis and provided extremely practical recommendations. Our business has grown 40% this year.',
    quoteMr: 'कार्यालयाची ऊर्जा व व्यवसाय वृद्धी',
    initial: 'V',
  },
]

const TOTAL = TESTIMONIALS.length

export default function TestimonialsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState(0)
  const [dir, setDir] = useState(1)

  const go = useCallback((next: number, d: number) => {
    setDir(d)
    setActive(((next % TOTAL) + TOTAL) % TOTAL)
  }, [])

  useEffect(() => {
    const id = setInterval(() => go(active + 1, 1), 5500)
    return () => clearInterval(id)
  }, [active, go])

  // 3 visible indices for desktop
  const visible = [0, 1, 2].map(i => (active + i) % TOTAL)

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-6"
      style={{
        background: 'linear-gradient(180deg, #050510 0%, #08060F 55%, #050510 100%)',
        paddingTop: 'clamp(3rem,8vw,7rem)',
        paddingBottom: 'clamp(3rem,8vw,7rem)',
      }}
    >
      {/* Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ width: '900px', height: '600px', background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.07) 0%, transparent 65%)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85 }}
          className="text-center mb-[clamp(2rem,4vw,3.5rem)]"
        >
          <p className="font-cinzel uppercase mb-3" style={{ fontSize: 'clamp(11px,1.1vw,13px)', letterSpacing: '4px', color: 'rgba(201,168,76,0.92)' }}>
            Voices of Transformation ·{' '}
            <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", letterSpacing: 0 }}>अनुभवांचे शब्द</span>
          </p>
          <h2 className="font-cinzel font-bold text-white mb-3" style={{ fontSize: 'clamp(30px, 5vw, 56px)', letterSpacing: '3px' }}>
            Client Testimonials
          </h2>
          <p style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: 'clamp(16px, 1.9vw, 22px)', color: 'rgba(201,168,76,0.9)', marginBottom: '16px' }}>
            ज्ञानाने बदललेले जीवन — आमच्या ग्राहकांचे अनुभव
          </p>
          <div style={{ width: 'clamp(48px,6vw,80px)', height: '2px', background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)', margin: '0 auto' }} />
        </motion.div>

        {/* ── Desktop: 3 cards ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="hidden md:grid grid-cols-3 gap-[clamp(12px,2vw,20px)]"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((idx, pos) => (
              <motion.div
                key={`${idx}-${active}`}
                initial={{ opacity: 0, x: dir * 55, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -dir * 55, scale: 0.96 }}
                transition={{ duration: 0.42, ease: 'easeOut', delay: pos * 0.06 }}
              >
                <TestimonialCard t={TESTIMONIALS[idx]} featured={pos === 1} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── Mobile: single card ── */}
        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="md:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={{ opacity: 0, x: dir * 45 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -dir * 45 }}
              transition={{ duration: 0.38 }}
            >
              <TestimonialCard t={TESTIMONIALS[active]} featured />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* ── Navigation ── */}
        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex items-center justify-center gap-6 mt-10"
        >
          <button
            onClick={() => go(active - 1, -1)}
            aria-label="Previous testimonial"
            className="flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110 hover:brightness-125"
            style={{
              width: 'clamp(36px,3.5vw,44px)',
              height: 'clamp(36px,3.5vw,44px)',
              border: '1px solid rgba(201,168,76,0.5)',
              background: 'rgba(201,168,76,0.08)',
              color: 'rgba(201,168,76,0.95)',
              fontSize: '18px',
            }}
          >
            ←
          </button>

          <div className="flex items-center gap-[10px]">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i, i > active ? 1 : -1)}
                aria-label={`Testimonial ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === active ? '26px' : '8px',
                  height: '8px',
                  background: i === active ? '#C9A84C' : 'rgba(201,168,76,0.38)',
                }}
              />
            ))}
          </div>

          <button
            onClick={() => go(active + 1, 1)}
            aria-label="Next testimonial"
            className="flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110 hover:brightness-125"
            style={{
              width: 'clamp(36px,3.5vw,44px)',
              height: 'clamp(36px,3.5vw,44px)',
              border: '1px solid rgba(201,168,76,0.5)',
              background: 'rgba(201,168,76,0.08)',
              color: 'rgba(201,168,76,0.95)',
              fontSize: '18px',
            }}
          >
            →
          </button>
        </motion.div>

        {/* ── Bottom note ── */}
        <p className="text-center mt-8 font-cinzel" style={{ fontSize: 'clamp(11px,1.1vw,13px)', letterSpacing: '2px', color: 'rgba(245,236,215,0.55)' }}>
          5,000+ consultations · Trusted across Maharashtra &amp; beyond
        </p>

      </div>
    </section>
  )
}

/* ── Single testimonial card ─────────────────────────────── */
function TestimonialCard({ t, featured = false }: { t: typeof TESTIMONIALS[0]; featured?: boolean }) {
  return (
    <div
      className="flex flex-col h-full rounded-[6px] transition-all duration-300"
      style={{
        padding: 'clamp(1rem,2vw,1.5rem)',
        border: featured ? '1px solid rgba(201,168,76,0.5)' : '1px solid rgba(201,168,76,0.2)',
        background: featured
          ? 'linear-gradient(145deg, rgba(201,168,76,0.1) 0%, rgba(5,5,16,0.97) 100%)'
          : 'rgba(5,5,16,0.75)',
        boxShadow: featured ? '0 0 52px rgba(201,168,76,0.12)' : 'none',
        minHeight: 'clamp(260px,35vw,340px)',
      }}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {Array.from({ length: t.rating }).map((_, i) => (
          <span key={i} style={{ color: '#C9A84C', fontSize: '17px', lineHeight: 1 }}>★</span>
        ))}
      </div>

      {/* Quote */}
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 'clamp(13px,1.3vw,15px)',
        color: 'rgba(245,236,215,0.92)',
        lineHeight: 1.8,
        marginBottom: '10px',
        flex: 1,
      }}>
        &ldquo;{t.quote}&rdquo;
      </p>

      {/* Marathi summary */}
      <p style={{
        fontFamily: "'Tiro Devanagari Sanskrit', serif",
        fontSize: 'clamp(13px,1.3vw,15px)',
        color: t.serviceColor,
        lineHeight: 1.5,
        marginBottom: 'clamp(10px,1.5vw,20px)',
        opacity: 0.95,
      }}>
        {t.quoteMr}
      </p>

      {/* Divider */}
      <div style={{ height: '1px', background: 'rgba(201,168,76,0.22)', marginBottom: '18px' }} />

      {/* Author row */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div
          className="flex-shrink-0 flex items-center justify-center rounded-full font-cinzel font-bold"
          style={{
            width: 'clamp(36px,3.5vw,44px)',
            height: 'clamp(36px,3.5vw,44px)',
            background: `${t.serviceColor}25`,
            border: `1px solid ${t.serviceColor}60`,
            color: t.serviceColor,
            fontSize: '17px',
          }}
        >
          {t.initial}
        </div>

        <div className="flex-1 min-w-0">
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(13px,1.3vw,16px)', fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>
            {t.name}
          </div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(12px,1.2vw,14px)', color: 'rgba(245,236,215,0.7)', marginTop: '2px' }}>
            {t.city}
          </div>
        </div>

        {/* Service badge */}
        <span
          className="flex-shrink-0 font-cinzel"
          style={{
            fontSize: 'clamp(10px,1vw,12px)',
            letterSpacing: '0.5px',
            color: t.serviceColor,
            background: `${t.serviceColor}20`,
            border: `1px solid ${t.serviceColor}50`,
            padding: '5px 11px',
            borderRadius: '12px',
            whiteSpace: 'nowrap',
          }}
        >
          {t.service}
        </span>
      </div>
    </div>
  )
}
