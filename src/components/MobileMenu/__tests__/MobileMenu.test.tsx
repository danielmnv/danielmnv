import { describe, expect, it, vi } from 'vitest';

vi.mock('@/hooks/useActiveSection', () => ({
  useActiveSection: () => 'Projects',
}));

vi.mock('@/components/Logo/Logo', () => ({
  Logo: () => <div data-testid="logo" />,
}));

vi.mock('@/components/ThemeToggle/ThemeToggle', () => ({
  ThemeToggle: () => <div data-testid="theme-toggle" />,
}));

import { render, screen } from '@testing-library/react';
import { MobileMenu } from '../MobileMenu';

describe('MobileMenu', () => {
  it('renders logo and theme toggle', () => {
    render(<MobileMenu isVisible={true} />);
    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByTestId('theme-toggle')).toBeInTheDocument();
  });

  it('renders active section when defined', () => {
    render(<MobileMenu isVisible={true} />);
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });

  it('does not render active section when undefined', async () => {
    vi.resetModules();
    vi.doMock('@/hooks/useActiveSection', () => ({
      useActiveSection: () => undefined,
    }));

    const { MobileMenu: MobileMenuRemocked } = await import('../MobileMenu');
    render(<MobileMenuRemocked isVisible={true} />);
    expect(screen.queryByText('Projects')).not.toBeInTheDocument();
  });
});
