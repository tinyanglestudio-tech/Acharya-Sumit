import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Protects /admin routes — full auth logic added when Supabase is configured
export function middleware(request: NextRequest) {
  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
