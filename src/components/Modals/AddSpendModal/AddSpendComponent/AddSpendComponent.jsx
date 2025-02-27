import { useState } from "react";
import AddSpendForm from "../AddSpendForm/AddSpendComponent";
import css from "./AddSpend.module.css";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const AddSpendComponent = () => {
  const [amount, setAmount] = useState(50); // Початкове значення

  const increaseAmount = () => {
    setAmount((prev) => prev + 10); // Збільшення на 10 мл
  };

  const decreaseAmount = () => {
    setAmount((prev) => (prev > 10 ? prev - 10 : prev)); // Мінімальне значення — 10 мл
  };

  return (
    <div className={css.spendContainer}>
      <div>
        <h2 className={css.spendTitle}>Add spend</h2>
      </div>
      <div>
        <p className={css.spendDescr}>Choose a value:</p>
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
        <AddSpendForm amount={amount} />
      </div>
    </div>
  );
};

export default AddSpendComponent;
