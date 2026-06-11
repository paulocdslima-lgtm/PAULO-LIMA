import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  // Em produção (GitHub Pages) o app é servido a partir de um subcaminho.
  // Defina VITE_BASE (ex.: "/PAULO-LIMA/") no build do CI; padrão "/" no dev.
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    host: true,
  },
});
