import css from "./DeleteModal.module.css";

const DeleteModal = ({ onClose }) => {
  return (
    <div className={css.deleteContainer}>
      <h1 className={css.deleteTitle}>Delete entry</h1>
      <p className={css.deleteDescr}>
        Are you sure you want to delete the entry?
      </p>

      <div className={css.deleteBtns}>
        <button className={css.btnDelete}>Delete</button>
        <button className={css.btnCancel} onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};
export default DeleteModal;
