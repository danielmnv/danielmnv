'use client';

import { Overview } from '@/components/Overview/Overview';
import { CareerPath } from '@/components/CareerPath/CareerPath';
import { Header } from '@/components/Header/Header';
import { Projects } from '@/components/Projects/Projects';
import { SocialLinks } from '@/components/SocialLinks/SocialLinks';
import { Logo } from '@/components/Logo/Logo';
import { ThemeToggle } from '@/components/ThemeToggle/ThemeToggle';
import { MobileMenu } from '@/components/MobileMenu/MobileMenu';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show menu when we've scrolled well past the header content
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <MobileMenu isVisible={isScrolled} />

      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:py-24">
          {/* Logo at top with mobile theme toggle */}
          <div className="mb-8 flex items-center justify-between">
            <Logo className="h-8 w-auto" />
            <div className="lg:hidden">
              <ThemeToggle />
            </div>
          </div>

          {/* Main content */}
          <div className="lg:flex lg:flex-1 lg:flex-col lg:justify-center">
            <div className="gap-6 lg:flex lg:flex-col">
              <Header />
              <SocialLinks />
            </div>
          </div>

          {/* Theme Toggle at bottom (desktop only) */}
          <div className="hidden lg:mt-8 lg:block">
            <ThemeToggle />
          </div>
        </header>

        <main className="pt-24 lg:w-1/2 lg:py-24">
          <Overview />
          <CareerPath />
          <Projects />
        </main>
      </div>
    </>
  );
}
