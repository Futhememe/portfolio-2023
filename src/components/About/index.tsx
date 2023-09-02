import { css } from "@/styled-system/css";
import { Display, Text } from "../Typograph";
import photo from "../../assets/myPhoto.jpeg";
import Image from "next/image";
import { LinkButton } from "../LinkButton";

export const About = () => {
  return (
    <div
      className={css({
        display: "flex",
        flexDir: "column",
        padding: "2rem 3.5rem",
        position: "relative",
      })}
    >
      <Display
        css={{
          fontSize: "6rem",
          position: "absolute",
          top: "-2.5rem",
          left: 24,
        }}
      >
        About {"  "}me
      </Display>
      <div
        className={css({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
          gap: "3.5rem",
        })}
      >
        <Image
          src={photo}
          alt="my photo with a camera"
          width={375}
          height={515}
        />
        <div
          className={css({
            display: "flex",
            flexDir: "column",
            maxW: "21.625rem",
            gap: "3rem",
          })}
        >
          <Text css={{ fontSize: "1.25rem", fontWeight: 401 }}>
            Lorem ipsum dolor sit amet consectetur. Est gravida quis pretium
            volutpat sed vivamus. Cras odio placerat in sollicitudin non in nibh
            eget. Rhoncus tempus ultrices augue consectetur facilisi faucibus
            sit tellus. Metus sed velit morbi pellentesque.
          </Text>
          <LinkButton>view more here</LinkButton>
        </div>
      </div>
    </div>
  );
};
