'use client'

import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Home',       labelMr: 'मुख्यपृष्ठ',   href: '/' },
  { label: 'Services',   labelMr: 'सेवा',          href: '/#services' },
  { label: 'Astrology',  labelMr: 'ज्योतिष',       href: '/#astrology' },
  { label: 'Numerology', labelMr: 'अंकशास्त्र',    href: '/#numerology' },
  { label: 'Vastu',      labelMr: 'वास्तुशास्त्र', href: '/#vastu' },
  { label: 'Tarot',      labelMr: 'तारोट',         href: '/#tarot' },
  { label: 'Shop',       labelMr: 'दुकान',          href: '/#shop' },
]

const QUICK_LINKS = [
  { label: 'Book a Session',   href: '/booking' },
  { label: 'About Acharya',    href: '/about' },
  { label: 'Blog',             href: '/blog' },
  { label: 'Media & Videos',   href: '/media' },
  { label: 'Privacy Policy',   href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
]

const SOCIALS = [
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/919999999999',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050510 0%, #02020A 100%)', borderTop: '1px solid rgba(201,168,76,0.12)' }}>

      {/* Top gold accent line */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.35) 25%, rgba(201,168,76,0.35) 75%, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">

        {/* ── Main 4-column grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            {/* Om logo */}
            <div className="flex items-center gap-3 mb-4">
              <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: '38px', color: '#C9A84C', lineHeight: 1, filter: 'drop-shadow(0 0 12px rgba(201,168,76,0.4))' }}>ॐ</span>
              <div>
                <div className="font-cinzel font-bold text-white" style={{ fontSize: '15px', letterSpacing: '2px' }}>ACHARYA SUMIT</div>
                <div style={{ fontSize: '12px', letterSpacing: '1.5px', color: 'rgba(201,168,76,0.85)', textTransform: 'uppercase' }}>Astrologer · Numerologist · Vastu</div>
              </div>
            </div>

            <p style={{ fontSize: '13.5px', color: 'rgba(245,236,215,0.45)', lineHeight: 1.85, marginBottom: '16px' }}>
              Guiding lives through the sacred sciences of Jyotish, Numerology, Vastu and Tarot — rooted in authentic Vedic tradition.
            </p>

            <p style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: '13px', color: 'rgba(201,168,76,0.78)', lineHeight: 1.7 }}>
              ज्ञानाचा प्रकाश, जीवनाची दिशा
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              {SOCIALS.map(({ name, href, icon }) => (
                <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name}
                  className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 hover:scale-110"
                  style={{ border: '1px solid rgba(201,168,76,0.35)', background: 'rgba(201,168,76,0.05)', color: 'rgba(201,168,76,0.85)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.75)'; e.currentTarget.style.color = '#E8C55A' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)'; e.currentTarget.style.color = 'rgba(201,168,76,0.85)' }}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <h4 className="font-cinzel font-bold text-white mb-1" style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase' }}>Navigation</h4>
            <div style={{ width: '36px', height: '1px', background: '#C9A84C', opacity: 0.4, marginBottom: '16px' }} />
            <ul className="space-y-3">
              {NAV_LINKS.map(({ label, labelMr, href }) => (
                <li key={label}>
                  <Link href={href}
                    className="group flex items-baseline gap-2 transition-colors duration-200"
                    style={{ color: 'rgba(245,236,215,0.45)', fontSize: '15px' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'rgba(201,168,76,0.85)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,236,215,0.45)')}>
                    <span className="font-cinzel" style={{ fontSize: '14px' }}>{label}</span>
                    <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: '13px', color: 'rgba(201,168,76,0.7)' }}>· {labelMr}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Quick Links */}
          <div>
            <h4 className="font-cinzel font-bold text-white mb-1" style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase' }}>Quick Links</h4>
            <div style={{ width: '36px', height: '1px', background: '#C9A84C', opacity: 0.4, marginBottom: '16px' }} />
            <ul className="space-y-3">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href}
                    className="font-cinzel transition-colors duration-200"
                    style={{ fontSize: '14px', color: 'rgba(245,236,215,0.45)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'rgba(201,168,76,0.85)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,236,215,0.45)')}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact + CTA */}
          <div>
            <h4 className="font-cinzel font-bold text-white mb-1" style={{ fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase' }}>Contact</h4>
            <div style={{ width: '36px', height: '1px', background: '#C9A84C', opacity: 0.4, marginBottom: '16px' }} />

            <div className="space-y-4 mb-6">
              <div>
                <div className="font-cinzel text-white" style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px' }}>WhatsApp</div>
                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: '13.5px', color: 'rgba(37,211,102,0.92)', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#25D366')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(37,211,102,0.92)')}>
                  +91 99999 99999
                </a>
              </div>
              <div>
                <div className="font-cinzel text-white" style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px' }}>Email</div>
                <a href="mailto:acharya@example.com"
                  style={{ fontSize: '13px', color: 'rgba(245,236,215,0.5)', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(201,168,76,0.85)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,236,215,0.5)')}>
                  acharya@example.com
                </a>
              </div>
              <div>
                <div className="font-cinzel text-white" style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px' }}>Sessions</div>
                <p style={{ fontSize: '13px', color: 'rgba(245,236,215,0.45)', lineHeight: 1.6 }}>Online · In-person<br />Mon – Sat, 9 AM – 7 PM</p>
              </div>
            </div>

            <Link href="/booking"
              className="inline-block font-cinzel font-bold uppercase transition-all duration-300 hover:brightness-115 hover:scale-[1.02]"
              style={{ fontSize: '13px', letterSpacing: '2px', color: '#050510', background: 'linear-gradient(135deg, #C9A84C, #e8c96a)', padding: '12px 28px', borderRadius: '3px', boxShadow: '0 0 24px rgba(201,168,76,0.2)' }}>
              Book Now · बुक करा
            </Link>
          </div>
        </div>

        {/* ── Divider with Om ── */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px" style={{ background: 'rgba(201,168,76,0.12)' }} />
          <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: '18px', color: 'rgba(201,168,76,0.7)' }}>ॐ</span>
          <div className="flex-1 h-px" style={{ background: 'rgba(201,168,76,0.12)' }} />
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p style={{ fontSize: '13px', color: 'rgba(245,236,215,0.25)', letterSpacing: '0.3px' }}>
            © {year} Acharya Sumit. All rights reserved.
          </p>
          <p style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: '13px', color: 'rgba(201,168,76,0.6)', textAlign: 'center' }}>
            सर्व हक्क राखीव · ज्योतिष · अंकशास्त्र · वास्तुशास्त्र · तारोट
          </p>
          <p style={{ fontSize: '13px', color: 'rgba(245,236,215,0.18)', letterSpacing: '0.5px' }}>
            Designed by{' '}
            <a href="https://tinyanglestudio.com" target="_blank" rel="noopener noreferrer"
              style={{ color: 'rgba(201,168,76,0.7)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#E8C55A')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(201,168,76,0.7)')}>
              TinyAngle Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
