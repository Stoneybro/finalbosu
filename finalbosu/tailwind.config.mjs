/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ['var(--font-anton)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],},
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'bluenoise-layer':`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='9' numOctaves='8' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.2'/%3E%3C/svg%3E")`,
        'rednoise-layer':"url(\"data:image/svg+xml,%3C!-- svg: first layer --%3E%3Csvg viewBox='0 0 224 224' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' opacity='0.8' fill='#000' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      },
      screens: {

        'xsm': '480px', // Another custom breakpoint
      },
    },
  },
  plugins: [],
};

//