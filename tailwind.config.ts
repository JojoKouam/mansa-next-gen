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
        mansa: {
          black: "#050505",
          anthracite: "#121212",
          gold: "#D4AF37",
          goldSoft: "#AA8839",
          offWhite: "#FAFAFA",
        },
      },
    },
  },
  plugins: [],
};
export default config;