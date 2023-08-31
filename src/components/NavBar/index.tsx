import { styled } from "@/styled-system/jsx";

export const Navbar = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    padding: "0.5rem",
    gap: "1rem",

    borderRadius: "1rem",
    bgColor: "darkbackground",

    position: "sticky",
    bottom: "2rem",
  },
});

export const MenuButton = styled("button", {
  base: {
    all: "unset",
    display: "flex",
    padding: "0.5rem 1rem",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.625rem",

    fontSize: "1rem",
    fontFamily: "body",
    color: "background",
    fontWeight: 501,

    bgColor: { base: "darkbackground", _hover: "#666" },
    borderRadius: "0.5rem",

    transition: ".3s",
    cursor: "pointer",
  },
  variants: {
    variant: {
      default: {},
      selected: {
        color: "text",
        bgColor: { base: "background", _hover: "background" },
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
