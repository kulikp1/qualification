import css from "./AddSpendComponent.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios"; // ✅ імпорт axios

const AddSpendForm = ({ amount, setAmount }) => {
  const validationSchema = Yup.object({
    amount: Yup.number()
      .required("Введіть значення")
      .min(10, "Мінімальне значення 10")
      .max(500, "Максимальне значення 500"),
  });

  const token = localStorage.getItem("token"); // або sessionStorage
  const todayDate = new Date().toISOString().slice(0, 10);

  return (
    <Formik
      initialValues={{
        amount: amount.toString(),
        category: "",
        recordingTime: "",
      }}
      validationSchema={validationSchema}
      enableReinitialize
      onSubmit={async (values, { resetForm }) => {
        console.log("Введені дані:", values);

        try {
          const response = await axios.post(
            "http://localhost:3000/money/",
            {
              value: Number(values.amount), // назва поля як у схемі
              time: values.recordingTime, // перейменував поле
              date: todayDate,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          console.log("✅ Успішно відправлено:", response.data);
          resetForm();
          setAmount(0);
        } catch (error) {
          console.error(
            "❌ Помилка при відправці:",
            error.response?.data || error.message
          );
        }
      }}
    >
      {({ values, setFieldValue }) => {
        const handleInputChange = (e) => {
          const newValue = e.target.value.replace(/\D/, "");
          setAmount(newValue ? parseInt(newValue) : 0);
          setFieldValue("amount", newValue);
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
                  onChange={handleInputChange}
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
