/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import blitsVitePlugins from '@lightningjs/blits/vite'

// eslint-disable-next-line no-empty-pattern
export default defineConfig(({}) => {
  return {
    base: '/',
    plugins: [...blitsVitePlugins],
    resolve: {
      mainFields: ['browser', 'module', 'jsnext:main', 'jsnext'],
    },
    server: {
      headers: {
        'Cross-Origin-Opener-Policy': 'same-origin',
        'Cross-Origin-Embedder-Policy': 'require-corp',
      },
      fs: {
        allow: ['..'],
      },
    },
    worker: {
      format: 'es',
    },
  }
})
