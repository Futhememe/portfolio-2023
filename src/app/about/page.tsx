"use client";

import photo from "../../assets/myPhoto.jpeg";
import Image from "next/image";
import { Display, Text } from "@/components/Typograph";
import { LinkButton } from "@/components/LinkButton";
import { css } from "@/styled-system/css";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { ExperienceLine } from "@/components/About/ExperienceLine";
import { useInView, motion } from "framer-motion";
import { SlideInState, slideIn } from "@/utils/animations/slideIn";

const workExperiences = [
  {
    company: "Hospital Albert Einstein",
    roles: ["Web developer"],
    timeline: "MAR 2022 - PRESENT",
  },
  {
    company: "Maxcode.digital",
    roles: ["Web developer", "Mobile developer"],
    timeline: "MAR 2021 - MAR 2022",
  },
  {
    company: "Visual Mix",
    roles: ["Junior developer"],
    timeline: "AGO 2019 - ABR 2021",
  },
];

export default function About() {
  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={aboutRef}
      className={css({
        display: "flex",
        flexDir: "column",
        alignItems: "center",
        w: "100%",
        p: "4rem",
        minH: "100vh",
        position: "relative",
      })}
    >
      <div
        className={css({
          display: "flex",
          flex: 1,
          alignItems: "center",
          w: "100%",
          gap: "8rem",
          minH: "calc(100vh - 12rem)",
        })}
      >
        <motion.div
          className={css({
            display: "flex",
            position: "absolute",
            top: 8,
            right: 24,
            zIndex: 1,
          })}
          animate={
            isAboutInView ? SlideInState.VISIBLE : SlideInState.OUTOFVIEW
          }
          initial={SlideInState.OUTOFVIEW}
          variants={slideIn}
          transition={{ delay: 0.4 }}
        >
          <Display css={{ fontSize: "7rem" }}>Know me better</Display>
        </motion.div>
        <div
          className={css({ display: "flex", pl: "9rem", position: "relative" })}
        >
          <motion.div
            className={css({
              position: "absolute",
              w: 375,
              h: 565,
              bgColor: "text",
              alignSelf: "left",
              top: 0,
            })}
            animate={isAboutInView && { width: [375, 250, 0] }}
            transition={{ delay: 0.2, ease: "easeOut" }}
          />
          <Image
            src={photo}
            alt="my photo with a camera"
            width={375}
            height={515}
          />
        </div>
        <motion.div
          className={css({
            display: "flex",
            flexDir: "column",
            maxW: "21.625rem",
            gap: "3rem",
          })}
          animate={
            isAboutInView ? SlideInState.VISIBLE : SlideInState.OUTOFVIEW
          }
          initial={SlideInState.OUTOFVIEW}
          variants={slideIn}
          transition={{ delay: 0.8 }}
        >
          <Text css={{ fontSize: "1.25rem", fontWeight: 401 }}>
            Lorem ipsum dolor sit amet consectetur. Est gravida quis pretium
            volutpat sed vivamus. Cras odio placerat in sollicitudin non in nibh
            eget. Rhoncus tempus ultrices augue consectetur facilisi faucibus
            sit tellus. Metus sed velit morbi pellentesque.
          </Text>
          <Text
            css={{
              fontSize: "1rem",
              fontWeight: 501,
            }}
          >
            scroll for more
          </Text>
        </motion.div>
      </div>

      <motion.div
        className={css({
          display: "flex",
          alignItems: "center",
          w: "100%",
          p: "0.25rem 0",
          borderBottom: "1px solid #1d1d1d",
          mt: "6rem",
          gap: "2rem",
        })}
        animate={isAboutInView ? SlideInState.VISIBLE : SlideInState.OUTOFVIEW}
        initial={SlideInState.OUTOFVIEW}
        variants={slideIn}
        transition={{ delay: 1 }}
      >
        <Display
          css={{ fontSize: "2.5rem", fontWeight: 700, lineHeight: "tight" }}
        >
          Work experience
        </Display>
      </motion.div>
      <div
        className={css({
          display: "flex",
          flexDir: "column",
          flex: 1,
          w: "100%",
          gap: "1.5rem",
          mt: "2rem",
        })}
      >
        {workExperiences.map((experience) => (
          <ExperienceLine
            key={experience.company}
            company={experience.company}
            roles={experience.roles}
            timeline={experience.timeline}
          />
        ))}
      </div>
    </div>
  );
}
