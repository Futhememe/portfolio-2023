import { styled } from "@/styled-system/jsx";
import { motion } from "framer-motion";

export const SkillTag = styled(motion.div, {
  base: {
    display: "flex",
    padding: "0.5rem",
    justifyContent: "center",
    alignItems: "center",

    borderRadius: "0.5rem",
    bgColor: "darkbackground",

    fontFamily: "body",
    fontSize: ["0.875rem", "1rem"],
    fontWeight: 501,

    color: "background",
  },
});
