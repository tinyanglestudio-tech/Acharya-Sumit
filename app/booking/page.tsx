'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/sections/Footer'

const SERVICES = [
  { id: 'astrology',  name: 'Vedic Astrology',  nameMr: 'ज्योतिषशास्त्र', price: '₹1,500', duration: '60 min', color: '#7B3FD4', symbol: '☽', needsDob: true  },
  { id: 'numerology', name: 'Numerology',        nameMr: 'अंकशास्त्र',     price: '₹1,200', duration: '45 min', color: '#C9A84C', symbol: '∞', needsDob: true  },
  { id: 'vastu',      name: 'Vastu Shastra',     nameMr: 'वास्तुशास्त्र',  price: '₹2,500', duration: '90 min', color: '#3d9963', symbol: '⊕', needsDob: false },
  { id: 'tarot',      name: 'Tarot Reading',     nameMr: 'तारोट वाचन',     price: '₹800',   duration: '30 min', color: '#B22222', symbol: '✦', needsDob: false },
]

const TIME_SLOTS = [
  '9:00 AM – 10:00 AM', '10:00 AM – 11:00 AM', '11:00 AM – 12:00 PM',
  '2:00 PM – 3:00 PM',  '3:00 PM – 4:00 PM',   '5:00 PM – 6:00 PM',  '6:00 PM – 7:00 PM',
]

interface FormState {
  service: string
  name: string
  email: string
  phone: string
  dob: string
  sessionType: 'online' | 'inperson'
  preferredDate: string
  timeSlot: string
  message: string
  agree: boolean
}

const EMPTY: FormState = {
  service: '', name: '', email: '', phone: '', dob: '',
  sessionType: 'online', preferredDate: '', timeSlot: '', message: '', agree: false,
}

