import { styled } from "@/styled-system/jsx";
import * as Switch from "@radix-ui/react-switch";

export const Root = styled(Switch.Root, {
  base: {
    width: '42px',
    h: '25px',

    position: 'relative',
    backgroundColor: 'darkbackground',

    borderRadius: 'full',

    "&[data-state='checked']": {
      // backgroundColor: 'background'
    }
  }
})

export const Thumb = styled(Switch.Thumb, {
  base: {
    display: 'block',
    width: '21px',
    height: '21px',
    backgroundColor: 'background',
    borderRadius: 'full',
    transition: 'transform 100ms',
    transform: 'translateX(2px)',
    willChange: 'transform',

    "&[data-state='checked']": {
      transform: 'translateX(19px)',
      // backgroundColor: 'darkbackground'
    }
  }
})