import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [],
  esbuild: {
    jsx: 'automatic',
  },
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
