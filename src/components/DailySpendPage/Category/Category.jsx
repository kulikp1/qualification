import css from "./Category.module.css";
import { AiOutlineTransaction } from "react-icons/ai";
import { FaPencil } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";

import { useState } from "react";
import DeleteModal from "../../Modals/DeleteModal/DeleteModal";
import EditModal from "../../Modals/EditSpendModal/EditSpendComponent/EditSpendComponent";
import Modal from "../../Modal/Modal";

const Category = ({ id, name, amount, recordingTime, onDeleteSuccess }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentAmount, setCurrentAmount] = useState(amount);
  const [currentName, setCurrentName] = useState(name);
  const [currentTime, setCurrentTime] = useState(recordingTime || "14:30");
  console.log("recordingTime prop:", recordingTime);

  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);

  const handleDeleteSuccess = () => {
    closeDeleteModal();
    if (onDeleteSuccess) {
      onDeleteSuccess(id);
    }
  };

  const handleEditSuccess = (updatedData) => {
    setCurrentAmount(updatedData.amount);
    setCurrentName(updatedData.category);
    setCurrentTime(updatedData.recordingTime);
    closeEditModal();
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>{currentName}</h1>

      <div className={css.contentRow}>
        <div className={css.leftSection}>
          <AiOutlineTransaction className={css.icon} />
          <div className={css.categorySpend}>
            <p className={css.amount}>{currentAmount}$</p>
            <p className={css.time}>{currentTime}</p>
          </div>
        </div>

        <div className={css.btnContainer}>
          <button className={css.changeBtn} onClick={openEditModal}>
            <FaPencil className={css.changeIcon} />
          </button>
          <button className={css.deleteBtn} onClick={openDeleteModal}>
            <RiDeleteBin6Line className={css.changeIcon} />
          </button>
        </div>
      </div>

      {isEditModalOpen && (
        <Modal isOpen={isEditModalOpen} onClose={closeEditModal}>
          <EditModal
            spendId={id}
            onClose={closeEditModal}
            onSuccess={handleEditSuccess}
            initialData={{
              amount: currentAmount,
              category: currentName,
              recordingTime: currentTime,
            }}
          />
        </Modal>
      )}

      {isDeleteModalOpen && (
        <Modal isOpen={isDeleteModalOpen} onClose={closeDeleteModal}>
          <DeleteModal
            entryId={id}
            onClose={closeDeleteModal}
            onSuccess={handleDeleteSuccess}
          />
        </Modal>
      )}
    </div>
  );
};

export default Category;
