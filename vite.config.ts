/* eslint-disable import/default */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'DiagramEditor',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'cjs'],
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: ['react', 'react-dom', 'konva', 'react-konva', 'zustand'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          konva: 'Konva',
          'react-konva': 'ReactKonva',
          zustand: 'Zustand',
        },
        assetFileNames: () => {
          return 'index.css';
        },
      },
    },
    sourcemap: true,
  },
});