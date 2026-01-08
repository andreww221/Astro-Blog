// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';


import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://andreww221.github.io',
  base: '/Astro-Blog',
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
    },
  },
  output: "static",
  integrations: [icon(), mdx()],
});