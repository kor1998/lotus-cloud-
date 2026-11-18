import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // one copy of React for the app and for react-router
  resolve: { dedupe: ['react', 'react-dom'] },
  optimizeDeps: { include: ['react', 'react-dom', 'react-router-dom'] },
  // files that tests and builds write must never make the dev server reload the open page
  server: { watch: { ignored: ['**/test-results/**', '**/playwright-report/**', '**/dist/**', '**/public/sitemap.xml'] } },
})
