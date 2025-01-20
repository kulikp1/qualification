import css from "./SignInPage.module.css";
import SignInForm from "../SignInForm/SignInForm";

export default function SignInPage() {
  return (
    <div className={css.signInContainer}>
      <div>
        <h1 className={css.logo}>BudgetTrack</h1>
      </div>
      <div className={css.formContainer}>
        <h2 className={css.formDescr}>Sign In</h2>
        <div className={css.formComponent}>
          <SignInForm></SignInForm>
        </div>
      </div>
    </div>
  );
}
