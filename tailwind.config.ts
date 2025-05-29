import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}', // This covers all files in the app directory and its subdirectories
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config 