import * as React from "react";
import * as RadixToast from "@radix-ui/react-toast";
import { CloseButton, ToastRoot, ToastTitle, ToastViewport } from "./styles";
import { CheckCircle, X } from "@phosphor-icons/react";
import { Text } from "../Typograph";

interface IToast extends RadixToast.ToastProps {}

export const Toast = ({ ...rest }: IToast) => {
  return (
    <>
      <ToastRoot {...rest}>
        <ToastTitle>
          <CheckCircle size={24} />
          <Text css={{ color: "background" }}>
            Sua mensagem foi enviada com sucesso
          </Text>
        </ToastTitle>
        <RadixToast.Action asChild altText="Goto schedule to undo">
          <CloseButton>
            <X size={24} />
          </CloseButton>
        </RadixToast.Action>
      </ToastRoot>
      <ToastViewport />
    </>
  );
};
