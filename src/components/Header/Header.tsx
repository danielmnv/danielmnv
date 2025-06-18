'use client';

import './Header.css';
import Image from 'next/image';
import { DownloadButton } from '@/components/DownloadButton/DownloadButton';

export function Header() {
  return (
    <div className="header-wrapper">
      <div className="avatar-wrapper">
        <Image
          src="/profile-photo.png"
          alt="Daniel Molina"
          width={192}
          height={192}
          className="avatar-image"
          priority
        />
      </div>
      <div className="header-content">
        <h1 className="text-heading">Daniel Molina</h1>
        <h2 className="text-subheading tracking-tighter">Full Stack Engineer</h2>
        <p className="text-body tracking-wide">
          I craft beautiful, efficient websites and applications.
        </p>
      </div>
      <DownloadButton href="/resume.pdf" />
    </div>
  );
}
