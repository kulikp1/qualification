import css from "./SignInPage.module.css";
import SignInForm from "../SignInForm/SignInForm";
import { useTranslation } from "react-i18next";

export default function SignInPage() {
  const { t } = useTranslation();

  return (
    <div className={css.signInContainer}>
      <div>
        <h1 className={css.logo}>BudgetTrack</h1>
      </div>
      <div className={css.formContainer}>
        <h2 className={css.formDescr}>{t("signInFormDescr")}</h2>
        <div className={css.formComponent}>
          <SignInForm></SignInForm>
        </div>
      </div>
    </div>
  );
}
