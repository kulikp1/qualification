import css from "./EditSpendComponent.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import { useEffect } from "react";

const AddSpendForm = ({ amount, setAmount }) => {
  const initialValues = {
    name: "",
    amount: amount,
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Це поле є обов'язковим")
      .min(2, "Мінімум 2 символи")
      .max(50, "Максимум 50 символів"),
    amount: Yup.number()
      .required("Вкажіть суму")
      .min(1, "Сума повинна бути більше 0"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log("Введені дані:", values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({ values, setFieldValue }) => {
        // Використовуємо useEffect для оновлення значення при зміні amount
        () => {
          setFieldValue("amount", amount);
        },
          [amount, setFieldValue];

        return (
          <Form>
            <div>
              <div className={css.formContainer}>
                <label className={css.formDescr} htmlFor="amount">
                  Recording time:
                </label>
                <Field
                  className={css.formField}
                  type="text"
                  id="time"
                  name="time"
                  placeholder="7:00"
                />
                <ErrorMessage
                  name="time"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>

              <div className={css.formContainer}>
                <label className={css.valueDescr} htmlFor="amount">
                  Enter the value of spend:
                </label>
                <Field
                  className={css.formField}
                  type="number"
                  id="amount"
                  name="amount"
                  placeholder="250"
                  value={values.amount}
                  onChange={(e) => {
                    const newValue = Number(e.target.value);
                    setAmount(newValue);
                    setFieldValue("amount", newValue);
                  }}
                />
                <ErrorMessage
                  name="amount"
                  component="div"
                  style={{ color: "red" }}
                />
              </div>
            </div>
            <button className={css.saveBtn} type="submit">
              Save
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddSpendForm;
