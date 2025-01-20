import SignInForm from "../../components/SignInPage/SignInForm/SignInForm";
import SignInBackground from "../../components/SignInPage/SignInBackground/SignInBackground";

import styles from "./SignInPage.module.css";

export default function SignInPage() {
  return (
    <div className={styles.signInPageContainer}>
      <SignInForm />
      <SignInBackground />
    </div>
  );
}
