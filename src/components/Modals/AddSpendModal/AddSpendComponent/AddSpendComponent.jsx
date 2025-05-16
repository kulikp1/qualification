import { useState } from "react";
import AddSpendForm from "../AddSpendForm/AddSpendComponent";
import css from "./AddSpend.module.css";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const AddSpendComponent = ({ onClose }) => {
  const [amount, setAmount] = useState(50);

  const increaseAmount = () => {
    setAmount((prev) => prev + 10);
  };

  const decreaseAmount = () => {
    setAmount((prev) => (prev > 10 ? prev - 10 : prev));
  };

  const handleSuccess = () => {
    onClose(); // Закриває модалку
    window.location.reload(); // Перезавантажує сторінку
  };

  return (
    <div className={css.spendContainer}>
      <button className={css.close} onClick={onClose}>
        <IoClose className={css.closeBtnItem} />
      </button>
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
        <AddSpendForm
          amount={amount}
          setAmount={setAmount}
          onSuccess={handleSuccess}
        />
      </div>
    </div>
  );
};

export default AddSpendComponent;
