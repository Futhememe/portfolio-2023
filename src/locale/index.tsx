import { I18nextProvider, initReactI18next } from "react-i18next";
import i18n from "i18next";
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import brTranslation from "./br/config.json";
import enTranslation from "./en/config.json";

interface I18nProvider {
  children: ReactNode;
}

const resources = {
  pt: {
    config: brTranslation,
  },
  en: {
    config: enTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  debug: true,
  ns: ["translation", "common"],
  interpolation: {
    escapeValue: false,
  },
});

export const I18nProvider = ({ children }: I18nProvider) => {
  const { locale } = useRouter();

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
