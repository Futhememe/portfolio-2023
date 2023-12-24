import { Text } from "@/components/Typograph";
import * as Form from "@radix-ui/react-form";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { FormField, FormLabel, Input as StyledInput } from "./styles";

interface IInput
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  label?: string;
  error?: boolean;
}

export const Input = ({ name, label = "", error = false, ...rest }: IInput) => {
  return (
    <FormField name={name}>
      <FormLabel variant={error ? "error" : "default"}>{label}</FormLabel>
      <Form.Control asChild>
        {/* @ts-ignore */}
        <StyledInput variant={error ? "error" : "default"} {...rest} />
      </Form.Control>
    </FormField>
  );
};
