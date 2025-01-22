import AddSpendForm from "../AddSpendForm/AddSpendComponent";
import css from "./AddSpend.module.css";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const AddSpendComponent = () => {
  return (
    <div className={css.spendContainer}>
      <div>
        <h2 className={css.spendTitle}>Add spend</h2>
      </div>
      <div>
        <p className={css.spendDescr}>Choose a value:</p>
        <p className={css.amountDescr}>Amount:</p>
        <div className={css.btnContainer}>
          <button className={css.formBtn}>
            <CiCircleMinus className={css.btnMinus} />
          </button>
          <p className={css.btnAmount}>50 ml</p>
          <button className={css.formBtn}>
            <CiCirclePlus className={css.btnPlus} />
          </button>
        </div>
        <AddSpendForm></AddSpendForm>
      </div>
    </div>
  );
};

export default AddSpendComponent;
