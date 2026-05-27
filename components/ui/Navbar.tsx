'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { href: '/#services',  label: 'Services' },
  { href: '/#about',     label: 'About' },
  { href: '/blog',       label: 'Blog' },
  { href: '/shop',       label: 'Shop' },
  { href: '/media',      label: 'Media' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 border-b border-[rgba(201,168,76,0.12)]' : 'py-5'
      }`}
      style={{
        background: scrolled ? 'rgba(5,5,16,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
          <span
            style={{
              fontFamily: "'Tiro Devanagari Sanskrit', serif",
              fontSize: '30px',
              lineHeight: 1,
              color: '#C9A84C',
              filter: 'drop-shadow(0 0 10px rgba(201,168,76,0.65))',
            }}
          >ॐ</span>
          <div className="flex flex-col leading-tight">
            <span className="font-cinzel font-bold text-white" style={{ fontSize: '14px', letterSpacing: '2.5px' }}>
              ACHARYA SUMIT
            </span>
            <span className="font-garamond uppercase" style={{ fontSize: '10px', letterSpacing: '2.5px', color: 'rgba(201,168,76,0.88)' }}>
              Astrologer &middot; Numerologist &middot; Vastu
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-cinzel uppercase transition-colors duration-200 hover:text-gold"
              style={{ fontSize: '14px', letterSpacing: '2px', color: 'rgba(245,236,215,0.65)' }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/booking"
            className="font-cinzel font-semibold uppercase transition-all duration-200 hover:brightness-110"
            style={{
              fontSize: '12px',
              letterSpacing: '2px',
              color: '#050510',
              background: 'linear-gradient(135deg, #C9A84C, #e8c96a)',
              padding: '11px 24px',
              borderRadius: '3px',
              display: 'inline-block',
            }}
          >
            Book Consultation
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[6px] p-2"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className="block h-px bg-gold/70 w-6 transition-all duration-300"
            style={{ transform: open ? 'translateY(7px) rotate(45deg)' : '' }} />
          <span className="block h-px bg-gold/70 w-4 transition-all duration-300"
            style={{ opacity: open ? 0 : 1 }} />
          <span className="block h-px bg-gold/70 w-6 transition-all duration-300"
            style={{ transform: open ? 'translateY(-7px) rotate(-45deg)' : '' }} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${open ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}
        style={{ background: 'rgba(5,5,16,0.98)', borderTop: open ? '1px solid rgba(201,168,76,0.1)' : 'none' }}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-cinzel uppercase text-cream/65 hover:text-gold transition-colors"
              style={{ fontSize: '15px', letterSpacing: '2px' }}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="font-cinzel font-semibold uppercase text-cosmic text-center py-3 rounded-[3px] mt-2"
            style={{ fontSize: '12px', letterSpacing: '2px', background: 'linear-gradient(135deg, #C9A84C, #e8c96a)' }}
            onClick={() => setOpen(false)}
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </nav>
  )
}
