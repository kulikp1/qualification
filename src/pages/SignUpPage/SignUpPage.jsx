// import SignInForm from "../../components/SignIn/SignInForm/SignInForm";
import AdvantagesSection from "../../components/HomePage/AdvantagesSection/AdvantagesSection";
import styles from "./SignUpPage.module.css";
import SignInPageComponent from "../../components/SignUp/SignUpPage/SignUpPage";
export default function SignInPage() {
  return (
    <div className={styles.signInPageContainer}>
      <SignInPageComponent />
      <AdvantagesSection />
    </div>
  );
}
