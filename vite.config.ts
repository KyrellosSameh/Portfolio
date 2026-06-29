import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/

const asyncCssPlugin = () => ({
  name: 'async-css',
  transformIndexHtml(html: string) {
    let newHtml = html.replace(
      /<link rel="stylesheet" crossorigin href="(.*?\.css)">/g,
      '<link rel="preload" href="$1" as="style"><link rel="stylesheet" crossorigin href="$1" media="print" onload="this.media=\'all\'"><noscript><link rel="stylesheet" crossorigin href="$1"></noscript>'
    );
    return newHtml.replace(
      '</head>',
      '  <link rel="preload" href="/profile.webp" as="image" type="image/webp" fetchpriority="high">\n  </head>'
    );
  }
});

export default defineConfig({
  base: '/',
  plugins: [
    asyncCssPlugin(),react(), tailwindcss()],
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
