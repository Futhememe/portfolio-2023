import * as React from "react";
import * as RadixToast from "@radix-ui/react-toast";
import { AnimatePresence, motion } from "framer-motion";
import { CloseButton, ToastRoot, ToastTitle, ToastViewport } from "./styles";
import { CheckCircle, X } from "@phosphor-icons/react";
import { Text } from "../Typograph";

interface IToast extends RadixToast.ToastProps {}

export const Toast = ({ ...rest }: IToast) => {
  return (
    <AnimatePresence>
      <ToastRoot {...rest}>
        <ToastTitle>
          <CheckCircle size={24} />
          <Text css={{ color: "background" }}>Email enviado com sucesso</Text>
        </ToastTitle>
        <RadixToast.Action asChild altText="Goto schedule to undo">
          <CloseButton>
            <X size={24} />
          </CloseButton>
        </RadixToast.Action>
      </ToastRoot>
      <ToastViewport />
    </AnimatePresence>
  );
};
