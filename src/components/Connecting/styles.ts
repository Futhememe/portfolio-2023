import { styled } from "@/styles";
import { Divider } from "../Divider";
import { Text } from "../Text";

export const ConnectingContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',

  alignItems: 'center',
})

export const CodeContainer = styled('div', {
  width: '100%',
  display: "flex",

  justifyContent: 'end',

  '> div': {
    width: '50%',


    [`> ${Divider}`]: {
      height: '5px',
    },

    [`> ${Text}`]: {
      width: '100%',
      textAlign: 'end'
    }
  }
})

export const DesignContainer = styled('div', {
  width: '100%',
  display: "flex",

  justifyContent: 'start',

  '> div': {
    width: '50%',


    [`> ${Divider}`]: {
      height: '5px',
    },

    [`> ${Text}`]: {
      width: '100%',
      textAlign: 'start'
    }
  }
})

