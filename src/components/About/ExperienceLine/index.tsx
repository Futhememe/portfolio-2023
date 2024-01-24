import { SkillTag } from "@/components/SkillSet/styles";
import { Text } from "@/components/Typograph";
import { useTrailerMouse } from "@/hooks/useTrailerMouse";
import { css } from "@/styled-system/css";
import { styled } from "@/styled-system/jsx";

interface IExperienceLine {
  company: string;
  roles: string[];
  timeline: string;
}

export const ExperienceLine = ({
  company,
  roles,
  timeline,
}: IExperienceLine) => {
  const { workEnter, mouseLeave } = useTrailerMouse();

  return (
    <div
      className={css({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        w: "100%",
      })}
      onMouseEnter={workEnter}
      onMouseLeave={mouseLeave}
    >
      <div className={css({ display: "flex", flexDir: "column" })}>
        <Text css={{ fontSize: ["1.5rem", "2rem"], fontWeight: 500 }}>
          {company}
        </Text>
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            gap: "0.625rem",
          })}
        >
          {roles?.map((role) => (
            <Tag variant="border" key={role}>
              {role}
            </Tag>
          ))}
        </div>
      </div>
      <Text css={{ fontSize: ["0.875rem", "1rem"] }}>{timeline}</Text>
    </div>
  );
};

export const Tag = styled(SkillTag, {
  base: {
    fontSize: "0.75rem",
  },
});
