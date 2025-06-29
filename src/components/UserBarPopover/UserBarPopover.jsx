import styles from "./UserBarPopover.module.css";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";

import Modal from "../Modal/Modal";
import UserSettingsPage from "../UserSettingsPage/UserSettingsPage";
import LogOutModal from "../Modals/LogOutModal/LogOutModal";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const UserBarPopover = ({ isVisible, onClose }) => {
  const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);
  const [isLogOutModalOpen, setLogOutModalOpen] = useState(false);
  const popoverRef = useRef(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const openSettingsModal = () => setSettingsModalOpen(true);
  const closeSettingsModal = () => setSettingsModalOpen(false);
  const openLogOutModal = () => setLogOutModalOpen(true);
  const closeLogOutModal = () => setLogOutModalOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

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
        <IoSettingsOutline className={styles.popoverImg} />
        {t("settings")}
      </button>

      <button className={styles.buttonOut} onClick={openLogOutModal}>
        <IoLogOutOutline className={styles.popoverImg} />
        {t("logout")}
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
          <LogOutModal onClose={closeLogOutModal} onLogout={handleLogout} />
        </Modal>
      )}
    </div>
  );
};

export default UserBarPopover;
