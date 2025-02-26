import styles from "./UserBarPopover.module.css";
// import iconMenu from "../../assets/images/icons/icons.svg";
import Modal from "../Modal/Modal";
import UserSettingsPage from "../UserSettingsPage/UserSettingsPage";
import LogOutModal from "../Modals/LogOutModal/LogOutModal";
import { useState, useRef, useEffect } from "react";
// import { useTranslation } from "react-i18next";

const UserBarPopover = ({ isVisible, onClose }) => {
  //   const { t } = useTranslation();
  const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);
  const [isLogOutModalOpen, setLogOutModalOpen] = useState(false);
  const popoverRef = useRef(null);

  const openSettingsModal = () => setSettingsModalOpen(true);
  const closeSettingsModal = () => setSettingsModalOpen(false);
  const openLogOutModal = () => setLogOutModalOpen(true);
  const closeLogOutModal = () => setLogOutModalOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible, onClose]);

  return (
    <div
      ref={popoverRef}
      className={`${styles.popover} ${
        isVisible ? styles.popoverVisible : styles.hidden
      }`}
    >
      <button className={styles.button} onClick={openSettingsModal}>
        {/* <svg className={styles.icon}>
          <use href={`${iconMenu}#icon-settings`}></use>
        </svg> */}
        {"Settings"}
      </button>
      <button className={styles.buttonOut} onClick={openLogOutModal}>
        {/* <svg className={styles.iconOut}>
          <use href={`${iconMenu}#icon-log-out`}></use>
        </svg> */}
        {"Log out"}
      </button>

      {isSettingsModalOpen && (
        <Modal
          isOpen={isSettingsModalOpen}
          onClose={closeSettingsModal}
          isSettingsModalOpen={isSettingsModalOpen}
        >
          <UserSettingsPage onClose={closeSettingsModal} />
        </Modal>
      )}

      {isLogOutModalOpen && (
        <Modal isOpen={isLogOutModalOpen} onClose={closeLogOutModal}>
          <LogOutModal onClose={closeLogOutModal} />
        </Modal>
      )}
    </div>
  );
};

export default UserBarPopover;
