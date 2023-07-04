import { Header } from "@/components/Header";
import { css } from "@/styled-system/css";
import { Hero } from "@/components/Sessions/Hero";
import { About } from "@/components/Sessions/About";

export default function Home() {
  return (
    <main
      className={css({
        display: "flex",
        minH: "100vh",
        maxH: "100vh",
        minW: "100vw",
        overflowY: "hidden",

        bgColor: "yellowspecial",
      })}
    >
      <Header />
      <Hero />
      <About />
    </main>
  );
}
