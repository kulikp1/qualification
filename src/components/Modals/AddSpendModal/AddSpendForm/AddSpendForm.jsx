// import React from "react";
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
          <label htmlFor="amount">Enter Amount:</label>
          <Field
            type="text"
            id="amount"
            name="amount"
            placeholder="Введіть ваше ім'я"
          />
          {/* Виведення помилки валідації */}
          <ErrorMessage
            name="amount"
            component="div"
            style={{ color: "red" }}
          />
        </div>
        {/* Кнопка для відправлення форми */}
        <button type="submit">Відправити</button>
      </Form>
    </Formik>
  );
};

export default AddSpendForm;
