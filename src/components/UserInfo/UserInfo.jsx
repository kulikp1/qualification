import css from "./UserInfo.module.css";
import avatar from "../../assets/homePageAssets/pre-avatar.png";
import { SlArrowDown } from "react-icons/sl";

const UserInfo = () => {
  return (
    <div className={css.pageContainer}>
      <div className={css.Container}>
        <div className={css.description}>
          <h3>Months spend</h3>
        </div>

        <div className={css.userItems}>
          <h3>Pavlo</h3>
          <img src={avatar} alt="avatar" className={css.avatar} />
          <SlArrowDown className={css.icon} />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
