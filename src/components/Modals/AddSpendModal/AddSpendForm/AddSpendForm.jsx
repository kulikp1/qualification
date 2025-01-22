import css from "./AddSpendForm.module.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddSpendForm = () => {
  // Визначення початкових значень форми
  const initialValues = {
    name: "", // Поле для введення тексту
  };

  // Схема валідації за допомогою Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Це поле є обов'язковим")
      .min(2, "Мінімум 2 символи")
      .max(50, "Максимум 50 символів"),
  });

  // Обробник відправлення форми
  const onSubmit = (values, { resetForm }) => {
    console.log("Введені дані:", values);
    resetForm(); // Скидає форму після відправлення
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        {/* Інпут для введення тексту */}
        <div>
          <div className={css.formContainer}>
            <label className={css.formDescr} htmlFor="amount">
              Recording time:
            </label>
            <Field
              className={css.formField}
              type="text"
              id="amount"
              name="amount"
              placeholder="7:00"
            />
            {/* Виведення помилки валідації */}
            <ErrorMessage
              name="amount"
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
              placeholder="250"
            />
            {/* Виведення помилки валідації */}
            <ErrorMessage
              name="amount"
              component="div"
              style={{ color: "red" }}
            />
          </div>
        </div>
        {/* Кнопка для відправлення форми */}
        <button className={css.saveBtn} type="submit">
          Save
        </button>
      </Form>
    </Formik>
  );
};

export default AddSpendForm;
