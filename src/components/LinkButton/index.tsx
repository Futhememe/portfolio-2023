import { StyledComponent } from "@/styled-system/types/jsx";
import { Button } from "./styles";
import { ReactNode } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { css } from "@/styled-system/css";
import MagneticElement from "../MagneticElement";

interface ILinkButton {
  children: ReactNode;
}
export const LinkButton = ({ children }: ILinkButton) => {
  return (
    <MagneticElement>
      <Button>
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            flexDir: "column",
          })}
        >
          {children}
          <div
            className={css({
              display: "flex",
              h: "2px",
              bgColor: "text",
              w: "100%",
              mt: "-3px",
            })}
          />
        </div>
        <ArrowUpRight size={24} />
      </Button>
    </MagneticElement>
  );
};
