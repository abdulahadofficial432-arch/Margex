import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Will be updated with exact colors from margex.com
        primary: {
          DEFAULT: '#1E1E1E',
          light: '#2A2A2A',
          dark: '#141414',
        },
        accent: {
          DEFAULT: '#00D9FF',
          hover: '#00B8D9',
        },
      },
    },
  },
  plugins: [],
}
export default config

