import { css } from "@/styled-system/css";
import { Logo } from "../Assets/logo";
import { LanguageButton } from "../LanguageButton";
import { useTrailerMouse } from "@/hooks/useTrailerMouse";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

export const Header = () => {
  const { transparentEnter, mouseLeave } = useTrailerMouse();
  const { t } = useTranslation("config", {
    keyPrefix: "generic",
  });

  const { push } = useRouter();

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
      <div
        className={css({
          display: "flex",
          gap: "0.5rem",
        })}
      >
        <LanguageButton
          onMouseEnter={transparentEnter}
          onMouseLeave={mouseLeave}
          onClick={() => push("/", "/", { locale: "pt" })}
        >
          🇧🇷 {"  "}
          {t("portuguese")}
        </LanguageButton>
        <LanguageButton
          onMouseEnter={transparentEnter}
          onMouseLeave={mouseLeave}
          onClick={() => push("/", "/", { locale: "en" })}
        >
          🇺🇸 {"  "}
          {t("english")}
        </LanguageButton>
      </div>
    </header>
  );
};
