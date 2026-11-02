import { defineConfig } from 'vite';

// Copiad este fichero a vuestro repo de pieza como vite.config.js.
// Produce un único módulo ES: dist/remote.js
export default defineConfig({
  build: {
    lib: {
      entry: 'src/main.js',
      formats: ['es'],
      fileName: () => 'remote.js',
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
});
