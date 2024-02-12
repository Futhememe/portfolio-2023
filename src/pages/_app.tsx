import { TrailerMouseProvider } from "@/hooks/useTrailerMouse";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <TrailerMouseProvider>
        <AnimatePresence mode="wait">
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
        <SpeedInsights />
      </TrailerMouseProvider>
    </QueryClientProvider>
  );
}
