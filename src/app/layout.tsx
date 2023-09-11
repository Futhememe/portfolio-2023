import { Footer } from "@/components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import { css } from "@/styled-system/css";
import { TrailerMouse } from "@/components/TrailerMouse";

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
    <html lang="en">
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
          minW: "calc(100vw - 1rem)",
          maxW: "calc(100vw - 1rem)",
          minH: "100vh",

          bgColor: "background",
          position: "relative",
        })}
      >
        <TrailerMouse cursorVariant="default" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
