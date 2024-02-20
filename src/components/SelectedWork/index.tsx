import { css } from "@/styled-system/css";
import { Display } from "../Typograph";
import { SkillTag } from "../SkillSet/styles";
import { useTranslation } from "react-i18next";

export const SelectedWork = () => {
  const { t: workTranslation } = useTranslation("config", {
    keyPrefix: "work",
  });

  return (
    <div
      className={css({
        display: "flex",
        flexDir: "column",
        padding: ["1rem", "2rem"],
        alignItems: "center",
      })}
    >
      <Display
        css={{
          fontSize: ["4rem", "6rem"],
          w: "100%",
          textAlign: ["center", "center", "right"],
          px: ["0", "5rem"],
        }}
      >
        {workTranslation("title")}
      </Display>
      {/* <div
        className={css({
          display: "flex",
          flexDir: "column",
          px: "2rem",
          gap: "3rem",
        })}
      >
        <ProjectResume />
        <ProjectResume align="row-reverse" />
      </div>
      <div onMouseEnter={linkEnter} onMouseLeave={mouseLeave}>
        <LinkButton>view more here</LinkButton>
      </div> */}
      <div>
        <SkillTag>🚧 {workTranslation("in_progress")}</SkillTag>
      </div>
    </div>
  );
};
