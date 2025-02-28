import css from "./LogOutModal.module.css";
import { IoClose } from "react-icons/io5";

const LogOutModal = ({ onClose }) => {
  return (
    <div className={css.logOutContainer}>
      <button className={css.close} onClick={onClose}>
        <IoClose className={css.closeBtnItem} />
      </button>
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
