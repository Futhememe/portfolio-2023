import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { opacity, expand } from "./anim";
import { css } from "@/styled-system/css";

export default function Stairs({ children }: { children: ReactNode }) {
  const anim = (variants: any, custom = null) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      custom,
      variants,
    };
  };

  const nbOfColumns = 5;

  return (
    <div>
      <motion.div
        {...anim(opacity)}
        className={css({
          position: "fixed",
          width: "100%",
          height: "100vh",
          backgroundColor: "darkbackground",
          zIndex: 100,
          pointerEvents: "none",
          top: 0,
          left: 0,
        })}
      />

      <div
        className={css({
          position: "fixed",
          width: "100vw",
          height: "100vh",
          display: "flex",
          left: 0,
          top: 0,
          pointerEvents: "none",
          zIndex: 99,
        })}
      >
        {[...Array(nbOfColumns)].map((_, i) => {
          return (
            <motion.div
              className={css({
                position: "relative",
                height: "100%",
                width: "100%",
                backgroundColor: "darkbackground",
              })}
              key={i}
              {...anim(expand, (nbOfColumns - i) as any)}
            />
          );
        })}
      </div>

      {children}
    </div>
  );
}
