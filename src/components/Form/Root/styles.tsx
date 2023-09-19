import { styled } from "@/styled-system/jsx";
import * as Form from "@radix-ui/react-form";

export const FormRoot = styled(Form.Root, {
  base: {
    display: "flex",
    flexDir: "column",
    maxW: "25.3rem",
    w: ["100%", "25.3rem"],

    gap: "1rem",
  },
});
