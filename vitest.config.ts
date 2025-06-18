import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: [
        'src/components/Card/Card.tsx',
        'src/components/CareerPath/CareerPath.tsx',
        'src/components/DownloadButton/DownloadButton.tsx',
        'src/components/FetchState/FetchState.tsx',
        'src/components/MobileMenu/MobileMenu.tsx',
        'src/components/Section/Overview.tsx',
        'src/components/Projects/Projects.tsx',
        'src/components/ThemeToggle/ThemeToggle.tsx',
        'src/hooks/**/*.ts',
      ],
      exclude: [
        'node_modules/',
        'src/setupTests.ts',
        '**/*.d.ts',
        '**/*.stories.tsx',
        '**/__tests__/**',
        '**/__mocks__/**',
        '**/mocks/**',
        '**/*.test.{ts,tsx}',
        '**/*.spec.{ts,tsx}',
      ],
      thresholds: {
        statements: 95,
        branches: 95,
        lines: 95,
        functions: 95,
      },
    },
    include: ['src/**/*.{test,spec}.{js,jsx,ts,tsx}'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});