import { css } from "@/styled-system/css";
import { Display } from "../Typograph";
import { ProjectResume } from "../ProjectResume";
import { LinkButton } from "../LinkButton";

export const SelectedWork = () => {
  return (
    <div
      className={css({
        display: "flex",
        flexDir: "column",
        padding: "2rem",
        alignItems: "center",
      })}
    >
      <Display
        css={{ fontSize: "6rem", w: "100%", textAlign: "right", px: "5rem" }}
      >
        Selected work
      </Display>
      <div
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
      <LinkButton>view more here</LinkButton>
    </div>
  );
};
