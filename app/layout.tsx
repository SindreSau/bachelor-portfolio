import './global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from '../components/ui/nav';
import Footer from '../components/ui/footer';
import { baseUrl } from './sitemap';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Accenture Bachelor Application Management System',
    template: '%s | Accenture Bachelor Application Management System',
  },
  description:
    'A website showcasing our bachelor project, done in collaboration with Accenture. We built a full-stack web application that modernized their bachelor thesis application process. Using Next.js, TypeScript, and PostgreSQL, the system features a student-facing portal and an administrative dashboard, streamlining workflows, reducing manual processing, and ensuring GDPR compliance.',
  keywords: [
    'Next.js',
    'TypeScript',
    'PostgreSQL',
    'Azure Blob Storage',
    'Docker',
    'Tailwind CSS',
    'Prisma ORM',
    'bachelor thesis',
    'Accenture',
    'application management',
    'GDPR compliance',
  ],
  authors: [
    { name: 'Sindre Sauarlia' },
    { name: 'Ådne Nilsen Longva' },
    { name: 'Alexander Cody McCorkle' },
  ],
  openGraph: {
    title: 'Accenture Bachelor Application Management System',
    description:
      "A full-stack web application system that streamlines Accenture's bachelor thesis application process. Built with Next.js, TypeScript, and PostgreSQL.",
    url: baseUrl,
    siteName: 'Accenture Bachelor Application Management System',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
