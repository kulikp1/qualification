import { useEffect } from "react";
import css from "./EditSpendComponent.module.css";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useTranslation } from "react-i18next";

const SyncAmountWithFormik = ({ amount }) => {
  const { values, setFieldValue } = useFormikContext();

  useEffect(() => {
    if (values.amount !== amount.toString()) {
      setFieldValue("amount", amount.toString());
    }
  }, [amount, values.amount, setFieldValue]);

  return null;
};

const EditSpendForm = ({
  amount,
  setAmount,
  spendId,
  onSuccess,
  initialCategory,
  initialTime,
}) => {
  const token = localStorage.getItem("token");

  const { t } = useTranslation();

  const validationSchema = Yup.object({
    amount: Yup.number()
      .required("Введіть значення")
      .min(10, "Мінімальне значення 10")
      .max(100000, "Максимальне значення 100000"),
    category: Yup.string()
      .required("Оберіть категорію")
      .min(2, "Мінімум 2 символи"),
    recordingTime: Yup.string()
      .required("Введіть час запису")
      .matches(
        /^([0-9]|1\d|2[0-3]):([0-5]\d)$/,
        "Невірний формат часу (наприклад 07:30)"
      ),
  });

  return (
    <Formik
      enableReinitialize
      initialValues={{
        amount: amount.toString(),
        category: initialCategory,
        recordingTime: initialTime,
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        if (!spendId) {
          console.error("❌ spendId відсутній. Неможливо оновити.");
          return;
        }

        try {
          const response = await axios.patch(
            `http://localhost:3000/money/${spendId}`,
            {
              value: Number(values.amount),
              category: values.category,
              time: values.recordingTime,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          console.log("✅ Успішно оновлено:", response.data);
          resetForm();
          setAmount(0);
          if (onSuccess)
            onSuccess({
              amount: values.amount,
              category: values.category,
              recordingTime: values.recordingTime,
            });
        } catch (error) {
          console.error(
            "❌ Помилка оновлення:",
            error.response?.data || error.message
          );
        }
      }}
    >
      {({ values, setFieldValue }) => {
        const handleAmountChange = (e) => {
          const inputValue = e.target.value.replace(/\D/g, "");
          setFieldValue("amount", inputValue);
          setAmount(inputValue);
        };

        return (
          <Form>
            <SyncAmountWithFormik amount={amount} />

            <div className={css.formContainer}>
              <label className={css.valueDescr} htmlFor="category">
                {t("enterCategory")}
              </label>
              <Field
                className={css.formField}
                type="text"
                id="category"
                name="category"
                placeholder="Shop"
              />
              <ErrorMessage
                name="category"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <div className={css.formContainer}>
              <label className={css.formDescr} htmlFor="recordingTime">
                {t("recordingTime")}
              </label>
              <Field
                className={css.formField}
                type="text"
                id="recordingTime"
                name="recordingTime"
                placeholder="14:30"
              />
              <ErrorMessage
                name="recordingTime"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <div className={css.formContainer}>
              <label className={css.valueDescr} htmlFor="amount">
                {t("enterSpendValue")}
              </label>
              <input
                className={css.formField}
                type="text"
                id="amount"
                name="amount"
                value={values.amount}
                onChange={handleAmountChange}
              />
              <ErrorMessage
                name="amount"
                component="div"
                style={{ color: "red" }}
              />
            </div>

            <button className={css.saveBtn} type="submit">
              {t("save")}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default EditSpendForm;
