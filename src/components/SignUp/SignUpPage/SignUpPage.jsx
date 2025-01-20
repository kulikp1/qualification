import css from "./SignUpPage.module.css";
import SignUpForm from "../SignUpForm/SignUpForm";

export default function SignInPage() {
  return (
    <div className={css.signInContainer}>
      <div>
        <h1 className={css.logo}>BudgetTrack</h1>
      </div>
      <div className={css.formContainer}>
        <h2 className={css.formDescr}>Sign In</h2>
        <div className={css.formComponent}>
          <SignUpForm></SignUpForm>
        </div>
      </div>
    </div>
  );
}
