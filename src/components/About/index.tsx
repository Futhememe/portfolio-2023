import { css } from "@/styled-system/css";
import { Display, Text } from "../Typograph";
import photo from "../../assets/myPhoto.jpeg";
import Image from "next/image";
import { LinkButton } from "../LinkButton";
import { useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import { SlideInState, slideIn } from "@/utils/animations/slideIn";
import { useParallax } from "@/hooks/useParallax";
import { useTrailerMouse } from "@/hooks/useTrailerMouse";

export const About = () => {
  const ref = useRef(null);
  const isAboutInView = useInView(ref, { once: true });
  const { linkEnter, mouseLeave } = useTrailerMouse();

  return (
    <div
      ref={ref}
      className={css({
        display: "flex",
        flexDir: "column",
        padding: "2.5rem 3.5rem",
        position: "relative",
      })}
    >
      <motion.div
        className={css({
          position: "absolute",
          top: "-2.5rem",
          left: "-4.5rem",
        })}
        animate={isAboutInView ? SlideInState.VISIBLE : SlideInState.OUTOFVIEW}
        initial={SlideInState.OUTOFVIEW}
        variants={slideIn}
        transition={{ delay: 0.2 }}
      >
        <Display
          css={{
            fontSize: "6rem",
          }}
        >
          About me
        </Display>
      </motion.div>
      <div
        className={css({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
          gap: "3.5rem",
        })}
      >
        <Image
          src={photo}
          alt="my photo with a camera"
          width={375}
          height={515}
        />
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
          transition={{ delay: 0.4 }}
        >
          <Text css={{ fontSize: "1.25rem", fontWeight: 401 }}>
            Lorem ipsum dolor sit amet consectetur. Est gravida quis pretium
            volutpat sed vivamus. Cras odio placerat in sollicitudin non in nibh
            eget. Rhoncus tempus ultrices augue consectetur facilisi faucibus
            sit tellus. Metus sed velit morbi pellentesque.
          </Text>
          <div
            onMouseEnter={linkEnter}
            onMouseLeave={mouseLeave}
            className={css({ maxW: "calc(114px + 25px)" })}
          >
            <LinkButton>view more here</LinkButton>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
