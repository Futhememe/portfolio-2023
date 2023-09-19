"use client";
import { Form } from "@/components/Form";
import { Display } from "@/components/Typograph";
import { useTrailerMouse } from "@/hooks/useTrailerMouse";
import { css } from "@/styled-system/css";

export default function Contact() {
  const { contactEnter, mouseLeave } = useTrailerMouse();

  return (
    <div
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
      <Display css={{ fontSize: ["4.5rem", "6rem"] }}>Contact</Display>
      <Form.Root>
        <Form.Input
          name="name"
          label="What's your name ?"
          placeholder="Your name"
        />

        <Form.Input
          name="email"
          type="email"
          label="What's your email ?"
          placeholder="Your email"
        />

        <Form.Input
          name="phone"
          label="What's your phone number ?"
          placeholder="Your phone number"
        />

        <Form.Textarea
          name="about"
          label="Tell me more about your project*"
          placeholder="Describe it as you can"
        />

        <Form.Submit
          onMouseEnter={contactEnter}
          onMouseLeave={mouseLeave}
          type="button"
          style={{ marginTop: "2rem" }}
        >
          Send
        </Form.Submit>
      </Form.Root>
    </div>
  );
}
