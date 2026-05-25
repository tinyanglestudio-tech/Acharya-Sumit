# Astrologer / Numerologist / Vastu Consultant — Complete Project Plan
**Prepared by:** TinyAngle Studio  
**Project Folder:** Claude-Rupesh-Acharya-Sumit  
**Date:** 8 May 2026  
**Status:** Planning Phase — Awaiting Client Information

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Folder Structure](#3-folder-structure)
4. [Design System](#4-design-system)
5. [Animation Plan — The "Wow" Journey](#5-animation-plan)
6. [Website Sections](#6-website-sections)
7. [Booking System](#7-booking-system)
8. [Backend Architecture — Supabase](#8-backend-architecture)
9. [Admin Panel](#9-admin-panel)
10. [Security Architecture](#10-security-architecture)
11. [Environment Variables](#11-environment-variables)
12. [Third-Party Services Checklist](#12-third-party-services-checklist)
13. [Supabase Database Schema](#13-supabase-database-schema)
14. [Deployment Plan](#14-deployment-plan)
15. [SEO & Meta Strategy](#15-seo--meta-strategy)
16. [Performance & Core Web Vitals](#16-performance--core-web-vitals)
17. [Email & Transactional Notifications](#17-email--transactional-notifications)
18. [Analytics & Tracking](#18-analytics--tracking)
19. [Razorpay KYC & Go-Live Timeline](#19-razorpay-kyc--go-live-timeline)
20. [Product Order Fulfillment Flow](#20-product-order-fulfillment-flow)
21. [Spam Protection & Content Moderation](#21-spam-protection--content-moderation)
22. [WhatsApp Business API Approval Plan](#22-whatsapp-business-api-approval-plan)
23. [Error Handling & Monitoring](#23-error-handling--monitoring)
24. [Consultation Reminder System](#24-consultation-reminder-system)
25. [Multi-Admin & Staff Access](#25-multi-admin--staff-access)
26. [Payment Recovery Flow](#26-payment-recovery-flow)

---

## 1. Project Overview

### Client Profile
- **Role:** Astrologer | Numerologist | Vastu Consultant
- **Tagline:** Helping people find clarity in life through the wisdom of Astrology, Numerology and Vastu Shastra
- **Services:** Career, Business, Marriage, Health and Life guidance through scientific spiritual analysis
- **Consultation Policy:** By prior appointment only — paid consultations, no free advice

### Website Goals
- Create a premium, visually stunning landing experience with Indian spiritual aesthetics
- Engage visitors with dramatic scroll-triggered animations revealing each service
- Drive conversions through a prominent "Book Now" CTA
- Allow client to manage all content via an admin panel without developer help
- Sell products and services directly through the website
- Integrate YouTube, Instagram and Facebook videos with thumbnails
- Accept online payments via Razorpay (Indian payment gateway)
- Auto-generate Google Meet links on booking confirmation

### Key Requirements
- Fully responsive: Desktop, Tablet, Mobile
- Indian cultural elements: Om (ॐ), Sanskrit verses, Mandala, Zodiac wheel, Lotus
- Premium animation experience — visitor should be amazed on page load
- YouTube, Instagram, Facebook video integration with thumbnails
- Products and Services e-commerce section
- Supabase-powered CMS — admin edits reflect live on website
- Secure admin panel with full authentication (login, forgot password, change password)

---

## 2. Tech Stack

| Layer | Technology | Reason |
|-------|-----------|--------|
| Framework | Next.js 14 (App Router) | SSR, SEO, API routes in one project |
| Language | TypeScript | Type safety, fewer runtime bugs |
| Styling | Tailwind CSS | Rapid UI development, responsive by default |
| Animations | Framer Motion | Production-grade React animations |
| Database | Supabase (PostgreSQL) | Real-time, auth, storage — all in one |
| Auth | Supabase Auth | Email/password, session management, password reset |
| Storage | Supabase Storage | Images, digital product files |
| Payments | Razorpay | Indian payment gateway — UPI, Cards, Net Banking, Wallets |
| Scheduling | Calendly | Slot booking with conflict prevention |
| Video Meetings | Google Calendar API + Google Meet | Auto Meet link on booking |
| WhatsApp | Twilio WhatsApp API | Booking confirmation messages |
| Transactional Email | Resend | Branded HTML emails for bookings, orders, reminders |
| Error Monitoring | Sentry | Real-time error tracking and alerting |
| Analytics | Google Analytics 4 + Meta Pixel | Traffic, conversions, ad campaign tracking |
| Spam Protection | hCaptcha (invisible) | Block bots on booking and contact forms |
| Reminders | Vercel Cron Jobs | Scheduled session reminders and slot cleanup |
| Validation | Zod | Schema validation on all API inputs |
| Fonts | Google Fonts (Tiro Devanagari, Cinzel Decorative, EB Garamond) | Indian + Premium feel |

---

## 3. Folder Structure

```
Claude-Rupesh-Acharya-Sumit/
│
├── app/                                    Next.js App Router pages
│   ├── layout.tsx                          Root layout — fonts, metadata, global providers
│   ├── globals.css                         Global styles, custom animation classes
│   ├── page.tsx                            Main landing page (all sections assembled)
│   │
│   ├── shop/
│   │   └── page.tsx                        Products & Services store
│   │
│   ├── booking/
│   │   ├── page.tsx                        Booking page with Calendly widget
│   │   └── success/page.tsx                Success page — shows Meet link
│   │
│   ├── media/
│   │   └── page.tsx                        Full video gallery (YouTube/Insta/FB)
│   │
│   ├── blog/
│   │   ├── page.tsx                        Blog listing
│   │   └── [slug]/page.tsx                 Individual blog post
│   │
│   └── admin/
│       ├── layout.tsx                      Admin shell — sidebar + top bar
│       ├── page.tsx                        Dashboard — stats overview
│       ├── login/page.tsx                  Login page
│       ├── forgot-password/page.tsx        Request password reset email
│       ├── reset-password/page.tsx         Set new password (from email link)
│       ├── content/
│       │   ├── hero/page.tsx               Edit hero heading, Sanskrit verse, CTA
│       │   ├── about/page.tsx              Edit consultant profile and bio
│       │   └── settings/page.tsx           Site name, phone, WhatsApp, social links
│       ├── services/
│       │   ├── page.tsx                    List all services (drag to reorder)
│       │   └── [id]/page.tsx               Edit individual service
│       ├── products/
│       │   ├── page.tsx                    List all products with stock status
│       │   └── [id]/page.tsx               Edit product — price, images, stock
│       ├── testimonials/page.tsx           Add/edit/hide testimonials
│       ├── videos/page.tsx                 Add YouTube/Instagram/Facebook URLs
│       ├── blog/
│       │   ├── page.tsx                    Blog list — draft/published filter
│       │   └── [id]/page.tsx               Rich text blog editor
│       ├── gallery/page.tsx                Upload and manage gallery images
│       ├── faqs/page.tsx                   Add/edit/reorder FAQs
│       ├── bookings/page.tsx               View all appointments — filter by status
│       ├── orders/page.tsx                 View product orders — update fulfillment
│       └── settings/
│           └── security/page.tsx           Change password + active sessions log
│
├── app/api/                                All backend logic — server only
│   ├── admin/
│   │   ├── auth/
│   │   │   ├── login/route.ts              POST — sign in, set httpOnly cookie
│   │   │   ├── logout/route.ts             POST — clear session cookie
│   │   │   ├── forgot-password/route.ts    POST — trigger Supabase reset email
│   │   │   ├── reset-password/route.ts     POST — set new password via token
│   │   │   ├── change-password/route.ts    POST — change password (authenticated)
│   │   │   ├── session/route.ts            GET — validate current session
│   │   │   └── sessions/route.ts           GET list / DELETE revoke sessions
│   │   ├── upload/route.ts                 POST — image to Supabase Storage
│   │   ├── settings/route.ts               GET/PUT — site_settings table
│   │   ├── hero/route.ts                   GET/PUT — hero_content table
│   │   ├── about/route.ts                  GET/PUT — about_content table
│   │   ├── services/
│   │   │   ├── route.ts                    GET list / POST create
│   │   │   └── [id]/route.ts               GET / PUT / DELETE
│   │   ├── products/
│   │   │   ├── route.ts                    GET list / POST create
│   │   │   └── [id]/route.ts               GET / PUT / DELETE
│   │   ├── testimonials/
│   │   │   ├── route.ts                    GET / POST
│   │   │   └── [id]/route.ts               PUT / DELETE
│   │   ├── videos/
│   │   │   ├── route.ts                    GET / POST
│   │   │   └── [id]/route.ts               PUT / DELETE
│   │   ├── blog/
│   │   │   ├── route.ts                    GET / POST
│   │   │   └── [id]/route.ts               GET / PUT / DELETE
│   │   ├── faqs/route.ts                   GET / POST / PUT / DELETE
│   │   ├── gallery/route.ts                GET / POST / DELETE
│   │   ├── bookings/
│   │   │   ├── route.ts                    GET list with filters
│   │   │   └── [id]/route.ts               GET / PUT status
│   │   └── orders/
│   │       ├── route.ts                    GET list
│   │       └── [id]/route.ts               GET / PUT fulfillment
│   │
│   ├── booking/
│   │   ├── initiate/route.ts               POST — fetch Calendly details + create Razorpay order
│   │   ├── verify-payment/route.ts         POST — verify signature + create Meet + send invite
│   │   └── cancel-unpaid/route.ts          POST — cancel Calendly slots unpaid after 30 min
│   │
│   └── webhooks/
│       ├── razorpay/route.ts               POST — Razorpay payment webhook (backup verify)
│       └── calendly/route.ts               POST — Calendly event webhooks
│
├── components/
│   ├── animations/                         Pure animation components
│   │   ├── StarField.tsx                   Particle night sky background (canvas)
│   │   ├── MandalaRotate.tsx               Rotating sacred geometry SVG
│   │   ├── OmSymbol.tsx                    Om (ॐ) glowing reveal animation
│   │   ├── ZodiacWheel.tsx                 Spinning zodiac wheel with 12 signs
│   │   └── SanskritReveal.tsx              Sanskrit text letter-by-letter reveal
│   │
│   ├── sections/                           Full page section components
│   │   ├── Hero.tsx                        Full-screen entry with Om + stars
│   │   ├── ServicesReveal.tsx              4 lotus cards unfold on scroll
│   │   ├── Astrology.tsx                   Deep-dive Astrology section
│   │   ├── Numerology.tsx                  Numerology section
│   │   ├── Vastu.tsx                       Vastu Shastra section
│   │   ├── Tarot.tsx                       Tarot section
│   │   ├── About.tsx                       Consultant profile section
│   │   ├── ShopPreview.tsx                 Featured products/services preview
│   │   ├── Videos.tsx                      Social media video grid
│   │   ├── Testimonials.tsx                Client testimonials carousel
│   │   ├── BookNow.tsx                     Primary CTA — pulsing Book button
│   │   ├── Blog.tsx                        Blog preview section
│   │   └── Footer.tsx                      Footer with social links
│   │
│   ├── ui/                                 Reusable UI components
│   │   ├── Navbar.tsx                      Navigation bar
│   │   ├── BookingForm.tsx                 Appointment booking form
│   │   ├── ProductCard.tsx                 Product card for shop
│   │   ├── ServiceCard.tsx                 Service card with price
│   │   ├── VideoCard.tsx                   YouTube/Insta/FB thumbnail card
│   │   ├── TestimonialCard.tsx             Client review card
│   │   └── FloatingWhatsApp.tsx            Floating WhatsApp button
│   │
│   └── admin/
│       ├── AdminSidebar.tsx                Sidebar navigation
│       ├── AdminPage.tsx                   Admin page wrapper
│       └── ImageUpload.tsx                 Drag-drop image upload component
│
├── lib/
│   ├── supabase/
│   │   ├── server.ts                       Supabase client — service role (server only)
│   │   └── client.ts                       Supabase client — anon key (frontend)
│   ├── auth.ts                             withAdminAuth() API route wrapper
│   ├── calendly.ts                         Calendly API helper functions
│   ├── razorpay.ts                         Razorpay order/verify helpers
│   ├── google-meet.ts                      Google Calendar + Meet API
│   ├── rate-limit.ts                       Rate limiting (login, forgot-password)
│   ├── password-policy.ts                  Password strength validation
│   └── utils.ts                            Shared utility functions
│
├── types/
│   ├── content.ts                          Site content types
│   └── shop.ts                             Product and order types
│
├── data/                                   Fallback/seed data (JSON)
│   ├── services.json
│   ├── products.json
│   ├── testimonials.json
│   └── videos.json
│
├── public/
│   ├── logo.png
│   ├── favicon.ico
│   ├── og-image.jpg                        Social media preview image (1200x630)
│   ├── fonts/
│   │   ├── tiro-devanagari.woff2           Sanskrit/Hindi text
│   │   └── cinzel-decorative.woff2         Premium English headings
│   ├── icons/
│   │   ├── om.svg                          ॐ symbol
│   │   ├── mandala.svg                     Sacred geometry mandala
│   │   ├── zodiac-wheel.svg                12-sign zodiac wheel
│   │   ├── lotus.svg                       Lotus flower
│   │   └── yantra.svg                      Sri Yantra sacred geometry
│   └── uploads/                            Admin-uploaded images (Supabase Storage mirror)
│
├── supabase/
│   └── migrations/                         SQL migration files (run in order)
│       ├── 001_create_site_settings.sql
│       ├── 002_create_hero_content.sql
│       ├── 003_create_about_content.sql
│       ├── 004_create_services.sql
│       ├── 005_create_products.sql
│       ├── 006_create_testimonials.sql
│       ├── 007_create_videos.sql
│       ├── 008_create_blog_posts.sql
│       ├── 009_create_faqs.sql
│       ├── 010_create_gallery.sql
│       ├── 011_create_bookings.sql
│       ├── 012_create_orders.sql
│       ├── 013_create_admin_profiles.sql
│       ├── 014_enable_rls_all_tables.sql
│       ├── 015_create_rls_policies.sql
│       ├── 016_create_storage_buckets.sql
│       └── 017_create_login_audit.sql
│
├── Images/                                 Client-provided reference images
├── middleware.ts                            Edge middleware — protect /admin/* routes
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── .env.local                              All secrets — NEVER commit to git
├── .gitignore                              Must include .env*.local
└── CLAUDE.md                              Developer documentation
```

---

## 4. Design System

### Color Palette — Deep Space Indian Mystical

| Name | Hex | Usage |
|------|-----|-------|
| Cosmic Dark | `#050510` | Page background |
| Deep Navy | `#0A0A2E` | Section backgrounds |
| Antique Gold | `#C9A84C` | Primary accent, headings |
| Sacred Saffron | `#FF6B1A` | CTA buttons, highlights |
| Kumkum Red | `#7B1C1C` | Accent, borders |
| Pearl Cream | `#F5ECD7` | Body text, cards |
| Mystical Purple | `#3D1A6E` | Secondary accent |
| Star White | `#FFFFFF` | High contrast text |

### Typography

| Font | Usage | Style |
|------|-------|-------|
| Tiro Devanagari | Sanskrit/Hindi text — ॐ, verses | Serif, traditional |
| Cinzel Decorative | English headings, section titles | Elegant serif caps |
| EB Garamond | Body text, descriptions | Classic readable serif |

### Spacing & Breakpoints (Tailwind)
- `sm`: 640px — Mobile landscape
- `md`: 768px — Tablet portrait
- `lg`: 1024px — Tablet landscape / small desktop
- `xl`: 1280px — Standard desktop
- `2xl`: 1536px — Large desktop

---

## 5. Animation Plan

### Page Load Sequence (first 4 seconds)

```
0.0s — Black screen
0.3s — Deep cosmic blue fades in
0.6s — Star particles burst from center (canvas animation)
1.0s — Om (ॐ) symbol glows to life from center with golden light rays
1.8s — Sanskrit verse fades in letter by letter below Om
2.4s — Consultant name slides in with golden shimmer
2.8s — Tagline appears word by word
3.2s — "Book Consultation" CTA button pulses into view
3.5s — Scroll indicator animates downward
```

### Scroll Animation Map

| Section | Animation |
|---------|-----------|
| **Hero** | Stars parallax on scroll, Om fades as user scrolls down |
| **Services Reveal** | 4 lotus flowers bloom open, each revealing a service card — Astrology, Numerology, Vastu, Tarot |
| **Astrology** | Zodiac wheel spins in, constellation lines draw themselves |
| **Numerology** | Numbers cascade and form sacred geometry patterns |
| **Vastu** | House blueprint draws itself, compass spins to directions |
| **Tarot** | Tarot cards fan out from a single card with mystical glow |
| **About** | Consultant photo emerges from light rays, text slides in |
| **Testimonials** | Cards float in from sides like floating scrolls |
| **Videos** | Grid unfolds like a mandala opening |
| **Shop** | Product cards descend from above like cards being dealt |
| **Book Now** | Sacred geometry ring pulses around CTA button |
| **Footer** | Mandala pattern fades in behind footer content |

### Interaction Effects
- Navbar: Transparent on hero → frosted glass dark on scroll
- Buttons: Golden glow pulse on hover, sacred geometry border trace on focus
- Cards: Subtle float + glow on hover, cursor trail effect on desktop
- Page transitions: Fade through cosmic dark

---

## 6. Website Sections

### Landing Page (app/page.tsx) — Section Order

```
1.  Navbar              — Fixed top, transparent → frosted glass on scroll
2.  Hero                — Full screen, Om reveal, star field, main CTA
3.  Services Reveal     — 4 animated lotus reveals (Astrology, Numerology, Vastu, Tarot)
4.  Astrology Section   — Deep dive with zodiac wheel animation
5.  Numerology Section  — Sacred number patterns
6.  Vastu Section       — Directions compass, home blueprint
7.  Tarot Section       — Card fan reveal
8.  About               — Consultant profile, credentials, experience
9.  Book Now CTA        — Full-width section, pulsing button, "Prior Appointment Only" note
10. Testimonials        — Carousel with client photos and star ratings
11. Videos              — YouTube / Instagram / Facebook grid (6 featured)
12. Shop Preview        — Featured products and services (6 items)
13. Blog Preview        — Latest 3 articles
14. FAQ                 — Accordion with common questions
15. Contact             — WhatsApp, phone, email, consultation note
16. Footer              — Social links, quick nav, copyright, "No Free Advice" disclaimer
```

### Indian Cultural Elements Used
- ॐ (Om) — Hero centerpiece with glow animation
- Sanskrit shloka — Gayatri Mantra or relevant verse in hero
- Mandala SVG — Rotating background on multiple sections
- Lotus motif — Service card reveal animation
- Sri Yantra — Decorative section divider
- 12 Rashis (zodiac signs) — Astrology section
- Vastu Purusha Mandala — Vastu section background
- Diya glow effect — Warm ambient lighting on cards
- Saffron color — Sacred accent throughout

---

## 7. Booking System

### Full Flow

```
User clicks "Book Session"
        │
        ▼
Calendly inline widget opens (popup overlay on same page)
        │
        ▼
User selects date + time slot
User fills name, email, phone
        │
        ▼
Calendly fires postMessage event → our JS intercepts:
  event.data.event === "calendly.event_scheduled"
  captures: event_uri, invitee_uri
        │
        ▼
POST /api/booking/initiate
  1. Fetch event details from Calendly API (server-side, API key in .env)
  2. Map service name → price (from services table in Supabase)
  3. Create Razorpay order (server-side, secret key in .env)
  4. Save pending booking to Supabase (status: "pending_payment")
  5. Return: { razorpayOrderId, amount, bookingId }
        │
        ▼
Razorpay payment modal opens on same page
  prefilled: name, email, phone from Calendly
  theme: gold/saffron matching website
  methods: UPI, Cards, Net Banking, Wallets
        │
    ┌───┴────┐
  PAID     FAILED / DISMISSED
    │           │
    │       Cancel Calendly slot (API call)
    │       Show retry message
    │
    ▼
POST /api/booking/verify-payment
  1. Verify HMAC SHA256 signature (prevents fraud)
  2. Mark booking as "paid" in Supabase
  3. Call Google Calendar API:
     → Create event with conferenceData (Meet link)
     → Add client + consultant as attendees
     → Google sends calendar invite emails automatically
  4. Send WhatsApp confirmation to client phone
  5. Return: { success, meetLink, bookingDetails }
        │
        ▼
Success page shows:
  ✅ Payment confirmed — ₹X received
  📅 Session: [Date] at [Time IST]
  🎥 Google Meet: [link + copy button]
  📧 Calendar invite sent to [email]
  📱 WhatsApp confirmation sent to [phone]
  [Add to Google Calendar] button
  [Download .ics file] button
```

### Unpaid Slot Cleanup
```
Every 30 minutes:
POST /api/booking/cancel-unpaid
  → Find bookings with status "pending_payment" older than 30 min
  → Call Calendly API: DELETE /scheduled_events/{uuid}/cancellation
  → Remove from Supabase
```

### Service → Price Mapping (Razorpay order amount)
Managed via the `services` table in Supabase — admin updates prices from admin panel, no code changes needed.

---

## 8. Backend Architecture

### How Data Flows

```
Admin logs in (Supabase Auth)
        ↓
Admin Panel (Next.js /admin/* pages)
        ↓
Admin edits content and submits form
        ↓
Next.js API Route (server) → validates with Zod → writes to Supabase
        ↓
Supabase PostgreSQL stores updated data
        ↓
Website Server Components fetch from Supabase on each page visit
        ↓
Change is live immediately — no deployment, no cache flush needed
```

### Supabase Storage Buckets

| Bucket | Access | Stores |
|--------|--------|--------|
| `site-images` | Public | Hero, about, general images |
| `service-images` | Public | Service card thumbnails |
| `product-images` | Public | Product photos |
| `blog-images` | Public | Blog featured images |
| `gallery` | Public | Gallery photos |
| `testimonial-avatars` | Public | Client profile photos |
| `digital-products` | Private | PDF reports, downloadable files (signed URLs on purchase) |

### What Admin Can Control Without Code Changes

| Section | Editable Fields |
|---------|----------------|
| Hero | Heading, Sanskrit verse, CTA button text, background image |
| About | Bio, photo, certifications, experience years, achievements |
| Services | Name, price, description, image, Calendly link, availability |
| Products | Name, price, stock, images, description, category, digital files |
| Testimonials | Add/edit/hide/feature, reorder |
| Videos | Add YouTube/Instagram/Facebook URL, custom thumbnail, category |
| Blog | Write, publish, draft, SEO fields |
| Gallery | Upload/remove images |
| FAQs | Add/edit/reorder |
| Bookings | View, mark completed/cancelled, see Meet link |
| Orders | View, update fulfillment status, add tracking number |
| Site Settings | Business name, phone, WhatsApp, email, social media links |

---

## 9. Admin Panel

### Dashboard Stats Block
```
┌──────────────────────────────────────────────────────────┐
│  This Month                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │  Bookings    │  │  Revenue     │  │  Orders      │  │
│  │     42       │  │  ₹88,500     │  │     17       │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│                                                          │
│  Pending bookings: 6    Pending orders: 3                │
│                                                          │
│  Recent Activity                                         │
│  • Rahul Sharma booked Kundali Reading — 10 min ago      │
│  • New order #ORD-0034 placed — 25 min ago               │
│  • Priya Patel booked Vastu Consultation — 1 hr ago      │
└──────────────────────────────────────────────────────────┘
```

### Admin Navigation Sidebar
```
ॐ  [Site Logo]  Admin Portal

CONTENT
  Hero Section
  About / Profile
  Site Settings

SERVICES & PRODUCTS
  Consultation Services
  Products (Shop)

MEDIA
  Videos (YouTube/Insta/FB)
  Gallery
  Blog Posts

ENGAGEMENT
  Testimonials
  FAQs

TRANSACTIONS
  Bookings (Appointments)
  Orders (Products)

ACCOUNT
  Security (Change Password)
  Login History
```

---

## 10. Security Architecture

### Core Rules
1. All secrets live only in `.env.local` — never in any component or client file
2. Frontend never calls Supabase with service role key — only anon key with RLS
3. All sensitive operations go through Next.js API routes (server-side only)
4. Supabase RLS is the final database-level access control — always enabled
5. Sessions stored in httpOnly cookies — never localStorage (prevents XSS)
6. All /admin/* routes protected by Edge middleware before any page loads

### Security Layers
```
Request to /admin/*
       │
       ▼  Layer 1: middleware.ts (Edge)
          Check httpOnly session cookie — no cookie → redirect to login
       │
       ▼  Layer 2: API Route Guard
          withAdminAuth() wrapper verifies JWT and admin_profiles membership
       │
       ▼  Layer 3: Zod Input Validation
          Every request body validated before touching database
       │
       ▼  Layer 4: Supabase RLS
          Database enforces access rules at row level
       │
       ▼  Layer 5: Rate Limiting
          Login: 5 attempts / 15 min per IP
          Forgot password: 3 emails / hour per email
```

### Admin Auth Pages

| Page | Path | Purpose |
|------|------|---------|
| Login | `/admin/login` | Email + password sign in |
| Forgot Password | `/admin/forgot-password` | Request reset email |
| Reset Password | `/admin/reset-password` | Set new password (from email link) |
| Change Password | `/admin/settings/security` | Change password when logged in |
| Active Sessions | `/admin/settings/security` | View + revoke active sessions |
| Login History | `/admin/settings/security` | Audit log of all login events |

### Login Page Elements
- Email field
- Password field with show/hide toggle
- Remember me checkbox (extends session to 30 days)
- Forgot Password link
- Sign In button
- Failed attempt counter visible to user
- No registration option — admin accounts created via Supabase dashboard only

### Password Policy
- Minimum 10 characters
- At least one uppercase letter
- At least one lowercase letter
- At least one number
- At least one special character (!@#$%^&*)

### Session Configuration
```
Cookie settings:
  httpOnly: true      — JavaScript cannot read (blocks XSS)
  secure: true        — HTTPS only (blocks MITM)
  sameSite: 'lax'     — Blocks CSRF attacks
  maxAge: 7 days      — Standard session (30 days if "Remember me")
```

### Additional Security Measures
- httpOnly cookies — session token inaccessible to JavaScript
- Supabase RLS — database refuses writes from non-admin users
- Rate limiting — brute force protection on login and password reset
- Generic error messages — "Invalid credentials" never reveals if email exists
- Login audit log — every event recorded with IP and user agent
- Session revocation — admin can kill any device session
- Webhook signature verification — Razorpay + Calendly webhooks verified by HMAC SHA256
- Zod schema validation — every API route validates all inputs
- .gitignore for .env — secrets never reach version control

---

## 11. Environment Variables

### Public (safe for frontend — NEXT_PUBLIC_ prefix)
```bash
NEXT_PUBLIC_SUPABASE_URL=           # Supabase project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=      # Read-only, RLS enforced
NEXT_PUBLIC_RAZORPAY_KEY_ID=        # Public key needed for checkout modal
NEXT_PUBLIC_CALENDLY_URL=           # https://calendly.com/[username]
NEXT_PUBLIC_SITE_URL=               # https://yourdomain.com
NEXT_PUBLIC_GA_MEASUREMENT_ID=      # Google Analytics 4 measurement ID (G-XXXXXXX)
NEXT_PUBLIC_META_PIXEL_ID=          # Meta Pixel ID for Facebook/Instagram ads
NEXT_PUBLIC_HCAPTCHA_SITE_KEY=      # hCaptcha public site key for forms
NEXT_PUBLIC_SENTRY_DSN=             # Sentry DSN (public — used on frontend too)
```

### Private (server only — never prefix with NEXT_PUBLIC_)
```bash
SUPABASE_SERVICE_ROLE_KEY=          # Bypasses RLS — admin operations only
RAZORPAY_KEY_SECRET=                # Sign Razorpay orders
RAZORPAY_WEBHOOK_SECRET=            # Verify Razorpay webhooks
CALENDLY_API_KEY=                   # Fetch event details from Calendly
CALENDLY_USER_URI=                  # Your Calendly user identifier
GOOGLE_CLIENT_ID=                   # Google OAuth credentials
GOOGLE_CLIENT_SECRET=               # Google OAuth secret
GOOGLE_REFRESH_TOKEN=               # Long-lived token for Calendar API
GOOGLE_CALENDAR_ID=                 # Consultant's Google Calendar ID
TWILIO_ACCOUNT_SID=                 # WhatsApp/SMS service
TWILIO_AUTH_TOKEN=                  # Twilio secret key
TWILIO_WHATSAPP_NUMBER=             # Twilio WhatsApp sender number
RESEND_API_KEY=                     # Resend transactional email API key
RESEND_FROM_EMAIL=                  # Verified sender address (noreply@yourdomain.com)
HCAPTCHA_SECRET_KEY=                # hCaptcha server-side verification key
SENTRY_AUTH_TOKEN=                  # Sentry source map upload token (build time)
ADMIN_SESSION_SECRET=               # Signs httpOnly session cookies
CRON_SECRET=                        # Protects cron job endpoints from unauthorized calls
```

### What Is Never Exposed on Frontend

| Secret | Where It Lives | How Frontend Interacts |
|--------|---------------|----------------------|
| SUPABASE_SERVICE_ROLE_KEY | Server API routes only | Frontend uses anon key only |
| RAZORPAY_KEY_SECRET | Server API routes only | Frontend receives only order_id |
| RAZORPAY_WEBHOOK_SECRET | Webhook route only | Verified server-side |
| GOOGLE_CLIENT_SECRET | Server API routes only | Never |
| GOOGLE_REFRESH_TOKEN | Server API routes only | Never |
| CALENDLY_API_KEY | Server API routes only | Frontend uses public widget only |
| TWILIO_AUTH_TOKEN | Server API routes only | Never |
| ADMIN_SESSION_SECRET | Middleware + API routes | Never |

---

## 12. Third-Party Services Checklist

| Service | Plan | Cost | Purpose | Setup Needed |
|---------|------|------|---------|-------------|
| Supabase | Free tier | Free | Database, Auth, Storage | Create project, get API keys |
| Razorpay | Free account | 2% per transaction | Indian payments | KYC verification, get API keys |
| Calendly | Standard | $10/month | Appointment scheduling | Connect calendar, create event types |
| Google Cloud | Free tier | Free | Calendar + Meet API | Enable APIs, create credentials |
| Twilio | Pay-as-you-go | ~₹0.50/msg | WhatsApp confirmations | WhatsApp Business approval |
| Resend | Free / Pro | Free up to 3000/mo | Transactional branded emails | Create account, verify domain |
| Sentry | Free tier | Free | Error monitoring + alerts | Create project, add DSN key |
| Google Analytics 4 | Free | Free | Traffic + conversion tracking | Create GA4 property, add measurement ID |
| Meta Pixel | Free | Free | Facebook/Instagram ad tracking | Create Pixel in Meta Business Manager |
| hCaptcha | Free tier | Free | Bot/spam protection on forms | Create account, get site key |
| Vercel | Hobby/Pro | Free / $20/mo | Hosting + deployment + Cron | Connect GitHub repo |
| Domain | — | ₹800-2000/year | Custom domain | Purchase and point to Vercel |

---

## 13. Supabase Database Schema

### Tables Overview

| Table | Purpose |
|-------|---------|
| `site_settings` | Key-value store for global site config |
| `hero_content` | Hero section content |
| `about_content` | Consultant profile and bio |
| `services` | Consultation service types with pricing |
| `products` | Shop products (physical and digital) |
| `testimonials` | Client reviews and ratings |
| `videos` | YouTube, Instagram, Facebook video entries |
| `blog_posts` | Blog articles with SEO fields |
| `faqs` | Frequently asked questions |
| `gallery` | Image gallery |
| `bookings` | Appointment records from booking flow |
| `orders` | Product purchase records |
| `admin_profiles` | Linked to Supabase Auth users |
| `login_audit` | Security log of all auth events |

### Key Table: services
```sql
CREATE TABLE services (
  id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name                  TEXT NOT NULL,
  slug                  TEXT UNIQUE NOT NULL,
  short_description     TEXT,
  full_description      TEXT,
  category              TEXT,           -- 'astrology','numerology','vastu','tarot'
  icon                  TEXT,
  image_url             TEXT,
  price                 NUMERIC(10,2),
  duration_minutes      INTEGER,
  calendly_event_uri    TEXT,           -- Specific Calendly event type URI
  is_available          BOOLEAN DEFAULT TRUE,
  is_featured           BOOLEAN DEFAULT FALSE,
  display_order         INTEGER DEFAULT 0,
  created_at            TIMESTAMPTZ DEFAULT NOW(),
  updated_at            TIMESTAMPTZ DEFAULT NOW()
);
```

### Key Table: products
```sql
CREATE TABLE products (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name              TEXT NOT NULL,
  slug              TEXT UNIQUE NOT NULL,
  short_description TEXT,
  full_description  TEXT,
  category          TEXT,           -- 'gemstone','yantra','report','crystal','book'
  type              TEXT,           -- 'physical' | 'digital'
  price             NUMERIC(10,2) NOT NULL,
  compare_price     NUMERIC(10,2),  -- Strikethrough original price
  image_url         TEXT,
  images            JSONB,          -- Array of additional image URLs
  stock_quantity    INTEGER,
  is_in_stock       BOOLEAN DEFAULT TRUE,
  is_featured       BOOLEAN DEFAULT FALSE,
  digital_file_url  TEXT,           -- For digital products (private storage)
  display_order     INTEGER DEFAULT 0,
  created_at        TIMESTAMPTZ DEFAULT NOW(),
  updated_at        TIMESTAMPTZ DEFAULT NOW()
);
```

### Key Table: bookings
```sql
CREATE TABLE bookings (
  id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name           TEXT NOT NULL,
  client_email          TEXT NOT NULL,
  client_phone          TEXT,
  service_id            UUID REFERENCES services(id),
  service_name          TEXT,
  session_date          TIMESTAMPTZ,
  duration_minutes      INTEGER,
  amount_paid           NUMERIC(10,2),
  payment_status        TEXT DEFAULT 'pending',  -- pending|paid|failed|refunded
  razorpay_order_id     TEXT,
  razorpay_payment_id   TEXT,
  calendly_event_uri    TEXT,
  google_meet_link      TEXT,
  google_event_id       TEXT,
  status                TEXT DEFAULT 'confirmed', -- confirmed|cancelled|completed
  notes                 TEXT,
  created_at            TIMESTAMPTZ DEFAULT NOW(),
  updated_at            TIMESTAMPTZ DEFAULT NOW()
);
```

### Key Table: videos
```sql
CREATE TABLE videos (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title         TEXT NOT NULL,
  platform      TEXT NOT NULL,   -- 'youtube' | 'instagram' | 'facebook'
  url           TEXT NOT NULL,   -- Original video URL
  embed_id      TEXT,            -- YouTube video ID (extracted from URL)
  thumbnail_url TEXT,            -- Custom thumbnail or auto-fetched
  description   TEXT,
  category      TEXT,            -- 'astrology','numerology','vastu','tarot','general'
  is_featured   BOOLEAN DEFAULT FALSE,
  is_visible    BOOLEAN DEFAULT TRUE,
  display_order INTEGER DEFAULT 0,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);
```

### Key Table: orders
```sql
CREATE TABLE orders (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_number        TEXT UNIQUE NOT NULL,       -- ORD-2026-0001
  client_name         TEXT NOT NULL,
  client_email        TEXT NOT NULL,
  client_phone        TEXT,
  shipping_address    JSONB,                       -- {line1, city, state, pincode}
  items               JSONB NOT NULL,              -- [{product_id, name, price, qty}]
  subtotal            NUMERIC(10,2),
  total               NUMERIC(10,2) NOT NULL,
  payment_status      TEXT DEFAULT 'pending',      -- pending|paid|failed|refunded
  razorpay_order_id   TEXT,
  razorpay_payment_id TEXT,
  fulfillment_status  TEXT DEFAULT 'pending',      -- pending|processing|shipped|delivered
  tracking_number     TEXT,
  notes               TEXT,
  created_at          TIMESTAMPTZ DEFAULT NOW(),
  updated_at          TIMESTAMPTZ DEFAULT NOW()
);
```

### Key Table: login_audit
```sql
CREATE TABLE login_audit (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_id    UUID REFERENCES admin_profiles(id),
  event_type  TEXT NOT NULL,   -- login|logout|failed_login|password_changed|password_reset|session_revoked
  ip_address  TEXT,
  user_agent  TEXT,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);
```

---

## 14. Deployment Plan

### Hosting: Vercel (recommended)
- Connect GitHub repository to Vercel
- Set all environment variables in Vercel dashboard (never in code)
- Production domain points to Vercel
- Automatic deployments on every git push to main branch

### Go-Live Checklist
```
Pre-launch:
  □ All Supabase migrations run
  □ Admin account created in Supabase Auth
  □ All .env variables set in Vercel
  □ Razorpay KYC verified and live mode enabled
  □ Calendly event types created and linked to services
  □ Google Calendar API credentials set up
  □ Domain purchased and pointed to Vercel
  □ SSL certificate active (auto on Vercel)
  □ Test full booking flow end-to-end
  □ Test payment flow with Razorpay test keys
  □ Test admin login, forgot password, change password
  □ Mobile responsive check on real devices
  □ Google Analytics / Search Console connected (optional)

Post-launch:
  □ Submit sitemap to Google Search Console
  □ Set up Supabase database backups
  □ Monitor Razorpay dashboard for first transactions
```

---

---

## 15. SEO & Meta Strategy

### Per-Page Dynamic Metadata (Next.js generateMetadata)

Every page exports a `generateMetadata()` function — all values sourced from Supabase, never hardcoded.

| Page | Title Pattern | Description |
|------|--------------|-------------|
| Home | `[Name] — Astrologer, Numerologist & Vastu Consultant` | Tagline + location |
| Service | `[Service Name] — Book Consultation with [Name]` | Service description |
| Blog Post | `[Post Title] — [Name]` | Post excerpt |
| Shop | `Buy Spiritual Products — [Name]` | Shop description |
| Booking | `Book a Consultation — [Name]` | Booking page description |

### Open Graph & Social Sharing
```
og:title       — Same as page title
og:description — Page description (max 160 chars)
og:image       — /public/og-image.jpg (1200x630px — consultant photo + branding)
og:url         — Canonical URL for the page
og:type        — website (home) / article (blog) / product (shop)
twitter:card   — summary_large_image
```

### Structured Data (JSON-LD) — Boosts Google Rich Results

**On Homepage:**
```json
{
  "@type": "LocalBusiness",
  "name": "[Consultant Name]",
  "description": "Astrologer, Numerologist and Vastu Consultant",
  "telephone": "[phone]",
  "address": { "addressLocality": "[city]", "addressCountry": "IN" },
  "priceRange": "₹₹",
  "openingHours": "Mo-Sa 10:00-18:00"
}
```

**On Service Pages:**
```json
{
  "@type": "Service",
  "name": "Kundali Reading",
  "provider": { "@type": "Person", "name": "[Consultant Name]" },
  "offers": { "@type": "Offer", "price": "2100", "priceCurrency": "INR" }
}
```

**On Blog Posts:**
```json
{
  "@type": "Article",
  "headline": "[Post Title]",
  "author": { "@type": "Person", "name": "[Consultant Name]" },
  "datePublished": "[ISO date]"
}
```

**On FAQ Section:**
```json
{
  "@type": "FAQPage",
  "mainEntity": [{ "@type": "Question", "name": "...", "acceptedAnswer": {...} }]
}
```

**On Testimonials:**
```json
{
  "@type": "Review",
  "reviewRating": { "@type": "Rating", "ratingValue": "5" },
  "author": { "@type": "Person", "name": "[Client Name]" }
}
```

### Sitemap & Robots
```
/sitemap.xml   — Auto-generated by Next.js, lists all public pages + blog posts
/robots.txt    — Allow all crawlers, disallow /admin/*
```

### Additional SEO
- Canonical URLs on every page to prevent duplicate content
- Hreflang tag if Hindi language version added later
- Image alt text on every `<Image>` component — descriptive, keyword-rich
- Blog posts have slug-based URLs (e.g., `/blog/what-is-numerology`)
- Page load speed directly impacts Google ranking — see Section 16

### Files Added for SEO
```
app/
├── sitemap.ts              Auto-generates sitemap.xml
├── robots.ts               Generates robots.txt
└── [each page]/
    └── page.tsx            Includes generateMetadata() export

lib/
└── seo.ts                  Helper — builds metadata objects from Supabase data
```

---

## 16. Performance & Core Web Vitals

### Target Scores (Google Lighthouse)
| Metric | Target | Why It Matters |
|--------|--------|---------------|
| Performance | > 85 | Direct Google ranking factor |
| Accessibility | > 90 | Broader audience reach |
| Best Practices | > 90 | Security and code quality |
| SEO | > 95 | Search visibility |
| LCP (Largest Contentful Paint) | < 2.5s | User experience signal |
| CLS (Cumulative Layout Shift) | < 0.1 | No jarring layout jumps |
| FID / INP | < 200ms | Input responsiveness |

### Animation Performance Rules
- All animations use CSS `transform` and `opacity` only — never `top`, `left`, `width` (forces GPU layer, no layout recalculation)
- Star particle field uses `<canvas>` — not DOM elements — avoids reflow on every frame
- Framer Motion `will-change: transform` applied only to actively animating elements, removed after animation ends
- `prefers-reduced-motion` media query respected — all animations disabled for users with vestibular disorders or low-power devices

### Low-End Device Detection
```typescript
// lib/device.ts
// Detects slow connection or low-end device and disables heavy animations
const isLowEnd =
  navigator.hardwareConcurrency <= 2 ||
  (navigator as any).deviceMemory <= 2 ||
  navigator.connection?.effectiveType === '2g' ||
  navigator.connection?.effectiveType === 'slow-2g'

// StarField and MandalaRotate skip rendering if isLowEnd === true
// Static fallback images shown instead
```

### Image Optimisation
- All images use Next.js `<Image>` component — automatic WebP conversion, lazy loading, correct `sizes` prop
- Hero background: served as WebP, 3 sizes (mobile 640px / tablet 1024px / desktop 1920px)
- Consultant photo in About: `priority` prop set — loads with page, not lazily
- Product images: lazy loaded, placeholder blur while loading
- All images uploaded via admin are automatically stored in Supabase Storage — served via CDN

### Font Loading Strategy
```html
<!-- In app/layout.tsx <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
<!-- fonts load with display:swap — text visible immediately in fallback font -->
```

### Code Splitting
- Each section component (`Astrology.tsx`, `Numerology.tsx`, etc.) is dynamically imported
- Animations only load when the section enters the viewport (Intersection Observer)
- Framer Motion tree-shaken — only used features bundled, not the full library
- Admin panel code never loads on public pages — complete separation

### Vercel Edge Caching
- Static assets (fonts, icons, SVGs): cached 1 year (`Cache-Control: max-age=31536000, immutable`)
- API routes: no caching — always fresh from Supabase
- Images via Supabase Storage CDN: cached automatically at edge

---

## 17. Email & Transactional Notifications

**Service: Resend** (resend.com) — Simple API, excellent deliverability, 3,000 free emails/month.  
All emails sent from a branded address: `noreply@yourdomain.com` (domain must be verified in Resend).  
All email sending happens **server-side only** — `RESEND_API_KEY` never exposed to frontend.

### Emails Sent — Full List

| Trigger | Recipient | Subject | Content |
|---------|-----------|---------|---------|
| Booking confirmed + paid | Client | "Your Consultation is Confirmed 🌟" | Date, time, Meet link, payment receipt |
| Booking confirmed + paid | Consultant | "New Booking — [Client Name]" | Client details, service, date/time, payment amount |
| Booking cancelled | Client | "Your Booking Has Been Cancelled" | Cancellation note, rebooking link |
| Payment failed | Client | "Payment Unsuccessful — Try Again" | Retry link, support contact |
| Session reminder — 24h before | Client | "Your Session Tomorrow — [Date]" | Meet link, preparation tips |
| Session reminder — 1h before | Client | "Your Session Starts in 1 Hour" | Meet link |
| New product order | Client | "Order Confirmed — #ORD-XXXX" | Items, total, delivery info |
| New product order | Consultant | "New Order Received — #ORD-XXXX" | Order details, shipping address |
| Order shipped | Client | "Your Order Has Been Shipped 📦" | Tracking number, estimated delivery |
| Digital product purchase | Client | "Your Digital Product is Ready" | Secure download link (expires 48h) |
| Password reset | Admin | "Reset Your Password" | Supabase-generated secure link |
| New login from new device | Admin | "New Login Detected" | IP, device, time — with "Not me?" link |

### Email Templates
All emails use a consistent branded HTML template:
- Dark cosmic background matching website theme
- Gold ॐ logo header
- Consultant name and tagline in header
- Clean content area
- Gold CTA button
- Footer with phone, WhatsApp, social links, unsubscribe note

```
lib/
└── email/
    ├── resend.ts                   Resend client initialisation (server only)
    ├── templates/
    │   ├── booking-confirmed.tsx   React Email template
    │   ├── booking-cancelled.tsx
    │   ├── payment-failed.tsx
    │   ├── session-reminder.tsx
    │   ├── order-confirmed.tsx
    │   ├── order-shipped.tsx
    │   ├── digital-download.tsx
    │   └── base-layout.tsx         Shared header/footer for all templates
    └── send.ts                     sendEmail() helper function
```

### New Environment Variables for Email
```bash
RESEND_API_KEY=                     # Resend API key (server only)
RESEND_FROM_EMAIL=                  # noreply@yourdomain.com (verified domain)
CONSULTANT_EMAIL=                   # Consultant's inbox for new booking alerts
```

---

## 18. Analytics & Tracking

### Google Analytics 4 (GA4)
- Tracks: page views, sessions, traffic sources, user geography, device types
- Events tracked: `book_now_click`, `payment_complete`, `video_play`, `product_view`, `contact_click`
- Implementation: GA4 script loaded via Next.js `<Script>` with `strategy="afterInteractive"` — does not block page load
- Measurement ID stored in `NEXT_PUBLIC_GA_MEASUREMENT_ID` — safe for frontend

### Meta Pixel (Facebook/Instagram)
- Tracks visitors for Facebook and Instagram retargeting ads
- Events tracked: `PageView`, `Lead` (on booking initiation), `Purchase` (on payment success)
- Essential if client ever runs paid social media campaigns
- Pixel ID stored in `NEXT_PUBLIC_META_PIXEL_ID` — safe for frontend

### Conversion Events Map

| User Action | GA4 Event | Meta Pixel Event |
|-------------|-----------|-----------------|
| Clicks "Book Now" | `book_now_click` | `Lead` |
| Calendly slot selected | `slot_selected` | — |
| Payment completed | `payment_complete` + `purchase` | `Purchase` |
| Product added to cart | `add_to_cart` | `AddToCart` |
| Product purchased | `product_purchase` | `Purchase` |
| Video played | `video_play` | — |
| Contact button clicked | `contact_click` | — |
| WhatsApp button clicked | `whatsapp_click` | — |

### Google Search Console
- Verify domain ownership via DNS TXT record
- Submit sitemap.xml after launch
- Monitor search impressions, clicks, average position for keywords like "astrologer online consultation India"

### Implementation Files
```
components/
└── analytics/
    ├── GoogleAnalytics.tsx     GA4 script + pageview tracking
    └── MetaPixel.tsx           Meta Pixel script + event tracking

lib/
└── analytics.ts               trackEvent() helper — wraps GA4 + Meta Pixel calls
```

---

## 19. Razorpay KYC & Go-Live Timeline

### KYC Process (Must Start Before Build Completes)
Razorpay requires business verification before enabling live payments. This takes **3–7 business days** and must be started early.

**Documents Required:**
- PAN card (individual or business)
- Bank account details (account number + IFSC)
- Business proof: GST certificate OR Aadhaar + PAN (for individuals)
- Cancelled cheque or bank statement

**Steps:**
```
1. Create Razorpay account at razorpay.com
2. Go to Settings → Account & Billing → KYC
3. Submit all documents
4. Wait 3–7 days for approval email
5. Once approved — switch from test keys to live keys in .env
6. Test one real payment of ₹1 before full launch
```

### Test Mode vs Live Mode
```bash
# During development — use test keys (no real money)
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_XXXXXXXXXXXX
RAZORPAY_KEY_SECRET=test_secret_XXXXXXXXXXXX

# After KYC approval — switch to live keys
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_XXXXXXXXXXXX
RAZORPAY_KEY_SECRET=live_secret_XXXXXXXXXXXX
```

**Important:** Test and live are separate key pairs — switching is one .env change in Vercel dashboard, no code change needed.

### Razorpay Settlement Timeline
- Payments settle to bank account within **T+2 business days** (standard)
- Razorpay deducts 2% + GST per transaction before settlement
- Settlement reports available in Razorpay dashboard

---

## 20. Product Order Fulfillment Flow

### Physical Products Flow
```
Customer places order + pays via Razorpay
        │
        ▼
Order saved to Supabase (fulfillment_status: "pending")
        │
        ▼
Admin receives email: "New Order — #ORD-XXXX"
Admin sees order in Admin Panel → Orders page
        │
        ▼
Admin packs and ships product
        │
        ▼
Admin opens order in admin panel:
  → Updates fulfillment_status to "shipped"
  → Enters tracking number + courier name
  → Clicks "Mark Shipped"
        │
        ▼
System automatically:
  → Sends "Order Shipped" email to client with tracking number
  → Updates order record in Supabase
        │
        ▼
Admin marks "delivered" when confirmed
```

### Digital Products Flow
```
Customer purchases digital product + pays
        │
        ▼
verify-payment API confirms payment
        │
        ▼
System generates a signed URL for the file in Supabase private storage:
  supabase.storage.from('digital-products').createSignedUrl(filePath, 172800)
  → URL expires in 48 hours
        │
        ▼
"Digital Product Ready" email sent to client:
  → Contains the signed download URL
  → Note: "This link expires in 48 hours"
        │
        ▼
Client downloads the file
```

### Shipping Scope (India Only)
- Physical products ship within India only
- Shipping address form collects: Name, Address Line 1, City, State, Pincode, Phone
- Pincode validation: check against India pincode database (free API available)
- No international shipping in V1 — can be added later

### No Shipping Integration in V1
Manual shipping via preferred courier (India Post, DTDC, Delhivery, etc.).  
Tracking number entered manually by admin — no automated courier API in V1.  
Can integrate Shiprocket API in V2 if volume justifies it.

---

## 21. Spam Protection & Content Moderation

### hCaptcha on Public Forms

All public-facing forms that create database records or trigger external APIs use **hCaptcha invisible mode** — users see no challenge unless flagged as suspicious.

| Form | Protection |
|------|-----------|
| Booking initiation | hCaptcha token verified server-side before creating Razorpay order |
| Contact form | hCaptcha token verified before saving or sending email |
| Product checkout | hCaptcha token verified before creating Razorpay order |

### Server-Side hCaptcha Verification
```typescript
// lib/captcha.ts — server only, never exposed to frontend
async function verifyCaptcha(token: string): Promise<boolean> {
  const response = await fetch('https://hcaptcha.com/siteverify', {
    method: 'POST',
    body: new URLSearchParams({
      secret: process.env.HCAPTCHA_SECRET_KEY!,
      response: token
    })
  })
  const data = await response.json()
  return data.success === true
}

// Every public API route calls this before any processing:
const captchaOk = await verifyCaptcha(body.captchaToken)
if (!captchaOk) return Response.json({ error: 'Captcha failed' }, { status: 400 })
```

### Rate Limiting on Public API Routes
```
/api/booking/initiate    → max 10 requests per IP per hour
/api/contact             → max 5 requests per IP per hour
/api/booking/verify      → max 10 requests per IP per hour
```

### Input Sanitisation
- All text inputs sanitised with `DOMPurify` on the server before saving to Supabase
- Prevents stored XSS — especially important for blog post content and testimonials
- URL fields validated: only `https://` URLs accepted, no `javascript:` or `data:` URIs

### Admin Panel Content Moderation
- Testimonials added via admin only — no public submission form (no moderation needed)
- Blog posts require admin login to create — no public submission
- Video URLs: validated to confirm they belong to YouTube, Instagram or Facebook domains only

---

## 22. WhatsApp Business API Approval Plan

### The Problem
Twilio's WhatsApp Business API requires **Meta (Facebook) approval** before going live. This approval can take **1–4 weeks**. It must be applied for **before** the website launches.

### What Is Needed for Approval
- Facebook Business Manager account (verified)
- Business name matching Razorpay KYC
- Phone number dedicated to WhatsApp Business (not your personal number)
- Message template submitted and approved by Meta (e.g., "Your session on [date] is confirmed. Join at [link]")

### Fallback Plan If Approval Is Delayed
If WhatsApp is not approved before launch, the system gracefully falls back:

```
Priority 1: WhatsApp message via Twilio (if approved)
Priority 2: Branded HTML email via Resend (always works — no approval needed)
Priority 3: Google Calendar invite (auto-sent by Google, always works)
```

The booking flow **does not block** on WhatsApp — the API call is fire-and-forget with error logging. If Twilio fails, Sentry captures the error and the admin is notified, but the client still receives the email and calendar invite.

### Message Templates (Pre-approve with Meta)

**Booking Confirmation:**
> "Namaste {{1}}! Your {{2}} session with [Consultant Name] is confirmed for {{3}} at {{4}} IST. Join via Google Meet: {{5}}. For any queries, call {{6}}. 🙏"

**Session Reminder (24h):**
> "Namaste {{1}}! Your consultation tomorrow at {{2}} IST is approaching. Google Meet link: {{3}}. Please be on time. 🌟"

---

## 23. Error Handling & Monitoring

### Sentry Integration
All unhandled exceptions — both on the frontend (React) and backend (Next.js API routes) — are captured by Sentry and sent to a dashboard with full stack traces, user context, and request details.

```
lib/
└── sentry.ts       Sentry initialisation helpers

sentry.client.config.ts   Client-side Sentry (Next.js convention)
sentry.server.config.ts   Server-side Sentry
sentry.edge.config.ts     Edge middleware Sentry
```

### Critical Failure Scenarios & Recovery

| Scenario | What Happens | Recovery |
|----------|-------------|---------|
| Google Meet creation fails | Error logged to Sentry, admin alerted by email | Admin manually creates Meet link and emails client |
| Razorpay webhook not received | Webhook has 5 retry attempts over 24h (Razorpay built-in) | verify-payment route also called from frontend as primary |
| Twilio WhatsApp fails | Sentry logs error, no user-visible failure | Client still gets email + calendar invite |
| Resend email fails | Sentry logs error | Admin notified via Sentry alert |
| Supabase is down | Next.js error boundary shows "Site maintenance" page | Auto-recovers when Supabase comes back |
| Calendly slot not cancellable | Sentry logs error | Admin manually cancels slot in Calendly dashboard |

### Sentry Alert Rules (immediate email to developer)
- Any unhandled exception in `/api/booking/*` routes
- Any unhandled exception in `/api/webhooks/*` routes
- Error rate exceeds 5% of requests in any 5-minute window
- Any error with `payment` in the stack trace

### API Route Error Response Standard
Every API route returns a consistent error shape — never exposes stack traces or internal details to the client:
```json
{
  "error": "Human-readable message safe to show user",
  "code": "PAYMENT_VERIFICATION_FAILED"
}
```
Internal error details go to Sentry only — never to the response body.

### Frontend Error Boundaries
Each major section wrapped in a React Error Boundary — if one section crashes (e.g., video embed fails to load), the rest of the page remains functional.

---

## 24. Consultation Reminder System

### Vercel Cron Jobs
Two scheduled jobs run automatically on Vercel — no separate server or cron service needed:

```json
// vercel.json
{
  "crons": [
    {
      "path": "/api/cron/send-reminders",
      "schedule": "0 * * * *"
    },
    {
      "path": "/api/cron/cancel-unpaid-slots",
      "schedule": "*/30 * * * *"
    }
  ]
}
```

### Cron Route Security
All cron routes validate a shared secret in the `Authorization` header — Vercel sets this automatically when using its native cron feature. Prevents external callers from triggering the endpoint.

```typescript
// Every cron route:
const authHeader = request.headers.get('authorization')
if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
  return Response.json({ error: 'Unauthorized' }, { status: 401 })
}
```

### Reminder Logic

**Job 1: send-reminders (runs every hour)**
```
Query Supabase:
  SELECT * FROM bookings
  WHERE status = 'confirmed'
    AND payment_status = 'paid'
    AND session_date BETWEEN NOW() + INTERVAL '23 hours'
                         AND NOW() + INTERVAL '25 hours'
    AND reminder_24h_sent = FALSE

For each booking found:
  → Send "Session Tomorrow" WhatsApp message
  → Send "Session Tomorrow" email via Resend
  → Update: reminder_24h_sent = TRUE

Also query for 1-hour reminders:
  AND session_date BETWEEN NOW() + INTERVAL '55 minutes'
                       AND NOW() + INTERVAL '65 minutes'
    AND reminder_1h_sent = FALSE
  → Send "Session in 1 Hour" WhatsApp + email
  → Update: reminder_1h_sent = TRUE
```

**Job 2: cancel-unpaid-slots (runs every 30 minutes)**
```
Query Supabase:
  SELECT * FROM bookings
  WHERE payment_status = 'pending'
    AND created_at < NOW() - INTERVAL '30 minutes'

For each expired pending booking:
  → Call Calendly API to cancel the slot
  → Delete booking record from Supabase
  → Log cancellation event
```

### Reminder Tracking Columns Added to bookings Table
```sql
ALTER TABLE bookings ADD COLUMN reminder_24h_sent BOOLEAN DEFAULT FALSE;
ALTER TABLE bookings ADD COLUMN reminder_1h_sent  BOOLEAN DEFAULT FALSE;
```

### New API Routes for Cron
```
app/api/cron/
├── send-reminders/route.ts       Hourly reminder job
└── cancel-unpaid-slots/route.ts  30-minute slot cleanup job
```

---

## 25. Multi-Admin & Staff Access

### Roles Defined

| Role | Access Level | Use Case |
|------|-------------|---------|
| `super_admin` | Full access — all pages, settings, can create/remove admins | Business owner (consultant) |
| `admin` | Full access except: cannot delete super_admin, cannot access billing | Assistant or manager |
| `booking_manager` | Read/update bookings and orders only — no content editing | Receptionist or VA |

### Role Stored in admin_profiles Table
```sql
ALTER TABLE admin_profiles ADD COLUMN role TEXT DEFAULT 'admin'
  CHECK (role IN ('super_admin', 'admin', 'booking_manager'));
```

### Role-Based Route Protection
```typescript
// lib/auth.ts — role-aware wrapper
export function withRole(role: AdminRole, handler: ...) {
  return withAdminAuth(async (req, { adminId, adminRole }) => {
    if (!hasPermission(adminRole, role)) {
      return Response.json({ error: 'Insufficient permissions' }, { status: 403 })
    }
    return handler(req, { adminId, adminRole })
  })
}

// Usage:
export const DELETE = withRole('super_admin', async (req) => {
  // Only super_admin can delete services
})
```

### Admin Panel UI by Role
- `booking_manager`: Sidebar shows only Bookings and Orders sections — all other nav items hidden
- `admin`: Full sidebar except Settings → Admin Users page
- `super_admin`: Full sidebar including Admin Users management page

### Admin Users Management Page (super_admin only)
```
/admin/users — shows all admin accounts:
  [Name]    [Email]             [Role]          [Last Login]    [Actions]
  Priya     priya@domain.com    admin           2 May 2026      [Edit] [Remove]
  Ravi      ravi@domain.com     booking_mgr     8 May 2026      [Edit] [Remove]

  [+ Invite New Admin] button:
    → Enter email + select role
    → Supabase Auth sends invite email
    → New admin sets password via email link
```

---

## 26. Payment Recovery Flow

### The Problem
If a user pays successfully via Razorpay but their network drops **before** our `verify-payment` API receives the response, the payment is real but our system never processes it — no Meet link created, no email sent.

### Solution — Three-Layer Safety Net

**Layer 1: Frontend retry (primary path)**
```
Razorpay modal: on payment success
  → Frontend immediately calls POST /api/booking/verify-payment
  → If network error: shows "Verifying payment..." spinner
  → Retries up to 3 times with 3-second intervals
  → If all retries fail: shows "Payment received — verification in progress.
     You will receive confirmation by email within 15 minutes."
```

**Layer 2: Razorpay Webhook (backup — always fires)**
```
POST /api/webhooks/razorpay
  → Razorpay sends this from their servers regardless of user's network
  → Retried by Razorpay up to 5 times over 24 hours if we return non-200
  → Runs the same verification + Meet creation logic as verify-payment
  → Idempotent — safe to run multiple times (checks if booking already processed)
```

**Layer 3: Manual recovery by admin**
```
Admin Panel → Bookings:
  → Shows "paid but unprocessed" status if webhook also failed
  → Admin can click "Manually Create Meet Link" button
  → Triggers Meet creation + sends email to client
```

### Idempotency — Prevents Double Processing
Both `verify-payment` and the Razorpay webhook check before processing:
```typescript
const existingBooking = await supabase
  .from('bookings')
  .select('payment_status, google_meet_link')
  .eq('razorpay_payment_id', paymentId)
  .single()

if (existingBooking.data?.payment_status === 'paid') {
  return Response.json({ success: true, alreadyProcessed: true })
  // Do nothing — already handled
}
```

### Booking Status Page
```
/booking/status?order_id=[razorpay_order_id]

User can check their booking status at any time:
  → Queries Supabase for booking by order ID
  → Shows current status: pending / paid / confirmed / failed
  → If paid: shows Meet link
  → If pending > 15 min: shows support contact
```

---

## 27. Updated Folder Structure Additions

The following files are added to the folder structure from Sections 15–26:

```
app/
├── sitemap.ts                      SEO — auto-generates sitemap.xml
├── robots.ts                       SEO — generates robots.txt
├── booking/
│   └── status/page.tsx             Payment recovery status check page
│
└── api/
    ├── cron/
    │   ├── send-reminders/route.ts     Hourly — send 24h and 1h session reminders
    │   └── cancel-unpaid-slots/route.ts 30-min — cleanup unpaid Calendly slots
    └── contact/route.ts                Contact form submission (with hCaptcha)

components/
└── analytics/
    ├── GoogleAnalytics.tsx         GA4 page tracking + event helpers
    └── MetaPixel.tsx               Meta Pixel tracking

lib/
├── email/
│   ├── resend.ts                   Resend client (server only)
│   ├── send.ts                     sendEmail() wrapper
│   └── templates/
│       ├── base-layout.tsx         Shared branded template header/footer
│       ├── booking-confirmed.tsx
│       ├── booking-cancelled.tsx
│       ├── payment-failed.tsx
│       ├── session-reminder.tsx
│       ├── order-confirmed.tsx
│       ├── order-shipped.tsx
│       └── digital-download.tsx
├── captcha.ts                      hCaptcha server-side verification
├── analytics.ts                    trackEvent() for GA4 + Meta Pixel
└── seo.ts                          generateMetadata() helpers

sentry.client.config.ts             Sentry frontend initialisation
sentry.server.config.ts             Sentry server initialisation
sentry.edge.config.ts               Sentry edge middleware initialisation
vercel.json                         Cron job schedule definitions
```

---

## 28. Updated Supabase Migrations List

```
supabase/migrations/
├── 001_create_site_settings.sql
├── 002_create_hero_content.sql
├── 003_create_about_content.sql
├── 004_create_services.sql
├── 005_create_products.sql
├── 006_create_testimonials.sql
├── 007_create_videos.sql
├── 008_create_blog_posts.sql
├── 009_create_faqs.sql
├── 010_create_gallery.sql
├── 011_create_bookings.sql
├── 012_create_orders.sql
├── 013_create_admin_profiles.sql
├── 014_enable_rls_all_tables.sql
├── 015_create_rls_policies.sql
├── 016_create_storage_buckets.sql
├── 017_create_login_audit.sql
├── 018_add_reminder_flags_to_bookings.sql    reminder_24h_sent, reminder_1h_sent columns
└── 019_add_role_to_admin_profiles.sql        role column with CHECK constraint
```

---

## 29. Final Go-Live Checklist (Updated)

```
BEFORE DEVELOPMENT STARTS:
  □ Client questionnaire returned and reviewed
  □ Razorpay KYC submitted (takes 3–7 days)
  □ WhatsApp Business API applied for via Twilio (takes 1–4 weeks)
  □ Domain purchased and DNS configured
  □ Google Cloud project created, Calendar API enabled
  □ Calendly account set up with correct event types
  □ Resend account created, domain DNS records added for email verification

DURING DEVELOPMENT:
  □ Use Razorpay TEST keys — never live keys in development
  □ Sentry project created, DSN added to .env.local
  □ All secrets in .env.local — confirmed not in any .ts/.tsx file
  □ hCaptcha keys set up and tested on booking form

PRE-LAUNCH:
  □ All 19 Supabase migrations run in order
  □ Admin account created in Supabase Auth
  □ All .env variables set in Vercel dashboard
  □ Razorpay KYC verified → switch to LIVE keys in Vercel
  □ Test booking: Calendly → Razorpay (₹1) → Google Meet → Email → WhatsApp
  □ Test product purchase: add to cart → Razorpay → email confirmation
  □ Test admin: login, forgot password, change password, session revoke
  □ Test cron jobs: manually trigger /api/cron/send-reminders
  □ Test payment failure recovery: verify /booking/status page
  □ Mobile responsive check on real iPhone and Android device
  □ Google Lighthouse score > 85 on mobile
  □ Test sitemap.xml and robots.txt rendering correctly
  □ SSL active (auto on Vercel)
  □ Sentry test error received in dashboard

POST-LAUNCH:
  □ Submit sitemap to Google Search Console
  □ Enable Supabase daily database backups
  □ Monitor Sentry for first 48 hours
  □ Monitor Razorpay for first real transactions
  □ Verify GA4 receiving real user events
  □ Check Resend delivery rates for first emails
```

---

*Document Version: 2.0 — Updated 8 May 2026*  
*Sections 1–14: Core architecture | Sections 15–26: Extended coverage | Sections 27–29: Updated references*  
*Next Step: Receive client answers → Begin Supabase setup → Admin auth → Landing page*
