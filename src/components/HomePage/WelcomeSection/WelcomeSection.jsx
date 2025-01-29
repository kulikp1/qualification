import css from "./WelcomeSection.module.css";
import { Link } from "react-router-dom";

const WelcomeSection = () => {
  return (
    <div className={css.mainContainer}>
      <div>
        <h1 className={css.logo}>BudgetTrack</h1>
      </div>
      <div>
        <p className={css.descr}>
          Record your expenses daily and view statistics
        </p>
        <h1 className={css.title}>Record your budget</h1>
        <div className={css.btns}>
          <Link to="/signup">
            <button className={css.btnSignUp}>Try tracker</button>
          </Link>
          <Link to="/signIn">
            <button className={css.btnSignIn}>Sign In</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
