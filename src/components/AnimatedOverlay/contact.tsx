import { motion, useInView } from "framer-motion";
import { Display } from "../Typograph";
import { css } from "@/styled-system/css";
import { useRef, useState } from "react";
import { SlideInState, slideIn } from "@/utils/animations/slideIn";
export const ContactOverlay = () => {
  const [removed, setRemoved] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const overlayState = {
    visible: (custom: any) => ({
      opacity: 1,
      y: 0,
    }),
    outOfView: (custom: any) => ({
      opacity: 0,
      y: 200,
    }),
  };

  return (
    <motion.div
      ref={ref}
      className={css({
        display: "flex",
        flexDir: "column",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

        position: "absolute",
        h: "100vh",
        w: "100vw",

        bgColor: "background",
        zIndex: 10,
      })}
      animate={!removed ? SlideInState.VISIBLE : SlideInState.OUTOFVIEW}
      initial={"inView"}
      variants={overlayState}
    >
      <motion.div
        animate={isInView ? SlideInState.VISIBLE : SlideInState.OUTOFVIEW}
        initial={SlideInState.OUTOFVIEW}
        variants={slideIn}
      >
        <Display css={{ fontSize: "3rem", fontWeight: 500 }}>
          Let&apos;s build
        </Display>
      </motion.div>
      <motion.div
        animate={isInView ? SlideInState.VISIBLE : SlideInState.OUTOFVIEW}
        initial={SlideInState.OUTOFVIEW}
        variants={slideIn}
        transition={{ delay: 0.2 }}
        className={css({ display: "flex", gap: "1rem" })}
      >
        <Display css={{ fontSize: "3rem", fontWeight: 500 }}>
          great things,
        </Display>

        <motion.div
          animate={isInView ? SlideInState.VISIBLE : SlideInState.OUTOFVIEW}
          initial={SlideInState.OUTOFVIEW}
          variants={slideIn}
          transition={{ delay: 1 }}
          onAnimationEnd={() => setRemoved(true)}
        >
          <Display css={{ fontSize: "3rem", fontWeight: 500 }}>
            together
          </Display>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
