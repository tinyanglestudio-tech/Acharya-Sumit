'use client'

import { useState, useEffect } from 'react'

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  /* Show after a short delay so it doesn't pop in immediately */
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1200)
    return () => clearTimeout(t)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '10px',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      {/* Tooltip label */}
      <div
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '13px',
          fontWeight: 500,
          color: '#fff',
          background: 'rgba(10,10,30,0.92)',
          border: '1px solid rgba(37,211,102,0.35)',
          backdropFilter: 'blur(10px)',
          padding: '7px 14px',
          borderRadius: '20px',
          whiteSpace: 'nowrap',
          letterSpacing: '0.3px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateX(0)' : 'translateX(8px)',
          pointerEvents: 'none',
        }}
      >
        Chat with us on WhatsApp 💬
      </div>

      {/* WhatsApp button */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '62px',
          height: '62px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 55%, #075E54 100%)',
          boxShadow: hovered
            ? '0 0 0 6px rgba(37,211,102,0.2), 0 0 40px rgba(37,211,102,0.6), 0 8px 32px rgba(0,0,0,0.5)'
            : '0 0 0 3px rgba(37,211,102,0.15), 0 0 24px rgba(37,211,102,0.35), 0 6px 24px rgba(0,0,0,0.45)',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
          transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
          textDecoration: 'none',
          flexShrink: 0,
          position: 'relative',
          overflow: 'visible',
        }}
      >
        {/* Animated ping ring */}
        <span
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            background: 'rgba(37,211,102,0.4)',
            animation: 'wa-ping 2.2s ease-out infinite',
            pointerEvents: 'none',
          }}
        />
        {/* Second offset ping */}
        <span
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            background: 'rgba(37,211,102,0.25)',
            animation: 'wa-ping 2.2s ease-out 0.7s infinite',
            pointerEvents: 'none',
          }}
        />

        {/* WhatsApp SVG */}
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="white"
          style={{ position: 'relative', zIndex: 1, filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.3))' }}
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  )
}
