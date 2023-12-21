import { Footer } from "@/components/Footer";
import { TrailerMouseProvider } from "@/hooks/useTrailerMouse";
import { Body } from "@/layout/body";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence mode="wait">
      <Component key={router.route} {...pageProps} />
    </AnimatePresence>
  );
}
