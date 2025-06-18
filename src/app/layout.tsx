import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Daniel Molina',
  description: 'Full Stack Engineer crafting beautiful, efficient websites and applications.',
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
