import css from "./MonthSpend.module.css";
import UserInfo from "../UserInfo/UserInfo";
import Calendar from "./Calendar/Calendar";
import MonthName from "../MonthSpend/MonthName/MonthName";
import AddSpendButton from "../AddMoneyButton/AddMoneyButton";

const MonthsSpend = () => {
  return (
    <div className={css.Container}>
      <UserInfo></UserInfo>

      <div className={css.spendItems}>
        <h3 className={css.descr}>Month</h3>
        <MonthName></MonthName>

        <AddSpendButton></AddSpendButton>
      </div>

      <Calendar></Calendar>
    </div>
  );
};

export default MonthsSpend;
