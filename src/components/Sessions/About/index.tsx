import { Sparkles } from "@/components/Sparkles";
import { css } from "@/styled-system/css";
import Image from "next/image";
import photo from "@/assets/myPhoto.jpeg";
import { Caption } from "@/components/Caption";

export const About = () => {
  return (
    <div className={css({ display: "flex", alignItems: "center", ml: "-10%" })}>
      <div
        className={css({
          display: "flex",
          position: "relative",
          objectFit: "cover",
          w: "286px",
          minW: "286px",
          transform: "rotate(-3.29deg)",
        })}
      >
        <div className={css({ position: "absolute", top: -12, right: -12 })}>
          <Sparkles />
        </div>
        <div className={css({ zIndex: 1 })}>
          <Image alt="my photo" src={photo} />
        </div>
        <div className={css({ position: "absolute", bottom: -12, left: -12 })}>
          <Sparkles />
        </div>
      </div>
      <div
        className={css({
          display: "flex",
          flexDir: "column",
          p: "9.33rem",
          gap: "2.06rem",
        })}
      >
        <h2 className={css({ fontFamily: "display", fontSize: "2.5rem" })}>
          Sobre mim
        </h2>
        <div
          className={css({
            display: "flex",
            minW: "28.75rem",
            w: "28.75rem",
          })}
        >
          <Caption>
            Lorem ipsum dolor sit amet consectetur. Nisi egestas sit nam arcu.
            Odio felis aliquet vulputate tristique purus. Diam amet tortor proin
            sit leo egestas sit. Sodales turpis nec nisl viverra feugiat et eu.
          </Caption>
        </div>
      </div>
    </div>
  );
};
