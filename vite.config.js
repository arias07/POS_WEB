import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  externals: {
    pdfmake: 'pdfMake'
  },
  build: {
    rollupOptions: {
      external: ['pdfmake'],
    },
  },
})
