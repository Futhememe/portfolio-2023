import { StyledComponent } from "@/styled-system/types/jsx";
import { Button } from "./styles";
import { ReactNode } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";

interface ILinkButton {
  children: ReactNode;
}
export const LinkButton = ({ children }: ILinkButton) => {
  return (
    <Button>
      {children}
      <ArrowUpRight size={24} />
    </Button>
  );
};
