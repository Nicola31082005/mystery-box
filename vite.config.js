import { defineConfig } from 'vite';

export default defineConfig({
    base: '/',
    server: {
      port: 3000, // Change the default port
    },
    build: {
      outDir: 'dist', // Output directory for builds
    },
});