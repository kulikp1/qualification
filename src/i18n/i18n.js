// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      greeting: "Hello",
      spentToday: "Today you spent {{amount}}$",
      filterCategory: "Filter by category",
      noRecords: "No records for this category on this day",
      loading: "Loading...",
          error: "Error: {{error}}",
          monthStatistic: "Month statistic",

    },
  },
  uk: {
    translation: {
      greeting: "Привіт",
      spentToday: "Сьогодні ви витратили {{amount}}$",
      filterCategory: "Фільтрувати за категорією",
      noRecords: "Немає записів для цієї категорії за цей день",
      loading: "Завантаження...",
          error: "Помилка: {{error}}",
          monthStatistic: "Статистика за місяць",

    },
  },
};

const savedLang = localStorage.getItem("lang") || "uk";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLang,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
