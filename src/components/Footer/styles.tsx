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

  "@media(max-width: 600px)": {
    padding: "$10 $6",

    [`> ${Heading}`]: {
      fontSize: "$4xl",
    },

    [`> ${Text}`]: {
      fontSize: "$md",
    },
  },
});

export const SocialContainer = styled("div", {
  display: "flex",
  gap: "$12",

  marginTop: "$20",

  "@media(max-width: 600px)": {
    marginTop: "$5",
  },
});
