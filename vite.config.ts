import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // if repo is named "marwan-ghazal.github.io"
  // base: '/portfolio/',  // if repo is named anything else
})
