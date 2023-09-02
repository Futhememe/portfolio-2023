import { styled } from "@/styled-system/jsx";

export const Button = styled("button", {
  base: {
    all: "unset",
    display: "flex",
    alignItems: "center",
    fontSize: "1rem",
    color: "text",
    fontFamily: "body",
    fontWeight: 501,
    gap: "0.5rem",

    textDecoration: "underline",

    cursor: "pointer",
  },
});
