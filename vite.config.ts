import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'

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
  plugins: [
    svelte({
      emitCss: false,
      preprocess: sveltePreprocess({
        'node-sass': true
      })
    }),
    tsconfigPaths()
  ]
})
