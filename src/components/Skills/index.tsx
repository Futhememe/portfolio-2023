"use client";
import { css } from "@/styled-system/css";
import { Display } from "../Typograph";
import { SkillSet } from "../SkillSet";
import { useScroll, motion, useTransform, useMotionValue } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export const Skills = () => {
  const projectSkillRef = useRef(null);
  const designSkillRef = useRef(null);
  const devSkillRef = useRef(null);

  const { scrollYProgress: projectProgress } = useScroll({
    target: projectSkillRef,
    offset: ["start start", "center center", "end end"],
  });

  const { scrollYProgress: tagProgress } = useScroll({
    target: projectSkillRef,
    offset: ["center center", "end end"],
  });

  const projectScaleIn = useTransform(
    projectProgress,
    [0, 0.5, 0.75, 1],
    [0.95, 1, 1, 0.95]
  );
  const projectFadeIn = useTransform(
    projectProgress,
    [0, 0.5, 0.75, 1],
    [0, 1, 1, 0]
  );

  const projectTagScaleIn = useTransform(
    tagProgress,
    [0, 0.5, 0.75, 1],
    [0.95, 1, 1, 0.95]
  );
  const projectTagFadeIn = useTransform(
    tagProgress,
    [0, 0.5, 0.75, 1],
    [0, 1, 1, 0]
  );

  const { scrollYProgress: designProgress } = useScroll({
    target: designSkillRef,
    offset: ["start start", "center center", "end end"],
  });

  const { scrollYProgress: designTagProgress } = useScroll({
    target: designSkillRef,
    offset: ["center center", "end end"],
  });

  const designScaleIn = useTransform(
    designProgress,
    [0, 0.5, 0.75, 1],
    [0.95, 1, 1, 0.95]
  );
  const designFadeIn = useTransform(
    designProgress,
    [0, 0.5, 0.75, 1],
    [0, 1, 1, 0]
  );

  const designTagScaleIn = useTransform(
    designTagProgress,
    [0, 0.5, 0.75, 1],
    [0.95, 1, 1, 0.95]
  );
  const designTagFadeIn = useTransform(
    designTagProgress,
    [0, 0.5, 0.75, 1],
    [0, 1, 1, 0]
  );

  const { scrollYProgress: devProgress } = useScroll({
    target: devSkillRef,
    offset: ["start start", "center center", "end end"],
  });

  const { scrollYProgress: devTagProgress } = useScroll({
    target: devSkillRef,
    offset: ["center center", "end end"],
  });

  const devScaleIn = useTransform(
    devProgress,
    [0, 0.5, 0.75, 1],
    [0.95, 1, 1, 0.95]
  );
  const devFadeIn = useTransform(devProgress, [0, 0.5, 0.75, 1], [0, 1, 1, 0]);

  const devTagScaleIn = useTransform(
    devTagProgress,
    [0, 0.5, 0.75, 1],
    [0.95, 1, 1, 0.95]
  );
  const devTagFadeIn = useTransform(
    devTagProgress,
    [0, 0.5, 0.75, 1],
    [0, 1, 1, 0]
  );

  const { t: skillsTranslation } = useTranslation("config", {
    keyPrefix: "skills",
  });

  return (
    <motion.div
      className={css({
        display: "flex",
        alignItems: "center",
        flexDir: "column",

        width: "calc(100vw - 1rem)",
        minH: "100vh",
      })}
    >
      <motion.div className={css({ display: "flex" })}>
        <Display
          css={{
            fontSize: ["3.5rem", "4rem"],
            fontWeight: 500,
          }}
          // style={{ opacity }}
        >
          {skillsTranslation("title")}
        </Display>
      </motion.div>
      <motion.div
        ref={projectSkillRef}
        className={css({
          display: "flex",
          flex: 1,
          alignItems: "flex-start",
          justifyContent: "center",
          paddingBottom: "5rem",
          minH: "400vh",
          position: "relative",
        })}
      >
        <SkillSet
          title={skillsTranslation("product.title")}
          tags={[
            skillsTranslation("product.user_flow"),
            skillsTranslation("product.func"),
            skillsTranslation("product.research"),
            skillsTranslation("product.site_arc"),
            skillsTranslation("product.wireframe"),
          ]}
          displayStyle={{ scale: projectScaleIn, opacity: projectFadeIn }}
          tagStyle={{ scale: projectTagScaleIn, opacity: projectTagFadeIn }}
        />
      </motion.div>
      <motion.div
        ref={designSkillRef}
        className={css({
          display: "flex",
          flex: 1,
          alignItems: "flex-start",
          justifyContent: "center",
          paddingBottom: "5rem",
          minH: "400vh",
          position: "relative",
        })}
      >
        <SkillSet
          title={skillsTranslation("design.title")}
          tags={[
            skillsTranslation("design.web"),
            skillsTranslation("design.design_system"),
            skillsTranslation("design.mobile"),
            skillsTranslation("design.animation"),
            skillsTranslation("design.prototyping"),
          ]}
          displayStyle={{ scale: designScaleIn, opacity: designFadeIn }}
          tagStyle={{ scale: designTagScaleIn, opacity: designTagFadeIn }}
        />
      </motion.div>
      <motion.div
        ref={devSkillRef}
        className={css({
          display: "flex",
          flex: 1,
          alignItems: "flex-start",
          justifyContent: "center",
          paddingBottom: "5rem",
          minH: "400vh",
          position: "relative",
        })}
      >
        <SkillSet
          title={skillsTranslation("development.title")}
          tags={[
            skillsTranslation("development.web"),
            skillsTranslation("development.commerce"),
            skillsTranslation("development.mobile"),
            skillsTranslation("development.cms"),
            skillsTranslation("development.animation"),
          ]}
          displayStyle={{ scale: devScaleIn, opacity: devFadeIn }}
          tagStyle={{ scale: devTagScaleIn, opacity: devTagFadeIn }}
        />
      </motion.div>
    </motion.div>
  );
};
