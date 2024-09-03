import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
    },
    include: ['tests/**/*.test.ts'],
    reporters: ['verbose'],
  },
});
