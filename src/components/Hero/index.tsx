import { css } from "@/styled-system/css";
import { Display, Text } from "../Typograph";

export const Hero = () => {
  return (
    <div
      className={css({
        display: "flex",
        flexDir: "column",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

        maxH: "calc(100vh - 3.4625rem)",
        position: "relative",
      })}
    >
      <Display css={{ fontSize: "4rem", lineHeight: "tight" }}>
        Hello, {"I'm"} <b className={css({ fontWeight: 500 })}>Gustavo</b>
      </Display>
      <Display css={{ fontSize: "4rem", lineHeight: "tight" }}>
        an creative designer
      </Display>
      <Display css={{ fontSize: "4rem", lineHeight: "tight" }}>
        and developer
      </Display>

      <Text
        css={{
          fontSize: "1rem",
          fontWeight: 501,
          position: "absolute",
          bottom: "6.5rem",
        }}
      >
        scroll for more
      </Text>
    </div>
  );
};
