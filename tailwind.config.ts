import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: { extend: { fontFamily: { sans: ["var(--font-geist)", "Arial", "sans-serif"], serif: ["Georgia", "serif"] } } },
  plugins: []
};
export default config;
