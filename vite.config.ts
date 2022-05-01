import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: process.env.BUILD_BASE_PATH || '/',
  build: {
    outDir: './build'
  },
  resolve: {
    alias: {
      '#/': `${__dirname}/src/`
    }
  },
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      '/api': {
        target: 'https://cpctf.space',
        changeOrigin: true
      },
      '/ws': {
        target: 'https://cpctf.space',
        changeOrigin: true,
        ws: true,
        headers: {
          origin: 'https://cpctf.space'
        }
      },
      '/profile_images': {
        target: 'https://cpctf.space',
        changeOrigin: true
      },
      '/images': {
        target: 'https://cpctf.space',
        changeOrigin: true
      },
      '/visualizer/circuit.json': {
        target: 'https://cpctf.space',
        changeOrigin: true
      }
    }
  }
})
