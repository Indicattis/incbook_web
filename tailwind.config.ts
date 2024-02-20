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
        blue: "#4F7D95",
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
