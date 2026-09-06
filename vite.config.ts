import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import { reactRouter } from '@react-router/dev/vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: true, // This allows both localhost and network access
        open: false, // Set to false to prevent browser from opening automatically
      },
      // reactRouter() supersedes @vitejs/plugin-react: it provides fast refresh
      // plus framework mode (route modules + build-time prerendering).
      plugins: [reactRouter()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        },
        // Without this the dev dep-optimizer can hand react-router its own copy
        // of React, crashing <Meta> with "Cannot read properties of null".
        dedupe: ['react', 'react-dom', 'react-router'],
      }
    };
});
