import { css } from "@/styled-system/css";
import { Display, Text } from "../Typograph";
import photo from "../../assets/myPhoto.jpg";
import Image from "next/image";
import { LinkButton } from "../LinkButton";
import { useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import { SlideInState, slideIn } from "@/utils/animations/slideIn";
import { useParallax } from "@/hooks/useParallax";
import { useTrailerMouse } from "@/hooks/useTrailerMouse";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

export const About = () => {
  const ref = useRef(null);
  const isAboutInView = useInView(ref, { once: true });
  const { linkEnter, mouseLeave } = useTrailerMouse();
  const { t: aboutTranslation } = useTranslation("config", {
    keyPrefix: "about",
  });

  const { t: genericTranslation } = useTranslation("config", {
    keyPrefix: "generic",
  });

  const router = useRouter();

  return (
    <div
      ref={ref}
      className={css({
        display: "flex",
        flexDir: ["column"],
        padding: ["4rem, 1rem", "6rem, 1rem", "2.5rem 3.5rem"],
        mt: ["0", "2rem", "0"],
        mb: ["5rem", "5rem", "0"],
        position: "relative",
      })}
    >
      <motion.div
        className={css({
          position: "absolute",
          top: ["-3.25rem", "-4.5rem", "-2.5rem"],
          left: ["0", "-3.5rem", "-4.5rem"],
        })}
        animate={isAboutInView ? SlideInState.VISIBLE : SlideInState.OUTOFVIEW}
        initial={SlideInState.OUTOFVIEW}
        variants={slideIn}
        transition={{ delay: 0.2 }}
      >
        <Display
          css={{
            fontSize: ["4.5rem", "6rem"],
          }}
        >
          {genericTranslation("about_me")}
        </Display>
      </motion.div>
      <div
        className={css({
          display: "flex",
          flexDir: ["column", "column", "row"],
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
          gap: ["2rem", "2rem", "3.5rem"],
        })}
      >
        <div className={css({ display: "flex" })}>
          <Image
            src={photo}
            alt="my photo with a camera"
            width={375}
            height={515}
          />
        </div>
        <motion.div
          className={css({
            display: "flex",
            flexDir: "column",
            maxW: "21.625rem",
            gap: "3rem",
          })}
          animate={
            isAboutInView ? SlideInState.VISIBLE : SlideInState.OUTOFVIEW
          }
          initial={SlideInState.OUTOFVIEW}
          variants={slideIn}
          transition={{ delay: 0.4 }}
        >
          <Text
            css={{ fontSize: "1.25rem", fontWeight: 401, textAlign: "justify" }}
          >
            {aboutTranslation("resume")}
          </Text>
          <div
            onMouseEnter={linkEnter}
            onMouseLeave={mouseLeave}
            className={css({ maxW: "calc(114px + 40px)" })}
          >
            <LinkButton
              onClick={() => {
                router.push("/about");
                mouseLeave();
              }}
            >
              {genericTranslation("view_more")}
            </LinkButton>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
