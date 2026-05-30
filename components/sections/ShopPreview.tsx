'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import products from '@/data/products.json'

type Filter = 'product' | 'service'

const BADGE_COLORS: Record<string, { bg: string; text: string }> = {
  'Most Popular': { bg: 'rgba(201,168,76,0.15)', text: '#C9A84C' },
  'Premium':      { bg: 'rgba(123,63,212,0.2)',  text: '#9B59B6' },
  'Best Value':   { bg: 'rgba(45,122,79,0.2)',   text: '#3d9963' },
}

const TYPE_COLOR: Record<string, string> = {
  service: '#7B3FD4',
  product: '#C9A84C',
}

export default function ShopPreview() {
  const [filter, setFilter] = useState<Filter>('product')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const visible = products.filter(p => p.type === filter)

  return (
    <section
      id="shop"
      ref={ref}
      className="relative"
      style={{
        height: '100dvh',
        overflow: 'clip',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(1rem,3vh,2rem) clamp(1rem,4vw,2rem)',
        background: 'linear-gradient(180deg, #050510 0%, #0A0820 50%, #050510 100%)',
      }}
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: '1000px', height: '600px',
          background: 'radial-gradient(ellipse at center, rgba(123,63,212,0.06) 0%, rgba(201,168,76,0.04) 40%, transparent 70%)',
        }}
      />

      {/* Faint Devanagari watermark */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.02] select-none"
        aria-hidden
      >
        <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: 'clamp(200px, 30vw, 400px)', color: '#C9A84C', lineHeight: 1 }}>
          सेवा
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 0, width: '100%' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-[clamp(0.5rem,1.5vh,1.25rem)]"
        >
          <p className="font-garamond uppercase mb-3" style={{ fontSize: 'clamp(10px,1.1vw,12px)', letterSpacing: '4px', color: 'rgba(201,168,76,0.55)' }}>
            Consultations &amp; Products &nbsp;·&nbsp;
            <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif" }}>सेवा आणि उत्पादने</span>
          </p>
          <h2
            className="font-cinzel font-bold text-white mb-4"
            style={{ fontSize: 'clamp(28px, 5vw, 52px)', letterSpacing: '2px' }}
          >
            Consultations &amp; Products
          </h2>
          <div style={{ width: 'clamp(48px,6vw,80px)', height: '2px', background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)', margin: '0 auto clamp(10px,1.5vw,20px)' }} />
          <p className="font-garamond text-cream/55 max-w-xl mx-auto" style={{ fontSize: 'clamp(15px, 1.8vw, 19px)', lineHeight: 1.85 }}>
            Premium spiritual services and authentic sacred products curated for your journey.
            <br />
            <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: '0.85em', color: 'rgba(201,168,76,0.45)' }}>
              आपल्या आध्यात्मिक प्रवासासाठी सर्वोत्तम सेवा आणि उत्पादने
            </span>
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center gap-[clamp(8px,1vw,12px)] mb-[clamp(0.5rem,1vh,1rem)]"
        >
          {([['product', 'Products'], ['service', 'Consultations']] as [Filter, string][]).map(([f, label]) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="font-cinzel uppercase transition-all duration-300"
              style={{
                fontSize: 'clamp(10px,1.1vw,12px)',
                letterSpacing: '2px',
                padding: 'clamp(7px,1vw,10px) clamp(16px,2.2vw,28px)',
                borderRadius: '24px',
                border: filter === f ? '1px solid #C9A84C' : '1px solid rgba(201,168,76,0.25)',
                background: filter === f ? '#C9A84C' : 'transparent',
                color: filter === f ? '#050510' : 'rgba(245,236,215,0.55)',
                fontWeight: filter === f ? '700' : '400',
              }}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[clamp(12px,2vw,20px)]" style={{ flex: 1, minHeight: 0 }}>
          {visible.map((item, i) => {
            const badgeStyle = item.badge ? BADGE_COLORS[item.badge] : null
            const typeColor = TYPE_COLOR[item.type]

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.08 }}
                className="relative rounded-[6px] flex flex-col overflow-hidden group"
                style={{
                  border: '1px solid rgba(255,255,255,0.07)',
                  background: 'rgba(255,255,255,0.025)',
                }}
              >
                {/* Badge */}
                {item.badge && badgeStyle && (
                  <div
                    className="absolute top-3 right-3 font-cinzel uppercase z-10"
                    style={{
                      fontSize: 'clamp(9px,0.9vw,11px)',
                      letterSpacing: '1.5px',
                      padding: '4px 10px',
                      borderRadius: '12px',
                      background: badgeStyle.bg,
                      color: badgeStyle.text,
                      border: `1px solid ${badgeStyle.text}40`,
                    }}
                  >
                    {item.badge}
                  </div>
                )}

                <div className="p-[clamp(0.5rem,1.5vw,1rem)] flex flex-col flex-1">
                  {/* Icon */}
                  <div
                    className="w-[clamp(2.5rem,3.5vw,3rem)] h-[clamp(2.5rem,3.5vw,3rem)] rounded-[8px] flex items-center justify-center mb-4"
                    style={{ background: `${typeColor}18`, border: `1px solid ${typeColor}35`, fontSize: 'clamp(16px,2vw,22px)' }}
                  >
                    {item.icon}
                  </div>

                  {/* Type label */}
                  <p
                    className="font-cinzel uppercase mb-2"
                    style={{ fontSize: 'clamp(9px,0.9vw,11px)', letterSpacing: '2px', color: typeColor }}
                  >
                    {item.type}
                  </p>

                  {/* Name */}
                  <h3 className="font-cinzel font-bold text-white mb-1" style={{ fontSize: 'clamp(13px,1.3vw,15px)', lineHeight: 1.3 }}>
                    {item.name}
                  </h3>

                  {/* Devanagari name */}
                  <p
                    className="mb-3"
                    style={{
                      fontFamily: "'Tiro Devanagari Sanskrit', serif",
                      fontSize: 'clamp(10px,1.1vw,12px)',
                      color: 'rgba(201,168,76,0.45)',
                    }}
                  >
                    {item.nameDevanagari}
                  </p>

                  {/* Description */}
                  <p
                    className="font-garamond text-cream/50 mb-5 flex-1"
                    style={{ fontSize: 'clamp(11px,1.1vw,13px)', lineHeight: 1.7 }}
                  >
                    {item.description}
                  </p>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      {item.pricePrefix && (
                        <span className="font-garamond text-cream/40" style={{ fontSize: 'clamp(10px,1vw,12px)', marginRight: '4px' }}>
                          {item.pricePrefix}
                        </span>
                      )}
                      <span
                        className="font-cinzel font-bold"
                        style={{ fontSize: 'clamp(15px,1.8vw,20px)', color: typeColor }}
                      >
                        ₹{item.price.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <Link
                      href={item.href}
                      className="font-cinzel font-semibold uppercase transition-all duration-300 hover:brightness-110"
                      style={{
                        fontSize: 'clamp(10px,1vw,12px)',
                        letterSpacing: '1.5px',
                        padding: 'clamp(7px,0.9vw,9px) clamp(12px,1.6vw,18px)',
                        borderRadius: '3px',
                        background: item.type === 'service'
                          ? 'linear-gradient(135deg, #C9A84C, #e8c96a)'
                          : 'transparent',
                        color: item.type === 'service' ? '#050510' : '#C9A84C',
                        border: item.type === 'product' ? '1px solid rgba(201,168,76,0.5)' : 'none',
                      }}
                    >
                      {item.cta}
                    </Link>
                  </div>
                </div>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[6px]"
                  style={{ boxShadow: `inset 0 0 60px ${typeColor}18` }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mt-[clamp(0.5rem,1vh,1rem)]"
        >
          <Link
            href="/shop"
            className="font-cinzel font-semibold uppercase transition-all duration-300 hover:brightness-110 inline-block"
            style={{
              fontSize: 'clamp(11px,1.1vw,13px)',
              letterSpacing: '2.5px',
              color: '#C9A84C',
              border: '1px solid rgba(201,168,76,0.35)',
              padding: 'clamp(10px,1.4vw,14px) clamp(24px,3vw,40px)',
              borderRadius: '3px',
              background: 'rgba(201,168,76,0.04)',
            }}
          >
            View All &nbsp;·&nbsp; <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: '0.95em' }}>सर्व पहा</span>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
