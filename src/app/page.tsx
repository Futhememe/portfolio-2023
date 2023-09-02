"use client";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { css } from "@/styled-system/css";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { SelectedWork } from "@/components/SelectedWork";
import { WorkTogether } from "@/components/WorkTogether";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main
      className={css({
        display: "flex",
        flexDir: "column",
        minH: "100vh",
        minW: "calc(100vw - 1rem)",
        maxW: "calc(100vw - 1rem)",
        overflowY: "hidden",

        bgColor: "background",
      })}
    >
      <Header />
      <Hero />
      <About />
      <Skills />
      <SelectedWork />
      <WorkTogether />
    </main>
  );
}
