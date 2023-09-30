import { Text } from "@/components/Typograph";
import * as Form from "@radix-ui/react-form";
import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import { FormField, Input as StyledInput } from "./styles";
import { FormLabel } from "../Input/styles";

interface IInput
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  name: string;
  label?: string;
  error?: boolean;
}

export const Textarea = ({ name, label = "", error, ...rest }: IInput) => {
  return (
    <FormField name={name}>
      <FormLabel variant={error ? "error" : "default"}>{label}</FormLabel>
      <Form.Control asChild>
        <StyledInput
          variant={error ? "error" : "default"}
          resize="vertical"
          {...rest}
        />
      </Form.Control>
    </FormField>
  );
};
