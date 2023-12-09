import { defineConfig, UserConfig } from 'vite'
import { resolve } from 'path'

// Resolves the path to the main input file
const resolveInputPath = () => resolve(__dirname, 'app/index.html')

// Returns the rollup options for the build configuration
const getRollupOptions = () => ({
  input: {
    main: resolveInputPath(),
  },
})

// Returns the build configuration for Vite
const getBuildConfig = (): UserConfig['build'] => ({
  target: 'ES2020',
  outDir: '../dist/',
  emptyOutDir: true,
  rollupOptions: getRollupOptions(),
})

// Vite configuration
// https://vitejs.dev/config/
export default defineConfig({
  root: 'app',
  build: getBuildConfig(),
})
