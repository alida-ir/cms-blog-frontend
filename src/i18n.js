import i18n from "i18next";
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translate.json";
import translationFA from "./locales/fa/translate.json";

const resources = {
  en: {
    translation: translationEN,
  },
  fa: {
    translation: translationFA,
  },
};


i18n
  .use(initReactI18next)
  .use(Backend)
  .use(LanguageDetector)
  .init({
    resources,
    debug: false ,
    lng: "fa",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;