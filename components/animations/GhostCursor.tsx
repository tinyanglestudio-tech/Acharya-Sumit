'use client'

import React, { useEffect, useRef } from 'react'

type GhostCursorProps = {
  color?: string
  brightness?: number
  zIndex?: number
  // kept for API compatibility — unused in CSS impl
  className?: string
  style?: React.CSSProperties
  trailLength?: number
  inertia?: number
  grainIntensity?: number
  bloomStrength?: number
  bloomRadius?: number
  bloomThreshold?: number
  mixBlendMode?: React.CSSProperties['mixBlendMode']
  edgeIntensity?: number
  maxDevicePixelRatio?: number
  targetPixels?: number
  fadeDelayMs?: number
  fadeDurationMs?: number
}

function hexToRgb(hex: string) {
  const h = hex.replace('#', '')
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ].join(', ')
}

export const GhostCursor: React.FC<GhostCursorProps> = ({
  color = '#C9A84C',
  brightness = 1,
  zIndex = 10,
}) => {
  const blobRef = useRef<HTMLDivElement>(null)
  const coreRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const x = e.clientX
      const y = e.clientY
      if (blobRef.current) blobRef.current.style.transform = `translate(${x}px, ${y}px)`
      if (coreRef.current) coreRef.current.style.transform = `translate(${x}px, ${y}px)`
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  const rgb = hexToRgb(color)

  return (
    <>
      {/* Outer bloom — large soft halo */}
      <div
        ref={blobRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '340px',
          height: '340px',
          marginLeft: '-170px',
          marginTop: '-170px',
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(${rgb},0.42) 0%, rgba(${rgb},0.18) 40%, transparent 70%)`,
          filter: 'blur(38px)',
          mixBlendMode: 'screen',
          pointerEvents: 'none',
          zIndex,
          opacity: brightness,
          willChange: 'transform',
          transform: 'translate(-600px, -600px)',
        }}
      />
      {/* Inner core — tight bright spot */}
      <div
        ref={coreRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '72px',
          height: '72px',
          marginLeft: '-36px',
          marginTop: '-36px',
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(${rgb},0.85) 0%, rgba(${rgb},0.45) 50%, transparent 70%)`,
          filter: 'blur(7px)',
          mixBlendMode: 'screen',
          pointerEvents: 'none',
          zIndex,
          opacity: brightness,
          willChange: 'transform',
          transform: 'translate(-600px, -600px)',
        }}
      />
    </>
  )
}

export default GhostCursor
