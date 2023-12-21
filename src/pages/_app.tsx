import { Body } from "@/components/Body";
import { Footer } from "@/components/Footer";
import { TrailerMouseProvider } from "@/hooks/useTrailerMouse";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Body>
      <TrailerMouseProvider>
        <Component {...pageProps} />
        <Footer />
      </TrailerMouseProvider>
    </Body>
  );
}
