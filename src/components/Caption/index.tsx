import { css } from "@/styled-system/css";
import { Container, Corner } from "./styles";
import { ReactNode } from "react";

interface CaptionProps {
  children: ReactNode;
}

export const Caption = ({ children }: CaptionProps) => {
  return (
    <Container>
      <Corner top={-2.5} left={-2.5} />
      <Corner top={-2.5} right={-2.5} />
      {children}
      <Corner bottom={-2.5} left={-2.5} />
      <Corner bottom={-2.5} right={-2.5} />
    </Container>
  );
};
