import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useActiveSection } from '../useActiveSection';

describe('useActiveSection', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should initialize with null section', () => {
    const { result } = renderHook(() => useActiveSection());
    expect(result.current).toBe(null);
  });

  it('should update active section when scrolling past a section title', () => {
    const section = document.createElement('section');
    section.id = 'test-section';

    const titleContainer = document.createElement('div');
    titleContainer.style.height = '50px';

    Object.defineProperty(titleContainer, 'offsetTop', { value: 100 });
    Object.defineProperty(titleContainer, 'offsetHeight', { value: 50 });

    section.appendChild(titleContainer);
    document.body.appendChild(section);

    Object.defineProperty(window, 'scrollY', { value: 151, writable: true });

    const { result } = renderHook(() => useActiveSection());

    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe('Test Section');

    // Cleanup
    document.body.removeChild(section);
  });

  it('should clear active section when scrolling back above the section title', () => {
    const section = document.createElement('section');
    section.id = 'test-section';

    const titleContainer = document.createElement('div');
    titleContainer.style.height = '50px';

    Object.defineProperty(titleContainer, 'offsetTop', { value: 100 });
    Object.defineProperty(titleContainer, 'offsetHeight', { value: 50 });

    section.appendChild(titleContainer);
    document.body.appendChild(section);

    Object.defineProperty(window, 'scrollY', { value: 151, writable: true });

    const { result } = renderHook(() => useActiveSection());

    // Scroll down past the title to activate
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe('Test Section');

    // Scroll up above the title
    Object.defineProperty(window, 'scrollY', { value: 50 });
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe(null);

    // Cleanup
    document.body.removeChild(section);
  });
});

it('should skip sections without a title container', () => {
  const section = document.createElement('section');
  section.id = 'incomplete-section';

  // No title div added
  document.body.appendChild(section);

  Object.defineProperty(window, 'scrollY', { value: 200, writable: true });

  const { result } = renderHook(() => useActiveSection());

  act(() => {
    window.dispatchEvent(new Event('scroll'));
  });

  expect(result.current).toBe(null);

  // Cleanup
  document.body.removeChild(section);
});
