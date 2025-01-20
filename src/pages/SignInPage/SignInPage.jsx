import SignInForm from "../../components/SignInPage/SignInForm/SignInForm";
import AdvantagesSetion from "../../components/HomePage/AdvantagesSection/AdvantagesSection";
import styles from "./SignInPage.module.css";

export default function SignInPage() {
  return (
    <div className={styles.signInPageContainer}>
      <SignInForm />
      <AdvantagesSetion />
    </div>
  );
}
