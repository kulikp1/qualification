import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import "./App.css";

import "../../i18n/i18n.js";

import HomePage from "../../pages/HomePage/HomePage.jsx";
import TrackerPage from "../../pages/TrackerPage/TrackerPage.jsx";
import SignInPage from "../../pages/SignInPage/SignInPage.jsx";
import SignUpPage from "../../pages/SignUpPage/SignUpPage.jsx";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage.jsx";

import SharedLayout from "../SharedLayout/SharedLayout.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    console.log("Current language:", i18n.language);

    if (i18n.language === "uk") {
      document.body.classList.add("font-ukrainian");
      document.body.classList.remove("font-default");
    } else {
      document.body.classList.add("font-default");
      document.body.classList.remove("font-ukrainian");
    }
  }, [i18n.language]);

  return (
    <SharedLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/signIn" element={<SignInPage />} />
        <Route
          path="/tracker"
          element={
            <PrivateRoute>
              <TrackerPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </SharedLayout>
  );
}

export default App;
