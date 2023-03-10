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
    fontSize: "$9xl",
    maxWidth: 700,
    textAlign: "initial",
  },

  [`> ${LinkContainer}`]: {
    marginTop: "134px",
  },

  "@media(max-width: 815px)": {
    padding: "$20",
  },

  "@media(max-width: 600px)": {
    padding: "$20",

    [`${Heading}`]: {
      fontSize: "$8xl",
      textAlign: "initial",
    },
  },

  "@media(max-width: 500px)": {
    padding: "$20 $6",

    [`${Heading}`]: {
      fontSize: "$5xl",
      textAlign: "initial",
    },
  },
});

export const IntroductionSection = styled("div", {
  display: "flex",
  flexDirection: "column",

  padding: "$20 125px",

  [`> ${Heading}`]: {
    fontSize: "$6xl",
  },

  [`${ConnectingContainer}`]: {
    marginTop: "148px",
  },

  "@media(max-width: 815px)": {
    padding: "$20",

    [`${ConnectingContainer}`]: {
      marginTop: "$12",
    },
  },

  "@media(max-width: 600px)": {
    padding: "$20",

    [`${Heading}`]: {
      fontSize: "$4xl",
      textAlign: "initial",
    },
  },

  "@media(max-width: 500px)": {
    padding: "$20 $6",

    [`${Heading}`]: {
      fontSize: "$2xl",
      textAlign: "initial",
    },
  },
});
