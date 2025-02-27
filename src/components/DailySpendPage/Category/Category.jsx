import css from "./Category.module.css";
// import customer1 from "../../../assets/homePageAssets/pre-avatar.png";
import { AiOutlineTransaction } from "react-icons/ai";
import { FaPencil } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";

import { useState } from "react";
import DeleteModal from "../../Modals/DeleteModal/DeleteModal";
import EditModal from "../../Modals/EditSpendModal/EditSpendComponent/EditSpendComponent";
import Modal from "../../Modal/Modal";

const Category = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openDeleteModal = () => {
    if (!isDeleteModalOpen) {
      setIsDeleteModalOpen(true);
    }
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const openEditModal = () => {
    if (!isEditModalOpen) {
      setIsEditModalOpen(true);
    }
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Category</h1>
      <div className={css.categoryName}>
        <AiOutlineTransaction className={css.icon} />

        <div className={css.categorySpend}>
          {/* <h2 className={css.categoryDescr}>Shop</h2> */}
          <p className={css.amount}>100$</p>
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
          <EditModal />
        </Modal>
      )}
      {isDeleteModalOpen && (
        <Modal isOpen={isDeleteModalOpen} onClose={closeDeleteModal}>
          <DeleteModal onClose={closeDeleteModal} />
        </Modal>
      )}
    </div>
  );
};

export default Category;
