import { join } from 'path'
import type { Config } from 'tailwindcss'
import { skeleton } from '@skeletonlabs/tw-plugin'
import { rosenTheme } from './rosentheme';
import forms from '@tailwindcss/forms';

export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
  theme: {
    extend: {},
  },
  plugins: [
    skeleton({
      themes: {
	custom: [
	  rosenTheme,
	]
      },
    }),
    forms,
  ],
} satisfies Config;
