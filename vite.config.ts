import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: 'client',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'client'),
    },
  },
  build: {
    target: 'esnext',
    outDir: '../dist/',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'client/index.html'),
      },
    },
  },
})
