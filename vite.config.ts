import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { codeInspectorPlugin } from 'code-inspector-plugin';

export default defineConfig({
  base: '/blog/',
  plugins: [
    codeInspectorPlugin({
      bundler: 'vite',
    }),
    react(),
  ],
})
