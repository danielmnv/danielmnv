import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'next-themes';
import { ThemeToggle } from '../ThemeToggle';
import { describe, expect, it, vi } from 'vitest';
import * as nextThemes from 'next-themes';

vi.mock('next-themes', async () => {
  const actual = await vi.importActual<typeof nextThemes>('next-themes');
  return {
    ...actual,
    useTheme: vi.fn(),
  };
});

describe('ThemeToggle', () => {
  it('renders and toggles from dark to light with sun icon', () => {
    const setThemeMock = vi.fn();
    vi.mocked(nextThemes.useTheme).mockReturnValue({
      theme: 'dark',
      resolvedTheme: 'dark',
      setTheme: setThemeMock,
      themes: ['light', 'dark'],
    });

    render(
      <ThemeProvider attribute="class">
        <ThemeToggle />
      </ThemeProvider>
    );

    const button = screen.getByRole('button', { name: /toggle theme/i });
    expect(button).toBeInTheDocument();

    // Icon for dark mode
    expect(screen.getByTestId('sun-icon')).toBeInTheDocument();

    fireEvent.click(button);
    expect(setThemeMock).toHaveBeenCalledWith('light');
  });

  it('toggles from light to dark with moon icon', () => {
    const setThemeMock = vi.fn();
    vi.mocked(nextThemes.useTheme).mockReturnValue({
      theme: 'light',
      setTheme: setThemeMock,
      themes: ['light', 'dark'],
    });

    render(
      <ThemeProvider attribute="class">
        <ThemeToggle />
      </ThemeProvider>
    );

    const button = screen.getByRole('button', { name: /toggle theme/i });

    // Icon for light mode
    expect(screen.getByTestId('moon-icon')).toBeInTheDocument();

    fireEvent.click(button);
    expect(setThemeMock).toHaveBeenCalledWith('dark');
  });

  it('uses resolvedTheme when available and toggles to light', () => {
    const setThemeMock = vi.fn();
    vi.mocked(nextThemes.useTheme).mockReturnValue({
      theme: 'system',
      resolvedTheme: 'dark',
      setTheme: setThemeMock,
      themes: ['light', 'dark', 'system'],
    });

    render(
      <ThemeProvider attribute="class">
        <ThemeToggle />
      </ThemeProvider>
    );

    const button = screen.getByRole('button', { name: /toggle theme/i });
    expect(screen.getByTestId('sun-icon')).toBeInTheDocument();

    fireEvent.click(button);
    expect(setThemeMock).toHaveBeenCalledWith('light');
  });

  it('uses resolvedTheme when available and toggles to dark', () => {
    const setThemeMock = vi.fn();
    vi.mocked(nextThemes.useTheme).mockReturnValue({
      theme: 'system',
      resolvedTheme: 'light',
      setTheme: setThemeMock,
      themes: ['light', 'dark', 'system'],
    });

    render(
      <ThemeProvider attribute="class">
        <ThemeToggle />
      </ThemeProvider>
    );

    const button = screen.getByRole('button', { name: /toggle theme/i });
    expect(screen.getByTestId('moon-icon')).toBeInTheDocument();

    fireEvent.click(button);
    expect(setThemeMock).toHaveBeenCalledWith('dark');
  });
});
