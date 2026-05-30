import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <div
      className="relative z-20 flex flex-col items-center justify-center text-center px-6 h-full pointer-events-none select-none"
      style={{
        /* Top clears the fixed navbar (~80px) + breathing room, scales on tall screens.
           Bottom reserves space for the absolute scroll/note elements. */
        paddingTop:    'clamp(92px, 12vh, 160px)',
        paddingBottom: 'clamp(90px, 11vh, 140px)',
        /* All inter-element spacing lives here — one value, scales with viewport height */
        gap: 'clamp(6px, 1.4vh, 18px)',
      }}
    >

      {/* Om symbol */}
      <div className="relative flex flex-col items-center anim-fade-in delay-200">
        <div
          className="absolute anim-aura pointer-events-none"
          style={{
            top: '50%', left: '50%',
            /* Aura proportional to Om — uses same vh/vw min so it never overflows */
            width:  'clamp(120px, min(17vh, 15vw), 210px)',
            height: 'clamp(120px, min(17vh, 15vw), 210px)',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.48) 0%, rgba(201,168,76,0.20) 38%, rgba(201,168,76,0.05) 68%, transparent 82%)',
          }}
        />
        <span
          className="relative z-10 anim-om"
          style={{
            fontFamily: "'Tiro Devanagari Sanskrit', serif",
            /* Respects both viewport dimensions — won't be oversized on wide-short screens */
            fontSize: 'clamp(48px, min(9vh, 8vw), 108px)',
            color: '#C9A84C',
            lineHeight: 1,
          }}
        >ॐ</span>
      </div>

      {/* Sanskrit verse */}
      <p
        className="anim-fade-in delay-400"
        style={{
          fontFamily: "'Tiro Devanagari Sanskrit', serif",
          fontSize: 'clamp(11px, min(1.5vw, 2vh), 18px)',
          color: 'rgba(201,168,76,0.65)',
          letterSpacing: '3px',
        }}
      >
        ॐ तत् सत् &nbsp;·&nbsp; गायत्री मन्त्र &nbsp;·&nbsp; ॐ नमः शिवाय
      </p>

      {/* Main heading */}
      <h1
        className="font-cinzel font-bold text-white anim-fade-up delay-400"
        style={{
          fontSize: 'clamp(26px, min(5.5vw, 7vh), 82px)',
          lineHeight: 1.15,
          letterSpacing: '3px',
          textShadow: '0 0 60px rgba(201,168,76,0.3)',
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
            height: '1em', width: '0.74em',
            objectFit: 'fill',
            verticalAlign: '-0.28em',
            margin: '0 -0.1em',
            filter: 'drop-shadow(0 0 8px rgba(212,43,15,0.6))',
          }}
        />
        t
      </h1>

      {/* Gold divider */}
      <div
        className="anim-fade-in delay-600"
        style={{
          width: 'clamp(60px, 8vw, 100px)',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
        }}
      />

      {/* Tagline */}
      <p
        className="font-garamond anim-fade-up delay-600"
        style={{
          fontSize: 'clamp(13px, min(2vw, 2.8vh), 24px)',
          color: '#F5ECD7',
          opacity: 0.85,
          letterSpacing: '1px',
          maxWidth: '600px',
          lineHeight: 1.6,
        }}
      >
        Helping you find clarity through the wisdom of<br />
        <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>
          Astrology, Numerology &amp; Vastu Shastra
        </em>
      </p>

      {/* Service tags */}
      <div
        className="flex flex-wrap justify-center anim-fade-up delay-800"
        style={{ gap: 'clamp(6px, 0.8vw, 12px)' }}
      >
        {['Astrology', 'Numerology', 'Vastu', 'Tarot'].map(tag => (
          <span
            key={tag}
            className="font-garamond uppercase"
            style={{
              fontSize: 'clamp(10px, min(1.2vw, 1.7vh), 14px)',
              color: '#C9A84C',
              border: '1px solid rgba(201,168,76,0.4)',
              borderRadius: '20px',
              padding: 'clamp(5px, 0.8vh, 8px) clamp(12px, 1.4vw, 20px)',
              letterSpacing: '2px',
              background: 'rgba(201,168,76,0.07)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA buttons */}
      <div
        className="flex flex-wrap justify-center anim-fade-up delay-1000 pointer-events-auto"
        style={{ gap: 'clamp(10px, 1.2vw, 20px)' }}
      >
        <Link
          href="/booking"
          className="font-cinzel font-semibold uppercase anim-btn transition-transform duration-200 hover:-translate-y-0.5"
          style={{
            fontSize: 'clamp(11px, min(1.3vw, 1.8vh), 14px)',
            color: '#050510',
            background: 'linear-gradient(135deg, #C9A84C, #e8c96a, #C9A84C)',
            backgroundSize: '200% 200%',
            border: 'none',
            borderRadius: '4px',
            padding: 'clamp(10px, 1.6vh, 16px) clamp(22px, 2.8vw, 40px)',
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
            fontSize: 'clamp(11px, min(1.3vw, 1.8vh), 14px)',
            color: '#C9A84C',
            background: 'transparent',
            border: '1px solid rgba(201,168,76,0.5)',
            borderRadius: '4px',
            padding: 'clamp(9px, 1.5vh, 15px) clamp(18px, 2.4vw, 36px)',
            letterSpacing: '2.5px',
            display: 'inline-block',
          }}
        >
          Know More
        </Link>
      </div>

      {/* Scroll indicator — positioned proportionally from bottom */}
      <div
        className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 anim-fade-in delay-2000"
        style={{ bottom: 'clamp(52px, 7vh, 90px)' }}
      >
        <span
          className="font-garamond uppercase"
          style={{ fontSize: '10px', color: 'rgba(201,168,76,0.45)', letterSpacing: '3px' }}
        >
          Scroll
        </span>
        <div
          className="w-px anim-scroll-drop"
          style={{
            height: 'clamp(28px, 4vh, 48px)',
            background: 'linear-gradient(to bottom, rgba(201,168,76,0.6), transparent)',
          }}
        />
      </div>

      {/* Consultation note */}
      <p
        className="absolute left-1/2 -translate-x-1/2 font-garamond uppercase whitespace-nowrap anim-fade-in delay-2400"
        style={{
          bottom: 'clamp(14px, 2vh, 28px)',
          fontSize: 'clamp(9px, min(1.1vw, 1.4vh), 12px)',
          color: 'rgba(201,168,76,0.5)',
          letterSpacing: '2px',
        }}
      >
        📞 Consultation by Prior Appointment &nbsp;·&nbsp; Paid Sessions Only
      </p>
    </div>
  )
}
