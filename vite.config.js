import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/natsuto-yamaguchi-portfolio/', // GitHub Pages用の正しいパス設定
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})