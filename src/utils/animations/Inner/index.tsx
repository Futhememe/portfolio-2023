import React, { ReactNode } from "react";

import { motion } from "framer-motion";

import Link from "next/link";

import { slide, opacity, perspective } from "./anim";
import { css } from "@/styled-system/css";

const anim = (variants: any) => {
  return {
    initial: "initial",

    animate: "enter",

    exit: "exit",

    variants,
  };
};

export default function Inner({ children }: { children: ReactNode }) {
  return (
    <div className={css({ backgroundColor: "black" })}>
      <motion.div
        className={css({
          height: "100vh",
          width: "100%",
          position: "fixed",
          left: 0,
          top: 0,
          backgroundColor: "background",
          zIndex: 99,
        })}
        {...anim(slide)}
      />

      <motion.div
        className={css({ backgroundColor: "background" })}
        {...anim(perspective)}
      >
        <motion.div {...anim(opacity)}>{children}</motion.div>
      </motion.div>
    </div>
  );
}
