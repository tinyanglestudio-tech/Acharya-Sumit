'use client'

export interface IncludeCard {
  label: string
  labelMr: string
  symbol: string          // large decorative glyph in the visual area
  symbolFont?: string     // font override for symbol
  gradient: string        // CSS gradient for card image area
  glowColor: string       // rgba for bottom glow
}

interface Props {
  items: IncludeCard[]
  accentColor: string
  duration?: number       // seconds for one full loop
  heading?: string
  headingMr?: string
}

const CARD_W = 210
const CARD_H = 320
const GAP    = 16

export default function IncludesMarquee({
  items,
  accentColor,
  duration = 36,
  heading   = "What's Included",
  headingMr = 'काय समाविष्ट आहे?',
}: Props) {
  // Duplicate for seamless loop — need enough cards to fill viewport twice
  const doubled = [...items, ...items, ...items, ...items]

  return (
    <div className="mt-14 w-full">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <h3
          className="font-cinzel font-bold text-white"
          style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase' }}
        >
          {heading}
        </h3>
        <span
          style={{
            fontFamily: "'Tiro Devanagari Sanskrit', serif",
            fontSize: '13px',
            color: 'rgba(201,168,76,0.5)',
          }}
        >
          · {headingMr}
        </span>
        <div style={{ flex: 1, height: '1px', background: `${accentColor}30` }} />
      </div>

      {/* Marquee strip */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)',
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
      className="flex-shrink-0 rounded-[6px] overflow-hidden select-none"
      style={{
        width: `${CARD_W}px`,
        height: `${CARD_H}px`,
        border: `1px solid ${accentColor}28`,
        background: '#07060F',
      }}
    >
      {/* ── Image area (65%) ── */}
      <div
        className="relative overflow-hidden flex items-center justify-center"
        style={{ height: '65%', background: gradient }}
      >
        {/* Subtle grid overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.08]"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id={`grid-${label.slice(0,4)}`} width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${label.slice(0,4)})`} />
        </svg>

        {/* Decorative rings */}
        <div
          className="absolute rounded-full"
          style={{
            width: '120px', height: '120px',
            border: `1px solid ${accentColor}35`,
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: '80px', height: '80px',
            border: `1px solid ${accentColor}20`,
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Main symbol */}
        <span
          className="relative z-10"
          style={{
            fontSize: '64px',
            color: accentColor,
            opacity: 0.82,
            lineHeight: 1,
            fontFamily: symbolFont ?? "'Tiro Devanagari Sanskrit', serif",
            filter: `drop-shadow(0 0 20px ${accentColor}60)`,
          }}
        >
          {symbol}
        </span>

        {/* Bottom fade-out gradient */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: '50%',
            background: `linear-gradient(to bottom, transparent, ${glowColor})`,
          }}
        />
      </div>

      {/* ── Text area (35%) ── */}
      <div
        className="flex flex-col justify-center px-4 py-4"
        style={{
          height: '35%',
          borderTop: `1px solid ${accentColor}20`,
          background: 'rgba(5,5,16,0.85)',
        }}
      >
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '12.5px',
            fontWeight: 600,
            color: '#fff',
            lineHeight: 1.35,
            letterSpacing: '0.1px',
            marginBottom: '5px',
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontFamily: "'Tiro Devanagari Sanskrit', serif",
            fontSize: '11.5px',
            color: `${accentColor}90`,
            lineHeight: 1.4,
          }}
        >
          {labelMr}
        </div>
      </div>
    </div>
  )
}
