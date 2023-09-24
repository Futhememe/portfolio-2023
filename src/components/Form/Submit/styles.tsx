import { styled } from "@/styled-system/jsx";

export const Button = styled("button", {
  base: {
    display: "flex",
    padding: "1rem 0.5rem",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.625rem",

    borderRadius: "0.5rem",
    background: "#2D2D2D",

    fontFamily: "body",
    fontWeight: 500,
    color: "#F8F5F1",
  },
});
