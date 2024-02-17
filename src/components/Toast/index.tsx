import * as React from "react";
import * as RadixToast from "@radix-ui/react-toast";
import { CloseButton, ToastRoot, ToastTitle, ToastViewport } from "./styles";
import { CheckCircle, X } from "@phosphor-icons/react";
import { Text } from "../Typograph";

interface IToast extends RadixToast.ToastProps {
  variant: "success" | "error";
  message: string;
}

export const Toast = ({ variant, message, ...rest }: IToast) => {
  const icons = {
    success: <CheckCircle size={24} />,
    error: <X size={24} />,
  };

  return (
    <>
      <ToastRoot {...rest}>
        <ToastTitle>
          {icons[variant]}
          <Text css={{ color: "background" }}>{message}</Text>
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
