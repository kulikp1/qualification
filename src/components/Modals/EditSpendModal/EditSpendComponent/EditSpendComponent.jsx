import AddSpendForm from "../EditSpendForm/EditSpendComponent";
import css from "./EditSpendComponent.module.css";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const EditSpendModal = () => {
  return (
    <div className={css.spendContainer}>
      <div>
        <h2 className={css.spendTitle}>Edit the entered amount</h2>
      </div>
      <div>
        <p className={css.spendDescr}>Correct entered data:</p>
        <p className={css.amountDescr}>Amount:</p>
        <div className={css.btnContainer}>
          <button className={css.formBtn}>
            <CiCircleMinus className={css.btnMinus} />
          </button>
          <p className={css.btnAmount}>250 ml</p>
          <button className={css.formBtn}>
            <CiCirclePlus className={css.btnPlus} />
          </button>
        </div>
        <AddSpendForm></AddSpendForm>
      </div>
    </div>
  );
};

export default EditSpendModal;
