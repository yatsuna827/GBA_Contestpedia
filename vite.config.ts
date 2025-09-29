import { defineConfig } from 'vite'
import ssg from '@hono/vite-ssg'

export default defineConfig({
  base: '/GBA_Contestpedia/',
  build: { outDir: './docs' },
  plugins: [ssg()],
})
