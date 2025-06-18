import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Daniel Molina',
  description: 'Full Stack Engineer crafting beautiful, efficient websites and applications.',
  openGraph: {
    title: 'Daniel Molina',
    description: 'Full Stack Engineer crafting beautiful, efficient websites and applications.',
    type: 'website',
    siteName: 'Daniel Molina',
    url: 'https://danielmolina.me',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <ThemeProvider>
        <body className={inter.className}>
          <main className="layout-container">{children}</main>
        </body>
      </ThemeProvider>
    </html>
  );
}
