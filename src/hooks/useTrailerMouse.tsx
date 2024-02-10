"use client";
import { ReactNode, createContext, useContext, useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "./useMousePosition";
import { css } from "@/styled-system/css";

interface ITrailerMouseContext {
  projectEnter: () => void;
  contactEnter: () => void;
  linkEnter: () => void;
  transparentEnter: () => void;
  mouseLeave: () => void;
  workEnter: () => void;
}

const TrailerMouseContext = createContext<ITrailerMouseContext | null>(null);

interface ITrailerMouseProvider {
  children: ReactNode;
}

export const TrailerMouseProvider = ({ children }: ITrailerMouseProvider) => {
  const [cursorText, setCursorText] = useState<string | ReactNode>("");
  const [cursorVariant, setCursorVariant] = useState<
    "default" | "project" | "contact" | "link" | "transparent" | "work"
  >("default");
  const { x, y }: any = useMousePosition();

  const variants = {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: "#2d2d2d",
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
    work: {
      opacity: 1,
      backgroundColor: "#1d1d1d",
      color: "#F1ECE4",
      height: 80,
      width: 80,
      fontSize: "14px",
      cursor: "none",
      textWrap: "nowrap",
      x: x - 32,
      y: y - 32,
    },
    contact: {
      opacity: 1,
      backgroundColor: "#F1ECE4",
      color: "#1d1d1d",
      height: 64,
      width: 64,
      fontSize: "32px",
      cursor: "none",
      x: x - 48,
      y: y - 48,
    },
    link: {
      opacity: 1,
      backgroundColor: "#F1ECE4",
      color: "#1d1d1d",
      height: 64,
      width: 64,
      fontSize: "32px",
      cursor: "pointer",
      x: x - 26,
      y: y - 26,
    },
    transparent: {
      opacity: [1, 0],
      backgroundColor: "transparent",
      height: 16,
      width: 16,
      x,
      y,
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  function projectEnter() {
    setCursorText("view");
    setCursorVariant("project");
  }

  function contactEnter() {
    setCursorText("👋");
    setCursorVariant("contact");
  }

  function linkEnter() {
    setCursorText("");
    setCursorVariant("link");
  }

  function transparentEnter() {
    setCursorText("");
    setCursorVariant("transparent");
  }

  function workEnter() {
    setCursorText("read more");
    setCursorVariant("work");
  }

  function mouseLeave() {
    setCursorText("");
    setCursorVariant("default");
  }

  return (
    <TrailerMouseContext.Provider
      value={{
        projectEnter,
        contactEnter,
        linkEnter,
        transparentEnter,
        mouseLeave,
        workEnter,
      }}
    >
      <motion.div
        variants={variants as any}
        className={css({
          opacity: [0, 1],
          display: ["none", "flex"],
          position: "fixed",
          zIndex: [1, 100],
          flexFlow: "row",
          alignContent: "center",
          justifyContent: "center",
          top: 0,
          left: 0,
          height: "10px",
          width: "10px",
          backgroundColor: "#1d1d1d",
          borderRadius: "200px",
          pointerEvents: "none",
          color: "#fff",
          fontFamily: "body",
          textAlign: "center",
          fontSize: "16px",
        })}
        style={{
          mixBlendMode: cursorVariant === "link" ? "exclusion" : "normal",
        }}
        animate={cursorVariant}
        transition={spring}
      >
        <span
          className={css({
            flex: "auto",
            fontSize: "inherit",
            pointerEvents: "none",
            margin: "auto",
          })}
        >
          {cursorText}
        </span>
      </motion.div>
      {children}
    </TrailerMouseContext.Provider>
  );
};

export const useTrailerMouse = () => {
  const context = useContext(TrailerMouseContext);

  if (context == null) {
    throw new Error(
      "Trailer mouse logic should be inside <TrailerMouseProvider />"
    );
  }

  return context;
};
