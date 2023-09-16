import { Text } from "@/components/Typograph";
import * as Form from "@radix-ui/react-form";
import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import { FormField, Input as StyledInput } from "./styles";

interface IInput
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  name: string;
  label?: string;
}

export const Textarea = ({ name, label = "", ...rest }: IInput) => {
  return (
    <FormField name={name}>
      <Form.Label asChild>
        <Text css={{ fontSize: "1rem", fontWeight: 500 }}>{label}</Text>
      </Form.Label>
      <Form.Control asChild>
        <StyledInput resize="vertical" {...rest} />
      </Form.Control>
    </FormField>
  );
};
