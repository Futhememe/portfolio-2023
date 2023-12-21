import { css } from "@/styled-system/css";
import { ReactNode } from "react";

interface IBody {
  children: ReactNode;
}

export const Body = ({ children }: IBody) => {
  return (
    <body
      className={css({
        display: "flex",
        flexDir: "column",
        alignItems: "center",
        minW: ["100vw", "calc(100vw - 1rem)"],
        maxW: ["100vw", "calc(100vw - 1rem)"],
        minH: "100vh",
        margin: 0,
        p: 0,
        // overflowX: "hidden",
        // overflowY: "scroll",

        bgColor: "background",
        position: "relative",
      })}
    >
      {children}
    </body>
  );
};
