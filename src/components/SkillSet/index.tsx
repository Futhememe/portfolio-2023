import { css } from "@/styled-system/css";
import { Display } from "../Typograph";
import { SkillTag } from "./styles";
import { MotionStyle, motion } from "framer-motion";

interface ISkillSet {
  title: string;
  tags: string[];
  displayStyle?: MotionStyle;
  tagStyle?: MotionStyle;
}

export const SkillSet = ({
  title,
  tags,
  displayStyle,
  tagStyle,
}: ISkillSet) => {
  return (
    <motion.div
      className={css({
        display: "flex",
        padding: ["1rem", 0],
        flexDir: "column",
        alignItems: "center",
        justifyContent: "center",
        textWrap: "wrap",
        textAlign: "center",

        maxW: "34.3125rem",
        gap: "1rem",

        position: "sticky",
        top: 0,
        h: "100vh",
      })}
    >
      <motion.div initial={{ opacity: 0 }} style={displayStyle}>
        <Display css={{ fontSize: ["4rem", "6rem"], lineHeight: "6rem" }}>
          {title}
        </Display>
      </motion.div>
      <motion.div
        className={css({
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",

          alignItems: "center",
          justifyContent: "center",
          maxW: "25.5rem",
        })}
      >
        {tags.map((tag, index) => (
          <motion.div
            key={tag}
            initial={{ opacity: 0 }}
            transition={{ delay: 1 * index }}
            style={tagStyle}
          >
            <SkillTag>{tag}</SkillTag>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
