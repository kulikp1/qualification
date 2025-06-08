import { useState } from "react";
import css from "./UserSettingsPage.module.css";
import { IoClose } from "react-icons/io5";
import userAvatar from "../../assets/homePageAssets/pre-avatar.png";
import { BsUpload } from "react-icons/bs";
import SettingsForm from "./SettingsForm/SettingsForm";
import { useTranslation } from "react-i18next";

const UserSettingsPage = ({ onClose }) => {
  const { t } = useTranslation();

  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [previewURL, setPreviewURL] = useState(userAvatar);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedPhoto(file);
      setPreviewURL(URL.createObjectURL(file));
    }
  };

  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <div className={css.settingsTitle}>
          <h2 className={css.settingsTitleItem}>{t("settings")}</h2>
          <button className={css.closeBtn} onClick={onClose}>
            <IoClose className={css.closeBtnItem} />
          </button>
        </div>

        <div className={css.avatarItems}>
          <img src={previewURL} alt="userAvatar" className={css.avatar} />
          <div className={css.avatarItem}>
            <label htmlFor="avatar-upload" className={css.uploadBtn}>
              <BsUpload />
            </label>
            <input
              type="file"
              id="avatar-upload"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handlePhotoChange}
            />
            <p className={css.avatarDescr}>{t("uploadPhoto")}</p>
          </div>
        </div>

        <div className={css.settingsController}>
          <SettingsForm selectedPhoto={selectedPhoto} />
        </div>
      </div>
    </div>
  );
};

export default UserSettingsPage;
