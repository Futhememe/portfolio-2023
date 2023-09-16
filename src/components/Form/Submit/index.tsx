import * as Form from "@radix-ui/react-form";
import { Button } from "./styles";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ISubmit
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const Submit = ({ ...rest }: ISubmit) => {
  return (
    <Form.Submit asChild>
      <Button {...rest} />
    </Form.Submit>
  );
};
