import css from "./UserSettingsPage.module.css";
import { IoClose } from "react-icons/io5";

const UserSettingsPage = () => {
  return (
    <div className={css.settingsContainer}>
      <div className={css.settingsTitle}>
        <h2 className={css.settingsTitleItem}>Setting</h2>
        <button className={css.closeBtn}>
          <IoClose className={css.closeBtnItem} />
        </button>
      </div>
    </div>
  );
};

export default UserSettingsPage;
