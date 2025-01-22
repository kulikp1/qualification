import AddSpendForm from "../AddSpendForm/AddSpendForm";
import css from "./AddSpendModal.module.css";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const AddSpendModal = () => {
  return (
    <div className={css.spendContainer}>
      <h2 className={css.spendTitle}>Edit the entered amount of water</h2>
      <div>
        <p className={css.spendDescr}>Correct entered data:</p>
        <p>Amount of water:</p>
        <div className={css.btnContainer}>
          <button>
            <CiCirclePlus className={css.btnPlus} />
          </button>
          <p className={css.btnAmount}>250 ml</p>
          <button>
            <CiCircleMinus className={css.btnMinus} />
          </button>
        </div>
        <AddSpendForm></AddSpendForm>
      </div>
    </div>
  );
};

export default AddSpendModal;
