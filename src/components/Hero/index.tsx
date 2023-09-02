import { css } from "@/styled-system/css";
import { motion, useInView } from "framer-motion";
import { Display, Text } from "../Typograph";
import { useRef } from "react";
import { SlideInState, slideIn } from "@/utils/animations/slideIn";

export const Hero = () => {
  const firstLineRef = useRef(null);
  const isFirstLineInView = useInView(firstLineRef, { once: true });

  const secondLineRef = useRef(null);
  const isSecondLineInView = useInView(secondLineRef, { once: true });

  const thirdLineRef = useRef(null);
  const isThirdLineInView = useInView(thirdLineRef, { once: true });

  return (
    <div
      className={css({
        display: "flex",
        flexDir: "column",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

        maxH: "calc(100vh - 2rem)",
        minH: "calc(100vh - 2rem)",
        position: "relative",
      })}
    >
      <div
        className={css({
          display: "flex",
          flexDir: "column",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          mt: "-6rem",
        })}
      >
        <motion.div
          ref={firstLineRef}
          animate={
            isFirstLineInView ? SlideInState.VISIBLE : SlideInState.OUTOFVIEW
          }
          variants={slideIn}
          transition={{ delay: 0.2 }}
        >
          <Display css={{ fontSize: "4rem", lineHeight: "tight" }}>
            Hello, {"I'm"} <b className={css({ fontWeight: 500 })}>Gustavo</b>
          </Display>
        </motion.div>
        <motion.div
          ref={secondLineRef}
          animate={
            isSecondLineInView ? SlideInState.VISIBLE : SlideInState.OUTOFVIEW
          }
          variants={slideIn}
          transition={{ delay: 0.6 }}
        >
          <Display css={{ fontSize: "4rem", lineHeight: "tight" }}>
            an creative designer
          </Display>
        </motion.div>
        <motion.div
          ref={thirdLineRef}
          animate={
            isThirdLineInView ? SlideInState.VISIBLE : SlideInState.OUTOFVIEW
          }
          variants={slideIn}
          transition={{ delay: 1 }}
        >
          <Display css={{ fontSize: "4rem", lineHeight: "tight" }}>
            and developer
          </Display>
        </motion.div>
      </div>

      <Text
        css={{
          fontSize: "1rem",
          fontWeight: 501,
          position: "absolute",
          bottom: "7.5rem",
        }}
      >
        scroll for more
      </Text>
    </div>
  );
};
