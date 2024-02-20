"use client";
import { css } from "@/styled-system/css";
import { LinkButton } from "../LinkButton";
import { Display, Text } from "../Typograph";
import { motion } from "framer-motion";
import { useTrailerMouse } from "@/hooks/useTrailerMouse";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

export const WorkTogether = () => {
  const { contactEnter, mouseLeave } = useTrailerMouse();
  const router = useRouter();

  const { t } = useTranslation("config", {
    keyPrefix: "generic",
  });

  return (
    <div
      className={css({
        display: "flex",
        flex: 1,
        flexDir: "column",
        alignItems: "center",
        justifyContent: "center",

        minH: "calc(100vh - 5rem)",
      })}
    >
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          gap: "1rem",

          position: "relative",
        })}
      >
        <Display
          css={{ fontSize: ["3.75rem", "5rem", "6rem"], lineHeight: "tight" }}
        >
          {t("let")}
        </Display>
        <motion.div
          className={css({
            display: "flex",
            h: "3px",
            w: ["5rem", "6.31rem"],
            bgColor: "text",
          })}
          animate
        />
        <Display
          css={{ fontSize: ["3.75rem", "5rem", "6rem"], lineHeight: "tight" }}
        >
          {t("work")}
        </Display>

        <Text
          css={{
            fontWeight: 501,
            position: "absolute",
            opacity: "0.7",
            top: ["-4rem"],
            left: ["1rem", "-4rem"],
          }}
        >
          {t("hi")}
        </Text>
        <Text
          css={{
            fontWeight: 501,
            position: "absolute",
            opacity: "0.7",
            right: ["0", "-6rem"],
            bottom: ["5rem", "-4rem"],
          }}
        >
          {t("share")}
        </Text>
        <Text
          css={{
            fontWeight: 501,
            position: "absolute",
            opacity: "0.7",
            left: ["1rem", "-6rem"],
            bottom: "-7rem",
          }}
        >
          {t("chat")}
        </Text>
      </div>
      <Display
        css={{ fontSize: ["3.75rem", "5rem", "6rem"], lineHeight: "tight" }}
      >
        {t("together")}
      </Display>

      <motion.div
        onMouseEnter={contactEnter}
        onMouseLeave={mouseLeave}
        className={css({ display: "flex", mt: "4rem" })}
      >
        <LinkButton
          onClick={() => {
            mouseLeave();
            router.push("/contact");
          }}
        >
          {t("get_in_touch")}
        </LinkButton>
      </motion.div>
    </div>
  );
};
