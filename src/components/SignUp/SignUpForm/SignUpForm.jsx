import css from "./SignUpForm.module.css";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useState } from "react";

const SignUpForm = () => {
  const [serverError, setServerError] = useState("");

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    repeatPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Repeat password is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setServerError("");
    try {
      const { email, password } = values;
      const res = await axios.post("http://localhost:3000/auth/register", {
        email,
        password,
      });

      console.log("Registered:", res.data);
      // Якщо потрібно — збережи токен або виконай редірект
      // localStorage.setItem("token", res.data.token);
      resetForm();
      alert("Registration successful!");
    } catch (err) {
      if (err.response?.data?.message) {
        setServerError(err.response.data.message);
      } else {
        setServerError("Registration failed. Please try again.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        repeatPassword: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
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

          <div className={css.inputGroupPassword}>
            <label htmlFor="repeatPassword">Repeat password</label>
            <Field
              id="repeatPassword"
              name="repeatPassword"
              type="password"
              className={css.inputField}
              placeholder="Repeat password"
            />
            <ErrorMessage
              name="repeatPassword"
              component="div"
              className={css.error}
            />
          </div>

          {serverError && <div className={css.error}>{serverError}</div>}

          <button
            type="submit"
            className={css.submitBtn}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Registering..." : "Sign Up"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
