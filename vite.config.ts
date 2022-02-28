import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'

export default defineConfig({
  plugins: [
    svelte({
      emitCss: false,
      preprocess: sveltePreprocess({
        postcss: true,
        sass: false
      })
    }),
    tsconfigPaths()
  ]
})
