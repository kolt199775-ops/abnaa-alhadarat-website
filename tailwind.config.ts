import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lagoon: "#18d8d2",
        cyanbrand: "#25bdf2",
        deepbrand: "#063c8f",
        navybrand: "#061b3f",
        ice: "#effcff",
        steel: "#7aa7c7"
      },
      boxShadow: {
        glass: "0 24px 80px rgba(8, 66, 132, 0.18)",
        glow: "0 0 44px rgba(24, 216, 210, 0.38)"
      },
      fontFamily: {
        sans: ["Sora", "Inter", "Segoe UI", "Arial", "sans-serif"],
        arabic: ["Cairo", "Tajawal", "Tahoma", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
