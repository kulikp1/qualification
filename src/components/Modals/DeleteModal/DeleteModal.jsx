import css from "./DeleteModal.module.css";
import { IoClose } from "react-icons/io5";
import axios from "axios";

const DeleteModal = ({ entryId, onClose, onSuccess }) => {
  const token = localStorage.getItem("token");

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/money/${entryId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (onSuccess) {
        onSuccess(); // Повідомити про успішне видалення
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
      <h1 className={css.deleteTitle}>Delete entry</h1>
      <p className={css.deleteDescr}>
        Are you sure you want to delete the entry?
      </p>

      <div className={css.deleteBtns}>
        <button className={css.btnDelete} onClick={handleDelete}>
          Delete
        </button>
        <button className={css.btnCancel} onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
