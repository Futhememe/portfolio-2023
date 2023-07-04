import { css } from "@/styled-system/css";

export const Hero = () => {
  return (
    <div className={css({ display: "flex", flexDir: "column" })}>
      <div
        className={css({
          display: "flex",
          flex: 1,
          minW: "100vw",
          alignItems: "center",
          pl: "7.81rem",
        })}
      >
        <h1
          className={css({
            fontFamily: "display",
            fontSize: "6rem",
            pt: "3rem",
          })}
        >
          Creative, <br /> UI Designer <br /> and Developer
        </h1>
      </div>
      <p
        className={css({
          fontFamily: "display",
          fontWeight: 500,
          textDecorationLine: "underline",
          textAlign: "center",
          paddingBottom: "3rem",
        })}
      >
        Scroll for more
      </p>
    </div>
  );
};
