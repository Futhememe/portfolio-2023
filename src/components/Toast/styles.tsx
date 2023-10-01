import { styled } from "@/styled-system/jsx";
import * as RadixToast from "@radix-ui/react-toast";

export const ToastViewport = styled(RadixToast.Viewport, {
  base: {
    position: "fixed",
    bottom: 0,
    right: 0,
    display: "flex",
    flexDirection: "column",
    padding: "2rem",
    gap: "10px",
    w: "390px",
    maxW: "100vw",
    margin: 0,
    listStyle: "none",
    zIndex: 2147483647,
    outline: "none",

    color: "background",
  },
});

export const ToastRoot = styled(RadixToast.Root, {
  base: {
    bgColor: "darkbackground",
    borderRadius: "0.5rem",
    boxShadow:
      "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
    padding: "1rem",
    display: "grid",
    gridTemplateAreas: "'title action' 'description action'",
    gridTemplateColumns: "auto max-content",
    columnGap: "1rem",
    alignItems: "center",
  },
});

export const ToastTitle = styled(RadixToast.Title, {
  base: {
    display: "flex",
    alignItems: "center",

    gap: "0.5rem",
  },
});

export const CloseButton = styled("button", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    p: "0.25rem",
    borderRadius: "full",

    color: "background",

    _hover: {
      bgColor: "background",
      color: "darkbackground",
    },

    transition: "0.3s",
  },
});
