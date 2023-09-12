"use client";

import { css } from "@/styled-system/css";
import { CopyrightLogo, WhiteLogo } from "../Assets/logo";
import { Text } from "../Typograph";
import { InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import { MenuButton, Navbar } from "../NavBar";
import MagneticElement from "../MagneticElement";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useTrailerMouse } from "@/hooks/useTrailerMouse";

export const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { transparentEnter, mouseLeave } = useTrailerMouse();

  return (
    <>
      <footer
        className={css({
          display: "flex",
          flexDir: "column",
          flex: 1,
          maxH: "11.5rem",
          minWidth: "calc(100vw - 1rem)",
          maxW: "calc(100vw - 1rem)",
          alignItems: "center",
          padding: "1rem 3.5rem",
          gap: "1.81rem",
          bgColor: "background",
        })}
      >
        <div
          className={css({
            display: "flex",
            padding: "2rem 1.5rem",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",

            borderRadius: "0.5rem",
            bgColor: "darkbackground",
          })}
        >
          <motion.div
            className={css({
              display: "flex",
              gap: "1rem",
              color: "background",
            })}
            onMouseEnter={transparentEnter}
            onMouseLeave={mouseLeave}
          >
            <MagneticElement>
              <InstagramLogo size={32} />
            </MagneticElement>
            <MagneticElement>
              <LinkedinLogo size={32} />
            </MagneticElement>
            <Text css={{ color: "background" }}>gustavosouza@skiff.com</Text>
          </motion.div>
          <WhiteLogo />
        </div>
        <div
          className={css({
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",

            width: "100%",
          })}
        >
          <CopyrightLogo />
          <Text>Created by Gustavo</Text>
        </div>
      </footer>
      <Navbar onMouseEnter={transparentEnter} onMouseLeave={mouseLeave}>
        <MenuButton
          variant={pathname === "/" ? "selected" : "default"}
          onClick={() => router.push("/")}
        >
          Home
        </MenuButton>
        <MenuButton
          variant={pathname === "/about" ? "selected" : "default"}
          onClick={() => router.push("/about")}
        >
          About
        </MenuButton>
        <MenuButton
          variant={pathname === "/showcase" ? "selected" : "default"}
          onClick={() => router.push("/showcase")}
        >
          Projects
        </MenuButton>
        <MenuButton
          variant={pathname === "/contact" ? "selected" : "default"}
          onClick={() => router.push("/contact")}
        >
          Contact
        </MenuButton>
      </Navbar>
    </>
  );
};
