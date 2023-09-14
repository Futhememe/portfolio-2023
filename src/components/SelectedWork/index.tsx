import { css } from "@/styled-system/css";
import { Display } from "../Typograph";
import { ProjectResume } from "../ProjectResume";
import { LinkButton } from "../LinkButton";
import { useTrailerMouse } from "@/hooks/useTrailerMouse";
import { SkillTag } from "../SkillSet/styles";

export const SelectedWork = () => {
  const { linkEnter, mouseLeave } = useTrailerMouse();

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
        <SkillTag>🚧 work in progress come here again in a few days</SkillTag>
      </div>
    </div>
  );
};
