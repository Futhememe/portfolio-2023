import { css } from "@/styled-system/css";
import { Display, Text } from "../Typograph";

interface IProjectResume {
  align?: "row" | "row-reverse";
}

export const ProjectResume = ({ align = "row" }: IProjectResume) => {
  return (
    <div className={css({ display: "flex", flexDir: align, gap: "2rem" })}>
      <div
        className={css({
          display: "flex",
          width: "20.25rem",
          height: "13.0625rem",
          bgColor: "gray.300",
          borderRadius: "0.5rem",
        })}
      />
      <div
        className={css({
          display: "flex",
          flexDir: "column",
          py: "1.25rem",
          gap: "1rem",
          maxW: "23.9rem",
        })}
      >
        <Display css={{ fontSize: "2.25rem", fontWeight: 501 }}>
          Project to view
        </Display>
        <Text>
          Lorem ipsum dolor sit amet consectetur. Adipiscing tristique sapien
          gravida vulputate ultrices. Nunc porta nec etiam ipsum molestie vel
          semper.{" "}
        </Text>
      </div>
    </div>
  );
};
