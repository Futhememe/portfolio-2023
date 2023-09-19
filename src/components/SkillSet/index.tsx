import { css } from "@/styled-system/css";
import { Display } from "../Typograph";
import { SkillTag } from "./styles";

interface ISkillSet {
  title: string;
  tags: string[];
}

export const SkillSet = ({ title, tags }: ISkillSet) => {
  return (
    <div
      className={css({
        display: "flex",
        padding: ["1rem", 0],
        flexDir: "column",
        alignItems: "center",
        textWrap: "wrap",
        textAlign: "center",

        maxW: "34.3125rem",
        gap: "1rem",
      })}
    >
      <Display css={{ fontSize: ["4rem", "6rem"], lineHeight: "6rem" }}>
        {title}
      </Display>
      <div
        className={css({
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",

          alignItems: "center",
          justifyContent: "center",
          maxW: "25.5rem",
        })}
      >
        {tags.map((tag) => (
          <SkillTag key={tag}>{tag}</SkillTag>
        ))}
      </div>
    </div>
  );
};
