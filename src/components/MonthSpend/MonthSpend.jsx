import css from "./MonthSpend.module.css";
import UserInfo from "../UserInfo/UserInfo";

const MonthsSpend = () => {
  return (
    <div className={css.Container}>
      <div>
        <UserInfo></UserInfo>
      </div>
    </div>
  );
};

export default MonthsSpend;
