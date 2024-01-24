import { TrailerMouseProvider } from "@/hooks/useTrailerMouse";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <TrailerMouseProvider>
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
      <SpeedInsights />
    </TrailerMouseProvider>
  );
}
