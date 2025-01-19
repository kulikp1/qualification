import css from "./SettingsForm.module.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const SettingsForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    gender: Yup.string().required("Please select a gender"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        gender: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Form Values:", values);
      }}
    >
      {() => (
        <Form className={css.settingsForm}>
          <div className={css.settingsController}>
            <h3 className={css.settingsControllerDescr}>
              Your gender identity
            </h3>
            <div role="group" className={css.radioGroup}>
              <label>
                <Field type="radio" name="gender" value="male" />
                Woman
              </label>
              <label>
                <Field type="radio" name="gender" value="female" />
                Man
              </label>
            </div>
            <ErrorMessage name="gender" component="div" className={css.error} />
          </div>

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

          <button type="submit" className={css.submitBtn}>
            Save
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SettingsForm;
