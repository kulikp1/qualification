import css from "./SignUpPage.module.css";
import SignUpForm from "../SignUpForm/SignUpForm";
import { useTranslation } from "react-i18next";

export default function SignInPage() {
  const { t } = useTranslation();

  return (
    <div className={css.signInContainer}>
      <div>
        <h1 className={css.logo}>BudgetTrack</h1>
      </div>
      <div className={css.formContainer}>
        <h2 className={css.formDescr}>{t("signUpFormDescr")}</h2>

        <div className={css.formComponent}>
          <SignUpForm></SignUpForm>
        </div>
      </div>
    </div>
  );
}
