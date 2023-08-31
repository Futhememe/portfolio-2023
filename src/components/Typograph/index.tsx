import { css } from "@/styled-system/css";
import { SystemStyleObject } from "@/styled-system/types";
import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  css?: SystemStyleObject;
}

export const Display = ({ children, css: styles }: TextProps) => (
  <h2
    className={css({
      fontFamily: "display",
      color: "text",
      fontWeight: 400,
      ...styles,
    })}
  >
    {children}
  </h2>
);

export const Text = ({ children, css: styles }: TextProps) => (
  <p
    className={css({
      fontFamily: "body",
      color: "text",
      fontWeight: 400,
      ...styles,
    })}
  >
    {children}
  </p>
);
