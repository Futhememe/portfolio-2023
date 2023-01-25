import { ArrowUpRight } from "phosphor-react";
import { ReactNode } from "react";
import { LinkContainer } from "./styles";

interface LinkButtonProps {
  children: ReactNode;
}

export const LinkButton = ({ children }: LinkButtonProps) => {
  return (
    <LinkContainer>
      {children}
      <ArrowUpRight size={18} />
    </LinkContainer>
  );
};
