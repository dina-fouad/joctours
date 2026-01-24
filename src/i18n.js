import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// EN
import enGuides from "./locales/en/guides.json";
import enTours from "./locales/en/tours.json";
import enPrograms from "./locales/en/programmes.json";
import enCommon from "./locales/en/common.json";

// RU
import ruGuides from "./locales/ru/guides.json";
import ruTours from "./locales/ru/tours.json";
import ruPrograms from "./locales/ru/programmes.json";
import ruCommon from "./locales/ru/common.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        guides: enGuides,
        tours: enTours,
        programs: enPrograms
      },
      ru: {
        common: ruCommon,
        guides: ruGuides,
        tours: ruTours,
        programs: ruPrograms
      }
    },

    lng: "en",
    fallbackLng: "en",

    ns: ["common", "guides", "tours", "programs"],
    defaultNS: "common",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

