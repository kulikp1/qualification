import css from "./AddSpendComponent.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddSpendForm = ({ amount, setAmount }) => {
  const validationSchema = Yup.object({
    amount: Yup.number()
      .required("Введіть значення")
      .min(10, "Мінімальне значення 10")
      .max(500, "Максимальне значення 500"),
  });

  return (
    <Formik
      initialValues={{ amount: amount.toString() }}
      validationSchema={validationSchema}
      enableReinitialize
      onSubmit={(values, { resetForm }) => {
        console.log("Введені дані:", values);
        resetForm();
      }}
    >
      {({ values, setFieldValue }) => {
        () => {
          setFieldValue("amount", amount.toString());
        },
          [amount, setFieldValue];

        const handleInputChange = (e) => {
          const newValue = e.target.value.replace(/\D/, ""); // Видаляємо всі нечислові символи
          setAmount(newValue ? parseInt(newValue) : 0); // Оновлюємо useState
          setFieldValue("amount", newValue); // Оновлюємо Formik
        };

        return (
          <Form>
            <div>
              <div className={css.formContainer}>
                <label className={css.valueDescr} htmlFor="category">
                  Enter Category
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
                  value={values.amount}
                  onChange={handleInputChange} // Додаємо обробник змін
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
