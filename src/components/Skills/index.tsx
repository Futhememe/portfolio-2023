import { css } from "@/styled-system/css";
import { Display } from "../Typograph";
import { SkillSet } from "../SkillSet";

export const Skills = () => {
  return (
    <div
      className={css({
        display: "flex",
        alignItems: "center",
        flexDir: "column",

        width: "calc(100vw - 1rem)",
        height: "100vh",
      })}
    >
      <Display css={{ fontSize: "4rem", fontWeight: 500 }}>What I do ?</Display>
      <div>
        <SkillSet
          title="Product Discovery"
          tags={[
            "User flows",
            "Funcionalities analysis",
            "Visual research",
            "Site architecture",
            "Wireframe",
          ]}
        />

        <SkillSet
          title="Design"
          tags={[
            "Web design",
            "Design system",
            "Mobile apps",
            "Animations",
            "Prototyping",
          ]}
        />

        <SkillSet
          title="Development"
          tags={[
            "Web development",
            "E-commerce implementation",
            "Mobile apps",
            "CMS implementation",
            "Web animations",
          ]}
        />
      </div>
    </div>
  );
};
