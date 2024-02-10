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

export const FormLabel = styled(Form.Label, {
  base: {
    fontFamily: "body",
    color: "text",
    fontSize: "1rem",
    fontWeight: 500,
  },
  variants: {
    variant: {
      error: {
        color: "red.600",
      },
      default: {
        color: "text",
      },
    },
  },
  defaultVariants: {
    variant: "default",
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

    bgColor: "transparent",

    fontFamily: "body",
    fontWeight: 500,

    "&:focus": {
      border: "2px dashed #1d1d1d",
    },

    transition: "0.3",
    "&::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
      margin: "0",
    },
    "&::-webkit-outer-spin-button": {
      WebkitAppearance: "none",
      margin: "0",
    },
  },
  variants: {
    variant: {
      error: {
        border: "2px solid #DC2626",
      },
      default: {
        border: "2px solid #1D1D1D",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
