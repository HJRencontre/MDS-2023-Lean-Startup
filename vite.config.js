import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/MDS-2023-Lean-Startup/",
  plugins: [reactRefresh(), pages()]
})