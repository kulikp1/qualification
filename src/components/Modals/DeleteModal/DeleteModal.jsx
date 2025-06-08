import css from "./DeleteModal.module.css";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import { useTranslation } from "react-i18next";

const DeleteModal = ({ entryId, onClose, onSuccess }) => {
  const token = localStorage.getItem("token");

  const { t } = useTranslation();

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/money/${entryId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error(
        "Помилка при видаленні:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className={css.deleteContainer}>
      <button className={css.close} onClick={onClose}>
        <IoClose className={css.closeBtnItem} />
      </button>
      <h1 className={css.deleteTitle}>{t("deleteEntryTitle")}</h1>
      <p className={css.deleteDescr}>{t("deleteEntryConfirmation")}</p>

      <div className={css.deleteBtns}>
        <button className={css.btnDelete} onClick={handleDelete}>
          {t("delete")}
        </button>
        <button className={css.btnCancel} onClick={onClose}>
          {t("cancel")}
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
