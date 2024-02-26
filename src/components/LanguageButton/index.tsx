import { styled } from "@/styled-system/jsx";

export const LanguageButton = styled("button", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "inherit",
    pl: "0.75rem",

    w: "34px",
    h: "34px",
    textWrap: "nowrap",

    borderRadius: "full",
    backgroundColor: "background",
    color: "background",
    fontSize: "lg",
    overflow: "hidden",

    fontFamily: "body",
    fontWeight: "medium",

    _hover: {
      backgroundColor: "darkbackground",
      w: "135px",
      justifyContent: "center",
      pl: "0",
    },

    transition: "0.5s",
    cursor: "pointer",
  },
});
