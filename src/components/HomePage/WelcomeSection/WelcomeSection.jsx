import css from "./WelcomeSection.module.css";
import { Link } from "react-router-dom";
import LanguageSwitcher from "../../LanguageSwitcher/LanguageSwitcher";

import { useTranslation } from "react-i18next";

const WelcomeSection = () => {
  const { t } = useTranslation();

  return (
    <div className={css.mainContainer}>
      <div>
        <h1 className={css.logo}>{t("logo")}</h1>
        <LanguageSwitcher />
      </div>
      <div>
        <p className={css.descr}>{t("description")}</p>
        <h1 className={css.title}>{t("recordBudgetTitle")}</h1>
        <div className={css.btns}>
          <Link to="/signup">
            <button className={css.btnSignUp}>{t("tryTrackerBtn")}</button>
          </Link>
          <Link to="/signIn">
            <button className={css.btnSignIn}>{t("signInBtn")}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
