import css from "./LogOutModal.module.css";
import { IoClose } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const LogOutModal = ({ onClose, onLogout }) => {
  const { t } = useTranslation();

  return (
    <div className={css.logOutContainer}>
      <button className={css.close} onClick={onClose}>
        <IoClose className={css.closeBtnItem} />
      </button>

      <h1 className={css.logOutTitle}>{t("logoutTitle")}</h1>

      <p className={css.logOutDescr}>{t("logoutConfirm")}</p>

      <div className={css.logOutBtns}>
        <button className={css.btnLogOut} onClick={onLogout}>
          {t("logout")}
        </button>
        <button className={css.btnCancel} onClick={onClose}>
          {t("cancel")}
        </button>
      </div>
    </div>
  );
};

export default LogOutModal;