export default function BookingPage() {
  const [form, setForm]           = useState<FormState>(EMPTY)
  const [errors, setErrors]       = useState<Partial<Record<keyof FormState, string>>>({})
  const [loading, setLoading]     = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const selectedSvc = SERVICES.find(s => s.id === form.service)

  function set<K extends keyof FormState>(key: K, val: FormState[K]) {
    setForm(f => ({ ...f, [key]: val }))
    setErrors(e => ({ ...e, [key]: '' }))
  }

  function validate(): boolean {
    const e: Partial<Record<keyof FormState, string>> = {}
    if (!form.service)       e.service       = 'Please select a service.'
    if (!form.name.trim())   e.name          = 'Name is required.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email.'
    if (!/^\+?[\d\s\-]{8,15}$/.test(form.phone))         e.phone = 'Enter a valid phone number.'
    if (selectedSvc?.needsDob && !form.dob)               e.dob   = 'Date of birth is required for this service.'
    if (!form.preferredDate) e.preferredDate = 'Please choose a preferred date.'
    if (!form.timeSlot)      e.timeSlot      = 'Please select a time slot.'
    if (!form.agree)         e.agree         = 'Please accept the terms to continue.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    // TODO: POST to /api/bookings + trigger Razorpay/Calendly
    await new Promise(r => setTimeout(r, 1800))
    setLoading(false)
    setSubmitted(true)
  }

  // ── Success screen ──────────────────────────────────────
  if (submitted) {
    return (
      <div className="min-h-screen bg-cosmic text-cream flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center px-6 py-32">
          <div className="max-w-lg text-center">
            <div style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: '72px', color: '#C9A84C', lineHeight: 1, filter: 'drop-shadow(0 0 30px rgba(201,168,76,0.5))', marginBottom: '24px' }}>ॐ</div>
            <h2 className="font-cinzel font-bold text-white mb-3" style={{ fontSize: 'clamp(24px,3.5vw,40px)', letterSpacing: '2px' }}>
              Booking Received
            </h2>
            <p style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: '18px', color: 'rgba(201,168,76,0.6)', marginBottom: '20px' }}>
              आपली विनंती प्राप्त झाली
            </p>
            <div className="p-6 rounded-[6px] mb-8 text-left" style={{ border: '1px solid rgba(201,168,76,0.2)', background: 'rgba(201,168,76,0.05)' }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '15px', color: 'rgba(245,236,215,0.7)', lineHeight: 1.8 }}>
                Thank you, <strong style={{ color: '#fff' }}>{form.name}</strong>. Your request for a{' '}
                <strong style={{ color: selectedSvc?.color }}>{selectedSvc?.name}</strong> session has been noted.
                Acharya Sumit's team will confirm your slot via WhatsApp or email within <strong style={{ color: '#fff' }}>24 hours</strong>.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer"
                className="font-cinzel font-semibold uppercase"
                style={{ fontSize: '11px', letterSpacing: '2px', color: '#25D366', border: '1px solid rgba(37,211,102,0.4)', padding: '12px 28px', borderRadius: '3px', display: 'inline-block' }}>
                WhatsApp Us
              </a>
              <Link href="/"
                className="font-cinzel font-semibold uppercase"
                style={{ fontSize: '11px', letterSpacing: '2px', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.35)', padding: '12px 28px', borderRadius: '3px', display: 'inline-block' }}>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  // ── Main form ───────────────────────────────────────────
  return (
    <div className="min-h-screen bg-cosmic text-cream flex flex-col">
      <Navbar />

      {/* Page hero */}
      <div className="relative pt-28 pb-14 px-6 text-center overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #050510 0%, #0a0820 100%)' }}>
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ width: '800px', height: '400px', background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.07) 0%, transparent 65%)' }} />
        <p className="font-cinzel uppercase mb-2 relative z-10" style={{ fontSize: '11px', letterSpacing: '4px', color: 'rgba(201,168,76,0.55)' }}>
          Reserve Your Session · <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", letterSpacing: 0 }}>बुकिंग करा</span>
        </p>
        <h1 className="font-cinzel font-bold text-white relative z-10" style={{ fontSize: 'clamp(28px,5vw,56px)', letterSpacing: '2px', marginBottom: '8px' }}>
          Book a Consultation
        </h1>
        <p style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: 'clamp(14px,1.6vw,18px)', color: 'rgba(201,168,76,0.5)', position: 'relative', zIndex: 10 }}>
          ज्ञानाचा प्रकाश, जीवनाची दिशा
        </p>
        <div className="relative z-10 flex items-center justify-center gap-4 mt-5">
          <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4))' }} />
          <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: '20px', color: 'rgba(201,168,76,0.4)' }}>ॐ</span>
          <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, rgba(201,168,76,0.4), transparent)' }} />
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 py-12 px-6" style={{ background: 'linear-gradient(180deg, #0a0820 0%, #050510 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* ── FORM (2/3 width) ── */}
            <form onSubmit={handleSubmit} noValidate className="lg:col-span-2 space-y-10">

              {/* Step 1 — Service */}
              <div>
                <SectionLabel step="01" title="Choose Your Service" titleMr="सेवा निवडा" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
                  {SERVICES.map(svc => (
                    <button
                      type="button" key={svc.id}
                      onClick={() => set('service', svc.id)}
                      className="flex items-center gap-4 p-4 rounded-[6px] text-left transition-all duration-300"
                      style={{
                        border: form.service === svc.id ? `1.5px solid ${svc.color}` : '1px solid rgba(255,255,255,0.08)',
                        background: form.service === svc.id ? `${svc.color}12` : 'rgba(255,255,255,0.02)',
                        boxShadow: form.service === svc.id ? `0 0 24px ${svc.color}20` : 'none',
                      }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-[20px]"
                        style={{ background: `${svc.color}18`, border: `1px solid ${svc.color}40`, color: svc.color }}>
                        {svc.symbol}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-cinzel font-bold text-white" style={{ fontSize: '13px', letterSpacing: '0.5px' }}>{svc.name}</div>
                        <div style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: '11px', color: `${svc.color}80` }}>{svc.nameMr}</div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="font-cinzel font-bold" style={{ fontSize: '14px', color: svc.color }}>{svc.price}</div>
                        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: 'rgba(245,236,215,0.35)' }}>{svc.duration}</div>
                      </div>
                    </button>
                  ))}
                </div>
                {errors.service && <FieldError msg={errors.service} />}
              </div>

              {/* Step 2 — Personal Details */}
              <div>
                <SectionLabel step="02" title="Your Details" titleMr="आपली माहिती" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                  <Field label="Full Name" labelMr="पूर्ण नाव" required>
                    <input type="text" placeholder="e.g. Rahul Sharma"
                      value={form.name} onChange={e => set('name', e.target.value)}
                      style={inputStyle(!!errors.name)} />
                    {errors.name && <FieldError msg={errors.name} />}
                  </Field>
                  <Field label="Email Address" labelMr="ईमेल पत्ता" required>
                    <input type="email" placeholder="you@example.com"
                      value={form.email} onChange={e => set('email', e.target.value)}
                      style={inputStyle(!!errors.email)} />
                    {errors.email && <FieldError msg={errors.email} />}
                  </Field>
                  <Field label="WhatsApp Number" labelMr="व्हॉट्सअॅप नंबर" required>
                    <input type="tel" placeholder="+91 98765 43210"
                      value={form.phone} onChange={e => set('phone', e.target.value)}
                      style={inputStyle(!!errors.phone)} />
                    {errors.phone && <FieldError msg={errors.phone} />}
                  </Field>
                  <Field
                    label="Date of Birth"
                    labelMr="जन्म तारीख"
                    required={!!selectedSvc?.needsDob}
                    note={selectedSvc?.needsDob ? 'Required for this service' : 'Optional'}
                  >
                    <input type="date"
                      value={form.dob} onChange={e => set('dob', e.target.value)}
                      style={inputStyle(!!errors.dob)} />
                    {errors.dob && <FieldError msg={errors.dob} />}
                  </Field>
                </div>
              </div>

              {/* Step 3 — Session Preferences */}
              <div>
                <SectionLabel step="03" title="Session Preferences" titleMr="सत्र प्राधान्य" />
                <div className="mt-5 space-y-4">

                  {/* Online / In-person */}
                  <div>
                    <label style={labelStyle}>Session Format <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: '11px', color: 'rgba(201,168,76,0.45)' }}>सत्र प्रकार</span></label>
                    <div className="flex gap-3 mt-2">
                      {[['online', 'Online', '💻'], ['inperson', 'In-Person', '🏛️']] .map(([val, lbl, ico]) => (
                        <button type="button" key={val}
                          onClick={() => set('sessionType', val as 'online' | 'inperson')}
                          className="flex items-center gap-2 px-5 py-3 rounded-[4px] transition-all duration-200 font-cinzel"
                          style={{
                            fontSize: '12px', letterSpacing: '1px',
                            border: form.sessionType === val ? '1.5px solid #C9A84C' : '1px solid rgba(255,255,255,0.1)',
                            background: form.sessionType === val ? 'rgba(201,168,76,0.1)' : 'rgba(255,255,255,0.02)',
                            color: form.sessionType === val ? '#C9A84C' : 'rgba(245,236,215,0.5)',
                          }}>
                          <span>{ico}</span>{lbl}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Date + time side by side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Preferred Date" labelMr="पसंतीची तारीख" required>
                      <input type="date"
                        min={new Date().toISOString().split('T')[0]}
                        value={form.preferredDate} onChange={e => set('preferredDate', e.target.value)}
                        style={inputStyle(!!errors.preferredDate)} />
                      {errors.preferredDate && <FieldError msg={errors.preferredDate} />}
                    </Field>
                    <Field label="Preferred Time Slot" labelMr="वेळ निवडा" required>
                      <select value={form.timeSlot} onChange={e => set('timeSlot', e.target.value)}
                        style={{ ...inputStyle(!!errors.timeSlot), appearance: 'none' }}>
                        <option value="">Select a slot…</option>
                        {TIME_SLOTS.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                      {errors.timeSlot && <FieldError msg={errors.timeSlot} />}
                    </Field>
                  </div>
                </div>
              </div>

              {/* Step 4 — Your Question */}
              <div>
                <SectionLabel step="04" title="Your Question" titleMr="आपला प्रश्न" />
                <div className="mt-5">
                  <label style={labelStyle}>
                    What would you like guidance on?{' '}
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: 'rgba(245,236,215,0.3)', fontStyle: 'italic' }}>(optional)</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Share what's on your mind — the more context you provide, the more personalised your session will be."
                    value={form.message} onChange={e => set('message', e.target.value)}
                    style={{ ...inputStyle(false), resize: 'vertical', marginTop: '8px' }}
                  />
                </div>
              </div>

              {/* Agree + Submit */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer mb-6">
                  <input type="checkbox" checked={form.agree} onChange={e => set('agree', e.target.checked)}
                    style={{ marginTop: '3px', accentColor: '#C9A84C', width: '16px', height: '16px', flexShrink: 0 }} />
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: 'rgba(245,236,215,0.5)', lineHeight: 1.6 }}>
                    I understand this is a paid consultation and agree to the{' '}
                    <Link href="/terms" style={{ color: 'rgba(201,168,76,0.7)', textDecoration: 'underline' }}>Terms of Service</Link>
                    {' '}and{' '}
                    <Link href="/privacy" style={{ color: 'rgba(201,168,76,0.7)', textDecoration: 'underline' }}>Privacy Policy</Link>.
                  </span>
                </label>
                {errors.agree && <FieldError msg={errors.agree} />}

                <button
                  type="submit" disabled={loading}
                  className="w-full font-cinzel font-bold uppercase transition-all duration-300"
                  style={{
                    fontSize: '13px', letterSpacing: '2.5px',
                    padding: '16px 32px', borderRadius: '4px',
                    background: loading ? 'rgba(201,168,76,0.4)' : 'linear-gradient(135deg, #C9A84C, #e8c96a)',
                    color: '#050510',
                    boxShadow: loading ? 'none' : '0 0 40px rgba(201,168,76,0.25)',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    border: 'none',
                  }}
                >
                  {loading ? 'Submitting…' : 'Confirm Booking · बुक करा'}
                </button>
              </div>
            </form>

            {/* ── SIDEBAR (1/3 width) ── */}
            <aside className="space-y-6">

              {/* Selected service summary */}
              {selectedSvc && (
                <div className="p-5 rounded-[6px]"
                  style={{ border: `1px solid ${selectedSvc.color}35`, background: `${selectedSvc.color}08` }}>
                  <p className="font-cinzel uppercase mb-3" style={{ fontSize: '10px', letterSpacing: '2.5px', color: `${selectedSvc.color}` }}>
                    Selected Service
                  </p>
                  <div className="flex items-center gap-3 mb-3">
                    <span style={{ fontSize: '28px', color: selectedSvc.color }}>{selectedSvc.symbol}</span>
                    <div>
                      <div className="font-cinzel font-bold text-white" style={{ fontSize: '15px' }}>{selectedSvc.name}</div>
                      <div style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: '11px', color: `${selectedSvc.color}70` }}>{selectedSvc.nameMr}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-3" style={{ borderTop: `1px solid ${selectedSvc.color}20` }}>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'rgba(245,236,215,0.4)' }}>{selectedSvc.duration} · {form.sessionType === 'online' ? 'Online' : 'In-Person'}</span>
                    <span className="font-cinzel font-bold" style={{ fontSize: '18px', color: selectedSvc.color }}>{selectedSvc.price}</span>
                  </div>
                </div>
              )}

              {/* What to expect */}
              <div className="p-5 rounded-[6px]" style={{ border: '1px solid rgba(201,168,76,0.15)', background: 'rgba(201,168,76,0.04)' }}>
                <p className="font-cinzel uppercase mb-4" style={{ fontSize: '10px', letterSpacing: '2.5px', color: 'rgba(201,168,76,0.55)' }}>
                  What to Expect
                </p>
                {[
                  ['📋', 'Confirmation via WhatsApp within 24 hours'],
                  ['💳', 'Payment link sent before your session'],
                  ['🔒', 'Fully confidential & private'],
                  ['📱', 'Online via Google Meet / WhatsApp Video'],
                  ['🔄', 'Reschedule up to 12 hours before session'],
                ].map(([ico, txt], i) => (
                  <div key={i} className="flex items-start gap-3 mb-3">
                    <span style={{ fontSize: '15px', flexShrink: 0 }}>{ico}</span>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12.5px', color: 'rgba(245,236,215,0.5)', lineHeight: 1.55 }}>{txt}</span>
                  </div>
                ))}
              </div>

              {/* Contact */}
              <div className="p-5 rounded-[6px]" style={{ border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
                <p className="font-cinzel uppercase mb-4" style={{ fontSize: '10px', letterSpacing: '2.5px', color: 'rgba(245,236,215,0.35)' }}>
                  Prefer to reach out directly?
                </p>
                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 mb-3 transition-opacity hover:opacity-80">
                  <span style={{ fontSize: '18px' }}>💬</span>
                  <div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: '#25D366', fontWeight: 600 }}>WhatsApp</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: 'rgba(245,236,215,0.35)' }}>+91 99999 99999</div>
                  </div>
                </a>
                <a href="mailto:acharya@example.com"
                  className="flex items-center gap-3 transition-opacity hover:opacity-80">
                  <span style={{ fontSize: '18px' }}>✉️</span>
                  <div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: 'rgba(201,168,76,0.7)', fontWeight: 500 }}>Email</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: 'rgba(245,236,215,0.35)' }}>acharya@example.com</div>
                  </div>
                </a>
              </div>

              {/* Office hours */}
              <div className="p-5 rounded-[6px]" style={{ border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.015)' }}>
                <p className="font-cinzel uppercase mb-3" style={{ fontSize: '10px', letterSpacing: '2.5px', color: 'rgba(245,236,215,0.3)' }}>
                  Session Hours
                </p>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12.5px', color: 'rgba(245,236,215,0.45)', lineHeight: 1.8 }}>
                  Mon – Sat &nbsp;·&nbsp; 9:00 AM – 7:00 PM<br />
                  <span style={{ fontSize: '11px', color: 'rgba(245,236,215,0.25)' }}>Sunday by special appointment</span>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

/* ── Small helpers ─────────────────────────────────────── */

function SectionLabel({ step, title, titleMr }: { step: string; title: string; titleMr: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-cinzel font-bold flex-shrink-0"
        style={{ fontSize: '11px', color: 'rgba(201,168,76,0.4)', letterSpacing: '1px' }}>
        {step}
      </span>
      <div style={{ flex: 1, height: '1px', background: 'rgba(201,168,76,0.12)' }} />
      <h3 className="font-cinzel font-bold text-white flex-shrink-0" style={{ fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase' }}>
        {title}
      </h3>
      <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: '12px', color: 'rgba(201,168,76,0.4)', flexShrink: 0 }}>
        · {titleMr}
      </span>
      <div style={{ flex: 1, height: '1px', background: 'rgba(201,168,76,0.12)' }} />
    </div>
  )
}

function Field({ label, labelMr, required, note, children }: {
  label: string; labelMr: string; required?: boolean; note?: string; children: React.ReactNode
}) {
  return (
    <div>
      <label style={labelStyle}>
        {label}{' '}
        <span style={{ fontFamily: "'Tiro Devanagari Sanskrit', serif", fontSize: '11px', color: 'rgba(201,168,76,0.4)' }}>{labelMr}</span>
        {required && <span style={{ color: '#B22222', marginLeft: '3px' }}>*</span>}
        {note && <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', color: 'rgba(245,236,215,0.3)', marginLeft: '6px', fontStyle: 'italic' }}>({note})</span>}
      </label>
      {children}
    </div>
  )
}

function FieldError({ msg }: { msg: string }) {
  return (
    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: '#e05555', marginTop: '5px' }}>
      {msg}
    </p>
  )
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '12px',
  letterSpacing: '0.5px',
  color: 'rgba(245,236,215,0.5)',
  marginBottom: '8px',
  textTransform: 'uppercase',
}

function inputStyle(hasError: boolean): React.CSSProperties {
  return {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${hasError ? '#e0555580' : 'rgba(255,255,255,0.1)'}`,
    borderRadius: '4px',
    padding: '11px 14px',
    color: '#F5ECD7',
    fontSize: '14px',
    fontFamily: "'DM Sans', sans-serif",
    outline: 'none',
    transition: 'border-color 0.2s',
    display: 'block',
    boxSizing: 'border-box',
  }
}
