import { useState } from "react";
import styles from "./AddMoneyButton.module.css";
import Modal from "../Modal/Modal";
import AddSpendModal from "../Modals/AddSpendModal/AddSpendComponent/AddSpendComponent";
import { IoIosAdd } from "react-icons/io";

const AddMoneyButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button className={styles.addSpendButton}>
        <div className={styles.containerSvg} onClick={openModal}>
          <IoIosAdd className={styles.icon} />
        </div>
        <span className={styles.text}>{"Add spend"}</span>
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AddSpendModal onClose={closeModal} />
      </Modal>
    </>
  );
};

export default AddMoneyButton;
