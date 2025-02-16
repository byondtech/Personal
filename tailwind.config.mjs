/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        playfair: ['var(--font-playfair)'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        yellow: {
          400: '#facc15', // Add this for better dark mode visibility
        },

      },
      animation: {
        'marquee-fast': 'marquee 10s linear infinite',
        'marquee-medium': 'marquee 20s linear infinite',
        'marquee-slow': 'marquee 30s linear infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      variants: {
        animation: ['responsive', 'hover', 'focus'],
      }
    },
  },
  plugins: [],
};
