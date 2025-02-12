import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
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
