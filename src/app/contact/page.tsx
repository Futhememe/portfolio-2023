"use client";
import * as RadixToast from "@radix-ui/react-toast";
import { Form } from "@/components/Form";
import { Display } from "@/components/Typograph";
import { useTrailerMouse } from "@/hooks/useTrailerMouse";
import { css } from "@/styled-system/css";
import { SlideInState } from "@/utils/animations/slideIn";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IContactSchemaOutput, contactSchema } from "@/form/schema";
import { Toast } from "@/components/Toast";

export default function Contact() {
  const [open, setOpen] = useState<boolean>(false);
  const timerRef = useRef(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

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

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  function openToast() {
    setOpen(false);
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setOpen(true);
    }, 100);
  }

  function sendEmail(data: IContactSchemaOutput) {
    openToast();
  }

  return (
    <RadixToast.Provider swipeDirection="right">
      <Toast open={open} onOpenChange={setOpen} />
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
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Form.Input
                  label="What's your name ?"
                  placeholder="Your name"
                  error={!!errors.name}
                  {...field}
                />
              )}
            />
          </motion.div>

          <motion.div
            animate={isInView ? SlideInState.VISIBLE : SlideInState.OUTOFVIEW}
            initial={SlideInState.OUTOFVIEW}
            variants={slideIn}
            transition={{ delay: 0.4 }}
          >
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Form.Input
                  type="email"
                  label="What's your email ?"
                  placeholder="Your email"
                  error={!!errors.email}
                  {...field}
                />
              )}
            />
          </motion.div>

          <motion.div
            animate={isInView ? SlideInState.VISIBLE : SlideInState.OUTOFVIEW}
            initial={SlideInState.OUTOFVIEW}
            variants={slideIn}
            transition={{ delay: 0.6 }}
          >
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <Form.Input
                  label="What's your phone number ?"
                  placeholder="Your phone number"
                  error={!!errors.number}
                  {...field}
                />
              )}
            />
          </motion.div>

          <motion.div
            animate={isInView ? SlideInState.VISIBLE : SlideInState.OUTOFVIEW}
            initial={SlideInState.OUTOFVIEW}
            variants={slideIn}
            transition={{ delay: 0.8 }}
          >
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <Form.Textarea
                  label="Tell me more about your project*"
                  placeholder="Describe it as you can"
                  error={!!errors.description}
                  {...field}
                />
              )}
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
              onClick={handleSubmit(sendEmail as any)}
              type="button"
              style={{ marginTop: "2rem", width: "100%" }}
            >
              Send
            </Form.Submit>
          </motion.div>
        </Form.Root>
      </div>
    </RadixToast.Provider>
  );
}
