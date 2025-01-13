import css from "./WelcomeSection.module.css";

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
          <button className={css.btnSignUp}>Try tracker</button>
          <button className={css.btnSignIn}>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
