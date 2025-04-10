import AdvantagesSection from "../../components/HomePage/AdvantagesSection/AdvantagesSection";
import styles from "./SignInPage.module.css";
import SignInPageComponent from "../../components/SignIn/SignInPage/SignInPage";
export default function SignInPage() {
  return (
    <div className={styles.signInPageContainer}>
      <SignInPageComponent />
      <div className={styles.signInAdv}>
        <AdvantagesSection />
      </div>
    </div>
  );
}
