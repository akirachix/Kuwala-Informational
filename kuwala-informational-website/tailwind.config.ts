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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens:{
        'ipm': {'min': '768px', 'max': '800px'},
        'ipa': {'min': '820px', 'max': '840px',},
        'ipA': {'min': '820px', 'max': '1180px',},
        'ipad': '820px',

        
      }
    },
  },
  plugins: [],
};
export default config;
