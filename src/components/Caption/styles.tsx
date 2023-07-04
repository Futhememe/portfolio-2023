import { styled } from "@/styled-system/jsx";

export const Container = styled("div", {
  base: {
    display: "flex",
    position: "relative",

    p: "1rem",
    flexWrap: "wrap",
    border: "2px dashed var(--black, #111013)",
    color: "black",
  },
});

export const Corner = styled("div", {
  base: {
    display: "flex",
    width: "1.125rem",
    height: "1.125rem",
    flexShrink: 0,
    position: "absolute",
    border: "2px solid var(--black, #111013)",
    background: "yellowspecial",
  },
});
