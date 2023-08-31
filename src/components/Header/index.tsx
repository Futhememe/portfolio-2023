import { css } from "@/styled-system/css";
import { Logo } from "../Assets/logo";

export const Header = () => {
  return (
    <header
      className={css({
        display: "flex",
        flex: "1",
        maxH: "3.4625rem",
        alignItems: "center",
        padding: "1rem 3.5rem",
      })}
    >
      <Logo />
    </header>
  );
};
