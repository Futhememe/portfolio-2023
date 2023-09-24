"use client";
import { Form } from "@/components/Form";
import { Display } from "@/components/Typograph";
import { useTrailerMouse } from "@/hooks/useTrailerMouse";
import { css } from "@/styled-system/css";
import { SlideInState } from "@/utils/animations/slideIn";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const { contactEnter, mouseLeave } = useTrailerMouse();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const slideIn = {
    visible: (custom: any) => ({
      opacity: [0, 0.25, 0.5, 1],
      y: [16, 8, 4, 0],
    }),
    outOfView: (custom: any) => ({
      opacity: 0,
    }),
  };

  return (
    <>
      {/* <AnimatedOverlay.Contact /> */}
      <div
        ref={ref}
        className={css({
          display: "flex",
          flexDir: "column",
          alignItems: "center",
          w: "100%",
          p: ["4rem 1rem", "4rem"],
          minH: "100vh",
          position: "relative",
        })}
      >
        <motion.div
          animate={isInView ? SlideInState.VISIBLE : SlideInState.OUTOFVIEW}
          initial={SlideInState.OUTOFVIEW}
          variants={slideIn}
          transition={{ delay: 0 }}
        >
          <Display css={{ fontSize: ["4.5rem", "6rem"] }}>Contact</Display>
        </motion.div>
        <Form.Root>
          <motion.div
            animate={isInView ? SlideInState.VISIBLE : SlideInState.OUTOFVIEW}
            initial={SlideInState.OUTOFVIEW}
            variants={slideIn}
            transition={{ delay: 0.2 }}
          >
            <Form.Input
              name="name"
              label="What's your name ?"
              placeholder="Your name"
            />
          </motion.div>

          <motion.div
            animate={isInView ? SlideInState.VISIBLE : SlideInState.OUTOFVIEW}
            initial={SlideInState.OUTOFVIEW}
            variants={slideIn}
            transition={{ delay: 0.4 }}
          >
            <Form.Input
              name="email"
              type="email"
              label="What's your email ?"
              placeholder="Your email"
            />
          </motion.div>

          <motion.div
            animate={isInView ? SlideInState.VISIBLE : SlideInState.OUTOFVIEW}
            initial={SlideInState.OUTOFVIEW}
            variants={slideIn}
            transition={{ delay: 0.6 }}
          >
            <Form.Input
              name="phone"
              label="What's your phone number ?"
              placeholder="Your phone number"
            />
          </motion.div>

          <motion.div
            animate={isInView ? SlideInState.VISIBLE : SlideInState.OUTOFVIEW}
            initial={SlideInState.OUTOFVIEW}
            variants={slideIn}
            transition={{ delay: 0.8 }}
          >
            <Form.Textarea
              name="about"
              label="Tell me more about your project*"
              placeholder="Describe it as you can"
            />
          </motion.div>

          <motion.div
            animate={isInView ? SlideInState.VISIBLE : SlideInState.OUTOFVIEW}
            initial={SlideInState.OUTOFVIEW}
            variants={slideIn}
            transition={{ delay: 1 }}
            className={css({ display: "flex", flex: 1, w: "100%" })}
          >
            <Form.Submit
              onMouseEnter={contactEnter}
              onMouseLeave={mouseLeave}
              type="button"
              style={{ marginTop: "2rem", width: "100%" }}
            >
              Send
            </Form.Submit>
          </motion.div>
        </Form.Root>
      </div>
    </>
  );
}
