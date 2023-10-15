/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        md: "4rem",
        lg: "6rem",
        xl: "10rem",
        "2xl": "12rem",
      },
      center: true,
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        "deep-blue": "#00338d",
        purple: "#470a68",
        dark: "#0c233c",
        "sky-blue": "#00a3a1",
        white: "#fff",
        "odd-color": "rgb(246, 249, 252)",
        "even-color": "rgb(255, 255, 255)",
      },
    },
  },
  plugins: [],
};
