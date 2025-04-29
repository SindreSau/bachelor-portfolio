import './global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from './components/nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from './components/footer';
import { baseUrl } from './sitemap';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Next.js Portfolio Starter',
    template: '%s | Next.js Portfolio Starter',
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'My Portfolio',
    description: 'This is my portfolio.',
    url: baseUrl,
    siteName: 'My Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cx(GeistSans.variable, GeistMono.variable)}>
      {/* Ensure body takes full height and footer sticks to bottom */}
      <body className="flex flex-col min-h-screen bg-background text-foreground">
        {/* Header with full-width background/border */}
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          {/* Centered container for Navbar content */}
          <div className="max-w-5xl mx-auto px-4">
            <Navbar />
          </div>
        </header>

        {/* Main content area */}
        {/* Apply flex-grow to make main take available space */}
        <main className="flex-grow w-full">
          {/* Centered container for page content */}
          <div className="max-w-5xl mx-auto px-4 py-6">
            {' '}
            {/* Added py-6 for vertical spacing */}
            {children}
          </div>
        </main>

        {/* Footer with full-width background/border */}
        <footer className="w-full border-t border-border/40">
          {' '}
          {/* Removed mb-16 */}
          {/* Centered container for Footer content */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {' '}
            {/* Added py-8 for vertical spacing */}
            <Footer />
          </div>
          {/* Analytics components outside the visual container */}
          <Analytics />
          <SpeedInsights />
        </footer>
      </body>
    </html>
  );
}
