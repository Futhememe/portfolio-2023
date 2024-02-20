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
import { Toast } from "@/components/Toast";
import { IContactSchemaOutput, contactSchema } from "@/schema";
import { Body } from "@/layout/body";
import Head from "next/head";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const {
    mutate: sendMessage,
    isSuccess,
    isPending,
    isError: isFetchError,
  } = useMutation({
    mutationKey: ["message"],
    mutationFn: async (request: IContactSchemaOutput) => {
      const { data } = await api.post("/sendmessage", {
        ...request,
      });
      return data;
    },
  });
  const [open, setOpen] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const timerRef = useRef(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const { contactEnter, mouseLeave, transparentEnter } = useTrailerMouse();
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

  function openError() {
    setIsError(false);
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setIsError(true);
    }, 100);
  }

  function sendEmail(data: IContactSchemaOutput) {
    sendMessage(data);
  }

  useEffect(() => {
    if (isSuccess) {
      openToast();
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isFetchError) {
      openError();
    }
  }, [isFetchError]);

  const { t: contactTranslation } = useTranslation("config", {
    keyPrefix: "contact",
  });

  const { t: genericTranslation } = useTranslation("config", {
    keyPrefix: "generic",
  });

  return (
    <Body>
      <Head>
        <title>Gustavo Souza | {genericTranslation("contact")}</title>
      </Head>
      <RadixToast.Provider swipeDirection="right">
        <Toast
          open={open}
          onOpenChange={setOpen}
          variant="success"
          message="Sua mensagem foi enviada com sucesso"
        />
        <Toast
          open={isError}
          onOpenChange={setIsError}
          variant="error"
          message="Algo deu errado! Tente novamente"
        />
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
            <Display css={{ fontSize: ["4.5rem", "6rem"] }}>
              {genericTranslation("contact")}
            </Display>
          </motion.div>
          <Form.Root>
            <motion.div
              animate={isInView ? SlideInState.VISIBLE : SlideInState.OUTOFVIEW}
              initial={SlideInState.OUTOFVIEW}
              variants={slideIn}
              transition={{ delay: 0.2 }}
              onMouseEnter={transparentEnter}
              onMouseLeave={mouseLeave}
            >
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Form.Input
                    label={`${contactTranslation("name")}*`}
                    placeholder={contactTranslation("name_placeholder")}
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
              onMouseEnter={transparentEnter}
              onMouseLeave={mouseLeave}
            >
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Form.Input
                    type="email"
                    label={`${contactTranslation("email")}*`}
                    placeholder={contactTranslation("email_placeholder")}
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
              onMouseEnter={transparentEnter}
              onMouseLeave={mouseLeave}
            >
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <Form.Input
                    label={contactTranslation("phone")}
                    placeholder={contactTranslation("phone_placeholder")}
                    type="number"
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
              onMouseEnter={transparentEnter}
              onMouseLeave={mouseLeave}
            >
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <Form.Textarea
                    label={`${contactTranslation("project")}*`}
                    placeholder={contactTranslation("project_placeholder")}
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
                disabled={isPending}
                style={{ marginTop: "2rem", width: "100%" }}
              >
                {genericTranslation("send")}
              </Form.Submit>
            </motion.div>
          </Form.Root>
        </div>
      </RadixToast.Provider>
    </Body>
  );
}
