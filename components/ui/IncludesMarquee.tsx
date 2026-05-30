'use client'

export interface IncludeCard {
  label: string
  labelMr: string
  symbol: string
  symbolFont?: string
  gradient: string
  glowColor: string
}

interface Props {
  items: IncludeCard[]
  accentColor: string
  duration?: number
  heading?: string
  headingMr?: string
}

const GAP = 12

export default function IncludesMarquee({
  items,
  accentColor,
  duration = 36,
  heading   = "What's Included",
  headingMr = 'काय समाविष्ट आहे?',
}: Props) {
  const doubled = [...items, ...items, ...items, ...items]

  return (
    /* mt scales with vh so marquee + grid together fill 100dvh */
    <div style={{ marginTop: 'clamp(0.5rem, 1.5vh, 1.25rem)', width: '100%' }}>

      {/* Header row */}
      <div className="flex items-center gap-3" style={{ marginBottom: 'clamp(6px, 1vh, 14px)' }}>
        <h3
          className="font-cinzel font-bold text-white"
          style={{ fontSize: 'clamp(11px, 1.3vw, 15px)', letterSpacing: '3px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}
        >
          {heading}
        </h3>
        <span
          style={{
            fontFamily: "'Tiro Devanagari Sanskrit', serif",
            fontSize: 'clamp(12px, 1.4vw, 16px)',
            color: 'rgba(201,168,76,0.9)',
            whiteSpace: 'nowrap',
          }}
        >
          · {headingMr}
        </span>
        <div style={{ flex: 1, height: '1px', background: `${accentColor}50` }} />
      </div>

      {/* Marquee strip */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage: 'linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)',
        }}
      >
        <div
          className="marquee-track flex"
          style={{
            '--marquee-dur': `${duration}s`,
            gap: `${GAP}px`,
            paddingLeft: `${GAP}px`,
            width: 'max-content',
          } as React.CSSProperties}
        >
          {doubled.map((card, i) => (
            <MarqueeCard key={i} card={card} accentColor={accentColor} />
          ))}
        </div>
      </div>
    </div>
  )
}

function MarqueeCard({ card, accentColor }: { card: IncludeCard; accentColor: string }) {
  const { label, labelMr, symbol, symbolFont, gradient, glowColor } = card

  return (
    <div
      className="flex-shrink-0 rounded-[6px] overflow-hidden select-none flex flex-col"
      style={{
        /* Card dimensions scale with viewport height — fits ~3 cards in the marquee zone */
        width:  'clamp(110px, 15vw, 170px)',
        height: 'clamp(130px, 22vh, 210px)',
        border: `1px solid ${accentColor}28`,
        background: '#07060F',
      }}
    >
      {/* Image area — 62% of card height */}
      <div
        className="relative overflow-hidden flex items-center justify-center flex-shrink-0"
        style={{ height: '62%', background: gradient }}
      >
        <svg className="absolute inset-0 w-full h-full opacity-[0.08]" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id={`grid-${label.slice(0,4)}`} width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${label.slice(0,4)})`} />
        </svg>

        <div className="absolute rounded-full" style={{ width: 'clamp(50px,8vw,80px)', height: 'clamp(50px,8vw,80px)', border: `1px solid ${accentColor}35`, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
        <div className="absolute rounded-full" style={{ width: 'clamp(32px,5vw,54px)', height: 'clamp(32px,5vw,54px)', border: `1px solid ${accentColor}20`, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />

        <span
          className="relative z-10"
          style={{
            fontSize: 'clamp(28px, 5vw, 44px)',
            color: accentColor,
            opacity: 0.82,
            lineHeight: 1,
            fontFamily: symbolFont ?? "'Tiro Devanagari Sanskrit', serif",
            filter: `drop-shadow(0 0 12px ${accentColor}60)`,
          }}
        >
          {symbol}
        </span>

        <div className="absolute bottom-0 left-0 right-0" style={{ height: '50%', background: `linear-gradient(to bottom, transparent, ${glowColor})` }} />
      </div>

      {/* Text area — 38% of card height */}
      <div
        className="flex flex-col justify-center px-3"
        style={{
          flex: 1,
          borderTop: `1px solid ${accentColor}35`,
          background: 'rgba(5,5,16,0.85)',
          padding: 'clamp(4px, 0.8vh, 10px) clamp(8px, 1vw, 14px)',
          overflow: 'hidden',
        }}
      >
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(9px, 1.1vw, 12px)', fontWeight: 600, color: '#fff', lineHeight: 1.3, marginBottom: '3px', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' } as React.CSSProperties}>
          {label}
        </div>
        <div style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: 'clamp(9px, 1vw, 11px)', color: accentColor, lineHeight: 1.3, opacity: 0.9, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
          {labelMr}
        </div>
      </div>
    </div>
  )
}
