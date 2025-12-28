import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f2ff',
          100: '#b3d9ff',
          200: '#80c0ff',
          300: '#4da6ff',
          400: '#1a8cff',
          500: '#0073e6',
          600: '#005bb3',
          700: '#004280',
          800: '#002a4d',
          900: '#00111a',
        },
        secondary: {
          50: '#e6f7f0',
          100: '#b3e6d1',
          200: '#80d6b2',
          300: '#4dc693',
          400: '#1ab574',
          500: '#009c5b',
          600: '#007a47',
          700: '#005733',
          800: '#00351f',
          900: '#00120b',
        },
      },
    },
  },
  plugins: [],
};
export default config;
