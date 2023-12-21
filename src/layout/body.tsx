import { Footer } from "@/components/Footer";
import { TrailerMouseProvider } from "@/hooks/useTrailerMouse";
import { css } from "@/styled-system/css";
import { ReactNode } from "react";

interface IBody {
  children: ReactNode;
}

export const Body = ({ children }: IBody) => {
  return (
    <div
      className={css({
        display: "flex",
        flexDir: "column",
        alignItems: "center",
        minW: ["100vw", "calc(100vw - 1rem)"],
        maxW: ["100vw", "calc(100vw - 1rem)"],
        minH: "100vh",
        margin: 0,
        p: 0,

        bgColor: "background",
        position: "relative",
      })}
    >
      <TrailerMouseProvider>
        {children}
        <Footer />
      </TrailerMouseProvider>
    </div>
  );
};
