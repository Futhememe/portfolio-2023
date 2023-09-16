import { styled } from "@/styled-system/jsx";
import * as Form from "@radix-ui/react-form";

export const FormField = styled(Form.Field, {
  base: {
    display: "flex",
    flexDir: "column",
    w: "100%",
    flex: 1,
    gap: "4px",
  },
});

export const Input = styled("input", {
  base: {
    display: "flex",
    flex: 1,
    padding: "0.625rem",
    alignItems: "center",
    w: "100%",
    gap: " 0.625rem",
    alignSelf: "stretch",
    borderRadius: "0.5rem",
    border: "2px solid #1D1D1D",

    bgColor: "transparent",

    fontFamily: "body",
    fontWeight: 500,

    "&:focus": {
      border: "2px dashed #1d1d1d",
    },

    transition: "0.3",
  },
});
