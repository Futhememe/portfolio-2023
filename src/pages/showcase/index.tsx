"use client";
import { SkillTag } from "@/components/SkillSet/styles";
import { Display } from "@/components/Typograph";
import { Body } from "@/layout/body";
import { css } from "@/styled-system/css";
import Head from "next/head";

export default function Showcase() {
  return (
    <Body>
      <Head>
        <title>Gustavo Souza | Showcase</title>
      </Head>
      <div
        className={css({
          display: "flex",
          flexDir: "column",
          alignItems: "center",
          justifyContent: "center",
          w: "100%",
          p: ["4rem 1rem", "4rem"],
          minH: "100vh",
          position: "relative",
        })}
      >
        <Display css={{ fontSize: ["5rem", "6rem"] }}>Showcase</Display>
        <SkillTag>🚧 work in progress come here again in a few days</SkillTag>
      </div>
    </Body>
  );
}
