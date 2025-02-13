import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['logo.png'],
      injectRegister: 'auto',
      manifest: {
        name: 'Yann\'s portfolio',
        short_name: 'Yann\'s portfolio',
        description: 'I\'m Yann Klein, software developer and bootcamp manager at Le Wagon Tokyo and here is a glimpse of what I do.',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'logo.png',
            sizes: '64x64',
            type: 'image/png',
          },
          {
            src: 'logo.png',
            sizes: '64x64',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'logo.png',
            sizes: '64x64',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),
  ],
  resolve: {
    extensions: [
      '.gltf',
      '.bin',
      '.jpg',
      '.jpeg',
      '.png',
      '.gif',
      '.webp',
      '.mjs',
      '.js',
      '.ts',
      '.jsx',
      '.tsx',
      '.json',
    ],
  },
});
