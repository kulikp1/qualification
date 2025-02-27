import { useState } from "react";

import AddSpendForm from "../EditSpendForm/EditSpendComponent";
import css from "./EditSpendComponent.module.css";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const EditSpendModal = () => {
  const [amount, setAmount] = useState(250); // Початкове значення

  const increaseAmount = () => {
    setAmount((prev) => prev + 10);
  };

  const decreaseAmount = () => {
    setAmount((prev) => (prev > 10 ? prev - 10 : prev));
  };

  return (
    <div className={css.spendContainer}>
      <div>
        <h2 className={css.spendTitle}>Edit the entered amount</h2>
      </div>
      <div>
        <p className={css.spendDescr}>Correct entered data:</p>
        <p className={css.amountDescr}>Amount:</p>
        <div className={css.btnContainer}>
          <button className={css.formBtn} onClick={decreaseAmount}>
            <CiCircleMinus className={css.btnMinus} />
          </button>
          <p className={css.btnAmount}>{amount} $</p>
          <button className={css.formBtn} onClick={increaseAmount}>
            <CiCirclePlus className={css.btnPlus} />
          </button>
        </div>
        <AddSpendForm></AddSpendForm>
      </div>
    </div>
  );
};

export default EditSpendModal;
