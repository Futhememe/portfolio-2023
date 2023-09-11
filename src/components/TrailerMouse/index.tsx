"use client";
import useMousePosition from "@/hooks/useMousePosition";
import { css } from "@/styled-system/css";
import { motion } from "framer-motion";

interface ITrailerMouse {
  cursorVariant: "default" | "project" | "contact";
}

export const TrailerMouse = ({ cursorVariant }: ITrailerMouse) => {
  const { x, y }: any = useMousePosition();
  const size = 20;

  const variants = {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: "#1d1d1d",
      x,
      y,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    project: {
      opacity: 1,
      // backgroundColor: "rgba(255, 255, 255, 0.6)",
      backgroundColor: "#fff",
      color: "#1d1d1d",
      height: 80,
      width: 80,
      fontSize: "18px",
      x: x - 32,
      y: y - 32,
    },
    contact: {
      opacity: 1,
      backgroundColor: "#FFBCBC",
      color: "#1d1d1d",
      height: 64,
      width: 64,
      fontSize: "32px",
      x: x - 48,
      y: y - 48,
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  return (
    <motion.div
      variants={variants}
      className={css({
        position: "fixed",
        zIndex: 100,
        display: "flex",
        flexFlow: "row",
        alignContent: "center",
        justifyContent: "center",
        top: 0,
        left: 0,
        height: "10px",
        width: "10px",
        backgroundColor: "#1e91d6",
        borderRadius: "200px",
        pointerEvents: "none",
        color: "#fff",
        textAlign: "center",
        fontSize: "16px",
      })}
      animate={cursorVariant}
      transition={spring}
    ></motion.div>
  );
};
