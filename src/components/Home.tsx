import { styled } from "@/styles";
import { ConnectingContainer } from "./Connecting/styles";
import { Heading } from "./Heading";
import { LinkContainer } from "./LinkButton/styles";
import { Text } from "./Text";

export const HomeContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  minHeight: "calc(100vh - 74px)",
  maxWidth: "100vw",

  justifyContent: "center",
  alignItems: "center",

  padding: "$20 125px",

  div: {
    width: "100%",
  },

  [`${Heading}`]: {
    maxWidth: 700,
    textAlign: "initial",
  },

  [`> ${LinkContainer}`]: {
    marginTop: "134px",
  },
});

export const IntroductionSection = styled("div", {
  display: "flex",
  flexDirection: "column",

  padding: "$20 125px",

  [`${ConnectingContainer}`]: {
    marginTop: "148px",
  },
});
