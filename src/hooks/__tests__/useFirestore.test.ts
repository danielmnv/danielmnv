import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { useProjects, useCareerPath, useOverview } from '../useFirestore';
import { getDocs } from 'firebase/firestore';

// Mock Firebase
vi.mock('@/lib/firebase', () => ({
  db: {},
}));

// Mock Firestore functions
vi.mock('firebase/firestore', () => ({
  collection: vi.fn(),
  getDocs: vi.fn(),
  query: vi.fn(),
  orderBy: vi.fn(),
}));

describe('useFirestore hooks', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('useProjects', () => {
    it('should fetch projects successfully', async () => {
      const mockProjects = [
        { id: '1', title: 'Project 1', orderIndex: 1 },
        { id: '2', title: 'Project 2', orderIndex: 2 },
      ];

      // Mock Firestore response
      (getDocs as any).mockResolvedValue({
        docs: mockProjects.map((project) => ({
          id: project.id,
          data: () => project,
        })),
      });

      const { result } = renderHook(() => useProjects());

      // Initial state
      expect(result.current.loading).toBe(true);
      expect(result.current.projects).toEqual([]);
      expect(result.current.error).toBe(null);

      // Wait for the data to load
      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      // Check final state
      expect(result.current.projects).toEqual(mockProjects);
      expect(result.current.error).toBe(null);
    });

    it('should handle errors in useProjects', async () => {
      const mockError = new Error('Failed to fetch projects');
      (getDocs as any).mockRejectedValue(mockError);

      const { result } = renderHook(() => useProjects());

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      expect(result.current.error).toBeInstanceOf(Error);
      expect(result.current.error?.message).toBe('Failed to fetch projects');
      expect(result.current.projects).toEqual([]);
    });
  });

  describe('useCareerPath', () => {
    it('should fetch career path data successfully', async () => {
      const mockExperiences = [
        { id: '1', company: 'Company 1', startedAt: { toDate: () => new Date() } },
        { id: '2', company: 'Company 2', startedAt: { toDate: () => new Date() } },
      ];

      (getDocs as any).mockResolvedValue({
        docs: mockExperiences.map((exp) => ({
          id: exp.id,
          data: () => exp,
        })),
      });

      const { result } = renderHook(() => useCareerPath());

      expect(result.current.loading).toBe(true);

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      expect(result.current.experiences).toHaveLength(2);
      expect(result.current.error).toBe(null);
    });

    it('should handle errors in useCareerPath', async () => {
      const mockError = new Error('Failed to fetch career path');
      (getDocs as any).mockRejectedValue(mockError);

      const { result } = renderHook(() => useCareerPath());

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      expect(result.current.error).toBeInstanceOf(Error);
      expect(result.current.error?.message).toBe('Failed to fetch career path');
      expect(result.current.experiences).toEqual([]);
    });
  });

  describe('useOverview', () => {
    it('should fetch overview data successfully', async () => {
      const mockOverview = {
        id: '1',
        content: 'Test content',
        updatedAt: { toDate: () => new Date() },
      };

      (getDocs as any).mockResolvedValue({
        empty: false,
        docs: [
          {
            id: mockOverview.id,
            data: () => mockOverview,
          },
        ],
      });

      const { result } = renderHook(() => useOverview());

      expect(result.current.loading).toBe(true);

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      expect(result.current.overview).toBeTruthy();
      expect(result.current.error).toBe(null);
    });

    it('should handle errors in useOverview', async () => {
      const mockError = new Error('Failed to fetch overview');
      (getDocs as any).mockRejectedValue(mockError);

      const { result } = renderHook(() => useOverview());

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      expect(result.current.error).toBeInstanceOf(Error);
      expect(result.current.error?.message).toBe('Failed to fetch overview');
      expect(result.current.overview).toBe(null);
    });

    it('should handle empty overview data', async () => {
      (getDocs as any).mockResolvedValue({
        empty: true,
        docs: [],
      });

      const { result } = renderHook(() => useOverview());

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
      });

      expect(result.current.overview).toBe(null);
      expect(result.current.error).toBe(null);
    });
  });
});
