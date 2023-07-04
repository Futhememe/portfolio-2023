import { defineConfig } from "@pandacss/dev"

export default defineConfig({
    // Whether to use css reset
    preflight: true,
    
    // Where to look for your css declarations
    include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
      extend: {
        tokens: {
          colors: {
            black: { value: '#111013' },
            grayspecial: { value: '#242326' },
            yellowspecial: { value: '#F5EFDF' }
          },
          fonts: {
            display: { value: 'var(--font-syne)' },
            body: { value: 'var(--font-inter)' }
          }
        }
      }
    },

    // The output directory for your css system
    outdir: "styled-system",
    
    jsxFramework: 'react'
})