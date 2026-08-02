import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#241329",
        forest: "#4A185A", // deep plum (brand dark surface)
        plum: {
          DEFAULT: "#4A185A",
          900: "#260A32",
          800: "#351044",
          700: "#4A185A",
          600: "#64266D",
        },
        moss: "#765F70", // muted
        clay: "#D99A12", // legacy alias -> gold
        gold: {
          DEFAULT: "#D99A12",
          600: "#B97900",
          500: "#D99A12",
          400: "#F0B82F",
          200: "#F8D878",
        },
        rice: "#F8E9DC", // warm cream surface
        cream: "#FFF8F0", // ivory (default bg)
        ivory: "#FFF8F0",
        peach: "#F4C8B8",
        blush: "#EFA6A8",
        cherry: "#D97886",
        mist: "#E7D4C4", // warm border
        white: "#FFFFFF",
        danger: "#A33F3F",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
} satisfies Config;
