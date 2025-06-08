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
      noRecords: "No records on this day",
      loading: "Loading...",
          error: "Error: {{error}}",
          monthStatistic: "Month statistic",
          monthLabel: "{{month}} {{year}}",
          spendingCalendar: "Spending calendar",
          month: "Month",
          addSpend: "Add spend",
          chooseValue: "Choose a value:",
          amount: "Amount:",
          enterCategory: "Enter Category",
          recordingTime: "Recording time:",
          enterSpendValue: "Enter the value of spend:",
          save: "Save",
          deleteEntryTitle: "Delete entry",
      deleteEntryConfirmation: "Are you sure you want to delete the entry?",
      delete: "Delete",
          cancel: "Cancel",
          editAmountTitle: "Edit the entered amount",
          correctData: "Correct entered data:",
          amountLabel: "Amount:",
          settings: "Settings",
          logout: "Log out",
          logoutTitle: "Log out",
          logoutConfirm: "Do you really want to leave?",
          happyCustomersStart: "Our",
          happyCustomersHighlight: "happy",
          happyCustomersEnd: "customers",
          logo: "BudgetTrack",
          description: "Record your expenses daily and view statistics",
          recordBudgetTitle: "Record your budget",
          tryTrackerBtn: "Try tracker",
          signInBtn: "Sign In",
          emailLabel: "Email",
          passwordLabel: "Password",
          againPasswordLabel: "Repeat password",
          signUpFormDescr: "Sign Up",
          signInFormDescr: "Sign In",
          placeholderEmail: "Enter your email",
          placeholderPassword: "Enter your password",
          placeholderRepeatPassword: "Repeat password",
          signingIn: "Signing in...",
      signIn: "Sign In",
      registering: "Registering...",
      signUp: "Sign Up",
      spentOnDate: "You spent {{amount}}$ on {{date}}",
      yourName: "Your Name",
      email: "Email",
      maxDailySpending: "Maximum Daily Spending",
      uploadPhoto: "Upload a photo",
      









    },
  },
  uk: {
    translation: {
      greeting: "Привіт",
      spentToday: "Сьогодні ви витратили {{amount}}$",
      filterCategory: "Фільтрувати за категорією",
      noRecords: "Немає записів за цей день",
      loading: "Завантаження...",
          error: "Помилка: {{error}}",
          monthStatistic: "Статистика за місяць",
          monthLabel: "{{month}} {{year}}",
          spendingCalendar: "Календар витрат",
          month: "Місяць",
          addSpend: "Додати витрату",
          chooseValue: "Виберіть значення:",
          amount: "Сума:",
          enterCategory: "Введіть категорію",
          recordingTime: "Час запису:",
          enterSpendValue: "Введіть суму витрати:",
          save: "Зберегти",
          deleteEntryTitle: "Видалити запис",
      deleteEntryConfirmation: "Ви впевнені, що хочете видалити запис?",
      delete: "Видалити",
          cancel: "Скасувати",
          editAmountTitle: "Редагувати введену суму",
          correctData: "Виправте введені дані:",
          amountLabel: "Сума:",
          settings: "Налаштування",
          logout: "Вийти",
         
      logoutTitle: "Вихід",
          logoutConfirm: "Ви дійсно хочете вийти?",
          happyCustomersStart: "Наші",
          happyCustomersHighlight: "щасливі",
          happyCustomersEnd: "клієнти",
          logo: "BudgetTrack",
          description: "Щоденно фіксуйте свої витрати та переглядайте статистику",
          recordBudgetTitle: "Записуйте свій бюджет",
          tryTrackerBtn: "Спробувати трекер",
          signInBtn: "Увійти",
          emailLabel: "Електронна пошта",
          passwordLabel: "Пароль",
          againPasswordLabel: "Повторіть пароль",
          signUpFormDescr: "Зареєструватись",
          signInFormDescr: "Увійти",
          placeholderEmail: "Введіть вашу пошту",
      placeholderPassword: "Введіть ваш пароль",
          placeholderRepeatPassword: "Повторіть пароль",
          signingIn: "Вхід...",
          signIn: "Увійти",
          registering: "Реєстрація...",
      signUp: "Зареєструватися",
      spentOnDate: "Ви витратили {{amount}}$ {{date}}",
      yourName: "Ваше ім’я",
      email: "Електронна пошта",
      maxDailySpending: "Максимальні щоденні витрати",
      uploadPhoto: "Завантажте фото",
      





     




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
