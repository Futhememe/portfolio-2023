import { ReactNode } from "react";
import { FormRoot } from "./styles";

interface IRoot {
  children: ReactNode;
}

export const Root = ({ children }: IRoot) => {
  return <FormRoot>{children}</FormRoot>;
};
