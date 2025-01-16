import css from "./MonthSpend.module.css";
import UserInfo from "../UserInfo/UserInfo";
import { IoIosAdd } from "react-icons/io";
import Calendar from "./Calendar/Calendar";

const MonthsSpend = () => {
  return (
    <div className={css.Container}>
      <UserInfo></UserInfo>

      <div className={css.spendItems}>
        <h3 className={css.descr}>Month</h3>
        <div className={css.btnItem}>
          <button className={css.addBtn}>
            <IoIosAdd />
          </button>
          <h3 className={css.addBtnText}>Add spend</h3>
        </div>
      </div>

      <Calendar></Calendar>
    </div>
  );
};

export default MonthsSpend;
