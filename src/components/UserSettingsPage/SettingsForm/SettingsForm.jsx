import css from "./SettingsForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useTranslation } from "react-i18next";

const token = localStorage.getItem("token");

const SettingsForm = ({ selectedPhoto }) => {
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        maxDailySpending: "",
      }}
      onSubmit={async (values, { setSubmitting }) => {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("maxDailySpending", values.maxDailySpending);

        if (selectedPhoto) {
          formData.append("photo", selectedPhoto);
        }

        try {
          const response = await axios.patch(
            "http://localhost:3000/users/update",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log("✅ Response:", response.data);
        } catch (error) {
          console.error("❌ Error updating user:", error);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {() => (
        <Form className={css.settingsForm}>
          <div className={css.inputGroupName}>
            <label htmlFor="name">{t("yourName")}</label>
            <Field
              id="name"
              name="name"
              type="text"
              className={css.inputField}
            />
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>

          <div className={css.inputGroupEmail}>
            <label htmlFor="email">{t("email")}</label>
            <Field
              id="email"
              name="email"
              type="email"
              className={css.inputField}
            />
            <ErrorMessage name="email" component="div" className={css.error} />
          </div>

          <div className={css.inputGroupSpending}>
            <label htmlFor="maxDailySpending">{t("maxDailySpending")}</label>
            <Field
              id="maxDailySpending"
              name="maxDailySpending"
              type="text"
              className={css.inputField}
            />
            <ErrorMessage
              name="maxDailySpending"
              component="div"
              className={css.error}
            />
          </div>

          <button type="submit" className={css.submitBtn}>
            {t("save")}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SettingsForm;
