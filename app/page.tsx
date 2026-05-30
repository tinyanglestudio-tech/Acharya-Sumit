'use client'

import dynamic from 'next/dynamic'
import MandalaRings from '@/components/animations/MandalaRings'
import HeroSection from '@/components/sections/HeroSection'
import Navbar from '@/components/ui/Navbar'
import VedicHeritage from '@/components/sections/VedicHeritage'
import ServicesReveal from '@/components/sections/ServicesReveal'
import AstrologySection from '@/components/sections/Astrology'
import NumerologySection from '@/components/sections/Numerology'
import VastuSection from '@/components/sections/Vastu'
import TarotSection from '@/components/sections/Tarot'
import AboutSection from '@/components/sections/About'
import ShopPreview from '@/components/sections/ShopPreview'
import TestimonialsSection from '@/components/sections/Testimonials'
import BookNowBanner from '@/components/sections/BookNowBanner'
import Footer from '@/components/sections/Footer'

const StarField   = dynamic(() => import('@/components/animations/StarField'),   { ssr: false })
const GhostCursor = dynamic(() => import('@/components/animations/GhostCursor'), { ssr: false })

export default function HomePage() {
  return (
    <div
      className="relative bg-cosmic"
      style={{ cursor: "url('/trishul-cursor.svg') 6 0, auto" }}
    >
      {/* Fixed navbar */}
      <Navbar />

      {/* Ghost cursor glow */}
      <GhostCursor color="#7B3FD4" brightness={0.45} zIndex={10} />

      {/* ── HERO — full viewport height ── */}
      <div
        id="home"
        className="relative w-screen h-screen"
        style={{
          height: '100dvh',
          overflow: 'clip',
          background: `
            radial-gradient(ellipse 80% 60% at 50% 40%, #1a0a3e 0%, transparent 70%),
            radial-gradient(ellipse 60% 80% at 20% 80%, #0a0a2e 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 80% 20%, #0f0520 0%, transparent 60%),
            #050510
          `,
        }}
      >
        <StarField />
        <MandalaRings />
        <CornerOrnaments />
        <HeroSection />
      </div>

      {/* ── VEDIC HERITAGE — Sanskrit verse carousel ── */}
      <VedicHeritage />

      {/* ── SERVICES OVERVIEW — 4-card grid ── */}
      <ServicesReveal />

      {/* ── INDIVIDUAL SERVICE SECTIONS ── */}
      <AstrologySection />
      <NumerologySection />
      <VastuSection />
      <TarotSection />

      {/* ── ABOUT — Acharya Sumit bio ── */}
      <AboutSection />

      {/* ── SHOP — Consultations & Products ── */}
      <ShopPreview />

      {/* ── TESTIMONIALS — Client voices ── */}
      <TestimonialsSection />

      {/* ── BOOK NOW — CTA conversion banner ── */}
      <BookNowBanner />

      {/* ── FOOTER ── */}
      <Footer />
    </div>
  )
}

/* ── Corner gold ornaments ─────────────────────────── */
function CornerOrnaments() {
  const corners = [
    { cls: 'top-6 left-6',     transform: '' },
    { cls: 'top-6 right-6',    transform: 'scaleX(-1)' },
    { cls: 'bottom-6 left-6',  transform: 'scaleY(-1)' },
    { cls: 'bottom-6 right-6', transform: 'scale(-1,-1)' },
  ]
  return (
    <>
      {corners.map(({ cls, transform }, i) => (
        <svg
          key={i}
          className={`pointer-events-none absolute z-[5] w-[60px] h-[60px] opacity-25 ${cls}`}
          style={{ transform }}
          viewBox="0 0 60 60"
          fill="none"
        >
          <path d="M2 2 L30 2 M2 2 L2 30" stroke="#C9A84C" strokeWidth="1.5" />
          <path d="M8 2 L8 8 L2 8"        stroke="#C9A84C" strokeWidth="0.5" />
          <circle cx="2" cy="2" r="2" fill="#C9A84C" />
        </svg>
      ))}
    </>
  )
}
