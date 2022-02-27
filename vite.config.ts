import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import autoPreprocess from 'svelte-preprocess'
import sass from 'sass'

export default defineConfig({
  plugins: [
    svelte({
      emitCss: false,
      preprocess: autoPreprocess()
    }),
    tsconfigPaths()
  ]
})
