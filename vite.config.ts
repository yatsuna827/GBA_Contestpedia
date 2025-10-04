import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import ssg from '@hono/vite-ssg'

export default defineConfig({
  base: '/GBA_Contestpedia/',
  worker: { format: 'es' },
  plugins: [
    ssg(),
    VitePWA({
      srcDir: 'src/service-worker',
      filename: 'sw.ts',
      strategies: 'injectManifest',
      injectRegister: false,
      manifest: false,
      injectManifest: {
        injectionPoint: undefined,
        buildPlugins: {
          vite: [
            {
              name: 'define-in-sw',
              config: (config) => ({
                define: {
                  ...config.define,
                  __SW__: 'true',
                },
              }),
            },
          ],
        },
      },
      devOptions: {
        enabled: true,
        type: 'module',
      },
    }),
  ],
  define: {
    __SW__: 'undefined',
  },
})
