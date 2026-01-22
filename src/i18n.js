import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// استيراد ملفات JSON لكل لغة من src/locales
import enGuides from "./locales/en/guides.json";
import ruGuides from "./locales/ru/guides.json";

import enTours from "./locales/en/tours.json";
import ruTours from "./locales/ru/tours.json";

import enPrograms from "./locales/en/programmes.json";
import ruPrograms from "./locales/ru/programmes.json";

// تهيئة i18next
i18n
  .use(initReactI18next) // يربط i18next مع React
  .init({
    resources: {
      en: {
        guides: enGuides,
        tours: enTours,
        programs: enPrograms
      },
      ru: {
        guides: ruGuides,
        tours: ruTours,
        programs: ruPrograms
      }
    },
    lng: "en",           // اللغة الافتراضية عند تحميل الموقع
    fallbackLng: "en",   // اللغة الاحتياطية إذا النص مفقود
    ns: ["guides", "tours", "programs"], // أسماء namespaces
    defaultNS: "guides",                 // namespace افتراضي
    interpolation: {
      escapeValue: false // React يحمي النصوص من XSS
    }
  });

export default i18n;
