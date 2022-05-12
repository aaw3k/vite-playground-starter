import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',

  resolve: {
    alias: {
      '🚀': new URL('src', import.meta.url).pathname,
    },
  },

  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
      },
    },
  },
});
