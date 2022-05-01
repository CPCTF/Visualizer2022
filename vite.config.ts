import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'

const cpctfBaseUrl = 'https://dev.cpctf.space'

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
        target: cpctfBaseUrl,
        changeOrigin: true
      },
      '/ws': {
        target: cpctfBaseUrl,
        changeOrigin: true,
        ws: true,
        headers: {
          origin: cpctfBaseUrl
        }
      },
      '/profile_images': {
        target: cpctfBaseUrl,
        changeOrigin: true
      },
      '/images': {
        target: cpctfBaseUrl,
        changeOrigin: true
      },
      '/visualizer/circuit.json': {
        target: cpctfBaseUrl,
        changeOrigin: true
      }
    }
  }
})
