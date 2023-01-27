import { styled } from "@/styles";
import { Heading } from "../Heading";
import { Text } from "../Text";

export const FooterContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#2E2D2F",

  [`> ${Heading}`]: {
    color: "$white",
  },

  [`> ${Text}`]: {
    color: "$white",
  },

  width: "100%",

  padding: "125px",
});
