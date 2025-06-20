/* eslint-disable no-unused-vars */
import React from "react";
import { useTranslation } from "react-i18next";
import css from "./LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "uk" ? "en" : "uk";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang); 
  };

  return (
    <button onClick={toggleLanguage} className={css.langButton}>
      {i18n.language === "uk" ? "🇬🇧 English" : "🇺🇦 Українська"}
    </button>
  );
};

export default LanguageSwitcher;
