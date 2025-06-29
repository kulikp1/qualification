import { useState } from "react";
import styles from "./AddMoneyButton.module.css";
import Modal from "../Modal/Modal";
import AddSpendModal from "../Modals/AddSpendModal/AddSpendComponent/AddSpendComponent";
import { IoIosAdd } from "react-icons/io";
import { useTranslation } from "react-i18next";

const AddMoneyButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button className={styles.addSpendButton} onClick={openModal}>
        <div className={styles.containerSvg}>
          <IoIosAdd className={styles.icon} />
        </div>
        <span className={styles.text}>{t("addSpend")}</span>
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AddSpendModal key={i18n.language} onClose={closeModal} />
      </Modal>
    </>
  );
};

export default AddMoneyButton;
