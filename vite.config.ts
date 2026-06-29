import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/

const preloadImagePlugin = () => ({
  name: 'preload-image',
  transformIndexHtml(html: string) {
    return html.replace(
      '</head>',
      '  <link rel="preload" href="/profile.webp" as="image" type="image/webp" fetchpriority="high">\n  </head>'
    );
  }
});

export default defineConfig({
  plugins: [
    preloadImagePlugin(), react(), tailwindcss()],
  build: {
    target: 'esnext',
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) return 'react-vendor';
          if (id.includes('node_modules/framer-motion')) return 'framer-motion';
          if (id.includes('node_modules/lucide-react')) return 'icons';
        }
      }
    }
  }
})
