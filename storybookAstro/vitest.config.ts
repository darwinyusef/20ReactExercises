import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom', 
        include: ['src/**/*.test.{ts,tsx}'],
        setupFiles: './vitest.setup.ts',
    },
});