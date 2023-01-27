import { ComponentProps } from "@stitches/react";
import { ArrowUpRight } from "phosphor-react";
import { ReactNode } from "react";
import { LinkContainer } from "./styles";

interface LinkButtonProps extends ComponentProps<typeof LinkContainer> {
  children: ReactNode;
}

export const LinkButton = ({ children, ...rest }: LinkButtonProps) => {
  return (
    <LinkContainer {...rest}>
      {children}
      <ArrowUpRight size={18} />
    </LinkContainer>
  );
};
