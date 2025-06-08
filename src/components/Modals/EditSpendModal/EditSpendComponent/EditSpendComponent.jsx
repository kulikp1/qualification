import { useState } from "react";
import EditSpendForm from "../EditSpendForm/EditSpendComponent";
import css from "./EditSpendComponent.module.css";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const EditSpendModal = ({ onClose, onSuccess, spendId, initialData }) => {
  const [amount, setAmount] = useState(Number(initialData?.amount) || 0);

  const { t } = useTranslation();

  const increaseAmount = () => {
    setAmount((prev) => prev + 10);
  };

  const decreaseAmount = () => {
    setAmount((prev) => (prev > 10 ? prev - 10 : prev));
  };

  return (
    <div className={css.spendContainer}>
      <button className={css.close} onClick={onClose}>
        <IoClose className={css.closeBtnItem} />
      </button>
      <div>
        <h2 className={css.spendTitle}>{t("editAmountTitle")}</h2>
      </div>
      <div>
        <p className={css.spendDescr}>{t("correctData")}</p>
        <p className={css.amountDescr}>{t("amountLabel")}</p>
        <div className={css.btnContainer}>
          <button className={css.formBtn} onClick={decreaseAmount}>
            <CiCircleMinus className={css.btnMinus} />
          </button>
          <p className={css.btnAmount}>{amount} $</p>
          <button className={css.formBtn} onClick={increaseAmount}>
            <CiCirclePlus className={css.btnPlus} />
          </button>
        </div>
        <EditSpendForm
          amount={amount}
          setAmount={setAmount}
          spendId={spendId}
          onSuccess={onSuccess}
          initialCategory={initialData?.category || ""}
          initialTime={initialData?.recordingTime || ""}
        />
      </div>
    </div>
  );
};

export default EditSpendModal;
