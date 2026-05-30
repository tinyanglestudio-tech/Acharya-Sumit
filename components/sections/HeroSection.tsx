import Image from 'next/image'
import Link from 'next/link'

const OM_SIZE = 'clamp(72px, 11vw, 130px)'

export default function HeroSection() {
  return (
    <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 h-full pointer-events-none select-none pt-24 pb-40">

      {/* ── Om symbol — circular aura ── */}
      <div className="relative flex flex-col items-center mb-4 anim-fade-in delay-200">
        <div
          className="absolute anim-aura pointer-events-none"
          style={{
            top: '50%',
            left: '50%',
            width: 'clamp(160px, 22vw, 260px)',
            height: 'clamp(160px, 22vw, 260px)',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.50) 0%, rgba(201,168,76,0.22) 35%, rgba(201,168,76,0.06) 65%, transparent 80%)',
          }}
        />
        <span
          className="relative z-10 anim-om"
          style={{
            fontFamily: "'Tiro Devanagari Sanskrit', serif",
            fontSize: OM_SIZE,
            color: '#C9A84C',
            lineHeight: 1,
          }}
        >ॐ</span>
      </div>

      {/* ── Sanskrit verse ── */}
      <p
        className="mb-6 anim-fade-in delay-400"
        style={{
          fontFamily: "'Tiro Devanagari Sanskrit', serif",
          fontSize: 'clamp(13px, 1.8vw, 20px)',
          color: 'rgba(201,168,76,0.65)',
          letterSpacing: '3px',
        }}
      >
        ॐ तत् सत् &nbsp;·&nbsp; गायत्री मन्त्र &nbsp;·&nbsp; ॐ नमः शिवाय
      </p>

      {/* ── Main heading with tilak ── */}
      <h1
        className="font-cinzel font-bold text-white anim-fade-up delay-400"
        style={{
          fontSize: 'clamp(36px, 6vw, 86px)',
          lineHeight: 1.15,
          letterSpacing: '3px',
          textShadow: '0 0 60px rgba(201,168,76,0.3)',
          marginBottom: '16px',
        }}
      >
        Acharya Sum
        <Image
          src="/tilak.png"
          alt=""
          width={60}
          height={90}
          className="inline-block anim-tilak-rise delay-800"
          style={{
            height: '1em',
            width:  '0.74em',
            objectFit: 'fill',
            verticalAlign: '-0.28em',
            margin: '0 -0.1em',
            filter: 'drop-shadow(0 0 8px rgba(212,43,15,0.6))',
          }}
        />
        t
      </h1>

      {/* ── Gold divider ── */}
      <div
        className="anim-fade-in delay-600"
        style={{
          width: '100px',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
          margin: '0 auto 24px',
        }}
      />

      {/* ── Tagline ── */}
      <p
        className="font-garamond anim-fade-up delay-600"
        style={{
          fontSize: 'clamp(16px, 2.2vw, 26px)',
          color: '#F5ECD7',
          opacity: 0.85,
          letterSpacing: '1px',
          maxWidth: '620px',
          lineHeight: 1.7,
          marginBottom: '10px',
        }}
      >
        Helping you find clarity through the wisdom of<br />
        <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>
          Astrology, Numerology &amp; Vastu Shastra
        </em>
      </p>

      {/* ── Service tags ── */}
      <div className="flex flex-wrap gap-3 justify-center mb-8 anim-fade-up delay-800">
        {['Astrology', 'Numerology', 'Vastu', 'Tarot'].map(tag => (
          <span
            key={tag}
            className="font-garamond uppercase"
            style={{
              fontSize: 'clamp(12px, 1.4vw, 15px)',
              color: '#C9A84C',
              border: '1px solid rgba(201,168,76,0.4)',
              borderRadius: '20px',
              padding: '7px 20px',
              letterSpacing: '2px',
              background: 'rgba(201,168,76,0.07)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* ── CTA buttons ── */}
      <div className="flex flex-wrap gap-5 justify-center anim-fade-up delay-1000 pointer-events-auto">
        <Link
          href="/booking"
          className="font-cinzel font-semibold uppercase anim-btn transition-transform duration-200 hover:-translate-y-0.5"
          style={{
            fontSize: 'clamp(12px, 1.4vw, 15px)',
            color: '#050510',
            background: 'linear-gradient(135deg, #C9A84C, #e8c96a, #C9A84C)',
            backgroundSize: '200% 200%',
            border: 'none',
            borderRadius: '4px',
            padding: '16px 40px',
            letterSpacing: '2.5px',
            display: 'inline-block',
          }}
        >
          Book Consultation
        </Link>
        <Link
          href="#services"
          className="font-cinzel font-semibold uppercase transition-all duration-200 hover:bg-white/5"
          style={{
            fontSize: 'clamp(12px, 1.4vw, 15px)',
            color: '#C9A84C',
            background: 'transparent',
            border: '1px solid rgba(201,168,76,0.5)',
            borderRadius: '4px',
            padding: '15px 36px',
            letterSpacing: '2.5px',
            display: 'inline-block',
          }}
        >
          Know More
        </Link>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 anim-fade-in delay-2000">
        <span
          className="font-garamond uppercase"
          style={{ fontSize: '10px', color: 'rgba(201,168,76,0.45)', letterSpacing: '3px' }}
        >
          Scroll
        </span>
        <div
          className="w-px h-12 anim-scroll-drop"
          style={{ background: 'linear-gradient(to bottom, rgba(201,168,76,0.6), transparent)' }}
        />
      </div>

      {/* ── Consultation note ── */}
      <p
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-garamond uppercase whitespace-nowrap anim-fade-in delay-2400"
        style={{ fontSize: '12px', color: 'rgba(201,168,76,0.5)', letterSpacing: '2px' }}
      >
        📞 Consultation by Prior Appointment &nbsp;·&nbsp; Paid Sessions Only
      </p>
    </div>
  )
}
