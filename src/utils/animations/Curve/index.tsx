"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { text, curve, translate } from "./anim";
import { css } from "@/styled-system/css";

const routes = {
  "/": "Home",
  "/about": "About",
  "/contact": "Contact",
  "/showcase": "Projects",
};

const anim = (variants: any) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

interface ICurve {
  children: ReactNode | ReactNode[];
  backgroundColor: string;
}

interface ISVG {
  height: number;
  width: number;
}

export default function Curve({ children, backgroundColor }: ICurve) {
  const router = useRouter();

  const [dimensions, setDimensions] = useState<ISVG>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth as any,
        height: window.innerHeight as any,
      });
    }

    resize();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div>
      <div
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
        className={css({
          position: "fixed",
          height: "calc(100vh + 600px)",
          width: "100vw",
          pointerEvents: "none",
          left: 0,
          top: 0,
          transition: "opacity 0s linear 0.1s",
          backgroundColor: "darkbackground",
        })}
      />

      <motion.p
        className={css({
          position: "absolute",
          left: "50%",
          top: "40%",
          color: "white",
          fontSize: "46px",
          zIndex: 3,
          transform: "translateX(-50%)",
          textAlign: "center",
        })}
        {...anim(text)}
      >
        {/* @ts-ignore */}
        {routes[router?.route]}
      </motion.p>
      {dimensions.width != null && <SVG {...dimensions} />}
      {children}
    </div>
  );
}

const SVG = ({ height, width }: ISVG) => {
  const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

  const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

  return (
    <motion.svg {...anim(translate)}>
      <motion.path {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};
