import { css } from "@/styled-system/css";
import { SystemStyleObject } from "@/styled-system/types";
import { MutableRefObject, ReactNode } from "react";
import { HTMLMotionProps, motion } from "framer-motion";

interface TextProps extends HTMLMotionProps<"p"> {
  children: ReactNode;
  css?: SystemStyleObject;
  ref?: MutableRefObject<any>;
}

export const Display = ({ children, css: styles }: TextProps) => (
  <motion.h2
    className={css({
      fontFamily: "display",
      color: "text",
      fontWeight: 400,
      ...styles,
    })}
  >
    {children}
  </motion.h2>
);

export const Text = ({ children, css: styles, ...rest }: TextProps) => (
  <motion.p
    className={css({
      fontFamily: "body",
      color: "text",
      fontWeight: 400,
      ...styles,
    })}
    {...rest}
  >
    {children}
  </motion.p>
);
