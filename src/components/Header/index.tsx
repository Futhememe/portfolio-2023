import { css } from "@/styled-system/css";
import { Logo } from "../Assets/logo";
import { LanguageSwitch } from "../LanguageSwitch";

export const Header = () => {
  return (
    <header
      className={css({
        display: ["none", "flex"],
        flex: "1",
        maxH: "3.4625rem",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 3.5rem",
      })}
    >
      <Logo />
      <LanguageSwitch />
    </header>
  );
};
