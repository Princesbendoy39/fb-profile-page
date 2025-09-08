import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/fb-profile-page/',  // <-- This line fixes the 404 errors
  plugins: [react()],
})
