// middleware.js

import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('token');
  const url = request.nextUrl.clone();

  // Redirect to login if no token is found and user tries to access /uploade/*
  if (!token && url.pathname.startsWith('/profile')) {
    url.pathname = '/espace-client';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Apply middleware only to /uploade/* routes
export const config = {
  matcher: '/profile/:path*',
};
