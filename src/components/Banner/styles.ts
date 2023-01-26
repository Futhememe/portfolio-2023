import { keyframes, styled } from "@/styles";

const scrolling1 = keyframes({
  '0%': { transform: 'translateX(100%)' },
  '100%': { transform: 'translateX(-100%)' },
});

const scrolling2 = keyframes({
  '0%': { transform: 'translateX(0%)' },
  '100%': { transform: 'translateX(-200%)' },
});

export const BannerContainer = styled('div', {
  display: 'flex',
  overflow: 'hidden',
  whiteSpace: 'nowrap',

  alignItems: 'center',

  padding: '$4 0',

  borderTop: '1px solid $colors$black',
  borderBottom: '1px solid $colors$black',
  textTransform: 'uppercase',
  wordSpacing: '20px',

  fontFamily: '$heading',

  // '.marqueeStyle': {
  //   display: 'inline-block',
  //   '-webkit-animation': `${scrolling1} 20s linear infinite`,
  //   animation: `${scrolling1} 20s linear infinite`,
  // },

  // '.marqueeStyle2': {
  //   display: 'inline-block',
  //   '-webkit-animation': `${scrolling2} 20s linear infinite`,
  //   animation: `${scrolling2} 20s linear infinite`,
  //   animationDelay: '10s'
  // }
})