import css from "./LogOutModal.module.css";

const LogOutModal = ({ onClose }) => {
  return (
    <div className={css.logOutContainer}>
      <h1 className={css.logOutTitle}>Log out</h1>
      <p className={css.logOutDescr}>Do you really want to leave?</p>

      <div className={css.logOutBtns}>
        <button className={css.btnLogOut}>Log out</button>
        <button className={css.btnCancel} onClick={onClose}>
          Cancel{" "}
        </button>
      </div>
    </div>
  );
};

export default LogOutModal;
