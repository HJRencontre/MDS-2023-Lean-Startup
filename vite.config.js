import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/MDS-2023-Lean-Startup/",
  plugins: [react()],
})
