import css from "./SettingsForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

const SettingsForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        maxDailySpending: "",
      }}
      onSubmit={(values) => {
        console.log("Form Values:", values);
      }}
    >
      {() => (
        <Form className={css.settingsForm}>
          <div className={css.inputGroupName}>
            <label htmlFor="name">Your Name</label>
            <Field
              id="name"
              name="name"
              type="text"
              className={css.inputField}
            />
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>

          <div className={css.inputGroupEmail}>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              type="email"
              className={css.inputField}
            />
            <ErrorMessage name="email" component="div" className={css.error} />
          </div>

          <div className={css.inputGroupSpending}>
            <label htmlFor="maxDailySpending">Maximum Daily Spending</label>
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
            Save
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SettingsForm;
