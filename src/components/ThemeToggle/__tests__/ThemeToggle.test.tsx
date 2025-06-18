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
      themes: ['light', 'dark', 'system'],
    });

    render(
      <ThemeProvider attribute="class">
        <ThemeToggle />
      </ThemeProvider>
    );

    // Dark theme button should be active
    const darkThemeButton = screen.getByTestId('dark-theme-button');
    expect(darkThemeButton).toHaveClass('active');

    // Click on light theme button
    const lightThemeButton = screen.getByTestId('light-theme-button');
    fireEvent.click(lightThemeButton);
    expect(setThemeMock).toHaveBeenCalledWith('light');
  });

  it('toggles from light to dark with moon icon', () => {
    const setThemeMock = vi.fn();
    vi.mocked(nextThemes.useTheme).mockReturnValue({
      theme: 'light',
      setTheme: setThemeMock,
      themes: ['light', 'dark', 'system'],
    });

    render(
      <ThemeProvider attribute="class">
        <ThemeToggle />
      </ThemeProvider>
    );

    // Light theme button should be active
    const lightThemeButton = screen.getByTestId('light-theme-button');
    expect(lightThemeButton).toHaveClass('active');

    // Click on dark theme button
    const darkThemeButton = screen.getByTestId('dark-theme-button');
    fireEvent.click(darkThemeButton);
    expect(setThemeMock).toHaveBeenCalledWith('dark');
  });

  it('toggles from dark to system with system icon', () => {
    const setThemeMock = vi.fn();
    vi.mocked(nextThemes.useTheme).mockReturnValue({
      theme: 'dark',
      setTheme: setThemeMock,
      themes: ['light', 'dark', 'system'],
    });

    render(
      <ThemeProvider attribute="class">
        <ThemeToggle />
      </ThemeProvider>
    );

    // Dark theme button should be active
    const darkThemeButton = screen.getByTestId('dark-theme-button');
    expect(darkThemeButton).toHaveClass('active');

    // Click on system theme button
    const systemThemeButton = screen.getByTestId('system-theme-button');
    fireEvent.click(systemThemeButton);
    expect(setThemeMock).toHaveBeenCalledWith('system');
  });
});
