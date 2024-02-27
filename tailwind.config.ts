import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        blue: "#424769",
        dark: "#2d3250",
        gray: "#676f7d",
        white: "#ffffff",
        gold: "#F5B17A",
        pink: "#FCA5A5"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'wildword': ['wildword', 'sans-serif'],
        'newake': ['newake', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
