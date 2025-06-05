// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // necesario para que los recursos se resuelvan bien en GitHub Pages
  plugins: [react()],
})
