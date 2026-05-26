'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

const STATS = [
  { value: '15+', label: 'Years of Practice', labelMr: 'वर्षांचा अनुभव' },
  { value: '5K+', label: 'Consultations Done', labelMr: 'समुपदेशन पूर्ण' },
  { value: '4',   label: 'Sacred Sciences', labelMr: 'शास्त्रांचे ज्ञान' },
  { value: '★4.9', label: 'Client Rating', labelMr: 'ग्राहक मूल्यांकन' },
]

const SERVICES_QUICK = [
  { name: 'Vedic Astrology', nameMr: 'ज्योतिषशास्त्र', price: '₹1,500', color: '#7B3FD4', href: '#astrology' },
  { name: 'Numerology',      nameMr: 'अंकशास्त्र',     price: '₹1,200', color: '#C9A84C', href: '#numerology' },
  { name: 'Vastu Shastra',   nameMr: 'वास्तुशास्त्र',  price: '₹2,500', color: '#2D7A4F', href: '#vastu' },
  { name: 'Tarot Reading',   nameMr: 'तारोट वाचन',     price: '₹800',   color: '#B22222', href: '#tarot' },
]

export default function BookNowBanner() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="relative overflow-hidden py-24 px-6"
      style={{ background: 'linear-gradient(180deg, #050510 0%, #07030F 50%, #050510 100%)' }}>

      {/* Gold radial glow — centre */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ width: '1000px', height: '500px', background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.07) 0%, transparent 65%)' }} />

      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4) 30%, rgba(201,168,76,0.4) 70%, transparent)' }} />

      {/* Devanagari watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden opacity-[0.025] select-none" aria-hidden>
        <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: 'clamp(120px,18vw,260px)', color: '#C9A84C', lineHeight: 1, letterSpacing: '-0.02em' }}>
          सल्लामसलत
        </span>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* ── Stats strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px mb-16"
          style={{ border: '1px solid rgba(201,168,76,0.15)', borderRadius: '4px', overflow: 'hidden', background: 'rgba(201,168,76,0.08)' }}>
          {STATS.map(({ value, label, labelMr }, i) => (
            <div key={i} className="flex flex-col items-center justify-center py-6 px-4 text-center"
              style={{ background: 'rgba(5,5,16,0.6)', borderRight: i < 3 ? '1px solid rgba(201,168,76,0.1)' : 'none' }}>
              <div className="font-cinzel font-bold" style={{ fontSize: 'clamp(22px,3vw,32px)', color: '#C9A84C', lineHeight: 1 }}>{value}</div>
              <div className="font-cinzel text-white mt-1" style={{ fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase' }}>{label}</div>
              <div style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: '11px', color: 'rgba(201,168,76,0.45)', marginTop: '3px' }}>{labelMr}</div>
            </div>
          ))}
        </motion.div>

        {/* ── Main heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-center mb-12">

          <p className="font-cinzel uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '5px', color: 'rgba(201,168,76,0.55)' }}>
            Begin Your Journey · <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", letterSpacing: 0 }}>आपला प्रवास सुरू करा</span>
          </p>

          <h2 className="font-cinzel font-bold text-white mb-4" style={{ fontSize: 'clamp(34px,5.5vw,72px)', letterSpacing: '2px', lineHeight: 1.05 }}>
            Book a Consultation
          </h2>

          <p style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: 'clamp(16px,2vw,22px)', color: 'rgba(201,168,76,0.6)', marginBottom: '16px' }}>
            ज्ञानाचा प्रकाश, जीवनाची दिशा — आजच सुरुवात करा
          </p>

          {/* Ornament divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div style={{ width: '80px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4))' }} />
            <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: '22px', color: 'rgba(201,168,76,0.55)' }}>ॐ</span>
            <div style={{ width: '80px', height: '1px', background: 'linear-gradient(90deg, rgba(201,168,76,0.4), transparent)' }} />
          </div>

          <p style={{ fontSize: 'clamp(15px,1.7vw,18px)', color: 'rgba(245,236,215,0.55)', lineHeight: 1.8, maxWidth: '560px', margin: '0 auto 40px' }}>
            Choose the science that speaks to your question. Every session is personal,
            private, and grounded in authentic Vedic tradition.
          </p>

          {/* ── CTA Buttons ── */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Link href="/booking"
              className="font-cinzel font-bold uppercase transition-all duration-300 hover:brightness-115 hover:scale-[1.03]"
              style={{ fontSize: '13px', letterSpacing: '2.5px', color: '#050510', background: 'linear-gradient(135deg, #C9A84C, #e8c96a)', padding: '16px 44px', borderRadius: '3px', boxShadow: '0 0 40px rgba(201,168,76,0.25)', display: 'inline-block' }}>
              Book Online · ऑनलाइन बुक करा
            </Link>
            <a href="https://wa.me/919999999999"
              target="_blank" rel="noopener noreferrer"
              className="font-cinzel font-semibold uppercase transition-all duration-300 hover:brightness-115 hover:scale-[1.03]"
              style={{ fontSize: '12px', letterSpacing: '2px', color: '#fff', background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.45)', padding: '16px 36px', borderRadius: '3px', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
              <WhatsAppIcon />
              WhatsApp Us
            </a>
          </div>
        </motion.div>

        {/* ── Service Quick-Pick ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}>

          <p className="font-cinzel text-center mb-5" style={{ fontSize: '10px', letterSpacing: '3.5px', textTransform: 'uppercase', color: 'rgba(245,236,215,0.3)' }}>
            Select a Service
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {SERVICES_QUICK.map(({ name, nameMr, price, color, href }, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.07 }}>
                <Link href={href}
                  className="flex flex-col items-center text-center p-5 rounded-[4px] group transition-all duration-300 hover:scale-[1.03]"
                  style={{ border: `1px solid ${color}28`, background: `${color}08` }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = `${color}55`)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = `${color}28`)}>
                  <div className="font-cinzel font-bold mb-1" style={{ fontSize: 'clamp(18px,2vw,24px)', color, lineHeight: 1 }}>
                    {price}
                  </div>
                  <div className="font-cinzel text-white font-semibold" style={{ fontSize: '11.5px', letterSpacing: '0.5px', marginBottom: '3px' }}>{name}</div>
                  <div style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: '11px', color: `${color}80` }}>{nameMr}</div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Bottom note ── */}
        <motion.p
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-10"
          style={{ fontSize: '12px', color: 'rgba(245,236,215,0.25)', letterSpacing: '0.5px' }}>
          Sessions available online & in-person · Confidential & private ·{' '}
          <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif" }}>गोपनीय सल्ला</span>
        </motion.p>

      </div>

      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.25) 30%, rgba(201,168,76,0.25) 70%, transparent)' }} />
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#25D366' }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
