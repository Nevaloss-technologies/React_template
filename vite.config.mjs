import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import jsconfigPaths from 'vite-jsconfig-paths';

export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode (development, production, etc.)
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // Set the base path for the application
    base: env.VITE_APP_BASE_NAME || '/',
    server: {
      open: true, // Automatically open the browser on server start
      port: 3000, // Set the development server port
      host: true  // Listen on all addresses, including LAN
    },
    preview: {
      open: true,
      host: true
    },
    define: {
      global: 'window' // Define global variables, if necessary
    },
    plugins: [
      react(),          // Enable React support
      jsconfigPaths()   // Resolve paths based on jsconfig.json
    ],
    build: {
      chunkSizeWarningLimit: 1000, // Set chunk size warning limit to 1000 kB
      sourcemap: env.VITE_GENERATE_SOURCEMAP === 'true' // Enable or disable source maps
    }
  };
});
