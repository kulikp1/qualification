import css from "./Spend.module.css";
import Category from "../Category/Category";

const Spend = () => {
  return (
    <div className={css.mainContainer}>
      <div>
        <h1 className={css.logo}>BudgetTrack</h1>
      </div>
      <div className={css.mainSpendsContainer}>
        <h1 className={css.title}>Hello, Pavlo!</h1>
        <h2 className={css.descr}>
          Today you spent 100 on the following categories:
        </h2>
      </div>
      <div className={css.categories}>
        <Category></Category>
        <Category></Category>
        <Category></Category>
      </div>
    </div>
  );
};

export default Spend;
