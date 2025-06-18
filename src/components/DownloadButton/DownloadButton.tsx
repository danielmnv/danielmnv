'use client';

import './DownloadButton.css';
import { DownloadIcon } from '@/components/icons/DownloadIcon';

interface DownloadButtonProps {
  href: string;
}

export function DownloadButton({ href }: DownloadButtonProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="download-button group">
      <span>Download Resume</span>
      <DownloadIcon className="download-icon" />
    </a>
  );
}
