import { type Config } from "tailwindcss";
import { shadcnPreset } from "./src/utils/shadcn-preset";

const config = {
  presets: [shadcnPreset],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
} satisfies Config;

export default config;
