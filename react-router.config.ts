import type { Config } from '@react-router/dev/config';

export default {
  // Static site generation: no server at runtime, every route below is written
  // out as its own HTML file at build time.
  ssr: false,
  prerender: true,
  appDirectory: 'app',
} satisfies Config;
