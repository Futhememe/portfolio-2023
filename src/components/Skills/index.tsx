"use client";
import { css } from "@/styled-system/css";
import { Display } from "../Typograph";
import { SkillSet } from "../SkillSet";
import { useScroll, motion, useTransform, useMotionValue } from "framer-motion";
import { useRef } from "react";

export const Skills = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(
    scrollYProgress,
    // Map x from these values:
    [100, 0],
    // Into these values:
    [0, 1]
  );

  return (
    <motion.div
      ref={ref}
      className={css({
        display: "flex",
        alignItems: "center",
        flexDir: "column",

        width: "calc(100vw - 1rem)",
        minH: "100vh",
      })}
    >
      {/* <motion.div
        className={css({
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "10px",
          background: "red",
          transformOrigin: "0%",
        })}
        style={{ scaleX: scrollYProgress }}
      /> */}
      <motion.div
        className={css({ display: "flex", position: "sticky", top: "1rem" })}
        style={{ opacity: opacity.get() }}
      >
        <Display
          css={{
            fontSize: ["3.5rem", "4rem"],
            fontWeight: 500,
          }}
          // style={{ opacity }}
        >
          What I do ?
        </Display>
      </motion.div>
      <motion.div
        className={css({
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "5rem",
          minH: "100vh",
          position: "sticky",
          top: 0,
        })}
      >
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
      </motion.div>
      <div
        className={css({
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "5rem",
          minH: "100vh",
          position: "sticky",
          top: 0,
        })}
      >
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
      </div>
      <div
        className={css({
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "5rem",
          minH: "100vh",
          position: "sticky",
          top: 0,
        })}
      >
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
    </motion.div>
  );
};
