import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import mockServer from 'vite-plugin-mock-server';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
