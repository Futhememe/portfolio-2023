import { styled } from "@/styles";
import { Text } from "../Text";

export const HeaderContainer = styled('div', {
  display: 'flex',

  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '$6',

  background: 'transparent',

  [`> ${Text}`]: {
    textTransform: 'uppercase'
  }
})