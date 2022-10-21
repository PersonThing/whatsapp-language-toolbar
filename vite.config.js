import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte()
  ],

  // Make rollup not add hash to file names, so we can inject the js via manifest.json
  build: {
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        assetFileNames: "assets/[name].[ext]"
      }
    }
  }
})
