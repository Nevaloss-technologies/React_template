import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import jsconfigPaths from 'vite-jsconfig-paths';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: env.VITE_APP_BASE_NAME || '/',
    server: {
      open: true,
      port: 3000,
      host: true
    },
    preview: {
      open: true,
      host: true
    },
    define: {
      global: 'window'
    },
    plugins: [react(), jsconfigPaths()],
    build: {
      chunkSizeWarningLimit: 1000,
      sourcemap: env.VITE_GENERATE_SOURCEMAP === 'true'
    }
  };
});
