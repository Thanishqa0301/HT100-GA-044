/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*/.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#6C63FF",
          light: "#A79BFF",
          dark: "#4E45CC"
        }
      },
      backdropBlur: {
        xs: "2px"
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
          "100%": { transform: "translateY(0px)" }
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        fadeIn: "fadeIn 1.2s ease-in forwards"
      }
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
};