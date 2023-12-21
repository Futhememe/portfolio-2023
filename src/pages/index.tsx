"use client";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { SelectedWork } from "@/components/SelectedWork";
import { WorkTogether } from "@/components/WorkTogether";
import { Body } from "@/layout/body";

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
    <Body>
      <Header />
      <Hero />
      <About />
      <Skills />
      <SelectedWork />
      <WorkTogether />
    </Body>
  );
}
