import { Footer } from "@/components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import { css } from "@/styled-system/css";
import { TrailerMouseProvider } from "@/hooks/useTrailerMouse";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Gustavo Portfolio",
  description: "Hey! welcome to my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={css({
        margin: 0,
        padding: 0,
        overflowX: "hidden",
        overflowY: "scroll",
      })}
      lang="en"
    >
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,701,501,401,901,400&f[]=cabinet-grotesk@800,500,700,400,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={css({
          display: "flex",
          flexDir: "column",
          alignItems: "center",
          minW: ["100vw", "calc(100vw - 1rem)"],
          maxW: ["100vw", "calc(100vw - 1rem)"],
          minH: "100vh",
          margin: 0,
          p: 0,
          // overflowX: "hidden",
          // overflowY: "scroll",

          bgColor: "background",
          position: "relative",
        })}
      >
        <TrailerMouseProvider>
          {children}
          <Footer />
        </TrailerMouseProvider>
      </body>
    </html>
  );
}
