import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        "themed-primary": "#00B2B9",
        "themed-secondary": "#e3e0d9",
      },
    },
  },
  plugins: [],
} satisfies Config;
