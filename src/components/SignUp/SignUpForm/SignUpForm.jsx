import css from "./SignUpForm.module.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const SignInForm = () => {
  const validationSchema = Yup.object({
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    gender: Yup.string().required("Please select a gender"),
  });

  return (
    <Formik
      initialValues={{
        password: "",
        email: "",
        gender: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Form Values:", values);
      }}
    >
      {() => (
        <Form className={css.signInFormContainer}>
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

          <div className={css.inputGroupPassword}>
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              type="password"
              className={css.inputField}
            />
            <ErrorMessage
              name="password"
              component="div"
              className={css.error}
            />
          </div>

          <div className={css.inputGroupPassword}>
            <label htmlFor="repeatPassword">Repeat password</label>
            <Field
              id="repeatPassword"
              name="repeatPassword"
              type="password"
              className={css.inputField}
            />
            <ErrorMessage
              name="repeatPassword"
              component="div"
              className={css.error}
            />
          </div>

          <button type="submit" className={css.submitBtn}>
            Sign Up
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
