import { useState } from "react";
import css from "./MonthSpend.module.css";
import UserInfo from "../UserInfo/UserInfo";
import Calendar from "./Calendar/Calendar";
import AddSpendButton from "../AddMoneyButton/AddMoneyButton";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const MonthsSpend = () => {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const handlePrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <div className={css.Container}>
      <UserInfo />

      <div className={css.spendItems}>
        <h3 className={css.descr}>Month</h3>

        <div className={css.monthSwitcher}>
          <button onClick={handlePrevMonth} className={css.arrowBtn}>
            ←
          </button>
          <span className={css.monthName}>
            {monthNames[month]} {year}
          </span>
          <button onClick={handleNextMonth} className={css.arrowBtn}>
            →
          </button>
        </div>

        <AddSpendButton />
      </div>

      <Calendar month={month} year={year} />
    </div>
  );
};

export default MonthsSpend;
