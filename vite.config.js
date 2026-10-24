import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    exclude: ['web-txt2img']
  },
  build: {
    rollupOptions: {
      // Avoid pre-bundling the package's Worker entry as an ordinary chunk.
      output: {
        format: 'es'
      }
    }
  }
});
