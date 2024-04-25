import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "hsl(233, 26%, 24%)",
        "green": "hsl(136, 65%, 51%)",
        "cyan": "hsl(192, 70%, 51%)",
        "gray-blue": "hsl(233, 8%, 62%)",
        "light-gray-blue": "hsl(220, 16%, 96%)",
        "light-gray": "hsl(0, 0%, 98%)",
      },
      spacing: {
        "88": "22rem",
        "35": "36%",
        "55": "56%",
      },
      fontSize: {
        "md": "16px",
      },
      screens: {
        "xs": "480px",
      }
    },
  },
  plugins: [],
};
export default config;
