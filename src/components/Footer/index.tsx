"use client";

import { css } from "@/styled-system/css";
import { CopyrightLogo, WhiteLogo } from "../Assets/logo";
import { Text } from "../Typograph";
import { InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import { MenuButton, Navbar } from "../NavBar";
import MagneticElement from "../MagneticElement";

export const Footer = () => {
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
          <div
            className={css({
              display: "flex",
              gap: "1rem",
              color: "background",
            })}
          >
            <MagneticElement>
              <InstagramLogo size={32} />
            </MagneticElement>
            <MagneticElement>
              <LinkedinLogo size={32} />
            </MagneticElement>
            <Text css={{ color: "background" }}>gustavosouza@skiff.com</Text>
          </div>
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
      <Navbar>
        <MenuButton variant="selected">Home</MenuButton>
        <MenuButton>About</MenuButton>
        <MenuButton>Projects</MenuButton>
        <MenuButton>Contact</MenuButton>
      </Navbar>
    </>
  );
};
