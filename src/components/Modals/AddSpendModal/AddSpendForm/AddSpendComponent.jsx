// import { useEffect } from "react";
import css from "./AddSpendComponent.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddSpendForm = ({ amount }) => {
  // Схема валідації
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Це поле є обов'язковим")
      .min(2, "Мінімум 2 символи")
      .max(50, "Максимум 50 символів"),
    amount: Yup.number()
      .required("Введіть значення")
      .min(10, "Мінімальне значення 10")
      .max(500, "Максимальне значення 500"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        amount: amount.toString(),
      }}
      validationSchema={validationSchema}
      enableReinitialize // Дозволяє оновлення значень при зміні пропсів
      onSubmit={(values, { resetForm }) => {
        console.log("Введені дані:", values);
        resetForm();
      }}
    >
      {({ setFieldValue, values }) => {
        // Оновлюємо значення amount у формі при зміні пропсу amount
        () => {
          setFieldValue("amount", amount.toString());
        },
          [amount, setFieldValue];

        return (
          <Form>
            <div>
              <div className={css.formContainer}>
                <label className={css.formDescr} htmlFor="recordingTime">
                  Recording time:
                </label>
                <Field
                  className={css.formField}
                  type="text"
                  id="recordingTime"
                  name="recordingTime"
                  placeholder="7:00"
                />
                <ErrorMessage
                  name="recordingTime"
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
                  type="text"
                  id="amount"
                  name="amount"
                  value={values.amount} // Синхронізація з Formik state
                  readOnly // Забороняємо зміну вручну
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
