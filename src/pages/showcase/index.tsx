"use client";
import { SkillTag } from "@/components/SkillSet/styles";
import { Display } from "@/components/Typograph";
import { Body } from "@/layout/body";
import { css } from "@/styled-system/css";
import Head from "next/head";
import { useTranslation } from "react-i18next";

export default function Showcase() {
  const { t: workTranslation } = useTranslation("config", {
    keyPrefix: "work",
  });

  return (
    <Body>
      <Head>
        <title>Gustavo Souza | {workTranslation("showcase")}</title>
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
        <Display css={{ fontSize: ["5rem", "6rem"] }}>
          {workTranslation("showcase")}
        </Display>
        <SkillTag>🚧 {workTranslation("in_progress")}</SkillTag>
      </div>
    </Body>
  );
}
