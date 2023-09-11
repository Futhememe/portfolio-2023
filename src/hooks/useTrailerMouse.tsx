"use client";
import { ReactNode, createContext, useContext, useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "./useMousePosition";
import { css } from "@/styled-system/css";

interface ITrailerMouseContext {
  projectEnter: () => void;
  projectLeave: () => void;
  contactEnter: () => void;
  contactLeave: () => void;
}

const TrailerMouseContext = createContext<ITrailerMouseContext | null>(null);

interface ITrailerMouseProvider {
  children: ReactNode;
}

export const TrailerMouseProvider = ({ children }: ITrailerMouseProvider) => {
  const [cursorText, setCursorText] = useState<string>("");
  const [cursorVariant, setCursorVariant] = useState<
    "default" | "project" | "contact"
  >("default");
  const { x, y }: any = useMousePosition();

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

  function projectEnter() {
    setCursorText("View");
    setCursorVariant("project");
  }

  function projectLeave() {
    setCursorText("");
    setCursorVariant("default");
  }

  function contactEnter() {
    setCursorText("👋");
    setCursorVariant("contact");
  }

  function contactLeave() {
    setCursorText("");
    setCursorVariant("default");
  }

  return (
    <TrailerMouseContext.Provider
      value={{
        projectEnter,
        projectLeave,
        contactEnter,
        contactLeave,
      }}
    >
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
          backgroundColor: "#1d1d1d",
          borderRadius: "200px",
          pointerEvents: "none",
          color: "#fff",
          textAlign: "center",
          fontSize: "16px",
        })}
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
