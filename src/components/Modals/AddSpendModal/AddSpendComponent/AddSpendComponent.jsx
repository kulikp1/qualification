import { useState } from "react";
import AddSpendForm from "../AddSpendForm/AddSpendComponent";
import css from "./AddSpend.module.css";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const AddSpendComponent = ({ onClose }) => {
  const [amount, setAmount] = useState(50);

  const { t } = useTranslation();

  const increaseAmount = () => {
    setAmount((prev) => prev + 10);
  };

  const decreaseAmount = () => {
    setAmount((prev) => (prev > 10 ? prev - 10 : prev));
  };

  const handleSuccess = () => {
    onClose(); 
    window.location.reload(); 
  };

  return (
    <div className={css.spendContainer}>
      <button className={css.close} onClick={onClose}>
        <IoClose className={css.closeBtnItem} />
      </button>
      <div>
        <h2 className={css.spendTitle}>{t("addSpend")}</h2>
      </div>
      <div>
        <p className={css.spendDescr}>{t("chooseValue")}</p>
        <p className={css.amountDescr}>{t("amount")}</p>
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
