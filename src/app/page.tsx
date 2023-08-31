import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { css } from "@/styled-system/css";

export default function Home() {
  return (
    <main
      className={css({
        display: "flex",
        flexDir: "column",
        minH: "100vh",
        maxH: "100vh",
        minW: "calc(100vw - 1rem)",
        maxW: "calc(100vw - 1rem)",
        overflowY: "hidden",

        bgColor: "background",
      })}
    >
      <Header />
      <Hero />
    </main>
  );
}
