import './globals.css';

import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';

import { cn } from '@/lib/utils';

import { ClerkProvider } from '@clerk/nextjs';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    default: 'Swaylend',
    template: 'Swaylend | %s',
  },
  description: 'The first and leading lending protocol on Fuel Network.',
  robots: {
    index: true,
    follow: true,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
  openGraph: {
    description: 'The first and leading lending protocol on Fuel Network.',
    siteName: 'app.swaylend.com',
    title: 'app.swaylend.com - Swaylend',
    type: 'article',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'app.swaylend.com - Swaylend',
    description: 'The first and leading lending protocol on Fuel Network.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
}
