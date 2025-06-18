import { render, screen } from '@testing-library/react';
import { DownloadButton } from '../DownloadButton';
import { describe, expect, it } from 'vitest';

describe('DownloadButton', () => {
  it('renders with correct href and target', () => {
    render(<DownloadButton href="/resume.pdf" />);

    const link = screen.getByRole('link', { name: /download resume/i });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/resume.pdf');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
