import { styled } from "@/styles";
import { Divider } from "../Divider";
import { Text } from "../Text";

export const ConnectingContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',

  alignItems: 'center',

  [`${Text}`]: {
    fontSize: '$4xl'
  },

  [`${Divider}`]: {
    height: '5px',
  },

  "@media(max-width: 600px)": {
    [`${Divider}`]: {
      height: '2px',
    },

    [`${Text}`]: {
      fontSize: '$2xl'
    },
  },
})

export const CodeContainer = styled('div', {
  width: '100%',
  display: "flex",

  justifyContent: 'end',

  '> div': {
    width: '50%',

    [`> ${Text}`]: {
      width: '100%',
      textAlign: 'end'
    },

    "@media(max-width: 600px)": {
      [`> ${Text}`]: {
        fontSize: '$xl'
      }
    },
  },

  "@media(max-width: 600px)": {
    '> div': {
      width: '100%'
    }
  },
})

export const DesignContainer = styled('div', {
  width: '100%',
  display: "flex",

  justifyContent: 'start',

  '> div': {
    width: '50%',

    [`> ${Text}`]: {
      width: '100%',
      textAlign: 'start'
    },

    "@media(max-width: 600px)": {
      [`> ${Text}`]: {
        fontSize: '$xl'
      }
    },
  },

  "@media(max-width: 600px)": {
    '> div': {
      width: '100%'
    }
  },
})

