import { defineConfig } from 'vite';

export default defineConfig({
  worker: {
    format: 'es'
  },
  optimizeDeps: {
    exclude: ['web-txt2img']
  }
});
