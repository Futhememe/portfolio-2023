import { styled } from "@/styles";

export const LinkContainer = styled('button', {
  all: 'unset',
  display: 'flex',

  fontFamily: '$heading',
  fontSize: '$md',
  textDecoration: 'underline',

  alignItems: 'center',

  cursor: 'pointer',

  gap: '$2',
})