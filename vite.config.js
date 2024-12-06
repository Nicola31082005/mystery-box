import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src',
    server: {
      port: 3000, // Change the default port
    },
    build: {
      outDir: 'dist', // Output directory for builds
    },
});