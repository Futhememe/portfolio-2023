import { styled } from "@/styles";

export const LinkContainer = styled('button', {
  all: 'unset',
  display: 'flex',

  fontFamily: '$heading',
  fontSize: '$md',
  textDecoration: 'underline',

  alignItems: 'center',

  cursor: 'pointer',

  padding: '10px $4',

  gap: '$2',

  variants: {
    variant: {
      default: {
        border: 'none',
      },

      contained: {
        borderRadius: '$xs',
        border: '1px solid $colors$white'
      },
    },

    color: {
      black: {
        color: '$black'
      },
      white: {
        color: '$white'
      }
    }
  },

  defaultVariants: {
    variant: 'default',
    color: 'black'
  }
})