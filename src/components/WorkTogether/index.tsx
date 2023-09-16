"use client";
import { css } from "@/styled-system/css";
import { LinkButton } from "../LinkButton";
import { Display, Text } from "../Typograph";
import { motion } from "framer-motion";
import { useTrailerMouse } from "@/hooks/useTrailerMouse";
import { useRouter } from "next/navigation";

export const WorkTogether = () => {
  const { contactEnter, mouseLeave } = useTrailerMouse();
  const router = useRouter();

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
        <Display css={{ fontSize: "6rem", lineHeight: "tight" }}>
          Let{"'"}s
        </Display>
        <motion.div
          className={css({
            display: "flex",
            h: "3px",
            w: "6.31rem",
            bgColor: "text",
          })}
          animate
        />
        <Display css={{ fontSize: "6rem", lineHeight: "tight" }}>work</Display>

        <Text
          css={{
            fontWeight: 501,
            position: "absolute",
            opacity: "0.7",
            top: "-4rem",
            left: "-4rem",
          }}
        >
          Say hi
        </Text>
        <Text
          css={{
            fontWeight: 501,
            position: "absolute",
            opacity: "0.7",
            right: "-6rem",
            bottom: "-4rem",
          }}
        >
          Say your ideas
        </Text>
        <Text
          css={{
            fontWeight: 501,
            position: "absolute",
            opacity: "0.7",
            left: "-6rem",
            bottom: "-7rem",
          }}
        >
          Let{"'"}s chat
        </Text>
      </div>
      <Display css={{ fontSize: "6rem", lineHeight: "tight" }}>
        together
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
          get in touch
        </LinkButton>
      </motion.div>
    </div>
  );
};
