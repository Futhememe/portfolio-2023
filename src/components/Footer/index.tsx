"use client";

import { css } from "@/styled-system/css";
import { CopyrightLogo, WhiteLogo } from "../Assets/logo";
import { Text } from "../Typograph";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import { MenuButton, Navbar } from "../NavBar";
import MagneticElement from "../MagneticElement";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useTrailerMouse } from "@/hooks/useTrailerMouse";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { transparentEnter, mouseLeave } = useTrailerMouse();

  const { t } = useTranslation("config", {
    keyPrefix: "generic",
  });

  function openInstagram() {
    window.open("https://www.instagram.com/fuh.jpeg/", "_blank")?.focus();
  }

  function openLinkedin() {
    window
      .open("https://www.linkedin.com/in/gustavo-silva-261415148/", "_blank")
      ?.focus();
  }

  function openGithub() {
    window.open("https://github.com/Futhememe", "_blank")?.focus();
  }

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
          padding: ["1rem", "1rem 2rem", "1rem 3.5rem"],
          gap: "1.81rem",
          bgColor: "background",
        })}
      >
        <div
          className={css({
            display: "flex",
            padding: "2rem 1.5rem",
            justifyContent: ["center", "space-between"],
            alignItems: "center",
            width: "100%",

            borderRadius: "0.5rem",
            bgColor: "darkbackground",
          })}
        >
          <motion.div
            className={css({
              display: "flex",
              flexDir: ["column", "row"],
              alignItems: ["center"],
              gap: "1rem",
              color: "background",
            })}
            onMouseEnter={transparentEnter}
            onMouseLeave={mouseLeave}
          >
            <div className={css({ display: "flex", gap: "1rem" })}>
              <MagneticElement>
                <InstagramLogo size={32} onClick={openInstagram} />
              </MagneticElement>
              <MagneticElement>
                <LinkedinLogo size={32} onClick={openLinkedin} />
              </MagneticElement>
              <MagneticElement>
                <GithubLogo size={32} onClick={openGithub} />
              </MagneticElement>
            </div>
            <Text css={{ color: "background" }}>gustavosouza@skiff.com</Text>
          </motion.div>
          <div className={css({ display: ["none", "flex"] })}>
            <WhiteLogo />
          </div>
        </div>
        <div
          className={css({
            display: ["none", "flex"],
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",

            width: "100%",
          })}
        >
          <CopyrightLogo />
          <Text>{t("created_by")} Gustavo</Text>
        </div>
      </footer>
      <Navbar onMouseEnter={transparentEnter} onMouseLeave={mouseLeave}>
        <MenuButton
          variant={pathname === "/" ? "selected" : "default"}
          onClick={() => router.push("/")}
        >
          {t("home")}
        </MenuButton>
        <MenuButton
          variant={pathname === "/about" ? "selected" : "default"}
          onClick={() => router.push("/about")}
        >
          {t("about")}
        </MenuButton>
        <MenuButton
          variant={pathname === "/showcase" ? "selected" : "default"}
          onClick={() => router.push("/showcase")}
        >
          {t("projects")}
        </MenuButton>
        <MenuButton
          variant={pathname === "/contact" ? "selected" : "default"}
          onClick={() => router.push("/contact")}
        >
          {t("contact")}
        </MenuButton>
      </Navbar>
    </>
  );
};
