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

  return (
    <div className={css.container}>
      <h1 className={css.title}>{name}</h1>
      <div className={css.categoryName}>
        <AiOutlineTransaction className={css.icon} />
        <div className={css.categorySpend}>
          <p className={css.amount}>{amount}$</p>
        </div>
      </div>
      <div className={css.btnContainer}>
        <button className={css.deleteBtn} onClick={openDeleteModal}>
          <RiDeleteBin6Line className={css.changeIcon} />
        </button>

        <button className={css.changeBtn} onClick={openEditModal}>
          <FaPencil className={css.changeIcon} />
        </button>
      </div>

      {isEditModalOpen && (
        <Modal isOpen={isEditModalOpen} onClose={closeEditModal}>
          <EditModal
            spendId={id}
            onClose={closeEditModal}
            initialData={{
              amount,
              category: name,
              recordingTime: recordingTime || "14:30", // Постав дефолт або реальні дані
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
