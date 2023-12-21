import { Body } from "@/components/Body";
import { Footer } from "@/components/Footer";
import { TrailerMouseProvider } from "@/hooks/useTrailerMouse";
import "@/styles/globals.css";
import Curve from "@/utils/animations/Curve";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence mode="wait">
      <Body>
        <TrailerMouseProvider>
          <Component key={router.route} {...pageProps} />
          <Footer />
        </TrailerMouseProvider>
      </Body>
    </AnimatePresence>
  );
}
