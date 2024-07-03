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
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "donate-bg": "#f5f5f5",
        "donate-text-dark": "#0b0b0b",
        "donate-blue": "#0098EA",
        "donate-text-gray": "#C3C3C3",
        "donate-menu-active": "#1d1d1d",
        "donate-card-bg": "#f2f2f2",
        "donate-red": "#ea0000",
      },
    },
  },
  plugins: [],
};
export default config;
