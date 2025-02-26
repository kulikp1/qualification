import { useState } from "react";
import styles from "./AddMoneyButton.module.css";
// import iconPlus from "../../assets/images/icons/icons.svg";
import Modal from "../Modal/Modal";
import AddSpendModal from "../Modals/AddSpendModal/AddSpendComponent/AddSpendComponent";
// import { useTranslation } from "react-i18next";
import { IoIosAdd } from "react-icons/io";

const AddMoneyButton = () => {
  // const { t } = useTranslation();
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
          {/* <svg className={styles.icon}>
            <use href={`${iconPlus}#icon-plus`}></use>
          </svg> */}
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
