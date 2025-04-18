import css from "./SignInForm.module.css";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const SignInForm = () => {
  const validationSchema = yup.object({
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    gender: yup.string().required("Please select a gender"),
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
              placeholder="Enter your email"
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
              placeholder="Enter your password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className={css.error}
            />
          </div>

          <button type="submit" className={css.submitBtn}>
            Sign In
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
