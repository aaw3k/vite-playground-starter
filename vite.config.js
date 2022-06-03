import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'client',

  resolve: {
    alias: {
      '🚀': new URL('client', import.meta.url).pathname,
    },
  },

  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'client/index.html'),
      },
    },
  },
});
