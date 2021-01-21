import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  build: {
    manifest: true,
    rollupOptions: {
      input: {
        main: './js/main.js',
        'classic-jquery': './js/classic-jquery.js',
        'react-notes': './js/react-notes.tsx'
      }
    }
  },
  plugins: [
    reactRefresh()
  ]
})