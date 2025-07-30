import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const isAdminRoute = req.nextUrl.pathname.startsWith('/dashboard');
    
    // Protect admin routes
    if (isAdminRoute && token?.role !== 'admin') {
      return NextResponse.redirect(new URL('/auth/signin', req.url));
    }
    
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const isAdminRoute = req.nextUrl.pathname.startsWith('/dashboard');
        const isAuthRoute = req.nextUrl.pathname.startsWith('/auth');
        
        // Allow access to auth routes
        if (isAuthRoute) return true;
        
        // For admin routes, require token and admin role
        if (isAdminRoute) {
          return !!token && token.role === 'admin';
        }
        
        // For other protected routes, just require token
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/profile/:path*',
    '/orders/:path*',
    '/checkout/:path*',
  ],
};