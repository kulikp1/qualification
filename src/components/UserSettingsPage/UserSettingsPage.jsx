import css from "./UserSettingsPage.module.css";
import { IoClose } from "react-icons/io5";
import userAvatar from "../../assets/homePageAssets/pre-avatar.png";
import { BsUpload } from "react-icons/bs";
import SettingsForm from "./SettingsForm/SettingsForm";

const UserSettingsPage = () => {
  return (
    <div className={css.settingsContainer}>
      <div className={css.settingsTitle}>
        <h2 className={css.settingsTitleItem}>Setting</h2>
        <button className={css.closeBtn}>
          <IoClose className={css.closeBtnItem} />
        </button>
      </div>

      <div className={css.avatarItems}>
        <img src={userAvatar} alt="userAvatar" className={css.avatar} />
        <div className={css.avatarItem}>
          <button className={css.uploadBtn}>
            <BsUpload />
          </button>
          <p className={css.avatarDescr}>Upload a photo</p>
        </div>
      </div>

      <div className={css.settingsController}>
        <SettingsForm></SettingsForm>
      </div>
    </div>
  );
};

export default UserSettingsPage;
