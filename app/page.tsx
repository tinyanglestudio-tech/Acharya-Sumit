'use client'

import dynamic from 'next/dynamic'
import MandalaRings from '@/components/animations/MandalaRings'
import HeroSection from '@/components/sections/HeroSection'

const StarField   = dynamic(() => import('@/components/animations/StarField'),  { ssr: false })
const GhostCursor = dynamic(() => import('@/components/animations/GhostCursor'), { ssr: false })

export default function HomePage() {
  return (
    <main
      className="relative w-screen h-screen overflow-hidden"
      style={{ cursor: "url('/trishul-cursor.svg') 6 0, auto" }}
    >
      {/* Layer 0 — cosmic radial gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 40%, #1a0a3e 0%, transparent 70%),
            radial-gradient(ellipse 60% 80% at 20% 80%, #0a0a2e 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 80% 20%, #0f0520 0%, transparent 60%),
            #050510
          `,
        }}
      />

      {/* Layer 1 — star field */}
      <StarField />

      {/* Layer 2 — rotating mandala rings */}
      <MandalaRings />

      {/* Layer 3 — corner ornaments */}
      <CornerOrnaments />

      {/* Layer 10 — ghost cursor glow */}
      <GhostCursor
        color="#7B3FD4"
        bloomStrength={0.06}
        bloomRadius={0.5}
        brightness={0.45}
        inertia={0.08}
        trailLength={24}
        grainIntensity={0.04}
        zIndex={10}
      />

      {/* Layer 20 — hero content */}
      <HeroSection />
    </main>
  )
}

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
