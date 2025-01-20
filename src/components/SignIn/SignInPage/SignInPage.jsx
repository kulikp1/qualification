import css from "./SignInPage.module.css";
import SignInForm from "../SignInForm/SignInForm";

export default function SignInPage() {
  return (
    <div className={css.signInContainer}>
      <SignInForm></SignInForm>
    </div>
  );
}
