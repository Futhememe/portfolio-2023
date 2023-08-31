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
            text: { value: '#1D1D1D' },
            darkbackground: { value: '#2D2D2D' },
            background: { value: '#F8F5F1' }
          },
          fonts: {
            display: { value: "'Cabinet Grotesk', sans-serif" },
            body: { value: "'Satoshi', sans-serif" }
          }
        }
      }
    },

    // The output directory for your css system
    outdir: "styled-system",
    
    jsxFramework: 'react'
})