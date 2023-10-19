import plugin from "tailwindcss/plugin";
import { fontFamily } from "tailwindcss/defaultTheme";
import animatePlugin from "tailwindcss-animate";
import { type Config } from "tailwindcss";

const shadcnPlugin = plugin(
  ({ addBase }) => {
    addBase({
      ":root": {
        "--background": "0 0% 100%",
        "--foreground": "240 10% 3.9%",

        "--muted": "240 4.8% 95.9%",
        "--muted-foreground": "240 3.8% 46.1%",

        "--popover": "0 0% 100%",
        "--popover-foreground": "240 10% 3.9%",

        "--border": "240 5.9% 90%",
        "--input": "240 5.9% 90%",

        "--card": "0 0% 100%",
        "--card-foreground": "240 10% 3.9%",

        "--primary": "240 5.9% 10%",
        "--primary-foreground": "0 0% 98%",

        "--secondary": "240 4.8% 95.9%",
        "--secondary-foreground": "240 5.9% 10%",

        "--accent": "240 4.8% 95.9%",
        "--accent-foreground": "240 5.9% 10%",

        "--destructive": "0 84.2% 60.2%",
        "--destructive-foreground": "0 0% 98%",

        "--info": "204 94% 94%",
        "--info-foreground": "199 89% 48%",

        "--success": "149 80% 90%",
        "--success-foreground": "160 84% 39%",

        "--warning": "48 96% 89%",
        "--warning-foreground": "25 95% 53%",

        "--error": "0 93% 94%",
        "--error-foreground": "0 84% 60%",

        "--ring": "240 5.9% 10%",

        "--radius": "0.5rem",
      },
      '[data-kb-theme="dark"]': {
        "--background": "240 10% 3.9%",
        "--foreground": "0 0% 98%",

        "--muted": "240 3.7% 15.9%",
        "--muted-foreground": "240 5% 64.9%",

        "--accent": "240 3.7% 15.9%",
        "--accent-foreground": "0 0% 98%",

        "--popover": "240 10% 3.9%",
        "--popover-foreground": "0 0% 98%",

        "--border": "240 3.7% 15.9%",
        "--input": "240 3.7% 15.9%",

        "--card": "240 10% 3.9%",
        "--card-foreground": "0 0% 98%",

        "--primary": "0 0% 98%",
        "--primary-foreground": "240 5.9% 10%",

        "--secondary": "240 3.7% 15.9%",
        "--secondary-foreground": "0 0% 98%",

        "--destructive": "0 62.8% 30.6%",
        "--destructive-foreground": "0 0% 98%",

        "--info": "204 94% 94%",
        "--info-foreground": "199 89% 48%",

        "--success": "149 80% 90%",
        "--success-foreground": "160 84% 39%",

        "--warning": "48 96% 89%",
        "--warning-foreground": "25 95% 53%",

        "--error": "0 93% 94%",
        "--error-foreground": "0 84% 60%",

        "--ring": "240 4.9% 83.9%",

        "--radius": "0.5rem",
      },
    });
    addBase({
      "*": {
        "@apply border-border": {},
      },
      body: {
        "@apply bg-background text-foreground": {},
        "font-feature-settings": '"rlig" 1, "calt" 1',
      },
      "@media (max-width: 640px)": {
        ".container": { "@apply px-4": {} },
      },
    });
  },
  {
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        colors: {
          // Custom
          lightPrimary: "#F4F7FE",
          blueSecondary: "#4318FF",
          brandLinear: "#868CFF",
          brand: {
            50: "#E9E3FF",
            100: "#C0B8FE",
            200: "#A195FD",
            300: "#8171FC",
            400: "#7551FF",
            500: "#422AFB",
            600: "#3311DB",
            700: "#2111A5",
            800: "#190793",
            900: "#11047A",
          },
          navy: {
            50: "#d0dcfb",
            100: "#aac0fe",
            200: "#a3b9f8",
            300: "#728fea",
            400: "#3652ba",
            500: "#1b3bbb",
            600: "#24388a",
            700: "#1B254B",
            800: "#111c44",
            900: "#0b1437",
          },
          // End of Custom
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          info: {
            DEFAULT: "hsl(var(--info))",
            foreground: "hsl(var(--info-foreground))",
          },
          success: {
            DEFAULT: "hsl(var(--success))",
            foreground: "hsl(var(--success-foreground))",
          },
          warning: {
            DEFAULT: "hsl(var(--warning))",
            foreground: "hsl(var(--warning-foreground))",
          },
          error: {
            DEFAULT: "hsl(var(--error))",
            foreground: "hsl(var(--error-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
        },
        borderRadius: {
          lg: `var(--radius)`,
          md: `calc(var(--radius) - 2px)`,
          sm: "calc(var(--radius) - 4px)",
        },
        fontFamily: {
          sans: ["Inter", ...fontFamily.sans],
          poppins: ["Poppins", "sans-serif"],
          dm: ["DM Sans", "sans-serif"],
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--kb-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--kb-accordion-content-height)" },
            to: { height: "0" },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
    },
  },
);

export const shadcnPreset = {
  darkMode: ["class", '[data-kb-theme="dark"]'],
  content: [],
  plugins: [animatePlugin, shadcnPlugin],
} satisfies Config;
