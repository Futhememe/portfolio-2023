import { css } from "@/styled-system/css";
import { styled } from "@/styled-system/jsx";

export const HeaderContainer = styled("nav", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    p: "6",

    maxW: "100vw",
    width: "100vw",

    maxH: "64px",

    position: "fixed",
    left: 0,

    fontWeight: 400,
  },
});

export const title = css({
  cursor: "pointer",
});

export const button = css({
  cursor: "pointer",
});
